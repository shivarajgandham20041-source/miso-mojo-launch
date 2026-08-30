/**
 * Central restaurant configuration.
 * Every externally-facing fact lives here so it can later be driven by a CMS
 * or admin dashboard without touching component code.
 * `null` means: not verified yet — the UI renders a graceful fallback.
 */

export type SocialPlatform =
  | "instagram"
  | "facebook"
  | "youtube"
  | "google"
  | "whatsapp";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  /** Official URL. Keep null until verified — never invent one. */
  url: string | null;
}

export const restaurant = {
  name: "Miso Mojo",
  tagline: "Ramen. Reimagined.",
  category: "Japanese Restaurant · Ramen · Asian Fusion",
  shortDescription:
    "Bold broths. Slurpy noodles. Korean-Japanese inspired comfort food made for serious cravings.",
  longDescription:
    "Miso Mojo brings together bold Japanese-inspired ramen, Korean-style flavors, crispy snacks, rice bowls, sushi and more — crafted for people who like their comfort food with a little attitude.",
  city: "Hyderabad",
  state: "Telangana",
  country: "IN",
  cuisines: ["Japanese", "Ramen", "Korean", "Asian Fusion", "Sushi"],
  priceRange: "₹200–₹400 per person",
  priceRangeSchema: "₹₹",
  /** Verified from the Google Business Profile. Do not inflate. */
  rating: {
    value: 4.5,
    count: 44,
    source: "Google",
  },
  fssai: "FSSAI Lic. No. 23624032004921",
  /** Not verified yet — keep null rather than inventing an address-wide email. */
  email: null as string | null,
  services: {
    dineIn: true,
    takeaway: true,
    onlineOrdering: true,
  },
  socials: [
    { platform: "instagram", label: "Instagram", url: null },
    { platform: "facebook", label: "Facebook", url: null },
    { platform: "youtube", label: "YouTube", url: null },
    {
      platform: "google",
      label: "Google Business Profile",
      url: "https://www.google.com/maps/search/?api=1&query=Miso+Mojo+Moosapet+Hyderabad",
    },
    { platform: "whatsapp", label: "WhatsApp", url: null },
  ] as SocialLink[],
} as const;

/** Configurable promotion banner. Set `active: false` to hide it entirely. */
export const promotion = {
  active: true,
  eyebrow: "Limited Drop",
  title: "Mojo Combo Drop",
  description: "Your ramen deserves a side.",
  primaryCta: { label: "Explore Combos", href: "/menu" },
  secondaryCta: { label: "Order Now", href: "/locations" },
};

export const UNPRICED_LABEL = "Price available at store";
