"use client"

import Link from "next/link"
import { Fish, ArrowLeft, ChevronRight, Calendar, X } from "lucide-react"
import { useState } from "react"

// ===================== DATA =====================
const ERAS = ['Pre-1900','1900-1939','1940s-50s','1960s-70s','1980s-90s','2000s']

interface SpeciesTimelineItem {
  y: string
  t: string
  d: string
  tag?: string
}

interface SpeciesTimelineSection {
  era: string
  items: SpeciesTimelineItem[]
}

interface Species {
  id: string
  name: string
  latin: string
  status: 'native' | 'introduced' | 'extinct' | 'extirpated'
  statusLabel: string
  scores: number[]
  highlight?: boolean
  summary: string
  timeline: SpeciesTimelineSection[]
}

const SPECIES: Species[] = [
  /* NATIVE */
  {
    id:'hitch', name:'Clear Lake Hitch', latin:'Lavinia exilicauda chi',
    status:'native', statusLabel:'Native, State Threatened',
    scores:[5,5,2,3,2,3],
    highlight:true,
    summary:'The only fish endemic to Clear Lake and its watershed that has not yet gone extinct, but is at high risk. Once sustaining Pomo communities for millennia, the hitch has declined by over 96% since 2017 and faces extinction within 50 years under most climate scenarios.',
    timeline:[
      {era:'Pre-1840-1890s', items:[
        {y:'Pre-1840',t:'Major staple for Pomo people for thousands of years',d:'The hitch (chi in Pomo) is central to Pomo subsistence, spirituality, and seasonal food cycles. Massive spring spawning runs fill tributaries across the watershed.',tag:'gold'},
        {y:'1890s',t:'Extremely abundant: spawning so dense fish crowd tributaries',d:'1899 documentation describes hitch spawning runs of extraordinary scale, fish so dense they nearly crowd tributaries dry. Commercial harvest is well underway but populations remain massive.',tag:'good'},
      ]},
      {era:'1900-1943', items:[
        {y:'1910',t:'Still abundant; strong runs continue with periodic die-offs',d:'Hitch runs remain strong but periodic die-offs during spawning occur when creeks dry prematurely, an early warning of what tributary dewatering will do to the species.',tag:'warn'},
        {y:'1930s',t:'Periodic drought-related spawning failures begin',d:'Agricultural water demand continues to grow. Creeks that previously flowed reliably through the spawning season begin failing in dry years, trapping spawning fish.',tag:'warn'},
        {y:'1943',t:'Last large runs before the collapse',d:'1943 is documented as the last year of historically large spawning runs. The stressors that will cause near-total collapse are already accumulating.',tag:'warn'},
      ]},
      {era:'1946-1950s', items:[
        {y:'1946-1948',t:'Spawning nearly stops: rapid crash to rarity',d:'In just three years, the hitch drops from abundant to rare. Causes include DDT/DDD pesticide applications, tributary desiccation, habitat loss, and invasive species competition. The decline is catastrophic and permanent.',tag:'danger'},
        {y:'Early 1950s',t:'At its lowest: some spawning resumes mid-decade',d:'The early 1950s represent the nadir of hitch abundance. Limited spawning is observed in mid-to-late 1950s as the population stabilizes at a tiny fraction of historical levels.',tag:'danger'},
      ]},
      {era:'1960s-1990s', items:[
        {y:'1960s',t:'Low numbers, locally present in some tributaries',d:'Hitch persist at low levels. The introduction of Mississippi silverside in 1967 adds a new competitive pressure on juvenile hitch during their most vulnerable larval stage.',tag:'warn'},
        {y:'1980s',t:'Spawning observed in storm drains: habitat desperation',d:'Fish are found attempting to spawn in storm drains, wherever water flows. A fish ladder is installed and early habitat restoration begins, but the population remains chronically low.',tag:'warn'},
        {y:'1990s',t:'Restoration attempts begin; fish ladder and habitat work',d:'Conservation agencies begin coordinated restoration efforts. A fish ladder is installed on a key barrier. Habitat work addresses some tributary degradation. Progress is real but slow against the scale of the problem.',tag:'neutral'},
      ]},
      {era:'2000-2013', items:[
        {y:'2002',t:'Still one of few native species persisting in notable numbers',d:'Despite chronic decline, hitch remain one of the few native fish species still present in Clear Lake in any significant number, alongside blackfish, tule perch, and sculpin.',tag:'warn'},
        {y:'~2004',t:'Last confirmed spawning in Seigler Canyon Creek',d:'One of historically the best spawning tributaries goes dark. No adult hitch documented there since.',tag:'danger'},
        {y:'2013',t:'CDFW surveys begin: fewer than 500 spawners counted',d:'Formal standardized monitoring reveals the true depth of the crisis. The 11-year survey record that follows documents extreme year-to-year variability driven entirely by rainfall.',tag:'policy'},
      ]},
      {era:'2014-2022', items:[
        {y:'2014',t:'Listed as Threatened under California ESA',d:'State listing provides legal protection but does not address the core drivers of decline: water diversions, invasive species, drought.',tag:'policy'},
        {y:'2020',t:'1,672 spawners: strongest single-creek count on record',d:'Kelsey Creek alone produces all 1,672 spawners. A sign of the species\' potential and its dangerous dependence on a single tributary.',tag:'good'},
        {y:'2021',t:'Only 120 spawners: 93% crash in one year',d:'Three drought years in succession collapse the population. Tributaries run dry before juvenile fish can emigrate. The lowest count ever recorded.',tag:'danger'},
        {y:'2022',t:'306 spawners: USGS confirms 96% decline from 2017 baseline',d:'The 96% decline documented by USGS gillnet surveys triggers federal ESA action. The species is in freefall.',tag:'danger'},
      ]},
      {era:'2023-Present', items:[
        {y:'Feb 2023',t:'Lake County emergency declaration',d:'First governmental emergency declaration for a fish species in Lake County history.',tag:'policy'},
        {y:'2023',t:'Record 2,548 spawners after wet winter',d:'The highest count since monitoring began. Shows both the recovery potential and the total dependence on rainfall.',tag:'good'},
        {y:'Jan 2025',t:'USFWS proposes federal Threatened listing',d:'Proposed critical habitat covers Clear Lake, Thurston Lake, and 18 tributaries. SSA finds high extinction risk within 50 years under most scenarios.',tag:'policy'},
        {y:'Spring 2025',t:'1,567 spawners: above 11-year average',d:'A solid year. Monitoring by CDFW, tribal agencies, and LCWPD continues.',tag:'good'},
      ]},
    ]
  },
  {
    id:'splittail', name:'Clear Lake Splittail', latin:'Pogonichthys ciscoides',
    status:'extinct', statusLabel:'Extinct, Endemic',
    scores:[5,5,2,2,1,1],
    summary:'An endemic species found nowhere else on Earth. Once "very abundant" through the 1930s, it collapsed in the 1940s alongside the hitch, likely driven by the same pesticide contamination and habitat loss. Declared extirpated by 1973. A direct precedent for what can happen to the hitch.',
    timeline:[
      {era:'1870s-1930s', items:[
        {y:'1870s-1930s',t:'Common to very abundant, especially 1920s to 1930s',d:'The Clear Lake splittail, endemic to the Clear Lake basin, thrives through this period. Found nowhere else on Earth, it is a cornerstone of the native fish assemblage.',tag:'good'},
      ]},
      {era:'1940s', items:[
        {y:'~1940',t:'Rapid collapse begins',d:'The splittail collapses in parallel with the hitch around 1940 to 1943, nearly certainly driven by the same stressors. By the mid-1940s it is nearly absent from the lake.',tag:'danger'},
      ]},
      {era:'1960s-1970s', items:[
        {y:'1960s',t:'Stressed, likely near-zero population',d:'Occasional records but no evidence of a viable population remaining.',tag:'danger'},
        {y:'1973',t:'Declared extirpated, functionally extinct',d:'The Clear Lake splittail is declared gone from the lake. One of California\'s most significant modern fish extinctions. An endemic species lost in a single human generation.',tag:'danger'},
      ]},
    ]
  },
  {
    id:'perch', name:'Sacramento Perch', latin:'Archoplites interruptus',
    status:'extirpated', statusLabel:'Extirpated (2008)',
    scores:[4,4,3,2,2,1],
    summary:'California\'s only native sunfish. Declined steadily after carp introduction in the 1880s, with brief recoveries in the 1930s. By 2008, believed completely extirpated from Clear Lake. A cautionary example of how introduced carp destroyed a native species over more than a century.',
    timeline:[
      {era:'1800s-1930s', items:[
        {y:'1800s',t:'Common throughout Clear Lake',d:'Sacramento perch is historically common and represents an important component of the native fish community.',tag:'neutral'},
        {y:'1895',t:'Already "scarce": carp introduction implicated',d:'Just 15 years after carp were introduced, Sacramento perch is documented as scarce. The link between carp habitat degradation and perch decline is early and direct.',tag:'warn'},
        {y:'~1930',t:'Brief recovery, "abundant" again',d:'A temporary rebound occurs, suggesting the species is resilient enough to recover when conditions allow. This recovery will not last.',tag:'good'},
      ]},
      {era:'1940s-1960s', items:[
        {y:'1940s-60s',t:'Declining again; "extremely low" by 1960s',d:'The 1940s crash affects Sacramento perch along with other native species. By the 1960s the species is at extremely low numbers, approaching a threshold beyond which recovery becomes unlikely.',tag:'danger'},
      ]},
      {era:'1970s-2008', items:[
        {y:'1970s-90s',t:'Small, stable but very low populations',d:'Sacramento perch persists at less than 1% of historical abundance. Small populations hang on but no recovery occurs.',tag:'warn'},
        {y:'2008',t:'Believed extirpated: not detected in any surveys',d:'No Sacramento perch are detected in lake surveys by 2008. California\'s only native sunfish has disappeared from Clear Lake entirely.',tag:'danger'},
      ]},
    ]
  },
  {
    id:'pikeminnow', name:'Sacramento Pikeminnow', latin:'Ptychocheilus grandis',
    status:'native', statusLabel:'Native, Functionally Extirpated',
    scores:[5,5,2,1,1,1],
    summary:'Once abundant through the 1930s, the pikeminnow crashed to "nearly extinct" in Clear Lake by 1951. Now functionally extirpated from the lake, though it persists in some California watersheds. Its collapse mirrored that of the hitch and splittail, all driven by the same 1940s turning point.',
    timeline:[
      {era:'1800s-1930s', items:[
        {y:'Pre-1900-1930s',t:'Abundant; important predator in native food web',d:'Sacramento pikeminnow is the apex native predator in the lake ecosystem, playing an important structural role in the food web.',tag:'good'},
      ]},
      {era:'1940s-1950s', items:[
        {y:'1940s',t:'Population crash begins',d:'Like most native species, the pikeminnow crashes in the 1940s. The timing aligns with pesticide applications and habitat deterioration.',tag:'danger'},
        {y:'1951',t:'"Nearly extinct" in Clear Lake',d:'Just a decade after the 1930s abundance, the species is documented as nearly extinct in the lake. No recovery follows.',tag:'danger'},
      ]},
    ]
  },
  {
    id:'chub', name:'Thicktail Chub', latin:'Gila crassicauda',
    status:'extinct', statusLabel:'Globally Extinct',
    scores:[5,3,2,1,1,1],
    summary:'Globally extinct. Once common across Central Valley waterways including Clear Lake, the thicktail chub declined through the 1920s and was last observed anywhere on Earth in 1938. One of California\'s most notable modern fish extinctions, and a direct warning for what could happen to the hitch.',
    timeline:[
      {era:'1800s-1920s', items:[
        {y:'Pre-1900s',t:'Common in Clear Lake and Central Valley',d:'Thicktail chub is a widespread native species found throughout Central Valley waterways.',tag:'neutral'},
        {y:'1926',t:'Documented as declining',d:'The first formal documentation of decline. The species is losing ground across its range.',tag:'warn'},
      ]},
      {era:'1930s', items:[
        {y:'1938',t:'Last observed anywhere on Earth',d:'The thicktail chub is last documented at Clear Lake and anywhere else in 1938. No confirmed specimens have been found since. It is now considered globally extinct, a cautionary loss that shaped California fisheries conservation policy.',tag:'danger'},
      ]},
    ]
  },
  {
    id:'blackfish', name:'Sacramento Blackfish', latin:'Orthodon microlepidotus',
    status:'native', statusLabel:'Native, Relatively Stable',
    scores:[4,4,4,5,3,4],
    summary:'One of the most resilient native fish in Clear Lake. While most native species crashed in the 1940s, blackfish remained relatively stable and even supported a commercial fishery in the 1960s. It persists today as one of the few native success stories, though numbers have declined from their 1960s peak.',
    timeline:[
      {era:'1800s-1960s', items:[
        {y:'Pre-1900-1940s',t:'Present and common throughout',d:'Sacramento blackfish maintains stable populations through the period of major invasive introductions that devastated other native species.',tag:'good'},
        {y:'1960s',t:'Abundant enough to support commercial fishery',d:'While hitch, splittail, and pikeminnow collapse, blackfish reach their peak abundance and support a commercial harvest, demonstrating that some native cyprinids can adapt to degraded conditions.',tag:'good'},
      ]},
      {era:'1970s-Present', items:[
        {y:'1970s-2000s',t:'Declines in relative abundance but persists',d:'Blackfish declines from its 1960s peak but remains one of the more abundant native species in the lake. By 2002 it is still present in notable numbers.',tag:'warn'},
      ]},
    ]
  },
  {
    id:'sucker', name:'Sacramento Sucker', latin:'Catostomus occidentalis',
    status:'native', statusLabel:'Native, Stable',
    scores:[4,4,4,4,4,4],
    summary:'The most consistently stable native fish in Clear Lake across all time periods. Sacramento sucker has maintained "common" to "abundant" status through 150+ years of ecological disruption, making it one of the clearest native success stories in the lake.',
    timeline:[
      {era:'All periods', items:[
        {y:'1800s-Present',t:'Consistently common across all eras',d:'Sacramento sucker has withstood the same pressures that extirpated or reduced most other native species. Its tolerance of degraded conditions makes it a consistent presence in the lake\'s fish community.',tag:'good'},
      ]},
    ]
  },
  {
    id:'tuleperch', name:'Tule Perch', latin:'Hysterocarpus traskii',
    status:'native', statusLabel:'Native, Increasing',
    scores:[4,4,4,4,4,5],
    summary:'Tule perch is actually increasing in abundance in Clear Lake, one of the very few positive trends in the native fish community. Its resilience likely reflects its viviparous (live-bearing) reproduction, which doesn\'t depend on intact spawning habitat in tributaries.',
    timeline:[
      {era:'All periods', items:[
        {y:'1800s-Present',t:'Consistently common, trending toward abundant',d:'Unlike most native species, tule perch has remained stable or increased through the 20th and 21st centuries. Its live-bearing reproductive strategy protects it from the tributary dewatering and barrier issues that devastate hitch.',tag:'good'},
      ]},
    ]
  },
  {
    id:'sculpin', name:'Prickly Sculpin', latin:'Cottus asper',
    status:'native', statusLabel:'Native, Increasing',
    scores:[4,4,4,4,4,5],
    summary:'Like tule perch, prickly sculpin is showing increasing abundance in Clear Lake. It is a bottom-dwelling predator that has adapted well to the lake\'s current conditions. Along with tule perch and Sacramento blackfish, it represents the resilient core of what remains of the native fish community.',
    timeline:[
      {era:'All periods', items:[
        {y:'1800s-Present',t:'Consistently common, trending toward abundant',d:'Prickly sculpin has maintained and even increased its presence in Clear Lake through the same period that saw most native species collapse.',tag:'good'},
      ]},
    ]
  },
  {
    id:'trout', name:'Rainbow Trout', latin:'Oncorhynchus mykiss',
    status:'native', statusLabel:'Native, Lost from Lake',
    scores:[4,4,2,2,2,2],
    summary:'Once common in Clear Lake and its tributaries, rainbow trout essentially disappeared from the lake itself following dam construction in 1915 that blocked access to upstream spawning habitat. They persist in some tributaries above barriers but are functionally absent from the lake.',
    timeline:[
      {era:'Pre-1915', items:[
        {y:'Pre-1915',t:'Common in lake and tributaries',d:'Rainbow trout are present and common throughout Clear Lake and its tributary network during this period.',tag:'good'},
      ]},
      {era:'Post-1915', items:[
        {y:'1915-1960s',t:'Rapid decline following dam construction',d:'The dam on Cache Creek and other barriers fragment the watershed. Rainbow trout lose access to the cool, oxygen-rich upstream habitats they need for spawning and summer rearing. By the 1960s they are essentially absent from the lake.',tag:'danger'},
        {y:'Present',t:'Persist only in upper tributaries above barriers',d:'Small populations of rainbow trout persist in the upper reaches of some Clear Lake tributaries above barriers, but the lake itself no longer supports a viable trout population.',tag:'warn'},
      ]},
    ]
  },
  {
    id:'lamprey', name:'Pacific Lamprey', latin:'Entosphenus tridentatus',
    status:'extirpated', statusLabel:'Extirpated from Lake',
    scores:[4,4,2,1,1,1],
    summary:'Pacific lamprey was extirpated from Clear Lake itself by the early 1890s, one of the earliest documented losses. It persists in Kelsey Creek above the lake, but the lake population was lost before formal conservation science existed. An early casualty of the cascade of changes beginning in the 1880s.',
    timeline:[
      {era:'Pre-1894', items:[
        {y:'Pre-1894',t:'Common in Clear Lake and its tributaries',d:'Pacific lamprey supports the native food web as both parasite and, in larval form, as an important benthic filter feeder.',tag:'neutral'},
      ]},
      {era:'1894 onward', items:[
        {y:'~1894',t:'Extirpated from Clear Lake',d:'Pacific lamprey is last documented in the lake around 1894. It persists in Kelsey Creek but is gone from the main lake body, one of the earliest fish extirpations at Clear Lake.',tag:'danger'},
      ]},
    ]
  },
  /* INTRODUCED */
  {
    id:'carp', name:'Common Carp', latin:'Cyprinus carpio',
    status:'introduced', statusLabel:'Introduced 1880: Dominant',
    scores:[4,5,5,5,5,5],
    summary:'Introduced in 1880 and never controlled. Common carp are now the dominant biomass species in Clear Lake. Their bottom-feeding behavior destroys submerged vegetation, increases turbidity, and degrades habitat for native species. Widely regarded as one of the primary drivers of native fish decline and a major obstacle to any recovery.',
    timeline:[
      {era:'Introduction', items:[
        {y:'1880',t:'Introduced to Clear Lake',d:'Common carp arrive, likely through deliberate stocking as a food fish. They establish rapidly.',tag:'warn'},
      ]},
      {era:'Expansion', items:[
        {y:'1880-1900',t:'Rapid expansion; abundant by 1900',d:'Carp explode in population. Their sediment-disturbing behavior begins degrading the submerged vegetation that Clear Lake\'s native fish depend on.',tag:'danger'},
        {y:'1900-Present',t:'Persistent dominant biomass species',d:'Carp maintain dominant status across all subsequent time periods. Tribal and agency removal efforts have had local and temporary effects but carp remain pervasive.',tag:'danger'},
      ]},
    ]
  },
  {
    id:'bass', name:'Largemouth Bass', latin:'Micropterus salmoides',
    status:'introduced', statusLabel:'Introduced 1888: Dominant',
    scores:[4,5,5,5,5,5],
    summary:'Introduced in 1888 and now dominating the sport fishery and the food web. By 1960 bass comprised 42% of the commercial catch; by 1988, 67%. As apex predators, bass consume juvenile native fish and fundamentally restructured the food web that native species evolved in. Now the primary sport fish supporting Clear Lake\'s recreational fishing economy.',
    timeline:[
      {era:'Introduction', items:[
        {y:'1888',t:'Northern largemouth bass introduced',d:'Introduced to support recreational sport fishing. They establish within years and quickly become a major predator.',tag:'warn'},
        {y:'1910',t:'Already supporting a strong fishery',d:'Less than 25 years after introduction, bass already support a substantial commercial and sport fishery.',tag:'neutral'},
      ]},
      {era:'Dominance', items:[
        {y:'1960',t:'42% of commercial catch',d:'Bass have become the dominant sport fish in the lake, comprising nearly half of all fish caught.',tag:'neutral'},
        {y:'1988',t:'67% of commercial catch; Florida strain stocking continues',d:'Florida-strain largemouth bass are repeatedly stocked to enhance sport fishery size. Bass now definitively dominate the lake\'s fish assemblage as top predators.',tag:'neutral'},
      ]},
    ]
  },
  {
    id:'silverside', name:'Mississippi Silverside', latin:'Menidia audens',
    status:'introduced', statusLabel:'Introduced 1967: Dominant',
    scores:[0,0,0,5,5,5],
    summary:'Introduced in 1967 as gnat control and bass forage, and immediately became the most abundant fish in the entire lake. Mississippi silverside compete directly with larval hitch for zooplankton during the most vulnerable stage of hitch development. Their dominance has been continuous since introduction.',
    timeline:[
      {era:'Introduction', items:[
        {y:'1967',t:'Introduced for gnat control and bass forage',d:'Silverside are stocked into Clear Lake. The decision to introduce a pelagic planktivore into a lake with a native planktivore (larval hitch) will prove ecologically consequential.',tag:'warn'},
        {y:'1968',t:'Most abundant fish in Clear Lake: one year after introduction',d:'The speed of silverside population explosion is extraordinary. Within one year they become the single most abundant fish in the entire lake.',tag:'danger'},
      ]},
      {era:'Ongoing', items:[
        {y:'1970s-Present',t:'Persistent dominant forage fish; ongoing competition with larval hitch',d:'Silverside remain permanently dominant in the lake. Their competition with larval and juvenile hitch for zooplankton is an ongoing and unresolved stressor.',tag:'warn'},
      ]},
    ]
  },
  {
    id:'catfish', name:'Catfish (channel, white, brown bullhead)', latin:'Ictalurus spp.',
    status:'introduced', statusLabel:'Introduced 1880: Abundant',
    scores:[4,5,5,5,5,5],
    summary:'Introduced in 1880 alongside carp, catfish species quickly became commercially dominant, comprising 80% of the commercial catch by the 1930s to 1951. The commercial fishery subsequently collapsed and was closed in 1949, partly from DDD contamination. Catfish persist at abundant levels and continue to be stocked for sport fishing.',
    timeline:[
      {era:'Introduction & boom', items:[
        {y:'1880-1930s',t:'Introduced, rapidly expand, 80% of commercial catch',d:'White catfish and brown bullhead arrive in 1880, followed by channel catfish. They quickly dominate the commercial fishery.',tag:'neutral'},
      ]},
      {era:'Collapse & persistence', items:[
        {y:'1949',t:'Fishery collapses: closure after DDD application',d:'The commercial catfish fishery closes after DDD pesticide applications devastate fish populations. The fish remain abundant in the lake despite the fishery closure.',tag:'warn'},
        {y:'1960s-Present',t:'Repeated stocking; remain important sport fish',d:'Catfish are repeatedly restocked for sport fishing. They remain abundant and a popular target for anglers.',tag:'neutral'},
      ]},
    ]
  },
  {
    id:'bluegill', name:'Bluegill', latin:'Lepomis macrochirus',
    status:'introduced', statusLabel:'Introduced 1909: Abundant',
    scores:[4,5,5,5,5,5],
    summary:'Introduced around 1909 to 1910 and consistently abundant since. Bluegill remain one of the most abundant fish in Clear Lake and a popular sport fish target. They compete with juvenile native fish and contribute to the overall restructuring of the lake\'s food web.',
    timeline:[
      {era:'All periods', items:[
        {y:'1909-Present',t:'Consistently abundant since introduction',d:'Bluegill established quickly and have never declined from high abundance. They are now a permanent and dominant component of the lake\'s fish community.',tag:'neutral'},
      ]},
    ]
  },
  {
    id:'crappie', name:'Crappie (black & white)', latin:'Pomoxis spp.',
    status:'introduced', statusLabel:'Introduced ~1909: Declining',
    scores:[4,4,5,5,3,3],
    summary:'Crappie dominated the catch in the 1970s but have declined since the 1980s. Both black and white crappie are present. Their decline is poorly understood but may reflect changes in the food web following silverside and shad introductions. They remain present but at reduced levels.',
    timeline:[
      {era:'Introduction-1970s', items:[
        {y:'~1909-1970s',t:'Established, become dominant catch species by 1970s',d:'Crappie reach their peak abundance and dominate the sport catch during this period.',tag:'neutral'},
      ]},
      {era:'Decline', items:[
        {y:'1980s-Present',t:'Decline; reasons unclear',d:'Crappie decline from their 1970s peak. The cause is unclear but may involve competition from invasive forage fish or changes to zooplankton communities.',tag:'warn'},
      ]},
    ]
  },
]

// Era timeline data
interface TimelineItem {
  year: string
  yearClass: string
  title: string
  detail: string
  tags: string[]
}

interface TimelineEra {
  id: string
  title: string
  range: string
  colorClass: string
  dotColor: string
  intro?: string
  introColor?: string
  items: TimelineItem[]
}

const timelineData: TimelineEra[] = [
  {
    id: "era-indigenous",
    title: "Indigenous Era",
    range: "~12,000 BP to 1850s",
    colorClass: "era-indigenous",
    dotColor: "#d4a830",
    items: [
      {
        year: "~12,000 BP",
        yearClass: "gold",
        title: "Pomo peoples establish continuous habitation at Clear Lake",
        detail: "The Clear Lake basin becomes one of the most continuously inhabited places in North America. The Pomo, Lake Miwok, and Wappo peoples develop a deep subsistence and spiritual relationship with the lake and its fisheries, particularly the spring hitch spawning runs.",
        tags: ["cultural", "Pomo", "stewardship"]
      },
      {
        year: "Pre-contact",
        yearClass: "gold",
        title: "Massive annual hitch spawning runs sustain tribal communities",
        detail: "Historical accounts and late-1800s observations document spawning runs of almost incomprehensible scale: tens of thousands of hitch packed into tributary streams each spring. The hitch, known as chi in the Pomo language, is a cornerstone of the annual food cycle, tied to ceremony, community gathering, and food security. The lake supports extremely abundant populations of all native species: hitch, splittail, pikeminnow, Sacramento perch, Sacramento blackfish, tule perch, prickly sculpin, Pacific lamprey, and rainbow trout.",
        tags: ["spawning", "cultural", "Pomo", "food security"]
      },
      {
        year: "1840s",
        yearClass: "gold",
        title: "Early European accounts describe incredible native fish abundance",
        detail: "Early settlers and observers document the extraordinary productivity of Clear Lake. The lake is described as teeming with fish, with hitch runs filling tributaries so densely they could nearly be walked across. This pre-disturbance baseline is critical context for understanding the scale of subsequent collapse.",
        tags: ["baseline", "abundance", "historical"]
      },
      {
        year: "1860s",
        yearClass: "gold",
        title: "First commercial hitch fishery established",
        detail: "A commercial fishery targeting hitch during spring spawning runs begins operating. Spawning fish are easily harvested in tributaries in large numbers. Despite heavy harvest, populations remain robust at this stage due to sheer abundance.",
        tags: ["commercial fishery", "hitch", "harvest"]
      }
    ]
  },
  {
    id: "era-colonial",
    title: "Colonial Introduction Era",
    range: "1860s to 1945",
    colorClass: "era-colonial",
    dotColor: "#a0b8c8",
    intro: "A cascade of non-native fish introductions over 80 years fundamentally restructured Clear Lake's fish community. This happened before most people realized what was being lost.",
    introColor: "blue",
    items: [
      {
        year: "1860s-1870s",
        yearClass: "",
        title: "Goldfish introduced: first non-native species in lake",
        detail: "Goldfish arrive in Clear Lake, likely as escaped ornamentals. They establish and compete with native fish for food and habitat. Their sediment-disturbing behavior begins degrading submerged vegetation that native species depend on.",
        tags: ["invasive species", "goldfish", "introduction"]
      },
      {
        year: "1880",
        yearClass: "",
        title: "Common carp, brown bullhead, and white catfish introduced",
        detail: "Common carp, one of the most destructive freshwater introductions in California history, arrives in Clear Lake alongside brown bullhead and white catfish. Carp immediately begin to expand and degrade habitat through bottom-feeding, uprooting vegetation, increasing turbidity, and consuming fish eggs. Within decades they become the dominant biomass species in the lake. By the early 1900s the carp fishery becomes commercially important, but at severe ecological cost.",
        tags: ["invasive species", "carp", "habitat degradation"]
      },
      {
        year: "1888",
        yearClass: "",
        title: "Largemouth bass introduced: sport fishery begins transforming the lake",
        detail: "Northern largemouth bass are introduced to support a recreational sport fishery. They establish rapidly and become apex predators. By 1910 they already support a strong commercial fishery. Bass are aggressive predators of juvenile native fish, fundamentally changing the food web that Clear Lake hitch and other native species depend on. By 1960 largemouth bass comprise 42% of the catch; by 1988, 67%.",
        tags: ["largemouth bass", "predation", "sport fishery"]
      },
      {
        year: "1888-1910",
        yearClass: "",
        title: "Wave of sport fish stockings: smallmouth bass, golden shiner, bluegill",
        detail: "Smallmouth bass (1895), golden shiner (1896), bluegill (1909 to 1910), and an attempted yellow perch introduction (1909, failed) follow the largemouth bass. Crappie species arrive around 1909. Black bullhead also established by this period. Each introduction further restructures the lake's ecology. Catfish species collectively become so commercially dominant that by the 1930s to 1951 they represent 80% of the commercial catch.",
        tags: ["stocking", "bluegill", "crappie", "sunfish"]
      },
      {
        year: "1894",
        yearClass: "danger",
        title: "Pacific lamprey and hardhead disappear from Clear Lake",
        detail: "Both species are last recorded in Clear Lake around 1894, early casualties of habitat degradation and competition from introduced species. Pacific lamprey persists in Kelsey Creek but is extirpated from the lake itself. These are the first documented extirpations at Clear Lake, a warning sign that goes largely unheeded.",
        tags: ["extirpation", "lamprey", "hardhead"]
      },
      {
        year: "1895",
        yearClass: "",
        title: "Sacramento perch already declining: carp implicated",
        detail: "Sacramento perch, California's only native sunfish, is documented as \"scarce\" just 15 years after carp introduction. Carp are widely suspected as the primary driver, through habitat degradation and egg predation. The perch will fluctuate for decades but never recover to historic levels.",
        tags: ["Sacramento perch", "native decline", "carp impact"]
      },
      {
        year: "1899",
        yearClass: "",
        title: "Hitch spawning runs described as \"extraordinary\": still at peak",
        detail: "Despite early invasive species establishment, hitch runs in 1899 are still documented as so dense that fish crowd tributaries: the last documented period of peak abundance. Commercial harvest continues. The population is described as \"extremely abundant.\" This is effectively the last chapter of the pre-collapse era.",
        tags: ["hitch", "peak abundance", "spawning"]
      },
      {
        year: "1910",
        yearClass: "",
        title: "Periodic hitch die-offs during spawning: creeks drying for first time",
        detail: "The first documented instances of hitch dying en masse in drying creeks during spawning runs occur around 1910 and again in the 1930s. This foreshadows the critical role that tributary hydrology will play in the species' eventual crisis. Creeks that previously flowed reliably are beginning to fail under agricultural water demand.",
        tags: ["hitch", "die-off", "drought", "drying creeks"]
      },
      {
        year: "1915",
        yearClass: "",
        title: "Cache Creek dam constructed: blocks upstream fish passage",
        detail: "Dam construction on Cache Creek (Clear Lake's primary outlet) alters hydrology and blocks fish passage to upstream habitats. Rainbow trout, which historically spawned in upper Clear Lake tributaries, begin to disappear from the lake entirely, now largely restricted to tributaries above barriers. This is the first major structural change to the watershed.",
        tags: ["dam", "fish passage", "rainbow trout", "hydrology"]
      },
      {
        year: "1926",
        yearClass: "warn",
        title: "Thicktail chub declining: last specimens being documented",
        detail: "The thicktail chub is documented as \"declining\" by 1926. Once common throughout Clear Lake and Central Valley waterways, the species is clearly in trouble. Its last confirmed observation anywhere on Earth will come just 12 years later. No formal conservation action is taken.",
        tags: ["thicktail chub", "decline", "extinction"]
      },
      {
        year: "1930s",
        yearClass: "",
        title: "Redear sunfish established; fathead minnow introduced",
        detail: "Redear sunfish become established in Clear Lake in the 1940s (arriving in the region earlier), and fathead minnow are introduced and establish by this period. Each new species adds competitive pressure to native fish communities. Sacramento perch, briefly abundant again in the 1930s, begins declining again.",
        tags: ["redear sunfish", "fathead minnow", "invasive species"]
      },
      {
        year: "1938",
        yearClass: "danger",
        title: "Thicktail chub: last observed anywhere on Earth",
        detail: "The thicktail chub, once abundant across Central Valley waterways including Clear Lake, is last documented around 1938. It is now declared globally extinct, one of California's most significant fish extinctions. This is a direct precedent and warning for the hitch, facing many of the same stressors.",
        tags: ["extinction", "thicktail chub", "native species"]
      },
      {
        year: "1943",
        yearClass: "",
        title: "Last large hitch spawning run on record before collapse",
        detail: "1943 is documented as the last year of large hitch spawning runs before the catastrophic mid-decade collapse. Populations are still \"abundant\" by the standards of the era. Three years later, spawning will nearly stop entirely. The causes (DDT/TDE contamination, habitat loss, invasive species, water diversions) are already in motion.",
        tags: ["hitch", "last large run", "pre-collapse"]
      }
    ]
  },
  {
    id: "era-decline",
    title: "The Long Decline",
    range: "1940s to 2013",
    colorClass: "era-decline",
    dotColor: "#c87800",
    intro: "The 1940s mark the great turning point. In less than a decade, populations that had persisted for 12,000 years collapsed. Several species would never recover.",
    introColor: "amber",
    items: [
      {
        year: "1946-1948",
        yearClass: "danger",
        title: "Hitch spawning nearly stops: crash to rarity in 3 years",
        detail: "Between 1946 and 1948, hitch spawning nearly stops completely. A species that was \"extremely abundant\" in the 1890s and still running strongly in 1943 is suddenly \"rare.\" The cause is likely a combination: DDT and DDD pesticides were applied to Clear Lake in 1949 (and earlier periods) for gnat control; agricultural water diversions were intensifying; and habitat quality in tributaries was degrading rapidly. The splittail collapses at the same time, suggesting a shared stressor.",
        tags: ["hitch", "collapse", "DDT", "habitat loss"]
      },
      {
        year: "1940-1943",
        yearClass: "danger",
        title: "Clear Lake splittail collapses: near absence by mid-1940s",
        detail: "The Clear Lake splittail begins its rapid collapse around 1940. Once \"very abundant\" through the 1920s to 1930s, it is nearly absent by the mid-1940s. By 1973 it will be considered extirpated. This endemic species, found nowhere else on Earth, undergoes one of the fastest freshwater fish extinctions on record in California, driven by the same forces threatening hitch.",
        tags: ["splittail", "collapse", "endemic", "extinction"]
      },
      {
        year: "1949",
        yearClass: "danger",
        title: "First DDD application to Clear Lake: 14,000 acres treated for gnat control",
        detail: "The California Department of Agriculture applies DDD (a DDT analog) to the entire surface of Clear Lake at a rate of 1:70,000,000, intended to control the Clear Lake gnat (Chaoborus astictopus). It is one of the first large-scale pesticide applications to an entire lake ecosystem in US history. The application kills massive numbers of fish and invertebrates and bioaccumulates up the food chain, reaching lethal concentrations in western grebes. The commercial catfish fishery collapses and is closed in 1949. Further applications occur in 1954 and 1957.",
        tags: ["DDD", "pesticide", "gnat control", "fish kill", "western grebe"]
      },
      {
        year: "1951",
        yearClass: "warn",
        title: "Sacramento pikeminnow: \"nearly extinct\" in Clear Lake",
        detail: "Once abundant in Clear Lake through the 1930s, the Sacramento pikeminnow is documented as \"nearly extinct\" in the lake by 1951. The 1940s crash affected nearly all native species simultaneously, pointing to lake-wide stressors like DDD and habitat change, not species-specific factors. Pikeminnow will persist at very low numbers but never recover meaningful populations.",
        tags: ["pikeminnow", "decline", "native"]
      },
      {
        year: "1950s",
        yearClass: "",
        title: "Hitch at its lowest: some spawning resumes mid-decade",
        detail: "The early 1950s represent the nadir of hitch abundance. Some spawning is observed in the mid-to-late 1950s as populations slowly stabilize, but at a tiny fraction of historical levels. The species never returns to pre-crash abundance. Rainbow trout are now largely absent from the lake, persisting only in upper tributaries above barriers.",
        tags: ["hitch", "nadir", "1950s"]
      },
      {
        year: "1960s",
        yearClass: "",
        title: "Sacramento blackfish abundant: one of few native success stories",
        detail: "While most native species are in steep decline, Sacramento blackfish becomes abundant enough in the 1960s to support a commercial fishery, demonstrating that at least some native cyprinids can survive in the degraded lake environment. Tule perch and prickly sculpin also remain relatively stable, while Sacramento perch drops to extremely low numbers approaching extirpation.",
        tags: ["blackfish", "native success", "commercial fishery"]
      },
      {
        year: "1967",
        yearClass: "",
        title: "Mississippi silverside introduced: most abundant fish within a year",
        detail: "Mississippi silverside is introduced to Clear Lake as a biological control for the Clear Lake gnat and as bass forage. Within one year it becomes the single most abundant fish in the entire lake, an explosive population boom. It directly competes with larval hitch for zooplankton during their most vulnerable life stage, adding a new and persistent pressure to juvenile hitch survival.",
        tags: ["silverside", "invasive", "forage competition"]
      },
      {
        year: "1969-1973",
        yearClass: "danger",
        title: "Clear Lake splittail: last seen, declared extirpated",
        detail: "The Clear Lake splittail is last documented around 1969 and declared extirpated from the lake by 1973. An endemic species found nowhere else on Earth is gone. The entire collapse from peak abundance to extinction spans barely 30 years. The hitch is following a similar trajectory, just on a longer timeline.",
        tags: ["splittail", "extirpated", "endemic", "extinction"]
      },
      {
        year: "1980s",
        yearClass: "warn",
        title: "Hitch spawning observed in storm drains: habitat desperation",
        detail: "By the 1980s, hitch populations have declined so severely that spawning fish are being observed attempting to spawn in storm drains and other degraded structures, wherever water flows during the spring spawning period. This is a stark indicator of how compromised the natural tributary system has become. Restoration efforts begin: a fish ladder is installed, and early habitat work commences.",
        tags: ["hitch", "habitat degradation", "storm drains", "restoration"]
      },
      {
        year: "1985",
        yearClass: "danger",
        title: "Threadfin shad illegally introduced: boom-bust invasive",
        detail: "Threadfin shad are illegally introduced to Clear Lake in 1985, likely by anglers seeking to improve bass forage. They undergo an explosive population boom, then crash in the late 1980s, before being reintroduced in 1997. Their presence adds yet another forage competitor for juvenile native fish and increases the complexity of the disrupted food web.",
        tags: ["threadfin shad", "illegal introduction", "invasive"]
      },
      {
        year: "2002",
        yearClass: "warn",
        title: "Hitch still one of few persisting natives, but long-term trend clear",
        detail: "By 2002, the native fish community has been reduced to a handful of survivors. The hitch remains one of few native species still present in notable numbers alongside Sacramento blackfish, tule perch, and prickly sculpin. Sacramento perch is now believed extirpated (confirmed 2008). The long-term trend for hitch is clearly downward, chronic low population with no sign of recovery.",
        tags: ["hitch", "native survivors", "Sacramento perch", "2002"]
      },
      {
        year: "2004",
        yearClass: "danger",
        title: "Seigler Canyon Creek: last confirmed hitch spawning",
        detail: "Seigler Canyon Creek, historically one of the best hitch spawning sites in the watershed, records its last confirmed adult hitch observation around 2004. No adults have been documented there since, a tributary effectively lost to the species.",
        tags: ["spawning", "seigler canyon", "tributary loss"]
      },
      {
        year: "2008",
        yearClass: "danger",
        title: "Sacramento perch believed extirpated from Clear Lake",
        detail: "The Sacramento perch, California's only native sunfish, once common in Clear Lake, is believed extirpated by 2008. Its decline began with carp introduction in the 1880s and was never reversed. After more than a century of decline with brief fluctuations, the species has disappeared from the lake entirely. Another native casualty.",
        tags: ["Sacramento perch", "extirpated", "native loss"]
      },
      {
        year: "2013",
        yearClass: "",
        title: "CDFW visual spawner surveys begin: fewer than 500 counted; Moyle et al. paper published",
        detail: "CDFW begins standardized visual hitch spawner surveys across Clear Lake tributaries. The first count: fewer than 500 fish, a staggering contrast to the tens of thousands documented in the 1890s. In the same year, Moyle et al. publish \"The native and introduced fishes of Clear Lake: a review of the past to assist with decisions of the future,\" the comprehensive species-by-species historical review that forms the scientific foundation for understanding this collapse.",
        tags: ["CDFW", "monitoring", "Moyle 2013", "science"]
      }
    ]
  },
  {
    id: "era-crisis",
    title: "Crisis Years",
    range: "2014 to 2022",
    colorClass: "era-crisis",
    dotColor: "#c0392b",
    intro: "A decade of drought, regulatory failure, and scientific alarm. The species that survived the 1940s collapse nearly doesn't survive the 2020s.",
    introColor: "red",
    items: [
      {
        year: "2014",
        yearClass: "policy",
        title: "Hitch listed as Threatened under California ESA",
        detail: "CDFW formally lists the Clear Lake hitch as threatened under the California Endangered Species Act. The listing restricts take and mandates conservation efforts, but the pressures driving decline continue to mount. Water diversions, invasive species, and drought are not addressed by the listing alone.",
        tags: ["CESA", "state listing", "threatened"]
      },
      {
        year: "2017",
        yearClass: "",
        title: "USGS begins gillnet surveys: establishes population baseline",
        detail: "The U.S. Geological Survey begins standardized gillnet sampling across multiple lake zones to track fish community composition and abundance. The 2017 data establishes the baseline against which the subsequent collapse will be measured. Non-native species already dominate the fish assemblage at this point.",
        tags: ["USGS", "gillnet", "monitoring"]
      },
      {
        year: "2020",
        yearClass: "good",
        title: "1,672 spawners: best count in over a decade",
        detail: "All 1,672 hitch are observed exclusively in Kelsey Creek, the strongest year since monitoring began. But the concentration in a single tributary also highlights the species' catastrophic vulnerability: one bad year on one creek could erase the entire spawning class.",
        tags: ["spawning", "kelsey creek", "best count"]
      },
      {
        year: "2021",
        yearClass: "danger",
        title: "Catastrophic drought: only 120 spawners observed",
        detail: "A 93% crash from the prior year. Tributaries run dry before juveniles can emigrate. The USGS gillnet survey shows hitch abundance at approximately 14% of the 2017 baseline. Three consecutive drought years have pushed the species to the brink. This is the lowest spawner count ever recorded.",
        tags: ["drought", "population crash", "spawning failure"]
      },
      {
        year: "2022",
        yearClass: "danger",
        title: "306 spawners: USGS confirms 96% decline from 2017 baseline",
        detail: "Only 306 spawners counted. The USGS gillnet survey confirms hitch abundance has fallen to approximately 4% of the 2017 baseline, a 96% decline in five years. Over 20 non-native species now dominate the fish assemblage. The species is in freefall. This data triggers urgent federal-level response.",
        tags: ["96% decline", "USGS", "gillnet", "non-native dominance"]
      }
    ]
  },
  {
    id: "era-response",
    title: "Legal & Scientific Response",
    range: "2023 to 2025",
    colorClass: "era-response",
    dotColor: "#1a6fa8",
    items: [
      {
        year: "Feb 2023",
        yearClass: "danger",
        title: "Lake County declares local state of emergency",
        detail: "The Lake County Board of Supervisors passes an emergency resolution citing imminent risk of hitch extinction. The declaration enables expedited coordination between county, state, federal, and tribal agencies for conservation action.",
        tags: ["emergency", "policy", "Lake County"]
      },
      {
        year: "2023",
        yearClass: "good",
        title: "Record spawning year: 2,548 hitch after heavy rains",
        detail: "An exceptionally wet winter refills tributaries and the lake. 2,548 spawners are counted, the highest number since surveys began. A fragile sign of hope that demonstrates the hitch can recover when water conditions allow. But it also underscores how entirely the species' fate depends on rainfall. There is no resilience buffer.",
        tags: ["spawning", "record", "recovery signal"]
      },
      {
        year: "Jan 2024",
        yearClass: "policy",
        title: "State Water Board issues groundwater reporting orders for Big Valley",
        detail: "The California State Water Resources Control Board issues reporting orders for groundwater pumping in the Big Valley basin, the area surrounding Kelsey Creek, the hitch's most critical spawning tributary. Groundwater extraction is suspected of reducing tributary baseflows that hitch depend on for spawning and juvenile rearing.",
        tags: ["groundwater", "Big Valley", "kelsey creek"]
      },
      {
        year: "Jan 2025",
        yearClass: "policy",
        title: "USFWS proposes federal Threatened listing under ESA",
        detail: "The U.S. Fish & Wildlife Service publishes a proposed rule to list the Clear Lake hitch as threatened under the federal Endangered Species Act, with proposed critical habitat designation for Clear Lake, Thurston Lake, and 18 tributaries. The Species Status Assessment found the hitch at high risk of extinction within 50 years under most climate scenarios.",
        tags: ["ESA", "federal listing", "critical habitat", "USFWS"]
      },
      {
        year: "2025",
        yearClass: "",
        title: "USGS publishes OFR 2025-1018: most comprehensive fish survey to date",
        detail: "The U.S. Geological Survey publishes Open-File Report 2025-1018, documenting gillnet survey results from 2017 through 2022. The report confirms a 96% decline in hitch relative abundance and shows non-native species dominating Clear Lake's fish assemblage, with over 20 introduced species established.",
        tags: ["USGS", "OFR 2025-1018", "gillnet"]
      }
    ]
  },
  {
    id: "era-now",
    title: "Present Day: The Fight Continues",
    range: "2025 →",
    colorClass: "era-now",
    dotColor: "#2d7a3a",
    intro: "The emergency is real. So is the effort. Whether it's enough depends on decisions being made right now.",
    introColor: "green",
    items: [
      {
        year: "Spring 2025",
        yearClass: "good",
        title: "1,567 spawners observed: above 11-year average",
        detail: "CDFW visual surveys count 1,567 spawners in 2025, above the 11-year average of 1,032. Adobe and Kelsey Creeks are leading again. Collaborative monitoring between CDFW, tribal agencies, LCWPD, and community scientists continues.",
        tags: ["spawning", "2025", "monitoring"]
      },
      {
        year: "Ongoing",
        yearClass: "good",
        title: "Active tribal conservation programs",
        detail: "Robinson Rancheria conducts carp and goldfish removal with Rojas Fisheries. Habematolel Pomo of Upper Lake runs a hitch tagging study tracking migration patterns. Big Valley Rancheria operates the Clear Lake Cyanotoxin Monitoring Program. These tribal-led efforts represent some of the most direct and consistent conservation work underway.",
        tags: ["tribal", "invasive removal", "tagging"]
      },
      {
        year: "Ongoing",
        yearClass: "good",
        title: "Cole Creek Restoration: 1.55 miles; Main Street barrier removal on Kelsey",
        detail: "The Cole Creek Restoration Project aims to restore 1.55 miles of spawning habitat. The Main Street barrier on Kelsey Creek is being removed. These physical habitat improvements address one of the most direct threats to hitch spawning success.",
        tags: ["restoration", "cole creek", "barrier removal"]
      },
      {
        year: "2026",
        yearClass: "",
        title: "The Clear Lake Hitch Project launches",
        detail: "This website, built to centralize research, data, and public awareness about the Clear Lake hitch and ecosystem in one place. A community-driven effort to ensure the story of this fish is told, its data is accessible, and its future is fought for.",
        tags: ["community", "education", "awareness"]
      }
    ]
  }
]

function getYearBadgeClass(yearClass: string): string {
  switch (yearClass) {
    case "gold":
      return "bg-[rgba(212,168,48,0.15)] text-[#d4a830]"
    case "warn":
      return "bg-[#fff3d6] text-[#c87800]"
    case "danger":
      return "bg-[#fdecea] text-[#c0392b]"
    case "good":
      return "bg-[#e8f5eb] text-[#2d7a3a]"
    case "policy":
      return "bg-[#f0e8ff] text-[#6040a0]"
    default:
      return "bg-[#d6eaf8] text-[#1a6fa8]"
  }
}

function getEraLineColor(colorClass: string): string {
  switch (colorClass) {
    case "era-indigenous":
      return "border-l-[#d4a830]"
    case "era-colonial":
      return "border-l-[#a0b8c8]"
    case "era-decline":
      return "border-l-[#c87800]"
    case "era-crisis":
      return "border-l-[#c0392b]"
    case "era-response":
      return "border-l-[#1a6fa8]"
    case "era-now":
      return "border-l-[#2d7a3a]"
    default:
      return "border-l-[#dde3ea]"
  }
}

function getAbundanceClass(n: number): string {
  if (n === 5) return "bg-[#1a6fa8]"
  if (n === 4) return "bg-[#5096c8]"
  if (n === 3) return "bg-[#c87800]"
  if (n === 2) return "bg-[#e09040]"
  if (n === 1) return "bg-[#c0392b]"
  return "bg-[#dde3ea]"
}

function getStatusColor(status: string): string {
  switch (status) {
    case "native": return "#2d7a3a"
    case "introduced": return "#c0392b"
    case "extinct": return "#1a1a1a"
    case "extirpated": return "#c87800"
    default: return "#1a6fa8"
  }
}

export default function TimelinePage() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [activeEra, setActiveEra] = useState<string | null>(null)
  const [activeView, setActiveView] = useState<"era" | "species">("era")
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null)

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  const handleEraClick = (eraId: string) => {
    setActiveEra(eraId)
  }

  const natives = SPECIES.filter(s => s.status === 'native' || s.status === 'extirpated' || s.status === 'extinct')
  const introduced = SPECIES.filter(s => s.status === 'introduced')

  return (
    <div id="main" role="main" className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-[#0d4a72] px-4 md:px-8 h-[60px] flex items-center justify-between shadow-lg">
        <Link href="/" className="flex items-center gap-2 text-white font-semibold text-sm tracking-wide">
          <Fish className="w-6 h-6" />
          <span>The Clear Lake Hitch Project</span>
        </Link>
        <Link href="/" className="text-white/75 text-[0.82rem] flex items-center gap-1 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to main site
        </Link>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0d1f30] via-[#0d4a72] to-[#1a6fa8] py-14 px-4 md:px-8 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        <div className="max-w-[900px] mx-auto relative z-10">
          <h1 className="text-2xl md:text-[2.2rem] font-bold mb-3">Clear Lake Fish History Timeline</h1>
          <p className="text-white/80 text-base leading-relaxed max-w-[680px]">
            From 12,000 years of indigenous stewardship to the collapse of native species, told two ways: by era and by species. The full story of what was lost, what persists, and why.
          </p>
          <span className="inline-block mt-4 text-xs bg-black/30 border border-white/25 rounded-full px-3.5 py-1.5 text-white/90">
            Incorporating data from Moyle et al. 2013 · USGS OFR 2025-1018 · USFWS Federal Register · CDFW surveys
          </span>
        </div>
      </div>

      {/* View Switcher */}
      <div className="bg-background border-b-2 border-border py-3 px-4 md:px-8 sticky top-0 z-50">
        <div className="max-w-[900px] mx-auto flex gap-2 items-center flex-wrap">
          <span className="text-[0.72rem] font-bold uppercase tracking-wider text-muted-foreground mr-1 shrink-0">View by:</span>
          <button
            className={`px-4 py-1.5 rounded-md border-[1.5px] text-[0.82rem] font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeView === "era"
                ? "bg-[#1a6fa8] text-white border-[#1a6fa8]"
                : "bg-background text-muted-foreground border-border hover:border-[#1a6fa8] hover:text-[#1a6fa8]"
            }`}
            onClick={() => setActiveView("era")}
          >
            <Calendar className="w-4 h-4" />
            Era / Chronological
          </button>
          <button
            className={`px-4 py-1.5 rounded-md border-[1.5px] text-[0.82rem] font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeView === "species"
                ? "bg-[#1a6fa8] text-white border-[#1a6fa8]"
                : "bg-background text-muted-foreground border-border hover:border-[#1a6fa8] hover:text-[#1a6fa8]"
            }`}
            onClick={() => { setActiveView("species"); setSelectedSpecies(null); }}
          >
            <Fish className="w-4 h-4" />
            Species
          </button>
        </div>
      </div>

      {/* Era Navigation */}
      {activeView === "era" && (
        <div className="bg-[#fafbfc] border-b border-border py-2.5 px-4 md:px-8">
          <div className="max-w-[900px] mx-auto flex gap-1.5 flex-wrap">
            {timelineData.map((era) => (
              <a
                key={era.id}
                href={`#${era.id}`}
                onClick={() => handleEraClick(era.id)}
                className={`px-3 py-1 rounded-full border-[1.5px] text-[0.74rem] font-semibold transition-all whitespace-nowrap ${
                  activeEra === era.id
                    ? "bg-[#1a6fa8] text-white border-[#1a6fa8]"
                    : "bg-background text-muted-foreground border-border hover:border-[#1a6fa8] hover:text-[#1a6fa8]"
                }`}
              >
                {era.title.replace(": The Fight Continues", "")}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ERA PANEL */}
      {activeView === "era" && (
        <div className="max-w-[900px] mx-auto px-4 md:px-8 py-8 pb-16">
          {timelineData.map((era) => (
            <div key={era.id} id={era.id} className="mb-12">
              {/* Era Header */}
              <div className="flex items-center gap-3 mb-6 pt-4">
                <div
                  className="w-3.5 h-3.5 rounded-full border-[3px] border-background flex-shrink-0"
                  style={{ backgroundColor: era.dotColor, boxShadow: `0 0 0 2px ${era.dotColor}` }}
                />
                <div className="font-bold text-lg text-foreground">{era.title}</div>
                <div className="text-xs text-muted-foreground ml-auto flex-shrink-0 hidden sm:block">{era.range}</div>
              </div>

              {/* Era Intro */}
              {era.intro && (
                <div className={`rounded-lg p-4 mb-6 text-[0.82rem] text-muted-foreground leading-relaxed border-l-[3px] ${
                  era.introColor === "blue" ? "bg-[#d6eaf8] border-l-[#1a6fa8]" :
                  era.introColor === "red" ? "bg-[#fdecea] border-l-[#c0392b]" :
                  era.introColor === "green" ? "bg-[#e8f5eb] border-l-[#2d7a3a]" :
                  era.introColor === "amber" ? "bg-[#f5f0e8] border-l-[#c87800]" :
                  "bg-[#f5f0e8] border-l-[#d4a830]"
                }`}>
                  {era.intro}
                </div>
              )}

              {/* Timeline Items */}
              <div className={`relative pl-9 border-l-2 ml-[7px] ${getEraLineColor(era.colorClass)}`}>
                {era.items.map((item, itemIndex) => {
                  const itemId = `${era.id}-${itemIndex}`
                  const isExpanded = expandedItems.has(itemId)
                  
                  return (
                    <div
                      key={itemId}
                      className="relative mb-5 cursor-pointer group"
                      onClick={() => toggleItem(itemId)}
                    >
                      {/* Timeline Dot */}
                      <div
                        className={`absolute -left-[42px] top-2 w-2.5 h-2.5 rounded-full border-2 transition-all z-10 ${
                          isExpanded
                            ? "border-[#1a6fa8] bg-[#1a6fa8]"
                            : "border-border bg-background group-hover:border-[#1a6fa8] group-hover:bg-[#d6eaf8]"
                        }`}
                      />

                      {/* Item Header */}
                      <div className="flex items-baseline gap-2.5 flex-wrap">
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-xl flex-shrink-0 ${getYearBadgeClass(item.yearClass)}`}>
                          {item.year}
                        </span>
                        <span className="text-sm font-semibold text-foreground leading-snug">{item.title}</span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 text-muted-foreground ml-auto flex-shrink-0 transition-transform ${
                            isExpanded ? "rotate-90 text-[#1a6fa8]" : ""
                          }`}
                        />
                      </div>

                      {/* Item Detail */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded ? "max-h-[600px] py-2" : "max-h-0"
                        }`}
                      >
                        <p className="text-[0.83rem] text-muted-foreground leading-relaxed mb-2">{item.detail}</p>
                        <div className="flex gap-1 flex-wrap mt-2">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-[0.64rem] font-semibold px-2 py-0.5 rounded-lg bg-[#f5f0e8] text-muted-foreground border border-border"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SPECIES PANEL */}
      {activeView === "species" && (
        <>
          {/* Species Grid */}
          <div className="max-w-[900px] mx-auto px-4 md:px-8 py-8 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2.5">
            <div className="col-span-full text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground pb-1 border-b border-border">
              Native & Endemic Species
            </div>
            {natives.map((sp) => (
              <div
                key={sp.id}
                onClick={() => setSelectedSpecies(sp)}
                className={`border-[1.5px] rounded-lg p-3.5 cursor-pointer transition-all bg-background ${
                  selectedSpecies?.id === sp.id
                    ? "border-[#1a6fa8] bg-[#d6eaf8]"
                    : "border-border hover:border-[#1a6fa8] hover:shadow-md"
                }`}
              >
                <div className="text-[0.88rem] font-bold text-foreground">{sp.name}</div>
                <div className="text-[0.7rem] text-muted-foreground italic mt-0.5">{sp.latin}</div>
                <span className={`inline-block mt-2 text-[0.65rem] font-bold px-2 py-0.5 rounded-lg ${
                  sp.status === 'native' ? 'bg-[#e8f5eb] text-[#2d7a3a]' :
                  sp.status === 'extinct' ? 'bg-[#1a1a1a] text-white' :
                  'bg-[#fff3d6] text-[#c87800]'
                }`}>
                  {sp.status === 'native' ? 'Native' : sp.status === 'extinct' ? 'Extinct' : 'Extirpated'}
                </span>
                <div className="flex gap-0.5 mt-2 items-center">
                  {sp.scores.map((s, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-[18px] rounded-sm flex items-center justify-center text-[0.58rem] font-bold text-white/90 ${getAbundanceClass(s)}`}
                      title={`${ERAS[i]}: ${['-','Extirpated','Rare','Declining','Common','Abundant'][s]}`}
                    >
                      {s === 0 ? '-' : s}
                    </div>
                  ))}
                </div>
                <div className="flex gap-0 mt-0.5">
                  {ERAS.map((e, i) => (
                    <div key={i} className="flex-1 text-center text-[0.52rem] text-muted-foreground leading-tight">
                      {e.split('-')[0]}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="col-span-full text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground pb-1 border-b border-border mt-4">
              Introduced Species
            </div>
            {introduced.map((sp) => (
              <div
                key={sp.id}
                onClick={() => setSelectedSpecies(sp)}
                className={`border-[1.5px] rounded-lg p-3.5 cursor-pointer transition-all bg-background ${
                  selectedSpecies?.id === sp.id
                    ? "border-[#1a6fa8] bg-[#d6eaf8]"
                    : "border-border hover:border-[#1a6fa8] hover:shadow-md"
                }`}
              >
                <div className="text-[0.88rem] font-bold text-foreground">{sp.name}</div>
                <div className="text-[0.7rem] text-muted-foreground italic mt-0.5">{sp.latin}</div>
                <span className="inline-block mt-2 text-[0.65rem] font-bold px-2 py-0.5 rounded-lg bg-[#fdecea] text-[#c0392b]">
                  Introduced
                </span>
                <div className="flex gap-0.5 mt-2 items-center">
                  {sp.scores.map((s, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-[18px] rounded-sm flex items-center justify-center text-[0.58rem] font-bold ${s === 0 ? 'text-muted-foreground' : 'text-white/90'} ${getAbundanceClass(s)}`}
                      title={`${ERAS[i]}: ${['-','Extirpated','Rare','Declining','Common','Abundant'][s]}`}
                    >
                      {s === 0 ? '-' : s}
                    </div>
                  ))}
                </div>
                <div className="flex gap-0 mt-0.5">
                  {ERAS.map((e, i) => (
                    <div key={i} className="flex-1 text-center text-[0.52rem] text-muted-foreground leading-tight">
                      {e.split('-')[0]}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="max-w-[900px] mx-auto px-4 md:px-8 py-2 flex gap-4 flex-wrap items-center">
            {[
              { score: 5, label: 'Abundant (5)', class: 'bg-[#1a6fa8]' },
              { score: 4, label: 'Common (4)', class: 'bg-[#5096c8]' },
              { score: 3, label: 'Declining (3)', class: 'bg-[#c87800]' },
              { score: 2, label: 'Rare (2)', class: 'bg-[#e09040]' },
              { score: 1, label: 'Extirpated (1)', class: 'bg-[#c0392b]' },
              { score: 0, label: 'Not present (0)', class: 'bg-[#dde3ea]' },
            ].map((item) => (
              <div key={item.score} className="flex items-center gap-1.5 text-[0.7rem] text-muted-foreground">
                <div className={`w-3.5 h-3.5 rounded-sm ${item.class}`} />
                {item.label}
              </div>
            ))}
          </div>

          {/* Species Detail Panel */}
          {selectedSpecies && (
            <div className="max-w-[900px] mx-auto px-4 md:px-8 pb-12">
              <div className="border-[1.5px] border-border rounded-xl overflow-hidden">
                {/* Header */}
                <div
                  className="px-6 py-5 flex items-start justify-between gap-3"
                  style={{ backgroundColor: getStatusColor(selectedSpecies.status) }}
                >
                  <div>
                    <h2 className="text-lg font-bold text-white">{selectedSpecies.name}</h2>
                    <p className="text-sm text-white/70 italic mt-0.5">{selectedSpecies.latin} · {selectedSpecies.statusLabel}</p>
                  </div>
                  <button
                    onClick={() => setSelectedSpecies(null)}
                    className="bg-white/15 border-none text-white text-sm cursor-pointer px-2.5 py-1.5 rounded-md shrink-0 hover:bg-white/25 flex items-center gap-1"
                  >
                    <X className="w-4 h-4" />
                    Close
                  </button>
                </div>

                {/* Abundance Chart */}
                <div className="px-6 py-5 border-b border-border bg-[#fafbfc]">
                  <div className="text-[0.72rem] font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Abundance Score by Era (Moyle et al. 2013 / USGS)
                  </div>
                  <div className="flex gap-1.5 items-stretch">
                    {selectedSpecies.scores.map((s, i) => {
                      const h = s === 0 ? 4 : Math.round((s / 5) * 44)
                      const col = s === 0 ? '#dde3ea' : s >= 4 ? '#1a6fa8' : s === 3 ? '#c87800' : s === 2 ? '#e09040' : '#c0392b'
                      return (
                        <div key={i} className="flex-1 text-center">
                          <div className="h-[50px] flex items-end justify-center">
                            <div
                              className="w-full rounded-t"
                              style={{ height: `${h}px`, backgroundColor: col }}
                            />
                          </div>
                          <div className="text-[0.6rem] text-muted-foreground mt-1 leading-tight">{ERAS[i]}</div>
                          <div className="text-[0.72rem] font-bold mt-0.5" style={{ color: col }}>
                            {s === 0 ? '-' : s}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Timeline Body */}
                <div className="px-6 py-5">
                  <p className="text-[0.84rem] text-muted-foreground mb-4 leading-relaxed">{selectedSpecies.summary}</p>
                  <div
                    className="relative pl-9 border-l-2 ml-[7px]"
                    style={{ borderLeftColor: getStatusColor(selectedSpecies.status) }}
                  >
                    {selectedSpecies.timeline.map((section, si) => (
                      <div key={si}>
                        <div className="text-[0.72rem] font-bold uppercase tracking-wider text-muted-foreground my-3 pb-1 border-b border-border">
                          {section.era}
                        </div>
                        {section.items.map((item, ii) => {
                          const itemId = `sp-${selectedSpecies.id}-${si}-${ii}`
                          const isExpanded = expandedItems.has(itemId)
                          return (
                            <div
                              key={itemId}
                              className="relative mb-4 cursor-pointer group"
                              onClick={() => toggleItem(itemId)}
                            >
                              <div
                                className={`absolute -left-[42px] top-2 w-2.5 h-2.5 rounded-full border-2 transition-all z-10 ${
                                  isExpanded
                                    ? "border-[#1a6fa8] bg-[#1a6fa8]"
                                    : "border-border bg-background group-hover:border-[#1a6fa8] group-hover:bg-[#d6eaf8]"
                                }`}
                              />
                              <div className="flex items-baseline gap-2.5 flex-wrap">
                                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-xl flex-shrink-0 ${getYearBadgeClass(item.tag || '')}`}>
                                  {item.y}
                                </span>
                                <span className="text-sm font-semibold text-foreground leading-snug">{item.t}</span>
                                <ChevronRight
                                  className={`w-3.5 h-3.5 text-muted-foreground ml-auto flex-shrink-0 transition-transform ${
                                    isExpanded ? "rotate-90 text-[#1a6fa8]" : ""
                                  }`}
                                />
                              </div>
                              <div
                                className={`overflow-hidden transition-all duration-300 ${
                                  isExpanded ? "max-h-[400px] py-2" : "max-h-0"
                                }`}
                              >
                                <p className="text-[0.83rem] text-muted-foreground leading-relaxed">{item.d}</p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Source Footer */}
      <div className="max-w-[900px] mx-auto px-4 md:px-8 py-6 border-t border-border text-[0.72rem] text-muted-foreground italic leading-relaxed">
        Primary sources:{" "}
        <span className="not-italic">Moyle et al. 2013: &quot;The native and introduced fishes of Clear Lake: a review of the past to assist with decisions of the future&quot; (Western North American Naturalist)</span>
        {" · "}
        <a href="https://pubs.usgs.gov/publication/ofr20251018" target="_blank" rel="noopener noreferrer" className="text-[#1a6fa8] no-underline hover:underline">
          USGS OFR 2025-1018
        </a>
        {" · "}
        <a href="https://www.federalregister.gov/documents/2025/01/22/2025-01502/endangered-and-threatened-wildlife-and-plants-threatened-species-status-for-clear-lake-hitch" target="_blank" rel="noopener noreferrer" className="text-[#1a6fa8] no-underline hover:underline">
          USFWS Federal Register 90 FR 5702
        </a>
        {" · "}
        <a href="https://www.lakecountyca.gov/1450/Clear-Lake-Hitch" target="_blank" rel="noopener noreferrer" className="text-[#1a6fa8] no-underline hover:underline">
          Lake County WPD
        </a>
        {" · "}
        <a href="https://wildlife.ca.gov/" target="_blank" rel="noopener noreferrer" className="text-[#1a6fa8] no-underline hover:underline">
          CDFW
        </a>
        {" · "}Tribal monitoring programs · Historical records
        <br /><br />
        Species abundance scores based on Appendix I of Moyle et al. 2013. Scoring: 5=Abundant, 4=Common, 3=Declining, 2=Rare, 1=Extirpated, 0=Not present / not yet introduced.
      </div>
    </div>
  )
}
