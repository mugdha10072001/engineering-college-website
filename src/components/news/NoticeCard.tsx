import {
  ArrowRight,
  Bell,
  CalendarDays,
  Download,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

interface NoticeCardProps {
  title: string;
  date: string;
  category?: string;
  description?: string;
  href?: string;
  downloadUrl?: string;
  isNew?: boolean;
}

export default function NoticeCard({
  title,
  date,
  category = "General Notice",
  description,
  href = "/notices",
  downloadUrl,
  isNew = false,
}: NoticeCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-lg sm:p-6">
      <div className="flex gap-4">
        {/* Date box */}
        <div className="hidden h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-emerald-900 text-white sm:flex">
          <CalendarDays
            size={17}
            className="mb-1 text-amber-400"
          />

          <span className="text-[10px] font-medium text-white/70">
            DATE
          </span>
        </div>

        {/* Main content */}
        <div className="min-w-0 flex-1">
          {/* Top row */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              {category}
            </span>

            {isNew && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                <Bell size={12} />
                New
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="mt-3 text-base font-bold leading-6 text-slate-900 transition-colors group-hover:text-emerald-800 sm:text-lg">
            {title}
          </h3>

          {/* Date */}
          <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
            <CalendarDays size={14} />
            {date}
          </div>

          {/* Description */}
          {description && (
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
              {description}
            </p>
          )}

          {/* Actions */}
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Link
              to={href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 transition-colors hover:text-amber-600"
            >
              View Notice
              <ArrowRight size={15} />
            </Link>

            {downloadUrl && (
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 transition-colors hover:text-emerald-700"
              >
                <Download size={15} />
                Download
              </a>
            )}
          </div>
        </div>

        {/* Document icon */}
        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400 sm:flex">
          <FileText size={19} />
        </div>
      </div>
    </article>
  );
}