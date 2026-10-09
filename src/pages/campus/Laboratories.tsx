import {
  Cpu,
  FlaskConical,
  Gauge,
  Laptop,
  Settings,
  Zap,
} from "lucide-react";

import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import LaboratoryCard from "../../components/campus/LaboratoryCard";

const laboratories = [
  {
    name: "Computer Programming Lab",
    department: "Computer Science & Engineering",
    description:
      "A modern computing environment for programming, software development, database systems, web technologies and practical coursework.",
    image: "/images/laboratories/computer-lab.jpg",
    href: "/laboratories/computer-programming-lab",
    equipmentCount: 60,
    capacity: 60,
    category: "Computing",
  },
  {
    name: "Artificial Intelligence & Data Science Lab",
    department: "AI & Data Science",
    description:
      "A specialized environment for machine learning, artificial intelligence, data analytics and intelligent computing projects.",
    image: "/images/laboratories/computer-lab.jpg",
    href: "/laboratories/ai-data-science-lab",
    equipmentCount: 45,
    capacity: 45,
    category: "AI & Data Science",
  },
  {
    name: "Electronics & Communication Lab",
    department: "Electronics & Communication Engineering",
    description:
      "Practical learning facility for electronics circuits, communication systems, embedded systems and signal processing.",
    image: "/images/laboratories/electronic-lab.jpg",
    href: "/laboratories/electronics-communication-lab",
    equipmentCount: 50,
    capacity: 50,
    category: "Electronics",
  },
  {
    name: "Mechanical Workshop",
    department: "Mechanical Engineering",
    description:
      "Hands-on workshop supporting manufacturing, machining, mechanical design and production-related practical learning.",
    image: "/images/laboratories/robotics-lab.jpg",
    href: "/laboratories/mechanical-workshop",
    equipmentCount: 35,
    capacity: 40,
    category: "Mechanical",
  },
  {
    name: "Civil Engineering Lab",
    department: "Civil Engineering",
    description:
      "Laboratory facilities for materials testing, surveying, structural engineering and construction technology.",
    image: "/images/laboratories/civil-lab.jpg",
    href: "/laboratories/civil-engineering-lab",
    equipmentCount: 30,
    capacity: 40,
    category: "Civil",
  },
  {
    name: "Electrical Machines Lab",
    department: "Electrical Engineering",
    description:
      "Practical laboratory for electrical machines, power systems, control systems and electrical measurements.",
    image: "/images/laboratories/electrical-lab.jpg",
    href: "/laboratories/electrical-machines-lab",
    equipmentCount: 40,
    capacity: 45,
    category: "Electrical",
  },
];

export default function Laboratories() {
  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-950 py-16 text-white sm:py-20">
        <Container>
          <Breadcrumb
            items={[
              {
                label: "Campus",
                href: "/facilities",
              },
              {
                label: "Laboratories",
              },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Practical Learning
            </p>

            <h1 className="mt-3 text-4xl text-amber-50 font-bold leading-tight sm:text-5xl">
              Modern Laboratories
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Gain practical experience through well-equipped laboratories
              designed to support experimentation, projects, research and
              hands-on engineering education.
            </p>
          </div>
        </Container>
      </section>

      {/* Laboratory Cards */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Hands-On Education"
            title="Explore Our Laboratories"
            description="Our laboratories provide students with the tools and environment required to turn theoretical concepts into practical solutions."
            centered
          />

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {laboratories.map((laboratory) => (
              <LaboratoryCard
                key={laboratory.name}
                {...laboratory}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Practical Learning */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Practical Learning Matters"
            title="Learn by Doing"
            description="Engineering students need opportunities to experiment, build, test and improve their ideas."
            centered
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Laptop,
                title: "Computing",
                text: "Programming, software development and data-driven projects.",
              },
              {
                icon: Cpu,
                title: "Electronics",
                text: "Embedded systems, circuits, IoT and communication technologies.",
              },
              {
                icon: Settings,
                title: "Mechanical",
                text: "Manufacturing, design, machines and automation.",
              },
              {
                icon: FlaskConical,
                title: "Experimentation",
                text: "Laboratory experiments that connect concepts with real-world applications.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                    <Icon size={25} />
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

      {/* Lab Highlights */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl bg-emerald-950 p-8 text-white sm:p-12">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <Gauge size={30} className="text-amber-400" />

                <p className="mt-4 text-3xl font-bold">30+</p>

                <p className="mt-2 text-sm text-slate-300">
                  Modern laboratories
                </p>
              </div>

              <div>
                <Settings size={30} className="text-amber-400" />

                <p className="mt-4 text-3xl font-bold">500+</p>

                <p className="mt-2 text-sm text-slate-300">
                  Equipment & instruments
                </p>
              </div>

              <div>
                <Zap size={30} className="text-amber-400" />

                <p className="mt-4 text-3xl font-bold">100%</p>

                <p className="mt-2 text-sm text-slate-300">
                  Focus on practical learning
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}