export interface Faculty {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification?: string;
  experience?: string;
  email?: string;
  phone?: string;
  image?: string;
  specialization?: string[];
  researchInterests?: string[];
  href?: string;
}

export interface FacultyDepartment {
  id: string;
  name: string;
  shortName: string;
  head?: string;
  facultyCount: number;
}

export interface FacultyProfile extends Faculty {
  biography?: string;
  publications?: number;
  projects?: number;
  awards?: string[];
}

export interface FacultyAchievement {
  id: string;
  facultyId: string;
  title: string;
  description: string;
  year: number;
}