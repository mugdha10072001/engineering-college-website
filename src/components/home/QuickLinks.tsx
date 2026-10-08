import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  FileText,
  GraduationCap,
  Newspaper,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Admissions",
    description: "Apply for 2026-27",
    href: "/admissions",
    icon: GraduationCap,
  },
  {
    title: "Programs",
    description: "Explore courses",
    href: "/programs",
    icon: BookOpen,
  },
  {
    title: "Faculty",
    description: "Meet our faculty",
    href: "/faculty",
    icon: UserRound,
  },
  {
    title: "Notices",
    description: "Latest announcements",
    href: "/notices",
    icon: FileText,
  },
  {
    title: "Events",
    description: "What's happening",
    href: "/events",
    icon: CalendarDays,
  },
  {
    title: "News",
    description: "College updates",
    href: "/news",
    icon: Newspaper,
  },
];

export default function QuickLinks() {
  return (
    <section
      id="quick-links"
      className="relative z-10 -mt-10 px-4"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.title}
              to={link.href}
              className="group border-b border-slate-100 p-5 transition hover:bg-emerald-50 xl:border-b-0 xl:border-r last:border-r-0"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800 transition group-hover:bg-emerald-800 group-hover:text-white">
                  <Icon size={21} />
                </div>

                <ArrowRight
                  size={18}
                  className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-800"
                />
              </div>

              <h3 className="mt-4 font-bold text-slate-900">
                {link.title}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {link.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}