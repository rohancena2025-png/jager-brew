import { Skeleton } from "@/components/ui/skeleton";
import { useTestimonials } from "@/hooks/useTestimonials";
import { motion } from "motion/react";

const STAR_POSITIONS = [1, 2, 3, 4, 5];
const SKELETON_ITEMS = [1, 2, 3, 4, 5, 6];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {STAR_POSITIONS.map((star) => (
        <svg
          key={star}
          viewBox="0 0 12 12"
          className="w-4 h-4"
          fill={star <= rating ? "oklch(0.72 0.15 86)" : "oklch(0.3 0 0)"}
          aria-hidden="true"
        >
          <path d="M6 1L7.3 4.3H11L8.2 6.5L9.2 10L6 8L2.8 10L3.8 6.5L1 4.3H4.7L6 1Z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const { data: testimonials, isLoading } = useTestimonials();

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 bg-background section-divider"
      data-ocid="testimonials.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 font-body">
            Social Proof
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter">
            What They&apos;re <span className="gradient-gold-text">Saying</span>
          </h2>
        </motion.div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="testimonials.loading_state"
          >
            {SKELETON_ITEMS.map((n) => (
              <div
                key={n}
                className="rounded-lg p-6"
                style={{
                  background: "oklch(0.12 0 0)",
                  border: "1px solid oklch(0.22 0 0)",
                }}
              >
                <Skeleton className="h-4 w-24 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />
                <Skeleton className="h-4 w-32" />
              </div>
            ))}
          </div>
        ) : !testimonials?.length ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center py-16"
            data-ocid="testimonials.empty_state"
          >
            <p className="text-4xl mb-4">☕</p>
            <p className="font-display font-bold text-lg gradient-gold-text mb-2">
              Be the first to share your experience.
            </p>
            <p className="text-muted-foreground font-body text-sm">
              Reviews from real Jager Brew drinkers will appear here.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials?.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                className="relative rounded-lg p-7 flex flex-col gap-4"
                style={{
                  background: "oklch(0.12 0 0)",
                  border: "1px solid oklch(0.72 0.15 86 / 0.12)",
                  backdropFilter: "blur(24px)",
                  boxShadow: "0 8px 32px oklch(0 0 0 / 0.35)",
                }}
                data-ocid={`testimonials.card.${i + 1}`}
              >
                {/* Quote mark */}
                <div
                  className="absolute top-4 right-6 font-display font-black text-6xl leading-none select-none pointer-events-none"
                  style={{ color: "oklch(0.72 0.15 86 / 0.08)" }}
                  aria-hidden="true"
                >
                  &quot;
                </div>

                <StarRating rating={t.rating} />

                <p className="text-foreground/90 text-sm leading-relaxed font-body flex-1 italic">
                  &ldquo;{t.content}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-2 border-t border-border/30">
                  {/* Avatar */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-display font-black text-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.65 0.15 89), oklch(0.45 0.10 75))",
                      color: "oklch(0.08 0 0)",
                    }}
                  >
                    {t.author.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-body font-semibold text-sm text-foreground truncate">
                      {t.author}
                    </p>
                    <p className="font-body text-xs text-muted-foreground truncate">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
