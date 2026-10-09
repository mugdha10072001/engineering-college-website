import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import EventCard from "../../components/news/EventCard";

const events = [
  {
    title: "Annual Technical Festival",
    date: "18",
    month: "OCT",
    description:
      "A celebration of engineering innovation featuring technical competitions, project demonstrations, coding challenges and expert workshops.",
    location: "Main Auditorium",
    time: "10:00 AM onwards",
    category: "Technical Event",
    image: "/images/events/tech-fest.jpg",
  },
  {
    title: "Campus Placement Drive",
    date: "25",
    month: "OCT",
    description:
      "Leading companies will participate in the campus recruitment drive for eligible final-year students.",
    location: "Training & Placement Cell",
    time: "9:00 AM onwards",
    category: "Placement",
    image: "/images/events/placement.jpg",
  },
  {
    title: "National Research Conference",
    date: "08",
    month: "NOV",
    description:
      "A national-level conference bringing together researchers, academicians, industry professionals and students.",
    location: "Conference Hall",
    time: "9:30 AM onwards",
    category: "Research",
    image: "/images/gallery/research.jpg",
  },
  {
    title: "Annual Sports Meet",
    date: "15",
    month: "NOV",
    description:
      "Students compete in a range of indoor and outdoor sports while celebrating teamwork and sportsmanship.",
    location: "Sports Complex",
    time: "8:00 AM onwards",
    category: "Sports",
    image: "/images/events/sports-day.jpg",
  },
  {
    title: "Innovation & Startup Workshop",
    date: "22",
    month: "NOV",
    description:
      "An interactive workshop focused on entrepreneurship, innovation, startup development and product thinking.",
    location: "Innovation Centre",
    time: "10:30 AM onwards",
    category: "Workshop",
    image: "/images/gallery/tech-fest.jpg",
  },
  {
    title: "Annual Cultural Festival",
    date: "05",
    month: "DEC",
    description:
      "Students showcase their creativity and talent through music, dance, drama, art and cultural performances.",
    location: "Open Air Theatre",
    time: "5:00 PM onwards",
    category: "Cultural",
    image: "/images/events/annual-function.jpg",
  },
];

export default function Events() {
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
                label: "Events",
              },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Campus Calendar
            </p>

            <h1 className="mt-3 text-amber-50 text-4xl font-bold sm:text-5xl">
              Upcoming Events
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Discover upcoming technical, academic, cultural, sports and
              professional development events happening on campus.
            </p>
          </div>
        </Container>
      </section>

      {/* Events */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What's Happening"
            title="Upcoming Campus Events"
            description="Participate, learn, compete and connect through our diverse range of campus events."
            centered
          />

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard
                key={event.title}
                {...event}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Event CTA */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-8 rounded-3xl bg-white p-8 shadow-sm lg:grid-cols-[1fr_auto] lg:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Academic Calendar
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Plan Your Academic Year
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Download the academic calendar to keep track of important
                academic activities, examinations and institutional events.
              </p>
            </div>

            <a
              href="/documents/academic-calendar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-900 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Academic Calendar
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}