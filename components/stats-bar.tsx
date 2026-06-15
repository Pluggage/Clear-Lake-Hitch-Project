const stats = [
  { number: "36", label: "Fish species documented" },
  { number: "4", label: "Native species extinct/extirpated" },
  { number: "20", label: "Introduced species" },
  { number: "2014", label: "Year CLH listed as threatened" },
]

export function StatsBar() {
  return (
    <div className="bg-[var(--sand)] border-b border-[var(--border-color)] py-6 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center p-4 bg-white rounded-xl border border-[var(--border-color)]">
            <div className="text-2xl md:text-3xl font-bold text-[var(--lake)]">{stat.number}</div>
            <div className="text-xs text-[var(--muted-color)] mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
