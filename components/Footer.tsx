import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="site-container flex flex-col justify-between gap-4 py-6 text-xs text-slate-600 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <p className="font-medium text-slate-700">
            © {new Date().getFullYear()} Operations Pipeline.
          </p>
          <p className="text-[11px]">
            This site is for informational purposes. It does not constitute a
            commitment to specific commercial outcomes.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@example-industrial.com"
            className="hover:text-slate-800"
          >
            hello@example-industrial.com
          </a>
          <Link
            href="#"
            className="hover:text-slate-800"
            aria-label="View LinkedIn profile (placeholder link)"
          >
            LinkedIn
          </Link>
          <span className="text-[11px] text-slate-500">
            Based in Europe · Working with manufacturers globally
          </span>
        </div>
      </div>
    </footer>
  );
}

