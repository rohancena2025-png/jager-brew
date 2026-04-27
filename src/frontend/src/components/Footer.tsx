import { Separator } from "@/components/ui/separator";
import { SiInstagram, SiTiktok, SiX, SiYoutube } from "react-icons/si";

const SOCIAL_LINKS = [
  { icon: SiInstagram, label: "Instagram", href: "#" },
  { icon: SiX, label: "X (Twitter)", href: "#" },
  { icon: SiTiktok, label: "TikTok", href: "#" },
  { icon: SiYoutube, label: "YouTube", href: "#" },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Variants", href: "#variants" },
  { label: "Why Jager Brew", href: "#why" },
  { label: "Shop", href: "#shop" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "jagerbrew.com",
  );

  return (
    <footer className="bg-card border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Brand */}
          <div className="flex-1 max-w-sm">
            <img
              src="/assets/brand/logo.png"
              alt="Jager Brew"
              className="h-12 w-auto mb-3"
            />
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Premium ready-to-drink cold coffee. Crafted for bold taste,
              long-lasting energy, and the premium lifestyle you live.
            </p>
            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-smooth"
                  data-ocid={`footer.${label.toLowerCase().replace(/\s.+/, "")}_link`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    data-ocid={`footer.${label.toLowerCase().replace(/\s/g, "_")}_link`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">
              Get In Touch
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@jagerbrew.com"
                  className="hover:text-primary transition-smooth"
                >
                  hello@jagerbrew.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:trade@jagerbrew.com"
                  className="hover:text-primary transition-smooth"
                >
                  trade@jagerbrew.com
                </a>
              </li>
              <li className="text-muted-foreground/60 text-xs pt-1">
                For retail &amp; distribution inquiries
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-border/30" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-muted-foreground">
          <p>© {year} Jager Brew. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
