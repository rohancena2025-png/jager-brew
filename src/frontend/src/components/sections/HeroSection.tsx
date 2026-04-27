import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToShop = () => {
    document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Layered background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 65% 45%, oklch(0.20 0.09 89 / 0.45), transparent 65%), radial-gradient(ellipse 50% 60% at 15% 85%, oklch(0.12 0.04 263 / 0.18), transparent 55%), oklch(0.08 0 0)",
        }}
      />

      {/* Decorative grain overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-xs uppercase tracking-[0.35em] text-primary/80 mb-5 font-body font-medium"
            >
              Premium Cold Brew Coffee
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter mb-6"
            >
              <span className="gradient-gold-text">BOLD TASTE.</span>
              <br />
              <span className="text-foreground">PURE ENERGY.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 font-body leading-relaxed"
            >
              Premium cold brew coffee crafted for those who refuse to slow
              down. Engineered for bold taste and long-lasting energy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <button
                type="button"
                onClick={scrollToShop}
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.2em] rounded-sm hover:bg-primary/90 transition-smooth shadow-gold-glow"
                data-ocid="hero.shop_now_button"
              >
                Shop Now
              </button>
              <button
                type="button"
                onClick={scrollToAbout}
                className="inline-flex items-center px-8 py-4 border border-primary/40 text-foreground font-display font-semibold text-sm uppercase tracking-[0.2em] rounded-sm hover:border-primary hover:bg-primary/5 transition-smooth"
                data-ocid="hero.discover_button"
              >
                Discover Jager Brew
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="mt-12 flex flex-wrap gap-8"
            >
              {[
                { value: "100%", label: "Cold Brewed" },
                { value: "150mg", label: "Caffeine" },
                { value: "0", label: "Artificial Colors" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-black text-2xl gradient-gold-text leading-none">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest mt-1 font-body">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Gold radial glow behind can */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "radial-gradient(ellipse 55% 60% at 50% 50%, oklch(0.72 0.15 86 / 0.22), transparent 70%)",
              }}
            />
            <img
              src="/assets/brand/original-can.png"
              alt="Jager Brew Original"
              className="relative z-10 w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 30px 60px oklch(0.72 0.15 86 / 0.25))",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        aria-label="Scroll to about section"
        data-ocid="hero.scroll_cue"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-body">
          Scroll
        </span>
        <ChevronDown size={16} />
      </motion.button>
    </section>
  );
}
