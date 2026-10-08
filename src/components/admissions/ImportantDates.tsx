import {
  CalendarDays,
  Clock3,
  ExternalLink,
  MapPin,
} from "lucide-react";

interface AdmissionDate {
  date: string;
  month: string;
  title: string;
  description?: string;
  status?: "upcoming" | "open" | "closed";
}

interface ImportantDatesProps {
  dates?: AdmissionDate[];
}

const defaultDates: AdmissionDate[] = [
  {
    date: "15",
    month: "JUN",
    title: "Application Portal Opens",
    description:
      "Online applications open for eligible candidates.",
    status: "open",
  },
  {
    date: "30",
    month: "JUN",
    title: "Application Deadline",
    description:
      "Last date to submit the completed application form.",
    status: "upcoming",
  },
  {
    date: "10",
    month: "JUL",
    title: "Document Verification",
    description:
      "Verification of submitted academic and personal documents.",
    status: "upcoming",
  },
  {
    date: "20",
    month: "JUL",
    title: "Merit / Selection List",
    description:
      "Publication of the provisional selection or merit list.",
    status: "upcoming",
  },
  {
    date: "01",
    month: "AUG",
    title: "Academic Session Begins",
    description:
      "New academic session commences for selected students.",
    status: "upcoming",
  },
];

export default function ImportantDates({
  dates = defaultDates,
}: ImportantDatesProps) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Stay Updated
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Important Admission Dates
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Keep track of important deadlines and admission activities for
            the upcoming academic session.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute bottom-6 left-[27px] top-6 w-px bg-slate-200 sm:left-[39px]" />

          <div className="space-y-5">
            {dates.map((item, index) => (
              <div
                key={`${item.date}-${item.month}-${index}`}
                className="relative flex gap-4 sm:gap-6"
              >
                {/* Date */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-emerald-900 text-white shadow-md sm:h-20 sm:w-20 sm:rounded-2xl">
                  <span className="text-xl font-bold sm:text-2xl">
                    {item.date}
                  </span>

                  <span className="text-[10px] font-semibold tracking-widest text-amber-300 sm:text-xs">
                    {item.month}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>

                      {item.description && (
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Status */}
                    {item.status && (
                      <span
                        className={`inline-flex w-fit shrink-0 items-center rounded-full px-3 py-1 text-xs font-semibold ${
                          item.status === "open"
                            ? "bg-emerald-100 text-emerald-800"
                            : item.status === "closed"
                              ? "bg-red-100 text-red-700"
                              : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {item.status === "open"
                          ? "Open"
                          : item.status === "closed"
                            ? "Closed"
                            : "Upcoming"}
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={14} />
                      Academic Session 2026–27
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Clock3 size={14} />
                      Check official notification
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-emerald-900 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <CalendarDays className="text-amber-400" size={22} />
            </div>

            <div>
              <h3 className="font-bold text-white">
                Need the complete admission schedule?
              </h3>

              <p className="mt-1 text-sm text-white/65">
                Download the official academic calendar and admission
                brochure.
              </p>
            </div>
          </div>

          <a
            href="/documents/academic-calendar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-300"
          >
            Academic Calendar
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Location note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
          <MapPin size={14} />
          Admission dates are subject to official notifications and may
          change.
        </div>
      </div>
    </section>
  );
}