
import { Link } from "react-router-dom";
import { FileSearch, RotateCcw } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title = "Nothing to display yet",
  description = "Please check back later for updates.",
  actionLabel,
  actionHref,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-700">
        <FileSearch size={28} aria-hidden="true" />
      </div>

      <h2 className="text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
        {description}
      </p>

      {onAction && actionLabel && (
        <button
          type="button"
          onClick={onAction}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
        >
          <RotateCcw size={16} aria-hidden="true" />
          {actionLabel}
        </button>
      )}

      {!onAction && actionLabel && actionHref && (
        <Link
          to={actionHref}
          className="mt-6 inline-flex items-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}