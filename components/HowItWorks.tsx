export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-spacing border-b border-slate-200 bg-slate-50"
      aria-labelledby="how-it-works-title"
    >
      <div className="site-container">
        <div className="max-w-3xl">
          <h2
            id="how-it-works-title"
            className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
          >
            A simple, three-step process built for internal alignment.
          </h2>
          <p className="mt-3 text-base text-slate-700">
            Each phase is documented so commercial, technical, and finance teams
            can review and adjust together.
          </p>
        </div>

        <ol className="mt-8 grid gap-6 md:grid-cols-3" aria-label="Process">
          <li className="flex flex-col rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B1F3B] text-xs font-semibold text-white">
                1
              </span>
              <h3 className="text-sm font-semibold text-slate-900">
                Discovery &amp; ICP definition
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-700">
              We document priority industries, part families, and processes, as
              well as capacity limits and commercial constraints. This becomes
              the reference point for all future decisions.
            </p>
          </li>

          <li className="flex flex-col rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B1F3B] text-xs font-semibold text-white">
                2
              </span>
              <h3 className="text-sm font-semibold text-slate-900">
                Outreach &amp; qualification
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-700">
              Outreach is carried out using email, professional networks, and
              curated partner lists, with clear guardrails on who is contacted
              and how. Prospects are screened against agreed technical and
              commercial criteria.
            </p>
          </li>

          <li className="flex flex-col rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B1F3B] text-xs font-semibold text-white">
                3
              </span>
              <h3 className="text-sm font-semibold text-slate-900">
                Handoff &amp; reporting
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-700">
              Qualified inquiries are shared with your team in a simple format
              that highlights project fit and next steps. Regular summaries
              provide visibility into activity, learnings, and adjustments.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

