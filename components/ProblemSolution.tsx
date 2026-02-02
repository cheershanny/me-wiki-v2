export function ProblemSolution() {
  return (
    <section
      id="industries"
      className="section-spacing border-b border-slate-200 bg-white"
      aria-labelledby="problem-solution-title"
    >
      <div className="site-container">
        <div className="max-w-3xl">
          <h2
            id="problem-solution-title"
            className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
          >
            Built for manufacturers with long, complex sales cycles.
          </h2>
          <p className="mt-3 text-base text-slate-700">
            Typical work spans OEMs, contract manufacturers, and technical
            service providers across metalworking, plastics, industrial
            equipment, and engineered components.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Common challenges
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>
                  Inconsistent flow of qualified RFQs and inquiries, despite
                  strong technical capabilities.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>
                  Long, multi-step sales cycles where the real decision-makers
                  are hard to reach and keep engaged.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>
                  Niche buyer profiles across operations, engineering,
                  procurement, and quality – each with different priorities.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>
                  Existing outreach efforts that generate activity, but not
                  enough opportunities that fit capacity and margin
                  expectations.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              How the work is structured
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                <span>
                  Clarify ideal project profiles, part families, volumes, and
                  margin ranges before any outreach begins.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                <span>
                  Map decision-makers across operations, engineering, and
                  procurement with conservative, compliant messaging.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                <span>
                  Use a mix of email, professional networks, and curated
                  partner lists aligned to your internal review process.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                <span>
                  Route only inquiries that match agreed qualification criteria,
                  with clear context for technical and commercial teams.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

