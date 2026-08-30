import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, Camera, Heart, Instagram, MapPin, Eye, X } from "lucide-react";

import heroRamen from "@/assets/hero-ramen.jpg";
import spicyRamenImg from "@/assets/spicy-ramen.jpg";
import vegRamenImg from "@/assets/veg-ramen.jpg";
import sushiImg from "@/assets/sushi.jpg";
import corndogImg from "@/assets/corndog.jpg";
import koreanChickenImg from "@/assets/korean-chicken.jpg";
import riceBowlImg from "@/assets/rice-bowl.jpg";
import sandwichImg from "@/assets/sandwich.jpg";
import interiorImg from "@/assets/interior.jpg";
import chefImg from "@/assets/chef.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Vibe — Miso Mojo | Photo Highlights Hyderabad" },
      { name: "description", content: "Visual feast of Miso Mojo Japanese culinary creations, lake view dining ambiance, broth prep, and customer highlights at IDL Lake Food Courts." },
    ],
  }),
  component: GalleryPage,
});

const GALLERY_ITEMS = [
  { id: 1, title: "Artisanal Tonkotsu Ramen", category: "dishes", img: heroRamen, tag: "Signature Dish" },
  { id: 2, title: "Devil Spicy Red Chilli Broth", category: "dishes", img: spicyRamenImg, tag: "Spicy Favorite" },
  { id: 3, title: "Gourmet Salmon & Tuna Rolls", category: "dishes", img: sushiImg, tag: "Hand Rolled" },
  { id: 4, title: "Lakeside Counter Ambiance", category: "ambiance", img: interiorImg, tag: "IDL Lake View" },
  { id: 5, title: "Master Chef Plating Ramen", category: "prep", img: chefImg, tag: "Craftsmanship" },
  { id: 6, title: "Golden Mozzarella Corndog", category: "dishes", img: corndogImg, tag: "Cheese Pull" },
  { id: 7, title: "Pure Veg Mushroom Broth", category: "dishes", img: vegRamenImg, tag: "Plant Based" },
  { id: 8, title: "Korean Spicy Crispy Chicken", category: "dishes", img: koreanChickenImg, tag: "Street Snack" },
  { id: 9, title: "Japanese Teriyaki Rice Bowl", category: "dishes", img: riceBowlImg, tag: "Comfort Bowl" },
  { id: 10, title: "Japanese Katsu Sandwich", category: "dishes", img: sandwichImg, tag: "Artisan Bread" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");
  const [activeImage, setActiveImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filtered = filter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.category === filter);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 border-b border-border" style={{background:'radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.45 0.20 22 / 0.22) 0%, transparent 65%), oklch(0.09 0.008 260)'}}>
        <div className="mx-auto max-w-7xl px-6 text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold">
            <Camera className="w-4 h-4 text-gold" />
            <span>VISUAL FEAST &amp; VIBE</span>
          </div>
          <h1 className="font-japan-ramen text-5xl sm:text-7xl font-black text-foreground">
            Atmosphere &amp; <span className="text-fire-gradient">Culinary Art</span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto font-sans leading-relaxed">
            Take a visual tour of our handcrafted bowls, sushi creation, and vibrant lake view dining atmosphere at IDL Lake Food Courts.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          {/* Filters */}
          <div className="flex justify-center gap-2 text-xs font-bold">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2.5 rounded-full border transition-all ${filter === "all" ? "bg-gold text-obsidian font-black border-gold" : "bg-surface text-muted-foreground border-border hover:text-white"}`}
            >
              All Moments ({GALLERY_ITEMS.length})
            </button>
            <button
              onClick={() => setFilter("dishes")}
              className={`px-5 py-2.5 rounded-full border transition-all ${filter === "dishes" ? "bg-gold text-obsidian font-black border-gold" : "bg-surface text-muted-foreground border-border hover:text-white"}`}
            >
              Signature Dishes
            </button>
            <button
              onClick={() => setFilter("ambiance")}
              className={`px-5 py-2.5 rounded-full border transition-all ${filter === "ambiance" ? "bg-gold text-obsidian font-black border-gold" : "bg-surface text-muted-foreground border-border hover:text-white"}`}
            >
              Ambiance
            </button>
            <button
              onClick={() => setFilter("prep")}
              className={`px-5 py-2.5 rounded-full border transition-all ${filter === "prep" ? "bg-gold text-obsidian font-black border-gold" : "bg-surface text-muted-foreground border-border hover:text-white"}`}
            >
              Kitchen Craft
            </button>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(item => (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className="group relative rounded-3xl overflow-hidden border border-border bg-surface aspect-[4/3] cursor-pointer hover:border-gold/50 transition-all hover:shadow-2xl"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="inline-block rounded-full bg-gold/20 border border-gold/40 px-2.5 py-0.5 text-[9px] font-black text-gold uppercase tracking-wider">{item.tag}</span>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-gold transition-colors">{item.title}</h3>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-obsidian/80 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-md p-6 flex items-center justify-center" onClick={() => setActiveImage(null)}>
          <div className="relative max-w-4xl w-full rounded-3xl overflow-hidden border border-gold/40 bg-surface p-4" onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveImage(null)} className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-obsidian border border-border flex items-center justify-center text-white hover:text-gold">
              <X className="w-5 h-5" />
            </button>
            <img src={activeImage.img} alt={activeImage.title} className="w-full max-h-[70vh] object-cover rounded-2xl" />
            <div className="p-4 space-y-1">
              <span className="text-xs text-gold font-bold">{activeImage.tag}</span>
              <h3 className="font-display text-2xl font-black text-white">{activeImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
