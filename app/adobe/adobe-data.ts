// Static data for the Adobe Creek detail page (ported from public/adobe.html).
import type { PopPoint } from '@/components/creek/SpawnerTimeline'
import type { Photo } from '@/components/creek/PhotoLightbox'

export const popData: PopPoint[] = [
  { yr: 2013, count: 500, est: true, ctx: 'Drought era. Adobe ran low. Survey methods still being standardized.', color: '#c03030' },
  { yr: 2014, count: 1119, ctx: 'CA lists hitch as Threatened. Adobe among primary spawning streams.', color: '#7ec8e3' },
  { yr: 2016, count: 693, ctx: '★ Adobe led lake-wide spawning effort this season.', color: '#a0b8c8' },
  { yr: 2017, count: 517, ctx: 'Adobe active. First year of USGS baseline gillnet surveys.', color: '#7ec8e3' },
  { yr: 2018, count: 1153, ctx: '★ Adobe led; highest tributary count lake-wide this season.', color: '#7ec8e3' },
  { yr: 2019, count: 612, ctx: 'Kelsey primary stream; Adobe ran marginal. USGS catches down ~55% from 2017 baseline.', color: '#a0b8c8' },
  { yr: 2020, count: 1672, ctx: 'All 1,672 lake-wide hitch were in Kelsey exclusively; Adobe did not host a run.', color: '#d08040' },
  { yr: 2021, count: 120, ctx: 'Catastrophic drought. Only 120 spawners. Adobe Creek ran completely dry.', color: '#c03030' },
  { yr: 2022, count: 306, ctx: '★ Adobe among most active tributaries despite post-drought low lake-wide count.', color: '#d08040' },
  { yr: 2023, count: 2548, ctx: '★ Record year after heavy winter rains. Adobe among leading contributors.', color: '#00c853' },
  { yr: 2024, count: 1042, ctx: 'Adults confirmed at Adobe. Federal ESA listing proposed January 2025.', color: '#7ec8e3' },
  { yr: 2025, count: 1567, ctx: '★ Adobe confirmed leading tributary. 1,567 spawners recorded lake-wide.', color: '#7ec8e3' },
]

export const photos: Photo[] = [
  {
    thumb: '/images/adobe/adobe-spawning-activity-thumb.jpg', full: '/images/adobe/adobe-spawning-activity-large.jpg',
    tag: 'Spawn Run', title: 'Spawning Activity', sub: 'Hitch massing in Adobe Creek · Spring 2026',
    caption: 'A dense aggregation of hitch spawners visible through the clear water of Adobe Creek in spring 2026. Dozens of adults are visible holding position over gravel substrate, a strong indicator of active spawning behavior at this site.',
  },
  {
    thumb: '/images/adobe/adobe-wfd-survey-site-thumb.jpg', full: '/images/adobe/adobe-wfd-survey-site-large.jpg',
    tag: 'Survey Site', title: 'WFD Survey Site', sub: 'Adobe Creek monitoring point · Spring 2026',
    caption: 'The Lake County Water Resources Department survey site on Adobe Creek, photographed in spring 2026. A wooden livestock exclusion frame marks the survey transect. The creek runs clear with riparian reed grass lining both banks and valley oaks visible upstream.',
  },
  {
    thumb: '/images/adobe/adobe-lower-reach-thumb.jpg', full: '/images/adobe/adobe-lower-reach-large.jpg',
    tag: 'Lower Reach', title: 'Lower Reach', sub: 'Adobe Creek approaching Clear Lake · Spring 2026',
    caption: 'The lower reach of Adobe Creek in spring 2026, looking upstream from a bridge crossing. Flanked by riparian willows and cottonwoods just leafing out. A gravel bar is visible mid-channel, and the creek maintains clear, fishable flow at this point in the season.',
  },
  {
    thumb: '/images/adobe/adobe-dry-creek-thumb.jpg', full: '/images/adobe/adobe-dry-creek-large.jpg',
    tag: 'Drought', title: 'Dry Season Bed', sub: 'Adobe Creek below irrigation threshold',
    caption: "Adobe Creek's lower reach during low-flow conditions. The gravelly streambed is nearly completely exposed with white mineral deposits on the rocks. Seasonal drying is a recurring fish passage concern, as hitch require continuous flow from the lake to access upstream spawning habitat.",
  },
  {
    thumb: '/images/adobe/adobe-upstream-thumb.jpg', full: '/images/adobe/adobe-upstream-large.jpg',
    tag: 'Upper Watershed', title: 'Upstream Reach', sub: 'Adobe Creek in Big Valley · Spring 2026',
    caption: 'Looking upstream from the WFD survey site on Adobe Creek, spring 2026. The creek winds through open valley floor with rock-armored banks. Snow-dusted Mayacamas peaks are visible on the horizon, indicating the upper watershed was still receiving precipitation.',
  },
]

export const infoCards: { variant: '' | 'grn' | 'amb' | 'red'; title: string; body: string }[] = [
  { variant: 'grn', title: '2024 to 2025 Survey Status', body: 'Adult hitch confirmed at Adobe Creek in both CDFW visual surveys. Among the most active tributaries in each season.' },
  { variant: '', title: 'Location', body: 'Rises in the Mayacamas Mountains · flows through Big Valley agricultural land · enters Clear Lake on south shore near Kelseyville. Highland Creek joins upstream.' },
  { variant: 'amb', title: 'Multiple Passage Barriers', body: 'Several road crossings and culverts in the lower reach documented as fish passage barriers. Exact locations and severity under active assessment by LCWPD.' },
  { variant: '', title: 'Historic Rank', body: 'Most frequented tributary in 2016, 2018, 2022, 2023, and 2025. Only Kelsey Creek rivals Adobe for total spawning importance over the full survey record.' },
]

export const barriers: { tag: string; tagClass: 'good' | 'warn' | 'critical'; title: string; body: string }[] = [
  { tag: 'Concern', tagClass: 'warn', title: 'Multiple Documented Barriers', body: 'Adobe Creek has several road crossings and culverts in its lower reach that have been documented as fish passage barriers. These impede or delay hitch migration during low-flow periods.' },
  { tag: 'Concern', tagClass: 'warn', title: 'Agricultural Water Diversions', body: 'Big Valley agriculture draws from both surface water and groundwater in the Adobe Creek watershed. Diversions during the spawning window can reduce flows below migration thresholds.' },
  { tag: 'In Progress', tagClass: 'good', title: 'Active CDFW Monitoring', body: 'Adobe Creek is included in annual CDFW visual spawner surveys and Lake County WPD monitoring. Barrier assessment ongoing as part of the broader hitch recovery planning.' },
]

export const survey: { year: string; status: string; badge?: string; statusClass: 'g' | 'a' | 'r'; count: string; notes: string }[] = [
  { year: '2025', status: 'Confirmed', statusClass: 'g', count: '1,567', notes: 'Among leading tributaries' },
  { year: '2024', status: 'Confirmed', statusClass: 'g', count: '1,042', notes: 'Federal ESA listing proposed Jan 2025' },
  { year: '2023', status: 'Confirmed', statusClass: 'g', count: '2,548 ★', notes: 'Record year after heavy winter rains' },
  { year: '2022', status: 'Limited', statusClass: 'a', count: '306', notes: 'Drought year, marginal flow' },
  { year: '2021', status: 'Dry / near-zero', statusClass: 'r', count: '120', notes: 'Catastrophic drought: tributaries ran dry' },
  { year: '2020', status: 'Not observed', statusClass: 'a', count: '1,672', notes: 'All lake-wide hitch were in Kelsey Creek that year; Adobe ran low' },
  { year: '2019', status: 'Limited', statusClass: 'a', count: '612', notes: 'Kelsey primary stream; Adobe ran marginal that season' },
  { year: '2018', status: 'Active', statusClass: 'g', count: '1,153', notes: 'Adobe led; Kelsey major contributor' },
  { year: '2017', status: 'Active', statusClass: 'g', count: '517', notes: 'First year USGS baseline gillnet surveys; both creeks running' },
]

export const nearby = [
  { href: '/kelsey', name: 'Kelsey Creek', sub: '#1 active spawning tributary' },
  { href: '/creek/cole', name: 'Cole Creek', sub: 'Restoration project · east of Kelsey' },
  { href: '/creek/manning', name: 'Manning Creek', sub: 'Active spawn · SW shore' },
]
