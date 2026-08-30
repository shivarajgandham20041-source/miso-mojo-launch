import interiorImg from "@/assets/interior.jpg";

/**
 * Branches are first-class entities. Adding a new outlet = adding an object
 * here; the locator, location pages, sitemap and schema all pick it up.
 */
export interface Branch {
  /** URL slug -> /locations/<slug> */
  slug: string;
  name: string;
  areaLabel: string;
  addressLines: string[];
  locality: string;
  city: string;
  state: string;
  postalCode: string;
  plusCode: string | null;
  latitude: number | null;
  longitude: number | null;
  /** Verified phone number, else null ("Available at store"). */
  phone: string | null;
  whatsapp: string | null;
  /** Structured hours, null when not verified. */
  openingHours: { days: string; hours: string }[] | null;
  googleMapsUrl: string;
  /** Ordering platform link — configurable per branch. */
  orderingUrl: string | null;
  dineIn: boolean;
  takeaway: boolean;
  image: string;
  imageAlt: string;
  /** Short, unique, local-SEO copy for the branch page. */
  seoIntro: string;
}

export const branches: Branch[] = [
  {
    slug: "moosapet",
    name: "Miso Mojo — IDL Lake Food Courts",
    areaLabel: "Moosapet, Hyderabad",
    addressLines: ["209, Habeeb Nagar", "IDL Lake Food Courts", "Moosapet"],
    locality: "Moosapet",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500085",
    plusCode: "F9CP+3P Hyderabad, Telangana",
    latitude: null,
    longitude: null,
    phone: null,
    whatsapp: null,
    openingHours: null,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Miso+Mojo%2C+209+Habeeb+Nagar%2C+IDL+Lake+Food+Courts%2C+Moosapet%2C+Hyderabad%2C+Telangana+500085",
    orderingUrl: null,
    dineIn: true,
    takeaway: true,
    image: interiorImg,
    imageAlt:
      "Warmly lit Japanese ramen counter with red paper lanterns at Miso Mojo Moosapet",
    seoIntro:
      "Miso Mojo Moosapet is our ramen counter inside IDL Lake Food Courts, Habeeb Nagar — a short hop from Kukatpally, Balanagar and the Moosapet metro.",
  },
  {
    slug: "dlf-gachibowli",
    name: "Miso Mojo — DLF Cyber City",
    areaLabel: "DLF Gachibowli, Hyderabad",
    addressLines: ["Food Street, DLF Cyber City", "Gachibowli"],
    locality: "Gachibowli",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500032",
    plusCode: "FX38+2M Hyderabad, Telangana",
    latitude: null,
    longitude: null,
    phone: null,
    whatsapp: null,
    openingHours: null,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Miso+Mojo+DLF+Cyber+City+Gachibowli+Hyderabad",
    orderingUrl: null,
    dineIn: true,
    takeaway: true,
    image: interiorImg,
    imageAlt:
      "Modern Japanese noodle hub at DLF Gachibowli Food Street",
    seoIntro:
      "Serving techies and foodies at DLF Gachibowli Food Street — hot Japanese ramen, sushi rolls, & crunchy Korean street snacks.",
  },
  {
    slug: "vijayawada",
    name: "Miso Mojo — Benz Circle Food Hub",
    areaLabel: "Benz Circle, Vijayawada",
    addressLines: ["Benz Circle Food Court", "MG Road"],
    locality: "Benz Circle",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    postalCode: "520010",
    plusCode: "F922+8W Vijayawada, AP",
    latitude: null,
    longitude: null,
    phone: null,
    whatsapp: null,
    openingHours: null,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Miso+Mojo+Benz+Circle+Vijayawada",
    orderingUrl: null,
    dineIn: true,
    takeaway: true,
    image: interiorImg,
    imageAlt:
      "Vibrant Miso Mojo ramen container kiosk at Vijayawada Benz Circle",
    seoIntro:
      "Bringing authentic Japanese ramen, bao buns & boba teas to Benz Circle, Vijayawada.",
  },
];

export const primaryBranch = branches[0]!;

export function getBranch(slug: string): Branch | undefined {
  return branches.find((b) => b.slug === slug);
}

export function formatAddress(branch: Branch): string {
  return [
    ...branch.addressLines,
    `${branch.city}, ${branch.state} ${branch.postalCode}`,
  ].join(", ");
}
