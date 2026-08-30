import { ArrowUpRight } from "lucide-react";
import { UNPRICED_LABEL } from "@/data/restaurant";
import type { MenuItem } from "@/data/menu";
import { DietBadge, SpiceMeter } from "@/components/SpiceMeter";

export function MenuCard({
  item,
  onOpen,
  priority = false,
}: {
  item: MenuItem;
  onOpen: (item: MenuItem) => void;
  priority?: boolean;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-broth/50 hover:shadow-bowl">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          width={1024}
          height={768}
          className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent"
        />
        {item.spice >= 4 && (
          <span className="absolute left-3 top-3 rounded-sm bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground">
            Devil Mode
          </span>
        )}
        {item.mini && (
          <span className="absolute right-3 top-3 rounded-sm border border-border bg-background/70 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ivory backdrop-blur">
            Mini
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-tight tracking-wide text-ivory">
            {item.name}
          </h3>
          <DietBadge diet={item.diet} />
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        <div className="mt-auto space-y-4 pt-2">
          <SpiceMeter level={item.spice} />
          <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
            <span className="text-sm font-semibold text-gold">
              {item.price !== null ? `₹${item.price}` : UNPRICED_LABEL}
            </span>
            <button
              type="button"
              onClick={() => onOpen(item)}
              className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.18em] text-broth transition-colors hover:text-ivory"
            >
              View Details
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
