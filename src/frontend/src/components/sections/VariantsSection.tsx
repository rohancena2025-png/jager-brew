import { motion } from "motion/react";

interface VariantCard {
  id: string;
  name: string;
  tagline: string;
  attrs: string[];
  isBlue: boolean;
  badge?: string;
  imgSrc: string;
  imgAlt: string;
}

const VARIANTS: VariantCard[] = [
  {
    id: "original",
    name: "Original",
    tagline: "The Classic Bold Brew",
    attrs: ["150mg Caffeine", "Full Cold Brew Taste", "Smooth Finish"],
    isBlue: false,
    badge: "Bestseller",
    imgSrc: "/assets/brand/original-can.png",
    imgAlt: "Jager Brew Original",
  },
  {
    id: "sugar-free",
    name: "Sugar Free",
    tagline: "Zero Sugar, Zero Compromise",
    attrs: ["150mg Caffeine", "0g Sugar", "Clean Energy"],
    isBlue: false,
    badge: "Fan Favorite",
    imgSrc: "/assets/brand/sugar-free-can.png",
    imgAlt: "Jager Brew Sugar Free",
  },
  {
    id: "extra-caffeine",
    name: "Extra Caffeine",
    tagline: "Maximum Power Unleashed",
    attrs: ["250mg Caffeine", "Ultra Boost", "Night Shift Approved"],
    isBlue: true,
    badge: "Strongest",
    imgSrc: "/assets/brand/extra-caffeine-can.png",
    imgAlt: "Jager Brew Extra Caffeine",
  },
];

export function VariantsSection() {
  const scrollToShop = () => {
    document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="variants"
      className="relative py-24 lg:py-32 bg-background section-divider"
      data-ocid="variants.section"
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
            The Collection
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter">
            Choose Your <span className="gradient-gold-text">Brew</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {VARIANTS.map((variant, i) => (
            <motion.div
              key={variant.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              className="relative rounded-lg overflow-hidden group cursor-pointer"
              style={{
                background: variant.isBlue
                  ? "oklch(0.10 0.015 263)"
                  : "oklch(0.12 0 0)",
                border: variant.isBlue
                  ? "1px solid oklch(0.62 0.16 263 / 0.6)"
                  : "1px solid oklch(0.72 0.15 86 / 0.35)",
                boxShadow: variant.isBlue
                  ? "0 0 40px oklch(0.62 0.16 263 / 0.15), 0 8px 24px oklch(0 0 0 / 0.4)"
                  : "0 8px 24px oklch(0 0 0 / 0.4)",
              }}
              data-ocid={`variants.card.${i + 1}`}
            >
              {/* Badge */}
              {variant.badge && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest font-display"
                  style={{
                    background: variant.isBlue
                      ? "oklch(0.62 0.16 263 / 0.2)"
                      : "oklch(0.72 0.15 86 / 0.15)",
                    border: variant.isBlue
                      ? "1px solid oklch(0.62 0.16 263 / 0.5)"
                      : "1px solid oklch(0.72 0.15 86 / 0.4)",
                    color: variant.isBlue
                      ? "oklch(0.78 0.14 263)"
                      : "oklch(0.78 0.13 86)",
                  }}
                >
                  {variant.badge}
                </div>
              )}

              <div className="p-8 pt-12">
                {/* Can visual */}
                <div className="flex justify-center mb-8">
                  <img
                    src={variant.imgSrc}
                    alt={variant.imgAlt}
                    className="object-contain"
                    style={{ maxHeight: 260 }}
                  />
                </div>

                {/* Variant name */}
                <h3
                  className="font-display font-black text-2xl tracking-tight mb-1"
                  style={{
                    color: variant.isBlue
                      ? "oklch(0.82 0.14 263)"
                      : "oklch(0.9 0.12 86)",
                  }}
                >
                  {variant.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 font-body">
                  {variant.tagline}
                </p>

                {/* Attributes */}
                <ul className="space-y-2 mb-8">
                  {variant.attrs.map((attr) => (
                    <li
                      key={attr}
                      className="flex items-center gap-2 text-sm font-body text-muted-foreground"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          background: variant.isBlue
                            ? "oklch(0.62 0.16 263)"
                            : "oklch(0.72 0.15 86)",
                        }}
                      />
                      {attr}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={scrollToShop}
                  className="w-full py-3 rounded-sm font-display font-bold text-sm uppercase tracking-widest transition-smooth"
                  style={
                    variant.isBlue
                      ? {
                          background: "oklch(0.62 0.16 263 / 0.15)",
                          border: "1px solid oklch(0.62 0.16 263 / 0.6)",
                          color: "oklch(0.82 0.14 263)",
                        }
                      : {
                          background: "oklch(0.65 0.15 89)",
                          color: "oklch(0.08 0 0)",
                        }
                  }
                  data-ocid={`variants.shop_button.${i + 1}`}
                >
                  Shop {variant.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
