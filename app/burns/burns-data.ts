// Static data for the Burns Valley Creek detail page (ported from public/burns.html).

export const infoCards: { variant: '' | 'grn' | 'amb' | 'red'; title: string; body: string }[] = [
  { variant: 'grn', title: '★ Standout 2024 Nursery', body: '~4,000 juvenile hitch and thousands of larvae confirmed by Lake County WPD in 2024. Also documented Sacramento blackfish juveniles, a healthy multi-species nursery.' },
  { variant: '', title: '📍 Location', body: 'Enters the Lower Arm of Clear Lake near the city of Clearlake. Drains the Burns Valley corridor SE of the lake.' },
  { variant: 'amb', title: '⚠ June 14 Flow Cutoff (2024)', body: 'Flow ceased June 14, 2024. Given the large juvenile population documented that year, the timing of cutoff relative to juvenile emigration readiness is critical.' },
  { variant: '', title: '🐟 Multi-Species Value', body: 'Sacramento blackfish juveniles were also documented alongside hitch in 2024, confirming Burns Valley supports multiple native species.' },
]

export const barriers: { tag: string; tagClass: 'good' | 'warn' | 'critical'; title: string; body: string }[] = [
  { tag: 'In Progress', tagClass: 'good', title: 'Strong 2024 Juvenile Output', body: '~4,000 juvenile hitch and thousands of larvae confirmed in 2024. This is one of the strongest juvenile production records in recent monitoring data for any tributary.' },
  { tag: 'Concern', tagClass: 'warn', title: 'Late-Season Flow Cutoff', body: "Flow ran out June 14, 2024. Juvenile hitch need adequate time to develop before they can successfully emigrate to the lake. A cutoff that's too early traps or strands juveniles." },
  { tag: 'Concern', tagClass: 'warn', title: 'Urban Proximity Pressures', body: 'Burns Valley Creek runs near the city of Clearlake. Urban runoff, stormwater management, and road crossings can affect water quality and flow continuity in the lower reach.' },
]

export const survey: { year: string; status: string; badge?: string; statusClass: 'g' | 'a' | 'r'; count: string; notes: string }[] = [
  { year: '2025', status: 'Surveyed', statusClass: 'g', count: '1,567', notes: 'Lake-wide spawner count; Burns in the WPD survey program' },
  { year: '2024', status: 'Juvenile nursery', statusClass: 'g', count: '1,042', notes: 'Burns documented ~4,000 juvenile hitch and thousands of larvae (Lake County WPD)' },
  { year: '2023', status: 'Record year', statusClass: 'g', count: '2,548 ★', notes: 'Lake-wide record after heavy winter rains' },
  { year: '2022', status: 'Drought', statusClass: 'a', count: '306', notes: 'Lake-wide drought year, marginal flow' },
  { year: '2021', status: 'Drought', statusClass: 'r', count: '120', notes: 'Catastrophic drought: tributaries ran dry' },
  { year: '2020', status: 'Not the host', statusClass: 'a', count: '1,672', notes: 'All 1,672 lake-wide hitch were in Kelsey Creek that year' },
  { year: '2019', status: 'Below average', statusClass: 'a', count: '612', notes: 'Kelsey was the primary stream that season' },
  { year: '2018', status: 'Active', statusClass: 'g', count: '1,153', notes: 'Adobe led lake-wide; Kelsey major contributor' },
  { year: '2017', status: 'Baseline', statusClass: 'g', count: '517', notes: 'First year of USGS baseline gillnet surveys' },
]

export const nearby = [
  { href: '/kelsey', name: 'Kelsey Creek', sub: '#1 active spawning tributary' },
  { href: '/creek/seigler-system', name: 'Seigler Canyon System', sub: 'SE shore · historical spawning' },
  { href: '/adobe', name: 'Adobe Creek', sub: 'Historic #2 spawning stream' },
]
