import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Container from "../common/Container";

const quickLinks = [
  { label: "About College", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Placements", href: "/placements" },
  { label: "Contact Us", href: "/contact" },
];

const academicLinks = [
  { label: "Faculty", href: "/faculty" },
  { label: "Laboratories", href: "/laboratories" },
  { label: "Research", href: "/research" },
  { label: "Student Activities", href: "/student-activities" },
  { label: "Achievements", href: "/achievements" },
  { label: "Downloads", href: "/downloads" },
];

const socialLinks = [
  {
    label: "Facebook",
    shortLabel: "f",
    href: "https://facebook.com",
  },
  {
    label: "Instagram",
    shortLabel: "ig",
    href: "https://instagram.com",
  },
  {
    label: "LinkedIn",
    shortLabel: "in",
    href: "https://linkedin.com",
  },
  {
    label: "YouTube",
    shortLabel: "yt",
    href: "https://youtube.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white">
      {/* Main Footer */}
      <div className="border-b border-white/10 py-16">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* College Info */}
            <div>
              <a href="/" className="group inline-block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#CFA353]">
                    <span className="font-serif text-xl font-bold text-[#151515]">
                      AEC
                    </span>
                  </div>

                  <div>
                    <p className="font-serif text-2xl font-semibold">
                      ABC Engineering
                    </p>

                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      College
                    </p>
                  </div>
                </div>
              </a>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
                A premier engineering institution committed to excellence in
                education, research, innovation, and holistic student
                development.
              </p>

              {/* Social Links */}
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold uppercase text-white/60 transition hover:border-[#CFA353] hover:text-[#CFA353]"
                  >
                    {social.shortLabel}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-serif text-2xl font-semibold">
                Quick Links
              </h3>

              <div className="mt-6 space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/60 transition hover:text-[#CFA353]"
                  >
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />

                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Academics */}
            <div>
              <h3 className="font-serif text-white text-2xl font-semibold">
                Academics
              </h3>

              <div className="mt-6 space-y-3">
                {academicLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/60 transition hover:text-[#CFA353]"
                  >
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />

                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-serif text-white text-2xl font-semibold">
                Contact Us
              </h3>

              <div className="mt-6 space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin
                    size={19}
                    className="mt-1 shrink-0 text-[#CFA353]"
                  />

                  <p className="text-sm leading-6 text-white/60">
                    ABC Engineering College
                    <br />
                    Nagpur, Maharashtra
                    <br />
                    India
                  </p>
                </div>

                {/* Phone */}
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#CFA353]"
                >
                  <Phone
                    size={18}
                    className="shrink-0 text-[#CFA353]"
                  />

                  <span>+91 99999 99999</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@examplecollege.edu"
                  className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#CFA353]"
                >
                  <Mail
                    size={18}
                    className="shrink-0 text-[#CFA353]"
                  />

                  <span>info@examplecollege.edu</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Footer */}
      <div className="py-6">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/40 md:flex-row">
            <p>
              © {new Date().getFullYear()} ABC Engineering College. All
              rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="/downloads"
                className="transition hover:text-[#CFA353]"
              >
                Downloads
              </a>

              <a
                href="/contact"
                className="transition hover:text-[#CFA353]"
              >
                Contact
              </a>

              <a
                href="/"
                className="transition hover:text-[#CFA353]"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}