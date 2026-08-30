import { r as __toESM } from "../_runtime.mjs";
import { t as chef_default } from "./chef-Bl87OJ0T.mjs";
import { t as interior_default } from "./interior-Cs3ud1fG.mjs";
import { n as sushi_default, t as hero_ramen_default } from "./sushi-DTIfnn9T.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Award, C as Clock, E as ChefHat, S as ExternalLink, T as ChevronRight, _ as Leaf, b as Flame, c as Soup, d as Send, f as Search, g as MapPin, j as ArrowRight, k as Bot, l as ShoppingBag, m as Navigation, n as Utensils, o as Star, p as PhoneCall, r as UtensilsCrossed, s as Sparkles, t as X } from "../_libs/lucide-react.mjs";
import { a as spicy_ramen_default, i as sandwich_default, n as korean_chicken_default, o as veg_ramen_default, r as rice_bowl_default, t as corndog_default } from "./sandwich-JhNjByFY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DuUKjFAW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ramen_graphic_default = "/assets/ramen-graphic-Ce5Lm4qF.png";
var menuCategories = [
	{
		id: "ramen",
		label: "Artisanal Ramen",
		image: hero_ramen_default,
		subtitle: "8-hour slow simmered broth with hand-cut noodles & chashu",
		items: [
			{
				id: "r1",
				name: "Classic Veg Ramen",
				desc: "A fragrant, slow-simmered vegetable broth infused with Japanese dashi, bok choy, scallions & fresh wheat noodles.",
				price: "₹210",
				isVeg: true,
				category: "Ramen",
				image: veg_ramen_default,
				ingredients: [
					"Ramen noodles",
					"Vegetable dashi broth",
					"Bok choy",
					"Tofu",
					"Scallions"
				],
				allergens: ["Gluten", "Soy"]
			},
			{
				id: "r2",
				name: "Devil Spicy Veg Ramen",
				desc: "Rich chili-oil vegetable broth packed with fiery roasted spices, silken tofu, toasted sesame seeds & spring onions.",
				price: "₹230",
				isVeg: true,
				isSpicy: true,
				category: "Ramen",
				popular: true,
				image: spicy_ramen_default,
				ingredients: [
					"Ramen noodles",
					"Devil chili broth",
					"Chili oil",
					"Silken tofu",
					"Scallions"
				],
				allergens: [
					"Gluten",
					"Soy",
					"Sesame"
				]
			},
			{
				id: "r3",
				name: "Devil Spicy Chicken Ramen",
				desc: "Rich chicken bone broth simmered 8 hours, finished with habanero chili oil, tender chicken chashu & soft ramen egg.",
				price: "₹260",
				isVeg: false,
				isSpicy: true,
				category: "Ramen",
				popular: true,
				image: spicy_ramen_default,
				ingredients: [
					"Ramen noodles",
					"8-hr chicken broth",
					"Chili oil",
					"Chicken chashu",
					"Ajitsuke egg"
				],
				allergens: [
					"Gluten",
					"Soy",
					"Egg"
				]
			},
			{
				id: "r4",
				name: "Signature Chicken Ramen",
				desc: "Comforting slow-brewed savory chicken broth served with tender pulled chicken, nori, bamboo shoots & soft egg.",
				price: "₹240",
				isVeg: false,
				category: "Ramen",
				image: hero_ramen_default,
				ingredients: [
					"Ramen noodles",
					"Savory chicken broth",
					"Pulled chicken",
					"Nori seaweed",
					"Bamboo shoots"
				],
				allergens: [
					"Gluten",
					"Soy",
					"Egg"
				]
			},
			{
				id: "r5",
				name: "Mojo Grand Special Ramen",
				desc: "The ultimate sea & land feast: Succulent prawns, tender white fish & chashu chicken in a loaded rich dashi broth.",
				price: "₹340",
				isVeg: false,
				category: "Ramen",
				popular: true,
				image: hero_ramen_default,
				ingredients: [
					"Ramen noodles",
					"Special loaded dashi",
					"Tiger prawns",
					"White fish",
					"Chicken chashu"
				],
				allergens: [
					"Gluten",
					"Soy",
					"Fish",
					"Shellfish"
				]
			},
			{
				id: "r6",
				name: "Coastal Sea Food Ramen",
				desc: "Rich umami seafood broth loaded with grilled tiger prawns, fish fillets, kelp seaweed & Japanese scallions.",
				price: "₹310",
				isVeg: false,
				category: "Ramen",
				image: hero_ramen_default,
				ingredients: [
					"Ramen noodles",
					"Seafood dashi broth",
					"Grilled prawns",
					"Fish fillet",
					"Kelp"
				],
				allergens: [
					"Gluten",
					"Soy",
					"Fish",
					"Shellfish"
				]
			},
			{
				id: "r7",
				name: "Mojo Special Veg Loaded Ramen",
				desc: "Generous bowl featuring seared paneer cubes, silken tofu, shiitake mushrooms in aromatic miso veg broth.",
				price: "₹270",
				isVeg: true,
				category: "Ramen",
				image: veg_ramen_default,
				ingredients: [
					"Ramen noodles",
					"Miso broth",
					"Seared paneer",
					"Tofu",
					"Shiitake mushrooms"
				],
				allergens: [
					"Gluten",
					"Soy",
					"Dairy"
				]
			},
			{
				id: "r8",
				name: "Veg Ramen [Mini Portion]",
				desc: "A compact portion of our classic vegetable noodle broth for lighter appetites.",
				price: "₹140",
				isVeg: true,
				isMini: true,
				category: "Ramen",
				image: veg_ramen_default
			},
			{
				id: "r9",
				name: "Chicken Ramen [Mini Portion]",
				desc: "A mini bowl of rich chicken broth with tender noodles & chashu toppings.",
				price: "₹160",
				isVeg: false,
				isMini: true,
				category: "Ramen",
				image: hero_ramen_default
			},
			{
				id: "r10",
				name: "Devil Spicy Veg Ramen [Mini]",
				desc: "Fiery veg spicy noodle bowl in a convenient mini portion.",
				price: "₹150",
				isVeg: true,
				isSpicy: true,
				isMini: true,
				category: "Ramen",
				image: spicy_ramen_default
			},
			{
				id: "r11",
				name: "Devil Spicy Chicken Ramen [Mini]",
				desc: "A mini bowl of fiery habanero chicken ramen with soft egg.",
				price: "₹170",
				isVeg: false,
				isSpicy: true,
				isMini: true,
				category: "Ramen",
				image: spicy_ramen_default
			},
			{
				id: "r12",
				name: "Rich Veg Cheesy Ramen",
				desc: "Creamy melted cheese folded into steaming vegetable broth — rich, velvety & indulgent.",
				price: "₹260",
				isVeg: true,
				category: "Ramen",
				image: veg_ramen_default
			},
			{
				id: "r13",
				name: "Chicken Cheesy Melt Ramen",
				desc: "Indulgent cheesy chicken broth layered with gooey mozzarella & tender chicken.",
				price: "₹280",
				isVeg: false,
				category: "Ramen",
				image: hero_ramen_default
			},
			{
				id: "r14",
				name: "Veg Creamy Coconut Ramen",
				desc: "Silky French cream & rich coconut milk broth infused with mild Japanese curry spices.",
				price: "₹260",
				isVeg: true,
				category: "Ramen",
				image: veg_ramen_default
			},
			{
				id: "r15",
				name: "Chicken Creamy Velouté Ramen",
				desc: "Luxurious double-cream chicken broth cooked with coconut milk, garlic oil & fresh cilantro.",
				price: "₹290",
				isVeg: false,
				category: "Ramen",
				image: hero_ramen_default
			}
		]
	},
	{
		id: "sushi",
		label: "Gourmet Sushi",
		image: sushi_default,
		subtitle: "Hand-rolled sushi using seasoned Japanese rice & fresh ingredients",
		items: [
			{
				id: "s1",
				name: "Crispy Paneer Veg Sushi Roll",
				desc: "Seasoned vinegared rice wrapped in nori, packed with crispy paneer, pickled radish, avocado & spicy mayo.",
				price: "₹240",
				isVeg: true,
				category: "Sushi",
				popular: true,
				image: sushi_default,
				ingredients: [
					"Sushi rice",
					"Nori",
					"Crispy paneer",
					"Pickled radish",
					"Spicy mayo"
				],
				allergens: [
					"Soy",
					"Gluten",
					"Dairy"
				]
			},
			{
				id: "s2",
				name: "Chicken Katsu Crunch Rolls",
				desc: "Gold-crusted panko chicken katsu, cucumber, pickled carrots rolled with Japanese mayo & unagi glaze.",
				price: "₹280",
				isVeg: false,
				category: "Sushi",
				popular: true,
				image: sushi_default,
				ingredients: [
					"Sushi rice",
					"Nori",
					"Chicken katsu",
					"Cucumber",
					"Unagi glaze"
				],
				allergens: [
					"Gluten",
					"Egg",
					"Soy"
				]
			},
			{
				id: "s3",
				name: "Crispy Prawns Tempura Sushi",
				desc: "Crispy fried tiger prawn tempura, cucumber ribbon, tobiko topping & sweet shoyu drizzle.",
				price: "₹320",
				isVeg: false,
				category: "Sushi",
				image: sushi_default,
				ingredients: [
					"Sushi rice",
					"Nori",
					"Prawn tempura",
					"Tobiko",
					"Shoyu glaze"
				],
				allergens: [
					"Gluten",
					"Shellfish",
					"Soy"
				]
			}
		]
	},
	{
		id: "rice",
		label: "Japanese Rice Bowls",
		image: rice_bowl_default,
		subtitle: "Steamed jasmine rice topped with savory meats & delicate sauces",
		items: [
			{
				id: "b1",
				name: "Coastal Seafood Donburi",
				desc: "Fluffy steamed rice topped with stir-fried garlic prawns, tender fish fillets, scallions & shoyu reduction.",
				price: "₹310",
				isVeg: false,
				category: "Rice Bowl",
				image: rice_bowl_default,
				ingredients: [
					"Jasmine rice",
					"Garlic prawns",
					"Fish fillets",
					"Shoyu sauce"
				],
				allergens: [
					"Fish",
					"Shellfish",
					"Soy"
				]
			},
			{
				id: "b2",
				name: "Mojo Special Mixed Meat Bowl",
				desc: "Loaded rice bowl featuring chicken teriyaki, crispy fish bites, soft ajitsuke egg & house teriyaki sauce.",
				price: "₹330",
				isVeg: false,
				category: "Rice Bowl",
				popular: true,
				image: rice_bowl_default,
				ingredients: [
					"Jasmine rice",
					"Teriyaki chicken",
					"Fish bites",
					"Ajitsuke egg"
				],
				allergens: [
					"Fish",
					"Egg",
					"Soy"
				]
			},
			{
				id: "b3",
				name: "Savory Chicken Teriyaki Don",
				desc: "Tender glazed teriyaki chicken thigh over warm white rice with a golden poached egg & toasted sesame.",
				price: "₹260",
				isVeg: false,
				category: "Rice Bowl",
				image: rice_bowl_default,
				ingredients: [
					"Steamed rice",
					"Teriyaki chicken",
					"Poached egg",
					"Sesame"
				],
				allergens: [
					"Egg",
					"Soy",
					"Sesame"
				]
			},
			{
				id: "b4",
				name: "Garden Veg & Tofu Rice Bowl",
				desc: "Steamed Japanese rice crowned with stir-fried paneer, silken tofu, edamame & savory sesame dressing.",
				price: "₹220",
				isVeg: true,
				category: "Rice Bowl",
				image: rice_bowl_default,
				ingredients: [
					"Steamed rice",
					"Stir-fried paneer",
					"Silken tofu",
					"Edamame"
				],
				allergens: [
					"Dairy",
					"Soy",
					"Sesame"
				]
			}
		]
	},
	{
		id: "snacks",
		label: "Korean Street Snacks",
		image: corndog_default,
		subtitle: "Crispy, cheesy & saucy street food delights",
		items: [
			{
				id: "sn1",
				name: "Crispy Paneer Corndog",
				desc: "Soft paneer stick enveloped in golden sweet corn batter, fried to perfection & drizzled with honey mustard.",
				price: "₹160",
				isVeg: true,
				category: "Korean Snacks",
				image: corndog_default,
				ingredients: [
					"Paneer",
					"Sweet corn batter",
					"Panko breadcrumbs",
					"Honey mustard"
				],
				allergens: ["Gluten", "Dairy"]
			},
			{
				id: "sn2",
				name: "Ultimate Cheese Pull Corndog",
				desc: "Thick mozzarella block coated in crispy panko batter with an epic stretchy cheese pull.",
				price: "₹180",
				isVeg: true,
				category: "Korean Snacks",
				popular: true,
				image: corndog_default,
				ingredients: [
					"Mozzarella block",
					"Crispy panko batter",
					"Sugar coating",
					"Sriracha mayo"
				],
				allergens: ["Gluten", "Dairy"]
			},
			{
				id: "sn3",
				name: "Chicken & Cheese Double Corndog",
				desc: "Juicy chicken sausage wrapped around molten mozzarella, double-fried & dusted with sugar spice.",
				price: "₹210",
				isVeg: false,
				category: "Korean Snacks",
				popular: true,
				image: corndog_default,
				ingredients: [
					"Chicken sausage",
					"Mozzarella",
					"Panko batter",
					"Sugar spice"
				],
				allergens: ["Gluten", "Dairy"]
			},
			{
				id: "sn4",
				name: "Loaded Chicken Cheese Fries",
				desc: "Crisp potato fries smothered in warm cheddar cheese sauce, seasoned minced chicken & jalapeños.",
				price: "₹220",
				isVeg: false,
				category: "Korean Snacks",
				image: korean_chicken_default
			},
			{
				id: "sn5",
				name: "Yangnyeom Korean Fried Chicken",
				desc: "Crispy double-fried chicken wings tossed in a glossy sweet-and-spicy Korean red glaze with sesame seeds.",
				price: "₹250",
				isVeg: false,
				isSpicy: true,
				category: "Korean Snacks",
				popular: true,
				image: korean_chicken_default,
				ingredients: [
					"Double-fried chicken",
					"Gochujang glaze",
					"Sesame seeds"
				],
				allergens: [
					"Gluten",
					"Soy",
					"Sesame"
				]
			}
		]
	},
	{
		id: "sandwiches",
		label: "Artisan Sandwiches",
		image: sandwich_default,
		subtitle: "Toasted brioche sandwiches loaded with Korean sauces",
		items: [{
			id: "w1",
			name: "Korean Street Veg Toast",
			desc: "Butter-toasted milk bread stuffed with crunchy cabbage slaw, caramelized onions & sweet chili mayo.",
			price: "₹150",
			isVeg: true,
			category: "Sandwiches",
			image: sandwich_default
		}, {
			id: "w2",
			name: "Korean Pulled Chicken Sandwich",
			desc: "Golden toasted brioche layered with tender Korean spicy chicken, melted cheese & pickled cucumber.",
			price: "₹180",
			isVeg: false,
			category: "Sandwiches",
			image: sandwich_default
		}]
	}
];
var ORDER_LINKS = {
	zomato: "https://www.zomato.com/hyderabad/miso-mojo-moosapet",
	swiggy: "https://www.swiggy.com/restaurants/miso-mojo-moosapet-hyderabad",
	googleMaps: "https://www.google.com/maps/search/?api=1&query=Miso+Mojo+IDL+Lake+Food+Courts+Habeeb+Nagar+Moosapet+Hyderabad",
	directions: "https://www.google.com/maps/dir/?api=1&destination=Miso+Mojo,209,Habeeb+Nagar,Moosapet,Hyderabad,Telangana+500085",
	phone: "+919876543210"
};
function Index() {
	const [selectedCat, setSelectedCat] = (0, import_react.useState)("all");
	const [dietFilter, setDietFilter] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [activeModalItem, setActiveModalItem] = (0, import_react.useState)(null);
	const [isBotOpen, setIsBotOpen] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)([{
		id: "1",
		sender: "bot",
		text: "Konnichiwa! 🍜 Welcome to **Miso Mojo Japanese Restaurant**.\n\nI'm **Mojo Assistant**, your personal dining concierge. How can I serve you today?",
		actions: [
			{
				label: "⭐ Top Chef Recommendations",
				query: "What are your best sellers?"
			},
			{
				label: "🌱 Pure Vegetarian Menu",
				query: "Show me pure veg items"
			},
			{
				label: "🛵 Order on Zomato or Swiggy",
				query: "How to order online?"
			},
			{
				label: "📍 Location & Timing",
				query: "Where are you located and what are your timings?"
			}
		]
	}]);
	const [inputMsg, setInputMsg] = (0, import_react.useState)("");
	const chatEndRef = (0, import_react.useRef)(null);
	const spotlightRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const handleMouseMove = (e) => {
			const x = e.clientX / window.innerWidth * 100;
			const y = e.clientY / window.innerHeight * 100;
			if (spotlightRef.current) spotlightRef.current.style.background = [
				`radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px,`,
				`  oklch(${.45 + x / 100 * .1} ${.18 + y / 100 * .06} ${22 + x / 100 * 40} / 0.13),`,
				`  oklch(${.8 - y / 100 * .15} ${.14 + x / 100 * .05} ${75 + y / 100 * 20} / 0.07) 40%,`,
				`  transparent 70%`,
				`)`
			].join("\n");
		};
		window.addEventListener("mousemove", handleMouseMove, { passive: true });
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);
	(0, import_react.useEffect)(() => {
		if (isBotOpen) chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, isBotOpen]);
	const handleSendMessage = (textToSend) => {
		const queryText = (textToSend || inputMsg).trim();
		if (!queryText) return;
		const userMsgId = Date.now().toString();
		const newMessages = [...messages, {
			id: userMsgId,
			sender: "user",
			text: queryText
		}];
		setMessages(newMessages);
		if (!textToSend) setInputMsg("");
		setTimeout(() => {
			const botResponse = generateBotAnswer(queryText);
			setMessages((prev) => [...prev, botResponse]);
		}, 450);
	};
	const generateBotAnswer = (q) => {
		const lower = q.toLowerCase();
		const id = (Date.now() + 1).toString();
		if (lower.includes("zomato") || lower.includes("swiggy") || lower.includes("order") || lower.includes("delivery")) return {
			id,
			sender: "bot",
			text: "🛵 **Order Directly to Your Doorstep!**\n\nWe partner with **Zomato** and **Swiggy** for fast, piping-hot delivery across Habeeb Nagar, Moosapet, Kukatpally & surrounding areas in Hyderabad.",
			actions: [{
				label: "🔴 Order on Zomato",
				url: ORDER_LINKS.zomato
			}, {
				label: "🟠 Order on Swiggy",
				url: ORDER_LINKS.swiggy
			}]
		};
		if (lower.includes("timing") || lower.includes("time") || lower.includes("open") || lower.includes("hour") || lower.includes("when")) return {
			id,
			sender: "bot",
			text: "🕒 **Restaurant Timings:**\n\n• **Monday – Sunday:** 6:00 PM – 11:00 PM\n• **Dine-in / Takeaway / Online Delivery:** Open Daily evening from 6 PM!",
			actions: [{
				label: "📍 View Directions on Map",
				url: ORDER_LINKS.directions
			}]
		};
		if (lower.includes("location") || lower.includes("address") || lower.includes("where") || lower.includes("place") || lower.includes("idl")) return {
			id,
			sender: "bot",
			text: "📍 **Address & Location:**\n\n**Miso Mojo**\n209, IDL Lake Food Courts, Habeeb Nagar, Moosapet, Hyderabad, Telangana 500085\n\nMap Plus Code: `F9CP+3P Hyderabad`",
			actions: [{
				label: "🗺️ Open Google Maps",
				url: ORDER_LINKS.googleMaps
			}, {
				label: "🚗 Get Driving Directions",
				url: ORDER_LINKS.directions
			}]
		};
		if (lower.includes("contact") || lower.includes("phone") || lower.includes("call") || lower.includes("number") || lower.includes("reserve")) return {
			id,
			sender: "bot",
			text: "📞 **Contact Details:**\n\n• Phone: **+91 98765 43210**\n• Location: IDL Lake Food Courts, Moosapet, Hyderabad\n• FSSAI Lic. No: 23624032004921",
			actions: [{
				label: "📞 Call Counter Now",
				url: `tel:${ORDER_LINKS.phone}`
			}]
		};
		if (lower.includes("best") || lower.includes("popular") || lower.includes("recommend") || lower.includes("special")) return {
			id,
			sender: "bot",
			text: "⭐ **Top Customer Favorites:**\n\n1. **Devil Spicy Chicken Ramen** (₹260) — Habanero oil 8-hr broth\n2. **Crispy Chicken Katsu Rolls** (₹280) — Gourmet sushi roll\n3. **Mojo Grand Special Ramen** (₹340) — Seafood & chicken loaded\n4. **Ultimate Cheese Corndog** (₹180) — Stretchy mozzarella pull!",
			actions: [{
				label: "🔥 Order Spicy Ramen on Zomato",
				url: ORDER_LINKS.zomato
			}, {
				label: "🛵 Order on Swiggy",
				url: ORDER_LINKS.swiggy
			}]
		};
		if (lower.includes("veg") || lower.includes("vegetarian") || lower.includes("pure veg")) return {
			id,
			sender: "bot",
			text: "🌱 **Vegetarian Delights:**\n\n• **Classic Veg Ramen** (₹210)\n• **Devil Spicy Veg Ramen** (₹230)\n• **Crispy Paneer Veg Sushi** (₹240)\n• **Garden Veg & Tofu Rice Bowl** (₹220)\n• **Cheese Pull Corndog** (₹180)",
			actions: [{
				label: "🌱 Filter Menu to Pure Veg",
				query: "veg"
			}, {
				label: "🛵 Order Veg Items on Swiggy",
				url: ORDER_LINKS.swiggy
			}]
		};
		if (lower.includes("spicy") || lower.includes("devil")) return {
			id,
			sender: "bot",
			text: "🌶️ **Devil Spicy Specials:**\n\n• **Devil Spicy Chicken Ramen** (₹260)\n• **Devil Spicy Veg Ramen** (₹230)\n• **Yangnyeom Korean Fried Chicken** (₹250)",
			actions: [{
				label: "🔴 Order Spicy Dishes on Zomato",
				url: ORDER_LINKS.zomato
			}]
		};
		return {
			id,
			sender: "bot",
			text: "I can answer any questions about our Japanese ramen, sushi, Korean snacks, location, hours, or order options on Zomato & Swiggy!",
			actions: [
				{
					label: "🛵 Order on Zomato",
					url: ORDER_LINKS.zomato
				},
				{
					label: "🛵 Order on Swiggy",
					url: ORDER_LINKS.swiggy
				},
				{
					label: "📍 View Location & Timings",
					query: "Where are you located and what are your timings?"
				}
			]
		};
	};
	const filteredCategories = (0, import_react.useMemo)(() => {
		return menuCategories.map((cat) => {
			if (selectedCat !== "all" && cat.id !== selectedCat) return null;
			const matchingItems = cat.items.filter((item) => {
				if (dietFilter === "veg" && !item.isVeg) return false;
				if (dietFilter === "non-veg" && item.isVeg) return false;
				if (dietFilter === "spicy" && !item.isSpicy) return false;
				if (dietFilter === "mini" && !item.isMini) return false;
				if (searchQuery.trim()) {
					const q = searchQuery.toLowerCase();
					const matchName = item.name.toLowerCase().includes(q);
					const matchDesc = item.desc.toLowerCase().includes(q);
					const matchCat = item.category.toLowerCase().includes(q);
					return matchName || matchDesc || matchCat;
				}
				return true;
			});
			if (matchingItems.length === 0) return null;
			return {
				...cat,
				items: matchingItems
			};
		}).filter((c) => c !== null);
	}, [
		selectedCat,
		dietFilter,
		searchQuery
	]);
	const totalFilteredCount = (0, import_react.useMemo)(() => {
		return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
	}, [filteredCategories]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background font-sans text-foreground selection:bg-gold/30",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: spotlightRef,
				className: "pointer-events-none fixed inset-0 z-0 transition-[background] duration-100",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden border-b border-gold/10 py-16 lg:py-28",
					style: { background: "radial-gradient(ellipse 90% 70% at 55% 45%, oklch(0.45 0.20 22 / 0.22) 0%, transparent 65%), radial-gradient(ellipse 60% 55% at 15% 75%, oklch(0.80 0.16 80 / 0.10) 0%, transparent 60%), oklch(0.09 0.008 260)" },
					children: [
						[
							{
								top: "12%",
								left: "8%",
								size: 8,
								cls: "animate-drift-1",
								color: "oklch(0.80 0.16 80 / 0.5)"
							},
							{
								top: "25%",
								left: "18%",
								size: 5,
								cls: "animate-drift-2",
								color: "oklch(0.52 0.22 22 / 0.6)"
							},
							{
								top: "60%",
								left: "5%",
								size: 6,
								cls: "animate-drift-3",
								color: "oklch(0.80 0.16 80 / 0.4)"
							},
							{
								top: "70%",
								left: "22%",
								size: 4,
								cls: "animate-drift-4",
								color: "oklch(0.62 0.14 160 / 0.5)"
							},
							{
								top: "40%",
								right: "6%",
								size: 7,
								cls: "animate-drift-5",
								color: "oklch(0.52 0.22 22 / 0.5)"
							}
						].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `absolute pointer-events-none rounded-full ${p.cls}`,
							style: {
								top: p.top,
								left: p.left,
								right: p.right,
								width: p.size,
								height: p.size,
								background: p.color,
								"--drift-x": "20px",
								"--drift-y": "-60px"
							}
						}, i)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-1/3 right-1/4 -z-10 h-[520px] w-[520px] rounded-full blur-[160px]",
							style: { background: "oklch(0.48 0.22 20 / 0.20)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-0 left-1/4 -z-10 h-[400px] w-[400px] rounded-full blur-[140px]",
							style: { background: "oklch(0.80 0.16 80 / 0.08)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "absolute bottom-0 left-0 right-0 w-full text-surface/50 pointer-events-none",
							viewBox: "0 0 1440 60",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							preserveAspectRatio: "none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M0 30 Q180 0 360 30 Q540 60 720 30 Q900 0 1080 30 Q1260 60 1440 30 L1440 60 L0 60Z",
								fill: "currentColor"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-12 overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-7 space-y-5 sm:space-y-6 text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold text-gold backdrop-blur-md max-w-full truncate",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: "IDL Lake Food Courts · Moosapet, Hyderabad"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "font-japan-ramen text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] sm:leading-none tracking-tight text-foreground uppercase",
										children: [
											"FINE JAPANESE ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-fire-gradient",
												children: "RAMEN & SUSHI"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-[48ch] text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans font-medium",
										children: "Experience steaming rich broths simmered for 8 hours, hand-crafted gourmet sushi rolls, and golden Korean cheese corndogs. Crafted with authentic Japanese ingredients right in the heart of Hyderabad."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 rounded-xl bg-surface border border-gold/20 px-3.5 sm:px-4 py-2 sm:py-2.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 text-gold fill-gold shrink-0" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-black text-foreground",
														children: "4.5 Rating"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground hidden sm:inline",
														children: "(44 Verified Reviews)"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 rounded-xl bg-surface border border-gold/20 px-3.5 sm:px-4 py-2 sm:py-2.5 text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-4 h-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open 6 PM – 11 PM" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center gap-2 rounded-xl bg-surface border border-gold/20 px-3.5 sm:px-4 py-2 sm:py-2.5 text-muted-foreground font-semibold",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "₹200–₹400 per person" })
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-4 w-full",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: ORDER_LINKS.zomato,
												target: "_blank",
												rel: "noreferrer",
												className: "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#CB202D] px-4 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-extrabold text-white shadow-xl shadow-[#CB202D]/30 transition-all hover:brightness-110 hover:scale-105 active:scale-95 text-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-4 h-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Order on Zomato" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: ORDER_LINKS.swiggy,
												target: "_blank",
												rel: "noreferrer",
												className: "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FC8019] px-4 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-extrabold text-white shadow-xl shadow-[#FC8019]/30 transition-all hover:brightness-110 hover:scale-105 active:scale-95 text-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-4 h-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Order on Swiggy" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: ORDER_LINKS.directions,
												target: "_blank",
												rel: "noreferrer",
												className: "col-span-2 sm:col-span-1 inline-flex items-center justify-center gap-2 sm:gap-2.5 rounded-2xl border border-gold/30 bg-surface/80 px-4 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-foreground transition-all hover:border-gold hover:text-gold backdrop-blur-md text-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "w-4 h-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Get Directions" })]
											})
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-5 relative flex items-center justify-center min-h-[300px] sm:min-h-[420px] lg:min-h-[480px] my-4 lg:my-0 max-w-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										className: "absolute w-[100%] sm:w-[115%] h-[100%] sm:h-[115%] animate-spin-slow pointer-events-none opacity-35",
										viewBox: "0 0 400 400",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "200",
											cy: "200",
											r: "195",
											fill: "none",
											stroke: "oklch(0.80 0.16 80)",
											strokeWidth: "0.9",
											strokeDasharray: "6 14"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "200",
											cy: "200",
											r: "175",
											fill: "none",
											stroke: "oklch(0.52 0.22 22)",
											strokeWidth: "0.6",
											strokeDasharray: "4 18"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border border-gold/25 scale-95 sm:scale-100 pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-[70px] sm:blur-[80px] pointer-events-none",
										style: { background: "oklch(0.80 0.16 80 / 0.20)" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-[50px] sm:blur-[60px] pointer-events-none",
										style: { background: "oklch(0.52 0.22 22 / 0.22)" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative z-10 w-[82%] sm:w-[92%] max-w-xs sm:max-w-md lg:max-w-lg animate-float",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute inset-4 sm:inset-5 rounded-full overflow-hidden opacity-35",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: hero_ramen_default,
													alt: "",
													className: "w-full h-full object-cover"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: ramen_graphic_default,
												alt: "Premium Miso Mojo Ramen Bowl Illustration",
												className: "relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500",
												style: { filter: "drop-shadow(0 0 35px oklch(0.80 0.16 80 / 0.4)) drop-shadow(0 0 18px oklch(0.52 0.22 22 / 0.3))" }
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
												className: "absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 w-28 sm:w-36 pointer-events-none",
												viewBox: "0 0 120 80",
												fill: "none",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														className: "animate-steam",
														d: "M30 75 Q27 55 35 35 Q43 15 38 0",
														stroke: "oklch(0.95 0.012 80 / 0.65)",
														strokeWidth: "2.5",
														strokeLinecap: "round"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														className: "animate-steam-2",
														d: "M60 75 Q57 58 65 40 Q73 22 68 0",
														stroke: "oklch(0.95 0.012 80 / 0.55)",
														strokeWidth: "2",
														strokeLinecap: "round"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														className: "animate-steam-3",
														d: "M90 75 Q87 60 93 45 Q99 30 96 0",
														stroke: "oklch(0.95 0.012 80 / 0.45)",
														strokeWidth: "1.5",
														strokeLinecap: "round"
													})
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute top-1 sm:top-2 right-0 sm:right-2 z-20 flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border border-gold/40 bg-obsidian/95 px-2.5 sm:px-3.5 py-1.5 sm:py-2 backdrop-blur-md shadow-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold fill-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider text-gold font-sans",
											children: "Chef's Pick"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] sm:text-[11px] font-black text-foreground font-display",
											children: "Devil Spicy Ramen"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-1/2 left-0 z-20 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full animate-drift-3",
										style: {
											background: "oklch(0.52 0.22 22 / 0.9)",
											"--drift-x": "15px",
											"--drift-y": "-40px"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-1/4 right-2 z-20 w-2 h-2 rounded-full animate-drift-1",
										style: {
											background: "oklch(0.80 0.16 80 / 0.9)",
											"--drift-x": "-10px",
											"--drift-y": "-30px"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -bottom-2 right-0 z-20 text-[28px] sm:text-[44px] opacity-25 pointer-events-none font-accent select-none leading-none text-gold",
										children: "ラーメン"
									})
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative z-20 border-y border-gold/20 py-8 sm:py-12 bg-obsidian overflow-hidden",
					style: { background: "linear-gradient(180deg, oklch(0.08 0.008 260) 0%, oklch(0.12 0.012 255) 100%)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 rounded-full blur-[100px] pointer-events-none",
						style: { background: "oklch(0.80 0.16 80 / 0.08)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto max-w-7xl px-4 sm:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 bg-surface/90 backdrop-blur-xl p-4 sm:p-6 text-center transition-all duration-300 hover:border-gold hover:shadow-2xl hover:shadow-gold/15 hover:-translate-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gold/10 blur-xl pointer-events-none group-hover:bg-gold/20 transition-all" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mx-auto w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-gold/20 via-amber-400/10 to-transparent border border-gold/40 flex items-center justify-center text-xl sm:text-2xl mb-3 shadow-inner group-hover:scale-110 transition-transform",
											children: "⭐"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "inline-flex items-center gap-1 text-2xl sm:text-4xl font-black text-gold font-sans tracking-tight",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-amber-400 text-lg sm:text-2xl",
												children: "★"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-black text-white font-sans mt-1 uppercase tracking-wider",
											children: "Google Rating"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-gold/80 font-sans font-semibold mt-0.5",
											children: "44 Verified Reviews"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 bg-surface/90 backdrop-blur-xl p-4 sm:p-6 text-center transition-all duration-300 hover:border-gold hover:shadow-2xl hover:shadow-gold/15 hover:-translate-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gold/10 blur-xl pointer-events-none group-hover:bg-gold/20 transition-all" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mx-auto w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-crimson/20 via-orange-500/10 to-transparent border border-crimson/40 flex items-center justify-center text-xl sm:text-2xl mb-3 shadow-inner group-hover:scale-110 transition-transform",
											children: "🍜"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-2xl sm:text-4xl font-black text-fire-gradient font-sans tracking-tight",
											children: "30+ Dishes"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-black text-white font-sans mt-1 uppercase tracking-wider",
											children: "Gourmet Menu"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-slate-300 font-sans font-medium mt-0.5",
											children: "Ramen · Sushi · Snacks"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 bg-surface/90 backdrop-blur-xl p-4 sm:p-6 text-center transition-all duration-300 hover:border-gold hover:shadow-2xl hover:shadow-gold/15 hover:-translate-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gold/10 blur-xl pointer-events-none group-hover:bg-gold/20 transition-all" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mx-auto w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-gold/10 to-transparent border border-gold/40 flex items-center justify-center text-xl sm:text-2xl mb-3 shadow-inner group-hover:scale-110 transition-transform",
											children: "🕕"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xl sm:text-3xl font-black text-gold font-sans tracking-tight",
											children: "6 PM – 11 PM"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-black text-white font-sans mt-1 uppercase tracking-wider",
											children: "Open Daily"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-slate-300 font-sans font-medium mt-0.5",
											children: "Mon – Sun Evening"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 bg-surface/90 backdrop-blur-xl p-4 sm:p-6 text-center transition-all duration-300 hover:border-gold hover:shadow-2xl hover:shadow-gold/15 hover:-translate-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gold/10 blur-xl pointer-events-none group-hover:bg-gold/20 transition-all" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mx-auto w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-emerald-500/20 via-gold/10 to-transparent border border-emerald-500/40 flex items-center justify-center text-xl sm:text-2xl mb-3 shadow-inner group-hover:scale-110 transition-transform",
											children: "📍"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xl sm:text-3xl font-black text-white font-sans tracking-tight",
											children: "3 Outlets"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-black text-gold font-sans mt-1 uppercase tracking-wider",
											children: "Hyd & Vijayawada"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-slate-300 font-sans font-medium mt-0.5",
											children: "Moosapet · DLF · Benz Circle"
										})
									]
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "showcase",
					className: "border-b border-gold/10 py-20 bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold tracking-widest text-gold uppercase font-sans",
								children: "// EXPLORE OUR SPECIALTIES"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl sm:text-5xl font-black text-foreground mt-1 text-fire-gradient",
								children: "Crafted Culinary Categories"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground max-w-md font-sans leading-relaxed",
								children: "Select a category below to instantly filter our menu and discover signature broths, fresh rolls & street snacks."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
							children: menuCategories.slice(0, 4).map((cat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setSelectedCat(cat.id);
									document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
								},
								className: "group relative overflow-hidden rounded-3xl border border-surface-3 bg-surface text-left transition-all duration-300 hover:border-gold/50 hover:glow-gold hover:scale-[1.02] shadow-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "aspect-[4/3] w-full overflow-hidden relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: cat.image,
											alt: cat.label,
											className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0",
											style: { background: "linear-gradient(to top, oklch(0.09 0.008 260) 0%, oklch(0.09 0.008 260 / 0.5) 40%, transparent 100%)" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute top-3 right-3 w-8 h-8 rounded-full bg-crimson/80 border border-gold/30 flex items-center justify-center text-[11px] font-black text-white font-mono",
											children: ["0", idx + 1]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 relative -mt-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] font-extrabold tracking-wider text-gold uppercase bg-obsidian/90 border border-gold/30 px-3 py-1 rounded-lg font-sans",
											children: [cat.items.length, " Dishes"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl font-extrabold text-foreground mt-3 group-hover:text-gold transition-colors",
											children: cat.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-1.5 font-sans line-clamp-2 leading-relaxed",
											children: cat.subtitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 inline-flex items-center gap-2 text-xs font-bold text-gold group-hover:translate-x-1.5 transition-transform",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore Menu" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
										})
									]
								})]
							}, cat.id))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "menu",
					className: "border-b border-border py-20 bg-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b border-border/80 bg-background py-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-7xl px-6 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: searchQuery,
											onChange: (e) => setSearchQuery(e.target.value),
											placeholder: "Search ramen broth, sushi rolls, corndogs...",
											className: "w-full rounded-2xl border border-slate-700 bg-surface/90 pl-11 pr-10 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-amber-400"
										}),
										searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setSearchQuery(""),
											className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2 text-xs font-semibold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setDietFilter("all"),
											className: `inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border transition-all ${dietFilter === "all" ? "bg-gold text-slate-950 border-gold font-extrabold shadow-md shadow-gold/20" : "bg-surface border-border text-muted-foreground hover:text-white"}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }),
												"All (",
												totalFilteredCount,
												")"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setDietFilter("veg"),
											className: `inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border transition-all ${dietFilter === "veg" ? "bg-emerald-500 text-slate-950 border-emerald-500 font-extrabold shadow-md shadow-emerald-500/20" : "bg-surface border-border text-emerald-400 hover:border-emerald-500/50"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "w-3.5 h-3.5" }), "Pure Veg"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setDietFilter("non-veg"),
											className: `inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border transition-all ${dietFilter === "non-veg" ? "bg-rose-500 text-white border-rose-500 font-extrabold shadow-md shadow-rose-500/20" : "bg-surface border-border text-rose-400 hover:border-rose-500/50"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "w-3.5 h-3.5" }), "Non-Veg"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setDietFilter("spicy"),
											className: `inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border transition-all ${dietFilter === "spicy" ? "bg-gradient-to-r from-orange-500 to-rose-600 text-white border-orange-500 font-extrabold shadow-md" : "bg-surface border-border text-orange-400 hover:border-orange-500/50"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "w-3.5 h-3.5" }), "Devil Spicy 🔥"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setDietFilter("mini"),
											className: `inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border transition-all ${dietFilter === "mini" ? "bg-amber-500/20 text-gold border-gold font-extrabold" : "bg-surface border-border text-muted-foreground hover:text-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Soup, { className: "w-3.5 h-3.5 text-amber-400" }), "Mini Bowls"]
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2 overflow-x-auto pb-1 text-xs uppercase tracking-wider scrollbar-none font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSelectedCat("all"),
									className: `inline-flex items-center gap-1.5 whitespace-nowrap px-4 py-2.5 rounded-xl border transition-all ${selectedCat === "all" ? "border-gold bg-gold/10 text-gold font-black" : "border-transparent text-muted-foreground hover:text-white"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { className: "w-3.5 h-3.5" }), "All Categories"]
								}), menuCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSelectedCat(cat.id),
									className: `inline-flex items-center gap-1.5 whitespace-nowrap px-4 py-2.5 rounded-xl border transition-all ${selectedCat === cat.id ? "border-gold bg-gold/10 text-gold font-black" : "border-transparent text-muted-foreground hover:text-white"}`,
									children: [
										cat.id === "ramen" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Soup, { className: "w-3.5 h-3.5 text-gold" }),
										cat.id === "sushi" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "w-3.5 h-3.5 text-rose-400" }),
										cat.id === "rice" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-emerald-400" }),
										cat.id === "korean" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "w-3.5 h-3.5 text-orange-400" }),
										cat.id === "sandwich" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { className: "w-3.5 h-3.5 text-amber-400" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cat.label })
									]
								}, cat.id))]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-7xl px-6 pt-12",
						children: filteredCategories.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center py-20 bg-surface/40 border border-border rounded-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "w-12 h-12 text-slate-600 mx-auto mb-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl font-extrabold text-foreground",
									children: "No dishes matched your filter"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-2 max-w-sm mx-auto font-sans",
									children: "Try adjusting your search keyword or resetting the dietary filters."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setSearchQuery("");
										setDietFilter("all");
										setSelectedCat("all");
									},
									className: "mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gold text-xs font-black text-slate-950 shadow-lg shadow-gold/20",
									children: "Reset All Filters"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-20",
							children: filteredCategories.map((cat, catIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-border pb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-extrabold tracking-widest text-gold uppercase",
										children: [
											"// 0",
											catIndex + 1,
											" CATEGORY"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-4xl font-black text-white mt-1",
										children: cat.label
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-muted-foreground font-mono",
										children: [cat.items.length, " items available"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6",
									children: cat.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-border bg-surface/80 p-3 sm:p-6 transition-all hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative aspect-square sm:aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-5 bg-obsidian",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: item.image,
														alt: item.name,
														className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute top-2 left-2 sm:top-3 sm:left-3",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: `inline-flex items-center justify-center p-1 rounded-md border backdrop-blur-md ${item.isVeg ? "border-emerald-500/50 text-emerald-400 bg-emerald-950/80" : "border-rose-500/50 text-rose-400 bg-rose-950/80"}`,
															children: item.isVeg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "w-3 h-3 text-rose-400" })
														})
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-xs sm:text-xl font-bold text-white group-hover:text-gold transition-colors line-clamp-1",
													children: item.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-xs sm:text-2xl font-black text-gold shrink-0",
													children: item.price
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "hidden sm:block text-xs text-muted-foreground leading-relaxed font-sans line-clamp-2 mt-1",
												children: item.desc
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-border/80 flex items-center gap-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setActiveModalItem(item),
												className: "w-full py-2 sm:py-2.5 rounded-xl bg-gold/10 border border-gold/40 text-gold text-[10px] sm:text-xs font-black text-center hover:bg-gold hover:text-slate-950 transition-colors",
												children: "Details & Order"
											})
										})]
									}, item.id))
								})]
							}, cat.id))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "gallery",
					className: "border-b border-border py-20 bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center max-w-2xl mx-auto mb-16 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold tracking-widest text-gold uppercase",
									children: "// AUTHENTIC JAPANESE DINING"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-4xl sm:text-5xl font-black text-foreground",
									children: "The Miso Mojo Experience"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground font-sans leading-relaxed",
									children: "Step into our food court counter at IDL Lake Food Courts, Moosapet. Watch our chefs craft hand-rolled sushi & ladle steaming broths."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-3xl overflow-hidden border border-gold/30 bg-surface group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: chef_default,
										alt: "Miso Mojo Chef preparing fresh Japanese ramen noodles",
										className: "w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-obsidian/80 border border-gold/30 backdrop-blur-md",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-extrabold uppercase tracking-widest text-gold",
												children: "Master Craftsmanship"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-2xl font-black text-white mt-1",
												children: "Hand-Cut Noodles & 8-Hour Simmered Broth"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground font-sans mt-1",
												children: "Every bowl is prepared fresh with imported Japanese dashi & spices."
											})
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-3xl overflow-hidden border border-gold/30 bg-surface group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: interior_default,
										alt: "Miso Mojo Counter at IDL Lake Food Courts Moosapet",
										className: "w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-obsidian/80 border border-gold/30 backdrop-blur-md",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-extrabold uppercase tracking-widest text-gold",
												children: "IDL Lake Food Courts"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-2xl font-black text-white mt-1",
												children: "Warm Counter & Lakeside Seating"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground font-sans mt-1",
												children: "Enjoy hot ramen under warm paper lanterns by the lake."
											})
										]
									})
								]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-b border-border bg-gradient-to-r from-obsidian via-surface to-obsidian py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold tracking-widest text-gold uppercase",
								children: "// PIPING HOT HOME DELIVERY"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl sm:text-5xl font-black text-white mt-2",
								children: "Order Directly to Your Doorstep"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground max-w-lg mx-auto mt-3 font-sans leading-relaxed",
								children: "We package ramen noodles & broths separately to ensure your ramen arrives fresh, hot and restaurant-perfect."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: ORDER_LINKS.zomato,
									target: "_blank",
									rel: "noreferrer",
									className: "group relative overflow-hidden rounded-3xl border border-[#CB202D]/40 bg-[#CB202D]/5 p-8 text-left transition-all hover:bg-[#CB202D]/15 hover:border-[#CB202D] hover:shadow-2xl hover:shadow-[#CB202D]/20 backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#CB202D] text-white font-extrabold text-2xl shadow-lg shadow-[#CB202D]/40",
												children: "Z"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-extrabold uppercase tracking-wider text-[#CB202D]",
												children: "Zomato Express"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-3xl font-black text-white group-hover:text-[#CB202D] transition-colors",
												children: "Order on Zomato"
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-6 h-6 text-[#CB202D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-5 font-sans leading-relaxed",
										children: "Live tracking & fast delivery across Habeeb Nagar, Moosapet, Kukatpally & surrounding areas in Hyderabad."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: ORDER_LINKS.swiggy,
									target: "_blank",
									rel: "noreferrer",
									className: "group relative overflow-hidden rounded-3xl border border-[#FC8019]/40 bg-[#FC8019]/5 p-8 text-left transition-all hover:bg-[#FC8019]/15 hover:border-[#FC8019] hover:shadow-2xl hover:shadow-[#FC8019]/20 backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FC8019] text-white font-extrabold text-2xl shadow-lg shadow-[#FC8019]/40",
												children: "S"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-extrabold uppercase tracking-wider text-[#FC8019]",
												children: "Swiggy Delivery"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-3xl font-black text-white group-hover:text-[#FC8019] transition-colors",
												children: "Order on Swiggy"
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-6 h-6 text-[#FC8019] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-5 font-sans leading-relaxed",
										children: "Instant live delivery updates & exclusive partner offers available on Swiggy."
									})]
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "info",
					className: "border-b border-border py-14 sm:py-20 bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 grid gap-6 sm:gap-8 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-surface/80 p-5 sm:p-8 shadow-xl flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 sm:mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold tracking-widest text-gold uppercase",
										children: "// OUR OUTLETS & LOCATIONS"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "self-start sm:self-auto px-3 py-1 rounded-full text-[10px] font-extrabold bg-gold/10 text-gold border border-gold/30",
										children: "3 Outlets Open"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl sm:text-4xl font-black text-foreground",
									children: "Find Miso Mojo Near You"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-3 font-sans text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 rounded-2xl bg-obsidian/80 border border-gold/20 flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-extrabold text-foreground text-xs",
												children: "Moosapet Flagship (IDL Lake)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-muted-foreground",
												children: "209, IDL Lake Food Courts, Habeeb Nagar, Moosapet, Hyderabad"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 rounded-2xl bg-obsidian/80 border border-border flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-extrabold text-foreground text-xs",
												children: "DLF Cyber City (Gachibowli)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-muted-foreground",
												children: "Food Street, DLF Cyber City, Gachibowli, Hyderabad"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 rounded-2xl bg-obsidian/80 border border-border flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-extrabold text-foreground text-xs",
												children: "Vijayawada Outlet"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-muted-foreground",
												children: "Benz Circle Food Hub, MG Road, Vijayawada"
											})] })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-sans",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-4 h-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Daily ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "6:00 PM – 11:00 PM" })] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/branches",
										className: "text-gold font-bold text-xs hover:underline flex items-center gap-1",
										children: "All Locations →"
									})]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: ORDER_LINKS.googleMaps,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center justify-center gap-2 rounded-2xl bg-gold px-5 py-3.5 text-xs font-black text-slate-950 shadow-lg shadow-gold/20 hover:bg-amber-300 transition-colors text-center flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Google Maps Location" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: ORDER_LINKS.directions,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-surface px-5 py-3.5 text-xs font-bold text-white hover:border-gold transition-colors text-center flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "w-4 h-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Get Driving Directions" })]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-surface/80 p-5 sm:p-8 shadow-xl flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold tracking-widest text-gold uppercase",
									children: "// COUNTER CONTACT & RATINGS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl sm:text-4xl font-black text-white mt-1",
									children: "Customer Reviews"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 sm:mt-6 p-4 sm:p-6 rounded-2xl bg-obsidian border border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground font-sans",
											children: "Google Reviews Rating"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline gap-2.5 sm:gap-3 mt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-3xl sm:text-5xl font-black text-foreground",
												children: "4.5"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex text-gold text-lg sm:text-xl",
												children: ["★".repeat(4), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-slate-600",
													children: "★"
												})]
											})]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-mono text-muted-foreground shrink-0",
											children: "44 Reviews"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 h-2.5 overflow-hidden rounded-full bg-slate-800",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-gold rounded-full",
											style: { width: "90%" }
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 sm:mt-6 p-4 sm:p-5 rounded-2xl bg-obsidian border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "w-5 h-5 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] uppercase text-muted-foreground font-sans font-bold",
											children: "Table / Counter Phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-foreground",
											children: "+91 98765 43210"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${ORDER_LINKS.phone}`,
										className: "w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gold text-slate-950 text-xs font-black hover:bg-amber-300 transition-colors text-center",
										children: "Call Now"
									})]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 sm:mt-6 text-xs text-muted-foreground font-sans space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["• FSSAI Lic. No: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "23624032004921" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "• Dine-in & Takeaway open daily from 6:00 PM" })]
							})]
						})]
					})
				})
			] }),
			activeModalItem && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-lg rounded-3xl border border-gold/40 bg-surface p-5 sm:p-6 shadow-2xl space-y-4 sm:space-y-5 max-h-[90vh] overflow-y-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveModalItem(null),
							className: "absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-slate-800 hover:text-white transition-colors z-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/9] w-full overflow-hidden rounded-2xl bg-obsidian",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: activeModalItem.image,
								alt: activeModalItem.name,
								className: "w-full h-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-extrabold tracking-widest text-gold uppercase",
								children: activeModalItem.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl sm:text-3xl font-black text-foreground",
								children: activeModalItem.name
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl sm:text-3xl font-black text-gold",
								children: activeModalItem.price
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground font-sans leading-relaxed font-medium",
							children: activeModalItem.desc
						}),
						activeModalItem.ingredients && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-extrabold uppercase text-muted-foreground",
								children: "Key Ingredients"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1.5",
								children: activeModalItem.ingredients.map((ing, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2.5 py-1 rounded-lg bg-obsidian border border-border text-[10px] text-muted-foreground",
									children: ing
								}, i))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `px-3 py-1 rounded-lg text-[10px] font-bold ${activeModalItem.isVeg ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" : "bg-rose-500/10 text-rose-400 border border-rose-500/30"}`,
								children: activeModalItem.isVeg ? "Pure Veg 🌱" : "Non-Veg 🍗"
							}), activeModalItem.isSpicy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-3 py-1 rounded-lg text-[10px] font-bold bg-orange-500/10 text-orange-400 border border-orange-500/30",
								children: "Devil Spicy 🔥"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-4 border-t border-border flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: ORDER_LINKS.zomato,
								target: "_blank",
								rel: "noreferrer",
								className: "flex-1 py-3.5 rounded-2xl bg-[#CB202D] text-white text-xs font-black text-center shadow-lg hover:bg-[#b01a25] transition-colors",
								children: "Order on Zomato"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: ORDER_LINKS.swiggy,
								target: "_blank",
								rel: "noreferrer",
								className: "flex-1 py-3.5 rounded-2xl bg-[#FC8019] text-white text-xs font-black text-center shadow-lg hover:bg-[#e47011] transition-colors",
								children: "Order on Swiggy"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50",
				children: !isBotOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setIsBotOpen(true),
					className: "group flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 p-3 sm:px-5 sm:py-3.5 text-xs font-black text-slate-950 shadow-2xl transition-all hover:scale-105 focus:outline-none ring-2 sm:ring-4 ring-amber-400/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "w-5 h-5 animate-pulse text-slate-950 shrink-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline font-extrabold",
							children: "Ask Mojo Assistant"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline sm:hidden font-extrabold text-[11px]",
							children: "Ask Mojo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-2 w-2 rounded-full bg-slate-950 animate-ping shrink-0" })
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-[480px] sm:h-[550px] w-[calc(100vw-32px)] max-w-[360px] sm:w-[420px] flex-col rounded-3xl border border-gold/40 bg-obsidian shadow-2xl overflow-hidden font-sans ring-1 ring-amber-500/20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border bg-surface px-4 sm:px-5 py-3.5 sm:py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 text-slate-950 font-bold shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "w-5 h-5 sm:w-6 sm:h-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "text-xs sm:text-sm font-bold text-white flex items-center gap-2",
									children: ["Mojo Assistant", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2 w-2 rounded-full bg-emerald-400" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[9px] sm:text-[10px] text-muted-foreground",
									children: "Ask menu questions, orders & timings"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setIsBotOpen(false),
								className: "rounded-lg p-1.5 text-muted-foreground hover:bg-slate-800 hover:text-white transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 overflow-y-auto p-4 space-y-3 text-xs font-sans",
							children: [messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed whitespace-pre-wrap ${m.sender === "user" ? "bg-gold text-slate-950 font-bold rounded-tr-none shadow-md" : "bg-surface border border-border text-slate-200 rounded-tl-none shadow-sm"}`,
									children: m.text
								}), m.actions && m.actions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex flex-wrap gap-1.5 max-w-[85%]",
									children: m.actions.map((act, i) => act.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: act.url,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1.5 rounded-xl bg-gold/10 border border-gold/40 px-3.5 py-1.5 text-[11px] font-bold text-gold hover:bg-gold hover:text-slate-950 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: act.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3 h-3" })]
									}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => handleSendMessage(act.query),
										className: "inline-flex items-center gap-1.5 rounded-xl bg-surface border border-border px-3.5 py-1.5 text-[11px] text-muted-foreground hover:border-gold hover:text-gold transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: act.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3 h-3 text-slate-500" })]
									}, i))
								})]
							}, m.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: chatEndRef })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border bg-surface/60 px-3 py-2 flex items-center gap-1.5 overflow-x-auto text-[10px] scrollbar-none font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleSendMessage("What are your best sellers?"),
									className: "whitespace-nowrap rounded-xl border border-border bg-surface px-3 py-1.5 text-muted-foreground hover:border-gold hover:text-white transition-colors",
									children: "⭐ Best Sellers"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleSendMessage("Show me pure veg items"),
									className: "whitespace-nowrap rounded-xl border border-border bg-surface px-3 py-1.5 text-muted-foreground hover:border-gold hover:text-white transition-colors",
									children: "🌱 Pure Veg"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleSendMessage("Where are you located and what are your timings?"),
									className: "whitespace-nowrap rounded-xl border border-border bg-surface px-3 py-1.5 text-muted-foreground hover:border-gold hover:text-white transition-colors",
									children: "⏰ Timings"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								handleSendMessage();
							},
							className: "flex items-center gap-2 border-t border-border bg-surface p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: inputMsg,
								onChange: (e) => setInputMsg(e.target.value),
								placeholder: "Type your message...",
								className: "flex-1 rounded-xl border border-border bg-obsidian px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "flex h-9 w-9 items-center justify-center rounded-xl bg-gold text-slate-950 hover:bg-amber-300 transition-colors shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" })
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
