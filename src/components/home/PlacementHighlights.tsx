import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";

const placementStats = [
  {
    value: "95%",
    label: "Placement Rate",
    icon: TrendingUp,
  },
  {
    value: "120+",
    label: "Recruiting Partners",
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

export default function PlacementHighlights() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              Career & Placements
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Preparing Students for Successful Careers
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              Our dedicated placement team connects students
              with leading companies and provides career
              guidance, technical training, aptitude preparation
              and interview support.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {placementStats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <Icon
                      size={21}
                      className="text-emerald-700"
                    />

                    <p className="mt-3 text-2xl font-bold text-slate-900">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <Link
              to="/placements"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-900 px-6 py-3.5 font-bold text-white transition hover:bg-emerald-950"
            >
              Explore Placements
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/events/placement.jpg"
                alt="Campus placement drive"
                className="h-[480px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-5 shadow-xl sm:-left-8">
              <p className="text-sm font-medium text-slate-500">
                Our students work at
              </p>

              <p className="mt-2 text-lg font-bold text-slate-900">
                Leading Companies
              </p>

              <div className="mt-3 flex gap-2">
                <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold">
                  IT
                </span>

                <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold">
                  Core
                </span>

                <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold">
                  Consulting
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}