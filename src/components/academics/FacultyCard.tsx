import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

interface FacultyCardProps {
  name: string;
  designation: string;
  department: string;
  qualification?: string;
  experience?: string;
  email?: string;
  image?: string;
  href?: string;
}

export default function FacultyCard({
  name,
  designation,
  department,
  qualification = "Ph.D.",
  experience = "10+ Years",
  email,
  image,
  href = "/faculty",
}: FacultyCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Faculty image */}
      <div className="relative h-72 overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-900 to-slate-900">
            <GraduationCap
              size={80}
              strokeWidth={1}
              className="text-amber-400"
            />
          </div>
        )}

        {/* Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Department */}
        <div className="absolute bottom-4 left-4 right-4">
          <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-900">
            {department}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">
          {name}
        </h3>

        <p className="mt-1 text-sm font-semibold text-emerald-800">
          {designation}
        </p>

        {/* Faculty details */}
        <div className="mt-5 space-y-3">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
              <GraduationCap size={17} />
            </span>

            <div>
              <p className="text-xs text-slate-400">
                Qualification
              </p>
              <p className="font-medium text-slate-800">
                {qualification}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
              <BriefcaseBusiness size={17} />
            </span>

            <div>
              <p className="text-xs text-slate-400">
                Experience
              </p>
              <p className="font-medium text-slate-800">
                {experience}
              </p>
            </div>
          </div>

          {email && (
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                <Mail size={17} />
              </span>

              <a
                href={`mailto:${email}`}
                className="truncate font-medium text-slate-800 hover:text-emerald-700"
              >
                {email}
              </a>
            </div>
          )}
        </div>

        {/* Profile */}
        <Link
          to={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 transition-all hover:gap-3 hover:text-amber-600"
        >
          View Faculty Profile
          <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}