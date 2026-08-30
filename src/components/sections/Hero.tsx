import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-ramen.jpg";
import { restaurant } from "@/data/restaurant";
import { Steam } from "@/components/Steam";

const floaters = [
  { label: "chilli", top: "18%", left: "8%", size: 90, delay: "0s" },
  { label: "sesame", top: "62%", left: "5%", size: 60, delay: "1.6s" },
  { label: "scallion", top: "26%", right: "10%", size: 74, delay: "0.8s" },
  { label: "mushroom", top: "70%", right: "7%", size: 84, delay: "2.4s" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Close-up of a Miso Mojo ramen bowl with noodles lifted on chopsticks, soft egg and rich broth"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent"
      />
      <Steam className="inset-x-0 bottom-1/4 h-96" />

      {floaters.map((f) => (
        <span
          key={f.label}
          aria-hidden="true"
          className="animate-float absolute hidden rounded-full bg-broth/10 blur-2xl lg:block"
          style={{
            top: f.top,
            left: f.left,
            right: f.right,
            width: f.size,
            height: f.size,
            animationDelay: f.delay,
          }}
        />
      ))}

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-28 pt-28 sm:px-6 lg:pb-32">
        <p className="font-accent text-sm tracking-[0.4em] text-broth">味 · MISO MOJO</p>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.75rem,10vw,7.5rem)] leading-[0.88] text-ivory">
          Slurp into something{" "}
          <span className="text-gradient-broth">extraordinary.</span>
        </h1>
        <p className="mt-3 font-display text-lg tracking-[0.32em] text-primary sm:text-2xl">
          Ramen. Reimagined.
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
          {restaurant.shortDescription}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to="/menu"
            className="group relative overflow-hidden rounded-sm bg-primary px-7 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="relative z-10">Explore Menu</span>
            <span
              aria-hidden="true"
              className="absolute inset-0 translate-y-full bg-crimson transition-transform duration-300 group-hover:translate-y-0"
            />
          </Link>
          <Link
            to="/locations"
            className="rounded-sm border border-ivory/40 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-ivory transition-colors hover:border-broth hover:text-broth"
          >
            Find A Store
          </Link>
          <Link
            to="/locations"
            hash="order"
            className="rounded-sm border border-broth bg-broth/10 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-broth transition-colors hover:bg-broth hover:text-broth-foreground"
          >
            Order Online
          </Link>
        </div>

        <div className="mt-14 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-ivory/50">
          <ChevronDown className="animate-scroll-hint" size={18} aria-hidden="true" />
          Scroll to slurp
        </div>
      </div>
    </section>
  );
}
