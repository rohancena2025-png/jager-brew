import { motion } from "motion/react";

interface LifestyleCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  icon: string;
}

const LIFESTYLE_CARDS: LifestyleCard[] = [
  {
    id: "professional",
    title: "The Professional",
    subtitle: "Own the boardroom",
    description:
      "Deadlines fuel you. Jager Brew keeps your edge sharp from the first meeting to the last deliverable.",
    gradient:
      "linear-gradient(135deg, oklch(0.18 0.04 89), oklch(0.10 0.02 89))",
    icon: "💼",
  },
  {
    id: "athlete",
    title: "The Athlete",
    subtitle: "Train harder, recover faster",
    description:
      "Pre-workout. Post-hustle. Extra Caffeine delivers peak performance when you need it most.",
    gradient:
      "linear-gradient(135deg, oklch(0.14 0.04 263 / 0.8), oklch(0.10 0.02 263 / 0.6))",
    icon: "⚡",
  },
  {
    id: "creator",
    title: "The Creator",
    subtitle: "Make at the speed of thought",
    description:
      "3am breakthroughs. The Original is your studio companion for sessions that refuse to end early.",
    gradient:
      "linear-gradient(135deg, oklch(0.16 0.03 60), oklch(0.10 0.01 60))",
    icon: "🎬",
  },
  {
    id: "nightowl",
    title: "The Night Owl",
    subtitle: "The city never sleeps",
    description:
      "Nightlife meets clarity. Jager Brew is the drink that keeps you present, sharp, and in the moment.",
    gradient:
      "linear-gradient(135deg, oklch(0.15 0.02 300), oklch(0.09 0.01 280))",
    icon: "🌙",
  },
];

export function LifestyleSection() {
  return (
    <section
      id="lifestyle"
      className="relative py-24 lg:py-32 section-divider"
      style={{ background: "oklch(0.09 0.004 89)" }}
      data-ocid="lifestyle.section"
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
            Your Tribe
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter">
            Live the <span className="gradient-gold-text">Jager Brew</span> Life
          </h2>
        </motion.div>

        {/* Lifestyle image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-xl overflow-hidden relative"
          style={{
            border: "1px solid oklch(0.72 0.15 86 / 0.15)",
            boxShadow: "0 20px 60px oklch(0 0 0 / 0.5)",
          }}
        >
          <img
            src="/assets/generated/jagerbrew-lifestyle.dim_1200x800.jpg"
            alt="Jager Brew lifestyle — professionals, athletes, creators, night owls"
            className="w-full object-cover"
            style={{ maxHeight: 400 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, oklch(0.09 0.004 89 / 0.8))",
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LIFESTYLE_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="relative rounded-lg p-6 cursor-default overflow-hidden group"
              style={{
                background: card.gradient,
                border: "1px solid oklch(0.72 0.15 86 / 0.12)",
                boxShadow: "0 8px 24px oklch(0 0 0 / 0.35)",
              }}
              data-ocid={`lifestyle.card.${i + 1}`}
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{card.icon}</div>

              {/* Gold top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.72 0.15 86 / 0.4), transparent)",
                }}
              />

              <h3 className="font-display font-black text-lg tracking-tight mb-1 text-foreground">
                {card.title}
              </h3>
              <p className="gradient-gold-text font-body font-semibold text-xs uppercase tracking-widest mb-3">
                {card.subtitle}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
