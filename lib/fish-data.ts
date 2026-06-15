export interface Fish {
  name: string
  sci: string
  type: "native" | "introduced" | "failed"
  status: "" | "extinct" | "extirpated" | "threatened" | "invasive"
  desc: string
  family: string
  order: string
  introYear?: string
  lastSeen?: string
}

export const FISH: Fish[] = [
  {name:"Pacific Lamprey",sci:"Entosphenus tridentatus",type:"native",status:"extirpated",lastSeen:"1894",desc:"An anadromous species historically found in Clear Lake. Extirpated from the lake by around 1894. Pacific lamprey play vital ecological roles as both predator and prey.",family:"Petromyzontidae",order:"Petromyzontiformes"},
  {name:"Western Brook Lamprey",sci:"Lampetra richardsoni",type:"native",status:"",desc:"A small, non-parasitic lamprey native to Clear Lake. Spends its entire life in freshwater and does not feed as an adult.",family:"Petromyzontidae",order:"Petromyzontiformes"},
  {name:"Sacramento Sucker",sci:"Catostomus occidentalis occidentalis",type:"native",status:"",desc:"A native bottom-dwelling sucker common in California waterways. Feeds on algae, detritus, and invertebrates from the lake bottom.",family:"Catostomidae",order:"Cypriniformes"},
  {name:"Thicktail Chub",sci:"Gila crassicauda",type:"native",status:"extinct",lastSeen:"1938",desc:"Declared globally extinct — once abundant across Central Valley waterways including Clear Lake, last observed around 1938. One of California's most significant fish extinctions.",family:"Leuciscidae",order:"Cypriniformes"},
  {name:"Clear Lake Roach",sci:"Lavinia symmetricus ssp.",type:"native",status:"",desc:"A subspecies of roach endemic to the Clear Lake basin. Adaptable and omnivorous, roach are common in the tributaries of Clear Lake, often observed alongside spawning hitch in spring.",family:"Leuciscidae",order:"Cypriniformes"},
  {name:"Clear Lake Hitch",sci:"Lavinia exilicauda chi",type:"native",status:"threatened",desc:"The iconic flagship species of Clear Lake — an endemic minnow that spawns in tributaries each spring. Listed as threatened under the California ESA since 2014, with federal listing proposed in January 2025. Cultural keystone for Pomo Tribes, known to the Pomo people as chi. Population has declined an estimated 100-fold from historical numbers.",family:"Leuciscidae",order:"Cypriniformes"},
  {name:"Hardhead",sci:"Mylopharodon conocephalus",type:"native",status:"extirpated",lastSeen:"1894",desc:"Once present in Clear Lake, last recorded around 1894 and now extirpated. One of California's larger native minnows, capable of reaching over 60cm. Highly sensitive to water quality degradation.",family:"Leuciscidae",order:"Cypriniformes"},
  {name:"Sacramento Blackfish",sci:"Orthodon microlepidotus",type:"native",status:"",desc:"A filter-feeding native minnow that consumes algae and organic particles. Juveniles have been observed alongside hitch in Burns Valley Creek during the 2024 Lake County WPD surveys.",family:"Leuciscidae",order:"Cypriniformes"},
  {name:"Clear Lake Splittail",sci:"Pogonichthys ciscoides",type:"native",status:"extinct",lastSeen:"1969",desc:"Extinct and endemic — lived only in Clear Lake and its tributaries. Last documented around 1969. A sobering reminder of what is at stake for the hitch.",family:"Leuciscidae",order:"Cypriniformes"},
  {name:"Sacramento Pikeminnow",sci:"Ptychocheilus grandis",type:"native",status:"",desc:"California's largest native minnow, capable of exceeding 1 meter in length. An apex predator within native fish communities of Clear Lake and its tributaries.",family:"Leuciscidae",order:"Cypriniformes"},
  {name:"Inland Threespine Stickleback",sci:"Gasterosteus aculeatus microcephalus",type:"native",status:"",desc:"A small native fish with lateral bony plates. Males construct and guard nests aggressively during spawning season.",family:"Gasterosteidae",order:"Gasterosteiformes"},
  {name:"Clear Lake Tule Perch",sci:"Hysterocarpus traskii lagunae",type:"native",status:"",desc:"A subspecies of tule perch found only in Clear Lake. Tule perch are the only freshwater surfperch in the world — all other members of family Embiotocidae are marine. Gives birth to live young.",family:"Embiotocidae",order:"Perciformes"},
  {name:"Sacramento Perch",sci:"Archoplites interruptus",type:"native",status:"",desc:"California's only native sunfish. Once widespread, it has declined severely due to competition and predation from introduced sunfish species.",family:"Centrarchidae",order:"Perciformes"},
  {name:"Rainbow Trout / Steelhead",sci:"Oncorhynchus mykiss",type:"native",status:"",desc:"One of California's most iconic fish. Historically included both resident rainbow trout and anadromous steelhead in Clear Lake's watershed. Occasional individuals still enter from feeder streams.",family:"Salmonidae",order:"Salmoniformes"},
  {name:"Clear Lake Prickly Sculpin",sci:"Cottus asper ssp.",type:"native",status:"",desc:"A bottom-dwelling native sculpin important in benthic food webs.",family:"Cottidae",order:"Scorpaeniformes"},
  {name:"Mississippi Silverside",sci:"Menidia audens",type:"introduced",status:"",introYear:"1967",desc:"Introduced in 1967 as a biological control agent targeting the Clear Lake gnat, and to serve as forage for bass. Became the most abundant fish in the lake within years. Competes directly with native larval hitch for zooplankton.",family:"Atherinopsidae",order:"Atheriniformes"},
  {name:"Threadfin Shad",sci:"Dorosoma petenense",type:"introduced",status:"",introYear:"1985",desc:"Introduced as a forage fish for bass in 1985. Now forms large schools competing with native larval fish for zooplankton.",family:"Clupeidae",order:"Clupeiformes"},
  {name:"Goldfish",sci:"Carassius auratus",type:"introduced",status:"invasive",introYear:"1860s–1870s",desc:"One of the first fish introduced to Clear Lake. Goldfish disturb sediments, uproot vegetation, degrade water quality, and consume hitch eggs — directly threatening recruitment. Subject of active removal campaigns by Robinson Rancheria and Rojas Fisheries.",family:"Cyprinidae",order:"Cypriniformes"},
  {name:"Common Carp",sci:"Cyprinus carpio",type:"introduced",status:"invasive",introYear:"1880",desc:"Introduced in 1880. Roots through sediments releasing nutrients that fuel algal blooms, reduces water clarity, and actively consumes hitch eggs. Subject of active removal efforts.",family:"Cyprinidae",order:"Cypriniformes"},
  {name:"Golden Shiner",sci:"Notemigonus crysoleucas",type:"introduced",status:"",introYear:"1896",desc:"Introduced in 1896 as a popular bait fish. Competes with native minnow species for food resources.",family:"Leuciscidae",order:"Cypriniformes"},
  {name:"Fathead Minnow",sci:"Pimephales promelas",type:"introduced",status:"",desc:"Widely used as bait and in aquaculture. Introduction date to Clear Lake is uncertain.",family:"Leuciscidae",order:"Cypriniformes"},
  {name:"Western Mosquitofish",sci:"Gambusia affinis",type:"introduced",status:"",introYear:"1925",desc:"Introduced in 1925 for mosquito control targeting the Clear Lake gnat. Aggressive fin-nippers that harass native fish including juvenile hitch.",family:"Poeciliidae",order:"Cyprinodontiformes"},
  {name:"Green Sunfish",sci:"Lepomis cyanellus",type:"introduced",status:"",introYear:"1941",desc:"First appeared on record in 1941. Hardy and aggressive, readily hybridizes with other sunfish.",family:"Centrarchidae",order:"Perciformes"},
  {name:"Pumpkinseed",sci:"Lepomis gibbosus",type:"introduced",status:"",desc:"A colorful sunfish introduced from eastern North America.",family:"Centrarchidae",order:"Perciformes"},
  {name:"Bluegill",sci:"Lepomis macrochirus",type:"introduced",status:"",introYear:"1909–1910",desc:"Introduced in 1909–1910. One of the most abundant introduced sunfish in Clear Lake.",family:"Centrarchidae",order:"Perciformes"},
  {name:"Redear Sunfish",sci:"Lepomis microlophus",type:"introduced",status:"",introYear:"1973",desc:"Introduced in 1973. Known as 'shell crackers' for crushing snails and mollusks.",family:"Centrarchidae",order:"Perciformes"},
  {name:"Smallmouth Bass",sci:"Micropterus dolomieu",type:"introduced",status:"",introYear:"1895",desc:"Introduced in 1895. A prized sport fish and apex predator impacting native fish populations.",family:"Centrarchidae",order:"Perciformes"},
  {name:"Florida Largemouth Bass",sci:"Micropterus salmoides floridanus",type:"introduced",status:"",introYear:"1969–1971",desc:"Introduced from Florida between 1969 and 1971. A top predator consuming juvenile native fish including hitch. Mercury advisory in effect.",family:"Centrarchidae",order:"Perciformes"},
  {name:"Northern Largemouth Bass",sci:"Micropterus salmoides salmoides",type:"introduced",status:"",introYear:"1888",desc:"First introduced in 1888. Two-thirds of fish caught at Clear Lake are largemouth bass. Ranked #1 bass lake on the West Coast. Mercury advisory in effect. Lake record: 17.52 lbs (1990).",family:"Centrarchidae",order:"Perciformes"},
  {name:"White Crappie",sci:"Pomoxis annularis",type:"introduced",status:"",introYear:"1950s",desc:"Introduced in the 1950s. Competes with native species.",family:"Centrarchidae",order:"Perciformes"},
  {name:"Black Crappie",sci:"Pomoxis nigromaculatus",type:"introduced",status:"",introYear:"1915",desc:"Introduced in 1915. State crappie record (4.33 lbs) was caught at Clear Lake.",family:"Centrarchidae",order:"Perciformes"},
  {name:"Brown Trout",sci:"Salmo trutta",type:"introduced",status:"",desc:"A European trout introduced for sport fishing. An aggressive predator capable of out-competing native salmonids.",family:"Salmonidae",order:"Salmoniformes"},
  {name:"Brown Bullhead",sci:"Ameiurus nebulosus",type:"introduced",status:"",introYear:"1880",desc:"Introduced in 1880. Tolerant of poor water quality, warm temperatures, and low dissolved oxygen.",family:"Ictaluridae",order:"Siluriformes"},
  {name:"White Catfish",sci:"Ameiurus catus",type:"introduced",status:"",introYear:"1880",desc:"Introduced in 1880 and again in 1923. The smallest catfish species at Clear Lake.",family:"Ictaluridae",order:"Siluriformes"},
  {name:"Channel Catfish",sci:"Ictalurus punctatus",type:"introduced",status:"",introYear:"1950",desc:"Introduced in 1950. Popular sport and food fish at Clear Lake. Lake record: 33.57 lbs (2019).",family:"Ictaluridae",order:"Siluriformes"},
]

export const FAILED_FISH: Fish[] = [
  {name:"Lake Trout",sci:"Salvelinus namaycush",type:"failed",status:"",introYear:"1924",desc:"Introduced in 1924 but failed to establish. A cold-water species native to northern glacial lakes — poorly suited to Clear Lake's warm, shallow, eutrophic conditions.",family:"Salmonidae",order:"Salmoniformes"},
  {name:"Lake Whitefish",sci:"Coregonus clupeaformis",type:"failed",status:"",introYear:"~1873",desc:"Among the earliest introductions to Clear Lake, around 1873, but never established. Could not adapt to Clear Lake's warm environment.",family:"Salmonidae",order:"Salmoniformes"},
  {name:"Mud / Grass Pickerel",sci:"Esox americanus",type:"failed",status:"",introYear:"1896",desc:"Introduced in 1896 but failed to establish. Requires cooler, clearer water than Clear Lake provides.",family:"Esocidae",order:"Esociformes"},
  {name:"Yellow Perch",sci:"Perca flavescens",type:"failed",status:"",introYear:"1909",desc:"Introduced in 1909 but did not establish. Generally prefer cooler, clearer lake environments.",family:"Percidae",order:"Perciformes"},
]

export const fishEmojis: Record<string, string> = {
  "Pacific Lamprey":"~",
  "Western Brook Lamprey":"~",
  "Sacramento Sucker":"",
  "Thicktail Chub":"",
  "Clear Lake Roach":"",
  "Clear Lake Hitch":"",
  "Hardhead":"",
  "Sacramento Blackfish":"",
  "Clear Lake Splittail":"",
  "Sacramento Pikeminnow":"",
  "Inland Threespine Stickleback":"",
  "Clear Lake Tule Perch":"",
  "Sacramento Perch":"",
  "Rainbow Trout / Steelhead":"",
  "Clear Lake Prickly Sculpin":"",
  "Mississippi Silverside":"",
  "Threadfin Shad":"",
  "Goldfish":"",
  "Common Carp":"",
  "Golden Shiner":"",
  "Fathead Minnow":"",
  "Western Mosquitofish":"",
  "Green Sunfish":"",
  "Pumpkinseed":"",
  "Bluegill":"",
  "Redear Sunfish":"",
  "Smallmouth Bass":"",
  "Florida Largemouth Bass":"",
  "Northern Largemouth Bass":"",
  "White Crappie":"",
  "Black Crappie":"",
  "Brown Trout":"",
  "Brown Bullhead":"",
  "White Catfish":"",
  "Channel Catfish":""
}
