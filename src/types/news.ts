export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image?: string;
  href?: string;
  isNew?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  location: string;
  time: string;
  description?: string;
  image?: string;
  href?: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: string;
  description?: string;
  href?: string;
  isNew?: boolean;
  downloadable?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: string;
  year: number;
  image?: string;
  href?: string;
}

export type NewsCategory =
  | "Campus"
  | "Academics"
  | "Achievement"
  | "Industry"
  | "Research"
  | "Students";

export type NoticeCategory =
  | "Admissions"
  | "Examination"
  | "Students"
  | "Academics"
  | "Events"
  | "Hostel";