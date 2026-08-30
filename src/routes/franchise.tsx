import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  TrendingUp,
  Award,
  DollarSign,
  ShieldCheck,
  CheckCircle,
  Send,
  Sparkles,
  MapPin,
  Flame,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise Opportunities — Miso Mojo | Partner With Us" },
      { name: "description", content: "Own a Miso Mojo Japanese Ramen & Sushi franchise. Low setup cost, high ROI Asian QSR street food model with standardized central prep & training." },
    ],
  }),
  component: FranchisePage,
});

const FRANCHISE_MODELS = [
  {
    title: "Lake / Mall Kiosk Model",
    area: "150 – 300 Sq. Ft.",
    investment: "₹12L – ₹18L",
    payback: "12 – 15 Months",
    desc: "Compact high-footfall counter model optimized for food courts, lakefronts, and high streets with minimal kitchen footprint.",
    features: [
      "Plug & play electric ramen brother setup",
      "Corndog deep fryer & sushi prep bar",
      "Low manpower (2-3 trained staff)",
      "High daily order throughput",
    ],
    recommended: "POPULAR FOR HIGH STREETS",
  },
  {
    title: "Dine-In QSR Restaurant",
    area: "600 – 1,200 Sq. Ft.",
    investment: "₹25L – ₹35L",
    payback: "18 – 24 Months",
    desc: "Full Japanese cyberpunk/manga themed dining experience with neon aesthetic, bar seating, and expanded kitchen.",
    features: [
      "Complete brand interior layout design",
      "Custom ramen bowl servingware & neon decor",
      "Cocktail / Mocktail pairing bar space",
      "Full delivery & dine-in operations",
    ],
    recommended: "FLAGSHIP DINE-IN MODEL",
  },
  {
    title: "Delivery Cloud Kitchen",
    area: "200 – 400 Sq. Ft.",
    investment: "₹10L – ₹15L",
    payback: "10 – 14 Months",
    desc: "Delivery-first model designed for high-density tech hubs with instant Zomato & Swiggy integration.",
    features: [
      "Optimized thermal soup packaging tech",
      "Dual brand delivery integration",
      "Centralized ingredient supply chain",
      "Rapid launch within 3 weeks",
    ],
    recommended: "LOW CAPEX ENTRY",
  },
];

const WHY_US = [
  {
    icon: Flame,
    title: "Standardized 8-Hour Broth Base",
    desc: "No master chef required. Our proprietary broth paste and tare concentrates ensure consistent taste across all locations.",
  },
  {
    icon: TrendingUp,
    title: "High Margin Culinary Category",
    desc: "Asian street food, ramen, and Korean corndogs carry exceptionally high gross profit margins (65%+).",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Operational Support",
    desc: "From location approval to staff recruitment, supply chain delivery, and launch marketing campaigns.",
  },
  {
    icon: Award,
    title: "Trending Gen-Z & Anime Aesthetic",
    desc: "Strong social media draw with viral cheese-pull corndogs and Japanese neon visual identity.",
  },
];

function FranchisePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    budget: "₹15L - ₹25L",
    experience: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 border-b border-border" style={{background:'radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.45 0.20 22 / 0.22) 0%, transparent 65%), oklch(0.09 0.008 260)'}}>
        <div className="mx-auto max-w-7xl px-6 text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold">
            <Building2 className="w-4 h-4 text-gold" />
            <span>BUSINESS OPPORTUNITIES</span>
          </div>
          <h1 className="font-japan-ramen text-5xl sm:text-7xl font-black text-foreground">
            Expand the Mojo: <span className="text-fire-gradient">Franchise Program</span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
            Partner with Hyderabad's fastest growing Japanese ramen &amp; Asian street food brand. Proven unit economics, high margins, and complete operational guidance.
          </p>
        </div>
      </section>

      {/* Why Franchise */}
      <section className="py-20 border-b border-border bg-obsidian/40">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold tracking-widest text-gold uppercase font-sans">// THE ADVANTAGE</span>
            <h2 className="font-display text-4xl font-black text-foreground">Why Partner With Miso Mojo?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((w, i) => {
              const Icon = w.icon;
              return (
                <div key={i} className="rounded-3xl border border-border bg-surface p-6 space-y-3 hover:border-gold/40 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{w.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Franchise Models */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold tracking-widest text-gold uppercase font-sans">// BUSINESS MODELS</span>
            <h2 className="font-display text-4xl font-black text-foreground">Choose Your Investment Scale</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {FRANCHISE_MODELS.map((m, i) => (
              <div key={i} className="rounded-3xl border border-border bg-surface p-8 flex flex-col justify-between hover:border-gold/50 transition-all hover:shadow-2xl space-y-6">
                <div className="space-y-4">
                  <span className="inline-block rounded-full bg-gold/10 border border-gold/30 px-3 py-1 text-[10px] font-black text-gold uppercase">{m.recommended}</span>
                  <h3 className="font-display text-2xl font-black text-foreground">{m.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">{m.desc}</p>
                  
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border text-center bg-obsidian/60 p-3 rounded-2xl">
                    <div>
                      <span className="text-[10px] text-muted-foreground block">Area</span>
                      <span className="text-xs font-bold text-gold">{m.area}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground block">Investment</span>
                      <span className="text-xs font-bold text-gold">{m.investment}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground block">Payback</span>
                      <span className="text-xs font-bold text-gold">{m.payback}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-gold block uppercase tracking-wider">Key Inclusions:</span>
                    {m.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const el = document.getElementById("franchise-form");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full rounded-2xl bg-gold text-obsidian px-4 py-3 text-xs font-black hover:brightness-110 transition-all"
                >
                  Apply for {m.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="franchise-form" className="py-20 bg-obsidian/60">
        <div className="mx-auto max-w-3xl px-6 rounded-3xl border border-gold/30 bg-surface p-8 sm:p-10">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl font-black text-foreground">Franchise Inquiry Received!</h3>
              <p className="text-xs text-muted-foreground font-sans max-w-md mx-auto leading-relaxed">
                Thank you for your interest in Miso Mojo. Our expansion director will get in touch with you within 24 hours to share the franchise prospectus and financial model.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-center space-y-2 mb-6">
                <span className="text-xs font-bold text-gold uppercase tracking-widest">// PARTNER WITH US</span>
                <h3 className="font-display text-3xl font-black text-foreground">Submit Franchise Application</h3>
                <p className="text-xs text-muted-foreground font-sans">Fill out the form below to receive the detailed brand dossier &amp; ROI projection.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-muted-foreground block mb-1">Full Name *</label>
                  <input
                    required type="text" placeholder="e.g. Vikram Verma"
                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl bg-obsidian border border-border px-4 py-2.5 text-xs text-foreground focus:border-gold outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground block mb-1">Phone Number *</label>
                  <input
                    required type="tel" placeholder="+91 98765 43210"
                    value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl bg-obsidian border border-border px-4 py-2.5 text-xs text-foreground focus:border-gold outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-muted-foreground block mb-1">Email Address *</label>
                  <input
                    required type="email" placeholder="vikram@example.com"
                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl bg-obsidian border border-border px-4 py-2.5 text-xs text-foreground focus:border-gold outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground block mb-1">Proposed City / Area *</label>
                  <input
                    required type="text" placeholder="e.g. Gachibowli, Hyderabad"
                    value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="w-full rounded-xl bg-obsidian border border-border px-4 py-2.5 text-xs text-foreground focus:border-gold outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-muted-foreground block mb-1">Investment Budget</label>
                  <select
                    value={formData.budget} onChange={e => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full rounded-xl bg-obsidian border border-border px-4 py-2.5 text-xs text-foreground focus:border-gold outline-none"
                  >
                    <option value="₹10L - ₹15L">₹10L – ₹15L (Cloud Kitchen)</option>
                    <option value="₹15L - ₹25L">₹15L – ₹25L (Kiosk Model)</option>
                    <option value="₹25L - ₹40L">₹25L – ₹40L (Dine-In QSR)</option>
                    <option value="₹40L+">₹40L+ (Multi-Unit Master)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground block mb-1">F&amp;B Experience</label>
                  <select
                    value={formData.experience} onChange={e => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full rounded-xl bg-obsidian border border-border px-4 py-2.5 text-xs text-foreground focus:border-gold outline-none"
                  >
                    <option value="First-Time Entrepreneur">First-Time Entrepreneur</option>
                    <option value="Existing Restaurant Owner">Existing Restaurant Owner</option>
                    <option value="Franchise Operator">Franchise Operator</option>
                    <option value="Investor">Investor</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-muted-foreground block mb-1">Additional Information / Questions</label>
                <textarea
                  rows={3} placeholder="Tell us about your background or target site availability..."
                  value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-xl bg-obsidian border border-border px-4 py-2.5 text-xs text-foreground focus:border-gold outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-gold via-amber-400 to-gold text-obsidian px-6 py-4 text-xs font-black tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gold/20 uppercase"
              >
                <Send className="w-4 h-4" /> Request Franchise Prospectus
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
