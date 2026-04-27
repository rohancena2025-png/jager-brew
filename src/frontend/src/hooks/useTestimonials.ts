import type { Testimonial } from "@/types";
import { useQuery } from "@tanstack/react-query";

// Static testimonials — backend integration ready when bindgen runs
const STATIC_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Marcus R.",
    role: "Creative Director, NYC",
    content:
      "Jager Brew hits differently. The Original is my 3am studio fuel — clean energy, no crash, and it actually tastes like premium coffee.",
    rating: 5,
  },
  {
    id: "2",
    author: "Priya S.",
    role: "Founder & Athlete",
    content:
      "Switched from everything else. The Sugar Free variant keeps me sharp during morning sessions without the sugar spike. Game changer.",
    rating: 5,
  },
  {
    id: "3",
    author: "Alex T.",
    role: "Night Shift Engineer",
    content:
      "Extra Caffeine is the real deal. Works a double and still has enough left to be present. The blue can is iconic at the office.",
    rating: 5,
  },
  {
    id: "4",
    author: "Samira K.",
    role: "Brand Strategist",
    content:
      "Premium packaging, premium taste. Jager Brew is the only cold coffee I'll serve at client meetings. It speaks for itself.",
    rating: 5,
  },
  {
    id: "5",
    author: "Dev M.",
    role: "Gym Owner & Coach",
    content:
      "My clients ask about this every single day. We stock it at the gym — it sells itself. The Jager Brew brand is just elite.",
    rating: 5,
  },
];

export function useTestimonials() {
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      // TODO: replace with actor.getTestimonials() once bindgen is run
      return STATIC_TESTIMONIALS;
    },
    staleTime: 5 * 60 * 1000,
  });
}
