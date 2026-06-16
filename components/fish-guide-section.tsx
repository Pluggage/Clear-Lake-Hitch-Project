"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { Fish, X, Search, ChevronDown, ChevronUp } from "lucide-react"
import { FISH, FAILED_FISH, type Fish as FishType } from "@/lib/fish-data"

type FilterType = "all" | "native" | "introduced" | "invasive" | "extinct"

function accent(fish: FishType): { fg: string; bg: string } {
  if (fish.status === "threatened") return { fg: "var(--amber)", bg: "var(--amber-light)" }
  if (fish.status === "invasive") return { fg: "var(--red)", bg: "#fdecea" }
  if (fish.status === "extinct") return { fg: "#555", bg: "#f0f0f0" }
  if (fish.status === "extirpated") return { fg: "#7a5c00", bg: "#fff0cc" }
  if (fish.type === "failed") return { fg: "#6040a0", bg: "#f5f0ff" }
  if (fish.type === "native") return { fg: "var(--green)", bg: "var(--green-light)" }
  return { fg: "var(--lake)", bg: "var(--lake-light)" }
}

function FishIcon({ fish, size = "md" }: { fish: FishType; size?: "md" | "lg" }) {
  const a = accent(fish)
  const box = size === "lg" ? "w-12 h-12" : "w-10 h-10"
  const icon = size === "lg" ? "w-6 h-6" : "w-5 h-5"
  return (
    <div className={`${box} rounded-lg flex items-center justify-center mb-2`} style={{ background: a.bg }}>
      <Fish className={icon} style={{ color: a.fg }} aria-hidden="true" />
    </div>
  )
}

function FishTag({ type, status }: { type: string; status: string }) {
  const tags = []
  
  if (type === "native") {
    tags.push(
      <span key="native" className="inline-block text-[0.68rem] font-bold tracking-wide px-2 py-0.5 rounded-lg uppercase bg-[var(--green-light)] text-[var(--green)]">
        Native
      </span>
    )
  } else if (type === "failed") {
    tags.push(
      <span key="failed" className="inline-block text-[0.68rem] font-bold tracking-wide px-2 py-0.5 rounded-lg uppercase bg-[#f5f0ff] text-[#6040a0]">
        Failed Introduction
      </span>
    )
  } else if (status === "invasive") {
    tags.push(
      <span key="introduced" className="inline-block text-[0.68rem] font-bold tracking-wide px-2 py-0.5 rounded-lg uppercase bg-[var(--lake-light)] text-[var(--lake-dark)]">
        Introduced
      </span>,
      <span key="invasive" className="inline-block text-[0.68rem] font-bold tracking-wide px-2 py-0.5 rounded-lg uppercase bg-[#fdecea] text-[var(--red)]">
        Invasive
      </span>
    )
  } else {
    tags.push(
      <span key="introduced" className="inline-block text-[0.68rem] font-bold tracking-wide px-2 py-0.5 rounded-lg uppercase bg-[var(--lake-light)] text-[var(--lake-dark)]">
        Introduced
      </span>
    )
  }
  
  if (status === "extinct") {
    tags.push(
      <span key="extinct" className="inline-block text-[0.68rem] font-bold tracking-wide px-2 py-0.5 rounded-lg uppercase bg-[#f0f0f0] text-[#555]">
        Extinct
      </span>
    )
  }
  if (status === "extirpated") {
    tags.push(
      <span key="extirpated" className="inline-block text-[0.68rem] font-bold tracking-wide px-2 py-0.5 rounded-lg uppercase bg-[#fff0cc] text-[#7a5c00]">
        Extirpated
      </span>
    )
  }
  if (status === "threatened") {
    tags.push(
      <span key="threatened" className="inline-block text-[0.68rem] font-bold tracking-wide px-2 py-0.5 rounded-lg uppercase bg-[var(--amber-light)] text-[var(--amber)]">
        CA Threatened
      </span>
    )
  }
  
  return <div className="flex flex-wrap gap-1">{tags}</div>
}

function FishModal({ fish, onClose }: { fish: FishType; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return }
      if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
        )
        if (f.length === 0) return
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
      prevFocus?.focus()
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div ref={dialogRef} className="bg-white rounded-2xl max-w-[500px] w-full p-8 max-h-[90vh] overflow-y-auto relative" role="dialog" aria-modal="true" aria-label={fish.name}>
        <button
          onClick={onClose}
          autoFocus
          className="absolute top-4 right-4 text-[var(--muted-color)] hover:text-[var(--text)] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        
        <FishIcon fish={fish} size="lg" />
        <h2 className="text-xl font-bold mt-2">{fish.name}</h2>
        <p className="text-[var(--muted-color)] text-sm italic mb-4">{fish.sci}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <FishTag type={fish.type} status={fish.status} />
        </div>
        
        <p className="text-sm text-[var(--muted-color)] leading-relaxed mb-6">{fish.desc}</p>
        
        <div className="border-t border-[var(--border-color)] pt-4 space-y-3">
          <div>
            <dt className="text-xs font-bold uppercase tracking-wide text-[var(--muted-color)]">Family</dt>
            <dd className="text-sm">{fish.family}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wide text-[var(--muted-color)]">Order</dt>
            <dd className="text-sm">{fish.order}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wide text-[var(--muted-color)]">Origin</dt>
            <dd className="text-sm">
              {fish.type === "native" ? "Native to Clear Lake basin" : 
               fish.type === "failed" ? "Non-native, introduced, did not establish" :
               "Introduced (non-native)"}
            </dd>
          </div>
          {fish.introYear && (
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-[var(--muted-color)]">Introduced to Clear Lake</dt>
              <dd className="text-sm">{fish.introYear}</dd>
            </div>
          )}
          {fish.lastSeen && (
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-[var(--muted-color)]">Last Observed at Clear Lake</dt>
              <dd className="text-sm">c. {fish.lastSeen}</dd>
            </div>
          )}
          {fish.status === "threatened" && (
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-[var(--muted-color)]">Conservation Status</dt>
              <dd className="text-sm">Threatened: California ESA (2014) · Federal listing proposed (Jan 2025)</dd>
            </div>
          )}
          {fish.status === "extinct" && (
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-[var(--muted-color)]">Conservation Status</dt>
              <dd className="text-sm">Extinct: no longer exists anywhere on Earth</dd>
            </div>
          )}
          {fish.status === "extirpated" && (
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-[var(--muted-color)]">Conservation Status</dt>
              <dd className="text-sm">Extirpated from Clear Lake, may exist elsewhere</dd>
            </div>
          )}
          {fish.type === "failed" && (
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-[var(--muted-color)]">Introduction Outcome</dt>
              <dd className="text-sm">Failed: did not establish in Clear Lake</dd>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const filters: { label: string; value: FilterType }[] = [
  { label: "All species", value: "all" },
  { label: "Native", value: "native" },
  { label: "Introduced", value: "introduced" },
  { label: "Invasive", value: "invasive" },
  { label: "Extinct / Extirpated", value: "extinct" },
]

export function FishGuideSection() {
  const [currentFilter, setCurrentFilter] = useState<FilterType>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFish, setSelectedFish] = useState<FishType | null>(null)
  const [showAllFish, setShowAllFish] = useState(false)
  const [showFailedFish, setShowFailedFish] = useState(false)
  
  const filteredFish = useMemo(() => {
    let list = FISH
    
    if (currentFilter === "native") {
      list = list.filter((f) => f.type === "native")
    } else if (currentFilter === "introduced") {
      list = list.filter((f) => f.type === "introduced")
    } else if (currentFilter === "invasive") {
      list = list.filter((f) => f.status === "invasive")
    } else if (currentFilter === "extinct") {
      list = list.filter((f) => f.status === "extinct" || f.status === "extirpated")
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      list = list.filter(
        (f) => f.name.toLowerCase().includes(query) || f.sci.toLowerCase().includes(query)
      )
    }
    
    return list
  }, [currentFilter, searchQuery])

  const displayedFish = showAllFish ? filteredFish : filteredFish.slice(0, 10)
  const hasMoreFish = filteredFish.length > 10

  return (
    <section id="fish" className="py-20 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--lake)] bg-[var(--lake-light)] px-3 py-1 rounded-full mb-4">
          Species Guide
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2">
          Fishes of Clear Lake
        </h2>
        <p className="text-[var(--muted-color)] text-base max-w-[650px] mb-8 leading-relaxed">
          All 36 documented fish species of Clear Lake (native, introduced, and those lost) plus 4 failed introductions. Click any card for detailed information.
        </p>
        
        {/* Controls */}
        <div className="flex flex-wrap gap-3 items-center mb-8">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setCurrentFilter(filter.value)}
              className={`px-4 py-1.5 rounded-full border-[1.5px] text-sm cursor-pointer transition-all ${
                currentFilter === filter.value
                  ? "bg-[var(--lake)] text-white border-[var(--lake)]"
                  : "bg-white text-[var(--muted-color)] border-[var(--border-color)] hover:border-[var(--lake)]"
              }`}
            >
              {filter.label}
            </button>
          ))}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-color)]" />
            <input
              type="text"
              placeholder="Search species..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full border-[1.5px] border-[var(--border-color)] text-sm w-[220px] outline-none focus:border-[var(--lake)] transition-colors"
            />
          </div>
        </div>
        
        {/* Fish Grid - Collapsible */}
        <div className="relative">
          <div 
            className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 transition-all duration-300 ${
              !showAllFish && hasMoreFish ? "max-h-[420px] overflow-hidden" : ""
            }`}
          >
            {displayedFish.map((fish) => (
              <div
                key={fish.name}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedFish(fish)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedFish(fish) } }}
                className="bg-white border border-[var(--border-color)] rounded-xl p-5 cursor-pointer transition-all hover:border-[var(--lake)] hover:-translate-y-0.5 hover:shadow-lg"
              >
                <FishIcon fish={fish} />
                <div className="font-bold text-sm mb-0.5">{fish.name}</div>
                <div className="text-xs text-[var(--muted-color)] italic mb-1">{fish.sci}</div>
                {fish.introYear && (
                  <div className="text-xs text-[var(--amber)] mb-1">Introduced {fish.introYear}</div>
                )}
                {fish.lastSeen && (
                  <div className="text-xs text-[var(--amber)] mb-1">Last seen c. {fish.lastSeen}</div>
                )}
                <FishTag type={fish.type} status={fish.status} />
              </div>
            ))}
          </div>
          
          {/* Gradient overlay when collapsed */}
          {!showAllFish && hasMoreFish && (
            <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </div>
        
        {/* Toggle button for main fish grid */}
        {hasMoreFish && (
          <button
            onClick={() => setShowAllFish(!showAllFish)}
            className="w-full mt-4 py-2.5 px-4 bg-[var(--lake-light)] border-[1.5px] border-[var(--lake)] rounded-full text-[var(--lake)] text-sm font-semibold cursor-pointer transition-all hover:bg-[var(--lake)] hover:text-white flex items-center justify-center gap-2"
          >
            {showAllFish ? (
              <>Show fewer species <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Show all {filteredFish.length} species <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        )}
        
        {filteredFish.length === 0 && (
          <div className="text-center py-12 text-[var(--muted-color)]">
            No fish found matching your criteria.
          </div>
        )}
        
        {/* Failed Introductions Section */}
        <div className="mt-10 pt-6 border-t-2 border-[var(--border-color)]">
          <h3 className="text-lg font-bold text-[var(--text)] mb-1">Unsuccessful Introductions</h3>
          <p className="text-sm text-[var(--muted-color)] mb-4">
            These species were released into Clear Lake but failed to establish self-sustaining populations, illustrating that Clear Lake&apos;s unique warm, shallow, and eutrophic conditions are not suitable for all introduced fish species.
          </p>
          
          <div className="relative">
            <div 
              className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-300 ${
                !showFailedFish ? "max-h-[190px] overflow-hidden" : ""
              }`}
            >
              {FAILED_FISH.map((fish) => (
                <div
                  key={fish.name}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedFish(fish)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedFish(fish) } }}
                  className="bg-white border border-[var(--border-color)] rounded-xl p-5 cursor-pointer transition-all hover:border-[#6040a0] hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <FishIcon fish={fish} />
                  <div className="font-bold text-sm mb-0.5">{fish.name}</div>
                  <div className="text-xs text-[var(--muted-color)] italic mb-1">{fish.sci}</div>
                  {fish.introYear && (
                    <div className="text-xs text-[var(--amber)] mb-1">Introduced {fish.introYear}</div>
                  )}
                  <FishTag type={fish.type} status={fish.status} />
                </div>
              ))}
            </div>
            
            {/* Gradient overlay when collapsed */}
            {!showFailedFish && (
              <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>
          
          <button
            onClick={() => setShowFailedFish(!showFailedFish)}
            className="w-full mt-4 py-2.5 px-4 bg-[#f5f0ff] border-[1.5px] border-[#6040a0] rounded-full text-[#6040a0] text-sm font-semibold cursor-pointer transition-all hover:bg-[#6040a0] hover:text-white flex items-center justify-center gap-2"
          >
            {showFailedFish ? (
              <>Show fewer <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Show all failed introductions <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>
      
      {/* Modal */}
      {selectedFish && (
        <FishModal fish={selectedFish} onClose={() => setSelectedFish(null)} />
      )}
    </section>
  )
}
