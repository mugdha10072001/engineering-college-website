import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  GraduationCap,
  TrendingUp,
  Users,
} from "lucide-react";

import Breadcrumb from "../../components/common/Breadcrumb";
import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";

const recruiters = [
  "TCS",
  "Infosys",
  "Wipro",
  "Accenture",
  "Capgemini",
  "Cognizant",
  "Deloitte",
  "Tech Mahindra",
  "L&T",
  "HCL Technologies",
  "Persistent",
  "IBM",
];

const placementStats = [
  {
    value: "95%",
    label: "Placement Rate",
    icon: TrendingUp,
  },
  {
    value: "120+",
    label: "Recruiters",
    icon: Building2,
  },
  {
    value: "₹12 LPA",
    label: "Highest Package",
    icon: BriefcaseBusiness,
  },
  {
    value: "500+",
    label: "Students Placed",
    icon: Users,
  },
];

const placementProcess = [
  {
    step: "01",
    title: "Career Preparation",
    description:
      "Students receive training in aptitude, communication, technical skills and interview preparation.",
  },
  {
    step: "02",
    title: "Industry Interaction",
    description:
      "Students participate in pre-placement talks, workshops and interaction sessions with industry professionals.",
  },
  {
    step: "03",
    title: "Recruitment Drives",
    description:
      "Leading companies conduct aptitude tests, technical interviews and HR rounds on campus.",
  },
  {
    step: "04",
    title: "Offer & Onboarding",
    description:
      "Selected students receive employment offers and guidance for their transition into professional careers.",
  },
];

export default function Placements() {
  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-950 py-16 text-white sm:py-20">
        <Container>
          <Breadcrumb
            items={[
              {
                label: "Placements",
              },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Training & Placement
            </p>

            <h1 className="mt-3 text-4xl text-amber-50 font-bold leading-tight sm:text-5xl">
              Building Careers Beyond the Classroom
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Our Training and Placement Cell connects talented students with
              leading companies and prepares them for successful professional
              careers.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="relative -mt-8 pb-16">
        <Container>
          <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">
            {placementStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="border-b border-slate-100 p-6 text-center last:border-b-0 sm:border-r lg:border-b-0"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                    <Icon size={24} />
                  </div>

                  <p className="mt-4 text-3xl font-bold text-slate-900">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Placement Overview */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Career Development"
                title="Preparing Students for the World of Work"
                description="Our placement programme focuses on developing technical expertise, professional confidence and industry-ready skills."
              />

              <div className="mt-8 space-y-4">
                {[
                  "Dedicated Training & Placement Cell",
                  "Industry-oriented technical training",
                  "Aptitude and soft-skills development",
                  "Mock interviews and group discussions",
                  "Internship and industry interaction opportunities",
                  "On-campus recruitment drives",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={21}
                      className="mt-0.5 shrink-0 text-emerald-700"
                    />

                    <span className="text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/events/placement.jpg"
                alt="Students participating in a campus placement drive"
                className="h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Placement Process */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="From Preparation to Placement"
            description="A structured approach helps our students confidently transition from college to their professional careers."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {placementProcess.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold tracking-widest text-amber-600">
                  {item.step}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Recruiters */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Industry Connect"
            title="Our Recruiting Partners"
            description="Students get opportunities to interact with recruiters from leading technology, engineering, consulting and manufacturing organisations."
            centered
          />

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {recruiters.map((company) => (
              <div
                key={company}
                className="flex min-h-20 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-center font-semibold text-slate-700 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50"
              >
                {company}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Career Support */}
      <section className="bg-emerald-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                <Users size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Placement Training
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Structured training programmes help students strengthen
                aptitude, communication and technical skills.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                <BriefcaseBusiness size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Industry Exposure
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Guest lectures, internships, industrial visits and expert
                sessions provide valuable industry exposure.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                <GraduationCap size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Career Guidance
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Students receive career guidance and mentoring to help them
                choose suitable professional opportunities.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-emerald-950 px-6 py-12 text-center text-white sm:px-12">
            <h2 className="text-3xl text-amber-50 font-bold sm:text-4xl">
              Start Building Your Career
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              Explore our academic programmes and discover the opportunities
              available to you as a student of our engineering college.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                to="/programs"
                variant="secondary"
                size="lg"
              >
                Explore Programs
                <ArrowRight size={18} />
              </Button>

              <Button
                to="/contact"
                variant="outline"
                size="lg" className="text-amber-50!"
              >
                Contact Placement Cell
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}