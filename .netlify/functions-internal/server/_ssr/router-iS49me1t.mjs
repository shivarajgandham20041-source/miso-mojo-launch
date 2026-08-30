import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Clock, D as Camera, O as Building2, a as Store, b as Flame, c as Soup, g as MapPin, l as ShoppingBag, o as Star, p as PhoneCall, s as Sparkles, u as ShieldCheck, v as Info, y as House } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-iS49me1t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B8qdCktG.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Miso Mojo — Fine Japanese Ramen & Sushi Bar | Order on Zomato & Swiggy" },
			{
				name: "description",
				content: "Authentic Japanese ramen, fresh sushi, bao buns & Korean street snacks at IDL Lake Food Courts Moosapet, DLF Gachibowli & Vijayawada."
			},
			{
				name: "author",
				content: "Miso Mojo Japanese Restaurant"
			},
			{
				property: "og:title",
				content: "Miso Mojo — Fine Japanese Ramen & Sushi Bar"
			},
			{
				property: "og:description",
				content: "Authentic Japanese ramen, fresh sushi, bao buns & Korean street snacks."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@400;500;600;700;800&family=Noto+Serif+JP:wght@300;400;500;600;700;900&family=Klee+One:wght@400;600&family=Manrope:wght@400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Zen+Antique&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
var NAV_LINKS = [
	{
		href: "/",
		label: "Home",
		icon: House
	},
	{
		href: "/menu",
		label: "Menu",
		icon: Soup
	},
	{
		href: "/about",
		label: "About",
		icon: Info
	},
	{
		href: "/franchise",
		label: "Franchise",
		icon: Building2
	},
	{
		href: "/gallery",
		label: "Gallery",
		icon: Camera
	},
	{
		href: "/reviews",
		label: "Reviews",
		icon: Star
	},
	{
		href: "/branches",
		label: "Branches",
		icon: Store
	},
	{
		href: "/contact",
		label: "Contact",
		icon: PhoneCall
	}
];
function GlobalNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const currentPath = useRouterState().location.pathname;
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 30);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "absolute top-0 inset-x-0 z-50 transition-all duration-300 border-b border-gold/25 bg-obsidian/90 backdrop-blur-xl shadow-2xl shadow-black/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl h-16 sm:h-20 px-4 sm:px-8 flex items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3 shrink-0 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-gold via-amber-400 to-crimson p-[1.5px] shadow-lg shadow-gold/20 group-hover:scale-105 transition-transform",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full h-full rounded-[14px] bg-obsidian flex items-center justify-center text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "w-4 h-4 text-gold fill-gold/20" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-japan-ramen text-lg sm:text-2xl font-black tracking-wider text-foreground block leading-none group-hover:text-gold transition-colors",
						children: "MISO MOJO"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[8px] sm:text-[9.5px] tracking-widest text-gold/80 font-bold block uppercase mt-1 font-serif",
						children: "Japanese Ramen & Sushi"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-1",
					children: NAV_LINKS.map((l) => {
						const Icon = l.icon;
						const active = currentPath === l.href;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: l.href,
							className: `relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${active ? "text-gold bg-gold/15 font-extrabold border border-gold/30 shadow-inner" : "text-slate-300 hover:text-gold hover:bg-gold/10"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `w-3.5 h-3.5 ${active ? "text-gold" : "text-slate-400"}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.label }),
								active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold shadow-sm" })
							]
						}, l.href);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden sm:flex items-center gap-3 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://www.zomato.com/hyderabad/miso-mojo-moosapet",
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-crimson via-rose-600 to-amber-500 text-white px-5 py-2.5 text-xs font-black tracking-wide hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-crimson/30 border border-gold/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-4 h-4 text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Order Now" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen((o) => !o),
					className: "lg:hidden w-10 h-10 rounded-xl bg-surface border border-gold/30 flex flex-col items-center justify-center gap-1.5",
					"aria-label": "Toggle Navigation",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-5 h-0.5 bg-gold transition-transform ${open ? "rotate-45 translate-y-2" : ""}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-5 h-0.5 bg-gold transition-opacity ${open ? "opacity-0" : ""}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-5 h-0.5 bg-gold transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}` })
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:hidden border-t border-gold/20 bg-obsidian/98 backdrop-blur-2xl px-6 py-4 space-y-2 shadow-2xl",
			children: [NAV_LINKS.map((l) => {
				const Icon = l.icon;
				const active = currentPath === l.href;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: l.href,
					onClick: () => setOpen(false),
					className: `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${active ? "text-obsidian bg-gradient-to-r from-gold to-amber-400 font-black shadow-md" : "text-slate-300 hover:text-gold hover:bg-surface"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `w-4 h-4 ${active ? "text-obsidian" : "text-gold"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.label })]
				}, l.href);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "https://www.zomato.com/hyderabad/miso-mojo-moosapet",
				target: "_blank",
				rel: "noreferrer",
				className: "flex items-center justify-center gap-2 text-center rounded-xl bg-gradient-to-r from-crimson to-amber-500 text-white px-4 py-3 text-sm font-black mt-3 shadow-lg border border-gold/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Order Now" })]
			})]
		})]
	});
}
function GlobalFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-gold/30 bg-obsidian px-6 sm:px-10 py-16 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-6 bottom-4 text-[120px] font-accent opacity-5 pointer-events-none select-none text-gold leading-none",
				children: "ラーメン"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-24 left-1/3 w-96 h-96 rounded-full blur-[140px] pointer-events-none",
				style: { background: "oklch(0.80 0.16 80 / 0.08)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-2xl bg-gradient-to-tr from-gold via-amber-400 to-crimson p-[1.5px] shadow-lg shadow-gold/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full h-full rounded-[14px] bg-obsidian flex items-center justify-center text-gold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "w-5 h-5 text-gold fill-gold/20" })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-japan-ramen text-2xl font-black tracking-wider text-foreground block leading-none",
									children: "MISO MOJO"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] text-gold/90 tracking-widest uppercase font-bold block mt-1 font-serif",
									children: "Japanese Ramen & Sushi Bar"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate-400 font-sans leading-relaxed",
								children: "Bold 8-hour broths. Slurpy artisanal noodles. Gourmet sushi & Korean street food crafted for serious cravings in Hyderabad."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-1 flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-[10px] font-extrabold text-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3 text-gold" }), " Authentic Recipe"]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "font-display text-xs font-black text-foreground uppercase tracking-widest flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-gold" }), " Quick Links"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-x-4 gap-y-2.5",
							children: NAV_LINKS.map((l) => {
								const Icon = l.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: l.href,
									className: "flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-gold transition-all duration-200 group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-3.5 h-3.5 text-gold/70 group-hover:text-gold group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.label })]
								}, l.href);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "font-display text-xs font-black text-foreground uppercase tracking-widest flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-gold" }), " Our Outlets & Locations"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-slate-300 font-sans space-y-2.5 leading-relaxed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold font-bold shrink-0",
										children: "📍"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Moosapet:" }), " 209, IDL Lake Food Courts, Hyd"] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold font-bold shrink-0",
										children: "📍"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "DLF Gachibowli:" }), " Food Street, DLF City, Hyd"] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold font-bold shrink-0",
										children: "📍"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Vijayawada:" }), " Benz Circle Food Hub, MG Rd"] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-1 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface border border-gold/20 text-gold/90 font-extrabold text-[10px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3 h-3 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Daily: 6 PM – 11 PM" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/branches",
										className: "text-[11px] font-bold text-gold hover:underline flex items-center gap-1",
										children: "All Outlets →"
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "font-display text-xs font-black text-foreground uppercase tracking-widest flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-4 h-4 text-gold" }), " Order Online"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate-400 font-sans",
								children: "Hot & fresh delivery direct to your doorstep via partner apps:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://www.zomato.com/hyderabad/miso-mojo-moosapet",
									target: "_blank",
									rel: "noreferrer",
									className: "flex items-center justify-between rounded-xl bg-gradient-to-r from-[#CB202D] via-red-600 to-rose-700 text-white px-4 py-3 text-xs font-black hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-red-950/40 border border-white/20 group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-4 h-4 text-white group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Order on Zomato" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold",
										children: "Fast Delivery"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://www.swiggy.com/restaurants/miso-mojo-moosapet-hyderabad",
									target: "_blank",
									rel: "noreferrer",
									className: "flex items-center justify-between rounded-xl bg-gradient-to-r from-[#FC8019] via-amber-600 to-orange-600 text-white px-4 py-3 text-xs font-black hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-orange-950/40 border border-white/20 group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-4 h-4 text-white group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Order on Swiggy" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold",
										children: "Live Track"
									})]
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mt-14 pt-6 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-japan-ramen text-sm text-gold",
						children: "MISO MOJO"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" All rights reserved."
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-full bg-surface/80 border border-gold/25 px-4 py-1.5 text-[11px] text-gold/90 font-extrabold shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FSSAI Lic. No. 23624032004921" })]
				})]
			})
		]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalFooter, {})
		]
	});
}
var $$splitComponentImporter$7 = () => import("./routes-DuUKjFAW.mjs");
var Route$7 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Miso Mojo — Fine Japanese Ramen & Sushi Bar | Order on Zomato & Swiggy" },
		{
			name: "description",
			content: "Experience luxury Japanese Street Dining at Miso Mojo, IDL Lake Food Courts, Moosapet, Hyderabad. Hand-crafted Ramen, Gourmet Sushi & Korean Snacks. Order online on Zomato & Swiggy!"
		},
		{
			property: "og:title",
			content: "Miso Mojo — Japanese Ramen & Gourmet Sushi in Hyderabad"
		},
		{
			property: "og:description",
			content: "Steaming artisanal ramen, sushi rolls & Korean corndogs at IDL Lake Food Courts, Moosapet, Hyderabad."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./about-Cbw7pHA6.mjs");
var Route$6 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About Us — Miso Mojo | Our Story, Mission & Values" }, {
		name: "description",
		content: "Learn about Miso Mojo — Hyderabad's premium Japanese ramen and sushi bar. Our story, our chefs, and our passion for authentic Japanese street dining."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./branches-Btrqlmlx.mjs");
var Route$5 = createFileRoute("/branches")({
	head: () => ({ meta: [{ title: "Our Branches — Miso Mojo | IDL Lake Food Courts, Moosapet, Hyderabad" }, {
		name: "description",
		content: "Find Miso Mojo near you. Currently serving at IDL Lake Food Courts, Habeeb Nagar, Moosapet, Hyderabad. Order online or visit us for dine-in."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-AUTJUWyW.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact Us — Miso Mojo | Hyderabad Japanese Ramen Restaurant" }, {
		name: "description",
		content: "Contact Miso Mojo at IDL Lake Food Courts, Moosapet, Hyderabad. Open daily 6–11 PM. Order online via Zomato & Swiggy."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./franchise-BjQGPuXi.mjs");
var Route$3 = createFileRoute("/franchise")({
	head: () => ({ meta: [{ title: "Franchise Opportunities — Miso Mojo | Partner With Us" }, {
		name: "description",
		content: "Own a Miso Mojo Japanese Ramen & Sushi franchise. Low setup cost, high ROI Asian QSR street food model with standardized central prep & training."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./gallery-BEije_nF.mjs");
var Route$2 = createFileRoute("/gallery")({
	head: () => ({ meta: [{ title: "Gallery & Vibe — Miso Mojo | Photo Highlights Hyderabad" }, {
		name: "description",
		content: "Visual feast of Miso Mojo Japanese culinary creations, lake view dining ambiance, broth prep, and customer highlights at IDL Lake Food Courts."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./menu-ONuxigRd.mjs");
var Route$1 = createFileRoute("/menu")({
	head: () => ({ meta: [{ title: "Full Menu — Miso Mojo | Japanese Ramen & Sushi Hyderabad" }, {
		name: "description",
		content: "Explore our full menu of artisanal 8-hour broths, gourmet sushi, Korean cheese corndogs & Japanese sandwiches in Hyderabad."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./reviews-Nl1mCbHZ.mjs");
var Route = createFileRoute("/reviews")({
	head: () => ({ meta: [{ title: "Customer Reviews — Miso Mojo | Verified Hyderabad Ratings" }, {
		name: "description",
		content: "Read 44+ verified customer reviews for Miso Mojo Japanese Ramen & Sushi Bar at IDL Lake Food Courts, Hyderabad. Rating 4.5/5 on Zomato & Google."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AboutRoute: Route$6.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$8
	}),
	BranchesRoute: Route$5.update({
		id: "/branches",
		path: "/branches",
		getParentRoute: () => Route$8
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$8
	}),
	FranchiseRoute: Route$3.update({
		id: "/franchise",
		path: "/franchise",
		getParentRoute: () => Route$8
	}),
	GalleryRoute: Route$2.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$8
	}),
	MenuRoute: Route$1.update({
		id: "/menu",
		path: "/menu",
		getParentRoute: () => Route$8
	}),
	ReviewsRoute: Route.update({
		id: "/reviews",
		path: "/reviews",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
