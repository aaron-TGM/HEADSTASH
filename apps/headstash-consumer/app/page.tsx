import Image from "next/image";
import { home } from "@/content/home";

export default function Page() {
  const { nav, hero, howItWorks, insideApp, examples, behaviors, availableFor, faq, start, footer } = home;

  return (
    <main className="min-h-dvh bg-onyx text-bone">
      <nav className="sticky top-0 z-20 border-b border-b-bone/15 bg-onyx/95 px-6 py-5 backdrop-blur md:px-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <p className="font-blunt-h text-body tracking-[0.12em]">{nav.wordmark}</p>
          <div className="flex items-center gap-4">
            <a href={nav.signIn.href} className="text-caption text-fog/70 no-underline hover:text-fog">
              {nav.signIn.label}
            </a>
            <a href={nav.cta.href} className="cta-ochre rounded-sharp px-4 py-2 font-blunt-micro text-micro no-underline">
              {nav.cta.label}
            </a>
          </div>
        </div>
      </nav>

      <section className="relative bg-onyx px-6 pb-24 pt-20 md:px-10 md:pb-28 md:pt-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
          <p className="font-blunt-micro text-micro text-ochre">{hero.eyebrow}</p>
          <h1 className="mt-7 max-w-3xl font-blunt-display text-display text-bone">{hero.headline}</h1>
          <p className="mt-8 max-w-xl text-body-l text-fog">{hero.subcopy}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={hero.primaryCta.href} className="cta-ochre rounded-sharp px-6 py-3 font-blunt-micro text-micro no-underline hover:opacity-90">
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded-sharp border border-bone/35 px-6 py-3 font-blunt-micro text-micro text-bone no-underline hover:border-fog"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <article className="col-span-2 rounded-sharp border border-bone/10 bg-ash/35 p-4">
              <p className="font-blunt-micro text-micro text-fog/60">Your stashes</p>
              <div className="mt-3 grid grid-cols-1 gap-2">
                <div className="rounded-sharp border border-bone/10 bg-onyx/80 p-3">
                  <div className="flex items-center justify-between"><p className="font-blunt-h text-h2 text-bone">Smokers Club hoodie</p><p className="font-blunt-h text-h2 text-bone">$247</p></div>
                  <div className="mt-2 h-1 rounded-sharp bg-bone/15"><div className="h-1 w-[82%] rounded-sharp bg-ochre" /></div>
                </div>
                <div className="rounded-sharp border border-bone/10 bg-onyx/80 p-3">
                  <div className="flex items-center justify-between"><p className="font-blunt-h text-h2 text-bone">Death Traitors long sleeve</p><p className="font-blunt-h text-h2 text-bone">$94</p></div>
                  <div className="mt-2 h-1 rounded-sharp bg-bone/15"><div className="h-1 w-[63%] rounded-sharp bg-ochre-500" /></div>
                </div>
              </div>
            </article>
            <article className="rounded-sharp border border-bone/10 bg-bone p-3">
              <Image src="/mockups/hoodie.png" alt="Hoodie drop detail mockup" width={300} height={180} className="h-28 w-full rounded-sharp object-cover" />
              <p className="mt-2 font-blunt-micro text-micro text-onyx/60">Drop detail</p>
            </article>
            <article className="rounded-sharp border border-bone/10 bg-bone p-3">
              <Image src="/mockups/doppbag.png" alt="Reward redemption mockup" width={300} height={180} className="h-28 w-full rounded-sharp object-cover" />
              <p className="mt-2 font-blunt-micro text-micro text-onyx/60">Redemption</p>
            </article>
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

      <section id={howItWorks.id} className="bg-bone px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-onyx/50">{howItWorks.eyebrow}</p>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {howItWorks.steps.map((step) => (
              <article key={step.number}>
                <p className="font-blunt-display text-h1 text-ochre">{step.number}</p>
                <h2 className="mt-3 font-blunt-h text-h2 text-onyx">{step.title}</h2>
                <p className="mt-3 text-caption text-ash">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-onyx px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-ochre">{insideApp.eyebrow}</p>
          <h2 className="mt-6 max-w-3xl font-blunt-h text-h1 text-bone">{insideApp.headline}</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {insideApp.cards.map((card) => (
              <article key={card.title} className="rounded-sharp border border-bone/10 bg-ash/35 p-4">
                <Image src={card.imageSrc} alt={card.imageAlt} width={420} height={300} className="h-44 w-full rounded-sharp object-cover" />
                <p className="mt-3 font-blunt-micro text-micro text-fog/60">{card.title}</p>
                <p className="mt-2 text-caption text-fog">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-onyx px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-ochre">{examples.eyebrow}</p>
          <h2 className="mt-6 max-w-3xl font-blunt-h text-h1 text-bone">{examples.headline}</h2>
          <p className="mt-4 max-w-2xl text-body text-fog">{examples.intro}</p>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {examples.cards.map((card) => (
              <article key={card.title} className={`min-h-64 rounded-sharp border border-bone/10 border-l-2 bg-ash/35 p-5 ${card.accentClass}`}>
                <p className="font-blunt-micro text-micro">{card.label}</p>
                <h3 className="mt-3 font-blunt-h text-h2 text-bone">{card.title}</h3>
                <p className="mt-4 text-caption text-fog">{card.condition}</p>
                <p className="mt-5 border-t border-t-bone/15 pt-4 text-caption text-fog/65">{card.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-onyx/50">{behaviors.eyebrow}</p>
          <h2 className="mt-6 font-blunt-h text-h1 text-onyx">{behaviors.headline}</h2>
          <div className="mt-8">
            {behaviors.items.map((item, index) => (
              <article
                key={item.title}
                className={`grid grid-cols-1 gap-3 border-t border-t-onyx/20 py-5 md:grid-cols-3 md:items-baseline ${
                  index === behaviors.items.length - 1 ? "border-b border-b-onyx/20" : ""
                }`}
              >
                <h3 className="font-blunt-h text-h2 text-onyx md:col-span-1">{item.title}</h3>
                <p className="text-body text-ash md:col-span-2">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-onyx px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-ochre">{availableFor.eyebrow}</p>
          <h2 className="mt-6 max-w-3xl font-blunt-h text-h1 text-bone">{availableFor.headline}</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {availableFor.items.map((item) => (
              <article key={item.label} className="border-t border-t-bone/25 pt-5">
                <p className="font-blunt-micro text-micro text-fog/60">{item.label}</p>
                {item.kind === "logo" ? (
                  <div className="mt-3">
                    <div className="h-14 w-full max-w-[220px]">
                      <Image
                        src={item.logoSrc}
                        alt={item.logoAlt}
                        width={220}
                        height={56}
                        className="h-full w-auto object-contain object-left"
                      />
                    </div>
                    <p className="mt-2 font-blunt-h text-h2 text-bone">{item.value}</p>
                  </div>
                ) : (
                  <p className="mt-2 font-blunt-h text-h2 text-bone">{item.value}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-onyx/50">{faq.eyebrow}</p>
          <h2 className="mt-6 font-blunt-h text-h1 text-onyx">{faq.headline}</h2>
          <div className="mt-8">
            {faq.items.map((item, index) => (
              <article
                key={item.question}
                className={`border-t border-t-onyx/20 py-5 ${
                  index === faq.items.length - 1 ? "border-b border-b-onyx/20" : ""
                }`}
              >
                <h3 className="font-blunt-h text-h2 text-onyx">{item.question}</h3>
                <p className="mt-2 text-body text-ash">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id={start.id} className="bg-onyx px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-blunt-micro text-micro text-ochre">{start.eyebrow}</p>
          <h2 className="mt-7 max-w-3xl font-blunt-display text-display text-bone">{start.headline}</h2>
          <p className="mt-6 max-w-xl text-body-l text-fog">{start.body}</p>

          <form
            className="mt-10 flex max-w-xl flex-col gap-3 md:flex-row"
            action="/api/consumer-waitlist"
            method="post"
          >
            <input type="hidden" name="pageSource" value="joinheadstash.com" />
            <input type="hidden" name="smsConsentVersion" value={start.smsConsentVersion} />
            <label htmlFor="waitlist-phone" className="sr-only">
              Phone number
            </label>
            <input
              id="waitlist-phone"
              name="phone"
              type="tel"
              placeholder={start.inputPlaceholder}
              required
              className="w-full rounded-sharp border border-bone/35 bg-transparent px-4 py-3 text-body text-bone outline-none placeholder:text-fog/60 focus:border-ochre"
            />
            <button type="submit" className="cta-ochre rounded-sharp px-6 py-3 font-blunt-micro text-micro">
              {start.button}
            </button>
          </form>
          <p className="mt-4 max-w-xl text-caption text-fog/55">{start.smsConsent}</p>
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
