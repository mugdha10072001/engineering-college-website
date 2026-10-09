import {
  Award,
  BookOpen,
  Building2,
  GraduationCap,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import Button from "../../components/common/Button";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-emerald-950 py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[url('/images/campus/college-building.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-emerald-950/80" />

        <Container>
          <div className="relative max-w-3xl">
            <Breadcrumb
              items={[
                { label: "About", href: "/about" },
                { label: "About College" },
              ]}
            />

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              About Our Institution
            </p>

            <h1 className="mt-3 text-4xl font-bold text-amber-50 leading-tight sm:text-5xl lg:text-6xl">
              Building Engineers.
              <br />
              Creating Leaders.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              A forward-thinking engineering institution committed to
              academic excellence, innovation, industry collaboration and
              holistic student development.
            </p>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/campus/college-building.jpg"
                alt="College campus building"
                className="h-full min-h-[380px] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                An Institution Focused on the Future
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  ABC Engineering College is committed to providing quality
                  technical education that prepares students for the changing
                  demands of the engineering and technology industry.
                </p>

                <p>
                  Our academic environment combines strong fundamentals,
                  practical learning, research opportunities and industry
                  exposure to help students become confident professionals.
                </p>

                <p>
                  With modern infrastructure, experienced faculty members and
                  a vibrant campus community, we provide students with the
                  resources they need to explore, innovate and succeed.
                </p>
              </div>

              <div className="mt-8">
                <Button to="/programs" variant="primary">
                  Explore Our Programs
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision Mission */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Foundation"
            title="Vision & Mission"
            description="Our academic philosophy is built around knowledge, innovation, ethics and meaningful contribution to society."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-900 text-amber-400">
                <Target size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                To become a leading centre of engineering education, research
                and innovation that develops technically competent,
                socially responsible and globally capable professionals.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-slate-900">
                <Lightbulb size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                To provide an inclusive learning environment that combines
                quality teaching, practical education, research, innovation
                and industry interaction while nurturing professional values.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Believe"
            title="Our Core Values"
            description="The values that guide our students, faculty and institution."
            centered
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: GraduationCap,
                title: "Academic Excellence",
                text: "Encouraging strong fundamentals and continuous learning.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                text: "Creating an environment where ideas become solutions.",
              },
              {
                icon: Users,
                title: "Collaboration",
                text: "Building strong relationships between students, faculty and industry.",
              },
              {
                icon: Award,
                title: "Integrity",
                text: "Promoting ethical behaviour, responsibility and professionalism.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="bg-emerald-950 py-16 text-white sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex gap-5">
              <Building2 className="mt-1 shrink-0 text-amber-400" size={30} />

              <div>
                <h3 className="text-xl font-bold">Modern Campus</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Learning spaces and infrastructure designed for modern
                  engineering education.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <BookOpen className="mt-1 shrink-0 text-amber-400" size={30} />

              <div>
                <h3 className="text-xl font-bold">Industry-Relevant Learning</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Curriculum and practical experiences aligned with evolving
                  industry requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Users className="mt-1 shrink-0 text-amber-400" size={30} />

              <div>
                <h3 className="text-xl font-bold">Student-Centric Culture</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Opportunities for students to learn, collaborate, compete
                  and grow.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="rounded-3xl bg-slate-100 p-8 text-center sm:p-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Discover Your Opportunities
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Explore our academic programs, campus facilities and student
              opportunities.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Button to="/programs">View Programs</Button>

              <Link
                to="/contact"
                className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-emerald-800 hover:text-emerald-800"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}