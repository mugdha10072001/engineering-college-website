import type { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  to?: string;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export interface ImageItem {
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

export interface Statistic {
  value: string;
  label: string;
  description?: string;
}

export interface ContactInfo {
  name?: string;
  address: string;
  phone: string;
  email: string;
  officeHours?: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  href: string;
  icon?: ReactNode;
}

export interface CTA {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface PageMeta {
  title: string;
  description?: string;
  image?: string;
}

export type Status = "idle" | "loading" | "success" | "error";