import Link from "next/link"
import { Telescope, Tag, Phone, TreePine, ExternalLink } from "lucide-react"
import { SiteForm } from "@/components/site-form"

const involvementOptions = [
  {
    icon: Telescope,
    title: "Become a Community Scientist",
    description: "Report Clear Lake hitch sightings during the spring spawning season (March to May). Your observations directly support the long-term population record.",
    linkText: "Volunteer here",
    href: "https://www.lakecountyca.gov/1913/Community-Science",
    external: true,
  },
  {
    icon: Tag,
    title: "Get a Free Hitch Sticker",
    description: "Pick up your free Clear Lake hitch sticker at the Lake County Water Resources front office in Lakeport. Spread awareness in your community.",
    linkText: "255 N. Forbes St., Room 309",
    href: "https://www.lakecountyca.gov/1450/Clear-Lake-Hitch",
    external: true,
  },
  {
    icon: Phone,
    title: "Report Stranded Hitch",
    description: "If you spot hitch stranded in a dry or disconnected tributary, call immediately. The Hitch Rescue Team responds and relocates fish to safe water. Quick action saves lives.",
    linkText: "Call (707) 263-2344",
    href: "tel:7072632344",
    external: false,
    note: "Permits are required to conduct fish rescues. Always contact the Rescue Team rather than attempting relocation yourself.",
  },
  {
    icon: TreePine,
    title: "Support Lake Rehabilitation",
    description: "Multiple organizations are working to restore Clear Lake's health, from large-scale habitat projects to community shoreline stewardship.",
    linkText: "Blue Ribbon Committee (AB 707)",
    href: "https://resources.ca.gov/Initiatives/Blue-Ribbon-Committee-for-the-Rehabilitation-of-Clear-Lake",
    external: true,
    additionalLinks: [
      { text: "Middle Creek Restoration Project", href: "https://www.lakecountyca.gov/1273/Middle-Creek-Restoration-Project" },
      { text: "Shoreline Stewardship: Invasive Primrose Removal", href: "https://www.lakecountyca.gov/1545/Primrose" },
      { text: "Lake County Land Trust", href: "https://www.lakecountylandtrust.org/" },
      { text: "Tribal EcoRestoration Alliance", href: "https://www.tribalecorestoration.org/" },
    ],
  },
]

export function GetInvolvedSection() {
  return (
    <section id="involved" className="py-20 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--lake)] bg-[var(--lake-light)] px-3 py-1 rounded-full mb-4">
          Get Involved
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2">
          Help Protect the Hitch
        </h2>
        <p className="text-[var(--muted-color)] text-base max-w-[650px] mb-12 leading-relaxed">
          {"Whether you're a scientist, angler, student, or just a curious resident, there's a way for you to contribute to Clear Lake Hitch conservation."}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {involvementOptions.map((option) => {
            const Icon = option.icon
            return (
              <div
                key={option.title}
                className="bg-[var(--sand)] rounded-2xl p-6 border border-[var(--border-color)]"
              >
                <Icon className="w-8 h-8 text-[var(--lake)] mb-4" />
                <h3 className="font-bold text-base mb-2">{option.title}</h3>
                <p className="text-sm text-[var(--muted-color)] leading-relaxed mb-4">{option.description}</p>
                <Link
                  href={option.href}
                  target={option.external ? "_blank" : undefined}
                  rel={option.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--lake)] font-semibold hover:underline"
                >
                  {option.linkText}
                  {option.external && <ExternalLink className="w-3.5 h-3.5" />}
                </Link>
                {"additionalLinks" in option && option.additionalLinks && (
                  <div className="flex flex-col gap-1.5 mt-2">
                    {option.additionalLinks.map((link: { text: string; href: string }) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[var(--lake)] font-semibold hover:underline"
                      >
                        {link.text}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>
                )}
                {"note" in option && option.note && (
                  <span className="block text-xs text-[var(--amber)] font-semibold mt-2">{option.note}</span>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-12 pt-10 border-t border-[var(--border-color)]">
          <h3 className="text-xl font-bold text-[var(--text)] mb-2">Report a hitch sighting</h3>
          <p className="text-[var(--muted-color)] text-sm max-w-[560px] mb-6 leading-relaxed">
            Saw hitch in a creek this spring? Share what you saw to support the community-science record. For a fish
            stranded in a drying creek, call the Hitch Rescue Team at (707) 263-2344 right away.
          </p>
          <SiteForm kind="sighting" />
        </div>
      </div>
    </section>
  )
}
