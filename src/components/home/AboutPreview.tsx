import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const highlights = [
  "Experienced and dedicated faculty",
  "Modern laboratories and infrastructure",
  "Industry-oriented curriculum",
  "Strong research and innovation culture",
];

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/campus/college-building.jpg"
                alt="ABC Engineering College building"
                className="h-[450px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-emerald-900 p-6 text-white shadow-xl sm:-right-6">
              <p className="text-4xl font-bold">25+</p>
              <p className="mt-1 text-sm text-emerald-100">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="About Our College"
              title="Building Engineers. Creating Leaders."
              description="We believe engineering education should go beyond classrooms and textbooks."
            />

            <p className="leading-8 text-slate-600">
              ABC Engineering College is committed to providing
              high-quality technical education through innovative
              teaching, practical learning, research and strong
              industry collaboration.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our students are encouraged to think critically,
              solve real-world problems and develop the technical
              and professional skills required to succeed in a
              rapidly changing world.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-emerald-700"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-bold text-emerald-800 transition hover:text-amber-600"
            >
              Discover More About Us
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}