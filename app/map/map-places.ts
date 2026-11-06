import { creeks, type Creek } from '../creeks/creek-data'
import { mckd, mcitd, mzd } from './map-data'

export type Info = { t: string; tags?: string[]; b: string; s?: { l: string; v: string; c?: string }[] }
export type CreekMapStatus = 'active' | 'restoration' | 'concern' | 'other'
export type Selection = { kind: 'creek' | 'zone' | 'city'; id: string }

export const ZONES = mzd as Record<string, Info>
export const CITIES = mcitd as Record<string, Info>
const CREEK_INFO = mckd as Record<string, Info>

// Site creek id -> its entry in the map's survey data, where the ids differ.
const INFO_ID: Record<string, string> = {
  'rodman-slough': 'rodman',
  'scotts-creek': 'scotts_sys',
  'highland-creek': 'highland',
  'seigler-system': 'seigler_sys',
}

const PRIORITY = new Set(['kelsey', 'adobe', 'burns', 'manning', 'forbes', 'scotts-creek', 'cole', 'morrison', 'seigler-system'])

// Which side of the marker each always-visible label sits on.
export const LABEL_SIDE: Record<string, 'left' | 'right' | 'top' | 'bottom'> = {
  kelsey: 'top', cole: 'right', adobe: 'top', manning: 'bottom', forbes: 'top',
  'scotts-creek': 'top', morrison: 'right', burns: 'left', 'seigler-system': 'left',
}

// West-shore labels that collide on a phone until the map is zoomed in.
export const CROWDED_LABELS = new Set(['forbes', 'manning'])

export const creekId = (c: Creek) => c.href.split('/').pop()!

const statusOf = (c: Creek): CreekMapStatus => {
  if (c.status === 'active') return 'active'
  if (c.tags.some((t) => t.variant === 'restore')) return 'restoration'
  if (c.status === 'concern') return 'concern'
  return 'other'
}

export type MapCreek = { id: string; name: string; href: string; status: CreekMapStatus; priority: boolean; creek: Creek }

export const MAP_CREEKS: MapCreek[] = creeks.map((c) => ({
  id: creekId(c),
  name: c.name,
  href: c.href,
  status: statusOf(c),
  priority: PRIORITY.has(creekId(c)),
  creek: c,
}))

export const STATUS_COLOR: Record<CreekMapStatus, string> = {
  active: '#0f766e',
  restoration: '#b45309',
  concern: '#b91c1c',
  other: '#1d4ed8',
}

export const STATUS_LABEL: Record<CreekMapStatus, string> = {
  active: 'Active spawning',
  restoration: 'Restoration',
  concern: 'Concern',
  other: 'Other creek',
}

/** The side-panel card for a creek: its survey entry if it has one, else its creek-guide text. */
export function creekInfo(c: MapCreek): Info {
  const info = CREEK_INFO[INFO_ID[c.id] ?? c.id]
  if (info) return info
  return { t: c.name, b: c.creek.description, s: [{ l: 'Location', v: c.creek.location }] }
}

export const CITY_POINTS: Record<string, [number, number]> = {
  lakeport: [39.0432, -122.9141],
  nice: [39.1267, -122.8557],
  lucerne_town: [39.0713, -122.7676],
  clearlake_oaks: [39.021, -122.6621],
  kelseyville: [38.9669, -122.8354],
  clearlake_city: [38.9582, -122.6264],
  upper_lake: [39.1631, -122.9075],
}

export const GAUGE_POINT: [number, number] = [39.0390283, -122.9132977]

export const ARM_LABELS: { t: string; at: [number, number] }[] = [
  { t: 'Upper Arm', at: [39.1, -122.86] },
  { t: 'Oaks Arm', at: [39.0, -122.7] },
  { t: 'Lower Arm', at: [38.975, -122.67] },
]

export type SearchItem = { key: string; name: string; hint: string; selection: Selection }

export const SEARCH_ITEMS: SearchItem[] = [
  ...MAP_CREEKS.map((c) => ({ key: `creek-${c.id}`, name: c.name, hint: 'Creek', selection: { kind: 'creek', id: c.id } as Selection })),
  ...Object.keys(ZONES).map((id) => ({ key: `zone-${id}`, name: ZONES[id].t, hint: 'Lake', selection: { kind: 'zone', id } as Selection })),
  ...Object.keys(CITIES).map((id) => ({ key: `city-${id}`, name: CITIES[id].t, hint: 'Town', selection: { kind: 'city', id } as Selection })),
]

/** Word-start matches rank above matches inside a word. */
export function searchPlaces(query: string): SearchItem[] {
  const q = query.toLowerCase().trim()
  if (!q) return []
  const starts = (s: string) => s.toLowerCase().split(/[\s:,+'(]+/).some((w) => w.startsWith(q)) || s.toLowerCase().startsWith(q)
  const hits = SEARCH_ITEMS.filter((i) => i.name.toLowerCase().includes(q))
  return [...hits.filter((i) => starts(i.name)), ...hits.filter((i) => !starts(i.name))].slice(0, 8)
}
