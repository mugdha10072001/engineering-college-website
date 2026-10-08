import {
  ArrowRight,
  BookOpen,
  Dumbbell,
  Palette,
  Users,
  Wrench,
} from "lucide-react";

import Breadcrumb from "../../components/common/Breadcrumb";
import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";

const activities = [
  {
    title: "Technical Clubs",
    description:
      "Students participate in coding, robotics, electronics, AI and other technical clubs to develop practical skills.",
    icon: Wrench,
  },
  {
    title: "Sports",
    description:
      "A wide range of indoor and outdoor sports encourages teamwork, discipline, fitness and healthy competition.",
    icon: Dumbbell,
  },
  {
    title: "Cultural Activities",
    description:
      "Students showcase their creativity and talent through cultural festivals, celebrations and stage performances.",
    icon: Palette,
  },
  {
    title: "Creative Arts",
    description:
      "Art, photography, music, dance and other creative activities provide students with opportunities for self-expression.",
    icon: Palette,
  },
  {
    title: "Student Clubs",
    description:
      "Student-led communities encourage collaboration, leadership, communication and peer-to-peer learning.",
    icon: Users,
  },
  {
    title: "Workshops & Seminars",
    description:
      "Expert sessions and workshops expose students to emerging technologies, career opportunities and industry trends.",
    icon: BookOpen,
  },
];

const featuredEvents = [
  {
    title: "Annual Technical Festival",
    description:
      "A celebration of engineering innovation featuring technical competitions, project demonstrations and workshops.",
    image: "/images/events/tech-fest.jpg",
    category: "Technical",
  },
  {
    title: "Annual Cultural Festival",
    description:
      "A vibrant celebration where students come together to showcase music, dance, art and cultural performances.",
    image: "/images/events/independence-day.jpg",
    category: "Cultural",
  },
  {
    title: "Annual Sports Meet",
    description:
      "An inter-department sports event encouraging teamwork, fitness and competitive spirit among students.",
    image: "/images/events/annual-function.jpg",
    category: "Sports",
  },
];

export default function StudentActivities() {
  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <section className="bg-emerald-950 py-16 text-white sm:py-20">
        <Container>
          <Breadcrumb
            items={[
              {
                label: "Student Life",
              },
              {
                label: "Student Activities",
              },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Student Life
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
              Learn, Participate, Lead
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              College life goes beyond classrooms. Our student activities
              encourage creativity, leadership, teamwork, innovation and
              personal development.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================
          ACTIVITIES
      ========================== */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Student Development"
            title="Activities Beyond Academics"
            description="Students have numerous opportunities to explore their interests, develop new skills and build meaningful relationships."
            centered
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <div
                  key={activity.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 transition group-hover:bg-emerald-800 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {activity.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {activity.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-800">
                    Explore Activity
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================
          FEATURED EVENTS
      ========================== */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Campus Events"
            title="Experience College Life"
            description="From technical competitions to cultural celebrations, students get many opportunities to participate and showcase their talents."
            centered
          />

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <article
                key={event.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-emerald-900 shadow">
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {event.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-800">
                    View Event
                    <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================
          STUDENT DEVELOPMENT
      ========================== */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Holistic Development"
                title="Building Confidence Beyond the Classroom"
                description="Our student life programmes help learners develop the skills and experiences needed to become confident professionals and responsible citizens."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Leadership Skills",
                  "Teamwork & Collaboration",
                  "Communication Skills",
                  "Technical Exposure",
                  "Creative Thinking",
                  "Problem Solving",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <p className="font-semibold text-slate-800">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/images/campus/sports-complex.jpg"
                alt="Students participating in campus activities"
                className="h-[420px] w-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-emerald-950/90 p-5 text-white backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                  Student Experience
                </p>

                <p className="mt-2 text-lg font-semibold">
                  Discover. Participate. Lead.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================
          QUICK LINKS
      ========================== */}
      <section className="bg-emerald-50 py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                  Explore More
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Discover Everything Campus Has to Offer
                </h2>

                <p className="mt-3 max-w-2xl text-slate-600">
                  Explore our achievements, campus facilities, gallery and
                  upcoming events.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  to="/achievements"
                  variant="primary"
                >
                  Achievements
                  <ArrowRight size={17} />
                </Button>

                <Button
                  to="/gallery"
                  variant="outline"
                >
                  View Gallery
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl bg-emerald-950 px-6 py-12 text-center text-white sm:px-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Make Your College Years Count
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              Join a campus where learning, innovation, friendships and
              unforgettable experiences come together.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                to="/admissions"
                variant="secondary"
                size="lg"
              >
                Apply for Admission
                <ArrowRight size={18} />
              </Button>

              <Button
                to="/contact"
                variant="outline"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}