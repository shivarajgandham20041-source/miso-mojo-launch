import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import { spiceLabels, type SpiceLevel } from "@/data/menu";

export function SpiceMeter({
  level,
  showLabel = true,
  size = 16,
  animated = false,
}: {
  level: SpiceLevel;
  showLabel?: boolean;
  size?: number;
  animated?: boolean;
}) {
  return (
    <div className="flex items-center gap-2" aria-label={`Spice level: ${spiceLabels[level]}`}>
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4].map((step) => (
          <Flame
            key={step}
            width={size}
            height={size}
            className={cn(
              "transition-colors",
              step <= level ? "text-primary" : "text-muted-foreground/30",
              animated && step <= level && level >= 3 && "animate-flame",
            )}
            style={animated ? { animationDelay: `${step * 90}ms` } : undefined}
            fill={step <= level ? "currentColor" : "none"}
          />
        ))}
      </span>
      {showLabel && (
        <span
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.18em]",
            level >= 4 ? "text-primary" : "text-muted-foreground",
          )}
        >
          {spiceLabels[level]}
        </span>
      )}
    </div>
  );
}

export function DietBadge({ diet }: { diet: "veg" | "non-veg" }) {
  const isVeg = diet === "veg";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em]",
        isVeg
          ? "border-matcha/50 text-matcha"
          : "border-primary/50 text-primary",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "block size-2 rounded-full",
          isVeg ? "bg-matcha" : "bg-primary",
        )}
      />
      {isVeg ? "Veg" : "Non-Veg"}
    </span>
  );
}
