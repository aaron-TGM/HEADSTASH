import Image from "next/image";
import { home } from "../content/home";
import { StartStashForm } from "./start-stash-form";

export default function HomePage() {
  return (
    <main className="bg-[var(--color-onyx)] text-[var(--color-bone)] font-inter">
      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[var(--color-onyx)]/90 px-5 py-4 backdrop-blur md:px-10">
        <div className="font-blunt tracking-[0.14em] text-[13px] text-[var(--color-bone)]">
          {home.nav.wordmark}
        </div>
        <div className="flex items-center gap-5">
          <a
            href={home.nav.signIn.href}
            className="font-blunt text-[10px] tracking-[0.2em] uppercase text-[var(--color-ash)]/70 hover:text-[var(--color-bone)] transition-colors"
          >
            {home.nav.signIn.label}
          </a>
          <a
            href={home.nav.cta.href}
            className="cta-ochre rounded-md px-4 py-2 text-[11px] font-semibold tracking-[0.1em] uppercase"
          >
            {home.nav.cta.label}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="grid grid-cols-1 gap-12 border-b border-white/10 bg-[var(--color-onyx)] px-5 py-20 md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-10 md:py-28">
        <div className="max-w-[640px]">
          <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
            {home.hero.eyebrow}
          </div>
          <h1 className="font-blunt whitespace-pre-line text-5xl leading-[0.95] text-[var(--color-bone)] md:text-7xl lg:text-[80px]">
            {home.hero.headline}
          </h1>
          <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-[var(--color-ash)] md:text-base">
            {home.hero.subcopy}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={home.hero.primaryCta.href}
              className="cta-ochre inline-flex items-center rounded-md px-6 py-3 text-sm font-semibold"
            >
              {home.hero.primaryCta.label}
            </a>
            <a
              href={home.hero.secondaryCta.href}
              className="inline-flex items-center rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-[var(--color-bone)] hover:border-[var(--color-ochre)] hover:text-[var(--color-ochre)] transition-colors"
            >
              {home.hero.secondaryCta.label}
            </a>
          </div>
        </div>

        {/* Receipt mockup visual */}
        <div className="relative mx-auto w-full max-w-[360px] rotate-[-2deg] rounded-md bg-[#F5EFE1] px-6 py-7 font-mono text-[var(--color-onyx)] shadow-2xl">
          <div className="mb-4 border-b border-dashed border-black/30 pb-3">
            <div className="font-blunt text-center text-[11px] tracking-[0.2em] uppercase">
              {home.hero.receipt.vendor}
            </div>
            <div className="mt-1 text-center text-[10px] opacity-60">
              {home.hero.receipt.date}
            </div>
          </div>
          <div className="space-y-2 text-[11px]">
            {home.hero.receipt.items.map((item) => (
              <div key={item.name} className="flex justify-between gap-4">
                <span className="opacity-80">{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between border-t border-dashed border-black/30 pt-3 font-blunt text-[13px]">
            <span>TOTAL</span>
            <span>{home.hero.receipt.total}</span>
          </div>
          <div className="mt-4 rounded bg-[var(--color-onyx)] px-3 py-2 text-center font-blunt text-[10px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
            {home.hero.receipt.status}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id={home.howItWorks.id}
        className="border-b border-white/10 bg-[var(--color-bone)] px-5 py-24 text-[var(--color-onyx)] md:px-10"
      >
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase opacity-45">
          {home.howItWorks.eyebrow}
        </div>
        <h2 className="font-blunt max-w-[720px] text-4xl leading-tight md:text-6xl">
          {home.howItWorks.headline}
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {home.howItWorks.steps.map((s) => (
            <div
              key={s.number}
              className="rounded-md border border-black/10 bg-[#F5EFE1] p-7"
            >
              <div className="font-blunt text-4xl text-[var(--color-ochre)]">
                {s.number}
              </div>
              <div className="font-blunt mt-3 text-2xl text-[var(--color-onyx)]">
                {s.title}
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-slate)]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INSIDE APP */}
      <section className="border-b border-white/10 bg-[var(--color-onyx)] px-5 py-24 md:px-10">
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
          {home.insideApp.eyebrow}
        </div>
        <h2 className="font-blunt max-w-[720px] whitespace-pre-line text-4xl leading-tight text-[var(--color-bone)] md:text-6xl">
          {home.insideApp.headline}
        </h2>
        <p className="mt-6 max-w-[560px] text-[15px] text-[var(--color-ash)]">
          {home.insideApp.body}
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {home.insideApp.screens.map((s) => (
            <div
              key={s.label}
              className="rounded-[28px] border border-white/10 bg-[#171717] p-5"
            >
              <div className="mx-auto w-full max-w-[260px]">
                <div className="relative rounded-[22px] border border-white/10 bg-[var(--color-onyx)] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="font-blunt text-[9px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
                      {s.label}
                    </div>
                    <div className="h-[4px] w-10 rounded-full bg-white/10" />
                  </div>
                  <div className="font-blunt text-[22px] leading-[1.05] text-[var(--color-bone)]">
                    {s.headline}
                  </div>
                  <p className="mt-4 text-[12px] leading-relaxed text-[var(--color-ash)]/80">
                    {s.body}
                  </p>
                  <div className="mt-8 h-[2px] w-full rounded-full bg-[var(--color-ochre)]/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="border-b border-white/10 bg-[var(--color-bone)] px-5 py-24 text-[var(--color-onyx)] md:px-10">
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase opacity-45">
          {home.examples.eyebrow}
        </div>
        <h2 className="font-blunt max-w-[680px] text-4xl leading-tight md:text-6xl">
          {home.examples.headline}
        </h2>
        <p className="mt-6 max-w-[560px] text-[15px] text-[var(--color-slate)]">
          {home.examples.body}
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {home.examples.cards.map((c, i) => (
            <div
              key={c.title}
              className="flex flex-col rounded-r-md border-l-2 border-[var(--color-ochre)] bg-[var(--color-onyx)] p-6"
              style={{ opacity: 1 - i * 0.05 }}
            >
              <div className="font-blunt mb-3 text-[9px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
                {c.brand}
              </div>
              <div className="font-blunt text-xl text-[var(--color-bone)]">
                {c.title}
              </div>
              <p className="mt-4 flex-1 text-[13px] text-[var(--color-ash)]/85">
                {c.body}
              </p>
              <div className="mt-5 border-t border-white/10 pt-3 text-[11px] text-[var(--color-ash)]/55">
                {c.footer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEHAVIORS */}
      <section className="border-b border-white/10 bg-[var(--color-onyx)] px-5 py-24 md:px-10">
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
          {home.behaviors.eyebrow}
        </div>
        <h2 className="font-blunt text-4xl leading-tight text-[var(--color-bone)] md:text-6xl">
          {home.behaviors.headline}
        </h2>
        <div className="mt-10">
          {home.behaviors.items.map((item, i) => (
            <div
              key={item.label}
              className={`grid items-baseline gap-4 border-t border-white/20 py-6 md:grid-cols-[1fr_2fr] ${
                i === home.behaviors.items.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="font-blunt text-2xl text-[var(--color-bone)]">
                {item.label}
              </div>
              <p className="text-[14px] text-[var(--color-ash)]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AVAILABLE FOR */}
      <section className="border-b border-white/10 bg-[var(--color-bone)] px-5 py-20 text-[var(--color-onyx)] md:px-10">
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase opacity-45">
          {home.availableFor.eyebrow}
        </div>
        <h2 className="font-blunt max-w-[620px] text-4xl leading-tight md:text-5xl">
          {home.availableFor.headline}
        </h2>
        <div className="mt-10 grid gap-4 border-t border-black/20 pt-8 md:grid-cols-3">
          {home.availableFor.brands.map((b) => (
            <div key={b.label}>
              <div className="font-blunt mb-3 text-[9px] tracking-[0.2em] uppercase opacity-40">
                {b.label}
              </div>
              {b.kind === "logo" ? (
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-28">
                    <Image
                      src={b.logoSrc}
                      alt={b.logoAlt}
                      fill
                      sizes="112px"
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="font-blunt text-xl">{b.value}</div>
                </div>
              ) : (
                <div className="font-blunt text-xl">{b.value}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10 bg-[var(--color-onyx)] px-5 py-24 md:px-10">
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
          {home.faq.eyebrow}
        </div>
        <h2 className="font-blunt text-4xl leading-tight text-[var(--color-bone)] md:text-6xl">
          {home.faq.headline}
        </h2>
        <div className="mt-10">
          {home.faq.items.map((f, i) => (
            <div
              key={f.question}
              className={`border-t border-white/20 py-5 ${
                i === home.faq.items.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="font-blunt text-[17px] text-[var(--color-bone)]">
                {f.question}
              </div>
              <p className="mt-2 text-[14px] text-[var(--color-ash)]">
                {f.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* START */}
      <section
        id={home.start.id}
        className="border-t border-white/10 bg-[var(--color-bone)] px-5 py-24 text-[var(--color-onyx)] md:px-10 md:py-32"
      >
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase opacity-45">
          {home.start.eyebrow}
        </div>
        <h2 className="font-blunt max-w-[720px] text-5xl leading-[0.95] md:text-7xl">
          {home.start.headline}
        </h2>
        <p className="mt-6 max-w-[480px] text-base text-[var(--color-slate)]">
          {home.start.body}
        </p>
        <StartStashForm
          placeholder={home.start.placeholder}
          button={home.start.button}
          consent={home.start.consent}
          consentVersion={home.start.consentVersion}
        />
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col items-start justify-between gap-6 border-t border-white/5 bg-[#080808] px-5 py-8 md:flex-row md:items-center md:px-10">
        <div>
          <div className="font-blunt text-[13px] tracking-[0.14em] text-[var(--color-bone)]">
            {home.footer.wordmark}
          </div>
          <div className="mt-1 text-[11px] text-[var(--color-ash)]/40">
            {home.footer.attribution}
          </div>
        </div>
        <div className="flex gap-6">
          {home.footer.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[11px] text-[var(--color-ash)]/55 hover:text-[var(--color-ochre)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
