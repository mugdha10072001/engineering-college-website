import { Mail } from "lucide-react";

import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import FacultyCard from "../../components/academics/FacultyCard";

const facultyMembers = [
  {
    name: "Dr. Priya Sharma",
    designation: "Principal",
    department: "Administration",
    qualification: "Ph.D., M.Tech.",
    experience: "25+ Years",
    email: "principal@examplecollege.edu",
    image: "/images/faculty/principal.jpg",
  },
  {
    name: "Dr. Rahul Rajput",
    designation: "Professor & HOD",
    department: "Computer Science & Engineering",
    qualification: "Ph.D., M.Tech.",
    experience: "18+ Years",
    email: "rahul.rajput@examplecollege.edu",
    image: "/images/faculty/hod-cse.jpg",
  },
  {
    name: "Dr. Rajesh Patil",
    designation: "Professor & HOD",
    department: "Electronics & Communication Engineering",
    qualification: "Ph.D., M.E.",
    experience: "20+ Years",
    email: "rajesh.patil@examplecollege.edu",
    image: "/images/faculty/hod-mechanical.jpg",
  },
  {
    name: "Prof. Neha Joshi",
    designation: "Associate Professor",
    department: "Mechanical Engineering",
    qualification: "M.Tech., B.E.",
    experience: "14+ Years",
    email: "neha.joshi@examplecollege.edu",
    image: "/images/faculty/professor-01.jpg",
  },
  {
    name: "Dr. Vivek Kulkarni",
    designation: "Associate Professor & HOD",
    department: "Civil Engineering",
    qualification: "Ph.D., M.Tech.",
    experience: "16+ Years",
    email: "vivek.kulkarni@examplecollege.edu",
    image: "/images/faculty/professor-03.jpg",
  },
  {
    name: "Dr. Sneha Deshmukh",
    designation: "Assistant Professor",
    department: "Artificial Intelligence & Data Science",
    qualification: "Ph.D., M.Tech.",
    experience: "10+ Years",
    email: "sneha.deshmukh@examplecollege.edu",
    image: "/images/faculty/professor-04.jpg",
  },
  {
    name: "Prof. Amit Verma",
    designation: "Assistant Professor",
    department: "Electrical Engineering",
    qualification: "M.Tech., B.E.",
    experience: "9+ Years",
    email: "amit.verma@examplecollege.edu",
    image: "/images/faculty/professor-02.jpg",
  },
  {
    name: "Dr. Kavita Singh",
    designation: "Professor",
    department: "Computer Science & Engineering",
    qualification: "Ph.D., M.Tech.",
    experience: "17+ Years",
    email: "kavita.singh@examplecollege.edu",
    image: "/images/faculty/professor-05.jpg",
  },
];

const departments = [
  "All Departments",
  "Computer Science & Engineering",
  "Electronics & Communication Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Artificial Intelligence & Data Science",
  "Electrical Engineering",
];

export default function Faculty() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#151515] py-20 text-white">
        <Container>
          <Breadcrumb
            items={[
              { label: "Academics", href: "/departments" },
              { label: "Faculty" },
            ]}
          />

          <div className="mt-10 max-w-3xl">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#CFA353]">
              Our Faculty
            </span>

            <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
              Meet Our Faculty
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Learn from experienced educators, researchers, and industry
              professionals committed to academic excellence and student
              development.
            </p>
          </div>
        </Container>
      </section>

      {/* Faculty */}
      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Academic Excellence"
            title="Our Distinguished Faculty"
            description="Our faculty members bring extensive academic knowledge, research experience, and industry exposure to the classroom."
          />

          {/* Department Filters */}
          <div className="mt-10 flex flex-wrap gap-3">
            {departments.map((department, index) => (
              <button
                key={department}
                type="button"
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                  index === 0
                    ? "border-[#2A3D30] bg-[#2A3D30] text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#CFA353] hover:text-[#2A3D30]"
                }`}
              >
                {department}
              </button>
            ))}
          </div>

          {/* Faculty Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {facultyMembers.map((member) => (
              <FacultyCard
                key={member.name}
                name={member.name}
                designation={member.designation}
                department={member.department}
                qualification={member.qualification}
                experience={member.experience}
                email={member.email}
                image={member.image}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Faculty Support Section */}
      <section className="bg-[#F3EFE4] py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#CFA353]">
                Academic Support
              </span>

              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
                Guidance Beyond the Classroom
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-gray-600">
                Our faculty members actively mentor students through academic
                projects, research activities, internships, competitions, and
                career preparation.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2A3D30] text-white">
                  <Mail size={21} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    Connect With Our Faculty
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">
                    Have an academic question or want to learn more about a
                    department? Our faculty team is happy to help.
                  </p>

                  <a
                    href="/contact"
                    className="mt-5 inline-flex font-semibold text-[#2A3D30] transition hover:text-[#CFA353]"
                  >
                    Contact the College →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}