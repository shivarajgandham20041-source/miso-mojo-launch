import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Navigation, ShoppingBag } from "lucide-react";
import { formatAddress, type Branch } from "@/data/branches";

export function LocationCard({ branch }: { branch: Branch }) {
  return (
    <article className="group overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-broth/50">
      <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
        <img
          src={branch.image}
          alt={branch.imageAlt}
          loading="lazy"
          decoding="async"
          width={1280}
          height={720}
          className="size-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="font-display text-xl tracking-wide text-ivory">{branch.name}</h3>
          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-broth">
            {branch.areaLabel}
          </p>
        </div>

        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <MapPin size={16} className="mt-0.5 shrink-0 text-broth" aria-hidden="true" />
            <address className="not-italic">
              {formatAddress(branch)}
              {branch.plusCode && (
                <span className="mt-1 block text-xs text-muted-foreground/70">
                  Plus Code: {branch.plusCode}
                </span>
              )}
            </address>
          </li>
          <li className="flex gap-3">
            <Clock size={16} className="mt-0.5 shrink-0 text-broth" aria-hidden="true" />
            <span>
              {branch.openingHours
                ? branch.openingHours.map((h) => `${h.days}: ${h.hours}`).join(" · ")
                : "Hours coming soon — check Google Maps for live timings"}
            </span>
          </li>
          <li className="flex gap-3">
            <Phone size={16} className="mt-0.5 shrink-0 text-broth" aria-hidden="true" />
            <span>
              {branch.phone ? (
                <a href={`tel:${branch.phone}`} className="hover:text-broth">
                  {branch.phone}
                </a>
              ) : (
                "Phone coming soon"
              )}
            </span>
          </li>
        </ul>

        <ul className="flex flex-wrap gap-2">
          {branch.dineIn && <Tag>Dine-in</Tag>}
          {branch.takeaway && <Tag>Takeaway</Tag>}
          {branch.orderingUrl && <Tag>Online ordering</Tag>}
        </ul>

        <div className="flex flex-wrap gap-2 border-t border-border pt-5">
          <a
            href={branch.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-crimson"
          >
            <Navigation size={14} /> Get Directions
          </a>
          {branch.orderingUrl ? (
            <a
              href={branch.orderingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-broth px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-broth transition-colors hover:bg-broth hover:text-broth-foreground"
            >
              <ShoppingBag size={14} /> Order Online
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              <ShoppingBag size={14} /> Ordering link coming soon
            </span>
          )}
          <Link
            to="/locations/$branch"
            params={{ branch: branch.slug }}
            className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-ivory transition-colors hover:border-broth hover:text-broth"
          >
            Branch Page
          </Link>
        </div>
      </div>
    </article>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-sm border border-border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ivory/70">
      {children}
    </li>
  );
}

export function BranchMap({ branch }: { branch: Branch }) {
  const query = encodeURIComponent(`${branch.name}, ${formatAddress(branch)}`);
  return (
    <div className="overflow-hidden rounded-sm border border-border">
      <iframe
        title={`Map showing ${branch.name}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[320px] w-full grayscale-[0.4] contrast-125 lg:h-[420px]"
      />
    </div>
  );
}
