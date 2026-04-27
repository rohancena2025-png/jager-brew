export type ProductVariant = "original" | "sugar-free" | "extra-caffeine";

export interface Product {
  id: string;
  name: string;
  variant: ProductVariant;
  tagline: string;
  description: string;
  price: number;
  packSize: string;
  accentColor: "gold" | "blue";
  imagePath: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
}

export interface ContactInquiry {
  name: string;
  email: string;
  company: string;
  inquiryType: "retail" | "bulk" | "collaboration" | "other";
  message: string;
}

export interface ContactFormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}
