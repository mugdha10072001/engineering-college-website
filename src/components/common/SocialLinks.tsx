
interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    path: (
      <>
        <path
          d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.8-.1-1.6-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.7v8h3.3Z"
          fill="currentColor"
        />
      </>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    path: (
      <>
        <path
          d="M5 9v10M5 5v.1M10 19v-6a3 3 0 0 1 6 0v6M10 10v9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    path: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

export default function SocialLinks({
  className = "",
  iconSize = 19,
}: SocialLinksProps) {
  return (
    <nav
      aria-label="Social media links"
      className={`flex items-center gap-3 ${className}`}
    >
      {socialLinks.map(({ name, href, path }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit us on ${name}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:bg-blue-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {path}
          </svg>
        </a>
      ))}
    </nav>
  );
}