import Link from "next/link"

const infoCards = [
  {
    title: "Biology",
    content: "Lives up to 6 years · Grows to ~350mm · Spawns each spring in lake tributaries · Feeds almost primarily on Daphnia (water fleas), supplemented by algae, zooplankton, and insects.",
    variant: "default",
  },
  {
    title: "Cultural Significance",
    content: "A vital subsistence resource for Pomo Tribes since time immemorial. Spring spawning runs were historically massive events tied to ceremony, community, and food security.",
    variant: "default",
  },
  {
    title: "CA Endangered Species Act: Listed Threatened (2014)",
    content: "The California Department of Fish and Wildlife has protected the CLH as threatened since 2014, restricting take and mandating conservation efforts.",
    variant: "warn",
  },
  {
    title: "Federal ESA Listing Proposed: January 2025",
    content: "The U.S. Fish & Wildlife Service has proposed listing the CLH as threatened under federal law, a critical step toward broader habitat and population protection.",
    variant: "danger",
  },
  {
    title: "Lake County Watershed Protection District",
    content: "Conducts annual spawner surveys, community science programs, and collaborates with Tribes, state and federal agencies on habitat restoration and population research.",
    variant: "default",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--lake)] bg-[var(--lake-light)] px-3 py-1 rounded-full mb-4">
              About the Hitch
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
              {"California's Rarest Minnow"}
            </h2>
            <div className="space-y-4 text-[var(--muted-color)] text-[0.97rem] leading-relaxed">
              <p>
                The Clear Lake hitch (<em>Lavinia exilicauda chi</em>) is a subspecies of minnow found only in Clear Lake, Lake County, California, the <strong className="text-[var(--text)]">largest natural freshwater lake entirely within California</strong>, and one of the <strong className="text-[var(--text)]">oldest lakes in North America </strong> at nearly 500,000 years old. It is one of the most ecologically and culturally significant fish in the state, and it&apos;s disappearing.
              </p>
              <p>
                Each spring, adult hitch migrate from the lake into its tributaries to spawn, a spectacle that has sustained the <strong className="text-[var(--text)]">Indigenous Pomo Tribes</strong> as a food and cultural resource since time immemorial. The Pomo people know this fish as <em>chi</em>. Tribal communities have long held deep spiritual and practical connections to this fish and the watershed that sustains it.
              </p>
              <p>
                Today, the Clear Lake hitch faces mounting threats: prolonged drought, loss of spawning habitat, harmful algal blooms, competition and predation from invasive species, and reduced water flows in tributaries. In February 2023, Lake County declared a <strong className="text-[var(--text)]">local state of emergency</strong> due to the risk of extinction. As of January 2025, the U.S. Fish &amp; Wildlife Service has proposed listing the hitch as <strong className="text-[var(--text)]">threatened under the Federal Endangered Species Act</strong>.
              </p>
            </div>
            <p className="mt-5">
              <Link href="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--lake)] hover:underline">
                Who runs this project? About &amp; contact &rarr;
              </Link>
            </p>
          </div>

          {/* Info Cards */}
          <div className="space-y-3">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-xl p-5 border-l-4 ${card.variant === "warn"
                  ? "bg-[var(--amber-light)] border-l-[var(--amber)]"
                  : card.variant === "danger"
                    ? "bg-[#fdecea] border-l-[var(--red)]"
                    : "bg-[var(--sand)] border-l-[var(--lake)]"
                  }`}
              >
                <h3 className="text-sm font-bold mb-1">{card.title}</h3>
                <p className="text-sm text-[var(--muted-color)] leading-relaxed">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
