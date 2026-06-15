export type CreekStatus = 'active' | 'concern' | 'none'
export type TagVariant = 'active' | 'priority' | 'restore' | 'concern' | 'barrier' | 'none' | 'historical'

export interface Creek {
  href: string
  name: string
  /** lowercase search key (matches the old data-name attribute) */
  searchName: string
  status: CreekStatus
  location: string
  description: string
  tags: { label: string; variant: TagVariant }[]
}

/** The 8 priority tributaries shown in the hero mini-chart. */
export const priorityTributaries: { name: string; pct: number; bar: string; label: string; labelColor: string }[] = [
  { name: 'Kelsey Creek', pct: 95, bar: '#2d7a3a', label: 'Active', labelColor: '#6ee7b7' },
  { name: 'Adobe Creek', pct: 90, bar: '#2d7a3a', label: 'Active', labelColor: '#6ee7b7' },
  { name: 'Burns Valley', pct: 85, bar: '#2d7a3a', label: 'Active', labelColor: '#6ee7b7' },
  { name: 'Manning Creek', pct: 80, bar: '#2d7a3a', label: 'Active', labelColor: '#6ee7b7' },
  { name: 'Forbes Creek', pct: 75, bar: '#2d7a3a', label: 'Active', labelColor: '#6ee7b7' },
  { name: 'Cole Creek', pct: 60, bar: '#c87800', label: 'Restore', labelColor: '#fcd34d' },
  { name: 'Morrison Creek', pct: 50, bar: '#1a6fa8', label: 'Survey', labelColor: '#7fd8ff' },
  { name: 'Seigler System', pct: 30, bar: '#c0392b', label: 'Concern', labelColor: '#fca5a5' },
]

export const creeks: Creek[] = [
  {
    href: '/adobe', name: 'Adobe Creek', searchName: 'adobe creek', status: 'active',
    location: 'South shore, Big Valley',
    description: 'Historic #2 spawning stream, most frequented in 2016, 2018, 2022, 2023, 2025. Highland Creek joins upstream.',
    tags: [{ label: 'Active', variant: 'active' }, { label: 'Barriers', variant: 'barrier' }],
  },
  {
    href: '/alley-creek.html', name: 'Alley Creek', searchName: 'alley creek', status: 'none',
    location: 'N shore, Scotts Creek watershed',
    description: 'Joins Clover Creek before feeding into the Scotts Creek system. Part of the largest single freshwater input to Clear Lake via Rodman Slough.',
    tags: [{ label: 'Scotts feeder', variant: 'none' }],
  },
  {
    href: '/burns.html', name: 'Burns Valley Creek', searchName: 'burns valley creek', status: 'active',
    location: 'SE shore, rearing habitat',
    description: 'Rearing habitat: ~4,000 juvenile hitch and thousands of larvae documented in 2024. Major juvenile nursery on the SE shore.',
    tags: [{ label: 'Rearing habitat', variant: 'none' }, { label: 'Active 2024', variant: 'active' }],
  },
  {
    href: '/clover-creek.html', name: 'Clover Creek', searchName: 'clover creek', status: 'none',
    location: 'N shore, Middle Creek feeder',
    description: 'Joins Middle Creek before the combined flow enters Scotts Creek and Rodman Slough. Part of the Scotts watershed system.',
    tags: [{ label: 'Scotts feeder', variant: 'none' }],
  },
  {
    href: '/cole.html', name: 'Cole Creek', searchName: 'cole creek', status: 'concern',
    location: 'South shore, East of Kelsey',
    description: 'Funded restoration project: 1.55 miles of hitch spawning habitat. Downstream reach ran dry in 2024. USGS gauged (discharge + temp).',
    tags: [{ label: 'Restoration', variant: 'restore' }],
  },
  {
    href: '/cooper-creek.html', name: 'Cooper Creek', searchName: 'cooper creek', status: 'none',
    location: 'N shore, Scotts Creek feeder',
    description: 'Feeds into Scotts Creek on the north shore. Dayle Creek joins upstream. Part of the Rodman Slough watershed system.',
    tags: [{ label: 'Scotts feeder', variant: 'none' }],
  },
  {
    href: '/copsey.html', name: 'Copsey Creek', searchName: 'copsey creek', status: 'active',
    location: 'East shore, Seigler Canyon system',
    description: 'Adults confirmed March through May 2024, the most encouraging signal from the Seigler Canyon drainage in two decades.',
    tags: [{ label: 'Active 2024', variant: 'active' }, { label: 'Cache Creek system', variant: 'none' }],
  },
  {
    href: '/dayle-creek.html', name: 'Dayle Creek', searchName: 'dayle creek', status: 'none',
    location: 'N shore, Cooper Creek feeder',
    description: 'Feeds into Cooper Creek, which feeds Scotts Creek. Part of the broader Rodman Slough watershed on the north shore.',
    tags: [{ label: 'Scotts feeder', variant: 'none' }],
  },
  {
    href: '/forbes.html', name: 'Forbes Creek', searchName: 'forbes creek', status: 'active',
    location: 'West shore, Lakeport',
    description: '4.7-mile stream entering Clear Lake at Lakeport. Adults confirmed April 18, 2024. Flow cut off May 28, 2024.',
    tags: [{ label: 'Active 2024', variant: 'active' }],
  },
  {
    href: '/hendricks.html', name: 'Hendricks Creek', searchName: 'hendricks creek', status: 'active',
    location: 'N shore, Scotts Creek feeder',
    description: 'Adult hitch confirmed April 2, 2024 in Lake County WPD surveys. Feeds into Scotts Creek. Pool Creek joins upstream.',
    tags: [{ label: 'Active 2024', variant: 'active' }, { label: 'Scotts feeder', variant: 'none' }],
  },
  {
    href: '/highland-creek.html', name: 'Highland Creek', searchName: 'highland creek', status: 'none',
    location: 'South shore, Adobe Creek feeder',
    description: 'Joins Adobe Creek upstream in the south-shore drainage. Conditions in Highland directly affect the Adobe Creek spawning reach.',
    tags: [{ label: 'Adobe feeder', variant: 'none' }],
  },
  {
    href: '/hill.html', name: 'Hill Creek', searchName: 'hill creek', status: 'none',
    location: 'South shore, McGaugh feeder',
    description: 'No adults observed in 2024-2025. Upstream feeder to McGaugh Slough. Access requires McGaugh to connect to the lake first.',
    tags: [{ label: 'No fish 2024-25', variant: 'concern' }, { label: 'McGaugh feeder', variant: 'none' }],
  },
  {
    href: '/kelsey', name: 'Kelsey Creek', searchName: 'kelsey creek', status: 'active',
    location: 'South shore, Clear Lake State Park',
    description: 'In 2020 every single one of the 1,672 hitch observed lake-wide was here. The most critical active spawning tributary. USGS gauged.',
    tags: [{ label: '#1 Active', variant: 'active' }, { label: 'Barrier removal', variant: 'restore' }],
  },
  {
    href: '/lucerne.html', name: 'Lucerne Creek', searchName: 'lucerne creek', status: 'none',
    location: 'NE shore, rearing habitat',
    description: 'Rearing habitat near the town of Lucerne on the NE shore. Limited survey data, an NE shore monitoring gap.',
    tags: [{ label: 'Rearing habitat', variant: 'none' }],
  },
  {
    href: '/lyons.html', name: 'Lyons Creek', searchName: 'lyons creek', status: 'none',
    location: 'NW shore, Upper Arm',
    description: 'Listed in historical hitch habitat documentation as a spawning tributary. Limited recent survey coverage.',
    tags: [{ label: 'Historical spawn', variant: 'historical' }],
  },
  {
    href: '/manning.html', name: 'Manning Creek', searchName: 'manning creek', status: 'active',
    location: 'SW shore, Big Valley',
    description: 'CDFW confirmed adults 2024 and 2025. Thompson Creek was rerouted into Manning Creek, and both drain together to the lake.',
    tags: [{ label: 'Active 2024-25', variant: 'active' }],
  },
  {
    href: '/mcgaugh.html', name: 'McGaugh Slough', searchName: 'mcgaugh slough', status: 'none',
    location: 'South shore, between Manning & Adobe',
    description: 'No adults observed 2024-2025. Hill Creek joins upstream. Positioned between two active tributaries.',
    tags: [{ label: 'No fish 2024-25', variant: 'concern' }],
  },
  {
    href: '/middle-creek.html', name: 'Middle Creek', searchName: 'middle creek', status: 'none',
    location: 'N shore, Upper Lake, Scotts feeder',
    description: 'Flows through Upper Lake, joins Scotts Creek before Rodman Slough. UC Davis TERC flow monitoring. No water temp data.',
    tags: [{ label: 'Scotts feeder', variant: 'none' }, { label: 'UC Davis monitored', variant: 'none' }],
  },
  {
    href: '/morrison.html', name: 'Morrison Creek', searchName: 'morrison creek', status: 'none',
    location: 'NE shore, Upper Arm',
    description: 'Listed in USFWS Species Status Assessment as a historical hitch spawning tributary. NE shore monitoring gap.',
    tags: [{ label: 'Historical spawn', variant: 'historical' }],
  },
  {
    href: '/perini-creek.html', name: 'Perini Creek', searchName: 'perini creek', status: 'none',
    location: 'East shore, Seigler Canyon system',
    description: 'Feeds into Seigler Canyon Creek on the east shore. Part of the Cache Creek drainage. Historical spawning tributary.',
    tags: [{ label: 'Seigler system', variant: 'none' }, { label: 'Historical spawn', variant: 'historical' }],
  },
  {
    href: '/pool-creek.html', name: 'Pool Creek', searchName: 'pool creek', status: 'none',
    location: 'N shore, Hendricks Creek feeder',
    description: 'Feeds into Hendricks Creek, which feeds Scotts Creek. Part of the Rodman Slough watershed on the north shore.',
    tags: [{ label: 'Scotts feeder', variant: 'none' }],
  },
  {
    href: '/rodman-slough.html', name: 'Rodman Slough', searchName: 'rodman slough', status: 'active',
    location: 'North shore, largest inflow',
    description: 'Entry point for the entire Scotts Creek watershed. Scotts Creek (~24% of lake inflow, 30 miles) and Middle Creek enter the lake here.',
    tags: [{ label: 'Active', variant: 'active' }, { label: '~24% lake inflow', variant: 'none' }],
  },
  {
    href: '/rumsey.html', name: 'Rumsey Slough', searchName: 'rumsey slough', status: 'none',
    location: 'South shore, historic Thompson Creek channel',
    description: 'Enters between Manning and Adobe Creeks. Historic Thompson Creek channel once drained here before being rerouted into Manning.',
    tags: [{ label: 'Historic channel', variant: 'none' }],
  },
  {
    href: '/schindler.html', name: 'Schindler Creek', searchName: 'schindler creek', status: 'none',
    location: 'East end, rearing habitat in the Keys',
    description: 'Rearing habitat in the Clearlake Oaks Keys area. 2024 WPD survey site: no fish observed.',
    tags: [{ label: 'Rearing habitat', variant: 'none' }, { label: 'The Keys', variant: 'none' }],
  },
  {
    href: '/scotts-creek.html', name: 'Scotts Creek', searchName: 'scotts creek', status: 'active',
    location: 'N shore, Rodman Slough, largest stream',
    description: '30-mile watershed providing ~24% of all Clear Lake inflow. Enters via Rodman Slough. Hendricks, Cooper and feeder creeks join upstream.',
    tags: [{ label: 'Active', variant: 'active' }, { label: 'USGS + UC Davis gauged', variant: 'none' }],
  },
  {
    href: '/seigler-system.html', name: 'Seigler Canyon Creek', searchName: 'seigler canyon creek', status: 'concern',
    location: 'East shore, Cache Creek drainage',
    description: 'No confirmed adults at Seigler Canyon since ~2004. Copsey Creek (same system) confirmed adults March-May 2024.',
    tags: [{ label: 'No adults ~20 yrs', variant: 'concern' }, { label: 'Cache Creek system', variant: 'none' }],
  },
  {
    href: '/thompson.html', name: 'Thompson Creek', searchName: 'thompson creek', status: 'active',
    location: 'SW shore, Manning Creek feeder',
    description: 'CDFW confirmed adults 2024 and 2025. Rerouted from Rumsey Slough, it now feeds Manning Creek in the Big Valley corridor.',
    tags: [{ label: 'Active 2024-25', variant: 'active' }, { label: 'Manning feeder', variant: 'none' }],
  },
]
