import {
  ArrowRight,
  Beaker,
  FlaskConical,
  Monitor,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

interface LaboratoryCardProps {
  name: string;
  department: string;
  description: string;
  image?: string;
  href?: string;
  equipmentCount?: number;
  capacity?: number;
  category?: string;
}

export default function LaboratoryCard({
  name,
  department,
  description,
  image,
  href = "/laboratories",
  equipmentCount = 25,
  capacity = 40,
  category = "Engineering Laboratory",
}: LaboratoryCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-60 overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-950 to-slate-900">
            <FlaskConical
              size={72}
              strokeWidth={1}
              className="text-amber-400"
            />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-amber-400 px-3 py-1.5 text-xs font-bold text-slate-900">
            {category}
          </span>
        </div>

        {/* Department */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
            {department}
          </p>

          <h3 className="mt-1 text-xl font-bold text-white">
            {name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm leading-6 text-slate-600">
          {description}
        </p>

        {/* Lab statistics */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="flex items-center gap-2">
              <Beaker
                size={18}
                className="text-emerald-700"
              />

              <span className="text-lg font-bold text-slate-900">
                {equipmentCount}+
              </span>
            </div>

            <p className="mt-1 text-xs text-slate-500">
              Equipment
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <div className="flex items-center gap-2">
              <Users
                size={18}
                className="text-emerald-700"
              />

              <span className="text-lg font-bold text-slate-900">
                {capacity}+
              </span>
            </div>

            <p className="mt-1 text-xs text-slate-500">
              Capacity
            </p>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <Monitor size={15} className="text-emerald-700" />
          Practical & Industry-Oriented Learning
        </div>

        {/* Link */}
        <Link
          to={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 transition-all hover:gap-3 hover:text-amber-600"
        >
          View Laboratory
          <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}