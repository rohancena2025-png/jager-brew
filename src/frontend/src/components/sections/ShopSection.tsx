import { motion } from "motion/react";
import { useState } from "react";

interface ShopProduct {
  id: string;
  name: string;
  tagline: string;
  price: string;
  isBlue: boolean;
  size: string;
  imgSrc: string;
  imgAlt: string;
}

const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: "original",
    name: "Jager Brew Original",
    tagline: "The Classic Bold Brew",
    price: "$4.99",
    isBlue: false,
    size: "250ml · Single Can",
    imgSrc: "/assets/brand/original-can.png",
    imgAlt: "Jager Brew Original",
  },
  {
    id: "sugar-free",
    name: "Jager Brew Sugar Free",
    tagline: "Zero Sugar, Zero Compromise",
    price: "$4.99",
    isBlue: false,
    size: "250ml · Single Can",
    imgSrc: "/assets/brand/sugar-free-can.png",
    imgAlt: "Jager Brew Sugar Free",
  },
  {
    id: "extra-caffeine",
    name: "Extra Caffeine",
    tagline: "Maximum Power Unleashed",
    price: "$5.99",
    isBlue: true,
    size: "250ml · Single Can",
    imgSrc: "/assets/brand/extra-caffeine-can.png",
    imgAlt: "Jager Brew Extra Caffeine",
  },
];

export function ShopSection() {
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  const handleAddToCart = (id: string) => {
    setAddedIds((prev) => new Set(prev).add(id));
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 2000);
  };

  return (
    <section
      id="shop"
      className="relative py-24 lg:py-32 bg-background section-divider"
      data-ocid="shop.section"
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
            Order Now
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter">
            Shop <span className="gradient-gold-text">Now</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SHOP_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              className="relative rounded-lg overflow-hidden flex flex-col"
              style={{
                background: product.isBlue
                  ? "linear-gradient(160deg, oklch(0.12 0.02 263), oklch(0.10 0.012 263))"
                  : "linear-gradient(160deg, oklch(0.14 0.005 89), oklch(0.11 0 0))",
                border: product.isBlue
                  ? "1px solid oklch(0.62 0.16 263 / 0.45)"
                  : "1px solid oklch(0.72 0.15 86 / 0.25)",
                boxShadow: product.isBlue
                  ? "0 0 50px oklch(0.62 0.16 263 / 0.12), 0 12px 32px oklch(0 0 0 / 0.4)"
                  : "0 12px 32px oklch(0 0 0 / 0.35)",
              }}
              data-ocid={`shop.card.${i + 1}`}
            >
              {/* Can display */}
              <div
                className="relative flex items-center justify-center pt-10 pb-8"
                style={{
                  background: product.isBlue
                    ? "radial-gradient(ellipse 60% 50% at 50% 60%, oklch(0.45 0.18 263 / 0.15), transparent)"
                    : "radial-gradient(ellipse 60% 50% at 50% 60%, oklch(0.65 0.15 86 / 0.12), transparent)",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={product.imgSrc}
                    alt={product.imgAlt}
                    className="object-contain mx-auto"
                    style={{ maxHeight: 200 }}
                  />
                </motion.div>
              </div>

              {/* Info */}
              <div className="px-6 pb-8 flex flex-col flex-1">
                <h3
                  className="font-display font-black text-xl tracking-tight mb-1"
                  style={{
                    color: product.isBlue
                      ? "oklch(0.80 0.14 263)"
                      : "oklch(0.88 0.12 86)",
                  }}
                >
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-1 font-body">
                  {product.tagline}
                </p>
                <p className="text-muted-foreground text-xs font-body mb-4">
                  {product.size}
                </p>

                <div className="flex items-center justify-between mb-5">
                  <span
                    className="font-display font-black text-3xl"
                    style={{
                      color: product.isBlue
                        ? "oklch(0.82 0.14 263)"
                        : "oklch(0.78 0.13 86)",
                    }}
                  >
                    {product.price}
                  </span>
                  <span className="text-xs text-muted-foreground font-body uppercase tracking-wider">
                    per can
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleAddToCart(product.id)}
                  className="mt-auto w-full py-3.5 rounded-sm font-display font-bold text-sm uppercase tracking-widest transition-smooth"
                  style={
                    product.isBlue
                      ? {
                          background: addedIds.has(product.id)
                            ? "oklch(0.62 0.16 263 / 0.3)"
                            : "oklch(0.62 0.16 263)",
                          color: "oklch(0.97 0.02 263)",
                          boxShadow: addedIds.has(product.id)
                            ? "none"
                            : "0 0 20px oklch(0.62 0.16 263 / 0.4)",
                        }
                      : {
                          background: addedIds.has(product.id)
                            ? "oklch(0.65 0.15 89 / 0.6)"
                            : "oklch(0.65 0.15 89)",
                          color: "oklch(0.08 0 0)",
                          boxShadow: addedIds.has(product.id)
                            ? "none"
                            : "0 0 20px oklch(0.72 0.15 86 / 0.35)",
                        }
                  }
                  data-ocid={`shop.add_to_cart_button.${i + 1}`}
                >
                  {addedIds.has(product.id) ? "✓ Added!" : "Add to Cart"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pack deals note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-muted-foreground text-sm mt-10 font-body"
        >
          🎁 Buy a 12-pack and save 20% — available in all variants. Contact us
          for bulk orders.
        </motion.p>
      </div>
    </section>
  );
}
