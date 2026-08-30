/**
 * Reviews architecture.
 *
 * IMPORTANT: the entries below are clearly-labelled DEMO content, not real
 * Google reviews. `reviewsSource` stays "demo" until a verified Google
 * Business Profile / Places integration replaces `demoReviews` with live data.
 */

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  /** ISO date */
  date: string;
  source: "google" | "demo";
}

export const reviewsSource: "demo" | "google" = "demo";

export const reviewsDisclaimer = "Sample Customer Feedback — Demo Content";

export const demoReviews: Review[] = [
  {
    id: "demo-1",
    author: "Demo Guest A",
    rating: 5,
    text: "Placeholder feedback shown while the live Google reviews feed is being connected. Replace with verified reviews before launch.",
    date: "2026-01-12",
    source: "demo",
  },
  {
    id: "demo-2",
    author: "Demo Guest B",
    rating: 4,
    text: "Placeholder feedback shown while the live Google reviews feed is being connected. Replace with verified reviews before launch.",
    date: "2026-02-03",
    source: "demo",
  },
  {
    id: "demo-3",
    author: "Demo Guest C",
    rating: 5,
    text: "Placeholder feedback shown while the live Google reviews feed is being connected. Replace with verified reviews before launch.",
    date: "2026-02-21",
    source: "demo",
  },
];
