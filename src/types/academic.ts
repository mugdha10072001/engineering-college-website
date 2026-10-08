export interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image?: string;
  facultyCount?: number;
  programs?: string[];
  established?: number;
  href?: string;
}

export interface Program {
  id: string;
  title: string;
  shortName?: string;
  description: string;
  duration?: string;
  degree?: string;
  intake?: number | string;
  eligibility?: string;
  image?: string;
  href?: string;
  tag?: string;
}

export interface Course {
  id: string;
  title: string;
  code?: string;
  description: string;
  credits?: number;
  duration?: string;
  department?: string;
  semester?: number;
}

export interface AcademicYear {
  id: string;
  label: string;
  startYear: number;
  endYear: number;
  current?: boolean;
}

export interface AdmissionEligibility {
  program: string;
  qualification: string;
  minimumPercentage?: string;
  entranceExam?: string;
  additionalRequirements?: string[];
}

export interface ImportantDate {
  id: string;
  title: string;
  date: string;
  description?: string;
}