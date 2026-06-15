"use client"

import { useEffect } from "react"

export default function MapPage() {
  useEffect(() => {
    window.location.href = "/map-standalone.html"
  }, [])

  return (
    <div className="min-h-screen bg-[#060f1a] flex items-center justify-center">
      <div className="text-white/50 text-sm">Loading map...</div>
    </div>
  )
}
