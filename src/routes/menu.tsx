import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Flame,
  Leaf,
  Utensils,
  ShoppingBag,
  Star,
  Sparkles,
  Soup,
  ChefHat,
  Info,
  Check,
  ArrowRight,
} from "lucide-react";
import { menu, categories } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Full Menu — Miso Mojo | Japanese Ramen & Sushi Hyderabad" },
      { name: "description", content: "Explore our full menu of artisanal 8-hour broths, gourmet sushi, Korean cheese corndogs & Japanese sandwiches in Hyderabad." },
    ],
  }),
  component: FullMenuPage,
});

const BROTH_TYPES = [
  {
    name: "8-Hour Rich Tonkotsu Style",
    desc: "Simmered continuously for 8 hours with aromatics, kelp, and tare for maximum umami intensity.",
    flavor: "Creamy, Savory & Deep",
    spice: "Mild (Customizable)",
    bestFor: "Original Porkless Tonkotsu & Devil Spicy Ramen",
  },
  {
    name: "Red Miso Fusion Broth",
    desc: "A bold blend of fermented red miso paste, roasted garlic oil, and toasted sesame seeds.",
    flavor: "Rich, Earthy & Nutty",
    spice: "Medium Spice",
    bestFor: "Classic Miso Ramen & Veg Fusion Bowl",
  },
  {
    name: "Shoyu Umami Broth",
    desc: "Infused with aged Japanese soy sauce, dashi broth, and spring onions for a clean, refreshing broth.",
    flavor: "Light, Salty & Fragrant",
    spice: "Mild",
    bestFor: "Clear Shoyu Noodles & Chicken Dumplings",
  },
];

function FullMenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [dietFilter, setDietFilter] = useState<"all" | "veg" | "non-veg">("all");

  const filteredItems = menu.filter(item => {
    const matchesCat = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiet = dietFilter === "all" || (dietFilter === "veg" ? item.diet === "veg" : item.diet === "non-veg");
    return matchesCat && matchesSearch && matchesDiet;
  });

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 border-b border-border" style={{background:'radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.45 0.20 22 / 0.22) 0%, transparent 65%), oklch(0.09 0.008 260)'}}>
        <div className="mx-auto max-w-7xl px-6 text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold">
            <Soup className="w-4 h-4 text-gold" />
            <span>ARTISANAL JAPANESE CUISINE</span>
          </div>
          <h1 className="font-japan-ramen text-5xl sm:text-7xl font-black text-foreground">
            Crafted Broths &amp; <span className="text-fire-gradient">Master Recipes</span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto font-sans leading-relaxed">
            Every bowl of ramen, roll of sushi, and golden corndog is prepared fresh at our IDL Lake counter using authentic Japanese techniques and ingredients.
          </p>
        </div>
      </section>

      {/* Broth Guide */}
      <section className="py-16 border-b border-border bg-obsidian/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-bold tracking-widest text-gold uppercase font-sans">// OUR SIGNATURE BASE</span>
            <h2 className="font-display text-3xl font-black text-foreground">The Art of the Broth</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {BROTH_TYPES.map((b, i) => (
              <div key={i} className="rounded-3xl border border-gold/20 bg-surface/80 p-6 space-y-3 hover:border-gold/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-black text-sm">
                  0{i + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{b.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">{b.desc}</p>
                <div className="pt-2 border-t border-border/60 text-[11px] space-y-1">
                  <p><span className="text-gold font-bold">Profile:</span> {b.flavor}</p>
                  <p><span className="text-gold font-bold">Best Enjoyed In:</span> {b.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Menu Section */}
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-surface p-3 sm:p-4 rounded-3xl border border-border">
            {/* Category Tabs — Horizontal Scroll on Mobile */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full md:w-auto text-xs font-bold scroll-smooth">
              <button
                onClick={() => setActiveCategory("all")}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl transition-all shrink-0 ${
                  activeCategory === "all" ? "bg-gold text-obsidian font-black shadow-md" : "bg-surface border border-border text-muted-foreground hover:text-white"
                }`}
              >
                All Items ({menu.length})
              </button>
              {categories.map(c => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`whitespace-nowrap px-4 py-2.5 rounded-xl transition-all shrink-0 ${
                    activeCategory === c.id ? "bg-gold text-obsidian font-black shadow-md" : "bg-surface border border-border text-muted-foreground hover:text-white"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Diet Filter */}
            <div className="flex items-center gap-2 text-xs shrink-0 self-start md:self-auto">
              <button
                onClick={() => setDietFilter("all")}
                className={`px-3 py-1.5 rounded-lg border ${dietFilter === "all" ? "border-gold text-gold" : "border-border text-muted-foreground"}`}
              >
                All Diet
              </button>
              <button
                onClick={() => setDietFilter("veg")}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border ${dietFilter === "veg" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10" : "border-border text-muted-foreground"}`}
              >
                <Leaf className="w-3 h-3 text-emerald-400" /> Veg
              </button>
              <button
                onClick={() => setDietFilter("non-veg")}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border ${dietFilter === "non-veg" ? "border-rose-500 text-rose-400 bg-rose-500/10" : "border-border text-muted-foreground"}`}
              >
                <Utensils className="w-3 h-3 text-rose-400" /> Non-Veg
              </button>
            </div>
          </div>

          {/* Grid — 2 Columns on Mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {filteredItems.map(item => (
              <div key={item.id} className="group rounded-2xl sm:rounded-3xl border border-border bg-surface p-3 sm:p-6 flex flex-col justify-between hover:border-gold/40 transition-all hover:shadow-xl">
                <div>
                  <div className="relative aspect-square sm:aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4 bg-obsidian">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                      <span className={`inline-flex items-center justify-center p-1 sm:p-1.5 rounded-lg border backdrop-blur-md ${item.diet === "veg" ? "bg-emerald-950/80 border-emerald-500/50 text-emerald-400" : "bg-rose-950/80 border-rose-500/50 text-rose-400"}`}>
                        {item.diet === "veg" ? <Leaf className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Utensils className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-1 mb-1 sm:mb-2">
                    <span className="text-[9px] sm:text-[10px] font-mono text-gold uppercase tracking-widest truncate">{item.category}</span>
                    <span className="font-display text-xs sm:text-xl font-black text-gold shrink-0">{item.price ? `₹${item.price}` : "In Store"}</span>
                  </div>
                  <h3 className="font-display text-xs sm:text-xl font-bold text-white group-hover:text-gold transition-colors line-clamp-1">{item.name}</h3>
                  <p className="hidden sm:block mt-2 text-xs text-muted-foreground leading-relaxed font-sans line-clamp-2">{item.description}</p>
                </div>
                <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-border/80 flex items-center justify-between gap-1.5">
                  <a
                    href="https://www.zomato.com/hyderabad/miso-mojo-moosapet"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 rounded-xl bg-[#CB202D] text-white py-2 text-[10px] sm:text-xs font-extrabold hover:brightness-110 transition-all text-center"
                  >
                    <ShoppingBag className="w-3 h-3 shrink-0" /> Zomato
                  </a>
                  <a
                    href="https://www.swiggy.com/restaurants/miso-mojo-moosapet-hyderabad"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 rounded-xl bg-[#FC8019] text-white py-2 text-[10px] sm:text-xs font-extrabold hover:brightness-110 transition-all text-center"
                  >
                    <ShoppingBag className="w-3 h-3 shrink-0" /> Swiggy
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
