export interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  facultyCount: number;
  programs: string[];
  established: number;
  href: string;
}

export const departments: Department[] = [
  {
    id: "computer-science",
    name: "Computer Science & Engineering",
    shortName: "CSE",
    description:
      "Focuses on software development, artificial intelligence, data science, cloud computing, cybersecurity, and modern computing technologies.",
    image: "/images/campus/computer-lab.jpg",
    facultyCount: 18,
    programs: ["B.Tech CSE", "M.Tech CSE"],
    established: 2001,
    href: "/departments/computer-science",
  },
  {
    id: "electronics-communication",
    name: "Electronics & Communication Engineering",
    shortName: "ECE",
    description:
      "Provides strong foundations in electronics, communication systems, embedded systems, VLSI, and signal processing.",
    image: "/images/laboratories/electronic-lab.jpg",
    facultyCount: 15,
    programs: ["B.Tech ECE", "M.Tech ECE"],
    established: 2002,
    href: "/departments/electronics-communication",
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    shortName: "ME",
    description:
      "Covers mechanical design, manufacturing, thermal engineering, robotics, automation, and industrial engineering.",
    image: "/images/laboratories/robotics-lab.jpg",
    facultyCount: 16,
    programs: ["B.Tech Mechanical Engineering"],
    established: 2000,
    href: "/departments/mechanical",
  },
  {
    id: "civil",
    name: "Civil Engineering",
    shortName: "CE",
    description:
      "Focuses on structural engineering, construction, transportation, environmental engineering, and sustainable infrastructure.",
    image: "/images/laboratories/civil-lab.jpg",
    facultyCount: 14,
    programs: ["B.Tech Civil Engineering"],
    established: 2000,
    href: "/departments/civil",
  },
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence & Data Science",
    shortName: "AI & DS",
    description:
      "Prepares students for careers in artificial intelligence, machine learning, data analytics, deep learning, and intelligent systems.",
    image: "/images/laboratories/computer-lab.jpg",
    facultyCount: 12,
    programs: ["B.Tech AI & Data Science"],
    established: 2022,
    href: "/departments/artificial-intelligence",
  },
  {
    id: "electrical",
    name: "Electrical Engineering",
    shortName: "EE",
    description:
      "Covers electrical machines, power systems, control systems, renewable energy, electrical drives, and industrial automation.",
    image: "/images/laboratories/electronic-lab.jpg",
    facultyCount: 13,
    programs: ["B.Tech Electrical Engineering"],
    established: 2003,
    href: "/departments/electrical",
  },
];