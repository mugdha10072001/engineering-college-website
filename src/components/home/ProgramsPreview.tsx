import {
  ArrowRight,
  Cpu,
  FlaskConical,
  HardHat,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const programs = [
  {
    title: "Computer Science & Engineering",
    shortName: "CSE",
    description:
      "Build expertise in software engineering, AI, cloud computing and modern technologies.",
    icon: Cpu,
  },
  {
    title: "Electronics & Communication",
    shortName: "ECE",
    description:
      "Explore electronics, communication systems, embedded technology and IoT.",
    icon: Zap,
  },
  {
    title: "Mechanical Engineering",
    shortName: "ME",
    description:
      "Develop strong foundations in manufacturing, design, automation and mechanical systems.",
    icon: HardHat,
  },
  {
    title: "Civil Engineering",
    shortName: "CE",
    description:
      "Learn to design and build sustainable infrastructure for tomorrow's cities.",
    icon: FlaskConical,
  },
];

export default function ProgramsPreview() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Academics"
          title="Programs Designed for the Future"
          description="Choose from industry-relevant engineering programs that combine strong fundamentals with practical experience."
          centered
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.shortName}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800 transition group-hover:bg-emerald-800 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <span className="text-sm font-bold text-amber-600">
                    {program.shortName}
                  </span>
                </div>

                <h3 className="mt-7 min-h-[56px] text-xl font-bold leading-7 text-slate-900">
                  {program.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {program.description}
                </p>

                <Link
                  to="/programs"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-800"
                >
                  View Program
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-emerald-800 px-6 py-3 font-bold text-emerald-800 transition hover:bg-emerald-800 hover:text-white"
          >
            View All Programs
            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}