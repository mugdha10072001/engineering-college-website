import {
  BookOpen,
  CalendarDays,
  Download as DownloadIcon,
  FileText,
  GraduationCap,
  Info,
} from "lucide-react";

import Breadcrumb from "../components/common/Breadcrumb";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";

const documents = [
  {
    title: "Admission Brochure 2026–27",
    description:
      "Complete information about programmes, admissions, eligibility and the application process.",
    category: "Admissions",
    file: "/documents/admission-brochure.pdf",
    icon: GraduationCap,
  },
  {
    title: "Academic Calendar 2026–27",
    description:
      "Important academic dates, examinations, holidays and institutional activities.",
    category: "Academic",
    file: "/documents/academic-calendar.pdf",
    icon: CalendarDays,
  },
  {
    title: "Student Handbook",
    description:
      "Guidelines, academic information and important resources for students.",
    category: "Students",
    file: "/documents/student-handbook.pdf",
    icon: BookOpen,
  },
  {
    title: "Examination Guidelines",
    description:
      "Important instructions and guidelines related to semester examinations.",
    category: "Examination",
    file: "/documents/examination-guidelines.pdf",
    icon: FileText,
  },
];

const downloadCategories = [
  "Admission Documents",
  "Academic Documents",
  "Student Documents",
  "Examination Documents",
];

export default function Downloads() {
  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-950 py-16 text-white sm:py-20">
        <Container>
          <Breadcrumb
            items={[
              {
                label: "Downloads",
              },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Resources
            </p>

            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
              Downloads
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Access admission brochures, academic calendars, student
              resources, forms and other important college documents.
            </p>
          </div>
        </Container>
      </section>

      {/* Documents */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Document Centre"
            title="Important Documents"
            description="Download the documents and resources you need for admissions, academics and student activities."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {documents.map((document) => {
              const Icon = document.icon;

              return (
                <div
                  key={document.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:p-7"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                      <Icon size={26} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                        {document.category}
                      </span>

                      <h3 className="mt-2 text-xl font-bold text-slate-900">
                        {document.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {document.description}
                      </p>

                      <a
                        href={document.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
                      >
                        <DownloadIcon size={17} />
                        Download Document
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Resources"
            title="Document Categories"
            description="Find the information you need quickly."
            centered
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {downloadCategories.map((category) => (
              <div
                key={category}
                className="rounded-xl border border-slate-200 bg-white p-5 text-center font-semibold text-slate-800 shadow-sm"
              >
                {category}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Information */}
      <section className="py-16">
        <Container>
          <div className="flex gap-4 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <Info
              size={24}
              className="mt-0.5 shrink-0 text-blue-700"
            />

            <div>
              <h2 className="font-bold text-slate-900">
                Document Information
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                If a document does not open or download correctly, please
                contact the college administration or the relevant department
                for assistance.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}