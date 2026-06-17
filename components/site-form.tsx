"use client"

import { useState, type FormEvent } from "react"

type Kind = "contact" | "sighting"

/**
 * Contact / report-a-sighting form. UI only for now: on a valid submit it shows
 * a notice rather than sending. To activate, POST the form data to a backend
 * (e.g. Formspree) inside handleSubmit instead of setting the notice.
 */
export function SiteForm({ kind }: { kind: Kind }) {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const sighting = kind === "sighting"

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const next: Record<string, string> = {}

    const email = String(data.get("email") || "").trim()
    if (!email) next.email = "Please enter your email so we can follow up."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address."

    if (sighting && !String(data.get("location") || "").trim()) {
      next.location = "Tell us which creek or location."
    }
    if (!String(data.get("message") || "").trim()) {
      next.message = sighting ? "Briefly describe what you saw." : "Please enter a message."
    }

    setErrors(next)
    if (Object.keys(next).length === 0) setSubmitted(true)
  }

  const inputCls =
    "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-[var(--lake)] disabled:opacity-60"
  const labelCls = "block text-sm font-medium text-foreground mb-1"
  const errCls = "mt-1 text-xs text-[var(--red)]"
  const req = <span className="text-[var(--red)]" aria-hidden="true">*</span>
  const errId = (f: string) => `${kind}-${f}-err`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 max-w-[560px]">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls} htmlFor={`${kind}-name`}>Name</label>
          <input id={`${kind}-name`} name="name" type="text" autoComplete="name" className={inputCls} disabled={submitted} />
        </div>
        <div>
          <label className={labelCls} htmlFor={`${kind}-email`}>Email {req}</label>
          <input
            id={`${kind}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? errId("email") : undefined}
            className={inputCls}
            disabled={submitted}
          />
          {errors.email && <p id={errId("email")} className={errCls}>{errors.email}</p>}
        </div>
      </div>

      {sighting && (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls} htmlFor="sighting-date">Date seen</label>
              <input id="sighting-date" name="date" type="date" className={inputCls} disabled={submitted} />
            </div>
            <div>
              <label className={labelCls} htmlFor="sighting-location">Creek or location {req}</label>
              <input
                id="sighting-location"
                name="location"
                type="text"
                required
                aria-required="true"
                aria-invalid={errors.location ? true : undefined}
                aria-describedby={errors.location ? errId("location") : undefined}
                className={inputCls}
                disabled={submitted}
              />
              {errors.location && <p id={errId("location")} className={errCls}>{errors.location}</p>}
            </div>
          </div>
          <div>
            <label className={labelCls} htmlFor="sighting-count">Approximate number of fish</label>
            <input id="sighting-count" name="count" type="text" inputMode="numeric" className={inputCls} disabled={submitted} />
          </div>
        </>
      )}

      <div>
        <label className={labelCls} htmlFor={`${kind}-message`}>{sighting ? "What you saw" : "Message"} {req}</label>
        <textarea
          id={`${kind}-message`}
          name="message"
          rows={sighting ? 3 : 4}
          required
          aria-required="true"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? errId("message") : undefined}
          className={inputCls}
          disabled={submitted}
        />
        {errors.message && <p id={errId("message")} className={errCls}>{errors.message}</p>}
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
