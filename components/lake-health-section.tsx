import { Leaf, Fish, Droplets, Thermometer, Building2, Microscope } from "lucide-react"

const threats = [
  {
    icon: Leaf,
    title: "Harmful Algal Blooms (HABs)",
    description: "Clear Lake experiences severe annual cyanobacterial blooms that produce toxins dangerous to fish, wildlife, pets, and humans. Blooms reduce oxygen, block sunlight, and devastate aquatic food webs, directly impacting juvenile hitch survival.",
  },
  {
    icon: Fish,
    title: "Invasive Species",
    description: "Non-native species like common carp, goldfish, largemouth bass, and others compete with and predate on native fish. Carp and goldfish disturb sediments, uproot vegetation, and consume hitch eggs, contributing directly to recruitment failure each spawning season.",
  },
  {
    icon: Droplets,
    title: "Drought & Habitat Loss",
    description: "Persistent drought has reduced tributary flows, leaving hitch stranded or preventing migration entirely. Riparian vegetation loss, channel degradation, and agricultural diversions further reduce viable spawning habitat year over year.",
  },
  {
    icon: Thermometer,
    title: "Water Quality & Warming",
    description: "Rising temperatures, elevated nutrient loads from agricultural runoff, and legacy contamination from historic mercury mining combine to stress fish populations and accelerate harmful algal bloom frequency and severity throughout the year.",
  },
  {
    icon: Building2,
    title: "Watershed Development",
    description: "Land use changes increase runoff, sedimentation, and nutrient input. Road crossings and diversions in tributary streams act as physical barriers to hitch spawning migration.",
  },
  {
    icon: Microscope,
    title: "What We're Doing",
    description: null,
    list: [
      "Annual visual spawner surveys: CDFW, Robinson Rancheria, Habematolel Pomo of Upper Lake, Big Valley Rancheria, LCWPD, and community scientists",
      "Hitch tagging study: Habematolel Pomo of Upper Lake monitors migration patterns",
      "Carp & goldfish removal: CDFW, Robinson Rancheria and Rojas Fisheries",
      "CDFW in-lake mark-recapture survey",
      "USGS gillnet surveys: abundance and distribution since 2017",
      "Hitch Rescue Team: responds to stranded hitch reports",
    ],
  },
]

export function LakeHealthSection() {
  return (
    <section id="health" className="py-20 px-4 md:px-8 bg-[var(--lake-dark)] text-white">
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#7fd8ff] bg-white/[0.12] px-3 py-1 rounded-full mb-4">
          Lake Health
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Threats &amp; Conservation
        </h2>
        <p className="text-white/75 text-base max-w-[650px] mb-12 leading-relaxed">
          Clear Lake faces a convergence of environmental pressures, and an equally broad coalition working to reverse them.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {threats.map((threat) => {
            const Icon = threat.icon
            return (
              <div
                key={threat.title}
                className="bg-white/[0.07] border border-white/[0.12] rounded-2xl p-6"
              >
                <Icon className="w-8 h-8 text-[#7fd8ff] mb-4" />
                <h3 className="text-white font-semibold text-base mb-3 pb-2 border-b border-white/10">{threat.title}</h3>
                {threat.description ? (
                  <p className="text-white/70 text-sm leading-relaxed">{threat.description}</p>
                ) : threat.list ? (
                  <ul className="text-white/70 text-sm leading-relaxed list-disc pl-4 space-y-1">
                    {threat.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
