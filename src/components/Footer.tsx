import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MapPin, MessageCircle } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { branches, formatAddress } from "@/data/branches";

const icons = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  google: MapPin,
  whatsapp: MessageCircle,
};

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "Menu", to: "/menu" },
      { label: "About", to: "/about" },
      { label: "Locations", to: "/locations" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Eat",
    links: [
      { label: "Ramen", to: "/menu", search: { category: "ramen" } },
      { label: "Sushi", to: "/menu", search: { category: "sushi" } },
      { label: "Rice Bowls", to: "/menu", search: { category: "rice-bowls" } },
      { label: "Snacks", to: "/menu", search: { category: "snacks" } },
      { label: "Sandwiches", to: "/menu", search: { category: "sandwiches" } },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Reviews", to: "/reviews" },
      { label: "Order Online", to: "/locations" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms & Conditions", to: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink pb-24 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <p className="font-display text-3xl tracking-[0.1em] text-ivory">
              MISO<span className="text-primary">MOJO</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Ramen. Sushi. Korean-inspired cravings. Pure Mojo.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {restaurant.socials.map((s) => {
                const Icon = icons[s.platform];
                const shared =
                  "inline-flex size-11 items-center justify-center rounded-sm border border-border transition-colors";
                return (
                  <li key={s.platform}>
                    {s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className={`${shared} text-ivory hover:border-broth hover:text-broth`}
                      >
                        <Icon size={18} />
                      </a>
                    ) : (
                      <span
                        aria-label={`${s.label} — link coming soon`}
                        title={`${s.label} — coming soon`}
                        className={`${shared} cursor-default text-muted-foreground/50`}
                      >
                        <Icon size={18} />
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="font-display text-sm tracking-[0.24em] text-broth">{col.title}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      search={(l as { search?: unknown }).search as never}
                      className="text-sm text-ivory/70 transition-colors hover:text-broth"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t border-border pt-8 md:grid-cols-2">
          {branches.map((b) => (
            <div key={b.slug}>
              <h2 className="font-display text-sm tracking-[0.2em] text-ivory">{b.name}</h2>
              <address className="mt-2 not-italic text-sm text-muted-foreground">
                {formatAddress(b)}
              </address>
              <a
                href={b.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-broth hover:underline"
              >
                Get Directions →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{restaurant.fssai}</p>
          <p>© {new Date().getFullYear()} Miso Mojo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
