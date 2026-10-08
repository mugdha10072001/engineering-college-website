import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-emerald-950 text-white">
      <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-center px-10 py-2 text-center text-sm">
        <p>
          <span className="font-semibold text-amber-400">
            Admissions Open 2026-27
          </span>
          <span className="mx-2 hidden sm:inline">—</span>
          <span className="hidden sm:inline">
            Applications are now being accepted for undergraduate programs.
          </span>

          <a
            href="/admissions"
            className="ml-2 inline-flex items-center gap-1 font-semibold underline underline-offset-4 transition hover:text-amber-300"
          >
            Apply Now
            <ArrowRight size={14} />
          </a>
        </p>

        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Close announcement"
          className="absolute right-3 rounded-md p-1 transition hover:bg-white/10 sm:right-5"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}