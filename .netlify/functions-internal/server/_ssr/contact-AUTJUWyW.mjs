import { t as restaurant } from "./restaurant-DfSQTBEj.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Clock, g as MapPin, h as MessageCircle, j as ArrowRight, l as ShoppingBag } from "../_libs/lucide-react.mjs";
import { n as primaryBranch } from "./branches-DG0o6Hdc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-AUTJUWyW.js
var import_jsx_runtime = require_jsx_runtime();
var FAQS = [
	{
		q: "What are your opening hours?",
		a: "We are open every day from 6:00 PM to 11:00 PM — including weekends and public holidays."
	},
	{
		q: "Do you offer home delivery?",
		a: "Yes! We deliver through Zomato and Swiggy. Order from our store page on either app."
	},
	{
		q: "Is there a dine-in option?",
		a: "Yes. We have seating at IDL Lake Food Courts. Walk-ins welcome — no reservation needed."
	},
	{
		q: "Do you have vegetarian options?",
		a: "Absolutely. We have a full vegetarian menu including Veg Ramen, Paneer Sushi Rolls, Cheese Corndogs, and Tofu Rice Bowls."
	},
	{
		q: "Is your food FSSAI certified?",
		a: `Yes. Our FSSAI License number is ${restaurant.fssai.replace("FSSAI Lic. No. ", "")}.`
	},
	{
		q: "Can I place a bulk / corporate order?",
		a: "Yes! Reach out via Zomato or Swiggy for bulk orders. We're happy to accommodate group orders with advance notice."
	},
	{
		q: "Do you have spicy options?",
		a: "Yes — our Devil Spicy Ramen range is the hottest on the menu. Rated 🔥🔥🔥 — not for the faint-hearted!"
	},
	{
		q: "Do you take online table reservations?",
		a: "Currently we operate as a walk-in counter. No reservation required. Just show up from 6 PM!"
	}
];
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background font-sans text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden py-24 border-b border-border",
				style: { background: "radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.45 0.20 22 / 0.18) 0%, transparent 65%), oklch(0.09 0.008 260)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 text-center space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4" }), " GET IN TOUCH"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-japan-ramen text-5xl sm:text-7xl font-black text-foreground",
							children: [
								"We'd Love to",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fire-gradient",
									children: "Hear From You"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground max-w-lg mx-auto font-sans leading-relaxed",
							children: "Questions about our menu? Want to know our hours? Need to find us on the map? We've got you covered."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 border-b border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-surface p-8 space-y-5 hover:border-gold/40 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-5 h-5 text-gold" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-black text-foreground",
									children: "Visit Our Counter"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 text-xs text-muted-foreground font-sans space-y-1 leading-relaxed",
									children: [
										primaryBranch.addressLines.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: l }, i)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
											primaryBranch.city,
											", ",
											primaryBranch.state,
											" ",
											primaryBranch.postalCode
										] }),
										primaryBranch.plusCode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-gold/70 font-mono mt-2",
											children: ["📌 ", primaryBranch.plusCode]
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: primaryBranch.googleMapsUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 text-xs font-bold text-gold hover:underline",
									children: ["Open in Google Maps ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-surface p-8 space-y-5 hover:border-gold/40 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-5 h-5 text-gold" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-black text-foreground",
								children: "Opening Hours"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 text-xs font-sans space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Monday – Sunday" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground font-bold",
											children: "6:00 PM – 11:00 PM"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dine-in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-emerald-400 font-bold",
											children: "Open ✓"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Takeaway" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-emerald-400 font-bold",
											children: "Open ✓"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Online Delivery" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-emerald-400 font-bold",
											children: "Open ✓"
										})]
									})
								]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-surface p-8 space-y-5 hover:border-gold/40 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-5 h-5 text-gold" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-black text-foreground",
									children: "Order Online"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground font-sans leading-relaxed",
									children: "We deliver hot & fresh via Zomato and Swiggy to Moosapet, Kukatpally, KPHB and nearby areas."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://www.zomato.com/hyderabad/miso-mojo-moosapet",
										target: "_blank",
										rel: "noreferrer",
										className: "flex items-center gap-2 w-full rounded-xl bg-[#CB202D] text-white px-4 py-2.5 text-xs font-extrabold hover:brightness-110 transition-all",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-4 h-4" }), " Order on Zomato"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://www.swiggy.com/restaurants/miso-mojo-moosapet-hyderabad",
										target: "_blank",
										rel: "noreferrer",
										className: "flex items-center gap-2 w-full rounded-xl bg-[#FC8019] text-white px-4 py-2.5 text-xs font-extrabold hover:brightness-110 transition-all",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-4 h-4" }), " Order on Swiggy"]
									})]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-0 border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-6 pb-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl overflow-hidden border border-border shadow-2xl h-[400px] relative bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							src: "https://maps.google.com/maps?q=IDL+Lake+Food+Courts+Moosapet+Hyderabad&output=embed",
							width: "100%",
							height: "100%",
							style: {
								border: 0,
								filter: "invert(0.85) hue-rotate(180deg) saturate(0.7) brightness(0.9)"
							},
							allowFullScreen: true,
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade",
							title: "Miso Mojo Location Map"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-4 left-4 z-10 flex items-center gap-2 rounded-2xl border border-gold/40 bg-obsidian/95 px-4 py-2 backdrop-blur-md shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold text-foreground",
								children: "IDL Lake Food Courts, Moosapet"
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 border-b border-border",
				style: { background: "oklch(0.12 0.010 255)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-14 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold tracking-widest text-gold uppercase font-sans",
							children: "// COMMON QUESTIONS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl sm:text-5xl font-black text-foreground",
							children: "Frequently Asked"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: FAQS.map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "group rounded-2xl border border-border bg-surface p-6 cursor-pointer hover:border-gold/30 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								className: "flex items-center justify-between font-display text-lg font-black text-foreground list-none",
								children: [faq.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-4 text-gold group-open:rotate-45 transition-transform text-2xl leading-none",
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs text-muted-foreground font-sans leading-relaxed",
								children: faq.a
							})]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-12 bg-background text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-xl px-6 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground font-sans",
						children: restaurant.fssai
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-xs font-bold text-gold hover:underline",
							children: "← Back to Home"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "text-xs font-bold text-gold hover:underline",
							children: "Our Story →"
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { ContactPage as component };
