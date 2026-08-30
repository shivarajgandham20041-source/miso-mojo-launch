import { r as __toESM } from "../_runtime.mjs";
import { t as chef_default } from "./chef-Bl87OJ0T.mjs";
import { t as interior_default } from "./interior-Cs3ud1fG.mjs";
import { n as sushi_default, t as hero_ramen_default } from "./sushi-DTIfnn9T.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { D as Camera, t as X, x as Eye } from "../_libs/lucide-react.mjs";
import { a as spicy_ramen_default, i as sandwich_default, n as korean_chicken_default, o as veg_ramen_default, r as rice_bowl_default, t as corndog_default } from "./sandwich-JhNjByFY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-BEije_nF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var GALLERY_ITEMS = [
	{
		id: 1,
		title: "Artisanal Tonkotsu Ramen",
		category: "dishes",
		img: hero_ramen_default,
		tag: "Signature Dish"
	},
	{
		id: 2,
		title: "Devil Spicy Red Chilli Broth",
		category: "dishes",
		img: spicy_ramen_default,
		tag: "Spicy Favorite"
	},
	{
		id: 3,
		title: "Gourmet Salmon & Tuna Rolls",
		category: "dishes",
		img: sushi_default,
		tag: "Hand Rolled"
	},
	{
		id: 4,
		title: "Lakeside Counter Ambiance",
		category: "ambiance",
		img: interior_default,
		tag: "IDL Lake View"
	},
	{
		id: 5,
		title: "Master Chef Plating Ramen",
		category: "prep",
		img: chef_default,
		tag: "Craftsmanship"
	},
	{
		id: 6,
		title: "Golden Mozzarella Corndog",
		category: "dishes",
		img: corndog_default,
		tag: "Cheese Pull"
	},
	{
		id: 7,
		title: "Pure Veg Mushroom Broth",
		category: "dishes",
		img: veg_ramen_default,
		tag: "Plant Based"
	},
	{
		id: 8,
		title: "Korean Spicy Crispy Chicken",
		category: "dishes",
		img: korean_chicken_default,
		tag: "Street Snack"
	},
	{
		id: 9,
		title: "Japanese Teriyaki Rice Bowl",
		category: "dishes",
		img: rice_bowl_default,
		tag: "Comfort Bowl"
	},
	{
		id: 10,
		title: "Japanese Katsu Sandwich",
		category: "dishes",
		img: sandwich_default,
		tag: "Artisan Bread"
	}
];
function GalleryPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [activeImage, setActiveImage] = (0, import_react.useState)(null);
	const filtered = filter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === filter);
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "w-4 h-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VISUAL FEAST & VIBE" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-japan-ramen text-5xl sm:text-7xl font-black text-foreground",
							children: ["Atmosphere & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fire-gradient",
								children: "Culinary Art"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground max-w-xl mx-auto font-sans leading-relaxed",
							children: "Take a visual tour of our handcrafted bowls, sushi creation, and vibrant lake view dining atmosphere at IDL Lake Food Courts."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-center gap-2 text-xs font-bold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setFilter("all"),
								className: `px-5 py-2.5 rounded-full border transition-all ${filter === "all" ? "bg-gold text-obsidian font-black border-gold" : "bg-surface text-muted-foreground border-border hover:text-white"}`,
								children: [
									"All Moments (",
									GALLERY_ITEMS.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setFilter("dishes"),
								className: `px-5 py-2.5 rounded-full border transition-all ${filter === "dishes" ? "bg-gold text-obsidian font-black border-gold" : "bg-surface text-muted-foreground border-border hover:text-white"}`,
								children: "Signature Dishes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setFilter("ambiance"),
								className: `px-5 py-2.5 rounded-full border transition-all ${filter === "ambiance" ? "bg-gold text-obsidian font-black border-gold" : "bg-surface text-muted-foreground border-border hover:text-white"}`,
								children: "Ambiance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setFilter("prep"),
								className: `px-5 py-2.5 rounded-full border transition-all ${filter === "prep" ? "bg-gold text-obsidian font-black border-gold" : "bg-surface text-muted-foreground border-border hover:text-white"}`,
								children: "Kitchen Craft"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
						children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => setActiveImage(item),
							className: "group relative rounded-3xl overflow-hidden border border-border bg-surface aspect-[4/3] cursor-pointer hover:border-gold/50 transition-all hover:shadow-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.img,
									alt: item.title,
									className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-4 left-4 right-4 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block rounded-full bg-gold/20 border border-gold/40 px-2.5 py-0.5 text-[9px] font-black text-gold uppercase tracking-wider",
										children: item.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-bold text-white group-hover:text-gold transition-colors",
										children: item.title
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-4 right-4 w-8 h-8 rounded-full bg-obsidian/80 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4 text-gold" })
								})
							]
						}, item.id))
					})]
				})
			}),
			activeImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-md p-6 flex items-center justify-center",
				onClick: () => setActiveImage(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-4xl w-full rounded-3xl overflow-hidden border border-gold/40 bg-surface p-4",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveImage(null),
							className: "absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-obsidian border border-border flex items-center justify-center text-white hover:text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: activeImage.img,
							alt: activeImage.title,
							className: "w-full max-h-[70vh] object-cover rounded-2xl"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-gold font-bold",
								children: activeImage.tag
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-black text-white",
								children: activeImage.title
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { GalleryPage as component };
