const stages: { n: number; title: string; desc: string }[] = [
  { n: 1, title: 'Overwinter in the lake', desc: 'Adult hitch live in open Clear Lake through most of the year.' },
  { n: 2, title: 'Spring migration', desc: 'Adults run up tributary creeks to spawn, roughly February to May.' },
  { n: 3, title: 'Spawning', desc: 'Eggs are laid over clean gravel in flowing, well-oxygenated water.' },
  { n: 4, title: 'Eggs & larvae', desc: 'Young hatch and develop in the creeks through the spring.' },
  { n: 5, title: 'Juveniles return', desc: 'Juveniles emigrate back down to the lake to grow into adults.' },
]

export function Lifecycle() {
  return (
    <div>
      <p className="text-muted-foreground leading-relaxed mb-6">
        The Clear Lake hitch is an obligate stream spawner: it has to complete this loop every year, and it depends on
        flowing tributaries to do it.
      </p>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {stages.map((s) => (
          <li key={s.n} className="border border-border rounded-xl p-4 bg-background">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold mb-2"
              style={{ background: 'var(--lake-light)', color: 'var(--lake-dark)' }}
            >
              {s.n}
            </div>
            <div className="font-semibold text-foreground text-sm mb-1">{s.title}</div>
            <div className="text-muted-foreground text-sm leading-snug">{s.desc}</div>
          </li>
        ))}
      </ol>

      <p className="text-sm mt-3" style={{ color: 'var(--lake-dark)' }}>
        <span aria-hidden="true">&#8635;</span> Then the cycle begins again the next spring.
      </p>

      <div
        className="border-l-4 rounded-r-lg p-4 text-sm leading-relaxed mt-5"
        style={{ background: 'var(--lake-light)', borderColor: 'var(--lake)', color: 'var(--lake-dark)' }}
      >
        <strong>Where the cycle breaks:</strong> drought and water diversions can dry the creeks before juveniles finish
        steps 3 to 5, stranding a whole year&apos;s young; and road crossings, culverts, and dams can block the spring
        migration at step 2. Year-to-year numbers now track almost entirely with how much water reaches the tributaries.
      </div>
    </div>
  )
}
