"use client"

import { useState, type FormEvent } from "react"

type Kind = "contact" | "sighting"

/**
 * Contact / report-a-sighting form. UI only for now: submitting shows a notice
 * rather than sending. To activate, POST the form data to a backend
 * (e.g. Formspree) inside handleSubmit instead of setting the notice.
 */
export function SiteForm({ kind }: { kind: Kind }) {
  const [submitted, setSubmitted] = useState(false)
  const sighting = kind === "sighting"

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputCls =
    "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-[var(--lake)]"
  const labelCls = "block text-sm font-medium text-foreground mb-1"

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-[560px]">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls} htmlFor={`${kind}-name`}>Name</label>
          <input id={`${kind}-name`} name="name" type="text" autoComplete="name" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor={`${kind}-email`}>Email</label>
          <input id={`${kind}-email`} name="email" type="email" autoComplete="email" className={inputCls} />
        </div>
      </div>

      {sighting && (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls} htmlFor="sighting-date">Date seen</label>
              <input id="sighting-date" name="date" type="date" className={inputCls} />
            </div>
            <div>
              <label className={labelCls} htmlFor="sighting-location">Creek or location</label>
              <input id="sighting-location" name="location" type="text" className={inputCls} />
            </div>
          </div>
          <div>
            <label className={labelCls} htmlFor="sighting-count">Approximate number of fish</label>
            <input id="sighting-count" name="count" type="text" className={inputCls} />
          </div>
        </>
      )}

      <div>
        <label className={labelCls} htmlFor={`${kind}-message`}>{sighting ? "What you saw" : "Message"}</label>
        <textarea id={`${kind}-message`} name="message" rows={sighting ? 3 : 4} className={inputCls} />
      </div>

      {submitted ? (
        <div
          role="status"
          className="rounded-lg border px-4 py-3 text-sm"
          style={{ background: "var(--lake-light)", borderColor: "var(--lake)", color: "var(--lake-dark)" }}
        >
          Thanks! Online submissions aren&apos;t live yet. We&apos;re still setting this up.{" "}
          {sighting
            ? "To report a stranded hitch right now, call the Hitch Rescue Team at (707) 263-2344."
            : "Please check back soon."}
        </div>
      ) : (
        <div className="flex items-center gap-3 flex-wrap">
          <button
            type="submit"
            className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors"
            style={{ background: "var(--lake)" }}
          >
            {sighting ? "Submit sighting" : "Send message"}
          </button>
          <span className="text-xs text-muted-foreground">Online submission is being set up.</span>
        </div>
      )}
    </form>
  )
}
