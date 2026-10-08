export interface Laboratory {
  id: string;
  name: string;
  department: string;
  description: string;
  image: string;
  equipmentCount: number;
  capacity: number;
  category: string;
  href: string;
}

export const laboratories: Laboratory[] = [
  {
    id: "computer-programming-lab",
    name: "Computer Programming Lab",
    department: "Computer Science & Engineering",
    description:
      "Modern computing facility equipped for programming, software development, database systems, web technologies, and application development.",
    image: "/images/laboratories/computer-lab.jpg",
    equipmentCount: 75,
    capacity: 60,
    category: "Computing",
    href: "/laboratories#computer-programming-lab",
  },
  {
    id: "ai-data-science-lab",
    name: "AI & Data Science Lab",
    department: "Artificial Intelligence & Data Science",
    description:
      "Specialized laboratory for machine learning, artificial intelligence, data analytics, deep learning, and intelligent applications.",
    image: "/images/laboratories/computer-lab.jpg",
    equipmentCount: 55,
    capacity: 50,
    category: "Artificial Intelligence",
    href: "/laboratories#ai-data-science-lab",
  },
  {
    id: "electronics-communication-lab",
    name: "Electronics & Communication Lab",
    department: "Electronics & Communication Engineering",
    description:
      "Hands-on laboratory for electronic circuits, communication systems, microcontrollers, signal processing, and embedded systems.",
    image: "/images/laboratories/electronic-lab.jpg",
    equipmentCount: 65,
    capacity: 50,
    category: "Electronics",
    href: "/laboratories#electronics-communication-lab",
  },
  {
    id: "mechanical-workshop",
    name: "Mechanical Workshop",
    department: "Mechanical Engineering",
    description:
      "Practical workshop facility supporting machining, manufacturing, fabrication, welding, fitting, and mechanical design activities.",
    image: "/images/laboratories/robotics-labs.jpg",
    equipmentCount: 45,
    capacity: 60,
    category: "Mechanical",
    href: "/laboratories#mechanical-workshop",
  },
  {
    id: "civil-engineering-lab",
    name: "Civil Engineering Laboratory",
    department: "Civil Engineering",
    description:
      "Laboratory for material testing, surveying, concrete technology, soil mechanics, structural analysis, and environmental engineering.",
    image: "/images/laboratories/civil-lab.jpg",
    equipmentCount: 50,
    capacity: 45,
    category: "Civil Engineering",
    href: "/laboratories#civil-engineering-lab",
  },
  {
    id: "electrical-machines-lab",
    name: "Electrical Machines Lab",
    department: "Electrical Engineering",
    description:
      "Laboratory for electrical machines, power systems, control systems, electrical drives, and renewable energy experiments.",
    image: "/images/laboratories/electrical-lab.jpg",
    equipmentCount: 40,
    capacity: 45,
    category: "Electrical",
    href: "/laboratories#electrical-machines-lab",
  },
];