import { ImageResponse } from 'next/og'

export const alt = 'The Clear Lake Hitch Project — Protecting the Clear Lake Hitch for Future Generations'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(150deg, #0d4a72 0%, #1a6fa8 55%, #2980b9 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.46-3.44 6-7 6-3.56 0-7.56-2.54-8.5-6Z" />
            <path d="M18 12v.5" />
            <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
            <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
            <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
            <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
          </svg>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: '0.01em' }}>
            The Clear Lake Hitch Project
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: '900px' }}>
            Protecting the Clear Lake Hitch
          </div>
          <div style={{ fontSize: 34, color: '#d6eaf8', marginTop: '20px', maxWidth: '860px' }}>
            An endemic minnow found nowhere else on Earth.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: 26, color: '#bde5ff' }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: '#7fd8ff' }} />
          clearlakehitchproject.org
        </div>
      </div>
    ),
    { ...size },
  )
}
