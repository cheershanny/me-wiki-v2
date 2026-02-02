export function TrustIndicators() {
  return (
    <section
      id="about"
      className="section-spacing border-b border-slate-200 bg-white"
      aria-labelledby="trust-indicators-title"
    >
      <div className="site-container">
        <div className="max-w-3xl">
          <h2
            id="trust-indicators-title"
            className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
          >
            A conservative, documented process you can review internally.
          </h2>
          <p className="mt-3 text-base text-slate-700">
            The approach is designed so that operations, engineering, sales, and
            compliance stakeholders can understand how leads are created and
            what is being communicated on your behalf.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <div className="space-y-5 text-sm text-slate-700">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Trusted process considerations
              </h3>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>
                    Messaging drafted with awareness of common ISO, safety, and
                    quality terminology used in manufacturing contexts.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>
                    Safety-first positioning that respects plant access,
                    on-site work, and maintenance constraints.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>
                    Alignment with your existing policies for data handling,
                    supplier onboarding, and NDAs where required.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Typical operating ranges
              </h3>
              <dl className="mt-3 space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Response time
                  </dt>
                  <dd className="text-right text-sm text-slate-800">
                    Most new inquiries are acknowledged within 1–2 business
                    days.
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Reporting cadence
                  </dt>
                  <dd className="text-right text-sm text-slate-800">
                    Summary reporting aligned to your existing sales meetings
                    and management rhythm.
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Engagement scope
                  </dt>
                  <dd className="text-right text-sm text-slate-800">
                    Designed for focused product lines or service offerings
                    rather than broad, undefined campaigns.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Past project experience (available on request)
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                To protect confidentiality, specific client names and outcomes
                are shared only during direct conversations and after mutual
                interest is confirmed.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="h-12 rounded border border-dashed border-slate-300 bg-slate-100" />
                <div className="h-12 rounded border border-dashed border-slate-300 bg-slate-100" />
                <div className="h-12 rounded border border-dashed border-slate-300 bg-slate-100" />
                <div className="h-12 rounded border border-dashed border-slate-300 bg-slate-100" />
                <div className="h-12 rounded border border-dashed border-slate-300 bg-slate-100" />
                <div className="h-12 rounded border border-dashed border-slate-300 bg-slate-100" />
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Visual placeholders only. Logos and named references are shared
                privately, where appropriate.
              </p>
            </div>

            <p className="text-xs text-slate-600">
              References and more detailed examples of past project experience
              are available upon request during the discussion process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

