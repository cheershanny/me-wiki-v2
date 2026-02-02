import Link from "next/link";

export function Hero() {
  return (
    <section
      className="section-spacing border-b border-slate-200 bg-white"
      aria-labelledby="hero-title"
    >
      <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] lg:items-start">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Industrial Lead Support
          </p>
          <h1
            id="hero-title"
            className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Structured lead generation for manufacturers that need qualified
            inquiries, not volume.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-700">
            I work with operations, engineering, and procurement teams to build
            predictable, qualified inbound interest for complex industrial
            products and services – with a clear, documented process and
            conservative expectations.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-[#0B1F3B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-900"
              aria-label="Request a call to discuss your manufacturing lead generation needs"
            >
              Request a Call
            </Link>
            <Link
              href="#industries"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50"
              aria-label="View capabilities and industries served"
            >
              View Capabilities
            </Link>
          </div>

          <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
            <div>
              <p className="font-semibold text-slate-900">Typical scope</p>
              <p className="mt-1">
                Industrial components, custom equipment, contract manufacturing,
                and technical services.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Who I work with</p>
              <p className="mt-1">
                Manufacturing owners, sales leaders, and commercial teams with
                clear capacity and technical capabilities.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Engagement model</p>
              <p className="mt-1">
                Focused programs with documented targeting, messaging, and
                qualification criteria agreed in advance.
              </p>
            </div>
          </div>
        </div>

        <aside
          className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700"
          aria-label="Engagement summary"
        >
          <h2 className="text-sm font-semibold tracking-tight text-slate-900">
            Summary for internal review
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            Use this section to share internally with commercial, operations,
            and finance stakeholders.
          </p>

          <dl className="mt-4 space-y-3">
            <div className="flex items-start justify-between gap-4">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Response time
              </dt>
              <dd className="text-right text-sm text-slate-800">
                Typical initial reply within 1–2 business days.
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Regions served
              </dt>
              <dd className="text-right text-sm text-slate-800">
                Primarily North America and Europe; other regions considered
                case by case.
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Focus areas
              </dt>
              <dd className="text-right text-sm text-slate-800">
                Complex B2B manufacturing, engineered parts, multi-step buying
                groups, and RFQ-driven sales cycles.
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Engagement length
              </dt>
              <dd className="text-right text-sm text-slate-800">
                Programs typically planned in 3–6 month phases with clear
                review points.
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

