export interface EventItem {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  location: string;
  time: string;
  description: string;
  image: string;
  href: string;
}

export const events: EventItem[] = [
  {
    id: "annual-technical-festival",
    title: "Annual Technical Festival",
    date: "18 October 2026",
    day: "18",
    month: "OCT",
    location: "Main Auditorium",
    time: "10:00 AM onwards",
    description:
      "A celebration of engineering innovation featuring technical competitions, project exhibitions, workshops, and expert sessions.",
    image: "/images/events/tech-fest.jpg",
    href: "/events/annual-technical-festival",
  },
  {
    id: "campus-placement-drive",
    title: "Campus Placement Drive",
    date: "25 October 2026",
    day: "25",
    month: "OCT",
    location: "Training & Placement Cell",
    time: "9:00 AM onwards",
    description:
      "Campus recruitment drive featuring leading companies and career opportunities for eligible final-year students.",
    image: "/images/events/placement-drive.jpg",
    href: "/events/campus-placement-drive",
  },
  {
    id: "national-research-conference",
    title: "National Research Conference",
    date: "08 November 2026",
    day: "08",
    month: "NOV",
    location: "Conference Hall",
    time: "9:30 AM onwards",
    description:
      "A national conference bringing together researchers, academics, industry experts, and students.",
    image: "/images/gallery/research.jpg",
    href: "/events/national-research-conference",
  },
  {
    id: "annual-sports-meet",
    title: "Annual Sports Meet",
    date: "15 November 2026",
    day: "15",
    month: "NOV",
    location: "Sports Complex",
    time: "8:00 AM onwards",
    description:
      "Annual sporting event featuring athletics, team sports, indoor games, and inter-department competitions.",
    image: "/images/campus/sports-complex.jpg",
    href: "/events/annual-sports-meet",
  },
  {
    id: "innovation-startup-workshop",
    title: "Innovation & Startup Workshop",
    date: "22 November 2026",
    day: "22",
    month: "NOV",
    location: "Innovation Centre",
    time: "10:30 AM onwards",
    description:
      "A hands-on workshop introducing students to startup development, innovation, product thinking, and entrepreneurship.",
    image: "/images/gallery/workshop.jpg",
    href: "/events/innovation-startup-workshop",
  },
  {
    id: "annual-cultural-festival",
    title: "Annual Cultural Festival",
    date: "05 December 2026",
    day: "05",
    month: "DEC",
    location: "Open Air Theatre",
    time: "5:00 PM onwards",
    description:
      "An annual celebration showcasing music, dance, drama, art, creativity, and student talent.",
    image: "/images/events/annual-function.jpg",
    href: "/events/annual-cultural-festival",
  },
];