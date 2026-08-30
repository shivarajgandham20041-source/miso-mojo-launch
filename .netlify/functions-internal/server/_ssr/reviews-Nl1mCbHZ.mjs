import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Send, o as Star, u as ShieldCheck, w as CircleCheckBig } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews-Nl1mCbHZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var demoReviews = [
	{
		id: "demo-1",
		author: "Demo Guest A",
		rating: 5,
		text: "Placeholder feedback shown while the live Google reviews feed is being connected. Replace with verified reviews before launch.",
		date: "2026-01-12",
		source: "demo"
	},
	{
		id: "demo-2",
		author: "Demo Guest B",
		rating: 4,
		text: "Placeholder feedback shown while the live Google reviews feed is being connected. Replace with verified reviews before launch.",
		date: "2026-02-03",
		source: "demo"
	},
	{
		id: "demo-3",
		author: "Demo Guest C",
		rating: 5,
		text: "Placeholder feedback shown while the live Google reviews feed is being connected. Replace with verified reviews before launch.",
		date: "2026-02-21",
		source: "demo"
	}
];
function ReviewsPage() {
	const [filterRating, setFilterRating] = (0, import_react.useState)("all");
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [newReview, setNewReview] = (0, import_react.useState)({
		name: "",
		rating: 5,
		comment: "",
		dish: ""
	});
	const filteredReviews = filterRating === "all" ? demoReviews : demoReviews.filter((r) => r.rating === filterRating);
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background font-sans text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden py-24 border-b border-border",
				style: { background: "radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.45 0.20 22 / 0.22) 0%, transparent 65%), oklch(0.09 0.008 260)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 text-center space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 text-gold fill-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VERIFIED FOODIE FEEDBACK" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-japan-ramen text-5xl sm:text-7xl font-black text-foreground",
							children: ["Loved by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fire-gradient",
								children: "Hyderabad Foodies"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground max-w-xl mx-auto font-sans leading-relaxed",
							children: "See what ramen lovers, sushi enthusiasts, and night owls have to say about dining at Miso Mojo."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-12 border-b border-border bg-obsidian/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-6 grid sm:grid-cols-3 gap-6 items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 rounded-3xl border border-gold/30 bg-surface space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-5xl font-black text-gold block",
									children: "4.8"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-center gap-1 text-gold",
									children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 fill-gold text-gold" }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground font-sans",
									children: "Based on 150+ verified reviews"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 rounded-3xl border border-border bg-surface space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-3xl font-black text-white block",
									children: "Zomato & Swiggy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-emerald-400 font-bold block",
									children: "Top Rated Asian Outlet"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground font-sans",
									children: "98% Positive Order Satisfaction"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 rounded-3xl border border-border bg-surface space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-3xl font-black text-white block",
									children: "IDL Lake Favorite"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-gold font-bold block",
									children: "#1 Night Ramen Counter"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground font-sans",
									children: "Open Daily 6:00 PM – 11:00 PM"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-black text-foreground",
							children: "Customer Testimonials"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setFilterRating("all"),
								className: `px-4 py-2 rounded-xl border ${filterRating === "all" ? "bg-gold text-obsidian font-black" : "bg-surface border-border text-muted-foreground"}`,
								children: [
									"All Ratings (",
									demoReviews.length,
									")"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setFilterRating(5),
								className: `px-4 py-2 rounded-xl border ${filterRating === 5 ? "bg-gold text-obsidian font-black" : "bg-surface border-border text-muted-foreground"}`,
								children: "5 Stars ⭐⭐⭐⭐⭐"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: filteredReviews.map((rev, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-3xl border border-border bg-surface p-6 flex flex-col justify-between space-y-4 hover:border-gold/40 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center font-bold text-gold text-xs",
												children: rev.author[0]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-sm font-bold text-foreground block leading-none",
												children: rev.author
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground font-sans",
												children: rev.date
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[9px] font-bold text-emerald-400 flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3 h-3" }), " Verified"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-1 text-gold",
										children: [...Array(rev.rating)].map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3.5 h-3.5 fill-gold text-gold" }, idx))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground font-sans leading-relaxed",
										children: [
											"\"",
											rev.text,
											"\""
										]
									})
								]
							})
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 bg-obsidian/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-3xl px-6 rounded-3xl border border-border bg-surface p-8",
					children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center py-8 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-6 h-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold text-foreground",
								children: "Thank You for Your Feedback!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Your review has been submitted for moderation and will appear on the wall shortly."
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-black text-foreground",
								children: "Leave a Review"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground font-sans",
								children: "Dined with us at IDL Lake or ordered online? Share your experience!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-bold text-muted-foreground block mb-1",
									children: "Your Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "text",
									placeholder: "e.g. Priya N.",
									value: newReview.name,
									onChange: (e) => setNewReview({
										...newReview,
										name: e.target.value
									}),
									className: "w-full rounded-xl bg-obsidian border border-border px-4 py-2 text-xs text-foreground focus:border-gold outline-none"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-bold text-muted-foreground block mb-1",
									children: "Favorite Dish Ordered"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "e.g. Devil Spicy Ramen",
									value: newReview.dish,
									onChange: (e) => setNewReview({
										...newReview,
										dish: e.target.value
									}),
									className: "w-full rounded-xl bg-obsidian border border-border px-4 py-2 text-xs text-foreground focus:border-gold outline-none"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-bold text-muted-foreground block mb-1",
								children: "Rating"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: [
									1,
									2,
									3,
									4,
									5
								].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setNewReview({
										...newReview,
										rating: star
									}),
									className: `p-2 rounded-xl border text-xs font-bold transition-all ${newReview.rating >= star ? "border-gold text-gold bg-gold/10" : "border-border text-muted-foreground"}`,
									children: ["★ ", star]
								}, star))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-bold text-muted-foreground block mb-1",
								children: "Your Feedback"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								rows: 3,
								placeholder: "How was the broth, flavor, and service?",
								value: newReview.comment,
								onChange: (e) => setNewReview({
									...newReview,
									comment: e.target.value
								}),
								className: "w-full rounded-xl bg-obsidian border border-border px-4 py-2 text-xs text-foreground focus:border-gold outline-none resize-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "w-full rounded-xl bg-gold text-obsidian py-3 text-xs font-extrabold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" }), " Submit Review"]
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
export { ReviewsPage as component };
