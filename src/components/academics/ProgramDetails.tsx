import {
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Users,
} from "lucide-react";

interface ProgramDetailsProps {
  title: string;
  shortName: string;
  description: string;
  duration?: string;
  degree?: string;
  intake?: number;
  eligibility?: string;
  overview?: string;
  highlights?: string[];
  careerOptions?: string[];
}

export default function ProgramDetails({
  title,
  shortName,
  description,
  duration = "4 Years",
  degree = "B.Tech",
  intake = 60,
  eligibility = "10+2 with Physics, Chemistry and Mathematics",
  overview,
  highlights = [],
  careerOptions = [],
}: ProgramDetailsProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 px-6 py-10 sm:px-10 lg:px-12">
        {/* Decorative shapes */}
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
        <div className="absolute -bottom-24 right-24 h-48 w-48 rounded-full border border-white/10" />

        <div className="relative">
          <span className="inline-flex rounded-full bg-amber-400 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-900">
            {shortName}
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
            {description}
          </p>
        </div>
      </div>

      {/* Quick information */}
      <div className="grid grid-cols-2 border-b border-slate-200 sm:grid-cols-4">
        <div className="border-b border-slate-200 p-5 text-center sm:border-b-0 sm:border-r">
          <GraduationCap
            size={23}
            className="mx-auto mb-2 text-emerald-700"
          />
          <p className="text-sm font-bold text-slate-900">
            {degree}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Degree
          </p>
        </div>

        <div className="border-b border-slate-200 p-5 text-center sm:border-b-0 sm:border-r">
          <Clock3
            size={23}
            className="mx-auto mb-2 text-emerald-700"
          />
          <p className="text-sm font-bold text-slate-900">
            {duration}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Duration
          </p>
        </div>

        <div className="border-r border-slate-200 p-5 text-center">
          <Users
            size={23}
            className="mx-auto mb-2 text-emerald-700"
          />
          <p className="text-sm font-bold text-slate-900">
            {intake}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Annual Intake
          </p>
        </div>

        <div className="p-5 text-center">
          <BookOpen
            size={23}
            className="mx-auto mb-2 text-emerald-700"
          />
          <p className="text-sm font-bold text-slate-900">
            Full Time
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Study Mode
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.5fr_1fr] lg:p-10">
        {/* Left column */}
        <div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Program Overview
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {overview ||
                `The ${title} program is designed to provide students with strong theoretical foundations, practical skills and industry-oriented knowledge. The curriculum combines classroom learning, laboratory work, projects and professional development.`}
            </p>
          </div>

          {/* Highlights */}
          {highlights.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900">
                Program Highlights
              </h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {highlights.map((highlight, index) => (
                  <div
                    key={`${highlight}-${index}`}
                    className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-emerald-700"
                    />

                    <span className="text-sm leading-6 text-slate-700">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right column */}
        <aside className="space-y-5">
          {/* Eligibility */}
          <div className="rounded-2xl bg-emerald-50 p-6">
            <h3 className="font-bold text-slate-900">
              Eligibility
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {eligibility}
            </p>
          </div>

          {/* Career options */}
          {careerOptions.length > 0 && (
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">
                Career Opportunities
              </h3>

              <ul className="mt-4 space-y-3">
                {careerOptions.map((career, index) => (
                  <li
                    key={`${career}-${index}`}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {career}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}