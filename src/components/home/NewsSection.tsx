import {
  ArrowRight,
  CalendarDays,
  Newspaper,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const news = [
  {
    date: "05 Oct 2026",
    category: "Campus",
    title:
      "ABC Engineering College announces new innovation and entrepreneurship centre",
    image: "/images/events/tech-fest.jpg",
  },
  {
    date: "28 Sep 2026",
    category: "Academics",
    title:
      "Faculty development program focuses on emerging technologies",
    image: "/images/campus/college-auditorium.jpg",
  },
  {
    date: "15 Sep 2026",
    category: "Achievement",
    title:
      "Students secure top positions in inter-college technical competition",
    image: "/images/events/annual-function.jpg",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Latest News"
            title="What's Happening at Our College"
            description="Stay updated with the latest news, achievements and developments from our campus."
          />

          <Link
            to="/news"
            className="mb-10 inline-flex items-center gap-2 font-bold text-emerald-800 transition hover:text-amber-600"
          >
            View All News
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-emerald-800 shadow">
                  {item.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <CalendarDays size={14} />
                  {item.date}
                </div>

                <h3 className="mt-4 text-xl font-bold leading-7 text-slate-900 transition group-hover:text-emerald-800">
                  {item.title}
                </h3>

                <Link
                  to="/news"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-800"
                >
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 rounded-xl bg-slate-50 p-5 text-center">
          <Newspaper
            size={20}
            className="text-emerald-700"
          />

          <p className="text-sm text-slate-600">
            Looking for official notices and announcements?
          </p>

          <Link
            to="/notices"
            className="text-sm font-bold text-emerald-800 hover:text-amber-600"
          >
            View Notices
          </Link>
        </div>
      </Container>
    </section>
  );
}