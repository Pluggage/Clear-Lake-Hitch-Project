'use client'

import { Fish } from 'lucide-react'
import { useEffect, useState } from 'react'
import { photos, type Photo } from './kelsey-data'

export function PhotoLightbox() {
  const [open, setOpen] = useState<Photo | null>(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null) }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <div className="photo-grid">
        {photos.map((p) =>
          p.src ? (
            <div
              key={p.title}
              className="photo-card"
              role="button"
              tabIndex={0}
              onClick={() => setOpen(p)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(p) }}
            >
              <img src={p.src} alt={`${p.title} — ${p.sub}`} loading="lazy" />
              <div className="photo-inner">
                <span className="photo-tag">{p.tag}</span>
                <div className="photo-caption"><strong>{p.title}</strong><span>{p.sub}</span></div>
              </div>
            </div>
          ) : (
            <div key={p.title} className="photo-card" style={{ cursor: 'default' }}>
              <div className="photo-icon"><Fish /></div>
              <div className="photo-inner">
                <span className="photo-tag">{p.tag}</span>
                <div className="photo-caption"><strong>{p.title}</strong><span>{p.sub}</span></div>
              </div>
            </div>
          ),
        )}
      </div>

      {open && (
        <div className="lb-overlay open" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={(e) => { if (e.target === e.currentTarget) setOpen(null) }}>
          <div className="lb-box">
            <button className="lb-close" aria-label="Close photo" onClick={() => setOpen(null)}>✕</button>
            <div className="lb-img-wrap">
              <img src={open.src!} alt={`${open.title} — ${open.sub}`} style={{ opacity: 1 }} />
            </div>
            <div className="lb-bar">
              <div className="lb-caption">
                <strong>{open.title}</strong>
                <span>{open.sub}</span>
              </div>
              <a className="lb-dl" href={open.src!} target="_blank" rel="noopener noreferrer">⬇ View / Download Original</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
