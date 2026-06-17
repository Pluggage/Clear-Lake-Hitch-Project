// Archive entries — extracted verbatim from public/archive.html.
export interface ArchiveEntry {
  title: string
  year: number
  source: string
  agency?: string
  summary: string
  takeaways: string[]
  tags: string[]
  locations?: string[]
  url: string
}

export const ARCHIVE: ArchiveEntry[] = [

  /* ─────────────────────────────────────────
     LAKE COUNTY WATERSHED PROTECTION DISTRICT
  ───────────────────────────────────────── */
  {
    title: "District 2025 Visual Spawner Surveys of Clear Lake Hitch on Clear Lake Tributaries",
    year: 2025,
    source: "Lake County Watershed Protection District, Taylor Woodruff & Chris Childers",
    agency: "LCWPD",
    summary: "Second year of the District's annual CLH visual spawner program, covering 14 sites on 10 tributaries (Feb 20 to May 30, 2025). Documented 266 adult hitch at Forbes and Copsey creeks, a large increase over the 23 observed in 2024, and thousands of larval fish across most monitored tributaries.",
    takeaways: [
      "266 adult hitch observed: 209 at Forbes Creek (peak 150 on March 27) and 57 at Copsey Creek (peak 51 on April 11)",
      "Forbes Creek spawning season began 22 days earlier and lasted 22 days longer than in 2024, with 203 more individuals",
      "No adult hitch observed at Burns Valley, Highland, Perini, Pool, Schindler, Scotts, or Seigler Canyon in either 2024 or 2025",
      "20 black bass documented in Copsey Creek; multiple males observed aggressively disrupting spawning hitch on nesting beds",
      "7,623 larval/YOY fish observed; Pool Creek had zero fish for the second consecutive year, possible passage barrier confirmed",
      "Streamflow disconnections at Forbes and Schindler on May 21; continuous flow at Forbes likely aided juvenile emigration to the lake",
      "Findings suggest hitch may not spawn annually in all tributaries, less opportunistic behavior than previously assumed"
    ],
    tags: ["spawning","monitoring","population","tributaries","larvae","juveniles","bass predation","fish passage","2025"],
    locations: ["forbes","scotts_sys","seigler_sys","burns","schindler"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15454"
  },
  {
    title: "Community Science 2025 Visual Spawner Surveys of Clear Lake Hitch on Clear Lake Tributaries",
    year: 2025,
    source: "Lake County Watershed Protection District, Taylor Woodruff & Chris Childers",
    agency: "LCWPD",
    summary: "First year of the District's community science CLH spawner program, deploying 33 trained volunteers across 36 fixed sites on 26 tributaries from March 9 through May 17, 2025. Community scientists collectively observed 3,347 adult hitch, the most geographically comprehensive single-season spawner survey in the program's history.",
    takeaways: [
      "3,347 adult hitch observed at 9 tributaries: Adobe (3,095), Alley (9), Clover/Diversion (99), Forbes (16), Kelsey (25), Manning (52), Seigler Canyon (5), Thompson (46)",
      "Adobe Creek dominant: site 2 at Big Valley Rd recorded 2,055 adults including back-to-back 1,000-fish counts on March 25 and April 8",
      "33 community scientists trained in two workshops (Feb 27 and March 5, 2025); three private property sites added via landowner commitment",
      "No hitch observed at Burns Valley, Clayton, Cole, Cooper, Dayle, Hill, Lucerne, Lyons, McGaugh, Middle, Molesworth, Morrison, or Scotts creeks",
      "Data quality-controlled by District staff; observations fed into the Clear Lake Hitch Data Synthesis Team's watershed-wide population model",
      "First documented use of community science at this scale for CLH, extends geographic coverage far beyond what District staff can survey alone"
    ],
    tags: ["spawning","community science","monitoring","adobe","kelsey","manning","tributaries","2025","citizen science"],
    locations: ["adobe","kelsey","manning","thompson","forbes","cole","seigler_sys","scotts_sys"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15455"
  },
  {
    title: "District 2024 Visual Spawner Surveys of Clear Lake Hitch on Clear Lake Tributaries",
    year: 2024,
    source: "Lake County Watershed Protection District, Taylor Woodruff",
    agency: "LCWPD",
    summary: "First year of the District's annual CLH visual spawner survey program, monitoring 14 sites on 10 tributaries from March 20 through July 18, 2024. Confirmed adult hitch at three tributaries and documented large juvenile cohorts in Burns Valley Creek.",
    takeaways: [
      "23 adult hitch observed: Copsey Creek (Mar to May), Forbes Creek (Apr 18), Hendricks Creek (Apr 2)",
      "Approximately 4,000 juvenile hitch and Sacramento blackfish observed in Burns Valley Creek",
      "4,554 total larvae/YOY counted across all surveyed tributaries",
      "Seigler Canyon Creek has had no confirmed adults since approximately 2004",
      "Pool Creek had zero fish observed, potential passage barrier flagged for investigation",
      "Schindler Creek site SCH_01 discontinued due to poor visibility; relocated upstream for 2025"
    ],
    tags: ["spawning","monitoring","population","tributaries","juveniles","larvae","burns valley","2024"],
    locations: ["forbes","burns","seigler_sys","schindler"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15453"
  },

  /* ─────────────────────────────────────────
     CDFW: VISUAL SPAWNER SURVEYS
  ───────────────────────────────────────── */
  {
    title: "2025 Clear Lake Hitch Visual Surveys on Clear Lake Tributaries",
    year: 2025,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "CDFW's 2025 annual visual spawner survey covering primary spawning tributaries including Adobe, Kelsey, and Manning creeks. Combined with District and Community Science data, the 2025 total reached 1,567 spawners, a solid year above recent low points, though well below the 2023 record.",
    takeaways: [
      "Adobe and Kelsey Creeks led as primary spawning sites in 2025",
      "Combined 2025 watershed-wide total: ~1,567 adult spawners (all programs combined)",
      "Results consistent with District and Community Science surveys, multiple crews confirming the same pattern",
      "Data contributed to the Clear Lake Hitch Data Synthesis Team's relative population estimate"
    ],
    tags: ["spawning","population","monitoring","adobe","kelsey","tributaries","2025"],
    locations: ["adobe","kelsey","manning"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15223"
  },
  {
    title: "2024 Clear Lake Hitch Visual Surveys on Clear Lake Tributaries",
    year: 2024,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "CDFW's 2024 spawner survey documenting 1,042 adult hitch across Clear Lake tributaries. Despite adequate rainfall and a high in-lake CDFW capture rate, spawner counts were lower than expected, a finding that informed the hypothesis that hitch may not rely on tributaries for spawning every year.",
    takeaways: [
      "1,042 adult hitch observed, lower than expected given adequate rainfall and strong in-lake survey numbers",
      "High in-lake captures during concurrent CDFW mark-recapture survey suggested larger lake population than tributary counts implied",
      "Finding raised hypothesis that hitch exhibit less annual tributary spawning dependency than previously assumed",
      "Federal ESA listing proposed in January 2025 following submission of this season's data"
    ],
    tags: ["spawning","population","monitoring","tributaries","2024","CDFW"],
    locations: ["adobe","kelsey","manning"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15224"
  },
  {
    title: "2023 Clear Lake Hitch Visual Surveys on Clear Lake Tributaries",
    year: 2023,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Documents the record 2023 spawning season in which 2,548 adult hitch were observed, the highest count in the history of the monitoring program. The surge followed three consecutive drought years (2020 to 2022) that severely depressed spawning activity.",
    takeaways: [
      "2,548 adult hitch, all-time record for CDFW visual spawner surveys",
      "Recovery driven by record winter 2022-23 rainfall that restored tributary flows",
      "Multi-tributary use confirmed, with several creeks active that had been dry or disconnected in prior years",
      "Record count followed the February 2023 Lake County emergency declaration, a consequential but coincidental sequence"
    ],
    tags: ["spawning","population","record","recovery","rainfall","2023"],
    locations: ["adobe","kelsey","manning","forbes"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15225"
  },
  {
    title: "2022 Clear Lake Hitch Visual Surveys on Clear Lake Tributaries",
    year: 2022,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Documents the second consecutive crisis-level spawning season with only 306 adult hitch observed, a small recovery from 2021's catastrophic 120-fish low but still over 88% below the 2020 count.",
    takeaways: [
      "306 adult hitch observed, second consecutive drought-year crash",
      "Continued tributary dewatering prevented access to most historical spawning habitat",
      "Lake County emergency declaration in February 2023 followed directly from this and 2021 data",
      "USGS gillnet data simultaneously showed ~4% of 2017 baseline in-lake abundance"
    ],
    tags: ["spawning","drought","population","crisis","2022"],
    locations: ["kelsey","adobe"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15226"
  },
  {
    title: "2021 Clear Lake Hitch Visual Surveys on Clear Lake Tributaries",
    year: 2021,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Documents the lowest single-year spawner count in CDFW survey history: only 120 adult hitch observed. A catastrophic drought-induced crash following the strong 2020 season of 1,672 spawners, a 93% year-over-year decline.",
    takeaways: [
      "120 adult hitch, lowest count in CDFW survey history; 93% crash from 2020",
      "Sustained drought caused nearly all spawning tributaries to dry before hitch could complete migration",
      "Near-complete spawning failure, minimal recruitment expected from this cohort",
      "Triggered escalating conservation concern that led to the 2023 Lake County emergency declaration"
    ],
    tags: ["spawning","drought","population","crisis","2021","catastrophic decline"],
    locations: ["kelsey","adobe"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15227"
  },
  {
    title: "2020 Clear Lake Hitch Visual Surveys on Clear Lake Tributaries",
    year: 2020,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Documents the strongest spawning season since surveys began, with 1,672 adult hitch observed, all concentrated in Kelsey Creek. A notable single-tributary dominance event suggesting Kelsey was the only tributary with adequate flow that year.",
    takeaways: [
      "1,672 adult hitch, best season in over a decade at time of survey",
      "All 1,672 fish were observed exclusively in Kelsey Creek. No other tributary had adequate flow",
      "Single-creek concentration raises concern about redundancy: if Kelsey fails, the entire spawning run fails",
      "Immediately preceded the 2021 crash. The contrast underscores the population's volatility under drought conditions"
    ],
    tags: ["spawning","population","kelsey","single-tributary","2020","flow"],
    locations: ["kelsey"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15228"
  },
  {
    title: "2019 Clear Lake Hitch Visual Surveys on Clear Lake Tributaries",
    year: 2019,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Below-average year with 612 adult hitch observed. USGS gillnet data from the same year showed catches already ~55% below the 2017 baseline, suggesting the in-lake population decline was already underway.",
    takeaways: [
      "612 adult hitch observed, below 10-year average",
      "Concurrent USGS gillnet survey showed ~55% decline from 2017 baseline",
      "Multiple tributaries active but at lower densities than 2018",
      "Strontium isotope study published same year confirmed ephemeral tributary use patterns"
    ],
    tags: ["spawning","population","2019","decline"],
    locations: ["kelsey","adobe","manning"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15229"
  },
  {
    title: "2018 Clear Lake Hitch Visual Surveys on Clear Lake Tributaries",
    year: 2018,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Strong year with 1,153 adult hitch observed. Adobe Creek was the most frequented tributary. USGS gillnet surveys had just launched the prior year, providing the first systematic in-lake abundance baseline.",
    takeaways: [
      "1,153 adult hitch, strong season, second only to 2020 at that point",
      "Adobe Creek was the most frequently used spawning tributary in 2018",
      "First year of concurrent USGS gillnet monitoring providing in-lake context",
      "PIT tagging studies underway at Kelsey and Adobe to track migration timing"
    ],
    tags: ["spawning","population","adobe","2018"],
    locations: ["adobe","kelsey"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15230"
  },
  {
    title: "2017 Clear Lake Hitch Visual Surveys on Clear Lake Tributaries",
    year: 2017,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Baseline year for modern monitoring with 517 adult hitch observed. The concurrent launch of USGS gillnet surveys established the quantitative in-lake abundance benchmark against which the subsequent 96% decline was measured.",
    takeaways: [
      "517 adult hitch observed, establishes the modern visual survey baseline alongside USGS gillnet program launch",
      "USGS gillnet catch in 2017 became the reference '100%' value against which all future years are compared",
      "Multiple tributaries active across the watershed",
      "PIT tagging program at Kelsey and Adobe entering its final year"
    ],
    tags: ["spawning","population","baseline","2017","USGS"],
    locations: ["kelsey","adobe"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15231"
  },
  {
    title: "2016 Clear Lake Hitch Visual Surveys on Clear Lake Tributaries",
    year: 2016,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "693 adult hitch observed. Adobe Creek was again the most frequently used spawning tributary. PIT tagging program active at Kelsey and Adobe.",
    takeaways: [
      "693 adult hitch, moderate year",
      "Adobe Creek most frequently used tributary for second consecutive year",
      "PIT tagging data from 2016 used in movement and habitat studies",
      "No major flow disruptions reported for primary spawning tributaries"
    ],
    tags: ["spawning","population","2016","adobe"],
    locations: ["adobe","kelsey"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15232"
  },
  {
    title: "2014 Clear Lake Hitch Visual Surveys on Clear Lake Tributaries",
    year: 2014,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "1,119 adult hitch observed in the same year the hitch was formally listed as threatened under the California ESA. Active PIT tagging program at Kelsey and Adobe creeks.",
    takeaways: [
      "1,119 adult hitch, strong season coinciding with the year of CA threatened listing",
      "CESA threatened listing took effect August 2014 following the formal status review",
      "PIT tagging program active; data from this year contributed to migration timing and habitat use studies",
      "Fish rescue operations documented at Adobe and Cooper creeks this season"
    ],
    tags: ["spawning","population","2014","CESA listing","PIT tagging"],
    locations: ["adobe","kelsey"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15233"
  },

  /* ─────────────────────────────────────────
     CDFW: RELATIVE POPULATION ESTIMATES
  ───────────────────────────────────────── */
  {
    title: "2025 Clear Lake Hitch Relative Population Estimate: Clear Lake",
    year: 2025,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Annual mark-recapture based estimate of the Clear Lake hitch population within Clear Lake itself, using standardized gillnet surveys. Provides the in-lake abundance index to complement the tributary-based spawner counts.",
    takeaways: [
      "In-lake population estimate conducted using mark-recapture methodology",
      "Results compared against 2024 and 2023 estimates to track post-record-year trend",
      "Data shared with the Clear Lake Hitch Data Synthesis Team for integrated watershed population model",
      "In-lake abundance does not always track tributary spawner counts. The two measures assess different life stages"
    ],
    tags: ["population","mark-recapture","in-lake","abundance estimate","2025","CDFW"],
    locations: ["lake"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15234"
  },
  {
    title: "2024 Clear Lake Hitch Relative Population Estimate: Clear Lake",
    year: 2024,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "In-lake mark-recapture population estimate for 2024. High capture rates relative to low tributary spawner counts that year raised the hypothesis that the hitch population does not uniformly rely on annual tributary spawning.",
    takeaways: [
      "High in-lake captures despite unexpectedly low 2024 tributary spawner counts (1,042)",
      "Suggests a portion of the population may overwinter or reproduce non-annually, important implication for management",
      "Mark-recapture data contributed to the Data Synthesis Team's cross-program population model",
      "Precedes proposed federal ESA listing in January 2025"
    ],
    tags: ["population","mark-recapture","in-lake","abundance estimate","2024"],
    locations: ["lake"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15235"
  },
  {
    title: "2022 Clear Lake Hitch Relative Population Estimate: Clear Lake",
    year: 2022,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "In-lake population estimate conducted during the second consecutive drought-crisis year. Cross-referenced with USGS gillnet data showing ~4% of 2017 baseline, confirming a catastrophic population collapse in-lake as well as in tributaries.",
    takeaways: [
      "In-lake estimates confirmed extremely low hitch abundance consistent with USGS gillnet crash data",
      "~4% of 2017 in-lake baseline per USGS, further supported by CDFW data from the same period",
      "Combined with 306 tributary spawners, 2022 data formed the quantitative basis for the February 2023 emergency declaration",
      "Tribal monitoring teams from Robinson Rancheria, Habematolel Pomo, and Big Valley Rancheria contributed to survey effort"
    ],
    tags: ["population","mark-recapture","in-lake","crisis","drought","2022"],
    locations: ["lake"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15236"
  },
  {
    title: "2021 Clear Lake Hitch Relative Population Estimate: Clear Lake",
    year: 2021,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "In-lake mark-recapture survey during the 2021 catastrophic drought year. Combined with only 120 tributary spawners, this dataset represented the lowest point in the documented history of the hitch population.",
    takeaways: [
      "Lowest in-lake abundance estimates in program history, consistent with 120-fish tributary count",
      "Nearly complete recruitment failure in 2021 meant minimal juvenile input to the lake population that year",
      "USGS gillnet data from 2021 showed ~14% of 2017 baseline, slightly higher than 2022's 4%",
      "Precipitated urgent multi-agency conservation response and accelerated federal listing petition"
    ],
    tags: ["population","mark-recapture","in-lake","drought","crisis","2021"],
    locations: ["lake"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15237"
  },
  {
    title: "2020 Clear Lake Hitch Relative Population Estimate: Clear Lake",
    year: 2020,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "In-lake population estimate from the strong 2020 spawning season. All 1,672 tributary spawners were observed in Kelsey Creek, and this estimate captures the in-lake cohort that season produced.",
    takeaways: [
      "Stronger in-lake abundance consistent with the 1,672 Kelsey Creek tributary count",
      "Single-creek dependency in 2020 (Kelsey only) is significant. One infrastructure failure or low-flow event could collapse the entire cohort",
      "Kelsey Creek Main Street barrier removal project context: fish blocked below barrier that year contributed to congregation",
      "Immediately precedes the 2021 collapse. This cohort was the last normal-year class before the drought crisis"
    ],
    tags: ["population","mark-recapture","in-lake","kelsey","2020"],
    locations: ["lake","kelsey"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15238"
  },
  {
    title: "2019 Clear Lake Hitch Relative Population Estimate: Clear Lake",
    year: 2019,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "In-lake mark-recapture estimate from 2019, a below-average year with 612 tributary spawners. USGS gillnet data simultaneously showed catches ~55% below the 2017 baseline.",
    takeaways: [
      "In-lake estimates consistent with 612 tributary spawner count and declining USGS gillnet trend",
      "2019 was the last year of the pre-drought baseline period before conditions deteriorated sharply",
      "Concurrent strontium isotope study confirmed which tributaries contributed most to lake recruitment",
      "Data contributed to USFWS Species Status Assessment used in 2025 federal listing proposal"
    ],
    tags: ["population","mark-recapture","in-lake","2019","baseline"],
    locations: ["lake"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15239"
  },
  {
    title: "2019 Clear Lake Hitch Relative Population Estimate: Thurston Lake",
    year: 2019,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Population survey of the Clear Lake hitch subpopulation in Thurston Lake, a hydrologically isolated waterbody that supports a genetically distinct, conservation-critical refuge population. Thurston Lake is treated as a separate demographic unit by USFWS.",
    takeaways: [
      "Thurston Lake hitch population described as 'robust' in 2020 USGS assessment",
      "Complete hydrological isolation from Clear Lake means this population is not subject to the same lake-level and tributary flow pressures",
      "Treated as a distinct demographic unit in USFWS Species Status Assessment and federal listing proposal",
      "Critical redundancy: if the Clear Lake population collapses, Thurston Lake may be the last refuge"
    ],
    tags: ["population","thurston lake","isolated population","refuge","mark-recapture","2019"],
    locations: ["thurston"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15243"
  },
  {
    title: "2013 Clear Lake Hitch Relative Population Estimate: Cole and Kelsey Creeks",
    year: 2013,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Early mark-recapture survey focused specifically on Cole and Kelsey Creek populations, prior to the establishment of the full lake-wide monitoring program. Provides the earliest standardized baseline for these two critical southern tributaries.",
    takeaways: [
      "Pre-state-listing baseline for Kelsey and Cole Creek populations",
      "Kelsey Creek has historically been the most important spawning tributary. This survey established early reference counts",
      "Cole Creek Restoration Project now aims to restore 1.55 miles of habitat adjacent to Kelsey",
      "Data contributed to the 2014 CESA status review and threatened listing determination"
    ],
    tags: ["population","mark-recapture","kelsey","cole","baseline","2013"],
    locations: ["kelsey","cole"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15262"
  },

  /* ─────────────────────────────────────────
     CDFW: PIT TAGGING STUDIES
  ───────────────────────────────────────── */
  {
    title: "Clear Lake Hitch PIT Tagging Study at Kelsey and Adobe Creeks: 2017",
    year: 2017,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Final year of the four-year PIT tagging study at Kelsey and Adobe creeks. Tracked individual hitch movement, migration timing, and tributary fidelity using passive integrated transponder tags, the most direct method for monitoring individual spawning behavior.",
    takeaways: [
      "Final year of 2014 to 2017 PIT tagging program at Kelsey and Adobe",
      "Individual fish tracking confirmed spawning site fidelity: hitch return to the same tributary in successive years",
      "Migration timing data used to calibrate visual survey scheduling in subsequent years",
      "Results contributed to USFWS Species Status Assessment habitat use analysis"
    ],
    tags: ["PIT tagging","spawning","migration","kelsey","adobe","individual tracking","2017"],
    locations: ["kelsey","adobe"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15244"
  },
  {
    title: "Clear Lake Hitch PIT Tagging Study at Kelsey and Adobe Creeks: 2016",
    year: 2016,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Third year of PIT tagging program tracking individual hitch movement between Clear Lake and spawning tributaries at Kelsey and Adobe creeks.",
    takeaways: [
      "Continued individual-level migration timing data for Kelsey and Adobe populations",
      "Adobe Creek most-used spawning tributary in 2016 visual surveys. PIT data provided supporting movement context",
      "Multi-year recaptures beginning to show repeat spawners and life history data"
    ],
    tags: ["PIT tagging","spawning","migration","kelsey","adobe","2016"],
    locations: ["kelsey","adobe"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15245"
  },
  {
    title: "Clear Lake Hitch PIT Tagging Study at Kelsey and Adobe Creeks: 2015",
    year: 2015,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Second year of PIT tagging at Kelsey and Adobe creeks. Recapture data beginning to reveal multi-year migration patterns and individual site fidelity.",
    takeaways: [
      "Second-year recaptures providing multi-year migration pattern data",
      "Site fidelity patterns emerging, individual hitch showing repeated use of same tributaries",
      "Concurrent aging study published same year added life history context"
    ],
    tags: ["PIT tagging","spawning","migration","kelsey","adobe","2015"],
    locations: ["kelsey","adobe"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15246"
  },
  {
    title: "Clear Lake Hitch PIT Tagging Study at Kelsey and Adobe Creeks: 2014",
    year: 2014,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "First year of the PIT tagging program at Kelsey and Adobe creeks, launched in the same year the hitch received state threatened status. Established baseline migration timing and detection protocols.",
    takeaways: [
      "Program launch coinciding with 2014 CESA threatened listing",
      "First systematic individual-level movement tracking for Clear Lake hitch",
      "Established antenna placement protocols at Kelsey and Adobe",
      "Concurrent fish rescue at Adobe and Cooper Creek documented same season"
    ],
    tags: ["PIT tagging","spawning","migration","kelsey","adobe","baseline","2014"],
    locations: ["kelsey","adobe"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15247"
  },

  /* ─────────────────────────────────────────
     CDFW: FISH RESCUES
  ───────────────────────────────────────── */
  {
    title: "Clear Lake Hitch Fish Rescue: Adobe Creek 2022",
    year: 2022,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Emergency fish rescue operation at Adobe Creek during the 2022 drought-crisis spawning season. Hitch stranded in isolated pools were relocated to safe water.",
    takeaways: [
      "Drought conditions in 2022 caused Adobe Creek to disconnect before juveniles could emigrate to the lake",
      "Rescue teams relocated stranded hitch from isolated pools to Clear Lake",
      "Permits required for all rescue operations. LCWPD Hitch Rescue Team coordinates response",
      "Adobe Creek remains one of the most important spawning tributaries despite recurring connectivity issues"
    ],
    tags: ["fish rescue","adobe","drought","stranded hitch","2022","emergency"],
    locations: ["adobe"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15248"
  },
  {
    title: "Clear Lake Hitch Fish Rescue: Thompson Creek 2019",
    year: 2019,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Fish rescue operation at Thompson Creek during the 2019 spawning season. Thompson Creek joins Manning Creek upstream and has been confirmed for adult hitch in CDFW 2024 to 2025 surveys.",
    takeaways: [
      "Thompson Creek stranding event in 2019, hitch relocated before mortality",
      "Thompson Creek confirmed active spawning tributary in subsequent 2024 to 2025 CDFW surveys",
      "Stranding events highlight the vulnerability of hitch in short, low-flow tributaries",
      "Call (707) 263-2344 to report stranded hitch. Permits required for rescue operations"
    ],
    tags: ["fish rescue","thompson","stranded hitch","2019"],
    locations: ["thompson","manning"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15249"
  },
  {
    title: "Clear Lake Hitch Fish Rescue: Cole Creek 2018",
    year: 2018,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Fish rescue at Cole Creek during the 2018 season. Cole Creek flows into Clear Lake adjacent to Kelsey Creek and is the focus of an active 1.55-mile habitat restoration project.",
    takeaways: [
      "Cole Creek stranding event in 2018 despite an otherwise average rainfall year",
      "Cole Creek Restoration Project (1.55 mi, funded) aims to prevent future rescue events by improving flow continuity",
      "2024 CDFW survey found Cole Creek dry downstream, no hitch observed",
      "Adjacent to Kelsey Creek. Improving Cole increases overall south-shore spawning capacity"
    ],
    tags: ["fish rescue","cole","stranded hitch","2018","restoration"],
    locations: ["cole"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15250"
  },
  {
    title: "Clear Lake Hitch Fish Rescue: Cole Creek 2016",
    year: 2016,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Fish rescue at Cole Creek during the 2016 spawning season, two years prior to the 2018 rescue at the same location, suggesting recurring stranding risk on this tributary.",
    takeaways: [
      "Second documented stranding event at Cole Creek within a 3-year window (2016, 2018)",
      "Recurring stranding pattern at Cole strengthens case for Cole Creek Restoration Project",
      "Low-flow conditions in Cole Creek are partly attributed to agricultural diversions upstream"
    ],
    tags: ["fish rescue","cole","stranded hitch","2016"],
    locations: ["cole"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15251"
  },
  {
    title: "Clear Lake Hitch Fish Rescue: Adobe and Cooper Creek 2014",
    year: 2014,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Fish rescue at both Adobe Creek and Cooper Creek during the first year of the CESA-listed period (2014). Simultaneous rescues at two tributaries in the same season.",
    takeaways: [
      "Earliest year in documented rescue record, same year as CESA threatened listing",
      "Adobe and Cooper creeks both required rescue in the same season",
      "Robinson Rancheria Pomo Indians have participated in rescue operations at Cooper and adjacent creeks",
      "Establishes a long baseline of stranding risk at Adobe going back over a decade"
    ],
    tags: ["fish rescue","adobe","cooper","stranded hitch","2014"],
    locations: ["adobe"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15252"
  },

  /* ───────────────────────────────���─────────
     CDFW: GENERAL FISH SURVEYS
  ───────────────────────────────────────── */
  {
    title: "General Fish Survey: Clear Lake 2025",
    year: 2025,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Broad-based fish assemblage survey of Clear Lake covering native and introduced species. Provides current-year context for the hitch's competitive and predation environment.",
    takeaways: [
      "Documents current fish assemblage including non-native species composition",
      "Combined with USGS gillnet data provides most complete picture of the lake's fish community in 2025",
      "Relevant for understanding hitch habitat availability and invasive species pressure"
    ],
    tags: ["fish assemblage","general survey","Clear Lake","native species","invasive species","2025"],
    locations: ["lake"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15221"
  },
  {
    title: "General Fish Survey: Clear Lake 2023",
    year: 2023,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Fish assemblage survey of Clear Lake conducted in the same year as the record 2,548 spawner count. Documents species composition during a recovery year after drought.",
    takeaways: [
      "Fish community survey coinciding with record 2023 spawning season",
      "Provides species composition baseline for comparison with 2025 conditions",
      "Non-native species abundance and distribution documented"
    ],
    tags: ["fish assemblage","general survey","Clear Lake","2023"],
    locations: ["lake"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15253"
  },
  {
    title: "General Fish Survey: Clear Lake 2008",
    year: 2008,
    source: "California Department of Fish and Wildlife",
    agency: "CDFW",
    summary: "Historical fish assemblage survey providing a pre-modern-monitoring-program baseline for species composition in Clear Lake. Useful for long-term comparisons with current assemblage data.",
    takeaways: [
      "Pre-2014 listing baseline for Clear Lake fish assemblage",
      "Documents species composition before the most severe recent hitch declines",
      "Useful for measuring 15+ year change in assemblage structure"
    ],
    tags: ["fish assemblage","general survey","Clear Lake","historical","baseline","2008"],
    locations: ["lake"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15254"
  },
  {
    title: "General Fish Survey: Highland Springs Reservoir 2025",
    year: 2025,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Fish survey of Highland Springs Reservoir, which is hydraulically connected to Adobe Creek, one of the most important Clear Lake hitch spawning tributaries.",
    takeaways: [
      "Highland Springs Reservoir feeds into the Adobe Creek drainage",
      "Non-native species present in the reservoir may move downstream into hitch spawning habitat",
      "Survey provides context for water quality and species pressure entering Adobe Creek"
    ],
    tags: ["general survey","highland springs","adobe","reservoir","2025"],
    locations: ["adobe"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15479"
  },
  {
    title: "General Fish Survey: Highland Springs Reservoir 2024",
    year: 2024,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Fish survey of Highland Springs Reservoir in 2024, providing species composition data for the Adobe Creek tributary system.",
    takeaways: [
      "2024 baseline for Highland Springs fish assemblage",
      "Reservoir survey compared with 2015 and 2025 data for trend analysis",
      "Relevant for understanding invasive species pathways into Adobe Creek"
    ],
    tags: ["general survey","highland springs","adobe","reservoir","2024"],
    locations: ["adobe"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15263"
  },
  {
    title: "General Fish Survey: Highland Springs Reservoir 2015",
    year: 2015,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Baseline fish survey of Highland Springs Reservoir from 2015, part of the broader first wave of tributary and reservoir assessments following the 2014 CESA listing.",
    takeaways: [
      "Earliest survey in the Highland Springs monitoring record",
      "Provides 10-year baseline for comparison with 2024 and 2025 surveys",
      "Part of post-listing tributary system assessment effort"
    ],
    tags: ["general survey","highland springs","adobe","reservoir","baseline","2015"],
    locations: ["adobe"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15255"
  },
  {
    title: "General Fish Survey: Tule Lake 2024",
    year: 2024,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Fish survey of Tule Lake, located northwest of Clear Lake in the Cold Creek drainage. Tule Lake is historically connected to Clear Lake through the Cold Creek to Scotts Creek corridor, which was rerouted by geological activity. Relevant for understanding potential CLH refugia.",
    takeaways: [
      "Tule Lake sits in the historic drainage corridor connecting Clear Lake to the Russian River",
      "Scotts Creek intermittently connects the Blue Lakes to Tule Lake system to Clear Lake in wet years",
      "Survey assesses whether CLH are present in this isolated waterbody",
      "Part of ongoing USGS/CDFW effort to understand CLH distribution across the entire watershed"
    ],
    tags: ["general survey","tule lake","distribution","refugia","cold creek","2024"],
    locations: ["scotts_sys"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15565"
  },
  {
    title: "General Fish Survey: Lower Blue Lake 2024",
    year: 2024,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Fish survey of Lower Blue Lake conducted alongside the 2024 USGS gillnet study. No CLH were detected in either survey, consistent with 2015 results and the lack of known translocation events into Lower Blue Lake.",
    takeaways: [
      "No CLH detected in Lower Blue Lake in 2024, consistent with 2015 CDFW and 2024 USGS results",
      "Lower Blue Lake is intermittently connected to Clear Lake via Scotts Creek in wet years",
      "CLH rescues from Cooper Creek (2022) and Middle/Scotts Creeks (2023) by Robinson Rancheria deposited fish into Upper Blue Lake, not Lower",
      "Survey contributes to USGS distribution study published December 2025"
    ],
    tags: ["general survey","lower blue lake","distribution","2024"],
    locations: ["scotts_sys"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15264"
  },
  {
    title: "General Fish Survey: Lower Blue Lake 2015",
    year: 2015,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Historical baseline survey of Lower Blue Lake from 2015. No CLH were detected, establishing the long-term absence of hitch in this waterbody prior to any translocation events.",
    takeaways: [
      "No CLH detected in 2015, establishes 10-year absence baseline confirmed by 2024 surveys",
      "Pre-dates the 2022 to 2023 translocation events into Upper Blue Lake",
      "Lower Blue Lake has no confirmed natural CLH population"
    ],
    tags: ["general survey","lower blue lake","distribution","baseline","2015"],
    locations: ["scotts_sys"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15256"
  },
  {
    title: "General Fish Survey: Upper Blue Lake 2022",
    year: 2022,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Fish survey of Upper Blue Lake, conducted the same year Robinson Rancheria rescued and translocated 295 CLH from Cooper Creek into Upper Blue Lake. Upper Blue Lake is connected to Lower Blue Lake by a seasonally inundated creek.",
    takeaways: [
      "2022 translocation: Robinson Rancheria deposited 295 rescued hitch from Cooper Creek into Upper Blue Lake",
      "Upper Blue Lake is 10 km northwest of Clear Lake and intermittently connected via the Blue Lakes to Scotts Creek corridor",
      "Survey assesses survival and distribution of translocated fish",
      "Thurston Lake (to the east) is the primary confirmed isolated refugia population"
    ],
    tags: ["general survey","upper blue lake","translocation","robinson rancheria","refugia","2022"],
    locations: ["scotts_sys"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15265"
  },

  /* ─────────────────────────────────────────
     CDFW: OTHER DOCUMENTS
  ───────────────────────────────────────── */
  {
    title: "Clear Lake Hitch Aging Survey at Clear Lake: 2015",
    year: 2015,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Age-structure analysis of the Clear Lake hitch population using otolith and scale aging methods. Provides foundational life history data (age distribution, growth rates, and cohort composition) for the population at the start of the modern monitoring era.",
    takeaways: [
      "Documents age structure (up to 6 years) and cohort composition of the in-lake population",
      "Growth rate and longevity data used in population models and the USFWS Species Status Assessment",
      "Concurrent with PIT tagging study at Kelsey and Adobe. Combined data provide individual life history and population-level structure",
      "Published same year as post-listing baseline surveys across multiple waterbodies"
    ],
    tags: ["aging","life history","otolith","population structure","2015","CDFW"],
    locations: ["lake"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15257"
  },
  {
    title: "Fish Observations at Adobe Creek and Adobe Reservoir: 2015",
    year: 2015,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Systematic fish observations at Adobe Creek and adjacent Adobe Reservoir from the first year after CESA listing. Provides baseline species composition, hitch presence and abundance, and documents the relationship between reservoir conditions and downstream spawning habitat.",
    takeaways: [
      "Adobe Creek is historically one of the two most important CLH spawning tributaries",
      "Reservoir observation provides context for potential fish species moving between reservoir and spawning reach",
      "Established as part of a comprehensive post-listing baseline assessment",
      "Adobe Creek most-used spawning tributary in 2016, 2018, 2022, 2023, and 2025"
    ],
    tags: ["adobe","fish observations","reservoir","spawning","baseline","2015"],
    locations: ["adobe"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15258"
  },
  {
    title: "Gillnet Survey at Adobe Reservoir: 2015",
    year: 2015,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Gillnet survey of Adobe Reservoir documenting species present and relative abundance. Relevant for assessing non-native species that could potentially move downstream into Adobe Creek spawning habitat.",
    takeaways: [
      "Quantitative gillnet sampling of Adobe Reservoir for species composition",
      "Non-native species in the reservoir represent potential downstream threat vector",
      "Adobe Reservoir feeds into one of the most productive CLH spawning reaches on the south shore",
      "Part of post-listing comprehensive baseline assessment"
    ],
    tags: ["gillnet","adobe reservoir","invasive species","2015","fish assemblage"],
    locations: ["adobe"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15259"
  },
  {
    title: "Clear Lake Fishery and Habitat Evaluation: 2014-2015",
    year: 2015,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Broad evaluation of Clear Lake's fishery and physical habitat conditions spanning 2014 to 2015. Assesses shoreline conditions, aquatic vegetation, dissolved oxygen, temperature stratification, and fish community structure across the lake.",
    takeaways: [
      "Comprehensive habitat condition baseline for Clear Lake immediately post-CESA listing",
      "Documents shoreline development impacts, wetland loss, and water quality conditions",
      "Identifies spatial heterogeneity in habitat quality across Upper Arm, Oaks Arm, and Lower Arm",
      "Used in combination with USGS DO habitat study to map hitch-accessible vs. hypoxic zones"
    ],
    tags: ["habitat","Clear Lake","fishery evaluation","water quality","shoreline","2014","2015"],
    locations: ["lake"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15266"
  },
  {
    title: "Clear Lake Hitch Spawning Survey: 2014",
    year: 2014,
    source: "California Department of Fish and Wildlife, B. Ewing",
    agency: "CDFW",
    summary: "Dedicated spawning survey from the year of CESA listing, providing the formal observational baseline for the modern conservation era. Documents 1,119 adult spawners.",
    takeaways: [
      "1,119 adult hitch observed, first CESA-era spawner count",
      "Establishes the modern visual survey baseline alongside PIT tagging program launch",
      "Concurrent with Adobe and Cooper Creek fish rescue operations",
      "Results directly informed the 2014 CDFW status review and listing determination"
    ],
    tags: ["spawning","population","baseline","CESA","2014"],
    locations: ["adobe","kelsey"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15267"
  },

  /* ─────────────────────────────────────────
     USGS
  ───────────────────────────────────────── */
  {
    title: "Status of Clear Lake Hitch in Lower Blue Lake, Lake County, California: 2024",
    year: 2025,
    source: "USGS California Water Science Center, Buxton, Wulff, Violette, Palm, Young & Feyrer, California Fish and Wildlife Journal 111:e20",
    agency: "USGS",
    summary: "Peer-reviewed study using standardized gillnet methodology to determine whether CLH are present in Lower Blue Lake, a historically connected but geologically isolated waterbody northwest of Clear Lake. No hitch were detected in 49 gillnet deployments in October 2024.",
    takeaways: [
      "No CLH detected in 49 gillnet deployments across all areas of Lower Blue Lake in October 2024",
      "Lower Blue Lake is approximately 10 km northwest of Clear Lake, intermittently connected via Scotts Creek in wet years",
      "Consistent with 2015 CDFW survey, no known natural CLH population in Lower Blue Lake",
      "Robinson Rancheria translocated rescued hitch into Upper Blue Lake (not Lower) from Cooper Creek (2022) and Scotts/Middle Creeks (2023)",
      "Geological history: Clear Lake originally drained westward through Cold Creek to the Russian River. The Blue Lakes are remnants of this ancient drainage corridor"
    ],
    tags: ["lower blue lake","distribution","gillnet","USGS","refugia","2024","no detection"],
    locations: ["scotts_sys"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15594"
  },
  {
    title: "Status and Trends of Clear Lake Hitch in Clear Lake: 2017-2023",
    year: 2025,
    source: "U.S. Geological Survey (USGS), Open-File Report 2025-1018, Feyrer, Young, Huntsman et al.",
    agency: "USGS",
    summary: "The most comprehensive recent assessment of Clear Lake fish populations. Documents a 96% decline in hitch relative abundance between 2017 and 2022 based on six years of standardized gillnet surveys. Captures 986 individual hitch across 1,529 gillnet deployments.",
    takeaways: [
      "96% decline in hitch relative abundance from 2017 to 2022, the most quantified measure of the collapse",
      "986 individual hitch captured across 1,529 gillnet deployments. Population is sparse; hitch absent from 89 to 93% of individual sets",
      "Non-native species now dominate: threadfin shad, Mississippi silverside, and largemouth bass assemblages expanded substantially",
      "Dissolved oxygen below 2 mg/L confirmed as primary habitat exclusion factor. Hypoxic zones expanded to 16% of lake bottom in 2017",
      "Power analysis: 4 to 7 annual survey days sufficient for 80% confidence in detecting 25% abundance change",
      "Tribal monitoring began in 2022: Robinson Rancheria, Habematolel Pomo, Big Valley Rancheria, and Elem Indian Colony all participated"
    ],
    tags: ["population","gillnet survey","decline","USGS","invasive species","dissolved oxygen","tribal collaboration","methodology","abundance index"],
    locations: ["lake"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15260"
  },
  {
    title: "Clear Lake Hitch Strontium Isotopes: Identifying Spawning and Rearing Tributaries, 2019",
    year: 2019,
    source: "USGS California Water Science Center, Feyrer, Whitman, Young & Johnson, Marine and Freshwater Research",
    agency: "USGS",
    summary: "Peer-reviewed study using otolith strontium isotope ratios (⁸⁷Sr/⁸⁶Sr) to trace which tributaries adult hitch recruit from, and how long juveniles spend in natal streams before emigrating to Clear Lake. The isoscape differentiated Clear Lake from 8 of 10 key tributaries.",
    takeaways: [
      "Strontium isotope isoscape successfully differentiated Clear Lake from 8 of 10 key tributaries, all 5 isotope groups correctly classified",
      "All five isotope groups (tributary-origin clusters) contributed to the adult lake population. No single tributary dominated recruitment",
      "Juvenile emigration from natal streams to Clear Lake ranged 11 to 152 days (mean 43 days), longer residency in more permanent streams",
      "Positively associates natal habitat permanency with time spent before lake emigration. Ephemeral stream juveniles emigrate faster under threat of drying",
      "Identifies which tributaries are most productive for actual fish recruitment (not just spawning presence), critical for prioritizing restoration investment"
    ],
    tags: ["strontium isotopes","otolith","natal origins","spawning","recruitment","migration","habitat prioritization","USGS"],
    locations: ["kelsey","adobe","forbes","manning","seigler_sys"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15268"
  },
  {
    title: "Dissolved Oxygen Controls Summer Habitat of Clear Lake Hitch: 2019",
    year: 2019,
    source: "USGS California Water Science Center, Feyrer, Young, Patton & Ayers, Ecology of Freshwater Fish 29:188-196",
    agency: "USGS",
    summary: "The first in-lake habitat use study for CLH using systematic gillnet sampling. Found dissolved oxygen was the dominant driver of hitch spatial distribution, fish strongly avoided hypoxic water below 2 mg/L, which excluded them from large portions of the lake.",
    takeaways: [
      "Dissolved oxygen below 2 mg/L was the most important habitat exclusion variable",
      "In 2017, ~16% of the lake bottom was hypoxic, directly compressing available hitch habitat",
      "Juveniles concentrated nearshore; adults more broadly distributed, suggests ontogenetic habitat shift tied to predation avoidance",
      "Improving dissolved oxygen levels in Clear Lake is one of the highest-leverage interventions for hitch survival",
      "Cyanobacterial HABs are a primary driver of hypoxia. The HAB and habitat crises are directly linked"
    ],
    tags: ["dissolved oxygen","hypoxia","habitat","in-lake","USGS","HABs","water quality","juveniles"],
    locations: ["lake"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15261"
  },

  /* ─────────────────────────────────────────
     OTHER DOCUMENTS
  ───────────────────────────────────────── */
  {
    title: "The Native and Introduced Fishes of Clear Lake: A Review of the Past to Assist with Decisions of the Future",
    year: 2013,
    source: "UC Davis, California Fish and Game 99(1):7-41, Thompson, Giusti, Weber & Keiffer",
    agency: "UC Davis",
    summary: "Comprehensive synthesis of Clear Lake's fish community history from the 1870s to present. Correlates native species declines with the timing of human impacts including 25 non-native fish introductions, habitat alteration, mercury mining, and water diversions over 150 years.",
    takeaways: [
      "Compiled the first complete chronology of all fish introductions and native species losses at Clear Lake since 1873",
      "14 native species documented by the 1870s; 25 non-native species introduced since, 21 still established",
      "Four native species extinct or extirpated: thicktail chub (1938), Clear Lake splittail (1969), hardhead (~1894), Pacific lamprey (~1894)",
      "Mississippi silverside introduction in 1967 (originally to control Clear Lake gnats) quickly became the dominant species and now competes directly with larval hitch for zooplankton",
      "Six priority research needs proposed including hitch-bass interaction studies, population dynamics modeling, and watershed hydrology under climate change"
    ],
    tags: ["fish community","history","invasive species","extinction","native species","Clear Lake gnat","silverside","carp","introduction chronology"],
    locations: ["lake","kelsey","adobe","seigler_sys"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15270"
  },
  {
    title: "Clear Lake Hitch Barrier Report: 2006",
    year: 2006,
    source: "McGinnis and Associates LLC, Dr. Dietrick McGinnis, Max Montgomery & Rick Ringelberg, Prepared for Robinson Rancheria and Scotts Valley Rancheria",
    agency: "Tribal",
    summary: "Fish passage reconnaissance conducted April 25, 2006 on Middle Creek, Clover Creek bypass, and Kelsey Creek near Main Street. Identified significant passage barriers blocking hitch migration and assessed restoration potential using CDFG protocols.",
    takeaways: [
      "Rancheria Road bridge apron and recently constructed rock weirs on Middle Creek identified as significant migration barriers",
      "Middle Creek assessed as 'ideal candidate for fish passage remediation', lower reaches show safe passage potential, sufficient riparian cover, and appropriate spawning gravels",
      "Kelsey Creek Main Street barrier identified. The Main Street fish ladder removal/replacement project now underway is a direct descendant of this 2006 assessment",
      "Clover Creek bypass also assessed, now an active CLH spawning site documented in 2025 Community Science survey",
      "References the Clear Lake splittail as a prior local extinction caused by passage barrier impacts, used as justification for urgency"
    ],
    tags: ["barriers","fish passage","Middle Creek","Kelsey Creek","Clover Creek","restoration","tribal","2006","passage barriers"],
    locations: ["kelsey","scotts_sys","cole"],
    url: "https://www.lakecountyca.gov/DocumentCenter/View/15271"
  },

  /* ─────────────────────────────────────────
     POLICY / LISTINGS
  ───────────────────────────────────────── */
  {
    title: "Proposed Rule: Threatened Species Status for Clear Lake Hitch Under the Federal ESA",
    year: 2025,
    source: "U.S. Fish & Wildlife Service, Federal Register 90 FR 4916 (January 16, 2025)",
    agency: "USFWS",
    summary: "The federal proposal to list the Clear Lake hitch as threatened under the Endangered Species Act with a Section 4(d) rule. The proposal deferred designation of critical habitat to a later date. Based on a comprehensive Species Status Assessment evaluating population viability under multiple climate scenarios.",
    takeaways: [
      "USFWS proposes threatened (not endangered) listing with a Section 4(d) rule allowing some flexibility for conservation-beneficial activities",
      "Critical habitat was not designated in this rule; USFWS stated it would be proposed at a later date",
      "Species Status Assessment found hitch at high risk of extinction within 50 years under most climate scenarios",
      "Dr. Peter Moyle (UC Davis): hitch is 'extremely likely to be driven to extinction by 2100' without intervention",
      "Thurston Lake population treated as a distinct demographic unit. Its isolation makes it both a critical refugia and a separate conservation concern"
    ],
    tags: ["federal listing","ESA","USFWS","policy","Section 4(d)","SSA","climate","Thurston Lake"],
    locations: ["lake","thurston","kelsey","adobe","forbes","manning","cole","burns"],
    url: "https://www.federalregister.gov/documents/2025/01/16/2024-31756/endangered-and-threatened-wildlife-and-plants-threatened-species-status-with-section-4d-rule-for"
  },
  {
    title: "Lake County Resolution Declaring a Local State of Emergency for the Clear Lake Hitch",
    year: 2023,
    source: "Lake County Board of Supervisors, February 2023",
    agency: "Lake County",
    summary: "Lake County officially declared a local state of emergency due to the imminent risk of hitch extinction. The resolution followed multiple consecutive drought years that caused near-total spawning failure and was triggered by 2021 and 2022 spawner counts of 120 and 306 fish respectively.",
    takeaways: [
      "Emergency declared February 2023 following 120 spawners (2021) and 306 spawners (2022)",
      "Cited prolonged drought, tributary dewatering, and invasive species as converging threats",
      "Enabled expedited multi-agency coordination between county, state, federal, and tribal partners",
      "2023 season (ironically boosted by record winter rains) produced 2,548 spawners: the all-time record"
    ],
    tags: ["policy","emergency","drought","Lake County","conservation"],
    locations: ["lake"],
    url: "https://www.lakecountyca.gov/1450/Clear-Lake-Hitch"
  },
  {
    title: "Clear Lake Hitch: CDFW Status Review and California Threatened Listing",
    year: 2014,
    source: "California Department of Fish and Wildlife (CDFW), Status Review, R2 Fish",
    agency: "CDFW",
    summary: "The formal status review that resulted in the Clear Lake hitch being listed as threatened under CESA in August 2014. Comprehensively assessed population trends, habitat conditions, and threats including drought, tributary dewatering, invasive species, and agricultural diversions.",
    takeaways: [
      "CDFW listed CLH as threatened under CESA, effective August 2014",
      "Documented ~100-fold population decline from historically massive spawning runs",
      "Primary threats identified: drought, tributary dewatering, bass and carp predation/competition, agricultural water diversions, and road crossing barriers",
      "Recommended continued spawner surveys, tributary habitat restoration, and invasive species management",
      "Preceded by a 2012 petition from the Center for Biological Diversity"
    ],
    tags: ["state listing","CESA","CA threatened","status review","CDFW","population decline","threats"],
    locations: ["lake","kelsey","adobe"],
    url: "https://nrm.dfg.ca.gov/FileHandler.ashx?DocumentID=86747"
  }
];
