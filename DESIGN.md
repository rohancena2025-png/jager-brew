# Design Brief

## Jager Brew – Premium Cold Brew Ecommerce

**Tone:** Premium, elite, energetic, nightlife-inspired. Bold confidence with refined restraint. Luxury beverage positioning.

**Differentiation:** Black-on-gold luxury aesthetic inspired by Red Bull x Starbucks Reserve x Jägermeister. Ultra-dark background creates maximum contrast. Metallic gold accents signal premium craftsmanship. Smooth cinematic animations elevate the product experience.

## Color Palette

| Token | OKLCH | Purpose |
|-------|-------|---------|
| background | 0.08 0 0 | Ultra-black canvas (dark mode only) |
| foreground | 0.95 0 0 | Bright white, maximum contrast |
| primary | 0.65 0.15 89 | Metallic gold — accents, highlights, CTAs |
| secondary | 0.18 0 0 | Deep charcoal — elevated surfaces, cards |
| accent | 0.62 0.16 263 | Electric blue — Extra Caffeine variant only |
| destructive | 0.55 0.22 25 | Deep red — warnings, secondary CTAs |

## Typography

| Tier | Font | Usage |
|------|------|-------|
| Display | Bricolage Grotesque | Hero titles, section headings — bold, modern, geometric |
| Body | DM Sans | Product descriptions, testimonials — clean, highly readable |
| Mono | JetBrains Mono | Technical details, pricing — precision and tech credibility |

**Type Scale:** 12px → 14px → 16px → 18px → 24px → 32px → 48px. Hierarchy through weight (500 body, 600 display) and size.

## Elevation & Depth

| Surface | OKLCH | Depth | Use |
|---------|-------|-------|-----|
| Background | 0.08 0 0 | Base | Page canvas, full bleed |
| Card | 0.12 0 0 | +1 | Product cards, form containers |
| Popover | 0.15 0 0 | +2 | Modals, dropdowns, tooltips |
| Elevated | – | +3 | Hero sections, floating CTAs (shadow: 0 20px 25px) |

**Shadows:** `card: 0 10px 20px rgba(0,0,0,0.25)`, `elevated: 0 20px 25px rgba(0,0,0,0.3)`, `gold-glow: 0 0 30px oklch(var(--primary) / 0.15)`.

## Structural Zones

| Zone | Background | Border | Pattern |
|------|-----------|--------|---------|
| Header | 0.12 0 0 | 1px primary/20% | Sticky, minimal logo + nav, gold bottom border |
| Hero | 0.08 0 0 | None | Full-viewport, dramatic lighting, animated fade-in |
| Section | 0.08 0 0 | Alternating subtle | Generous vertical padding (64px–96px), grid layout |
| Card | 0.12 0 0 | 1px gold/15% | Rounded 4px, shadow-card, hover lift + gold pulse |
| Footer | 0.12 0 0 | 1px border/top | Minimal, centered, social links gold on hover |

## Component Patterns

- **CTA Buttons:** Filled gold bg, black text, rounded 4px, hover scale 1.05 + gold-glow shadow
- **Product Cards:** Dark card with gold border, glossy product mockup, price in gold, Shop Now button
- **Testimonials:** Quote, author name, gold star rating, card surface
- **Lifestyle Grid:** 4-column on desktop, 2-column mobile, image + overlay text, gold accent on hover
- **Forms:** Black inputs with gold focus ring, white text, gold labels

## Motion & Animation

| Animation | Duration | Easing | Trigger |
|-----------|----------|--------|---------|
| fade-in | 600ms | ease-out | Page load, section scroll-in |
| slide-up | 500ms | ease-out | Card entrance, CTA reveal |
| pulse-gold | 2s | cubic-bezier(0.4,0,0.6,1) loop | Product card hover, featured product |
| transition-smooth | 300ms | cubic-bezier(0.4,0,0.2,1) | All interactive elements |

**Choreography:** Hero title fades in (0–600ms), tagline slides up (200–700ms), nav appears (100–500ms). Product cards stagger entrance on section scroll.

## Spacing & Rhythm

- **Padding:** Section 64–96px vertical, 24px horizontal (mobile 16px)
- **Gap:** Grid 24px (mobile 16px), flex 12px
- **Radius:** 4px cards, 0px raw edges on hero
- **Density:** Generous white space, premium minimalism — less is more

## Mobile-First

- Hero: Stack text center, image full-width
- Grid: 1-column → 2-column (md) → 3-column (lg) → 4-column (xl)
- Typography: Scale down display by 20%, body scale 90%
- Navigation: Hamburger menu on sm, sticky, gold accent on active

## Signature Detail

**Gold metallic gradient text** on hero tagline — "Bold Taste. Pure Energy." — creates luxury shimmer. **Glossy product can mockups** with cinematic lighting (simulated via CSS gradients + shadows). **Smooth 0.3s transitions** on all hover states. **Blue accent exclusively on Extra Caffeine variant** — never elsewhere, reinforcing premium differentiation.

## Constraints

- No purple, pink, or generic tech colors
- No bouncy animations — only smooth, premium easing
- Dark mode only — no light theme (brand integrity)
- Gold chroma capped at 0.15 (metallic, not neon)
- Always use OKLCH tokens, never raw hex or RGB
