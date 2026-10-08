import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import NewsCard from "../../components/news/NewsCard";

const newsItems = [
  {
    title: "Innovation and Entrepreneurship Centre Inaugurated",
    excerpt:
      "The college inaugurated a new innovation and entrepreneurship centre to encourage student startups, research and industry collaboration.",
    date: "05 October 2026",
    category: "Campus",
    image: "/images/events/tech-fest.jpg",
  },
  {
    title: "Faculty Development Programme Conducted",
    excerpt:
      "Faculty members participated in a professional development programme focused on emerging engineering technologies and teaching practices.",
    date: "28 September 2026",
    category: "Academics",
    image: "/images/events/orientation.jpg",
  },
  {
    title: "Students Win Technical Competition",
    excerpt:
      "Our students secured top positions in an inter-college technical competition showcasing innovation, engineering skills and teamwork.",
    date: "15 September 2026",
    category: "Achievement",
    image: "/images/events/annual-function.jpg",
  },
  {
    title: "New Industry Collaboration Announced",
    excerpt:
      "The institution has announced a new industry collaboration aimed at strengthening internships, training and placement opportunities.",
    date: "08 September 2026",
    category: "Industry",
    image: "/images/gallery/placement.jpg",
  },
  {
    title: "Research Team Publishes New Technical Paper",
    excerpt:
      "Faculty and student researchers have published new work in the area of artificial intelligence and sustainable engineering.",
    date: "30 August 2026",
    category: "Research",
    image: "/images/gallery/research.jpg",
  },
  {
    title: "Orientation Programme for New Students",
    excerpt:
      "The college organised an orientation programme to welcome new students and introduce them to academic and campus life.",
    date: "01 August 2026",
    category: "Students",
    image: "/images/events/orientation.jpg",
  },
];

export default function News() {
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
                label: "News",
              },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Latest Updates
            </p>

            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
              College News
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Stay updated with the latest happenings, achievements,
              initiatives and developments at our engineering college.
            </p>
          </div>
        </Container>
      </section>

      {/* News */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What's New"
            title="Latest News & Updates"
            description="Read about recent activities, achievements and important developments across the college."
            centered
          />

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((news) => (
              <NewsCard
                key={news.title}
                {...news}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter-style CTA */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl bg-emerald-950 px-6 py-12 text-center text-white sm:px-12">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
              Stay Connected
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Never Miss a College Update
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              Visit our notices and events sections for important academic
              announcements, upcoming activities and campus updates.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/notices"
                className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                View Notices
              </a>

              <a
                href="/events"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Upcoming Events
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}