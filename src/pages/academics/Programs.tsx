import { BookOpen, GraduationCap, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import CourseCard from "../../components/academics/CourseCard";

const programs = [
  {
    title: "Computer Science & Engineering",
    shortName: "B.Tech CSE",
    description:
      "Build expertise in programming, software engineering, databases, cloud computing, artificial intelligence and modern technologies.",
    duration: "4 Years",
    degree: "B.Tech",
    intake: 120,
    href: "/programs/btech-computer-science",
    image: "/images/laboratories/computer-lab.jpg",
    tag: "Popular",
  },
  {
    title: "Electronics & Communication Engineering",
    shortName: "B.Tech ECE",
    description:
      "Develop knowledge of electronics, communication systems, embedded systems, IoT and signal processing.",
    duration: "4 Years",
    degree: "B.Tech",
    intake: 60,
    href: "/programs/btech-electronics",
    image: "/images/laboratories/electronic-lab.jpg",
  },
  {
    title: "Mechanical Engineering",
    shortName: "B.Tech ME",
    description:
      "Learn mechanical design, manufacturing, thermal systems, automation and industrial engineering.",
    duration: "4 Years",
    degree: "B.Tech",
    intake: 60,
    href: "/programs/btech-mechanical",
    image: "/images/laboratories/robotics-lab.jpg",
  },
  {
    title: "Civil Engineering",
    shortName: "B.Tech CE",
    description:
      "Explore structural engineering, construction, environmental engineering, transportation and infrastructure.",
    duration: "4 Years",
    degree: "B.Tech",
    intake: 60,
    href: "/programs/btech-civil",
    image: "/images/laboratories/civil-lab.jpg",
  },
  {
    title: "Artificial Intelligence & Data Science",
    shortName: "B.Tech AI & DS",
    description:
      "Learn artificial intelligence, machine learning, data analytics and intelligent software systems.",
    duration: "4 Years",
    degree: "B.Tech",
    intake: 60,
    href: "/programs/btech-ai-data-science",
    image: "/images/laboratories/computer-lab.jpg",
    tag: "New",
  },
  {
    title: "Master of Technology",
    shortName: "M.Tech",
    description:
      "Advanced postgraduate engineering education focused on specialization, research and innovation.",
    duration: "2 Years",
    degree: "M.Tech",
    intake: 18,
    href: "/programs/mtech",
    image: "/images/campus/college-auditorium.jpg",
    tag: "PG Program",
  },
];

export default function Programs() {
  const [search, setSearch] = useState("");

  const filteredPrograms = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) {
      return programs;
    }

    return programs.filter((program) => {
      return (
        program.title.toLowerCase().includes(value) ||
        program.shortName.toLowerCase().includes(value) ||
        program.degree.toLowerCase().includes(value)
      );
    });
  }, [search]);

  return (
    <>
      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="bg-emerald-950 py-16 text-white sm:py-20">
        <Container>
          <Breadcrumb
            items={[
              {
                label: "Academics",
                href: "/departments",
              },
              {
                label: "Programs",
              },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Academic Programs
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Programs Designed for Tomorrow
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Build strong technical foundations and gain practical experience
              through industry-relevant engineering programs.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================
          PROGRAMS SECTION
      ========================== */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Choose Your Path"
            title="Explore Our Programs"
            description="Our programs combine classroom learning, practical experience, projects and opportunities for professional development."
          />

          {/* Search */}
          <div className="mt-10 max-w-xl">
            <label
              htmlFor="program-search"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Search Program
            </label>

            <div className="relative">
              <Search
                size={19}
                aria-hidden="true"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="program-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search programs..."
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-900">
                {filteredPrograms.length}
              </span>{" "}
              {filteredPrograms.length === 1 ? "program" : "programs"}
            </p>

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-sm font-semibold text-emerald-800 transition hover:text-amber-600"
              >
                Clear Search
              </button>
            )}
          </div>

          {/* Program Cards */}
          {filteredPrograms.length > 0 ? (
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPrograms.map((program) => (
                <CourseCard
                  key={program.shortName}
                  title={program.title}
                  shortName={program.shortName}
                  description={program.description}
                  duration={program.duration}
                  degree={program.degree}
                  intake={program.intake}
                  href={program.href}
                  image={program.image}
                  tag={program.tag}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
              <BookOpen
                size={42}
                aria-hidden="true"
                className="mx-auto text-slate-400"
              />

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                No programs found
              </h3>

              <p className="mt-2 text-slate-600">
                We couldn't find any programs matching "{search}".
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-5 rounded-xl bg-emerald-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
              >
                View All Programs
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* =========================
          WHY STUDY HERE
      ========================== */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Learning Experience"
            title="More Than a Degree"
            description="Our programs are designed to develop technical knowledge, problem-solving ability and professional confidence."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                <GraduationCap size={30} aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Strong Academics
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Learn from experienced faculty through structured,
                outcome-focused and student-centred teaching.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                <BookOpen size={30} aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Practical Learning
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Apply concepts through laboratories, projects, workshops,
                technical competitions and hands-on activities.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                <Search size={30} aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Career Focus
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Develop professional skills through internships, industry
                interaction, projects and placement preparation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================
          PROGRAM STRUCTURE
      ========================== */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Academic Excellence
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Learn. Build. Innovate.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Our academic programs are structured to help students move
                from fundamental concepts to advanced technical applications.
                Students get opportunities to work on projects, participate in
                technical activities and develop professional skills.
              </p>

              <div className="mt-7">
                <Link
                  to="/departments"
                  className="inline-flex items-center rounded-xl bg-emerald-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
                >
                  Explore Departments
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-emerald-950 p-6 text-white">
                <p className="text-3xl font-bold">4+</p>
                <p className="mt-2 text-sm text-slate-300">
                  Engineering disciplines
                </p>
              </div>

              <div className="rounded-2xl bg-amber-400 p-6 text-slate-900">
                <p className="text-3xl font-bold">6+</p>
                <p className="mt-2 text-sm text-slate-800">
                  Academic programs
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold text-slate-900">30+</p>
                <p className="mt-2 text-sm text-slate-600">
                  Modern laboratories
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold text-slate-900">100+</p>
                <p className="mt-2 text-sm text-slate-600">
                  Experienced faculty
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================
          ADMISSION CTA
      ========================== */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-emerald-950 p-8 text-white sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
                  Start Your Journey
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Ready to Choose Your Program?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  Explore admission requirements, important dates and
                  application information for the upcoming academic year.
                </p>
              </div>

              <Link
                to="/admissions"
                className="inline-flex h-fit items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-300"
              >
                View Admissions
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}