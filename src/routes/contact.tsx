import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Clock, ShoppingBag, Mail, MessageCircle, Navigation } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { primaryBranch } from "@/data/branches";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Miso Mojo | Hyderabad Japanese Ramen Restaurant" },
      { name: "description", content: "Contact Miso Mojo at IDL Lake Food Courts, Moosapet, Hyderabad. Open daily 6–11 PM. Order online via Zomato & Swiggy." },
    ],
  }),
  component: ContactPage,
});

const FAQS = [
  { q: "What are your opening hours?", a: "We are open every day from 6:00 PM to 11:00 PM — including weekends and public holidays." },
  { q: "Do you offer home delivery?", a: "Yes! We deliver through Zomato and Swiggy. Order from our store page on either app." },
  { q: "Is there a dine-in option?", a: "Yes. We have seating at IDL Lake Food Courts. Walk-ins welcome — no reservation needed." },
  { q: "Do you have vegetarian options?", a: "Absolutely. We have a full vegetarian menu including Veg Ramen, Paneer Sushi Rolls, Cheese Corndogs, and Tofu Rice Bowls." },
  { q: "Is your food FSSAI certified?", a: `Yes. Our FSSAI License number is ${restaurant.fssai.replace("FSSAI Lic. No. ", "")}.` },
  { q: "Can I place a bulk / corporate order?", a: "Yes! Reach out via Zomato or Swiggy for bulk orders. We're happy to accommodate group orders with advance notice." },
  { q: "Do you have spicy options?", a: "Yes — our Devil Spicy Ramen range is the hottest on the menu. Rated 🔥🔥🔥 — not for the faint-hearted!" },
  { q: "Do you take online table reservations?", a: "Currently we operate as a walk-in counter. No reservation required. Just show up from 6 PM!" },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 border-b border-border" style={{background:'radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.45 0.20 22 / 0.18) 0%, transparent 65%), oklch(0.09 0.008 260)'}}>
        <div className="mx-auto max-w-7xl px-6 text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold">
            <MessageCircle className="w-4 h-4" /> GET IN TOUCH
          </div>
          <h1 className="font-japan-ramen text-5xl sm:text-7xl font-black text-foreground">
            We'd Love to<br /><span className="text-fire-gradient">Hear From You</span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto font-sans leading-relaxed">
            Questions about our menu? Want to know our hours? Need to find us on the map? We've got you covered.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Visit Us */}
          <div className="rounded-3xl border border-border bg-surface p-8 space-y-5 hover:border-gold/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-black text-foreground">Visit Our Counter</h3>
              <div className="mt-3 text-xs text-muted-foreground font-sans space-y-1 leading-relaxed">
                {primaryBranch.addressLines.map((l, i) => <p key={i}>{l}</p>)}
                <p>{primaryBranch.city}, {primaryBranch.state} {primaryBranch.postalCode}</p>
                {primaryBranch.plusCode && <p className="text-gold/70 font-mono mt-2">📌 {primaryBranch.plusCode}</p>}
              </div>
            </div>
            <a href={primaryBranch.googleMapsUrl} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-gold hover:underline">
              Open in Google Maps <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Hours */}
          <div className="rounded-3xl border border-border bg-surface p-8 space-y-5 hover:border-gold/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center">
              <Clock className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-black text-foreground">Opening Hours</h3>
              <div className="mt-3 text-xs font-sans space-y-2">
                <div className="flex justify-between text-muted-foreground">
                  <span>Monday – Sunday</span>
                  <span className="text-foreground font-bold">6:00 PM – 11:00 PM</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Dine-in</span><span className="text-emerald-400 font-bold">Open ✓</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Takeaway</span><span className="text-emerald-400 font-bold">Open ✓</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Online Delivery</span><span className="text-emerald-400 font-bold">Open ✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Online */}
          <div className="rounded-3xl border border-border bg-surface p-8 space-y-5 hover:border-gold/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-black text-foreground">Order Online</h3>
              <p className="mt-2 text-xs text-muted-foreground font-sans leading-relaxed">We deliver hot &amp; fresh via Zomato and Swiggy to Moosapet, Kukatpally, KPHB and nearby areas.</p>
            </div>
            <div className="space-y-2">
              <a href="https://www.zomato.com/hyderabad/miso-mojo-moosapet" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 w-full rounded-xl bg-[#CB202D] text-white px-4 py-2.5 text-xs font-extrabold hover:brightness-110 transition-all">
                <ShoppingBag className="w-4 h-4" /> Order on Zomato
              </a>
              <a href="https://www.swiggy.com/restaurants/miso-mojo-moosapet-hyderabad" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 w-full rounded-xl bg-[#FC8019] text-white px-4 py-2.5 text-xs font-extrabold hover:brightness-110 transition-all">
                <ShoppingBag className="w-4 h-4" /> Order on Swiggy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map placeholder (Google Maps iframe) */}
      <section className="py-0 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pb-0">
          <div className="rounded-3xl overflow-hidden border border-border shadow-2xl h-[400px] relative bg-surface">
            <iframe
              src="https://maps.google.com/maps?q=IDL+Lake+Food+Courts+Moosapet+Hyderabad&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.85) hue-rotate(180deg) saturate(0.7) brightness(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Miso Mojo Location Map"
            />
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-2xl border border-gold/40 bg-obsidian/95 px-4 py-2 backdrop-blur-md shadow-xl">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-xs font-bold text-foreground">IDL Lake Food Courts, Moosapet</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b border-border" style={{background:'oklch(0.12 0.010 255)'}}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold tracking-widest text-gold uppercase font-sans">// COMMON QUESTIONS</span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground">Frequently Asked</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-surface p-6 cursor-pointer hover:border-gold/30 transition-colors">
                <summary className="flex items-center justify-between font-display text-lg font-black text-foreground list-none">
                  {faq.q}
                  <span className="ml-4 text-gold group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="mt-4 text-xs text-muted-foreground font-sans leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FSSAI Footer Note */}
      <section className="py-12 bg-background text-center">
        <div className="mx-auto max-w-xl px-6 space-y-3">
          <p className="text-xs text-muted-foreground font-sans">{restaurant.fssai}</p>
          <div className="flex justify-center gap-4">
            <Link to="/" className="text-xs font-bold text-gold hover:underline">← Back to Home</Link>
            <Link to="/about" className="text-xs font-bold text-gold hover:underline">Our Story →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
