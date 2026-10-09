
export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "About the College",
        href: "/about",
        description: "Discover our history, mission and vision.",
      },
      {
        label: "Management",
        href: "/management",
        description: "Meet our leadership team.",
      },
      {
        label: "Achievements",
        href: "/achievements",
        description: "Explore our institutional achievements.",
      },
    ],
  },
  {
    label: "Academics",
    href: "/departments",
    children: [
      {
        label: "Departments",
        href: "/departments",
      },
      {
        label: "Programs",
        href: "/programs",
      },
      {
        label: "Faculty",
        href: "/faculty",
      },
      {
        label: "Research",
        href: "/research",
      },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
  },
  {
    label: "Campus Life",
    href: "/facilities",
    children: [
      {
        label: "Facilities",
        href: "/facilities",
      },
      {
        label: "Laboratories",
        href: "/laboratories",
      },
      {
        label: "Student Activities",
        href: "/student-activities",
      },
      {
        label: "Gallery",
        href: "/gallery",
      },
    ],
  },
  {
    label: "Placements",
    href: "/placements",
  },
  {
    label: "News & Events",
    href: "/news",
    children: [
      {
        label: "Latest News",
        href: "/news",
      },
      {
        label: "Events",
        href: "/events",
      },
      {
        label: "Notices",
        href: "/notices",
      },
    ],
  },
  {
    label: "Downloads",
    href: "/downloads",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const primaryNavigationItems = navigationItems.filter(
  (item) => item.label !== "Home" && item.label !== "Contact"
);

export const footerNavigationItems = navigationItems;