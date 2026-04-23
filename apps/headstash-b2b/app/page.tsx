import Image from "next/image";
import { home } from "@/content/home";

export default function Page() {
  const {
    nav,
    hero,
    gap,
    howItWorks,
    configure,
    category,
    launchPartners,
    cta,
    footer,
  } = home;

  return (
    <main className="min-h-dvh bg-onyx text-bone">
      <nav className="sticky top-0 z-20 border-b border-b-bone/15 bg-onyx/95 px-6 py-5 backdrop-blur md:px-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <p className="font-blunt-h text-body tracking-[0.12em]">{nav.wordmark}</p>
          <a className="font-blunt-micro text-micro text-ochre no-underline hover:opacity-85" href={nav.cta.href}>
            {nav.cta.label}
          </a>
        </div>
      </nav>

      <section className="relative bg-onyx px-6 pb-24 pt-20 md:px-10 md:pb-28 md:pt-28">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-ochre">{hero.eyebrow}</p>
          <h1 className="mt-7 max-w-3xl font-blunt-display text-display text-bone">{hero.headline}</h1>
          <p className="mt-8 max-w-xl text-body-l text-fog">{hero.subcopy}</p>
          <a href={hero.primaryCta.href} className="cta-ochre mt-10 inline-flex rounded-sharp px-6 py-3 font-blunt-micro text-micro no-underline hover:opacity-90">
            {hero.primaryCta.label}
          </a>

          <div className="pointer-events-none absolute bottom-10 right-10 text-ochre/30">
            <svg width="72" height="36" viewBox="0 0 72 36" aria-hidden="true">
              <path
                d="M 36 20 C 26 10, 14 8, 4 16 C 13 15, 20 17, 28 21 M 36 20 C 46 10, 58 8, 68 16 C 59 15, 52 17, 44 21 M 34 20 L 36 32 L 38 20 M 36 8 L 36 20"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="36" cy="15" r="1.3" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-onyx/50">{gap.eyebrow}</p>
          <h2 className="mt-7 max-w-3xl font-blunt-h text-h1 text-onyx">{gap.headline}</h2>
          <p className="mt-7 max-w-xl text-body text-ash">{gap.body}</p>
        </div>
      </section>

      <section className="bg-onyx px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-ochre">{howItWorks.eyebrow}</p>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {howItWorks.steps.map((step) => (
              <article key={step.number}>
                <p className="font-blunt-display text-h1 text-ochre">{step.number}</p>
                <h3 className="mt-3 font-blunt-h text-h2 text-bone">{step.title}</h3>
                <p className="mt-4 text-caption text-fog">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-onyx/50">{configure.eyebrow}</p>
          <h2 className="mt-6 max-w-3xl font-blunt-h text-h1 text-onyx">{configure.headline}</h2>
          <p className="mt-4 max-w-xl text-body text-ash">{configure.intro}</p>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
            {configure.cards.map((card) => (
              <article key={card.title} className="border-t border-t-onyx/20 pt-5">
                <div className="mb-4 h-0.5 w-6 bg-ochre" />
                <h3 className="font-blunt-h text-h2 text-onyx">{card.title}</h3>
                <p className="mt-3 text-body text-ash">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-onyx px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-ochre">{category.eyebrow}</p>
          <h2 className="mt-7 max-w-4xl font-blunt-h text-h1 text-bone">{category.headline}</h2>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {category.columns.map((column) => (
              <article
                key={column.label}
                className={column.isHeadstash ? "border-t-2 border-t-ochre pt-5" : "border-t border-t-bone/25 pt-5"}
              >
                <p className={column.isHeadstash ? "font-blunt-micro text-micro text-ochre" : "font-blunt-micro text-micro text-fog/60"}>
                  {column.label}
                </p>
                <p className="mt-3 text-caption text-bone">{column.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-onyx/50">{launchPartners.eyebrow}</p>
          <h2 className="mt-6 max-w-3xl font-blunt-h text-h1 text-onyx">{launchPartners.headline}</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 border-t border-t-onyx/20 pt-8 md:grid-cols-3">
            {launchPartners.partners.map((partner) => (
              <article key={partner.label}>
                <p className="font-blunt-micro text-micro text-onyx/45">{partner.label}</p>
                {"logoSrc" in partner ? (
                  <div className="mt-3 h-14 w-full max-w-[220px]">
                    <Image
                      src={partner.logoSrc}
                      alt={partner.logoAlt}
                      width={220}
                      height={56}
                      className="h-full w-auto object-contain object-left"
                    />
                  </div>
                ) : (
                  <p
                    className={
                      "value" in partner && partner.value === "Under NDA"
                        ? "mt-2 font-blunt-h text-h2 text-onyx/40"
                        : "mt-2 font-blunt-h text-h2 text-onyx"
                    }
                  >
                    {"value" in partner ? partner.value : partner.name}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id={cta.id} className="bg-onyx px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-ochre">{cta.eyebrow}</p>
          <h2 className="mt-7 max-w-3xl font-blunt-display text-display text-bone">{cta.headline}</h2>
          <p className="mt-6 max-w-xl text-body text-fog">{cta.body}</p>

          <form className="mt-10 flex max-w-xl flex-col gap-3 md:flex-row" action="#" method="post">
            <label htmlFor="brand-email" className="sr-only">
              Work email
            </label>
            <input
              id="brand-email"
              type="email"
              placeholder={cta.inputPlaceholder}
              required
              className="w-full rounded-sharp border border-bone/35 bg-transparent px-4 py-3 text-body text-bone outline-none placeholder:text-fog/60 focus:border-ochre"
            />
            <button
              type="submit"
              className="cta-ochre rounded-sharp px-6 py-3 font-blunt-micro text-micro"
            >
              {cta.button}
            </button>
          </form>
          <p className="mt-5 text-caption text-fog/60">{cta.fallback}</p>
        </div>
      </section>

      <footer className="border-t border-t-bone/10 bg-onyx px-6 py-8 md:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-6 md:flex-row md:items-start">
          <div>
            <p className="font-blunt-h text-caption tracking-[0.14em] text-bone">{footer.wordmark}</p>
            <p className="mt-2 text-caption text-fog/50">{footer.attribution}</p>
          </div>
          <div className="flex items-center gap-6">
            {footer.links.map((link) => (
              <a key={link.label} href={link.href} className="text-caption text-fog/70 no-underline hover:text-fog">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
