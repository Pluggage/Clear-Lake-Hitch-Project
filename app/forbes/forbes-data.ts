// Static data for the Forbes Creek detail page (ported from public/forbes.html).

export const surveyEvents: { dot: string; label: string; title: string; body: string }[] = [
  { dot: 'var(--lake)', label: 'March 2026: Field Visit', title: 'Site documentation', body: 'Project field visit to document creek mouth, road crossings, and pre-season conditions. 2026 spawn survey data pending. WPD program runs through spring.' },
  { dot: 'var(--green)', label: '2025 Season', title: 'Spawning confirmed: 1,567 lake-wide', body: 'Forbes confirmed active in the 2025 WPD survey. Lake-wide hitch count of 1,567, among the leading tributary years on record since the 2017 baseline began.' },
  { dot: 'var(--green)', label: 'April 18, 2024', title: 'Adult hitch confirmed', body: 'Lake County WPD documented adult hitch in Forbes Creek. One of 10 tributaries confirmed active in the 2024 program.' },
  { dot: 'var(--amber)', label: 'May 28, 2024', title: 'Flow cutoff (2024)', body: 'Forbes Creek flow ceased. About 40 days between adult confirmation and dry-down, a relatively narrow juvenile rearing window in that year.' },
]

export const infoCards: { variant: '' | 'grn' | 'amb' | 'red'; title: string; body: string }[] = [
  { variant: 'grn', title: '✓ 2025 Spawning Confirmed', body: 'Forbes confirmed active in the 2025 WPD survey. Lake-wide hitch count: 1,567, among the leading tributary seasons since baseline monitoring began in 2017.' },
  { variant: '', title: '📍 Location', body: '4.7-mile stream entering Clear Lake at Lakeport on the west shore. Passes through and near the Lake County seat before reaching the lake.' },
  { variant: 'amb', title: '⚠ Flow Cutoff Risk', body: 'Historic dry-downs (May 28 in 2024) compress the juvenile rearing window. In drought years, early cutoff can strand fish before they reach the lake.' },
  { variant: '', title: '👁 Most Accessible Survey Site', body: "Forbes Creek is one of the easiest hitch spawning tributaries for the public to observe safely, given its location near Lakeport's public areas." },
]

export const barriers: { tag: string; tagClass: 'good' | 'warn' | 'critical'; title: string; body: string }[] = [
  { tag: 'Concern', tagClass: 'warn', title: 'Urban and Peri-urban Passage', body: 'Forbes Creek crosses developed land and road infrastructure on its way to the lake. Road crossings and stormwater infrastructure may impede migration in some flow conditions.' },
  { tag: 'Concern', tagClass: 'warn', title: 'Flow Cutoff Risk', body: 'Historic dry-down (May 28 in 2024) narrows the juvenile rearing window. In drier years this can shorten further, potentially stranding fish before they emigrate to the lake.' },
  { tag: 'In Progress', tagClass: 'good', title: 'Active WPD Monitoring', body: 'Forbes Creek is an annual survey site in the Lake County WPD program. The 2025 confirmation (lake-wide count: 1,567) adds to the multi-year record. 2026 survey window is currently active.' },
]

export const survey: { year: string; status: string; badge?: string; statusClass: 'g' | 'a' | 'r'; count: string; notes: string }[] = [
  { year: '2025', status: 'Confirmed', statusClass: 'g', count: '1,567', notes: 'Forbes confirmed active in the 2025 WPD survey (lake-wide count 1,567)' },
  { year: '2024', status: 'Confirmed', statusClass: 'g', count: '1,042', notes: 'Adults confirmed Apr 18; flow cut off May 28' },
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
  { href: '/creek/manning', name: 'Manning Creek', sub: 'Active spawn · SW shore' },
  { href: '/adobe', name: 'Adobe Creek', sub: 'Historic #2 spawning stream' },
]
