import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/menu", label: "Menu" },
  { to: "/menu", label: "Ramen", search: { category: "ramen" } },
  { to: "/menu", label: "Sushi", search: { category: "sushi" } },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20"
      >
        <Link to="/" className="group flex items-baseline gap-2" aria-label="Miso Mojo home">
          <span className="font-display text-xl tracking-[0.12em] text-ivory lg:text-2xl">
            MISO<span className="text-primary">MOJO</span>
          </span>
          <span className="font-accent hidden text-xs text-muted-foreground sm:inline">味</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                search={l.search as never}
                className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ivory/75 transition-colors hover:text-broth"
                activeOptions={{ exact: false }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/locations"
            className="group relative hidden overflow-hidden rounded-sm bg-primary px-5 py-3 text-[12px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            <span className="relative z-10">Order Now</span>
            <span
              aria-hidden="true"
              className="absolute inset-0 translate-y-full bg-broth transition-transform duration-300 group-hover:translate-y-0"
            />
            <span
              aria-hidden="true"
              className="absolute -top-6 left-1/2 z-20 h-8 w-8 -translate-x-1/2 rounded-full bg-ivory/25 opacity-0 blur-md transition-all duration-500 group-hover:-top-2 group-hover:opacity-100"
            />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex size-11 items-center justify-center rounded-sm border border-border text-ivory lg:hidden"
          >
            {open ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-3">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  search={l.search as never}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-4 font-display text-lg tracking-widest text-ivory"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
