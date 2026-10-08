import {
  Award,
  BookOpen,
  BrainCircuit,
  FlaskConical,
  Lightbulb,
  Microscope,
  Users,
} from "lucide-react";

import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import Button from "../../components/common/Button";

const researchAreas = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Research in machine learning, intelligent systems, computer vision and data-driven technologies.",
  },
  {
    icon: CpuIcon,
    title: "IoT & Embedded Systems",
    description:
      "Innovative work involving connected devices, embedded systems, automation and smart technologies.",
  },
  {
    icon: FlaskConical,
    title: "Advanced Materials",
    description:
      "Research exploring materials, manufacturing processes and engineering applications.",
  },
  {
    icon: Microscope,
    title: "Sustainable Engineering",
    description:
      "Research focused on energy efficiency, environmental technologies and sustainable development.",
  },
];

function CpuIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M9 1v3" />
      <path d="M15 1v3" />
      <path d="M9 20v3" />
      <path d="M15 20v3" />
      <path d="M20 9h3" />
      <path d="M20 14h3" />
      <path d="M1 9h3" />
      <path d="M1 14h3" />
    </svg>
  );
}

const researchHighlights = [
  {
    value: "25+",
    label: "Research Projects",
  },
  {
    value: "40+",
    label: "Faculty Researchers",
  },
  {
    value: "50+",
    label: "Research Publications",
  },
  {
    value: "15+",
    label: "Industry Collaborations",
  },
];

export default function Research() {
  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-950 py-16 text-white sm:py-20">
        <Container>
          <Breadcrumb items={[{ label: "Research" }]} />

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Research & Innovation
            </p>

            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
              Turning Ideas Into Impact
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              We encourage students and faculty to explore new ideas, solve
              real-world problems and contribute to technological and social
              progress.
            </p>
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {researchHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-black text-emerald-900">
                  {item.value}
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Research Areas */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Research Domains"
            title="Areas of Research"
            description="Our research activities span emerging technologies and engineering challenges with real-world applications."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {researchAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-900 text-amber-400">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {area.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Research Ecosystem */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/gallery/research.jpg"
                alt="Research and innovation activities"
                className="h-[430px] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Innovation Ecosystem
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Encouraging Curiosity and Innovation
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Research at the institution is supported through faculty
                projects, student projects, technical clubs, laboratories,
                industry interactions and collaborative initiatives.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Faculty research projects",
                  "Student innovation projects",
                  "Industry collaboration",
                  "Technical publications",
                  "Research conferences and workshops",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                      ✓
                    </div>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Initiatives */}
      <section className="bg-emerald-950 py-16 text-white sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Research Initiatives"
            title="From Classroom Ideas to Real-World Solutions"
            description="We encourage students and faculty to collaborate, experiment and create solutions that can make a meaningful difference."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                text: "Encouraging students to transform ideas into prototypes and practical solutions.",
              },
              {
                icon: Users,
                title: "Collaboration",
                text: "Connecting faculty, students, researchers and industry partners.",
              },
              {
                icon: Award,
                title: "Recognition",
                text: "Supporting participation in conferences, competitions and research events.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7"
                >
                  <Icon size={30} className="text-amber-400" />

                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="text-center">
            <BookOpen
              size={38}
              className="mx-auto text-emerald-800"
            />

            <h2 className="mt-5 text-3xl font-bold text-slate-900">
              Explore Our Academic Community
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Discover our departments, faculty and academic programs.
            </p>

            <div className="mt-7">
              <Button to="/faculty">Meet Our Faculty</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}