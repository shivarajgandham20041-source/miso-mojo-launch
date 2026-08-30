import { Link } from "@tanstack/react-router";
import { MapPin, Phone, UtensilsCrossed, ShoppingBag } from "lucide-react";
import { primaryBranch } from "@/data/branches";

/** Sticky app-like bottom navigation for mobile. */
export function MobileBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden"
    >
      <div className="grid grid-cols-4 items-stretch">
        <Link to="/menu" className="flex flex-col items-center gap-1 py-3 text-ivory/80">
          <UtensilsCrossed size={18} />
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">Menu</span>
        </Link>
        <Link to="/locations" className="flex flex-col items-center gap-1 py-3 text-ivory/80">
          <MapPin size={18} />
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">Stores</span>
        </Link>
        <a
          href={primaryBranch.phone ? `tel:${primaryBranch.phone}` : primaryBranch.googleMapsUrl}
          target={primaryBranch.phone ? undefined : "_blank"}
          rel={primaryBranch.phone ? undefined : "noreferrer"}
          className="flex flex-col items-center gap-1 py-3 text-ivory/80"
        >
          <Phone size={18} />
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">Call</span>
        </a>
        <Link
          to="/locations"
          className="flex flex-col items-center justify-center gap-1 bg-primary py-3 text-primary-foreground"
        >
          <ShoppingBag size={18} />
          <span className="text-[10px] font-bold uppercase tracking-[0.14em]">Order</span>
        </Link>
      </div>
    </nav>
  );
}
