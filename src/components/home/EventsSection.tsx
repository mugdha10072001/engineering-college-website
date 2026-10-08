import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const events = [
  {
    day: "18",
    month: "OCT",
    title: "Annual Technical Festival",
    description:
      "A celebration of innovation, technology and student projects.",
    location: "Main Auditorium",
  },
  {
    day: "25",
    month: "OCT",
    title: "Campus Placement Drive",
    description:
      "Leading companies visit the campus to recruit talented students.",
    location: "Placement Cell",
  },
  {
    day: "08",
    month: "NOV",
    title: "National Research Conference",
    description:
      "Researchers and students come together to discuss emerging technologies.",
    location: "Seminar Hall",
  },
];

export default function EventsSection() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Events & Activities"
            title="Discover What's Coming Up"
            description="From technical festivals to conferences and student activities, there is always something happening on campus."
          />

          <Link
            to="/events"
            className="mb-10 inline-flex items-center gap-2 font-bold text-emerald-800 transition hover:text-amber-600"
          >
            View All Events
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
            >
              <div className="flex gap-5">
                {/* Date */}
                <div className="flex h-20 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-emerald-900 text-white">
                  <span className="text-2xl font-bold">
                    {event.day}
                  </span>

                  <span className="text-xs font-bold tracking-wider text-amber-400">
                    {event.month}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-6 text-slate-900 transition group-hover:text-emerald-800">
                    {event.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={13} />
                    {event.location}
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {event.description}
              </p>

              <Link
                to="/events"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-800"
              >
                Event Details
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
          <CalendarDays
            size={18}
            className="text-emerald-700"
          />
          <span>
            Check the complete academic and event calendar.
          </span>

          <Link
            to="/downloads"
            className="font-bold text-emerald-800 hover:text-amber-600"
          >
            Download Calendar →
          </Link>
        </div>
      </Container>
    </section>
  );
}