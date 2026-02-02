import Link from "next/link";

export function NavBar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="site-container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-sm bg-slate-900" aria-hidden="true" />
          <div>
            <span className="block text-sm font-semibold tracking-wide text-slate-900">
              Operations Pipeline
            </span>
            <span className="block text-xs text-slate-500">
              Industrial Lead Generation
            </span>
          </div>
        </div>

        <nav
          className="hidden items-center gap-8 text-sm text-slate-700 md:flex"
          aria-label="Primary"
        >
          <Link href="#how-it-works" className="hover:text-slate-900">
            How It Works
          </Link>
          <Link href="#industries" className="hover:text-slate-900">
            Industries
          </Link>
          <Link href="#about" className="hover:text-slate-900">
            About
          </Link>
          <Link href="#contact" className="hover:text-slate-900">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-[#0B1F3B] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-900"
            aria-label="Request a call to discuss your lead generation needs"
          >
            Request a Call
          </Link>
        </div>
      </div>
    </header>
  );
}

