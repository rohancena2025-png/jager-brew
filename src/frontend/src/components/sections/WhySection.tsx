import { motion } from "motion/react";

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
      <path
        d="M13 2L4.5 13.5H11.5L11 22L19.5 10.5H12.5L13 2Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

function CupIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
      <path
        d="M5 4h14l-1.5 11a2 2 0 01-2 1.75H8.5A2 2 0 016.5 15L5 4z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M5 4H3.5C2.67 4 2 4.67 2 5.5v1C2 7.33 2.67 8 3.5 8H5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <rect
        x="7"
        y="18"
        width="10"
        height="1.5"
        rx="0.75"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

function CanIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
      <rect
        x="7"
        y="4"
        width="10"
        height="16"
        rx="3"
        fill="currentColor"
        opacity="0.9"
      />
      <ellipse
        cx="12"
        cy="4"
        rx="5"
        ry="1.5"
        fill="currentColor"
        opacity="0.7"
      />
      <ellipse
        cx="12"
        cy="20"
        rx="5"
        ry="1.5"
        fill="currentColor"
        opacity="0.7"
      />
      <rect
        x="10"
        y="8"
        width="4"
        height="1"
        rx="0.5"
        fill="currentColor"
        opacity="0.4"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
      <path
        d="M12 2L14.6 8.8H22L16.2 13.2L18.4 20L12 16L5.6 20L7.8 13.2L2 8.8H9.4L12 2Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

const BENEFITS: Benefit[] = [
  {
    id: "caffeine",
    title: "Powerful Caffeine Boost",
    description:
      "150–250mg of natural caffeine per can delivers peak focus, sustained alertness, and zero energy crashes. Precision-dosed for maximum performance.",
    icon: <BoltIcon />,
  },
  {
    id: "taste",
    title: "Smooth Cold Coffee Taste",
    description:
      "18-hour slow-steep cold brew process extracts bold flavor while reducing acidity. Rich, smooth, complex — tastes like craft coffee, not an energy drink.",
    icon: <CupIcon />,
  },
  {
    id: "ready",
    title: "Ready to Drink",
    description:
      "Premium cold brew wherever your day takes you. No brewing, no mixing, no waiting. Crack, drink, dominate — your fuel is always ready.",
    icon: <CanIcon />,
  },
  {
    id: "brand",
    title: "Premium Lifestyle Brand",
    description:
      "Jager Brew is more than a drink — it's a statement. Built for high-performers who demand excellence in everything they touch, drink, and wear.",
    icon: <StarIcon />,
  },
];

export function WhySection() {
  return (
    <section
      id="why"
      className="relative py-24 lg:py-32 section-divider"
      style={{ background: "oklch(0.09 0.006 89)" }}
      data-ocid="why.section"
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
            The Advantage
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter">
            Why <span className="gradient-gold-text">Jager Brew</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className="group relative p-8 rounded-lg transition-smooth hover:border-primary/40 cursor-default"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.13 0.008 89), oklch(0.11 0.004 89))",
                border: "1px solid oklch(0.72 0.15 86 / 0.15)",
              }}
              data-ocid={`why.card.${i + 1}`}
            >
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-lg mb-6 text-primary"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.15 86 / 0.15), oklch(0.65 0.12 86 / 0.08))",
                  border: "1px solid oklch(0.72 0.15 86 / 0.25)",
                }}
              >
                {benefit.icon}
              </div>

              <h3 className="font-display font-black text-xl tracking-tight mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {benefit.description}
              </p>

              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-8 right-8 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.72 0.15 86 / 0.3), transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
