import {
  ArrowRight,
  Award,
  Building2,
  GraduationCap,
  HeartHandshake,
  Target,
} from "lucide-react";

import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import Button from "../../components/common/Button";

export default function Management() {
  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-950 py-16 text-white sm:py-20">
        <Container>
          <Breadcrumb
            items={[
              { label: "About", href: "/about" },
              { label: "Management" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Leadership & Governance
            </p>

            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Management</h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Strong leadership and responsible governance provide the
              foundation for academic excellence, innovation and institutional
              growth.
            </p>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Institutional Leadership"
            title="Guided by Experience. Driven by Vision."
            description="Our leadership team works closely with faculty, students and industry partners to build an institution focused on meaningful outcomes."
            centered
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: "Dr. Rohit Patel",
                role: "Chairman",
                image: "/images/faculty/chairman.jpg",
              },
              {
                name: "Mrs. Anjali Mehta",
                role: "Secretary",
                image: "/images/faculty/Secretary.jpg",
              },
              {
                name: "Dr. Priya Sharma",
                role: "Principal",
                image: "/images/faculty/principal.jpg",
              },
            ].map((person) => (
              <div
                key={`${person.name}-${person.role}`}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-72 overflow-hidden bg-slate-100">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
                    {person.role}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {person.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Providing strategic leadership and supporting the
                    institution's long-term academic and organizational goals.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Management Philosophy */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Management Philosophy
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Creating an Environment for Excellence
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                The institution follows a student-focused approach to
                management, where academic quality, infrastructure, professional
                development and innovation are treated as continuous priorities.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Management works with faculty members and stakeholders to
                strengthen academic programs, promote research and provide
                students with opportunities to interact with industry.
              </p>

              <div className="mt-7">
                <Button to="/contact">Connect With Us</Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: "Strategic Growth",
                  text: "Long-term planning for sustainable institutional development.",
                },
                {
                  icon: Award,
                  title: "Quality",
                  text: "Continuous improvement across teaching and student services.",
                },
                {
                  icon: HeartHandshake,
                  title: "Community",
                  text: "Building strong relationships with students and stakeholders.",
                },
                {
                  icon: GraduationCap,
                  title: "Education",
                  text: "Keeping academic excellence at the centre of our mission.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <Icon size={28} className="text-emerald-800" />

                    <h3 className="mt-4 font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Governance */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Governance"
            title="A Culture of Responsible Leadership"
            description="Transparent processes, collaboration and accountability help us create a strong academic ecosystem."
          />

          <div className="mt-10 space-y-4">
            {[
              "Academic planning and continuous curriculum improvement",
              "Faculty development and professional growth",
              "Industry interaction and placement support",
              "Research, innovation and entrepreneurship",
              "Student welfare and campus development",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-white">
                  <ArrowRight size={17} />
                </div>

                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="pb-16">
        <Container>
          <div className="rounded-3xl bg-emerald-950 p-8 text-white sm:p-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <Building2 className="text-amber-400" size={28} />

                  <h2 className="text-2xl font-bold">
                    Learn More About Our Institution
                  </h2>
                </div>

                <p className="mt-3 max-w-2xl text-slate-300">
                  Explore our academic programs, departments and campus
                  facilities.
                </p>
              </div>

              <Button to="/departments" variant="secondary">
                Explore Departments
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
