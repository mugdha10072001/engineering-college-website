export interface Notice {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  href?: string;
  isNew?: boolean;
  downloadable?: boolean;
}

export const notices: Notice[] = [
  {
    id: "admission-2026-27",
    title: "Admission Applications Open for Academic Year 2026–27",
    date: "05 October 2026",
    category: "Admissions",
    description:
      "Applications are now open for undergraduate and postgraduate engineering programmes for the academic year 2026–27.",
    href: "/admissions",
    isNew: true,
  },
  {
    id: "semester-examination-schedule",
    title: "End Semester Examination Schedule",
    date: "01 October 2026",
    category: "Examination",
    description:
      "The end semester examination schedule and important academic dates have been published.",
    href: "/documents/academic-calendar.pdf",
    downloadable: true,
  },
  {
    id: "scholarship-notification",
    title: "Scholarship Application Notification",
    date: "25 September 2026",
    category: "Students",
    description:
      "Eligible students are invited to apply for available government and institutional scholarship schemes.",
    href: "/contact",
    isNew: true,
  },
  {
    id: "faculty-development-notification",
    title: "Faculty Development Programme Notification",
    date: "20 September 2026",
    category: "Academics",
    description:
      "Faculty members are invited to register for the upcoming development programme on emerging technologies.",
    href: "/events/faculty-development-programme",
  },
  {
    id: "technical-festival-registration",
    title: "Technical Festival Registration Open",
    date: "15 September 2026",
    category: "Events",
    description:
      "Students can now register for technical competitions, workshops, project exhibitions, and other festival activities.",
    href: "/events/annual-technical-festival",
  },
  {
    id: "hostel-admission-renewal",
    title: "Hostel Admission and Renewal Notice",
    date: "10 September 2026",
    category: "Hostel",
    description:
      "Applications for new hostel admission and annual hostel renewal are now open.",
    href: "/contact",
  },
];