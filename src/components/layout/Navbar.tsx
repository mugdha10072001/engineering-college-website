import {
  ChevronDown,
  GraduationCap,
  Menu,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  onMenuClick: () => void;
}

const navItems = [
  {
    label: "About",
    dropdown: [
      { label: "About College", href: "/about" },
      { label: "Management", href: "/management" },
    ],
  },
  {
    label: "Academics",
    dropdown: [
      { label: "Departments", href: "/departments" },
      { label: "Programs", href: "/programs" },
      { label: "Faculty", href: "/faculty" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
  },
  {
    label: "Campus",
    dropdown: [
      { label: "Facilities", href: "/facilities" },
      { label: "Laboratories", href: "/laboratories" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "Placements",
    href: "/placements",
  },
  {
    label: "Student Life",
    dropdown: [
      { label: "Student Activities", href: "/student-activities" },
      { label: "Achievements", href: "/achievements" },
    ],
  },
  {
    label: "Media",
    dropdown: [
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" },
      { label: "Notices", href: "/notices" },
    ],
  },
];

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-900 text-white">
            <GraduationCap size={26} />
          </div>

          <div className="hidden sm:block">
            <p className="text-lg font-bold leading-tight text-slate-900">
              ABC Engineering
            </p>

            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              College of Technology
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="group relative"
            >
              {item.href ? (
                <Link
                  to={item.href}
                  className="flex items-center gap-1 rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-emerald-800"
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-emerald-800"
                  >
                    {item.label}
                    <ChevronDown
                      size={15}
                      className="transition-transform group-hover:rotate-180"
                    />
                  </button>

                  {/* Dropdown */}
                  <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-2 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.dropdown?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.href}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Search"
            className="hidden rounded-full p-2.5 text-slate-600 transition hover:bg-slate-100 hover:text-emerald-800 lg:block"
          >
            <Search size={20} />
          </button>

          <Link
            to="/contact"
            className="hidden rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-amber-600 lg:inline-flex"
          >
            Contact Us
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open navigation menu"
            className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 xl:hidden"
          >
            <Menu size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
}