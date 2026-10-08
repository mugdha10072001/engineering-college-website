import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
  title: string;
  date: string;
  month: string;
  description: string;
  location?: string;
  time?: string;
  image?: string;
  category?: string;
  href?: string;
}

export default function EventCard({
  title,
  date,
  month,
  description,
  location = "College Campus",
  time = "10:00 AM onwards",
  image,
  category = "Campus Event",
  href = "/events",
}: EventCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-950 to-slate-900">
            <CalendarDays
              size={68}
              strokeWidth={1}
              className="text-amber-400"
            />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-emerald-900 shadow-sm">
            {category}
          </span>
        </div>

        {/* Date badge */}
        <div className="absolute bottom-4 left-4 flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-amber-400 text-slate-950 shadow-lg">
          <span className="text-xl font-bold leading-none">
            {date}
          </span>

          <span className="mt-1 text-[10px] font-bold tracking-widest">
            {month}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-emerald-800">
          {title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {description}
        </p>

        {/* Event details */}
        <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
              <MapPin size={16} />
            </span>

            <span className="truncate">
              {location}
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
              <Clock3 size={16} />
            </span>

            <span>{time}</span>
          </div>
        </div>

        {/* Link */}
        <Link
          to={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-800 transition-all hover:gap-3 hover:text-amber-600"
        >
          View Event
          <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}