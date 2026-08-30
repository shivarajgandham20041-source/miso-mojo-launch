import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Clock, MapPin, Award, Heart, Flame, Leaf, ChefHat, ArrowRight, Sparkles, ShoppingBag } from "lucide-react";
import chefImg from "@/assets/chef.jpg";
import interiorImg from "@/assets/interior.jpg";
import heroRamen from "@/assets/hero-ramen.jpg";
import sushiImg from "@/assets/sushi.jpg";
import { restaurant } from "@/data/restaurant";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Miso Mojo | Our Story, Mission & Values" },
      { name: "description", content: "Learn about Miso Mojo — Hyderabad's premium Japanese ramen and sushi bar. Our story, our chefs, and our passion for authentic Japanese street dining." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: "🍜", title: "Authentic Broths", desc: "Every broth is simmered for a minimum of 8 hours using Japanese dashi stock, imported kombu and bonito flakes — no shortcuts, ever." },
  { icon: "🌿", title: "Fresh Ingredients", desc: "We source vegetables, paneer, proteins and sushi rice fresh daily. Our menu changes with what's best and freshest at market." },
  { icon: "🔥", title: "Bold Flavours", desc: "From devil-spicy habanero ramen to sweet-umami unagi sushi rolls — we craft dishes for people who want their food to mean something." },
  { icon: "❤️", title: "Made With Heart", desc: "We are a small, passionate team. Every bowl, every roll and every corndog is made by hands that genuinely love Japanese food culture." },
];

const TIMELINE = [
  { year: "2024", title: "The Idea", desc: "Two food-obsessed friends discover authentic ramen culture and decide Hyderabad deserves a proper Japanese noodle experience." },
  { year: "2025", title: "First Kitchen", desc: "Miso Mojo opens its debut counter at IDL Lake Food Courts, Moosapet — 15 dishes, one steaming pot, and a lot of heart." },
  { year: "2025", title: "The Buzz Begins", desc: "Word spreads. Devil Spicy Ramen goes viral on local food groups. We hit 4.5 stars on Google with 44 reviews in months." },
  { year: "2026", title: "Growing Family", desc: "Menu expands to 30+ dishes. Sushi rolls, Korean corndogs, rice bowls and more. New branches in planning across Hyderabad." },
];

const TEAM = [
  { name: "The Ramen Chef", role: "Head of Broths & Noodles", emoji: "👨‍🍳", desc: "10+ years studying Japanese ramen culture. Trained in tonkotsu and miso broth techniques." },
  { name: "The Sushi Artisan", role: "Sushi & Korean Snacks", emoji: "🍱", desc: "Specialises in Osaka-style sushi rolls and perfecting the Korean cheese corndog pull." },
  { name: "The Founder", role: "Visionary & Host", emoji: "🏮", desc: "Passionate about bringing authentic Asian street dining to Hyderabad's food scene." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden py-28 border-b border-border" style={{background:'radial-gradient(ellipse 90% 60% at 50% 0%, oklch(0.45 0.20 22 / 0.20) 0%, transparent 65%), oklch(0.09 0.008 260)'}}>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold">
              <Sparkles className="w-4 h-4" /> OUR STORY
            </div>
            <h1 className="font-japan-ramen text-5xl sm:text-7xl font-black text-foreground leading-none">
              Born from a<br />
              <span className="text-fire-gradient">Love of Ramen</span>
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg font-sans">
              {restaurant.longDescription}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/branches" className="inline-flex items-center gap-2 rounded-2xl bg-gold text-obsidian px-6 py-3.5 text-xs font-extrabold hover:brightness-110 transition-all shadow-lg">
                <MapPin className="w-4 h-4" /> Visit Us
              </Link>
              <Link to="/" className="inline-flex items-center gap-2 rounded-2xl border border-gold/30 bg-gold/10 text-gold px-6 py-3.5 text-xs font-bold hover:bg-gold hover:text-obsidian transition-all">
                View Menu <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Chef photo */}
          <div className="relative group">
            <div className="absolute -inset-3 rounded-3xl border border-gold/15 pointer-events-none" />
            <div className="rounded-3xl overflow-hidden border border-gold/30 shadow-2xl">
              <img src={chefImg} alt="Miso Mojo head chef preparing ramen" className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-4 z-10 flex items-center gap-3 rounded-2xl border border-gold/40 bg-obsidian/95 px-5 py-3 backdrop-blur-md shadow-xl">
              <div className="flex text-gold text-lg">{"★".repeat(4)}<span className="text-muted-foreground">★</span></div>
              <div>
                <p className="text-xs font-black text-foreground">4.5 Google Rating</p>
                <p className="text-[10px] text-muted-foreground">44 Verified Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold tracking-widest text-gold uppercase font-sans">// OUR PHILOSOPHY</span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="rounded-3xl border border-border bg-surface p-7 space-y-4 hover:border-gold/40 transition-colors group">
                <span className="text-4xl">{v.icon}</span>
                <h3 className="font-display text-2xl font-black text-foreground group-hover:text-gold transition-colors">{v.title}</h3>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY TIMELINE */}
      <section className="py-20 border-b border-border" style={{background:'oklch(0.12 0.010 255)'}}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold tracking-widest text-gold uppercase font-sans">// OUR JOURNEY</span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground">The Miso Mojo Timeline</h2>
          </div>
          <div className="relative space-y-0">
            {/* Vertical line */}
            <div className="absolute left-[26px] top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-crimson/30 to-transparent" />
            {TIMELINE.map((t, i) => (
              <div key={i} className="relative flex gap-8 pb-12">
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full border-2 border-gold bg-surface flex items-center justify-center">
                  <span className="font-display text-xs font-black text-gold">{t.year}</span>
                </div>
                <div className="pt-3 space-y-2">
                  <h3 className="font-display text-2xl font-black text-foreground">{t.title}</h3>
                  <p className="text-xs text-muted-foreground font-sans leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold tracking-widest text-gold uppercase font-sans">// THE PEOPLE</span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground">Meet Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {TEAM.map((m, i) => (
              <div key={i} className="rounded-3xl border border-border bg-surface p-8 text-center space-y-4 hover:border-gold/40 hover:glow-gold transition-all group">
                <div className="text-6xl">{m.emoji}</div>
                <div>
                  <h3 className="font-display text-2xl font-black text-foreground group-hover:text-gold transition-colors">{m.name}</h3>
                  <p className="text-[11px] text-gold font-bold uppercase tracking-wider font-sans mt-1">{m.role}</p>
                </div>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-16 border-b border-border bg-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          <div className="text-center">
            <h2 className="font-display text-4xl font-black text-foreground">Life at Miso Mojo</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: heroRamen, alt: "Steaming ramen bowl" },
              { src: sushiImg, alt: "Fresh sushi rolls" },
              { src: chefImg, alt: "Chef at work" },
              { src: interiorImg, alt: "Restaurant interior" },
            ].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-square group border border-border">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-background">
        <div className="mx-auto max-w-xl px-6 space-y-5">
          <div className="text-5xl">🍜</div>
          <h2 className="font-display text-4xl font-black text-foreground">Ready to Experience the Mojo?</h2>
          <p className="text-xs text-muted-foreground font-sans">Visit us at IDL Lake Food Courts, Moosapet — or order hot ramen delivered to your doorstep via Zomato &amp; Swiggy.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href="https://www.zomato.com/hyderabad/miso-mojo-moosapet" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#CB202D] text-white px-7 py-4 text-sm font-extrabold hover:brightness-110 transition-all shadow-xl">
              <ShoppingBag className="w-4 h-4" /> Order on Zomato
            </a>
            <a href="https://www.swiggy.com/restaurants/miso-mojo-moosapet-hyderabad" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#FC8019] text-white px-7 py-4 text-sm font-extrabold hover:brightness-110 transition-all shadow-xl">
              <ShoppingBag className="w-4 h-4" /> Order on Swiggy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
