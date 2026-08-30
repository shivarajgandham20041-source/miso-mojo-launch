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
      "Warmly lit Japanese ramen counter with red paper lanterns at Miso Mojo",
    seoIntro:
      "Miso Mojo Moosapet is our ramen counter inside IDL Lake Food Courts, Habeeb Nagar — a short hop from Kukatpally, Balanagar and the Moosapet metro. Come in for devil spicy ramen, Korean fried chicken, corndogs, rice bowls and sushi rolls, or take it away.",
  },
];

export const primaryBranch = branches[0];

export function getBranch(slug: string): Branch | undefined {
  return branches.find((b) => b.slug === slug);
}

export function formatAddress(branch: Branch): string {
  return [
    ...branch.addressLines,
    `${branch.city}, ${branch.state} ${branch.postalCode}`,
  ].join(", ");
}
