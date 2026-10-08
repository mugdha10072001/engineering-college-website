import { ArrowRight, CheckCircle2, FileText } from "lucide-react";
import { Link } from "react-router-dom";

interface AdmissionHeroProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
}

export default function AdmissionHero({
  title = "Begin Your Journey With Us",
  description = "Take the first step toward a successful engineering career. Explore our programs, admission process, eligibility requirements and important dates.",
  backgroundImage = "/images/campus/campus-main.jpg",
}: AdmissionHeroProps) {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-slate-950">
      {/* Background */}
      <img
        src={backgroundImage}
        alt="College campus"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300">
            <CheckCircle2 size={17} />
            Admissions Open 2026–27
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            {description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-amber-300"
            >
              Apply Now
              <ArrowRight size={18} />
            </Link>

            <a
              href="/documents/admission-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <FileText size={18} />
              Admission Brochure
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber-400" />
              AICTE Approved
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber-400" />
              Industry Focused
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber-400" />
              Career Oriented
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}