export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: string;
  year: number;
  image: string;
  href?: string;
}

export const achievements: Achievement[] = [
  {
    id: "technical-competition-2026",
    title: "National Technical Competition Winners",
    description:
      "Our students secured top positions at a national-level engineering and technology competition.",
    category: "Technical Excellence",
    year: 2026,
    image: "/images/events/tech-fest.jpg",
    href: "/achievements/technical-competition-2026",
  },
  {
    id: "sports-championship-2026",
    title: "Inter-College Sports Championship",
    description:
      "The college sports team won multiple medals at the regional inter-college championship.",
    category: "Sports Achievements",
    year: 2026,
    image: "/images/campus/sports-complex.jpg",
    href: "/achievements/sports-championship-2026",
  },
  {
    id: "academic-excellence-2025",
    title: "Outstanding Academic Performance",
    description:
      "Students achieved excellent results in university examinations and secured multiple academic distinctions.",
    category: "Academic Success",
    year: 2025,
    image: "/images/gallery/campus-life.jpg",
    href: "/achievements/academic-excellence-2025",
  },
  {
    id: "innovation-award-2025",
    title: "Innovation & Startup Award",
    description:
      "A student innovation team received recognition for developing a technology-based solution to a real-world problem.",
    category: "Research & Innovation",
    year: 2025,
    image: "/images/gallery/research.jpg",
    href: "/achievements/innovation-award-2025",
  },
  {
    id: "robotics-challenge-2024",
    title: "Robotics Challenge Achievement",
    description:
      "The student robotics team successfully competed in a national robotics challenge.",
    category: "Technical Excellence",
    year: 2024,
    image: "/images/gallery/workshop.jpg",
    href: "/achievements/robotics-challenge-2024",
  },
  {
    id: "research-recognition-2024",
    title: "Research Excellence Recognition",
    description:
      "Faculty and students received recognition for innovative research and technical publications.",
    category: "Research & Innovation",
    year: 2024,
    image: "/images/gallery/research.jpg",
    href: "/achievements/research-recognition-2024",
  },
];

export const achievementStats = [
  {
    label: "Competition Awards",
    value: "100+",
  },
  {
    label: "Successful Alumni",
    value: "5000+",
  },
  {
    label: "Years of Excellence",
    value: "25+",
  },
  {
    label: "Research Projects",
    value: "50+",
  },
];