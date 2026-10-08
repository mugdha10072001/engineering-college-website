export interface Program {
  id: string;
  title: string;
  shortName: string;
  description: string;
  duration: string;
  degree: string;
  intake: number | string;
  eligibility: string;
  image: string;
  href: string;
  tag?: string;
}

export const programs: Program[] = [
  {
    id: "btech-cse",
    title: "Computer Science & Engineering",
    shortName: "B.Tech CSE",
    description:
      "A comprehensive undergraduate program covering programming, software engineering, artificial intelligence, databases, cloud computing, and cybersecurity.",
    duration: "4 Years",
    degree: "Bachelor of Technology",
    intake: 120,
    eligibility: "10+2 with Physics and Mathematics",
    image: "/images/laboratories/computer-lab.jpg",
    href: "/programs/btech-cse",
    tag: "Popular",
  },
  {
    id: "btech-ece",
    title: "Electronics & Communication Engineering",
    shortName: "B.Tech ECE",
    description:
      "An industry-focused program covering electronics, communication systems, embedded systems, VLSI, IoT, and signal processing.",
    duration: "4 Years",
    degree: "Bachelor of Technology",
    intake: 90,
    eligibility: "10+2 with Physics and Mathematics",
    image: "/images/laboratories/electronic-lab.jpg",
    href: "/programs/btech-ece",
  },
  {
    id: "btech-me",
    title: "Mechanical Engineering",
    shortName: "B.Tech ME",
    description:
      "A practical engineering program covering design, manufacturing, thermodynamics, robotics, automation, and industrial engineering.",
    duration: "4 Years",
    degree: "Bachelor of Technology",
    intake: 60,
    eligibility: "10+2 with Physics and Mathematics",
    image: "/images/laboratories/robotics-lab.jpg",
    href: "/programs/btech-me",
  },
  {
    id: "btech-ce",
    title: "Civil Engineering",
    shortName: "B.Tech CE",
    description:
      "A professional program focused on structural engineering, construction, transportation, environmental engineering, and infrastructure development.",
    duration: "4 Years",
    degree: "Bachelor of Technology",
    intake: 60,
    eligibility: "10+2 with Physics and Mathematics",
    image: "/images/laboratories/civil-lab.jpg",
    href: "/programs/btech-ce",
  },
  {
    id: "btech-ai-ds",
    title: "Artificial Intelligence & Data Science",
    shortName: "B.Tech AI & DS",
    description:
      "An emerging program focused on machine learning, artificial intelligence, data analytics, deep learning, and intelligent applications.",
    duration: "4 Years",
    degree: "Bachelor of Technology",
    intake: 60,
    eligibility: "10+2 with Physics and Mathematics",
    image: "/images/laboratories/computer-lab.jpg",
    href: "/programs/btech-ai-ds",
    tag: "New",
  },
  {
    id: "btech-ee",
    title: "Electrical Engineering",
    shortName: "B.Tech EE",
    description:
      "Covers power systems, electrical machines, control systems, renewable energy, automation, and electrical drives.",
    duration: "4 Years",
    degree: "Bachelor of Technology",
    intake: 60,
    eligibility: "10+2 with Physics and Mathematics",
    image: "/images/laboratories/electrical-lab.jpg",
    href: "/programs/btech-ee",
  },
  {
    id: "mtech-cse",
    title: "Computer Science & Engineering",
    shortName: "M.Tech CSE",
    description:
      "Advanced postgraduate study in computer science with emphasis on research, advanced algorithms, artificial intelligence, and emerging technologies.",
    duration: "2 Years",
    degree: "Master of Technology",
    intake: 24,
    eligibility: "B.E./B.Tech in relevant discipline",
    image: "/images/laboratories/computer-lab.jpg",
    href: "/programs/mtech-cse",
    tag: "Postgraduate",
  },
  {
    id: "mtech-ece",
    title: "Electronics & Communication Engineering",
    shortName: "M.Tech ECE",
    description:
      "Advanced study in communication systems, embedded technology, VLSI, signal processing, and electronics research.",
    duration: "2 Years",
    degree: "Master of Technology",
    intake: 18,
    eligibility: "B.E./B.Tech in relevant discipline",
    image: "/images/laboratories/electronic-lab.jpg",
    href: "/programs/mtech-ece",
    tag: "Postgraduate",
  },
];