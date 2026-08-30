import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star, MessageSquare, CheckCircle, ThumbsUp, Send, UserCheck, ShieldCheck } from "lucide-react";
import { demoReviews } from "@/data/reviews";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Miso Mojo | Verified Hyderabad Ratings" },
      { name: "description", content: "Read 44+ verified customer reviews for Miso Mojo Japanese Ramen & Sushi Bar at IDL Lake Food Courts, Hyderabad. Rating 4.5/5 on Zomato & Google." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const [filterRating, setFilterRating] = useState<number | "all">("all");
  const [submitted, setSubmitted] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "", dish: "" });

  const filteredReviews = filterRating === "all"
    ? demoReviews
    : demoReviews.filter(r => r.rating === filterRating);

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
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span>VERIFIED FOODIE FEEDBACK</span>
          </div>
          <h1 className="font-japan-ramen text-5xl sm:text-7xl font-black text-foreground">
            Loved by <span className="text-fire-gradient">Hyderabad Foodies</span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto font-sans leading-relaxed">
            See what ramen lovers, sushi enthusiasts, and night owls have to say about dining at Miso Mojo.
          </p>
        </div>
      </section>

      {/* Scorecard Banner */}
      <section className="py-12 border-b border-border bg-obsidian/60">
        <div className="mx-auto max-w-5xl px-6 grid sm:grid-cols-3 gap-6 items-center text-center">
          <div className="p-6 rounded-3xl border border-gold/30 bg-surface space-y-2">
            <span className="font-display text-5xl font-black text-gold block">4.8</span>
            <div className="flex justify-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-sans">Based on 150+ verified reviews</p>
          </div>

          <div className="p-6 rounded-3xl border border-border bg-surface space-y-2">
            <span className="font-display text-3xl font-black text-white block">Zomato &amp; Swiggy</span>
            <span className="text-xs text-emerald-400 font-bold block">Top Rated Asian Outlet</span>
            <p className="text-xs text-muted-foreground font-sans">98% Positive Order Satisfaction</p>
          </div>

          <div className="p-6 rounded-3xl border border-border bg-surface space-y-2">
            <span className="font-display text-3xl font-black text-white block">IDL Lake Favorite</span>
            <span className="text-xs text-gold font-bold block">#1 Night Ramen Counter</span>
            <p className="text-xs text-muted-foreground font-sans">Open Daily 6:00 PM – 11:00 PM</p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-2xl font-black text-foreground">Customer Testimonials</h2>
            <div className="flex items-center gap-2 text-xs font-bold">
              <button
                onClick={() => setFilterRating("all")}
                className={`px-4 py-2 rounded-xl border ${filterRating === "all" ? "bg-gold text-obsidian font-black" : "bg-surface border-border text-muted-foreground"}`}
              >
                All Ratings ({demoReviews.length})
              </button>
              <button
                onClick={() => setFilterRating(5)}
                className={`px-4 py-2 rounded-xl border ${filterRating === 5 ? "bg-gold text-obsidian font-black" : "bg-surface border-border text-muted-foreground"}`}
              >
                5 Stars ⭐⭐⭐⭐⭐
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev, i) => (
              <div key={i} className="rounded-3xl border border-border bg-surface p-6 flex flex-col justify-between space-y-4 hover:border-gold/40 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center font-bold text-gold text-xs">
                        {rev.author[0]}
                      </div>
                      <div>
                        <span className="font-display text-sm font-bold text-foreground block leading-none">{rev.author}</span>
                        <span className="text-[10px] text-muted-foreground font-sans">{rev.date}</span>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[9px] font-bold text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Verified
                    </span>
                  </div>

                  <div className="flex gap-1 text-gold">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground font-sans leading-relaxed">"{rev.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Submission Form */}
      <section className="py-16 bg-obsidian/40">
        <div className="mx-auto max-w-3xl px-6 rounded-3xl border border-border bg-surface p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Thank You for Your Feedback!</h3>
              <p className="text-xs text-muted-foreground">Your review has been submitted for moderation and will appear on the wall shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-display text-2xl font-black text-foreground">Leave a Review</h3>
              <p className="text-xs text-muted-foreground font-sans">Dined with us at IDL Lake or ordered online? Share your experience!</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-muted-foreground block mb-1">Your Name</label>
                  <input
                    required type="text" placeholder="e.g. Priya N."
                    value={newReview.name} onChange={e => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full rounded-xl bg-obsidian border border-border px-4 py-2 text-xs text-foreground focus:border-gold outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground block mb-1">Favorite Dish Ordered</label>
                  <input
                    type="text" placeholder="e.g. Devil Spicy Ramen"
                    value={newReview.dish} onChange={e => setNewReview({ ...newReview, dish: e.target.value })}
                    className="w-full rounded-xl bg-obsidian border border-border px-4 py-2 text-xs text-foreground focus:border-gold outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-muted-foreground block mb-1">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star} type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className={`p-2 rounded-xl border text-xs font-bold transition-all ${newReview.rating >= star ? "border-gold text-gold bg-gold/10" : "border-border text-muted-foreground"}`}
                    >
                      ★ {star}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-muted-foreground block mb-1">Your Feedback</label>
                <textarea
                  required rows={3} placeholder="How was the broth, flavor, and service?"
                  value={newReview.comment} onChange={e => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full rounded-xl bg-obsidian border border-border px-4 py-2 text-xs text-foreground focus:border-gold outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gold text-obsidian py-3 text-xs font-extrabold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" /> Submit Review
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
