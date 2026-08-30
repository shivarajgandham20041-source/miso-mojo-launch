import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, ShoppingBag, Navigation, Phone, ExternalLink, Star, Utensils, CheckCircle2, ArrowRight } from "lucide-react";
import { branches } from "@/data/branches";
import { restaurant } from "@/data/restaurant";
import interiorImg from "@/assets/interior.jpg";
import chefImg from "@/assets/chef.jpg";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Our Branches — Miso Mojo | IDL Lake Food Courts, Moosapet, Hyderabad" },
      { name: "description", content: "Find Miso Mojo near you. Currently serving at IDL Lake Food Courts, Habeeb Nagar, Moosapet, Hyderabad. Order online or visit us for dine-in." },
    ],
  }),
  component: BranchesPage,
});

const ZOMATO = "https://www.zomato.com/hyderabad/miso-mojo-moosapet";
const SWIGGY  = "https://www.swiggy.com/restaurants/miso-mojo-moosapet-hyderabad";

// Planned future branches (coming soon)
const COMING_SOON = [
  { name: "Miso Mojo — KPHB Colony", area: "KPHB, Hyderabad", eta: "Coming Soon" },
  { name: "Miso Mojo — Kukatpally", area: "Kukatpally, Hyderabad", eta: "Coming Soon" },
  { name: "Miso Mojo — Miyapur", area: "Miyapur, Hyderabad", eta: "Coming Soon" },
];

function BranchesPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Page Hero */}
      <section className="relative overflow-hidden py-24 border-b border-border" style={{background:'radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.45 0.20 22 / 0.18) 0%, transparent 65%), oklch(0.09 0.008 260)'}}>
        <div className="mx-auto max-w-7xl px-6 text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold">
            <MapPin className="w-4 h-4" />
            <span>OUR LOCATIONS</span>
          </div>
          <h1 className="font-japan-ramen text-5xl sm:text-7xl font-black text-foreground">
            Find a <span className="text-fire-gradient">Miso Mojo</span><br />Near You
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto font-sans leading-relaxed">
            Freshly brewed broths, hand-rolled sushi &amp; Korean street snacks — served daily from 6 PM at our Hyderabad outlets.
          </p>
        </div>
      </section>

      {/* Live Branches */}
      <section className="py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 space-y-10">
          <div>
            <span className="text-xs font-bold tracking-widest text-gold uppercase font-sans">// NOW OPEN</span>
            <h2 className="font-display text-4xl font-black text-foreground mt-1">Live Outlets</h2>
          </div>

          {branches.map((branch, i) => (
            <div key={branch.slug} className="grid md:grid-cols-2 gap-8 rounded-3xl border border-border bg-surface overflow-hidden shadow-card">
              {/* Image */}
              <div className="relative overflow-hidden min-h-[280px]">
                <img src={branch.image} alt={branch.imageAlt} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{background:'linear-gradient(to right, transparent 50%, oklch(0.12 0.010 255) 100%)'}} />
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-extrabold text-white shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  NOW OPEN
                </div>
              </div>

              {/* Info */}
              <div className="p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-gold uppercase font-sans">Branch 0{i + 1}</span>
                    <h3 className="font-display text-3xl font-black text-foreground mt-1">{branch.name}</h3>
                    <p className="text-xs text-muted-foreground font-sans mt-2 leading-relaxed">{branch.seoIntro}</p>
                  </div>

                  <div className="space-y-3 text-xs font-sans">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        {branch.addressLines.map((l, j) => <p key={j} className="text-muted-foreground">{l}</p>)}
                        <p className="text-muted-foreground">{branch.city}, {branch.state} {branch.postalCode}</p>
                        {branch.plusCode && <p className="text-gold/70 mt-0.5 font-mono text-[10px]">📌 {branch.plusCode}</p>}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-muted-foreground">Daily <strong className="text-foreground">6:00 PM – 11:00 PM</strong></span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Star className="w-4 h-4 text-gold fill-gold shrink-0" />
                      <span className="text-muted-foreground"><strong className="text-foreground">4.5 ★</strong> on Google &nbsp;·&nbsp; 44 Reviews</span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {branch.dineIn && <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold">Dine-in ✓</span>}
                      {branch.takeaway && <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold">Takeaway ✓</span>}
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">Online Delivery ✓</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a href={ZOMATO} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#CB202D] text-white px-5 py-2.5 text-xs font-extrabold shadow-lg hover:brightness-110 transition-all">
                    <ShoppingBag className="w-3.5 h-3.5" /> Zomato
                  </a>
                  <a href={SWIGGY} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#FC8019] text-white px-5 py-2.5 text-xs font-extrabold shadow-lg hover:brightness-110 transition-all">
                    <ShoppingBag className="w-3.5 h-3.5" /> Swiggy
                  </a>
                  <a href={branch.googleMapsUrl} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-gold/30 bg-gold/10 text-gold px-5 py-2.5 text-xs font-extrabold hover:bg-gold hover:text-obsidian transition-all">
                    <Navigation className="w-3.5 h-3.5" /> Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 border-b border-border" style={{background:'oklch(0.12 0.010 255)'}}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest text-gold/60 uppercase font-sans">// EXPANDING SOON</span>
            <h2 className="font-display text-4xl font-black text-foreground mt-1">Coming to Your Neighbourhood</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {COMING_SOON.map((b, i) => (
              <div key={i} className="rounded-3xl border border-dashed border-gold/20 bg-surface/50 p-8 space-y-3 relative overflow-hidden">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-extrabold">{b.eta}</div>
                <div className="text-4xl">🗾</div>
                <h3 className="font-display text-2xl font-black text-foreground">{b.name}</h3>
                <p className="text-xs text-muted-foreground font-sans">{b.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background text-center">
        <div className="mx-auto max-w-xl px-6 space-y-5">
          <h2 className="font-display text-4xl font-black text-foreground">Want Miso Mojo in Your City?</h2>
          <p className="text-xs text-muted-foreground font-sans">We are actively scouting new locations across Hyderabad and beyond. Stay tuned!</p>
          <Link to="/" className="inline-flex items-center gap-2 rounded-2xl bg-gold text-obsidian px-8 py-4 text-sm font-extrabold hover:brightness-110 transition-all shadow-lg">
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
