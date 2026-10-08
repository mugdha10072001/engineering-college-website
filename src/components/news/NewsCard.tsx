import { ArrowRight, CalendarDays, Tag } from "lucide-react";
import { Link } from "react-router-dom";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  image?: string;
  href?: string;
  featured?: boolean;
}

export default function NewsCard({
  title,
  excerpt,
  date,
  category = "Campus News",
  image,
  href = "/news",
  featured = false,
}: NewsCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        featured ? "lg:grid lg:grid-cols-2" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-slate-100 ${
          featured ? "h-72 lg:h-full" : "h-56"
        }`}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-950 to-slate-900">
            <CalendarDays
              size={64}
              strokeWidth={1}
              className="text-amber-400"
            />
          </div>
        )}

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-bold text-slate-900">
            <Tag size={13} />
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 sm:p-7">
        {/* Date */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <CalendarDays
            size={15}
            className="text-emerald-700"
          />
          {date}
        </div>

        {/* Title */}
        <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-emerald-800">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {excerpt}
        </p>

        {/* Link */}
        <div className="mt-auto pt-6">
          <Link
            to={href}
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 transition-all hover:gap-3 hover:text-amber-600"
          >
            Read More
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}