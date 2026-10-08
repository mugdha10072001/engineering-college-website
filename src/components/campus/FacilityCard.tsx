import {
  ArrowRight,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

interface FacilityCardProps {
  title: string;
  description: string;
  image?: string;
  href?: string;
  features?: string[];
  icon?: React.ReactNode;
}

export default function FacilityCard({
  title,
  description,
  image,
  href = "/facilities",
  features = [],
  icon,
}: FacilityCardProps) {
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
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-950 to-slate-900">
            {icon || (
              <Building2
                size={64}
                strokeWidth={1}
                className="text-amber-400"
              />
            )}
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Icon */}
        <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-800 shadow-lg">
          {icon || <Building2 size={22} />}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-800">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <ul className="mt-5 space-y-2">
            {features.slice(0, 4).map((feature, index) => (
              <li
                key={`${feature}-${index}`}
                className="flex items-start gap-2 text-sm text-slate-600"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-emerald-700"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Link */}
        <Link
          to={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 transition-all hover:gap-3 hover:text-amber-600"
        >
          Explore Facility
          <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}