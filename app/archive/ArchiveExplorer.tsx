'use client'

import { useEffect, useRef, useState } from 'react'
import { ARCHIVE } from './archive-data'

const YEARS = [
  { val: 'all', label: 'All years' },
  { val: '2025', label: '2025' },
  { val: '2024', label: '2024' },
  { val: '2023', label: '2023' },
  { val: '2020s', label: '2020-2022' },
  { val: '2015s', label: '2015-2019' },
  { val: 'pre2015', label: 'Pre-2015' },
]
const TOPICS = [
  { tag: 'spawning', label: 'Spawning surveys' },
  { tag: 'population', label: 'Population estimates' },
  { tag: 'habitat', label: 'Habitat' },
  { tag: 'invasive species', label: 'Invasive species' },
  { tag: 'water quality', label: 'Water quality / DO' },
  { tag: 'federal listing', label: 'Federal listing' },
  { tag: 'policy', label: 'Policy / Emergency' },
  { tag: 'fish rescue', label: 'Fish rescues' },
  { tag: 'PIT tagging', label: 'PIT tagging' },
  { tag: 'general survey', label: 'General fish surveys' },
  { tag: 'community science', label: 'Community science' },
  { tag: 'barriers', label: 'Barriers / Passage' },
]
const AGENCIES = [
  { a: 'USGS', label: 'USGS' },
  { a: 'CDFW', label: 'CDFW' },
  { a: 'USFWS', label: 'USFWS' },
  { a: 'LCWPD', label: 'LCWPD' },
  { a: 'UC Davis', label: 'UC Davis' },
  { a: 'Tribal', label: 'Tribal Programs' },
  { a: 'Lake County', label: 'Lake County' },
]

export function ArchiveExplorer() {
  const [q, setQ] = useState('')
  const [year, setYear] = useState('all')
  const [tags, setTags] = useState<string[]>([])
  const [agencies, setAgencies] = useState<string[]>([])
  const [open, setOpen] = useState<'year' | 'topic' | 'agency' | null>(null)
  const rowRef = useRef<HTMLDivElement>(null)

  // Preset search from ?q= (used by the creek pages' "Archive Reports" links).
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('q')
    if (p) setQ(p)
  }, [])

  // Close dropdowns on outside click.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (rowRef.current && !rowRef.current.contains(e.target as Node)) setOpen(null)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const toggleTag = (t: string) => setTags((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]))
  const toggleAgency = (a: string) => setAgencies((cur) => (cur.includes(a) ? cur.filter((x) => x !== a) : [...cur, a]))

  const results = ARCHIVE.filter((entry) => {
    if (year !== 'all') {
      if (year === '2020s' && (entry.year < 2020 || entry.year > 2022)) return false
      if (year === '2015s' && (entry.year < 2015 || entry.year > 2019)) return false
      if (year === 'pre2015' && entry.year >= 2015) return false
      if (!isNaN(+year) && entry.year !== +year) return false
    }
    if (tags.length > 0) {
      const entryTags = entry.tags.map((t) => t.toLowerCase())
      if (!tags.every((t) => entryTags.some((et) => et.includes(t)))) return false
    }
    if (agencies.length > 0) {
      const ea = (entry.agency || '').toLowerCase()
      if (!agencies.some((a) => ea.includes(a.toLowerCase()))) return false
    }
    if (q.trim()) {
      const blob = [entry.title, entry.summary, entry.source, ...entry.tags, ...entry.takeaways].join(' ').toLowerCase()
      if (!blob.includes(q.toLowerCase().trim())) return false
    }
    return true
  })

  const yearLabel = YEARS.find((y) => y.val === year)?.label
  const countLabel = results.length === 0 ? '0 results' : `${results.length} report${results.length !== 1 ? 's' : ''}`
  const cls = (n: typeof open) => `filter-group${open === n ? ' open' : ''}`

  return (
    <>
      <div className="archive-controls">
        <div className="controls-inner">
          <div className="search-row">
            <input className="archive-search" placeholder="Search reports, keywords, creeks…" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <div className="filter-row" ref={rowRef}>
            {/* Year */}
            <div className={cls('year')}>
              <button className={`filter-drop-btn${year !== 'all' ? ' has-active' : ''}`} onClick={() => setOpen(open === 'year' ? null : 'year')}>
                {year === 'all' ? 'Year' : `Year: ${yearLabel}`} <span className="arrow">▼</span>
              </button>
              <div className="filter-dropdown">
                {YEARS.map((y) => (
                  <div key={y.val} className={`filter-option${year === y.val ? ' on' : ''}`} onClick={() => setYear(y.val)}>
                    <span className="check">{year === y.val ? '✓' : ''}</span> {y.label}
                  </div>
                ))}
              </div>
            </div>
            {/* Topic */}
            <div className={cls('topic')}>
              <button className={`filter-drop-btn${tags.length ? ' has-active' : ''}`} onClick={() => setOpen(open === 'topic' ? null : 'topic')}>
                Topic {tags.length > 0 && <span className="filter-count">{tags.length}</span>} <span className="arrow">▼</span>
              </button>
              <div className="filter-dropdown">
                {TOPICS.map((t) => (
                  <div key={t.tag} className={`filter-option${tags.includes(t.tag) ? ' on' : ''}`} onClick={() => toggleTag(t.tag)}>
                    <span className="check">{tags.includes(t.tag) ? '✓' : ''}</span> {t.label}
                  </div>
                ))}
              </div>
            </div>
            {/* Agency */}
            <div className={cls('agency')}>
              <button className={`filter-drop-btn${agencies.length ? ' has-active' : ''}`} onClick={() => setOpen(open === 'agency' ? null : 'agency')}>
                Agency {agencies.length > 0 && <span className="filter-count">{agencies.length}</span>} <span className="arrow">▼</span>
              </button>
              <div className="filter-dropdown">
                {AGENCIES.map((a) => (
                  <div key={a.a} className={`filter-option${agencies.includes(a.a) ? ' on' : ''}`} onClick={() => toggleAgency(a.a)}>
                    <span className="check">{agencies.includes(a.a) ? '✓' : ''}</span> {a.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="results-count">{countLabel}</div>
        </div>
      </div>

      <div className="archive-list">
        {results.length === 0 ? (
          <div className="no-results"><p>No matching reports found.</p><span>Try adjusting your search or filters.</span></div>
        ) : (
          results.map((e) => (
            <div className="archive-entry" key={e.title}>
              <div className="entry-top">
                <div className="entry-title">{e.title}</div>
                <span className="entry-year">{e.year}</span>
              </div>
              <div className="entry-source">{e.source}</div>
              {e.agency && <span className="etag agency">{e.agency}</span>}
              <div className="entry-summary">{e.summary}</div>
              <ul className="entry-takeaways">{e.takeaways.map((t, i) => <li key={i}>{t}</li>)}</ul>
              <div className="entry-tags">
                {e.tags.map((t) => <span key={t} className="etag">{t}</span>)}
                {(e.locations || []).map((l) => <span key={l} className="etag loc">{l.replace('_', ' ')}</span>)}
              </div>
              <a href={e.url} target="_blank" rel="noopener noreferrer" className="entry-link">View report ↗</a>
            </div>
          ))
        )}
      </div>
    </>
  )
}
