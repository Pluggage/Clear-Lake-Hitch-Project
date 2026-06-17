import { FISH } from "@/lib/fish-data"

// Counts are derived from the fish list so the headline numbers can't drift
// from the Fish Guide.
const total = FISH.length
const introduced = FISH.filter((f) => f.type === "introduced").length
const nativeLost = FISH.filter(
  (f) => f.type === "native" && (f.status === "extinct" || f.status === "extirpated"),
).length

const stats = [
  { number: String(total), label: "Fish species documented" },
  { number: String(nativeLost), label: "Native species extinct/extirpated" },
  { number: String(introduced), label: "Introduced species" },
  { number: "2014", label: "Year CLH listed as threatened" },
]

export function StatsBar() {
  return (
    <div className="bg-[var(--sand)] border-b border-[var(--border-color)] py-6 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-white rounded-xl border border-[var(--border-color)]">
              <div className="text-2xl md:text-3xl font-bold text-[var(--lake)]">{stat.number}</div>
              <div className="text-xs text-[var(--muted-color)] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-[0.7rem] text-[var(--muted-color)] mt-3 text-center leading-relaxed">
          Species counts are drawn from the Clear Lake fish list in the Fish Guide, consistent with the
          fish-community review in Thompson et al. 2013 (California Fish and Game 99(1):7&ndash;41).
        </p>
      </div>
    </div>
  )
}
