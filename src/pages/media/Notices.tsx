import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import NoticeCard from "../../components/news/NoticeCard";

const notices = [
  {
    title: "Admission Applications Open for Academic Year 2026–27",
    date: "05 October 2026",
    category: "Admissions",
    description:
      "Applications are invited from eligible candidates for admission to undergraduate and postgraduate engineering programmes.",
    isNew: true,
  },
  {
    title: "End Semester Examination Schedule",
    date: "01 October 2026",
    category: "Examination",
    description:
      "Students are advised to check the examination schedule and prepare accordingly.",
    downloadUrl: "/documents/academic-calendar.pdf",
  },
  {
    title: "Scholarship Application Notification",
    date: "25 September 2026",
    category: "Students",
    description:
      "Eligible students are requested to submit their scholarship applications within the prescribed deadline.",
    isNew: true,
  },
  {
    title: "Faculty Development Programme Notification",
    date: "20 September 2026",
    category: "Academics",
    description:
      "Faculty members are invited to participate in the upcoming professional development programme.",
  },
  {
    title: "Technical Festival Registration Open",
    date: "15 September 2026",
    category: "Events",
    description:
      "Students can register for technical competitions, workshops and project demonstrations.",
  },
  {
    title: "Hostel Admission and Renewal Notice",
    date: "10 September 2026",
    category: "Hostel",
    description:
      "Students seeking hostel accommodation are requested to complete the admission and renewal process.",
  },
];

export default function Notices() {
  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-950 py-16 text-white sm:py-20">
        <Container>
          <Breadcrumb
            items={[
              {
                label: "Media",
              },
              {
                label: "Notices",
              },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Official Announcements
            </p>

            <h1 className="mt-3 text-amber-50 text-4xl font-bold sm:text-5xl">
              College Notices
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Find important academic, admission, examination, student and
              campus-related announcements.
            </p>
          </div>
        </Container>
      </section>

      {/* Notices */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Announcements"
            title="Latest Notices"
            description="Please check this section regularly for important college notifications and announcements."
          />

          <div className="mt-10 space-y-4">
            {notices.map((notice) => (
              <NoticeCard
                key={notice.title}
                {...notice}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Important Notice */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">
              Important Information
            </h2>

            <p className="mt-3 max-w-4xl leading-7 text-slate-700">
              Students and applicants should verify important dates,
              eligibility requirements and submission deadlines from official
              college notifications before taking any action.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}