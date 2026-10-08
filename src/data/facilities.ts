export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  href: string;
}

export const facilities: Facility[] = [
  {
    id: "central-library",
    title: "Central Library",
    description:
      "A modern learning resource centre with books, journals, digital resources, reading spaces, and online databases.",
    image: "/images/campus/library.jpg",
    features: [
      "50,000+ Books",
      "Digital Library",
      "Research Journals",
      "Reading Hall",
    ],
    href: "/facilities#central-library",
  },
  {
    id: "sports-complex",
    title: "Sports Complex",
    description:
      "A comprehensive sports facility supporting indoor and outdoor activities, fitness, recreation, and inter-college competitions.",
    image: "/images/campus/sports-complex.jpg",
    features: [
      "Indoor Games",
      "Outdoor Grounds",
      "Fitness Centre",
      "Sports Events",
    ],
    href: "/facilities#sports-complex",
  },
  {
    id: "smart-classrooms",
    title: "Smart Classrooms",
    description:
      "Technology-enabled classrooms designed to provide an interactive and engaging learning experience.",
    image: "/images/campus/smart-classroom.jpg",
    features: [
      "Projectors",
      "Interactive Displays",
      "Audio Systems",
      "Digital Content",
    ],
    href: "/facilities#smart-classrooms",
  },
  {
    id: "campus-wifi",
    title: "Campus Wi-Fi",
    description:
      "High-speed wireless connectivity across academic buildings, laboratories, library, and student areas.",
    image: "/images/campus/campus-wifi.jpg",
    features: [
      "High-Speed Internet",
      "Campus-Wide Coverage",
      "Secure Network",
      "Student Access",
    ],
    href: "/facilities#campus-wifi",
  },
  {
    id: "student-cafeteria",
    title: "Student Cafeteria",
    description:
      "A comfortable cafeteria offering hygienic food and refreshments in a friendly campus environment.",
    image: "/images/campus/cafeteria.jpg",
    features: [
      "Hygienic Food",
      "Vegetarian Options",
      "Seating Area",
      "Refreshments",
    ],
    href: "/facilities#student-cafeteria",
  },
  {
    id: "transportation",
    title: "Transportation",
    description:
      "Safe and convenient transportation services connecting the campus with major locations around the city.",
    image: "/images/campus/transportation.jpg",
    features: [
      "Multiple Routes",
      "College Buses",
      "GPS Tracking",
      "Student Safety",
    ],
    href: "/facilities#transportation",
  },
];