import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Info,
} from "lucide-react";

interface EligibilityItem {
  title: string;
  qualification: string;
  requirements: string[];
  note?: string;
}

interface EligibilityProps {
  items?: EligibilityItem[];
}

const defaultEligibility: EligibilityItem[] = [
  {
    title: "B.Tech / B.E. Programs",
    qualification: "10+2 / Higher Secondary",
    requirements: [
      "Passed 10+2 or equivalent examination",
      "Physics and Mathematics as compulsory subjects",
      "Chemistry / Computer Science / Biotechnology / Biology as an additional subject",
      "Minimum qualifying percentage as prescribed by the applicable authority",
    ],
    note: "Admission is subject to applicable entrance examination and counselling rules.",
  },
  {
    title: "Lateral Entry",
    qualification: "Diploma / Equivalent Qualification",
    requirements: [
      "Completed a recognized engineering diploma",
      "Meet the minimum percentage prescribed by the admission authority",
      "Eligible for direct admission to the appropriate semester as per regulations",
    ],
    note: "Seats are subject to availability and applicable government regulations.",
  },
  {
    title: "M.Tech / PG Programs",
    qualification: "Bachelor's Degree",
    requirements: [
      "Relevant B.E. / B.Tech or equivalent degree",
      "Meet the minimum qualifying percentage",
      "Valid entrance examination score where applicable",
    ],
    note: "Program-specific eligibility requirements may vary by specialization.",
  },
];

export default function Eligibility({
  items = defaultEligibility,
}: EligibilityProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Admission Requirements
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Eligibility Criteria
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Check the general eligibility requirements before applying to
            your preferred engineering program.
          </p>
        </div>

        {/* Eligibility cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                {index === 0 ? (
                  <GraduationCap size={24} />
                ) : index === 1 ? (
                  <BookOpen size={24} />
                ) : (
                  <GraduationCap size={24} />
                )}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              {/* Qualification */}
              <div className="mt-4 rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Required Qualification
                </p>

                <p className="mt-1 text-sm font-bold text-emerald-800">
                  {item.qualification}
                </p>
              </div>

              {/* Requirements */}
              <ul className="mt-5 space-y-3">
                {item.requirements.map((requirement, requirementIndex) => (
                  <li
                    key={`${requirement}-${requirementIndex}`}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-700"
                    />

                    <span className="text-sm leading-6 text-slate-600">
                      {requirement}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              {item.note && (
                <div className="mt-6 flex gap-3 rounded-xl border border-amber-100 bg-amber-50 p-4">
                  <Info
                    size={18}
                    className="mt-0.5 shrink-0 text-amber-700"
                  />

                  <p className="text-xs leading-5 text-slate-600">
                    {item.note}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm leading-6 text-slate-600">
            <strong className="text-slate-900">Important:</strong>{" "}
            Eligibility criteria shown above are general examples for the
            website design. Replace them with the official requirements
            applicable to your college, university, state counselling
            authority and academic year.
          </p>
        </div>
      </div>
    </section>
  );
}