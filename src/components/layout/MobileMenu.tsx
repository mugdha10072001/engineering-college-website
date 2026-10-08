import {
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    label: "About",
    children: [
      { label: "About College", href: "/about" },
      { label: "Management", href: "/management" },
    ],
  },
  {
    label: "Academics",
    children: [
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
    children: [
      { label: "Facilities", href: "/facilities" },
      { label: "Laboratories", href: "/laboratories" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    label: "Placements",
    href: "/placements",
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "Student Life",
    children: [
      {
        label: "Student Activities",
        href: "/student-activities",
      },
      {
        label: "Achievements",
        href: "/achievements",
      },
    ],
  },
  {
    label: "Media",
    children: [
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" },
      { label: "Notices", href: "/notices" },
    ],
  },
];

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const [openItem, setOpenItem] = useState<string | null>(
    null
  );

  if (!isOpen) return null;

  const toggleItem = (label: string) => {
    setOpenItem((current) =>
      current === label ? null : label
    );
  };

  return (
    <div className="fixed inset-0 z-[100] xl:hidden">
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-slate-950/60"
      />

      {/* Menu */}
      <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-white shadow-2xl">
        {/* Header */}
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-5">
          <Link
            to="/"
            onClick={onClose}
            className="text-lg font-bold text-slate-900"
          >
            ABC Engineering
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <div className="p-4">
          {menuItems.map((item) => {
            const hasChildren =
              "children" in item && item.children;

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between border-b border-slate-100 px-3 py-4 text-base font-semibold text-slate-800"
                >
                  {item.label}
                  <ChevronRight size={18} />
                </Link>
              );
            }

            const isExpanded = openItem === item.label;

            return (
              <div
                key={item.label}
                className="border-b border-slate-100"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.label)}
                  className="flex w-full items-center justify-between px-3 py-4 text-left text-base font-semibold text-slate-800"
                >
                  {item.label}

                  <ChevronDown
                    size={19}
                    className={`transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="mb-2 rounded-lg bg-slate-50 px-3 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={onClose}
                        className="block rounded-md px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-emerald-800"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <Link
            to="/contact"
            onClick={onClose}
            className="mt-6 flex w-full items-center justify-center rounded-lg bg-emerald-900 px-5 py-3.5 font-bold text-white transition hover:bg-emerald-950"
          >
            Contact Us
          </Link>

          <Link
            to="/admissions"
            onClick={onClose}
            className="mt-3 flex w-full items-center justify-center rounded-lg bg-amber-500 px-5 py-3.5 font-bold text-white transition hover:bg-amber-600"
          >
            Apply for Admission
          </Link>
        </div>
      </div>
    </div>
  );
}