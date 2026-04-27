import { useEffect, useState } from "react";
import { Footer } from "./Footer";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Variants", href: "#variants" },
  { label: "Why", href: "#why" },
  { label: "Shop", href: "#shop" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground dark">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-effect shadow-elevated border-b border-primary/10"
            : "bg-transparent border-b border-transparent"
        }`}
        data-ocid="header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 group"
              data-ocid="header.logo_link"
            >
              <img
                src="/assets/brand/logo.png"
                alt="Jager Brew"
                className="h-10 w-auto"
              />
            </button>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-6 lg:gap-8"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  type="button"
                  key={label}
                  onClick={() => handleNavClick(href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth tracking-wide uppercase"
                  data-ocid={`header.${label.toLowerCase()}_link`}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleNavClick("#shop")}
                className="hidden sm:inline-flex items-center px-5 py-2 rounded-sm bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-smooth shadow-gold-glow"
                data-ocid="header.shop_cta_button"
              >
                Shop Now
              </button>

              {/* Mobile hamburger */}
              <button
                type="button"
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                data-ocid="header.mobile_menu_toggle"
              >
                <span
                  className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden glass-effect border-t border-primary/10"
            data-ocid="header.mobile_menu"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  type="button"
                  key={label}
                  onClick={() => handleNavClick(href)}
                  className="w-full text-left px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/20 rounded transition-smooth tracking-wide"
                  data-ocid={`header.mobile.${label.toLowerCase()}_link`}
                >
                  {label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNavClick("#shop")}
                className="mt-2 w-full px-5 py-3 rounded-sm bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest text-center transition-smooth"
                data-ocid="header.mobile.shop_cta_button"
              >
                Shop Now
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 bg-background" data-ocid="main.content">
        {children}
      </main>

      <Footer />
    </div>
  );
}
