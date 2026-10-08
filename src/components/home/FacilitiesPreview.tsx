import {
  ArrowRight,
  BookOpen,
  Building2,
  Dumbbell,
  FlaskConical,
  Library,
  Wifi,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const facilities = [
  {
    title: "Central Library",
    description:
      "Extensive collection of books, journals and digital resources.",
    icon: Library,
  },
  {
    title: "Modern Laboratories",
    description:
      "Well-equipped labs for practical learning and experimentation.",
    icon: FlaskConical,
  },
  {
    title: "Smart Classrooms",
    description:
      "Technology-enabled learning spaces for an interactive experience.",
    icon: BookOpen,
  },
  {
    title: "Campus Wi-Fi",
    description:
      "High-speed connectivity across academic and common areas.",
    icon: Wifi,
  },
  {
    title: "Sports Complex",
    description:
      "Facilities supporting fitness, sports and student activities.",
    icon: Dumbbell,
  },
  {
    title: "Modern Campus",
    description:
      "A safe, green and student-friendly campus environment.",
    icon: Building2,
  },
];

export default function FacilitiesPreview() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Campus Life"
            title="Everything You Need to Thrive"
            description="Our campus combines modern infrastructure with an environment designed for learning, collaboration and personal growth."
          />

          <Link
            to="/facilities"
            className="mb-10 inline-flex shrink-0 items-center gap-2 font-bold text-emerald-800 transition hover:text-amber-600"
          >
            Explore Facilities
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => {
            const Icon = facility.icon;

            return (
              <div
                key={facility.title}
                className="group rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800 transition group-hover:bg-emerald-800 group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}