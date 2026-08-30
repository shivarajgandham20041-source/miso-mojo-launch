import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Clock, g as MapPin, j as ArrowRight, l as ShoppingBag, m as Navigation, o as Star } from "../_libs/lucide-react.mjs";
import { t as branches } from "./branches-DG0o6Hdc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/branches-Btrqlmlx.js
var import_jsx_runtime = require_jsx_runtime();
var ZOMATO = "https://www.zomato.com/hyderabad/miso-mojo-moosapet";
var SWIGGY = "https://www.swiggy.com/restaurants/miso-mojo-moosapet-hyderabad";
var COMING_SOON = [
	{
		name: "Miso Mojo — KPHB Colony",
		area: "KPHB, Hyderabad",
		eta: "Coming Soon"
	},
	{
		name: "Miso Mojo — Kukatpally",
		area: "Kukatpally, Hyderabad",
		eta: "Coming Soon"
	},
	{
		name: "Miso Mojo — Miyapur",
		area: "Miyapur, Hyderabad",
		eta: "Coming Soon"
	}
];
function BranchesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background font-sans text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden py-24 border-b border-border",
				style: { background: "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.45 0.20 22 / 0.18) 0%, transparent 65%), oklch(0.09 0.008 260)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 text-center space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "OUR LOCATIONS" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-japan-ramen text-5xl sm:text-7xl font-black text-foreground",
							children: [
								"Find a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fire-gradient",
									children: "Miso Mojo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Near You"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground max-w-xl mx-auto font-sans leading-relaxed",
							children: "Freshly brewed broths, hand-rolled sushi & Korean street snacks — served daily from 6 PM at our Hyderabad outlets."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 border-b border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 space-y-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold tracking-widest text-gold uppercase font-sans",
						children: "// NOW OPEN"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-black text-foreground mt-1",
						children: "Live Outlets"
					})] }), branches.map((branch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 gap-8 rounded-3xl border border-border bg-surface overflow-hidden shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden min-h-[280px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: branch.image,
									alt: branch.imageAlt,
									className: "w-full h-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0",
									style: { background: "linear-gradient(to right, transparent 50%, oklch(0.12 0.010 255) 100%)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-4 left-4 flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-extrabold text-white shadow-lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-white animate-pulse" }), "NOW OPEN"]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 flex flex-col justify-between space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-extrabold tracking-widest text-gold uppercase font-sans",
										children: ["Branch 0", i + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl font-black text-foreground mt-1",
										children: branch.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground font-sans mt-2 leading-relaxed",
										children: branch.seoIntro
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3 text-xs font-sans",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												branch.addressLines.map((l, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-muted-foreground",
													children: l
												}, j)),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-muted-foreground",
													children: [
														branch.city,
														", ",
														branch.state,
														" ",
														branch.postalCode
													]
												}),
												branch.plusCode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-gold/70 mt-0.5 font-mono text-[10px]",
													children: ["📌 ", branch.plusCode]
												})
											] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-4 h-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-muted-foreground",
												children: ["Daily ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "6:00 PM – 11:00 PM"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 text-gold fill-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "4.5 ★"
												}), " on Google \xA0·\xA0 44 Reviews"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap gap-2 pt-1",
											children: [
												branch.dineIn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold",
													children: "Dine-in ✓"
												}),
												branch.takeaway && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold",
													children: "Takeaway ✓"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold",
													children: "Online Delivery ✓"
												})
											]
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: ZOMATO,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1.5 rounded-xl bg-[#CB202D] text-white px-5 py-2.5 text-xs font-extrabold shadow-lg hover:brightness-110 transition-all",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-3.5 h-3.5" }), " Zomato"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: SWIGGY,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1.5 rounded-xl bg-[#FC8019] text-white px-5 py-2.5 text-xs font-extrabold shadow-lg hover:brightness-110 transition-all",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-3.5 h-3.5" }), " Swiggy"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: branch.googleMapsUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1.5 rounded-xl border border-gold/30 bg-gold/10 text-gold px-5 py-2.5 text-xs font-extrabold hover:bg-gold hover:text-obsidian transition-all",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "w-3.5 h-3.5" }), " Directions"]
									})
								]
							})]
						})]
					}, branch.slug))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 border-b border-border",
				style: { background: "oklch(0.12 0.010 255)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold tracking-widest text-gold/60 uppercase font-sans",
							children: "// EXPANDING SOON"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl font-black text-foreground mt-1",
							children: "Coming to Your Neighbourhood"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-3 gap-6",
						children: COMING_SOON.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-dashed border-gold/20 bg-surface/50 p-8 space-y-3 relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-4 right-4 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-extrabold",
									children: b.eta
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-4xl",
									children: "🗾"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-black text-foreground",
									children: b.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground font-sans",
									children: b.area
								})
							]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 bg-background text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-xl px-6 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl font-black text-foreground",
							children: "Want Miso Mojo in Your City?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground font-sans",
							children: "We are actively scouting new locations across Hyderabad and beyond. Stay tuned!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-2 rounded-2xl bg-gold text-obsidian px-8 py-4 text-sm font-extrabold hover:brightness-110 transition-all shadow-lg",
							children: ["Back to Home ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { BranchesPage as component };
