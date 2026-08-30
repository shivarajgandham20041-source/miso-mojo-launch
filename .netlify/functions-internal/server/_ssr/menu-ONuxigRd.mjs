import { r as __toESM } from "../_runtime.mjs";
import { n as sushi_default, t as hero_ramen_default } from "./sushi-DTIfnn9T.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Leaf, c as Soup, l as ShoppingBag, n as Utensils } from "../_libs/lucide-react.mjs";
import { a as spicy_ramen_default, i as sandwich_default, n as korean_chicken_default, o as veg_ramen_default, r as rice_bowl_default, t as corndog_default } from "./sandwich-JhNjByFY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-ONuxigRd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	{
		id: "ramen",
		label: "Ramen"
	},
	{
		id: "sandwiches",
		label: "Sandwiches"
	},
	{
		id: "snacks",
		label: "Snacks"
	},
	{
		id: "rice-bowls",
		label: "Rice Bowls"
	},
	{
		id: "sushi",
		label: "Sushi"
	}
];
var menu = [
	{
		id: "veg-ramen",
		name: "Veg Ramen",
		category: "ramen",
		description: "Veg ramen is a flavorful noodle soup made with a rich vegetable broth.",
		diet: "veg",
		spice: 1,
		price: null,
		image: veg_ramen_default,
		imageAlt: "Vegetarian ramen bowl with tofu, mushrooms and bok choy",
		ingredients: [
			"Ramen noodles",
			"Vegetable broth",
			"Seasonal vegetables",
			"Scallions"
		],
		allergens: ["Gluten", "Soy"],
		featured: true
	},
	{
		id: "devil-spicy-veg-ramen",
		name: "Devil Spicy Veg Ramen",
		category: "ramen",
		description: "Devil spicy veg ramen is a flavorful noodle soup made with a spicy broth.",
		diet: "veg",
		spice: 4,
		price: null,
		image: spicy_ramen_default,
		imageAlt: "Fiery red devil spicy vegetarian ramen bowl with chilli oil",
		ingredients: [
			"Ramen noodles",
			"Devil spice broth",
			"Chilli oil",
			"Vegetables",
			"Scallions"
		],
		allergens: ["Gluten", "Soy"],
		featured: true
	},
	{
		id: "devil-spicy-chicken-ramen",
		name: "Devil Spicy Chicken Ramen",
		category: "ramen",
		description: "Devil spicy chicken ramen is a hearty noodle soup made with a flavorful spicy broth.",
		diet: "non-veg",
		spice: 4,
		price: null,
		image: spicy_ramen_default,
		imageAlt: "Devil spicy chicken ramen in a deep red chilli broth",
		ingredients: [
			"Ramen noodles",
			"Devil spice chicken broth",
			"Chicken",
			"Chilli oil",
			"Scallions"
		],
		allergens: [
			"Gluten",
			"Soy",
			"Egg"
		],
		featured: true
	},
	{
		id: "chicken-ramen",
		name: "Chicken Ramen",
		category: "ramen",
		description: "Chicken ramen is a hearty noodle soup made with a flavorful chicken broth.",
		diet: "non-veg",
		spice: 1,
		price: null,
		image: hero_ramen_default,
		imageAlt: "Chicken ramen bowl with noodles lifted on chopsticks and soft egg",
		ingredients: [
			"Ramen noodles",
			"Chicken broth",
			"Chicken",
			"Soft boiled egg",
			"Nori"
		],
		allergens: [
			"Gluten",
			"Soy",
			"Egg"
		],
		featured: true
	},
	{
		id: "mojo-special-ramen",
		name: "Mojo Special Ramen",
		category: "ramen",
		description: "Chicken, fish and prawns combined in a delicious signature ramen.",
		diet: "non-veg",
		spice: 2,
		price: null,
		image: hero_ramen_default,
		imageAlt: "Mojo special ramen loaded with chicken, fish and prawns",
		ingredients: [
			"Ramen noodles",
			"Signature broth",
			"Chicken",
			"Fish",
			"Prawns"
		],
		allergens: [
			"Gluten",
			"Soy",
			"Fish",
			"Shellfish"
		],
		featured: true
	},
	{
		id: "sea-food-ramen",
		name: "Sea Food Ramen",
		category: "ramen",
		description: "Seafood ramen with a savory broth and seafood toppings.",
		diet: "non-veg",
		spice: 2,
		price: null,
		image: hero_ramen_default,
		imageAlt: "Seafood ramen bowl with savoury broth and seafood toppings",
		ingredients: [
			"Ramen noodles",
			"Savoury seafood broth",
			"Prawns",
			"Fish"
		],
		allergens: [
			"Gluten",
			"Soy",
			"Fish",
			"Shellfish"
		],
		featured: true
	},
	{
		id: "mojo-special-veg-ramen",
		name: "Mojo Special Veg Ramen",
		category: "ramen",
		description: "Paneer and tofu in a flavorful signature vegetarian ramen.",
		diet: "veg",
		spice: 2,
		price: null,
		image: veg_ramen_default,
		imageAlt: "Signature vegetarian ramen with paneer and tofu",
		ingredients: [
			"Ramen noodles",
			"Signature veg broth",
			"Paneer",
			"Tofu",
			"Vegetables"
		],
		allergens: [
			"Gluten",
			"Soy",
			"Dairy"
		],
		featured: true
	},
	{
		id: "chicken-ramen-mini",
		name: "Chicken Ramen [Mini]",
		category: "ramen",
		description: "A smaller portion of our hearty chicken ramen in a flavorful chicken broth.",
		diet: "non-veg",
		spice: 1,
		price: null,
		image: hero_ramen_default,
		imageAlt: "Mini portion chicken ramen bowl",
		ingredients: [
			"Ramen noodles",
			"Chicken broth",
			"Chicken",
			"Scallions"
		],
		allergens: ["Gluten", "Soy"],
		mini: true
	},
	{
		id: "devil-spicy-chicken-ramen-mini",
		name: "Devil Spicy Chicken Ramen [Mini]",
		category: "ramen",
		description: "A smaller portion of the devil spicy chicken ramen.",
		diet: "non-veg",
		spice: 4,
		price: null,
		image: spicy_ramen_default,
		imageAlt: "Mini portion devil spicy chicken ramen",
		ingredients: [
			"Ramen noodles",
			"Devil spice chicken broth",
			"Chicken",
			"Chilli oil"
		],
		allergens: ["Gluten", "Soy"],
		mini: true
	},
	{
		id: "veg-ramen-mini",
		name: "Veg Ramen [Mini]",
		category: "ramen",
		description: "A smaller portion of our vegetable broth ramen.",
		diet: "veg",
		spice: 1,
		price: null,
		image: veg_ramen_default,
		imageAlt: "Mini portion vegetarian ramen",
		ingredients: [
			"Ramen noodles",
			"Vegetable broth",
			"Vegetables"
		],
		allergens: ["Gluten", "Soy"],
		mini: true
	},
	{
		id: "devil-spicy-veg-ramen-mini",
		name: "Devil Spicy Veg Ramen [Mini]",
		category: "ramen",
		description: "A smaller portion of the devil spicy veg ramen.",
		diet: "veg",
		spice: 4,
		price: null,
		image: spicy_ramen_default,
		imageAlt: "Mini portion devil spicy vegetarian ramen",
		ingredients: [
			"Ramen noodles",
			"Devil spice broth",
			"Vegetables",
			"Chilli oil"
		],
		allergens: ["Gluten", "Soy"],
		mini: true
	},
	{
		id: "veg-cheesy-ramen",
		name: "Veg Cheesy Ramen",
		category: "ramen",
		description: "Ramen prepared in a rich cheesy broth.",
		diet: "veg",
		spice: 1,
		price: null,
		image: veg_ramen_default,
		imageAlt: "Vegetarian cheesy ramen in a rich cheese broth",
		ingredients: [
			"Ramen noodles",
			"Cheesy broth",
			"Vegetables"
		],
		allergens: [
			"Gluten",
			"Dairy",
			"Soy"
		]
	},
	{
		id: "chicken-cheesy-ramen",
		name: "Chicken Cheesy Ramen",
		category: "ramen",
		description: "Ramen prepared with rich cheesy broth.",
		diet: "non-veg",
		spice: 1,
		price: null,
		image: hero_ramen_default,
		imageAlt: "Chicken cheesy ramen in a rich cheese broth",
		ingredients: [
			"Ramen noodles",
			"Cheesy chicken broth",
			"Chicken"
		],
		allergens: [
			"Gluten",
			"Dairy",
			"Soy"
		]
	},
	{
		id: "veg-creamy-ramen",
		name: "Veg Creamy Ramen",
		category: "ramen",
		description: "Broth prepared with cream & coconut milk.",
		diet: "veg",
		spice: 1,
		price: null,
		image: veg_ramen_default,
		imageAlt: "Creamy vegetarian ramen with coconut milk broth",
		ingredients: [
			"Ramen noodles",
			"Cream",
			"Coconut milk",
			"Vegetables"
		],
		allergens: [
			"Gluten",
			"Dairy",
			"Soy"
		]
	},
	{
		id: "chicken-creamy-ramen",
		name: "Chicken Creamy Ramen",
		category: "ramen",
		description: "Broth prepared with French cream & coconut milk.",
		diet: "non-veg",
		spice: 1,
		price: null,
		image: hero_ramen_default,
		imageAlt: "Creamy chicken ramen with French cream and coconut milk broth",
		ingredients: [
			"Ramen noodles",
			"French cream",
			"Coconut milk",
			"Chicken"
		],
		allergens: [
			"Gluten",
			"Dairy",
			"Soy"
		]
	},
	{
		id: "korean-veg-sandwich",
		name: "Korean Veg Sandwich",
		category: "sandwiches",
		description: "Korean-style toasted sandwich layered with vegetables and signature sauces.",
		diet: "veg",
		spice: 1,
		price: null,
		image: sandwich_default,
		imageAlt: "Korean style toasted vegetarian sandwich cut in half",
		ingredients: [
			"Toasted bread",
			"Cabbage slaw",
			"Vegetables",
			"Korean sauces"
		],
		allergens: [
			"Gluten",
			"Egg",
			"Dairy"
		]
	},
	{
		id: "korean-chicken-sandwich",
		name: "Korean Chicken Sandwich",
		category: "sandwiches",
		description: "Korean-style toasted sandwich stacked with chicken and signature sauces.",
		diet: "non-veg",
		spice: 2,
		price: null,
		image: sandwich_default,
		imageAlt: "Korean style toasted chicken sandwich cut in half",
		ingredients: [
			"Toasted bread",
			"Chicken",
			"Cabbage slaw",
			"Korean sauces"
		],
		allergens: [
			"Gluten",
			"Egg",
			"Dairy"
		]
	},
	{
		id: "paneer-corndog",
		name: "Paneer Corndog",
		category: "snacks",
		description: "Paneer corndog is a fun and tasty snack made by coating pieces of paneer.",
		diet: "veg",
		spice: 1,
		price: null,
		image: corndog_default,
		imageAlt: "Crispy golden paneer corndog with sauces",
		ingredients: [
			"Paneer",
			"Crispy batter",
			"Panko",
			"Sauces"
		],
		allergens: ["Gluten", "Dairy"]
	},
	{
		id: "cheese-corndog",
		name: "Cheese Corndog",
		category: "snacks",
		description: "Cheese corndog is a tasty snack made by coating a piece of melted cheese.",
		diet: "veg",
		spice: 0,
		price: null,
		image: corndog_default,
		imageAlt: "Cheese corndog with a melted cheese pull",
		ingredients: [
			"Mozzarella",
			"Crispy batter",
			"Panko",
			"Sauces"
		],
		allergens: ["Gluten", "Dairy"]
	},
	{
		id: "chicken-cheese-corndog",
		name: "Chicken Cheese Corndog",
		category: "snacks",
		description: "Chicken cheese corndog is a delicious snack made by wrapping chicken and cheese in a crispy coating.",
		diet: "non-veg",
		spice: 1,
		price: null,
		image: corndog_default,
		imageAlt: "Chicken and cheese corndog in a crispy panko coating",
		ingredients: [
			"Chicken",
			"Mozzarella",
			"Crispy batter",
			"Panko"
		],
		allergens: ["Gluten", "Dairy"]
	},
	{
		id: "chicken-cheese-fries",
		name: "Chicken Cheese Fries",
		category: "snacks",
		description: "Loaded fries topped with chicken and melted cheese.",
		diet: "non-veg",
		spice: 1,
		price: null,
		image: korean_chicken_default,
		imageAlt: "Loaded chicken cheese fries",
		ingredients: [
			"Fries",
			"Chicken",
			"Cheese sauce"
		],
		allergens: ["Dairy", "Gluten"]
	},
	{
		id: "korean-fried-chicken",
		name: "Korean Fried Chicken",
		category: "snacks",
		description: "Juicy chicken pieces tossed in Korean sauce.",
		diet: "non-veg",
		spice: 3,
		price: null,
		image: korean_chicken_default,
		imageAlt: "Korean fried chicken glazed in glossy red sauce with sesame",
		ingredients: [
			"Chicken",
			"Korean sauce",
			"Sesame seeds"
		],
		allergens: [
			"Gluten",
			"Soy",
			"Sesame"
		],
		featured: true
	},
	{
		id: "seafood-rice-bowl",
		name: "Seafood Rice Bowl",
		category: "rice-bowls",
		description: "Dive into a flavorful bowl of steamed rice topped with tender prawn and fish.",
		diet: "non-veg",
		spice: 2,
		price: null,
		image: rice_bowl_default,
		imageAlt: "Seafood rice bowl with prawn and fish over steamed rice",
		ingredients: [
			"Steamed rice",
			"Prawns",
			"Fish",
			"Sauces",
			"Vegetables"
		],
		allergens: [
			"Fish",
			"Shellfish",
			"Soy"
		]
	},
	{
		id: "spl-rice-bowl",
		name: "Spl Rice Bowl",
		category: "rice-bowls",
		description: "Non-veg mixed rice bowl with chicken, fish and more.",
		diet: "non-veg",
		spice: 2,
		price: null,
		image: rice_bowl_default,
		imageAlt: "Special mixed non-vegetarian rice bowl",
		ingredients: [
			"Steamed rice",
			"Chicken",
			"Fish",
			"Egg",
			"Sauces"
		],
		allergens: [
			"Fish",
			"Egg",
			"Soy"
		]
	},
	{
		id: "chicken-rice-bowl",
		name: "Chicken Rice Bowl",
		category: "rice-bowls",
		description: "A hearty bowl of steamed rice topped with chicken and a soft, half-boiled egg.",
		diet: "non-veg",
		spice: 1,
		price: null,
		image: rice_bowl_default,
		imageAlt: "Chicken rice bowl topped with a half boiled egg",
		ingredients: [
			"Steamed rice",
			"Chicken",
			"Half boiled egg",
			"Sauces"
		],
		allergens: ["Egg", "Soy"]
	},
	{
		id: "veg-rice-bowl",
		name: "Veg Rice Bowl",
		category: "rice-bowls",
		description: "A satisfying bowl of fluffy steamed rice topped with paneer, vegetables and sauces.",
		diet: "veg",
		spice: 1,
		price: null,
		image: rice_bowl_default,
		imageAlt: "Vegetarian rice bowl with paneer and vegetables",
		ingredients: [
			"Steamed rice",
			"Paneer",
			"Vegetables",
			"Sauces"
		],
		allergens: ["Dairy", "Soy"]
	},
	{
		id: "veg-sushi",
		name: "Veg Sushi",
		category: "sushi",
		description: "Veggie sushi stuffed with crispy paneer, pickled vegetables & cucumber.",
		diet: "veg",
		spice: 1,
		price: null,
		image: sushi_default,
		imageAlt: "Vegetarian sushi rolls with crispy paneer and cucumber",
		ingredients: [
			"Sushi rice",
			"Nori",
			"Crispy paneer",
			"Pickled vegetables",
			"Cucumber"
		],
		allergens: [
			"Dairy",
			"Gluten",
			"Soy"
		]
	},
	{
		id: "chicken-katsu-sushi-rolls",
		name: "Chicken Katsu Sushi Rolls",
		category: "sushi",
		description: "Sushi stuffed with katsu chicken, pickled vegetables & cucumber.",
		diet: "non-veg",
		spice: 1,
		price: null,
		image: sushi_default,
		imageAlt: "Chicken katsu sushi rolls on a dark slate board",
		ingredients: [
			"Sushi rice",
			"Nori",
			"Katsu chicken",
			"Pickled vegetables",
			"Cucumber"
		],
		allergens: [
			"Gluten",
			"Egg",
			"Soy"
		],
		featured: true
	},
	{
		id: "prawns-tempura-sushi",
		name: "Prawns Tempura Sushi",
		category: "sushi",
		description: "Sushi stuffed with tempura prawns, pickled vegetables & cucumber.",
		diet: "non-veg",
		spice: 1,
		price: null,
		image: sushi_default,
		imageAlt: "Prawn tempura sushi rolls with pickled vegetables",
		ingredients: [
			"Sushi rice",
			"Nori",
			"Tempura prawns",
			"Pickled vegetables",
			"Cucumber"
		],
		allergens: [
			"Shellfish",
			"Gluten",
			"Egg"
		]
	}
];
menu.filter((i) => i.category === "ramen" && i.featured && !i.mini);
var BROTH_TYPES = [
	{
		name: "8-Hour Rich Tonkotsu Style",
		desc: "Simmered continuously for 8 hours with aromatics, kelp, and tare for maximum umami intensity.",
		flavor: "Creamy, Savory & Deep",
		spice: "Mild (Customizable)",
		bestFor: "Original Porkless Tonkotsu & Devil Spicy Ramen"
	},
	{
		name: "Red Miso Fusion Broth",
		desc: "A bold blend of fermented red miso paste, roasted garlic oil, and toasted sesame seeds.",
		flavor: "Rich, Earthy & Nutty",
		spice: "Medium Spice",
		bestFor: "Classic Miso Ramen & Veg Fusion Bowl"
	},
	{
		name: "Shoyu Umami Broth",
		desc: "Infused with aged Japanese soy sauce, dashi broth, and spring onions for a clean, refreshing broth.",
		flavor: "Light, Salty & Fragrant",
		spice: "Mild",
		bestFor: "Clear Shoyu Noodles & Chicken Dumplings"
	}
];
function FullMenuPage() {
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [dietFilter, setDietFilter] = (0, import_react.useState)("all");
	const filteredItems = menu.filter((item) => {
		const matchesCat = activeCategory === "all" || item.category === activeCategory;
		const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesDiet = dietFilter === "all" || (dietFilter === "veg" ? item.diet === "veg" : item.diet === "non-veg");
		return matchesCat && matchesSearch && matchesDiet;
	});
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Soup, { className: "w-4 h-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ARTISANAL JAPANESE CUISINE" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-japan-ramen text-5xl sm:text-7xl font-black text-foreground",
							children: ["Crafted Broths & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fire-gradient",
								children: "Master Recipes"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground max-w-xl mx-auto font-sans leading-relaxed",
							children: "Every bowl of ramen, roll of sushi, and golden corndog is prepared fresh at our IDL Lake counter using authentic Japanese techniques and ingredients."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 border-b border-border bg-obsidian/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-10 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold tracking-widest text-gold uppercase font-sans",
							children: "// OUR SIGNATURE BASE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-black text-foreground",
							children: "The Art of the Broth"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-3 gap-6",
						children: BROTH_TYPES.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-gold/20 bg-surface/80 p-6 space-y-3 hover:border-gold/50 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-black text-sm",
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold text-foreground",
									children: b.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground leading-relaxed font-sans",
									children: b.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-2 border-t border-border/60 text-[11px] space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gold font-bold",
											children: "Profile:"
										}),
										" ",
										b.flavor
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gold font-bold",
											children: "Best Enjoyed In:"
										}),
										" ",
										b.bestFor
									] })]
								})
							]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row items-center justify-between gap-4 bg-surface p-3 sm:p-4 rounded-3xl border border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full md:w-auto text-xs font-bold scroll-smooth",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveCategory("all"),
								className: `whitespace-nowrap px-4 py-2.5 rounded-xl transition-all shrink-0 ${activeCategory === "all" ? "bg-gold text-obsidian font-black shadow-md" : "bg-surface border border-border text-muted-foreground hover:text-white"}`,
								children: [
									"All Items (",
									menu.length,
									")"
								]
							}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveCategory(c.id),
								className: `whitespace-nowrap px-4 py-2.5 rounded-xl transition-all shrink-0 ${activeCategory === c.id ? "bg-gold text-obsidian font-black shadow-md" : "bg-surface border border-border text-muted-foreground hover:text-white"}`,
								children: c.label
							}, c.id))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs shrink-0 self-start md:self-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setDietFilter("all"),
									className: `px-3 py-1.5 rounded-lg border ${dietFilter === "all" ? "border-gold text-gold" : "border-border text-muted-foreground"}`,
									children: "All Diet"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setDietFilter("veg"),
									className: `inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border ${dietFilter === "veg" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10" : "border-border text-muted-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "w-3 h-3 text-emerald-400" }), " Veg"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setDietFilter("non-veg"),
									className: `inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border ${dietFilter === "non-veg" ? "border-rose-500 text-rose-400 bg-rose-500/10" : "border-border text-muted-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "w-3 h-3 text-rose-400" }), " Non-Veg"]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6",
						children: filteredItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group rounded-2xl sm:rounded-3xl border border-border bg-surface p-3 sm:p-6 flex flex-col justify-between hover:border-gold/40 transition-all hover:shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-square sm:aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4 bg-obsidian",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: item.name,
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-2 left-2 sm:top-3 sm:left-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-flex items-center justify-center p-1 sm:p-1.5 rounded-lg border backdrop-blur-md ${item.diet === "veg" ? "bg-emerald-950/80 border-emerald-500/50 text-emerald-400" : "bg-rose-950/80 border-rose-500/50 text-rose-400"}`,
											children: item.diet === "veg" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" })
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-1 mb-1 sm:mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] sm:text-[10px] font-mono text-gold uppercase tracking-widest truncate",
										children: item.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xs sm:text-xl font-black text-gold shrink-0",
										children: item.price ? `₹${item.price}` : "In Store"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xs sm:text-xl font-bold text-white group-hover:text-gold transition-colors line-clamp-1",
									children: item.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hidden sm:block mt-2 text-xs text-muted-foreground leading-relaxed font-sans line-clamp-2",
									children: item.description
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-border/80 flex items-center justify-between gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://www.zomato.com/hyderabad/miso-mojo-moosapet",
									target: "_blank",
									rel: "noreferrer",
									className: "flex-1 inline-flex items-center justify-center gap-1 rounded-xl bg-[#CB202D] text-white py-2 text-[10px] sm:text-xs font-extrabold hover:brightness-110 transition-all text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-3 h-3 shrink-0" }), " Zomato"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://www.swiggy.com/restaurants/miso-mojo-moosapet-hyderabad",
									target: "_blank",
									rel: "noreferrer",
									className: "flex-1 inline-flex items-center justify-center gap-1 rounded-xl bg-[#FC8019] text-white py-2 text-[10px] sm:text-xs font-extrabold hover:brightness-110 transition-all text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-3 h-3 shrink-0" }), " Swiggy"]
								})]
							})]
						}, item.id))
					})]
				})
			})
		]
	});
}
//#endregion
export { FullMenuPage as component };
