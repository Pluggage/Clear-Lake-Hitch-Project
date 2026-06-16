// Static data for the Kelsey Creek detail page (ported from public/kelsey.html).
import type { Photo } from '@/components/creek/PhotoLightbox'

export interface PopPoint {
  yr: number
  count: number
  est?: boolean
  ctx: string
  color: string
}

/** Lake-wide spawner counts (same data/logic as the homepage timeline). */
export const popData: PopPoint[] = [
  { yr: 2013, count: 500, est: true, ctx: 'Drought era. Kelsey ran low. Survey methods still being standardized.', color: '#c03030' },
  { yr: 2014, count: 1119, ctx: 'CA lists hitch as Threatened. Kelsey among primary spawning streams.', color: '#7ec8e3' },
  { yr: 2016, count: 693, ctx: 'Kelsey and Adobe carry the bulk of the spawning effort.', color: '#a0b8c8' },
  { yr: 2017, count: 517, ctx: '★ Kelsey most frequented tributary. First year of USGS baseline gillnet surveys.', color: '#7ec8e3' },
  { yr: 2018, count: 1153, ctx: 'Adobe leads; Kelsey still a major contributor this season.', color: '#7ec8e3' },
  { yr: 2019, count: 612, ctx: '★ Kelsey most frequented again. USGS catches down ~55% from 2017 baseline.', color: '#a0b8c8' },
  { yr: 2020, count: 1672, ctx: '★★ PEAK: ALL 1,672 hitch observed lake-wide were in Kelsey exclusively. Zero adults at any other tributary.', color: '#00c853' },
  { yr: 2021, count: 120, ctx: 'Catastrophic drought. Only 120 spawners. Most tributaries ran completely dry.', color: '#c03030' },
  { yr: 2022, count: 306, ctx: 'Still in crisis. USGS gillnet at ~4% of 2017 baseline. Kelsey flow marginal.', color: '#d08040' },
  { yr: 2023, count: 2548, ctx: 'Record year after heavy winter rains. Kelsey among leading contributors.', color: '#00c853' },
  { yr: 2024, count: 1042, ctx: 'CDFW confirms adults at Kelsey. Federal ESA listing proposed January 2025.', color: '#7ec8e3' },
  { yr: 2025, count: 1567, ctx: 'CDFW confirms adults at Kelsey. 1,567 spawners recorded lake-wide.', color: '#7ec8e3' },
]

/** Field photo grid (in display order). Cards without a thumb render as placeholders. */
export const photos: Photo[] = [
  { thumb: '/images/kelsey/photo-1.jpg', tag: '2026 Season', title: 'Creek Mouth', sub: 'Entry at Clear Lake State Park' },
  { thumb: '/images/kelsey/photo-2.jpg', tag: 'Barrier', title: 'Main Street Crossing', sub: 'Barrier reach · Kelseyville' },
  { thumb: null, tag: 'USGS Site', title: 'USGS Gauge Station', sub: 'Stn. 11449500 · continuous flow' },
  { thumb: '/images/kelsey/photo-3.jpg', tag: 'Barrier', title: 'Fish Ladder / Barrier', sub: 'Known passage obstacle · in-stream' },
  { thumb: null, tag: 'Big Valley', title: 'Big Valley Reach', sub: 'Agricultural corridor · upstream' },
  { thumb: '/images/kelsey/photo-4.jpg', tag: 'Spawn Run', title: 'Spawning Activity', sub: 'Adults visible in shallows · spring run' },
]

export const infoCards: { variant: '' | 'grn' | 'amb' | 'red'; title: string; body: string }[] = [
  { variant: 'grn', title: '✓ 2024 to 2025 Survey Status', body: 'Adult hitch confirmed at Kelsey Creek in both CDFW visual surveys. Among the leading active tributaries each season.' },
  { variant: '', title: '📍 Location', body: 'Rises in western Mayacamas Mountains · flows through Kelseyville and Big Valley · enters Clear Lake at Clear Lake State Park, south shore.' },
  { variant: '', title: '🔬 Monitoring Infrastructure', body: 'USGS streamflow gauge (11449500) · HOBO temperature loggers · CDFW annual visual surveys · LCWPD community science program.' },
  { variant: 'amb', title: '⚠ Groundwater Pressure', body: 'Big Valley Basin pumping can rapidly dry the lower creek during spawning season. CA State Water Board issued 2024 monitoring orders for major pumpers.' },
]

export const barriers: { tag: string; tagClass: 'good' | 'warn' | 'critical'; title: string; body: string }[] = [
  { tag: 'In Progress', tagClass: 'good', title: 'Main Street Barrier Removal', body: 'The Main Street crossing in downtown Kelseyville is a documented migration barrier. A removal project is underway. When complete, it will open additional upstream spawning habitat and reduce delay-related mortality.' },
  { tag: 'Monitoring Orders 2024', tagClass: 'warn', title: 'Big Valley Groundwater Pumping', body: 'Agricultural pumping in the Big Valley Basin can rapidly dry the lower creek during spawning and rearing windows. The CA State Water Board issued 2024 reporting orders for major pumpers, a first step toward regulatory protection.' },
  { tag: 'Critical Risk', tagClass: 'critical', title: 'Late-Season Flow Cutoff', body: 'In 2021, catastrophic drought left only 120 hitch lake-wide as tributaries ran dry. Juveniles rearing in the creek were stranded when flow ceased. The Hitch Rescue Team responds to these events. Always call (707) 263-2344 if you spot stranded fish.' },
]

export const survey: { year: string; status: string; badge?: string; statusClass: 'g' | 'a' | 'r'; count: string; notes: string }[] = [
  { year: '2025', status: 'Confirmed', statusClass: 'g', count: '1,567', notes: 'Among leading tributaries' },
  { year: '2024', status: 'Confirmed', statusClass: 'g', count: '1,042', notes: 'Federal ESA listing proposed Jan 2025' },
  { year: '2023', status: 'Confirmed', statusClass: 'g', count: '2,548 ★', notes: 'Record year after heavy winter rains' },
  { year: '2022', status: 'Limited', statusClass: 'a', count: '306', notes: 'Drought year, marginal flow' },
  { year: '2021', status: 'Dry / near-zero', statusClass: 'r', count: '120', notes: 'Catastrophic drought: tributaries ran dry' },
  { year: '2020', status: 'ALL 1,672 here', badge: '★★ Kelsey only', statusClass: 'g', count: '1,672', notes: 'Every hitch observed lake-wide was in Kelsey' },
  { year: '2019', status: 'Most frequented', badge: '★', statusClass: 'g', count: '612', notes: 'Kelsey primary stream that season' },
  { year: '2018', status: 'Active', statusClass: 'g', count: '1,153', notes: 'Adobe led; Kelsey major contributor' },
  { year: '2017', status: 'Most frequented', badge: '★', statusClass: 'g', count: '517', notes: 'First year USGS baseline gillnet surveys' },
]

export const nearby = [
  { href: '/creek/cole', name: 'Cole Creek', sub: 'Restoration · 1.55 mi' },
  { href: '/adobe', name: 'Adobe Creek', sub: 'Historic #2 spawning stream' },
  { href: '/creek/manning', name: 'Manning Creek', sub: 'Active spawn · Big Valley' },
]
