export interface Faculty {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  email: string;
  image: string;
  href?: string;
}

export const faculty: Faculty[] = [
  {
    id: "dr-arun-sharma",
    name: "Dr. Arun Sharma",
    designation: "Principal",
    department: "Administration",
    qualification: "Ph.D., M.Tech.",
    experience: "25+ Years",
    email: "principal@examplecollege.edu",
    image: "/images/faculty/principal.jpg",
    href: "/faculty/dr-arun-sharma",
  },
  {
    id: "dr-priya-mehta",
    name: "Dr. Priya Mehta",
    designation: "Professor & HOD",
    department: "Computer Science & Engineering",
    qualification: "Ph.D., M.Tech.",
    experience: "18+ Years",
    email: "priya.mehta@examplecollege.edu",
    image: "/images/faculty/priya-mehta.jpg",
    href: "/faculty/dr-priya-mehta",
  },
  {
    id: "dr-rajesh-patil",
    name: "Dr. Rajesh Patil",
    designation: "Professor & HOD",
    department: "Electronics & Communication Engineering",
    qualification: "Ph.D., M.E.",
    experience: "20+ Years",
    email: "rajesh.patil@examplecollege.edu",
    image: "/images/faculty/rajesh-patil.jpg",
    href: "/faculty/dr-rajesh-patil",
  },
  {
    id: "prof-neha-joshi",
    name: "Prof. Neha Joshi",
    designation: "Associate Professor",
    department: "Mechanical Engineering",
    qualification: "M.Tech., B.E.",
    experience: "14+ Years",
    email: "neha.joshi@examplecollege.edu",
    image: "/images/faculty/neha-joshi.jpg",
    href: "/faculty/prof-neha-joshi",
  },
  {
    id: "dr-vivek-kulkarni",
    name: "Dr. Vivek Kulkarni",
    designation: "Associate Professor & HOD",
    department: "Civil Engineering",
    qualification: "Ph.D., M.Tech.",
    experience: "16+ Years",
    email: "vivek.kulkarni@examplecollege.edu",
    image: "/images/faculty/vivek-kulkarni.jpg",
    href: "/faculty/dr-vivek-kulkarni",
  },
  {
    id: "dr-sneha-deshmukh",
    name: "Dr. Sneha Deshmukh",
    designation: "Assistant Professor",
    department: "Artificial Intelligence & Data Science",
    qualification: "Ph.D., M.Tech.",
    experience: "10+ Years",
    email: "sneha.deshmukh@examplecollege.edu",
    image: "/images/faculty/sneha-deshmukh.jpg",
    href: "/faculty/dr-sneha-deshmukh",
  },
  {
    id: "prof-amit-verma",
    name: "Prof. Amit Verma",
    designation: "Assistant Professor",
    department: "Electrical Engineering",
    qualification: "M.Tech., B.E.",
    experience: "9+ Years",
    email: "amit.verma@examplecollege.edu",
    image: "/images/faculty/amit-verma.jpg",
    href: "/faculty/prof-amit-verma",
  },
  {
    id: "dr-kavita-singh",
    name: "Dr. Kavita Singh",
    designation: "Professor",
    department: "Computer Science & Engineering",
    qualification: "Ph.D., M.Tech.",
    experience: "17+ Years",
    email: "kavita.singh@examplecollege.edu",
    image: "/images/faculty/kavita-singh.jpg",
    href: "/faculty/dr-kavita-singh",
  },
];