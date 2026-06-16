'use client'

import { Fish } from 'lucide-react'
import { useMemo, useState } from 'react'
import { creeks, type Creek } from './creek-data'

type FilterKey = 'all' | 'priority' | 'active' | 'restoration' | 'concern'

const PRIORITY = new Set([
  'Kelsey Creek', 'Adobe Creek', 'Burns Valley Creek', 'Manning Creek',
  'Forbes Creek', 'Cole Creek', 'Morrison Creek', 'Seigler Canyon Creek', 'Scotts Creek',
])

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: `All (${creeks.length})` },
  { key: 'priority', label: `Priority (${PRIORITY.size})` },
  { key: 'active', label: 'Active Spawning' },
  { key: 'restoration', label: 'Restoration' },
  { key: 'concern', label: 'Concern' },
]

function matchesFilter(c: Creek, f: FilterKey): boolean {
  switch (f) {
    case 'all': return true
    case 'priority': return PRIORITY.has(c.name)
    case 'active': return c.status === 'active'
    case 'restoration': return c.tags.some((t) => t.variant === 'restore')
    case 'concern': return c.status === 'concern' || c.tags.some((t) => t.variant === 'concern')
  }
}

export function CreekExplorer() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<FilterKey>('all')

  const visible = useMemo(() => {
    const q = query.toLowerCase().trim()
    return creeks.filter((c) => {
      if (!matchesFilter(c, filter)) return false
      if (!q) return true
      return (
        c.searchName.includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
      )
    })
  }, [query, filter])

  const countLabel = visible.length === creeks.length ? `${creeks.length} creeks` : `${visible.length} of ${creeks.length}`

  return (
    <>
      {/* FILTER BAR */}
      <div className="filter-bar">
        <div className="filter-inner">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${filter === f.key ? ' active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
          <input
            className="search-box"
            placeholder="Search tributaries..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* GRID */}
      <div className="grid-content" id="all-grid">
        <div className="grid-head">
          <div className="grid-head-label">
            All Tributaries: Alphabetical
            <span className="count-badge">{countLabel}</span>
          </div>
          <input
            className="grid-search"
            type="text"
            placeholder="Search creeks..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="creek-grid">
          {visible.map((c) => (
            <a key={c.href} href={c.href} className="creek-card">
              <div className="creek-card-img">
                <div className="creek-img-icon">
                  <Fish strokeWidth={1.5} />
                  <div>Photo 2026</div>
                </div>
              </div>
              <div className="creek-card-body">
                <div className="creek-card-name">
                  <span className={`status-dot sd-${c.status}`} />
                  {c.name}
                </div>
                <div className="creek-card-loc">{c.location}</div>
                <div className="creek-card-desc">{c.description}</div>
                <div className="creek-card-footer">
                  <div className="creek-card-tags">
                    {c.tags.map((t) => (
                      <span key={t.label} className={`creek-tag ct-${t.variant}`}>{t.label}</span>
                    ))}
                  </div>
                  <span className="creek-card-arrow">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="no-results">No tributaries match that search.</div>
        )}
      </div>
    </>
  )
}
