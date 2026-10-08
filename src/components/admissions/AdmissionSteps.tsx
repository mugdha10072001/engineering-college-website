import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileCheck,
  GraduationCap,
  Send,
} from "lucide-react";

interface AdmissionStep {
  number: string;
  title: string;
  description: string;
}

interface AdmissionStepsProps {
  steps?: AdmissionStep[];
}

const defaultSteps: AdmissionStep[] = [
  {
    number: "01",
    title: "Explore Programs",
    description:
      "Choose an engineering program based on your interests, eligibility and career goals.",
  },
  {
    number: "02",
    title: "Check Eligibility",
    description:
      "Review the academic qualifications and admission requirements for your preferred program.",
  },
  {
    number: "03",
    title: "Submit Application",
    description:
      "Complete the application form and submit all required academic and personal documents.",
  },
  {
    number: "04",
    title: "Verification",
    description:
      "Our admission team verifies your application, documents and eligibility details.",
  },
  {
    number: "05",
    title: "Admission Confirmation",
    description:
      "Complete the required formalities and confirm your admission by paying the applicable fees.",
  },
];

const icons = [
  GraduationCap,
  ClipboardList,
  Send,
  FileCheck,
  CheckCircle2,
];

export default function AdmissionSteps({
  steps = defaultSteps,
}: AdmissionStepsProps) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Admission Process
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Follow these simple steps to begin your academic journey with
            our institution.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-12">
          {/* Connecting line - desktop */}
          <div className="absolute left-[10%] right-[10%] top-12 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = icons[index % icons.length];

              return (
                <div
                  key={`${step.number}-${step.title}`}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    {/* Number */}
                    <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-50 bg-emerald-900 text-lg font-bold text-amber-400 shadow-md">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mx-auto mt-5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-10 z-20 hidden lg:block">
                      <ArrowRight
                        size={18}
                        className="text-amber-500"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-2xl bg-emerald-900 px-6 py-5 text-center sm:flex-row sm:text-left">
          <CheckCircle2
            size={22}
            className="shrink-0 text-amber-400"
          />

          <p className="text-sm leading-6 text-white/80">
            Keep your academic documents and identification proof ready
            before starting the application process.
          </p>
        </div>
      </div>
    </section>
  );
}