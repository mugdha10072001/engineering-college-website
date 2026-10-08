import {
  Award,
  Medal,
  Star,
  Trophy,
  Users,
} from "lucide-react";

import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import Button from "../../components/common/Button";

const achievements = [
  {
    year: "2026",
    category: "Technical",
    title: "Students Win National Innovation Competition",
    description:
      "A student team secured a top position in a national-level innovation competition for developing a technology-driven solution.",
  },
  {
    year: "2026",
    category: "Research",
    title: "Faculty Research Recognized",
    description:
      "Faculty researchers received recognition for their contribution to applied engineering research and innovation.",
  },
  {
    year: "2025",
    category: "Sports",
    title: "Inter-College Sports Championship",
    description:
      "Our students performed strongly at the inter-college sports championship and secured multiple positions.",
  },
  {
    year: "2025",
    category: "Academic",
    title: "Outstanding Academic Performance",
    description:
      "Students achieved excellent results across multiple engineering programs during the academic year.",
  },
  {
    year: "2024",
    category: "Innovation",
    title: "Student Startup Initiative",
    description:
      "A student-led startup initiative received support through the institution's innovation and entrepreneurship ecosystem.",
  },
  {
    year: "2024",
    category: "Technical",
    title: "Robotics Team Reaches National Finals",
    description:
      "The college robotics team successfully competed against institutions from across the country.",
  },
];

const categories = [
  {
    icon: Trophy,
    title: "Technical Excellence",
    text: "Recognition in competitions, hackathons, coding contests and engineering events.",
  },
  {
    icon: Medal,
    title: "Sports Achievements",
    text: "Students represent the college in university, state and inter-college competitions.",
  },
  {
    icon: Star,
    title: "Academic Success",
    text: "Consistent academic performance and recognition for outstanding students.",
  },
  {
    icon: Award,
    title: "Research & Innovation",
    text: "Projects, publications, prototypes and innovation initiatives.",
  },
];

export default function Achievements() {
  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-950 py-16 text-white sm:py-20">
        <Container>
          <Breadcrumb items={[{ label: "Achievements" }]} />

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Excellence & Recognition
            </p>

            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
              Celebrating Our Achievements
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              From technical competitions and research to sports and academic
              excellence, our students and faculty continue to make us proud.
            </p>
          </div>
        </Container>
      </section>

      {/* Achievement Categories */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Areas of Excellence"
            title="Where Our Students Shine"
            description="We celebrate achievement across academics, technology, research, sports and innovation."
            centered
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Achievement Timeline */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Journey"
            title="Recent Achievements"
            description="A selection of achievements and milestones from our academic community."
            centered
          />

          <div className="mx-auto mt-12 max-w-4xl space-y-5">
            {achievements.map((achievement) => (
              <article
                key={`${achievement.year}-${achievement.title}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="shrink-0">
                    <span className="inline-flex rounded-full bg-emerald-900 px-4 py-2 text-sm font-bold text-white">
                      {achievement.year}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                        {achievement.category}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                      {achievement.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {achievement.description}
                    </p>
                  </div>

                  <Award
                    size={28}
                    className="hidden shrink-0 text-amber-500 sm:block"
                  />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Student Recognition */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl bg-emerald-950 p-8 text-white">
              <Trophy size={32} className="text-amber-400" />

              <p className="mt-6 text-4xl font-black">100+</p>

              <h3 className="mt-2 text-xl font-bold">
                Competition Awards
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Recognition received by students across technical, cultural
                and sports competitions.
              </p>
            </div>

            <div className="rounded-3xl bg-amber-400 p-8 text-slate-900">
              <Users size={32} />

              <p className="mt-6 text-4xl font-black">5000+</p>

              <h3 className="mt-2 text-xl font-bold">
                Successful Alumni
              </h3>

              <p className="mt-3 text-sm leading-6">
                Our alumni continue to contribute across engineering,
                technology, business and research.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <Star size={32} className="text-amber-500" />

              <p className="mt-6 text-4xl font-black text-slate-900">
                25+
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Years of Excellence
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                A growing legacy of engineering education, student
                development and institutional excellence.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="rounded-3xl bg-slate-100 p-8 text-center sm:p-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Be Part of Our Next Success Story
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Explore our programs and discover opportunities to learn,
              innovate, compete and achieve.
            </p>

            <div className="mt-7">
              <Button to="/admissions">
                Explore Admissions
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}