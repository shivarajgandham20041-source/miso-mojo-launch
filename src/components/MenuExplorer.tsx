import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { categories, menu, type MenuCategory, type MenuItem } from "@/data/menu";
import { MenuCard } from "@/components/MenuCard";
import { MenuModal } from "@/components/MenuModal";
import { Reveal } from "@/components/Reveal";

type CategoryFilter = MenuCategory | "all";
type DietFilter = "all" | "veg" | "non-veg" | "spicy";

const dietFilters: { id: DietFilter; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "veg", label: "Veg" },
  { id: "non-veg", label: "Non-Veg" },
  { id: "spicy", label: "Spicy" },
];

export function MenuExplorer({
  initialCategory = "all",
}: {
  initialCategory?: CategoryFilter;
}) {
  const [category, setCategory] = useState<CategoryFilter>(initialCategory);
  const [diet, setDiet] = useState<DietFilter>("all");
  const [active, setActive] = useState<MenuItem | null>(null);

  const items = useMemo(
    () =>
      menu.filter((item) => {
        const matchCategory = category === "all" || item.category === category;
        const matchDiet =
          diet === "all" ||
          (diet === "spicy" ? item.spice >= 3 : item.diet === diet);
        return matchCategory && matchDiet;
      }),
    [category, diet],
  );

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-4 mb-10 border-y border-border bg-background/90 px-4 py-3 backdrop-blur-xl lg:top-20">
        <div
          role="tablist"
          aria-label="Menu categories"
          className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1"
        >
          {([{ id: "all", label: "All" }, ...categories] as { id: CategoryFilter; label: string }[]).map(
            (c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={category === c.id}
                onClick={() => setCategory(c.id)}
                className={cn(
                  "snap-start whitespace-nowrap rounded-sm border px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors",
                  category === c.id
                    ? "border-broth bg-broth text-broth-foreground"
                    : "border-border text-ivory/70 hover:border-broth/60 hover:text-broth",
                )}
              >
                {c.label}
              </button>
            ),
          )}
        </div>
        <div className="no-scrollbar mt-2 flex gap-2 overflow-x-auto">
          {dietFilters.map((d) => (
            <button
              key={d.id}
              type="button"
              aria-pressed={diet === d.id}
              onClick={() => setDiet(d.id)}
              className={cn(
                "whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] transition-colors",
                diet === d.id
                  ? "border-primary text-primary"
                  : "border-border text-muted-foreground hover:text-ivory",
              )}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {items.length} {items.length === 1 ? "dish" : "dishes"}
      </p>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal as="li" key={item.id} delay={(i % 3) * 90} className="h-full">
            <MenuCard item={item} onOpen={setActive} priority={i < 3} />
          </Reveal>
        ))}
      </ul>

      {items.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">
          Nothing matches those filters yet.
        </p>
      )}

      <MenuModal item={active} onClose={() => setActive(null)} />
    </div>
  );
}
