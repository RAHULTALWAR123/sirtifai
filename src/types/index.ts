/* eslint-disable @typescript-eslint/no-explicit-any */
export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: Array<{
    label: string;
    href: string;
  }>;
}

// Comment
export interface User {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  borderColor: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon?: any; // Icon component from lucide-react
}

export interface SPPOption {
  id: string;
  label: string;
  href: string;
}

export interface ProgramTrack {
  id: string;
  label?: string;
  href?: string;
  icon?: any; // Icon component from lucide-react
  variant?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  buttonText?: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  role?: string;
  company: string;
  image: string;
  borderColor?: string;
  rating?: number;
  quote?: string;
  designation?: string;
  salary?: string;
  location?: string;
}
