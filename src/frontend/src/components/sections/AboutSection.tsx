import { motion } from "motion/react";

const STATS = [
  { label: "100% Cold Brewed", desc: "Slow steeped 18 hours" },
  { label: "Long-Lasting Energy", desc: "No crash, no compromise" },
  { label: "Ready to Drink", desc: "Crack it. Crush it. Done." },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 section-divider"
      style={{ background: "oklch(0.1 0.005 89)" }}
      data-ocid="about.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: brand statement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Golden accent line */}
            <div
              className="w-12 h-1 mb-6 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.72 0.15 86), oklch(0.55 0.10 75))",
              }}
            />
            <p className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 font-body font-medium">
              About the Product
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tighter mb-0">
              <span className="text-foreground">Crafted for the</span>
              <br />
              <span className="gradient-gold-text">Bold & Relentless.</span>
            </h2>
          </motion.div>

          {/* Right: description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Jager Brew is a premium cold brew coffee crafted for people who
              demand more from every moment. Slow-steeped for 18 hours using
              single-origin beans, every can delivers a silky-smooth yet
              intensely bold coffee experience — without compromise.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed font-body">
              No artificial shortcuts. No watered-down taste. Just pure,
              concentrated cold brew energy ready the moment you crack it open.
              Designed for professionals, athletes, creators, and night owls who
              operate at a different level.
            </p>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.72 0.15 86 / 0.12), oklch(0.72 0.15 86 / 0.04))",
          }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
              className="px-8 py-8"
              style={{ background: "oklch(0.1 0.005 89)" }}
              data-ocid={`about.stat.${i + 1}`}
            >
              <p className="font-display font-black text-lg gradient-gold-text mb-1">
                {stat.label}
              </p>
              <p className="text-muted-foreground text-sm font-body">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
