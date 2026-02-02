import Link from "next/link";

export function CTABand() {
  return (
    <section
      className="section-spacing bg-[#0B1F3B]"
      aria-labelledby="cta-band-title"
    >
      <div className="site-container flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2
            id="cta-band-title"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Ready to review options with your team?
          </h2>
          <p className="mt-1 text-sm text-slate-200">
            Share a short overview of what you manufacture and how you sell
            today. You will receive a structured, conservative proposal to
            consider internally.
          </p>
        </div>
        <Link
          href="#contact"
          className="inline-flex items-center justify-center rounded-md border border-slate-100 bg-white px-5 py-2.5 text-sm font-semibold text-[#0B1F3B] shadow-sm hover:bg-slate-50"
          aria-label="Go to the contact form to request a call"
        >
          Request a Call
        </Link>
      </div>
    </section>
  );
}

