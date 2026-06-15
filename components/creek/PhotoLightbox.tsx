'use client'

import { Fish } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

export interface Photo {
  /** Grid thumbnail. null renders a placeholder card (not clickable). */
  thumb: string | null
  /** Full-size image for the lightbox. Defaults to thumb. */
  full?: string
  tag: string
  title: string
  sub: string
  /** Long description shown in the lightbox. */
  caption?: string
}

export function PhotoLightbox({ photos, credit }: { photos: Photo[]; credit?: string }) {
  const items = photos.filter((p): p is Photo & { thumb: string } => !!p.thumb)
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const step = useCallback((dir: number) => {
    setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length))
  }, [items.length])

  useEffect(() => {
    if (open === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') step(-1)
      else if (e.key === 'ArrowRight') step(1)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open, close, step])

  const active = open === null ? null : items[open]

  return (
    <>
      <div className="photo-grid">
        {photos.map((p) => {
          if (!p.thumb) {
            return (
              <div key={p.title} className="photo-card" style={{ cursor: 'default' }}>
                <div className="photo-icon"><Fish /></div>
                <div className="photo-inner">
                  <span className="photo-tag">{p.tag}</span>
                  <div className="photo-caption"><strong>{p.title}</strong><span>{p.sub}</span></div>
                </div>
              </div>
            )
          }
          const i = items.indexOf(p as Photo & { thumb: string })
          return (
            <div key={p.title} className="photo-card" role="button" tabIndex={0} onClick={() => setOpen(i)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(i) }}>
              <img src={p.thumb} alt={`${p.title} — ${p.sub}`} loading="lazy" />
              <div className="photo-inner">
                <span className="photo-tag">{p.tag}</span>
                <div className="photo-caption"><strong>{p.title}</strong><span>{p.sub}</span></div>
              </div>
            </div>
          )
        })}
      </div>

      {active && (
        <div className="lb-overlay open" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={(e) => { if (e.target === e.currentTarget) close() }}>
          <div className="lb-box">
            <button className="lb-close" aria-label="Close photo" onClick={close}>✕</button>
            <div className="lb-img-wrap" style={{ position: 'relative' }}>
              {items.length > 1 && <button className="lb-nav lb-nav-prev" aria-label="Previous photo" onClick={() => step(-1)}>‹</button>}
              <img src={active.full || active.thumb} alt={`${active.title} — ${active.sub}`} />
              {items.length > 1 && <button className="lb-nav lb-nav-next" aria-label="Next photo" onClick={() => step(1)}>›</button>}
            </div>
            <div className="lb-bar">
              <div className="lb-caption">
                <strong>{active.title}{items.length > 1 ? ` · ${open! + 1}/${items.length}` : ''}</strong>
                <span>{active.caption || active.sub}</span>
                {credit && <span className="lb-credit">Photo credit: {credit}</span>}
              </div>
              <a className="lb-dl" href={active.full || active.thumb} target="_blank" rel="noopener noreferrer">⬇ View / Download Original</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
