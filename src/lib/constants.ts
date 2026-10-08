export const SITE_NAME = "ABC Engineering College";

export const SITE_SHORT_NAME = "ABC Engineering College";

export const SITE_DESCRIPTION =
  "A modern engineering college committed to excellence in education, research, innovation, and student development.";

export const SITE_URL = "https://www.examplecollege.edu";

export const CONTACT = {
  address: "Nagpur, Maharashtra, India",
  phone: "+91 99999 99999",
  email: "info@examplecollege.edu",
  admissionsEmail: "admissions@examplecollege.edu",
};

export const OFFICE_HOURS = {
  weekdays: "Monday - Friday: 9:00 AM - 5:00 PM",
  saturday: "Saturday: 9:00 AM - 1:00 PM",
  sunday: "Sunday: Closed",
};

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/",
  youtube: "https://youtube.com/",
  twitter: "https://x.com/",
};

export const NAVIGATION = [
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "About College",
        href: "/about",
      },
      {
        label: "Management",
        href: "/management",
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
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
  },
  {
    label: "Campus",
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
        label: "Gallery",
        href: "/gallery",
      },
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
    href: "/student-activities",
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
    href: "/news",
    children: [
      {
        label: "News",
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
    label: "Contact Us",
    href: "/contact",
  },
] as const;

export const QUICK_LINKS = [
  {
    label: "Admissions",
    href: "/admissions",
  },
  {
    label: "Programs",
    href: "/programs",
  },
  {
    label: "Placements",
    href: "/placements",
  },
  {
    label: "Faculty",
    href: "/faculty",
  },
  {
    label: "Notices",
    href: "/notices",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export const COLLEGE_STATS = [
  {
    value: "25+",
    label: "Years of Excellence",
  },
  {
    value: "5000+",
    label: "Successful Alumni",
  },
  {
    value: "100+",
    label: "Expert Faculty",
  },
  {
    value: "30+",
    label: "Modern Laboratories",
  },
] as const;

export const DEPARTMENT_NAMES = [
  "Computer Science & Engineering",
  "Electronics & Communication Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Artificial Intelligence & Data Science",
  "Electrical Engineering",
] as const;

export const PROGRAM_LEVELS = [
  "Undergraduate",
  "Postgraduate",
] as const;

export const ACADEMIC_YEAR = "2026–27";

export const ADMISSION_STATUS = "Admissions Open";

export const DOCUMENTS = {
  admissionBrochure: "/documents/admission-brochure.pdf",
  academicCalendar: "/documents/academic-calendar.pdf",
  studentHandbook: "/documents/student-handbook.pdf",
  examinationGuidelines: "/documents/examination-guidelines.pdf",
} as const;

export const IMAGE_PATHS = {
  campus: "/images/campus",
  faculty: "/images/faculty",
  laboratories: "/images/laboratories",
  events: "/images/events",
  gallery: "/images/gallery",
} as const;