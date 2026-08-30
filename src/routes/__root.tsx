import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Home, Info, Store, PhoneCall, ShoppingBag, MapPin, Clock, ShieldCheck, Flame, Sparkles, UtensilsCrossed, Soup, ChefHat, Camera, Star, Building2 } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Miso Mojo — Fine Japanese Ramen & Sushi Bar | Order on Zomato & Swiggy" },
      { name: "description", content: "Authentic Japanese ramen, fresh sushi, bao buns & Korean street snacks at IDL Lake Food Courts Moosapet, DLF Gachibowli & Vijayawada." },
      { name: "author", content: "Miso Mojo Japanese Restaurant" },
      { property: "og:title", content: "Miso Mojo — Fine Japanese Ramen & Sushi Bar" },
      { property: "og:description", content: "Authentic Japanese ramen, fresh sushi, bao buns & Korean street snacks." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@400;500;600;700;800&family=Noto+Serif+JP:wght@300;400;500;600;700;900&family=Klee+One:wght@400;600&family=Manrope:wght@400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Zen+Antique&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const NAV_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/menu", label: "Menu", icon: Soup },
  { href: "/about", label: "About", icon: Info },
  { href: "/franchise", label: "Franchise", icon: Building2 },
  { href: "/gallery", label: "Gallery", icon: Camera },
  { href: "/reviews", label: "Reviews", icon: Star },
  { href: "/branches", label: "Branches", icon: Store },
  { href: "/contact", label: "Contact", icon: PhoneCall },
];

function GlobalNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="absolute top-0 inset-x-0 z-50 transition-all duration-300 border-b border-gold/25 bg-obsidian/90 backdrop-blur-xl shadow-2xl shadow-black/80">
      <div className="mx-auto max-w-7xl h-16 sm:h-20 px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-gold via-amber-400 to-crimson p-[1.5px] shadow-lg shadow-gold/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-[14px] bg-obsidian flex items-center justify-center text-gold">
              <Flame className="w-4 h-4 text-gold fill-gold/20" />
            </div>
          </div>
          <div>
            <span className="font-japan-ramen text-lg sm:text-2xl font-black tracking-wider text-foreground block leading-none group-hover:text-gold transition-colors">
              MISO MOJO
            </span>
            <span className="text-[8px] sm:text-[9.5px] tracking-widest text-gold/80 font-bold block uppercase mt-1 font-serif">
              Japanese Ramen &amp; Sushi
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(l => {
            const Icon = l.icon;
            const active = currentPath === l.href;
            return (
              <Link
                key={l.href}
                to={l.href}
                className={`relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  active
                    ? "text-gold bg-gold/15 font-extrabold border border-gold/30 shadow-inner"
                    : "text-slate-300 hover:text-gold hover:bg-gold/10"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? "text-gold" : "text-slate-400"}`} />
                <span>{l.label}</span>
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold shadow-sm" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="https://www.zomato.com/hyderabad/miso-mojo-moosapet"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-crimson via-rose-600 to-amber-500 text-white px-5 py-2.5 text-xs font-black tracking-wide hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-crimson/30 border border-gold/40"
          >
            <ShoppingBag className="w-4 h-4 text-white" />
            <span>Order Now</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="lg:hidden w-10 h-10 rounded-xl bg-surface border border-gold/30 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle Navigation"
        >
          <span className={`w-5 h-0.5 bg-gold transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-gold transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-gold transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-obsidian/98 backdrop-blur-2xl px-6 py-4 space-y-2 shadow-2xl">
          {NAV_LINKS.map(l => {
            const Icon = l.icon;
            const active = currentPath === l.href;
            return (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  active
                    ? "text-obsidian bg-gradient-to-r from-gold to-amber-400 font-black shadow-md"
                    : "text-slate-300 hover:text-gold hover:bg-surface"
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? "text-obsidian" : "text-gold"}`} />
                <span>{l.label}</span>
              </Link>
            );
          })}
          <a
            href="https://www.zomato.com/hyderabad/miso-mojo-moosapet"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 text-center rounded-xl bg-gradient-to-r from-crimson to-amber-500 text-white px-4 py-3 text-sm font-black mt-3 shadow-lg border border-gold/30"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order Now</span>
          </a>
        </div>
      )}
    </header>
  );
}

function GlobalFooter() {
  return (
    <footer className="relative border-t border-gold/30 bg-obsidian px-6 sm:px-10 py-16 overflow-hidden">
      {/* Background Japanese Watermark */}
      <div className="absolute right-6 bottom-4 text-[120px] font-accent opacity-5 pointer-events-none select-none text-gold leading-none">
        ラーメン
      </div>

      {/* Subtle Ambient Glow */}
      <div className="absolute -top-24 left-1/3 w-96 h-96 rounded-full blur-[140px] pointer-events-none" style={{background:'oklch(0.80 0.16 80 / 0.08)'}} />

      <div className="relative z-10 mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-gold via-amber-400 to-crimson p-[1.5px] shadow-lg shadow-gold/20">
              <div className="w-full h-full rounded-[14px] bg-obsidian flex items-center justify-center text-gold">
                <Flame className="w-5 h-5 text-gold fill-gold/20" />
              </div>
            </div>
            <div>
              <span className="font-japan-ramen text-2xl font-black tracking-wider text-foreground block leading-none">
                MISO MOJO
              </span>
              <span className="text-[9px] text-gold/90 tracking-widest uppercase font-bold block mt-1 font-serif">
                Japanese Ramen &amp; Sushi Bar
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            Bold 8-hour broths. Slurpy artisanal noodles. Gourmet sushi &amp; Korean street food crafted for serious cravings in Hyderabad.
          </p>
          <div className="pt-1 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-[10px] font-extrabold text-gold">
              <Sparkles className="w-3 h-3 text-gold" /> Authentic Recipe
            </span>
          </div>
        </div>

        {/* Navigation Column (2-column layout) */}
        <div className="space-y-4">
          <h4 className="font-display text-xs font-black text-foreground uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold" /> Quick Links
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {NAV_LINKS.map(l => {
              const Icon = l.icon;
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-gold transition-all duration-200 group"
                >
                  <Icon className="w-3.5 h-3.5 text-gold/70 group-hover:text-gold group-hover:scale-110 transition-transform" />
                  <span>{l.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Our Outlets & Locations */}
        <div className="space-y-4">
          <h4 className="font-display text-xs font-black text-foreground uppercase tracking-widest flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold" /> Our Outlets &amp; Locations
          </h4>
          <div className="text-xs text-slate-300 font-sans space-y-2.5 leading-relaxed">
            <p className="flex items-start gap-2">
              <span className="text-gold font-bold shrink-0">📍</span>
              <span><strong>Moosapet:</strong> 209, IDL Lake Food Courts, Hyd</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-gold font-bold shrink-0">📍</span>
              <span><strong>DLF Gachibowli:</strong> Food Street, DLF City, Hyd</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-gold font-bold shrink-0">📍</span>
              <span><strong>Vijayawada:</strong> Benz Circle Food Hub, MG Rd</span>
            </p>
            <div className="pt-1 flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface border border-gold/20 text-gold/90 font-extrabold text-[10px]">
                <Clock className="w-3 h-3 text-gold shrink-0" />
                <span>Daily: 6 PM – 11 PM</span>
              </div>
              <Link to="/branches" className="text-[11px] font-bold text-gold hover:underline flex items-center gap-1">
                All Outlets →
              </Link>
            </div>
          </div>
        </div>

        {/* Order Online Column (Vibrant & Rich Buttons) */}
        <div className="space-y-4">
          <h4 className="font-display text-xs font-black text-foreground uppercase tracking-widest flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-gold" /> Order Online
          </h4>
          <p className="text-xs text-slate-400 font-sans">
            Hot &amp; fresh delivery direct to your doorstep via partner apps:
          </p>
          <div className="space-y-3 pt-1">
            <a
              href="https://www.zomato.com/hyderabad/miso-mojo-moosapet"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl bg-gradient-to-r from-[#CB202D] via-red-600 to-rose-700 text-white px-4 py-3 text-xs font-black hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-red-950/40 border border-white/20 group"
            >
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Order on Zomato</span>
              </div>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">Fast Delivery</span>
            </a>

            <a
              href="https://www.swiggy.com/restaurants/miso-mojo-moosapet-hyderabad"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl bg-gradient-to-r from-[#FC8019] via-amber-600 to-orange-600 text-white px-4 py-3 text-xs font-black hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-orange-950/40 border border-white/20 group"
            >
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Order on Swiggy</span>
              </div>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">Live Track</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal & License Bar */}
      <div className="relative z-10 mt-14 pt-6 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
        <div className="flex items-center gap-2">
          <span className="font-japan-ramen text-sm text-gold">MISO MOJO</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-surface/80 border border-gold/25 px-4 py-1.5 text-[11px] text-gold/90 font-extrabold shadow-sm">
          <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
          <span>FSSAI Lic. No. 23624032004921</span>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalNav />
      <div className="pt-16">
        <Outlet />
      </div>
      <GlobalFooter />
    </QueryClientProvider>
  );
}
