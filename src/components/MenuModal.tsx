import { Link } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UNPRICED_LABEL } from "@/data/restaurant";
import { categories, type MenuItem } from "@/data/menu";
import { DietBadge, SpiceMeter } from "@/components/SpiceMeter";

export function MenuModal({
  item,
  onClose,
}: {
  item: MenuItem | null;
  onClose: () => void;
}) {
  const category = categories.find((c) => c.id === item?.category);

  return (
    <Dialog open={item !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90dvh] overflow-y-auto border-border bg-popover p-0 sm:max-w-2xl">
        {item && (
          <>
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                decoding="async"
                width={1024}
                height={640}
                className="size-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-popover to-transparent"
              />
            </div>
            <div className="space-y-6 p-6 pt-0">
              <DialogHeader className="space-y-3 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <DietBadge diet={item.diet} />
                  <span className="rounded-sm border border-border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {category?.label}
                  </span>
                </div>
                <DialogTitle className="font-display text-3xl tracking-wide text-ivory">
                  {item.name}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  {item.description}
                </DialogDescription>
              </DialogHeader>

              <SpiceMeter level={item.spice} animated size={18} />

              <dl className="grid gap-5 border-t border-border pt-5 sm:grid-cols-2">
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-broth">
                    Ingredients
                  </dt>
                  <dd className="mt-2 text-sm text-muted-foreground">
                    {item.ingredients?.join(", ") ?? "Available at store"}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-broth">
                    Allergens
                  </dt>
                  <dd className="mt-2 text-sm text-muted-foreground">
                    {item.allergens?.join(", ") ?? "Please ask at store"}
                  </dd>
                </div>
              </dl>

              <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-lg font-semibold text-gold">
                  {item.price !== null ? `₹${item.price}` : UNPRICED_LABEL}
                </span>
                <Link
                  to="/locations"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-[12px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-crimson"
                >
                  Order This
                </Link>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
