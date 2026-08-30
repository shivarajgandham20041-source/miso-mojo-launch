import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as Award, O as Building2, b as Flame, d as Send, i as TrendingUp, u as ShieldCheck, w as CircleCheckBig } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/franchise-BjQGPuXi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FRANCHISE_MODELS = [
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
			"High daily order throughput"
		],
		recommended: "POPULAR FOR HIGH STREETS"
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
			"Full delivery & dine-in operations"
		],
		recommended: "FLAGSHIP DINE-IN MODEL"
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
			"Rapid launch within 3 weeks"
		],
		recommended: "LOW CAPEX ENTRY"
	}
];
var WHY_US = [
	{
		icon: Flame,
		title: "Standardized 8-Hour Broth Base",
		desc: "No master chef required. Our proprietary broth paste and tare concentrates ensure consistent taste across all locations."
	},
	{
		icon: TrendingUp,
		title: "High Margin Culinary Category",
		desc: "Asian street food, ramen, and Korean corndogs carry exceptionally high gross profit margins (65%+)."
	},
	{
		icon: ShieldCheck,
		title: "End-to-End Operational Support",
		desc: "From location approval to staff recruitment, supply chain delivery, and launch marketing campaigns."
	},
	{
		icon: Award,
		title: "Trending Gen-Z & Anime Aesthetic",
		desc: "Strong social media draw with viral cheese-pull corndogs and Japanese neon visual identity."
	}
];
function FranchisePage() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		city: "",
		budget: "₹15L - ₹25L",
		experience: "",
		notes: ""
	});
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "w-4 h-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BUSINESS OPPORTUNITIES" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-japan-ramen text-5xl sm:text-7xl font-black text-foreground",
							children: ["Expand the Mojo: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fire-gradient",
								children: "Franchise Program"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed",
							children: "Partner with Hyderabad's fastest growing Japanese ramen & Asian street food brand. Proven unit economics, high margins, and complete operational guidance."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 border-b border-border bg-obsidian/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 space-y-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold tracking-widest text-gold uppercase font-sans",
							children: "// THE ADVANTAGE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl font-black text-foreground",
							children: "Why Partner With Miso Mojo?"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
						children: WHY_US.map((w, i) => {
							const Icon = w.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-surface p-6 space-y-3 hover:border-gold/40 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-6 h-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-bold text-foreground",
										children: w.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground leading-relaxed font-sans",
										children: w.desc
									})
								]
							}, i);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 space-y-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold tracking-widest text-gold uppercase font-sans",
							children: "// BUSINESS MODELS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl font-black text-foreground",
							children: "Choose Your Investment Scale"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid lg:grid-cols-3 gap-8",
						children: FRANCHISE_MODELS.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-surface p-8 flex flex-col justify-between hover:border-gold/50 transition-all hover:shadow-2xl space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block rounded-full bg-gold/10 border border-gold/30 px-3 py-1 text-[10px] font-black text-gold uppercase",
										children: m.recommended
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl font-black text-foreground",
										children: m.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground leading-relaxed font-sans",
										children: m.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-3 gap-2 pt-4 border-t border-border text-center bg-obsidian/60 p-3 rounded-2xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground block",
												children: "Area"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-gold",
												children: m.area
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground block",
												children: "Investment"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-gold",
												children: m.investment
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground block",
												children: "Payback"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-gold",
												children: m.payback
											})] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-gold block uppercase tracking-wider",
											children: "Key Inclusions:"
										}), m.features.map((feat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-2 text-xs text-slate-300",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feat })]
										}, idx))]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									const el = document.getElementById("franchise-form");
									if (el) el.scrollIntoView({ behavior: "smooth" });
								},
								className: "w-full rounded-2xl bg-gold text-obsidian px-4 py-3 text-xs font-black hover:brightness-110 transition-all",
								children: ["Apply for ", m.title]
							})]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "franchise-form",
				className: "py-20 bg-obsidian/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-3xl px-6 rounded-3xl border border-gold/30 bg-surface p-8 sm:p-10",
					children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center py-12 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-8 h-8" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl font-black text-foreground",
								children: "Franchise Inquiry Received!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground font-sans max-w-md mx-auto leading-relaxed",
								children: "Thank you for your interest in Miso Mojo. Our expansion director will get in touch with you within 24 hours to share the franchise prospectus and financial model."
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center space-y-2 mb-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-gold uppercase tracking-widest",
										children: "// PARTNER WITH US"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl font-black text-foreground",
										children: "Submit Franchise Application"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground font-sans",
										children: "Fill out the form below to receive the detailed brand dossier & ROI projection."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-bold text-muted-foreground block mb-1",
									children: "Full Name *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "text",
									placeholder: "e.g. Vikram Verma",
									value: formData.name,
									onChange: (e) => setFormData({
										...formData,
										name: e.target.value
									}),
									className: "w-full rounded-xl bg-obsidian border border-border px-4 py-2.5 text-xs text-foreground focus:border-gold outline-none"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-bold text-muted-foreground block mb-1",
									children: "Phone Number *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "tel",
									placeholder: "+91 98765 43210",
									value: formData.phone,
									onChange: (e) => setFormData({
										...formData,
										phone: e.target.value
									}),
									className: "w-full rounded-xl bg-obsidian border border-border px-4 py-2.5 text-xs text-foreground focus:border-gold outline-none"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-bold text-muted-foreground block mb-1",
									children: "Email Address *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "email",
									placeholder: "vikram@example.com",
									value: formData.email,
									onChange: (e) => setFormData({
										...formData,
										email: e.target.value
									}),
									className: "w-full rounded-xl bg-obsidian border border-border px-4 py-2.5 text-xs text-foreground focus:border-gold outline-none"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-bold text-muted-foreground block mb-1",
									children: "Proposed City / Area *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "text",
									placeholder: "e.g. Gachibowli, Hyderabad",
									value: formData.city,
									onChange: (e) => setFormData({
										...formData,
										city: e.target.value
									}),
									className: "w-full rounded-xl bg-obsidian border border-border px-4 py-2.5 text-xs text-foreground focus:border-gold outline-none"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-bold text-muted-foreground block mb-1",
									children: "Investment Budget"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: formData.budget,
									onChange: (e) => setFormData({
										...formData,
										budget: e.target.value
									}),
									className: "w-full rounded-xl bg-obsidian border border-border px-4 py-2.5 text-xs text-foreground focus:border-gold outline-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "₹10L - ₹15L",
											children: "₹10L – ₹15L (Cloud Kitchen)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "₹15L - ₹25L",
											children: "₹15L – ₹25L (Kiosk Model)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "₹25L - ₹40L",
											children: "₹25L – ₹40L (Dine-In QSR)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "₹40L+",
											children: "₹40L+ (Multi-Unit Master)"
										})
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-bold text-muted-foreground block mb-1",
									children: "F&B Experience"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: formData.experience,
									onChange: (e) => setFormData({
										...formData,
										experience: e.target.value
									}),
									className: "w-full rounded-xl bg-obsidian border border-border px-4 py-2.5 text-xs text-foreground focus:border-gold outline-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "First-Time Entrepreneur",
											children: "First-Time Entrepreneur"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Existing Restaurant Owner",
											children: "Existing Restaurant Owner"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Franchise Operator",
											children: "Franchise Operator"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Investor",
											children: "Investor"
										})
									]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-bold text-muted-foreground block mb-1",
								children: "Additional Information / Questions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								placeholder: "Tell us about your background or target site availability...",
								value: formData.notes,
								onChange: (e) => setFormData({
									...formData,
									notes: e.target.value
								}),
								className: "w-full rounded-xl bg-obsidian border border-border px-4 py-2.5 text-xs text-foreground focus:border-gold outline-none resize-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "w-full rounded-2xl bg-gradient-to-r from-gold via-amber-400 to-gold text-obsidian px-6 py-4 text-xs font-black tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gold/20 uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" }), " Request Franchise Prospectus"]
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
export { FranchisePage as component };
