import {
  BookOpen,
  Dumbbell,
  Wifi,
  Monitor,
  Coffee,
  Bus,
} from "lucide-react";

import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import FacilityCard from "../../components/campus/FacilityCard";

const facilities = [
  {
    title: "Central Library",
    description:
      "A modern learning resource centre with textbooks, reference books, journals, digital resources and comfortable study spaces.",
    image: "/images/campus/college-library.jpg",
    href: "/facilities/central-library",
    features: [
      "Extensive book collection",
      "Digital learning resources",
      "Reading rooms",
      "Online journals",
    ],
    icon: <BookOpen size={24} />,
  },
  {
    title: "Sports Complex",
    description:
      "A vibrant sports facility that encourages students to maintain an active lifestyle and participate in competitive events.",
    image: "/images/campus/college-playground.jpg",
    href: "/facilities/sports-complex",
    features: [
      "Indoor sports",
      "Outdoor playground",
      "Fitness facilities",
      "Inter-college competitions",
    ],
    icon: <Dumbbell size={24} />,
  },
  {
    title: "Smart Classrooms",
    description:
      "Technology-enabled classrooms designed to support interactive and engaging teaching and learning experiences.",
    image: "/images/campus/college-classroom.jpg",
    href: "/facilities/smart-classrooms",
    features: [
      "Digital displays",
      "Audio-visual systems",
      "Internet connectivity",
      "Interactive teaching",
    ],
    icon: <Monitor size={24} />,
  },
  {
    title: "Campus Wi-Fi",
    description:
      "High-speed campus connectivity providing students and faculty with convenient access to digital learning resources.",
    image: "/images/campus/college-wifi.jpg",
    href: "/facilities/campus-wifi",
    features: [
      "Campus-wide connectivity",
      "Academic resources",
      "Secure access",
      "Online learning support",
    ],
    icon: <Wifi size={24} />,
  },
  {
    title: "Student Cafeteria",
    description:
      "A comfortable campus dining space offering refreshments and meals in a relaxed environment.",
    image: "/images/campus/college-cafeteria.jpg",
    href: "/facilities/cafeteria",
    features: [
      "Comfortable seating",
      "Fresh refreshments",
      "Student-friendly environment",
      "Hygienic facilities",
    ],
    icon: <Coffee size={24} />,
  },
  {
    title: "Transportation",
    description:
      "Convenient transportation facilities designed to support students and staff travelling to and from campus.",
    image: "/images/campus/college-entrance.jpg",
    href: "/facilities/transportation",
    features: [
      "Multiple routes",
      "Student transportation",
      "Staff transportation",
      "Scheduled services",
    ],
    icon: <Bus size={24} />,
  },
];

export default function Facilities() {
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
                label: "Facilities",
              },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Campus Facilities
            </p>

            <h1 className="mt-3 text-4xl font-bold text-amber-50 leading-tight sm:text-5xl">
              Everything You Need to Learn & Grow
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Our campus provides modern facilities and student-friendly
              spaces designed to support academic, professional and personal
              development.
            </p>
          </div>
        </Container>
      </section>

      {/* Facilities */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Campus Infrastructure"
            title="Explore Our Facilities"
            description="From learning resources to recreation and student services, our campus is designed to provide a complete educational experience."
            centered
          />

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <FacilityCard key={facility.title} {...facility} />
            ))}
          </div>
        </Container>
      </section>

      {/* Campus Experience */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Student Experience
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                A Campus Built Around Students
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                We believe that engineering education extends beyond
                classrooms and laboratories. Our campus facilities create
                opportunities for students to collaborate, relax, participate
                in activities and develop skills outside academics.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <BookOpen className="text-emerald-800" size={25} />
                  <h3 className="mt-3 font-bold text-slate-900">
                    Learning Spaces
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Libraries, classrooms and study spaces designed for
                    focused learning.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <Dumbbell className="text-emerald-800" size={25} />
                  <h3 className="mt-3 font-bold text-slate-900">
                    Recreation
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Sports and recreational facilities for a balanced campus
                    life.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/campus/campus-main.jpg"
                alt="College campus"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}