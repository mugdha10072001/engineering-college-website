import {
  ArrowRight,
  Clock3,
  GraduationCap,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  shortName?: string;
  description: string;
  duration?: string;
  degree?: string;
  intake?: number;
  href?: string;
  image?: string;
  tag?: string;
}

export default function CourseCard({
  title,
  shortName,
  description,
  duration = "4 Years",
  degree = "B.Tech",
  intake = 60,
  href = "/programs",
  image,
  tag = "Undergraduate",
}: CourseCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-900 to-slate-900">
            <GraduationCap
              size={68}
              strokeWidth={1}
              className="text-amber-400"
            />
          </div>
        )}

        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-emerald-900 shadow-sm">
            {tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {shortName && (
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600">
            {shortName}
          </p>
        )}

        <h3 className="mt-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-800">
          {title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {description}
        </p>

        {/* Course information */}
        <div className="mt-5 grid grid-cols-3 divide-x divide-slate-200 border-y border-slate-100 py-4">
          <div className="px-2 text-center">
            <GraduationCap
              size={18}
              className="mx-auto mb-1 text-emerald-700"
            />
            <p className="text-sm font-bold text-slate-900">
              {degree}
            </p>
            <p className="text-xs text-slate-500">Degree</p>
          </div>

          <div className="px-2 text-center">
            <Clock3
              size={18}
              className="mx-auto mb-1 text-emerald-700"
            />
            <p className="text-sm font-bold text-slate-900">
              {duration}
            </p>
            <p className="text-xs text-slate-500">Duration</p>
          </div>

          <div className="px-2 text-center">
            <Users
              size={18}
              className="mx-auto mb-1 text-emerald-700"
            />
            <p className="text-sm font-bold text-slate-900">
              {intake}+
            </p>
            <p className="text-xs text-slate-500">Intake</p>
          </div>
        </div>

        {/* Action */}
        <Link
          to={href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 transition-all hover:gap-3 hover:text-amber-600"
        >
          View Program
          <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}