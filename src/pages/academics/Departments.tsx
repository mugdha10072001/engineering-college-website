import { Building2, Search } from "lucide-react";
import { useMemo, useState } from "react";

import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import DepartmentCard from "../../components/academics/DepartmentCard";

const departments = [
  {
    name: "Computer Science & Engineering",
    shortName: "CSE",
    description:
      "Learn software development, artificial intelligence, data science, cloud computing and modern computing technologies.",
    href: "/departments/computer-science-engineering",
    image: "/images/laboratories/computer-lab.jpg",
    facultyCount: 24,
    programs: 3,
    established: "2001",
  },
  {
    name: "Electronics & Communication Engineering",
    shortName: "ECE",
    description:
      "Explore electronics, communication systems, embedded technologies, IoT and signal processing.",
    href: "/departments/electronics-communication-engineering",
    image: "/images/laboratories/electronic-lab.jpg",
    facultyCount: 18,
    programs: 2,
    established: "2002",
  },
  {
    name: "Mechanical Engineering",
    shortName: "ME",
    description:
      "Build strong foundations in manufacturing, thermal engineering, design, automation and mechanical systems.",
    href: "/departments/mechanical-engineering",
    image: "/images/laboratories/robotics-lab.jpg",
    facultyCount: 20,
    programs: 2,
    established: "2000",
  },
  {
    name: "Civil Engineering",
    shortName: "CE",
    description:
      "Study structural engineering, construction, transportation, environmental engineering and infrastructure.",
    href: "/departments/civil-engineering",
    image: "/images/laboratories/civil-lab.jpg",
    facultyCount: 16,
    programs: 2,
    established: "1999",
  },
  {
    name: "Electrical Engineering",
    shortName: "EE",
    description:
      "Develop expertise in electrical systems, power engineering, control systems and renewable energy.",
    href: "/departments/electrical-engineering",
    image: "/images/laboratories/electrical-lab.jpg",
    facultyCount: 17,
    programs: 2,
    established: "2003",
  },
  {
    name: "Artificial Intelligence & Data Science",
    shortName: "AI & DS",
    description:
      "Learn machine learning, data analytics, artificial intelligence and intelligent computing systems.",
    href: "/departments/artificial-intelligence-data-science",
    image: "/images/laboratories/computer-lab.jpg",
    facultyCount: 12,
    programs: 1,
    established: "2022",
  },
];

export default function Departments() {
  const [search, setSearch] = useState("");

  const filteredDepartments = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) {
      return departments;
    }

    return departments.filter(
      (department) =>
        department.name.toLowerCase().includes(value) ||
        department.shortName.toLowerCase().includes(value),
    );
  }, [search]);

  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-950 py-16 text-white sm:py-20">
        <Container>
          <Breadcrumb
            items={[
              { label: "Academics" },
              { label: "Departments" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Academic Departments
            </p>

            <h1 className="mt-3 text-4xl text-amber-50 font-bold sm:text-5xl">
              Explore Our Departments
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Discover departments that combine strong academic foundations,
              practical learning, research and industry exposure.
            </p>
          </div>
        </Container>
      </section>

      {/* Departments */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Engineering Disciplines"
            title="Find Your Area of Interest"
            description="Choose from a range of engineering disciplines designed to prepare students for future careers."
          />

          {/* Search */}
          <div className="mt-10 max-w-xl">
            <label
              htmlFor="department-search"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Search Department
            </label>

            <div className="relative">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="department-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by department name or code..."
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          {/* Grid */}
          {filteredDepartments.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredDepartments.map((department) => (
                <DepartmentCard key={department.shortName} {...department} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-slate-300 p-12 text-center">
              <Building2
                size={42}
                className="mx-auto text-slate-400"
              />

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                No departments found
              </h3>

              <p className="mt-2 text-slate-600">
                Try searching with a different department name or code.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Academic CTA */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
              Continue Exploring
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Looking for a Specific Program?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Explore our undergraduate and postgraduate programs to find the
              right academic path for you.
            </p>

            <div className="mt-7">
              <a
                href="/programs"
                className="inline-flex rounded-xl bg-emerald-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
              >
                View All Programs
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}