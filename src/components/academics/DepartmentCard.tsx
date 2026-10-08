import { ArrowRight, Building2, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface DepartmentCardProps {
  name: string;
  shortName: string;
  description: string;
  href: string;
  image?: string;
  facultyCount?: number;
  programs?: number;
  established?: string;
}

export default function DepartmentCard({
  name,
  shortName,
  description,
  href,
  image,
  facultyCount = 20,
  programs = 2,
  established = "2001",
}: DepartmentCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-900 to-slate-900">
            <Building2
              size={64}
              strokeWidth={1}
              className="text-amber-400"
            />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Short name */}
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold tracking-wide text-slate-900">
            {shortName}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-800">
          {name}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {description}
        </p>

        {/* Details */}
        <div className="mt-5 grid grid-cols-3 gap-2 border-y border-slate-100 py-4">
          <div className="text-center">
            <Users
              size={18}
              className="mx-auto mb-1 text-emerald-700"
            />
            <p className="text-sm font-bold text-slate-900">
              {facultyCount}+
            </p>
            <p className="text-xs text-slate-500">Faculty</p>
          </div>

          <div className="border-x border-slate-100 text-center">
            <BookOpen
              size={18}
              className="mx-auto mb-1 text-emerald-700"
            />
            <p className="text-sm font-bold text-slate-900">
              {programs}
            </p>
            <p className="text-xs text-slate-500">Programs</p>
          </div>

          <div className="text-center">
            <Building2
              size={18}
              className="mx-auto mb-1 text-emerald-700"
            />
            <p className="text-sm font-bold text-slate-900">
              {established}
            </p>
            <p className="text-xs text-slate-500">Since</p>
          </div>
        </div>

        {/* Link */}
        <Link
          to={href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 transition-all hover:gap-3 hover:text-amber-600"
        >
          Explore Department
          <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}