#!/usr/bin/env python3
"""Build public/map-data/hydro.json from the USGS National Hydrography Dataset.

Run from the repo root: python3 scripts/build-map-data.py
"""
import json
import math
import time
import urllib.parse
import urllib.request

NHD = 'https://hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer/%d/query'
ENVELOPE = '-123.15,38.75,-122.40,39.35'
FLOWLINE_LAYER, WATERBODY_LAYER = 6, 12

# Site creek id -> (NHD name, GNIS ids to keep; None keeps all). Some names are
# shared with unrelated streams elsewhere in the envelope.
CREEKS = {
    'adobe': ('Adobe Creek', {'00256126'}),
    'alley-creek': ('Alley Creek', None),
    'burns': ('Burns Valley', None),
    'clover-creek': ('Clover Creek', None),
    'cole': ('Cole Creek', None),
    'cooper-creek': ('Cooper Creek', None),
    'copsey': ('Copsey Creek', None),
    'dayle-creek': ('Dayle Creek', None),
    'forbes': ('Forbes Creek', None),
    'hendricks': ('Hendricks Creek', None),
    'highland-creek': ('Highland Creek', None),
    'hill': ('Hill Creek', None),
    'kelsey': ('Kelsey Creek', None),
    'lyons': ('Lyons Creek', None),
    'manning': ('Manning Creek', None),
    'mcgaugh': ('McGaugh Slough', None),
    'middle-creek': ('Middle Creek', {'00234282'}),
    'morrison': ('Morrison Creek', {'00263845'}),
    'perini-creek': ('Perini Creek', None),
    'pool-creek': ('Pool Creek', None),
    'rumsey': ('Rumsey Slough', None),
    'schindler': ('Schindler Creek', None),
    'scotts-creek': ('Scotts Creek', None),
    'seigler-system': ('Seigler Canyon Creek', None),
    'thompson': ('Thompson Creek', None),
}
LAKES = {'lake': 'Clear Lake', 'thurston': 'Thurston Lake'}
LINE_TOLERANCE = 0.00012
LAKE_TOLERANCE = 0.00012


def query(layer, name):
    params = urllib.parse.urlencode({
        'where': "gnis_name='%s'" % name, 'geometry': ENVELOPE,
        'geometryType': 'esriGeometryEnvelope', 'inSR': 4326,
        'spatialRel': 'esriSpatialRelIntersects', 'outFields': 'gnis_id',
        'returnGeometry': 'true', 'outSR': 4326, 'f': 'geojson',
    })
    for attempt in range(3):
        try:
            with urllib.request.urlopen(NHD % layer + '?' + params, timeout=60) as r:
                return json.load(r)['features']
        except Exception:
            if attempt == 2:
                raise
            time.sleep(3)


def simplify(points, tolerance):
    """Douglas-Peucker on [lng, lat] points."""
    if len(points) < 3:
        return points
    keep = {0, len(points) - 1}
    stack = [(0, len(points) - 1)]
    while stack:
        start, end = stack.pop()
        (x1, y1), (x2, y2) = points[start][:2], points[end][:2]
        dx, dy = x2 - x1, y2 - y1
        length = math.hypot(dx, dy)
        best, index = 0, None
        for i in range(start + 1, end):
            x, y = points[i][:2]
            # A closed ring starts and ends at the same point, so measure to that point.
            distance = abs(dy * (x - x1) - dx * (y - y1)) / length if length else math.hypot(x - x1, y - y1)
            if distance > best:
                best, index = distance, i
        if index is not None and best > tolerance:
            keep.add(index)
            stack += [(start, index), (index, end)]
    return [points[i] for i in sorted(keep)]


def round_points(points):
    return [[round(p[1], 5), round(p[0], 5)] for p in points]  # [lat, lng]


def segment_distance(p, a, b):
    ax, ay, bx, by = a[1], a[0], b[1], b[0]
    dx, dy = bx - ax, by - ay
    t = 0 if not (dx or dy) else max(0, min(1, ((p[1] - ax) * dx + (p[0] - ay) * dy) / (dx * dx + dy * dy)))
    return math.hypot(p[1] - (ax + t * dx), p[0] - (ay + t * dy))


def distance_to_rings(p, rings):
    return min(segment_distance(p, r[i], r[i + 1]) for r in rings for i in range(len(r) - 1))


def inside(p, ring):
    y, x = p
    hit = False
    for i in range(len(ring) - 1):
        (y1, x1), (y2, x2) = ring[i], ring[i + 1]
        if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1:
            hit = not hit
    return hit


lakes = {}
for lake_id, name in LAKES.items():
    feature = query(WATERBODY_LAYER, name)[0]
    rings = feature['geometry']['coordinates']
    lakes[lake_id] = [round_points(simplify(r, LAKE_TOLERANCE)) for r in rings]
    print(name, sum(len(r) for r in lakes[lake_id]), 'points')

shore = lakes['lake']
creeks = {}
for creek_id, (name, ids) in CREEKS.items():
    features = [f for f in query(FLOWLINE_LAYER, name) if ids is None or f['properties']['gnis_id'] in ids]
    lines = []
    for f in features:
        geometry = f['geometry']
        parts = [geometry['coordinates']] if geometry['type'] == 'LineString' else geometry['coordinates']
        for part in parts:
            line = round_points(simplify(part, LINE_TOLERANCE))
            # Named NHD paths can continue across open water; drop those stretches.
            if len(line) > 1 and not all(inside(p, shore[0]) for p in line):
                lines.append(line)
    # NHD lines run downstream, so the creek ends at a line end that starts no
    # other line. The marker sits there: the lake entry or the confluence.
    starts = {tuple(line[0]) for line in lines}
    ends = [line[-1] for line in lines if tuple(line[-1]) not in starts]
    mouth = min(ends, key=lambda p: distance_to_rings(p, shore))
    creeks[creek_id] = {'lines': lines, 'mouth': mouth}
    print(creek_id, len(features), 'segments', mouth)
    time.sleep(0.3)

# Scotts and Middle Creek meet at the same point, so Middle's marker moves upstream.
middle = creeks['middle-creek']
middle['mouth'] = next(p for line in middle['lines'] for p in line
                       if 0.012 < math.hypot(p[0] - middle['mouth'][0], p[1] - middle['mouth'][1]) < 0.03)

# NHD has no named line for these two, so they get a shoreline marker only.
# The site flags both positions as approximate.
def nearest_shore(p):
    return min((q for ring in shore for q in ring), key=lambda q: math.hypot(q[0] - p[0], q[1] - p[1]))


creeks['rodman-slough'] = {'lines': [], 'mouth': nearest_shore(creeks['middle-creek']['mouth']), 'approximate': True}
creeks['lucerne'] = {'lines': [], 'mouth': nearest_shore([39.0911, -122.7944]), 'approximate': True}

with open('public/map-data/hydro.json', 'w') as out:
    json.dump({'source': 'USGS National Hydrography Dataset', 'lakes': lakes, 'creeks': creeks}, out, separators=(',', ':'))
