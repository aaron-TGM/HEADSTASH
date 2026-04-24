import Image from "next/image";
import { home } from "@/content/home";

export default function Page() {
  const {
    nav,
    hero,
    gap,
    howItWorks,
    adminShowcase,
    bridge,
    campaign,
    configure,
    category,
    launchPartners,
    pricing,
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
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
          <p className="font-blunt-micro text-micro text-ochre">{hero.eyebrow}</p>
          <h1 className="mt-7 max-w-3xl font-blunt-display text-display text-bone">{hero.headline}</h1>
          <p className="mt-8 max-w-xl text-body-l text-fog">{hero.subcopy}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={hero.primaryCta.href} className="cta-ochre inline-flex rounded-sharp px-6 py-3 font-blunt-micro text-micro no-underline hover:opacity-90">
                {hero.primaryCta.label}
              </a>
              <a href={hero.secondaryCta.href} className="rounded-sharp border border-bone/35 px-6 py-3 font-blunt-micro text-micro text-bone no-underline">
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="rounded-sharp border border-bone/10 bg-ash/30 p-5">
            <p className="font-blunt-micro text-micro text-fog/60">Live product preview</p>
            <div className="mt-4 grid grid-cols-1 gap-3">
              <div className="rounded-sharp border border-bone/10 bg-onyx/80 p-3">
                <p className="font-blunt-micro text-micro text-fog/60">Alien Labs stash</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="font-blunt-h text-h2 text-bone">Smokers Club hoodie</p>
                  <p className="font-blunt-h text-h2 text-bone">$247</p>
                </div>
                <div className="mt-3 h-1 rounded-sharp bg-bone/15">
                  <div className="h-1 w-[82%] rounded-sharp bg-ochre" />
                </div>
              </div>
              <div className="rounded-sharp border border-bone/10 bg-onyx/80 p-3">
                <p className="font-blunt-micro text-micro text-fog/60">Connected stash</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="font-blunt-h text-h2 text-bone">Death Traitors long sleeve</p>
                  <p className="font-blunt-h text-h2 text-bone">$94</p>
                </div>
                <div className="mt-3 h-1 rounded-sharp bg-bone/15">
                  <div className="h-1 w-[63%] rounded-sharp bg-ochre-500" />
                </div>
              </div>
            </div>
          </div>

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

      <section className="bg-bone-alt px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="font-blunt-micro text-micro text-onyx/50">{adminShowcase.eyebrow}</p>
            <h2 className="mt-6 max-w-2xl font-blunt-h text-h1 text-onyx">{adminShowcase.headline}</h2>
            <p className="mt-4 max-w-xl text-body text-ash">{adminShowcase.body}</p>
          </div>
          <div className="rounded-sharp border border-onyx/10 bg-bone p-4">
            <p className="font-blunt-micro text-micro text-onyx/45">HEADSTASH OPS</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-sharp border border-onyx/10 bg-bone-alt p-3"><p className="font-blunt-micro text-micro text-onyx/45">Receipts in</p><p className="mt-1 font-blunt-h text-h2 text-onyx">1,247</p></div>
              <div className="rounded-sharp border border-onyx/10 bg-bone-alt p-3"><p className="font-blunt-micro text-micro text-onyx/45">Approval rate</p><p className="mt-1 font-blunt-h text-h2 text-onyx">89%</p></div>
              <div className="rounded-sharp border border-onyx/10 bg-bone-alt p-3"><p className="font-blunt-micro text-micro text-onyx/45">Qualifying $</p><p className="mt-1 font-blunt-h text-h2 text-onyx">$41.2k</p></div>
              <div className="rounded-sharp border border-onyx/10 bg-bone-alt p-3"><p className="font-blunt-micro text-micro text-onyx/45">Merch moved</p><p className="mt-1 font-blunt-h text-h2 text-onyx">$8.6k</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-onyx/50">{bridge.eyebrow}</p>
          <h2 className="mt-6 max-w-3xl font-blunt-h text-h1 text-onyx">{bridge.headline}</h2>
          <p className="mt-4 max-w-3xl text-body text-ash">{bridge.body}</p>
          <div className="mt-8 grid grid-cols-1 gap-3 rounded-sharp bg-onyx p-5 md:grid-cols-4">
            {bridge.integrations.map((integration) => (
              <article key={integration.name} className="rounded-sharp border border-bone/10 bg-ash/35 p-3">
                <p className="font-blunt-h text-h2 text-bone">{integration.name}</p>
                <p className="mt-2 text-caption text-fog">{integration.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {bridge.syncPoints.map((point) => (
              <article key={point.title} className="rounded-sharp border border-onyx/15 bg-bone-alt p-4">
                <div className="mb-3 h-0.5 w-6 bg-ochre" />
                <p className="font-blunt-h text-h2 text-onyx">{point.title}</p>
                <p className="mt-2 text-caption text-ash">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-onyx px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-ochre">{campaign.eyebrow}</p>
          <h2 className="mt-6 max-w-4xl font-blunt-h text-h1 text-bone">{campaign.headline}</h2>
          <p className="mt-4 max-w-3xl text-body text-fog">{campaign.body}</p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {campaign.channels.map((channel) => (
              <article key={channel.title} className="rounded-sharp border border-bone/10 bg-ash/35 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-blunt-micro text-micro text-ochre">{channel.title}</p>
                  <p className="text-caption text-fog/60">{channel.when}</p>
                </div>
                <p className="mt-3 text-body text-fog">{channel.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 rounded-sharp border border-ochre/30 bg-onyx p-4 md:grid-cols-4">
            {campaign.kpis.map((kpi) => (
              <article key={kpi.label}>
                <p className="font-blunt-micro text-micro text-ochre">{kpi.label}</p>
                <p className="mt-1 font-blunt-h text-h2 text-bone">{kpi.value}</p>
              </article>
            ))}
          </div>
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

      <section className="bg-bone px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-onyx/50">{pricing.eyebrow}</p>
          <h2 className="mt-6 max-w-3xl font-blunt-h text-h1 text-onyx">{pricing.headline}</h2>
          <p className="mt-4 max-w-2xl text-body text-ash">{pricing.intro}</p>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {pricing.cards.map((card) => (
              <article
                key={card.tier}
                className={`rounded-sharp border p-5 ${
                  card.tier === "Founding partner" ? "border-ochre bg-onyx text-bone" : "border-onyx/20 bg-bone-alt text-onyx"
                }`}
              >
                <p className={`font-blunt-micro text-micro ${card.tier === "Founding partner" ? "text-ochre" : "text-onyx/55"}`}>
                  {card.tier}
                </p>
                <p className="mt-2 font-blunt-display text-display">{card.price}</p>
                <p className={`text-body ${card.tier === "Founding partner" ? "text-fog" : "text-ash"}`}>{card.cadence}</p>
                <div className="mt-4 space-y-2">
                  {card.notes.map((note) => (
                    <p key={note} className={`text-caption ${card.tier === "Founding partner" ? "text-fog" : "text-ash"}`}>
                      + {note}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-body text-ash">{pricing.summary}</p>
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
                {partner.kind === "logo" ? (
                  <div className="mt-3">
                    <div className="h-14 w-full max-w-[220px]">
                      <Image
                        src={partner.logoSrc}
                        alt={partner.logoAlt}
                        width={220}
                        height={56}
                        className="h-full w-auto object-contain object-left"
                      />
                    </div>
                    <p className="mt-2 font-blunt-h text-h2 text-onyx">{partner.value}</p>
                  </div>
                ) : (
                  <p className="mt-2 font-blunt-h text-h2 text-onyx">{partner.value}</p>
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

          <form
            className="mt-10 flex max-w-xl flex-col gap-3 md:flex-row"
            action="/api/brand-inquiries"
            method="post"
          >
            <input type="hidden" name="pageSource" value="getheadstash.com" />
            <label htmlFor="brand-email" className="sr-only">
              Work email
            </label>
            <input
              id="brand-email"
              name="email"
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
