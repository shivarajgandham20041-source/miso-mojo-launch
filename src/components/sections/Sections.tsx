import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Flame, Star, Instagram, Facebook, Youtube, MapPin, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { Steam } from "@/components/Steam";
import { SpiceMeter } from "@/components/SpiceMeter";
import { restaurant, promotion } from "@/data/restaurant";
import { branches } from "@/data/branches";
import { demoReviews, reviewsDisclaimer, reviewsSource } from "@/data/reviews";
import { featuredRamen, menu, spiceLabels, type SpiceLevel } from "@/data/menu";
import { LocationCard } from "@/components/LocationCard";
import { MenuCard } from "@/components/MenuCard";
import { MenuModal } from "@/components/MenuModal";
import type { MenuItem } from "@/data/menu";

import chefImg from "@/assets/chef.jpg";
import spicyImg from "@/assets/spicy-ramen.jpg";
import ramenImg from "@/assets/hero-ramen.jpg";
import sushiImg from "@/assets/sushi.jpg";
import riceImg from "@/assets/rice-bowl.jpg";
import corndogImg from "@/assets/corndog.jpg";
import koreanImg from "@/assets/korean-chicken.jpg";
import interiorImg from "@/assets/interior.jpg";
import vegImg from "@/assets/veg-ramen.jpg";
import sandwichImg from "@/assets/sandwich.jpg";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="font-accent text-xs tracking-[0.36em] text-broth">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-[clamp(2rem,5.5vw,3.75rem)] text-ivory">{title}</h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

/* ---------------- Brand intro ---------------- */

export function BrandIntro() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32" id="about">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Our thing"
            title={<>Your new ramen obsession.</>}
            intro={restaurant.longDescription}
          />
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat value={`${restaurant.rating.value}★`} label={`${restaurant.rating.count}+ Google reviews`} />
            <Stat value={`${menu.length}`} label="Dishes on the menu" />
            <Stat value="₹200–400" label="Per person" />
          </dl>
        </Reveal>
        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-sm border border-border">
            <img
              src={chefImg}
              alt="Chef holding a steaming bowl of ramen in a dark kitchen"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1280}
              className="size-full object-cover"
            />
            <Steam className="inset-x-0 bottom-1/3 h-72" />
          </div>
          <p className="font-accent absolute -left-2 -top-6 text-6xl text-broth/20 lg:-left-10 lg:text-8xl">
            旨味
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd>
        <span className="block font-display text-3xl text-broth">{value}</span>
        <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </span>
      </dd>
    </div>
  );
}

/* ---------------- Featured bowls ---------------- */

export function FeaturedBowls() {
  const [active, setActive] = useState<MenuItem | null>(null);
  return (
    <section className="border-y border-border bg-surface py-24 lg:py-32" id="bowls">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Signature"
            title="Meet the Mojo bowls"
            intro="Seven bowls built on broths we simmer for depth, not shortcuts. Pick your heat."
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredRamen.map((item, i) => (
            <Reveal as="li" key={item.id} delay={(i % 3) * 90} className="h-full">
              <MenuCard item={item} onOpen={setActive} />
            </Reveal>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 border-b-2 border-broth pb-1 font-display text-lg tracking-[0.16em] text-broth transition-colors hover:border-ivory hover:text-ivory"
          >
            See Full Menu →
          </Link>
        </div>
      </div>
      <MenuModal item={active} onClose={() => setActive(null)} />
    </section>
  );
}

/* ---------------- Scroll-built bowl ---------------- */

const buildSteps = [
  { title: "The broth", copy: "Simmered long, seasoned bold — the base of every Mojo bowl." },
  { title: "The noodles", copy: "Springy ramen noodles dropped in for maximum slurp." },
  { title: "The protein", copy: "Chicken, prawns, fish, paneer or tofu — your call." },
  { title: "The egg", copy: "Soft-set, jammy yolk resting on top." },
  { title: "The garnish", copy: "Scallions, chilli oil, sesame, nori." },
  { title: "The steam", copy: "It arrives hot. That's the whole point." },
];

export function BuiltForTheSlurp() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(1, Math.max(0, -rect.top / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeStep = Math.min(buildSteps.length - 1, Math.floor(progress * buildSteps.length));

  return (
    <section ref={ref} className="relative h-[320vh]" id="experience">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="font-accent text-xs tracking-[0.36em] text-broth">The experience</p>
            <h2 className="mt-3 text-[clamp(2.25rem,6vw,4.5rem)] text-ivory">
              Built for the slurp.
            </h2>
            <ol className="mt-8 space-y-4">
              {buildSteps.map((step, i) => (
                <li
                  key={step.title}
                  className={cn(
                    "border-l-2 pl-4 transition-all duration-500",
                    i === activeStep
                      ? "border-broth opacity-100"
                      : "border-border opacity-40",
                  )}
                >
                  <h3 className="font-display text-base tracking-[0.14em] text-ivory">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.copy}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-full border border-border bg-surface">
            <img
              src={ramenImg}
              alt="Ramen bowl coming together layer by layer"
              loading="lazy"
              decoding="async"
              width={1920}
              height={1280}
              className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out"
              style={{ transform: `scale(${1.25 - progress * 0.2}) rotate(${progress * 8}deg)` }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 bg-ink/85 transition-[height] duration-300"
              style={{ height: `${Math.max(0, 100 - progress * 130)}%` }}
            />
            <Steam className="inset-x-0 bottom-0 h-2/3" />
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-xs tracking-[0.3em] text-ivory/70">
              {Math.round(progress * 100)}% BUILT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Devil section ---------------- */

export function DevilSection() {
  const [level, setLevel] = useState<SpiceLevel>(4);
  const devilItems = menu.filter((i) => i.spice >= 4 && !i.mini);

  return (
    <section className="bg-devil relative overflow-hidden border-y border-border py-24 lg:py-32">
      <img
        src={spicyImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        width={1280}
        height={1280}
        className="absolute -right-24 top-1/2 hidden w-[520px] -translate-y-1/2 opacity-30 blur-[1px] lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Heat check"
            title="Can you handle the devil?"
            intro="Our Devil Spicy bowls are not a dare — they're a flavour. Deep chilli heat layered over a full-bodied broth."
          />
        </Reveal>

        <Reveal delay={100} className="mt-12 max-w-xl">
          <fieldset>
            <legend className="text-[11px] font-bold uppercase tracking-[0.2em] text-ivory/70">
              Set your heat
            </legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {([1, 2, 3, 4] as SpiceLevel[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  aria-pressed={level === l}
                  onClick={() => setLevel(l)}
                  className={cn(
                    "flex items-center gap-2 rounded-sm border px-4 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition-all",
                    level === l
                      ? "border-broth bg-broth text-broth-foreground"
                      : "border-ivory/25 text-ivory/70 hover:border-broth",
                  )}
                >
                  <Flame size={14} className={level === l && l >= 3 ? "animate-flame" : ""} />
                  {spiceLabels[l]}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-ivory/80">
              {level === 4
                ? "Devil mode: full chilli oil, no apologies. Keep water close."
                : `Level ${level} — ${spiceLabels[level].toLowerCase()} heat, still full of flavour.`}
            </p>
            <div className="mt-4">
              <SpiceMeter level={level} animated size={22} showLabel={false} />
            </div>
          </fieldset>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {devilItems.map((item, i) => (
            <Reveal as="li" key={item.id} delay={i * 80}>
              <div className="h-full rounded-sm border border-ivory/15 bg-ink/40 p-6 backdrop-blur">
                <h3 className="font-display text-lg tracking-wide text-ivory">{item.name}</h3>
                <p className="mt-2 text-sm text-ivory/70">{item.description}</p>
                <div className="mt-4">
                  <SpiceMeter level={item.spice} animated />
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */

const gallery = [
  { src: ramenImg, alt: "Ramen noodles lifted with chopsticks over a steaming broth", span: "lg:col-span-2 lg:row-span-2" },
  { src: koreanImg, alt: "Korean fried chicken glazed in red sauce", span: "" },
  { src: sushiImg, alt: "Sushi rolls plated on dark slate", span: "" },
  { src: corndogImg, alt: "Crispy corndogs with cheese pull", span: "" },
  { src: riceImg, alt: "Rice bowl topped with chicken and a half boiled egg", span: "lg:row-span-2" },
  { src: interiorImg, alt: "Miso Mojo interior lit by red paper lanterns", span: "lg:col-span-2" },
  { src: vegImg, alt: "Vegetarian ramen with tofu and mushrooms", span: "" },
  { src: sandwichImg, alt: "Korean style toasted sandwich", span: "" },
];

export function Gallery() {
  return (
    <section className="py-24 lg:py-32" id="gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The look"
            title="See it. Crave it. Order it."
            intro="Steam, gloss, char and chilli — shot the way it lands on your table."
          />
        </Reveal>
        <ul className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 lg:auto-rows-[220px] lg:grid-cols-4">
          {gallery.map((img, i) => (
            <Reveal
              as="li"
              key={img.alt}
              delay={(i % 4) * 80}
              className={cn("group overflow-hidden rounded-sm border border-border", img.span)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                width={1024}
                height={1024}
                className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Why ---------------- */

const whyCards = [
  { title: "Big Flavors", copy: "Bold broths and sauces." },
  { title: "Serious Slurp", copy: "Noodles made for maximum ramen satisfaction." },
  { title: "Asian Fusion", copy: "Japanese and Korean-inspired dishes." },
  { title: "Mojo Energy", copy: "A restaurant experience designed to be remembered." },
];

export function WhyMojo() {
  return (
    <section className="border-y border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Why Miso Mojo" title="Four reasons you'll come back." />
        </Reveal>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 80} className="bg-card p-8">
              <span className="font-accent text-sm text-broth">0{i + 1}</span>
              <h3 className="mt-4 font-display text-xl tracking-wide text-ivory">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.copy}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Locator ---------------- */

export function Locator({ compact = false }: { compact?: boolean }) {
  return (
    <section className="py-24 lg:py-32" id="locations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Store locator"
            title="Find your Mojo"
            intro="Every Miso Mojo outlet, with directions, ordering and timings. More branches are on the way."
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 lg:grid-cols-2">
          {branches.map((b, i) => (
            <Reveal as="li" key={b.slug} delay={i * 100}>
              <LocationCard branch={b} />
            </Reveal>
          ))}
        </ul>
        {!compact && (
          <p className="mt-10 font-display text-xl tracking-[0.14em] text-broth">
            Your Mojo is closer than you think.
          </p>
        )}
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */

export function ReviewsSection() {
  return (
    <section className="border-y border-border bg-surface py-24 lg:py-32" id="reviews">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Guest love" title="Mojo loves the love." />
        </Reveal>

        <Reveal delay={80} className="mt-10 flex flex-wrap items-center gap-6">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-6xl text-gold">{restaurant.rating.value}</span>
            <Star className="text-gold" fill="currentColor" size={22} aria-hidden="true" />
          </div>
          <p className="text-sm text-muted-foreground">
            {restaurant.rating.count}+ Google reviews
            <br />
            <span className="text-xs uppercase tracking-[0.16em]">Verified via Google Business Profile</span>
          </p>
          <a
            href={restaurant.socials.find((s) => s.platform === "google")?.url ?? "#"}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-border px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-ivory transition-colors hover:border-broth hover:text-broth"
          >
            See all reviews
          </a>
        </Reveal>

        {reviewsSource === "demo" && (
          <p className="mt-10 inline-block rounded-sm border border-gold/40 bg-gold/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
            {reviewsDisclaimer}
          </p>
        )}

        <ul className="mt-8 grid gap-6 lg:grid-cols-3">
          {demoReviews.map((r, i) => (
            <Reveal as="li" key={r.id} delay={i * 90}>
              <figure className="h-full rounded-sm border border-border bg-card p-6">
                <div className="flex items-center gap-1" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={14}
                      className={s < r.rating ? "text-gold" : "text-muted-foreground/30"}
                      fill={s < r.rating ? "currentColor" : "none"}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {r.text}
                </blockquote>
                <figcaption className="mt-5 text-xs uppercase tracking-[0.16em] text-ivory/70">
                  {r.author} ·{" "}
                  <time dateTime={r.date}>
                    {new Date(r.date).toLocaleDateString("en-IN", {
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Social ---------------- */

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  google: MapPin,
  whatsapp: MessageCircle,
};

const socialGrid = [ramenImg, koreanImg, sushiImg, corndogImg, riceImg, vegImg];

export function SocialSection() {
  return (
    <section className="py-24 lg:py-32" id="social">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Community"
            title="Follow the Mojo."
            intro="Bowls, drops and behind-the-counter chaos. Official channels are being connected — links go live as they're verified."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {restaurant.socials.map((s) => {
              const Icon = socialIcons[s.platform];
              const base =
                "inline-flex items-center gap-2 rounded-sm border px-4 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors";
              return (
                <li key={s.platform}>
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`${base} border-border text-ivory hover:border-broth hover:text-broth`}
                    >
                      <Icon size={16} /> {s.label}
                    </a>
                  ) : (
                    <span className={`${base} border-border/60 text-muted-foreground`}>
                      <Icon size={16} /> {s.label} — soon
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <ul className="grid grid-cols-3 gap-2">
            {socialGrid.map((src, i) => (
              <li key={i} className="group aspect-square overflow-hidden rounded-sm border border-border">
                <img
                  src={src}
                  alt="Miso Mojo food photography"
                  loading="lazy"
                  decoding="async"
                  width={512}
                  height={512}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Promo + CTA ---------------- */

export function PromoBanner() {
  if (!promotion.active) return null;
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-accent text-xs tracking-[0.32em] text-broth">{promotion.eyebrow}</p>
          <h2 className="mt-2 text-3xl text-ivory lg:text-4xl">{promotion.title}</h2>
          <p className="mt-2 text-muted-foreground">{promotion.description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to={promotion.primaryCta.href}
            className="rounded-sm bg-broth px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-broth-foreground transition-colors hover:bg-gold"
          >
            {promotion.primaryCta.label}
          </Link>
          <Link
            to={promotion.secondaryCta.href}
            className="rounded-sm border border-border px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ivory transition-colors hover:border-broth hover:text-broth"
          >
            {promotion.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-ink py-20">
      <Steam className="inset-x-0 bottom-0 h-64" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-[clamp(1.9rem,5vw,3.25rem)] text-ivory">{title}</h2>
          {subtitle && <p className="mt-3 max-w-lg text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/menu"
            className="rounded-sm border border-ivory/30 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-ivory transition-colors hover:border-broth hover:text-broth"
          >
            View Menu
          </Link>
          <Link
            to="/locations"
            className="group relative overflow-hidden rounded-sm bg-primary px-7 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <span className="relative z-10">Start Your Order</span>
            <span
              aria-hidden="true"
              className="absolute inset-0 translate-y-full bg-crimson transition-transform duration-300 group-hover:translate-y-0"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
