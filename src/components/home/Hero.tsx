import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/campus/campus-main.jpg"
          alt="ABC Engineering College campus"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Admissions Open 2026-27
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Engineering
            <span className="block text-amber-400">
              Education for a Better Future
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Discover an environment where innovation, technology,
            research and practical learning come together to prepare
            students for tomorrow's challenges.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 font-bold text-white transition hover:bg-amber-600"
            >
              Apply for Admission
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900"
            >
              <BookOpen size={18} />
              Explore Programs
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-300">
            <span>✓ AICTE Approved</span>
            <span>✓ Industry Connected</span>
            <span>✓ Research Focused</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#quick-links"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center text-white/70 transition hover:text-white md:flex"
      >
        <span className="mb-2 text-xs uppercase tracking-[0.2em]">
          Explore
        </span>
        <ChevronDown className="animate-bounce" size={20} />
      </a>

      {/* Play button */}
      <button
        type="button"
        aria-label="Play campus video"
        className="absolute bottom-8 right-8 hidden h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-amber-500 md:flex"
      >
        <Play size={20} fill="currentColor" />
      </button>
    </section>
  );
}