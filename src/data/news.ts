export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  href: string;
  isNew?: boolean;
}

export const news: NewsItem[] = [
  {
    id: "innovation-centre-inauguration",
    title: "Innovation and Entrepreneurship Centre Inaugurated",
    date: "05 October 2026",
    category: "Campus",
    description:
      "The college inaugurated its new Innovation and Entrepreneurship Centre to support student startups, research, and innovation.",
    image: "/images/events/tech-fest.jpg",
    href: "/news/innovation-centre-inauguration",
    isNew: true,
  },
  {
    id: "faculty-development-programme",
    title: "Faculty Development Programme Conducted",
    date: "28 September 2026",
    category: "Academics",
    description:
      "A faculty development programme was organized to promote modern teaching methodologies and emerging technologies.",
    image: "/images/campus/auditorium.jpg",
    href: "/news/faculty-development-programme",
  },
  {
    id: "technical-competition",
    title: "Students Win Technical Competition",
    date: "15 September 2026",
    category: "Achievement",
    description:
      "Students from the engineering departments secured top positions in an inter-college technical competition.",
    image: "/images/events/annual-function.jpg",
    href: "/news/technical-competition",
    isNew: true,
  },
  {
    id: "industry-collaboration",
    title: "New Industry Collaboration Announced",
    date: "08 September 2026",
    category: "Industry",
    description:
      "The college announced a new industry collaboration focused on internships, training, research, and placement opportunities.",
    image: "/images/gallery/workshop.jpg",
    href: "/news/industry-collaboration",
  },
  {
    id: "research-publication",
    title: "Research Team Publishes New Technical Paper",
    date: "30 August 2026",
    category: "Research",
    description:
      "A faculty research team published a technical paper in an international research publication.",
    image: "/images/gallery/research.jpg",
    href: "/news/research-publication",
  },
  {
    id: "student-orientation",
    title: "Orientation Programme for New Students",
    date: "01 August 2026",
    category: "Students",
    description:
      "The institute organized an orientation programme to welcome new students and introduce them to campus life.",
    image: "/images/gallery/campus-life.jpg",
    href: "/news/student-orientation",
  },
];