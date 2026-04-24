import Image from "next/image";
import { home } from "../content/home";
import { BrandInquiryForm } from "./brand-inquiry-form";

export default function HomePage() {
  return (
    <main className="bg-[var(--color-onyx)] text-[var(--color-bone)] font-inter">
      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[var(--color-onyx)]/90 px-5 py-4 backdrop-blur md:px-10">
        <div className="font-blunt tracking-[0.14em] text-[13px] text-[var(--color-bone)]">
          {home.nav.wordmark}
        </div>
        <a
          href={home.nav.cta.href}
          className="font-blunt text-[10px] tracking-[0.2em] uppercase text-[var(--color-bone)]/70 hover:text-[var(--color-ochre)] transition-colors"
        >
          {home.nav.cta.label}
        </a>
      </nav>

      {/* HERO */}
      <section className="grid grid-cols-1 gap-12 border-b border-white/10 bg-[var(--color-onyx)] px-5 py-20 md:grid-cols-[1.2fr_1fr] md:gap-16 md:px-10 md:py-28">
        <div className="max-w-[620px]">
          <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
            {home.hero.eyebrow}
          </div>
          <h1 className="font-blunt text-5xl leading-[0.95] text-[var(--color-bone)] md:text-7xl lg:text-[80px]">
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

        {/* Admin preview visual */}
        <div className="relative rounded-lg border border-white/10 bg-[#171717] p-5 shadow-2xl">
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="font-blunt text-[10px] tracking-[0.18em] text-[var(--color-ochre)]">
              HEADSTASH · admin
            </div>
            <div className="text-[10px] text-[var(--color-bone)]/50">
              galaxy glue · live
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {home.adminShowcase.kpis.slice(0, 4).map((kpi) => (
              <div
                key={kpi.label}
                className="rounded border border-white/5 bg-[var(--color-onyx)] p-3"
              >
                <div className="font-blunt text-[8px] tracking-[0.18em] text-[var(--color-ochre)]">
                  {kpi.label}
                </div>
                <div className="font-blunt mt-1 text-xl text-[var(--color-bone)]">
                  {kpi.value}
                </div>
                <div className="text-[10px] text-[var(--color-ash)]/60">
                  {kpi.delta}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded border border-white/10 bg-[var(--color-onyx)] p-3">
            <div className="font-blunt mb-2 text-[8px] tracking-[0.18em] text-[var(--color-ochre)]">
              Receipt queue
            </div>
            <div className="space-y-1.5">
              {home.adminShowcase.retailers.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between text-[11px] text-[var(--color-bone)]"
                >
                  <span className="opacity-70">{r.name}</span>
                  <span className="text-[var(--color-ochre)]">
                    {r.signups}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GAP */}
      <section className="border-b border-white/10 bg-[var(--color-bone)] px-5 py-24 text-[var(--color-onyx)] md:px-10">
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase opacity-45">
          {home.gap.eyebrow}
        </div>
        <h2 className="font-blunt max-w-[720px] text-4xl leading-tight md:text-6xl">
          {home.gap.headline}
        </h2>
        <p className="mt-6 max-w-[560px] text-[15px] leading-relaxed text-[var(--color-slate)]">
          {home.gap.body}
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section
        id={home.howItWorks.id}
        className="border-b border-white/10 bg-[var(--color-onyx)] px-5 py-24 md:px-10"
      >
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
          {home.howItWorks.eyebrow}
        </div>
        <h2 className="font-blunt max-w-[720px] text-4xl leading-tight text-[var(--color-bone)] md:text-6xl">
          {home.howItWorks.headline}
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {home.howItWorks.steps.map((s) => (
            <div
              key={s.number}
              className="rounded-md border-l-2 border-[var(--color-ochre)] bg-[#171717] p-6"
            >
              <div className="font-blunt text-3xl text-[var(--color-ochre)]">
                {s.number}
              </div>
              <div className="font-blunt mt-3 text-xl text-[var(--color-bone)]">
                {s.title}
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-ash)]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ADMIN SHOWCASE */}
      <section className="border-b border-white/10 bg-[var(--color-bone)] px-5 py-24 text-[var(--color-onyx)] md:px-10">
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase opacity-45">
          {home.adminShowcase.eyebrow}
        </div>
        <h2 className="font-blunt max-w-[640px] text-4xl leading-tight md:text-6xl">
          {home.adminShowcase.headline}
        </h2>
        <p className="mt-6 max-w-[560px] text-[15px] leading-relaxed text-[var(--color-slate)]">
          {home.adminShowcase.body}
        </p>
        <p className="mt-3 max-w-[560px] text-[13px] text-[var(--color-slate)]/80">
          {home.adminShowcase.footnote}
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {home.adminShowcase.kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-md border border-black/10 bg-[#F5EFE1] p-5"
            >
              <div className="font-blunt text-[9px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
                {kpi.label}
              </div>
              <div className="font-blunt mt-3 text-3xl text-[var(--color-onyx)]">
                {kpi.value}
              </div>
              <div className="mt-1 text-[11px] text-[var(--color-slate)]/70">
                {kpi.delta}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONFIGURE */}
      <section className="border-b border-white/10 bg-[var(--color-onyx)] px-5 py-24 md:px-10">
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
          {home.configure.eyebrow}
        </div>
        <h2 className="font-blunt max-w-[720px] text-4xl leading-tight text-[var(--color-bone)] md:text-6xl">
          {home.configure.headline}
        </h2>
        <p className="mt-6 max-w-[620px] text-[15px] leading-relaxed text-[var(--color-ash)]">
          {home.configure.intro}
        </p>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {home.configure.cards.map((c) => (
            <div
              key={c.title}
              className="rounded-md border border-white/10 bg-[#171717] p-6"
            >
              <div className="font-blunt text-xl text-[var(--color-bone)]">
                {c.title}
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-ash)]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BRIDGE */}
      <section className="border-b border-white/10 bg-[var(--color-bone)] px-5 py-24 text-[var(--color-onyx)] md:px-10">
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase opacity-45">
          {home.bridge.eyebrow}
        </div>
        <h2 className="font-blunt max-w-[680px] text-4xl leading-tight md:text-6xl">
          {home.bridge.headline}
        </h2>
        <p className="mt-6 max-w-[620px] text-[15px] leading-relaxed text-[var(--color-slate)]">
          {home.bridge.body}
        </p>

        {/* integrations */}
        <div className="mt-12 grid gap-3 md:grid-cols-4">
          {home.bridge.integrations.map((i) => (
            <div
              key={i.name}
              className={`rounded-md bg-[#171717] p-5 text-[var(--color-bone)] ${
                i.dashed
                  ? "border-l-2 border-dashed border-[var(--color-ochre)]/50"
                  : "border-l-2 border-[var(--color-ochre)]"
              }`}
            >
              <div className="font-blunt text-lg">{i.name}</div>
              <div className="mt-1 text-[11px] text-[var(--color-ash)]/70">
                {i.detail}
              </div>
            </div>
          ))}
        </div>

        {/* sync points */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {home.bridge.syncPoints.map((p) => (
            <div
              key={p.title}
              className="rounded-md border border-black/10 bg-[#F5EFE1] p-5"
            >
              <div className="mb-3 h-[2px] w-6 bg-[var(--color-ochre)]" />
              <div className="font-blunt text-lg text-[var(--color-onyx)]">
                {p.title}
              </div>
              <p className="mt-2 text-[12.5px] text-[var(--color-slate)]">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* callout */}
        <div className="mt-10 flex items-center gap-5 rounded-md bg-[var(--color-onyx)] px-6 py-5">
          <div className="h-10 w-[6px] flex-shrink-0 rounded bg-[var(--color-ochre)]" />
          <p className="text-[14px] leading-relaxed text-[var(--color-ash)]">
            {home.bridge.callout}
          </p>
        </div>
      </section>

      {/* CAMPAIGN */}
      <section className="border-b border-white/10 bg-[var(--color-onyx)] px-5 py-24 md:px-10">
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
          {home.campaign.eyebrow}
        </div>
        <h2 className="font-blunt max-w-[680px] text-4xl leading-tight text-[var(--color-bone)] md:text-5xl">
          {home.campaign.headline}
        </h2>
        <p className="mt-6 max-w-[580px] text-[15px] leading-relaxed text-[var(--color-ash)]">
          {home.campaign.body}
        </p>

        {/* Campaign example card */}
        <div className="mt-12 overflow-hidden rounded-lg border border-white/10 bg-[#171717]">
          <div className="flex flex-wrap items-start justify-between gap-5 border-b border-white/10 p-7">
            <div>
              <div className="font-blunt text-[10px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
                {home.campaign.example.label}
              </div>
              <div className="font-blunt mt-2 text-2xl text-[var(--color-bone)] md:text-3xl">
                {home.campaign.example.name}
              </div>
              <div className="mt-2 max-w-[520px] text-[13px] text-[var(--color-ash)]/80">
                {home.campaign.example.body}
              </div>
            </div>
            <div className="rounded border border-white/20 bg-[var(--color-onyx)] px-4 py-3">
              <div className="font-blunt text-[9px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
                Headstash config
              </div>
              <div className="mt-1 text-[12px] text-[var(--color-bone)]">
                {home.campaign.example.config}
              </div>
            </div>
          </div>

          <div className="p-7">
            <div className="mb-5 grid gap-4 md:grid-cols-2">
              {home.campaign.channels.map((ch) => (
                <div
                  key={ch.title}
                  className="rounded border-l-2 border-[var(--color-ochre)] bg-[var(--color-onyx)] p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-blunt text-[9px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
                      {ch.title}
                    </div>
                    <div className="text-[10px] text-[var(--color-ash)]/60">
                      {ch.when}
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-[var(--color-ash)]/70">
                    {ch.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 rounded border border-[var(--color-ochre)]/30 bg-[var(--color-onyx)] p-5 md:grid-cols-4">
              {home.campaign.kpis.map((k) => (
                <div key={k.label}>
                  <div className="font-blunt text-[8px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
                    {k.label}
                  </div>
                  <div className="font-blunt mt-1 text-xl text-[var(--color-bone)]">
                    {k.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {home.campaign.points.map((p) => (
            <div key={p.number}>
              <div className="font-blunt text-4xl text-[var(--color-ochre)]">
                {p.number}
              </div>
              <div className="font-blunt mt-2 text-lg text-[var(--color-bone)]">
                {p.title}
              </div>
              <p className="mt-2 text-[13px] text-[var(--color-ash)]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY */}
      <section className="border-b border-white/10 bg-[var(--color-bone)] px-5 py-24 text-[var(--color-onyx)] md:px-10">
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase opacity-45">
          {home.category.eyebrow}
        </div>
        <h2 className="font-blunt max-w-[680px] text-4xl leading-tight md:text-5xl">
          {home.category.headline}
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {home.category.columns.map((c) => (
            <div
              key={c.label}
              className={`pt-5 ${
                c.isHeadstash
                  ? "border-t-2 border-[var(--color-ochre)]"
                  : "border-t border-black/20"
              }`}
            >
              <div
                className={`font-blunt text-[9px] tracking-[0.2em] uppercase ${
                  c.isHeadstash
                    ? "text-[var(--color-ochre)]"
                    : "text-[var(--color-slate)]/60"
                }`}
              >
                {c.label}
              </div>
              <p className="mt-3 text-[13px] text-[var(--color-onyx)]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LAUNCH PARTNERS */}
      <section className="border-b border-white/10 bg-[var(--color-onyx)] px-5 py-20 md:px-10">
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
          {home.launchPartners.eyebrow}
        </div>
        <h2 className="font-blunt max-w-[620px] text-4xl leading-tight text-[var(--color-bone)] md:text-5xl">
          {home.launchPartners.headline}
        </h2>
        <div className="mt-10 grid gap-4 border-t border-white/20 pt-8 md:grid-cols-3">
          {home.launchPartners.partners.map((p) => (
            <div key={p.label}>
              <div className="font-blunt mb-3 text-[9px] tracking-[0.2em] uppercase text-[var(--color-ash)]/40">
                {p.label}
              </div>
              {p.kind === "logo" ? (
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-28">
                    <Image
                      src={p.logoSrc}
                      alt={p.logoAlt}
                      fill
                      sizes="112px"
                      className="object-contain object-left brightness-0 invert"
                    />
                  </div>
                  <div className="font-blunt text-xl text-[var(--color-bone)]">
                    {p.value}
                  </div>
                </div>
              ) : (
                <div className="font-blunt text-xl text-[var(--color-bone)]">
                  {p.value}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="border-b border-white/10 bg-[var(--color-bone)] px-5 py-24 text-[var(--color-onyx)] md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-blunt mb-5 text-[10px] tracking-[0.2em] uppercase opacity-45">
              {home.pricing.eyebrow}
            </div>
            <h2 className="font-blunt max-w-[620px] text-4xl leading-tight md:text-6xl">
              {home.pricing.headline}
            </h2>
          </div>
          <div className="flex items-center gap-4 rounded-md bg-[var(--color-onyx)] px-5 py-4">
            <div className="relative">
              <div className="h-[10px] w-[10px] rounded-full bg-[var(--color-ochre)]" />
              <div className="absolute -inset-1 animate-ping rounded-full bg-[var(--color-ochre)]/30" />
            </div>
            <div>
              <div className="font-blunt text-[9px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
                {home.pricing.slotCounter.label}
              </div>
              <div className="font-blunt mt-0.5 text-xl text-[var(--color-bone)]">
                <span className="text-[var(--color-ochre)]">
                  {home.pricing.slotCounter.remaining}
                </span>{" "}
                of {home.pricing.slotCounter.total} open
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 max-w-[560px] text-[15px] text-[var(--color-slate)]">
          {home.pricing.intro}
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {/* Founding */}
          <div className="relative overflow-hidden rounded-lg bg-[var(--color-onyx)] p-9">
            <div className="absolute right-0 top-0 rounded-bl-md bg-[var(--color-ochre)] px-4 py-1.5 font-blunt text-[10px] tracking-[0.2em] uppercase text-[var(--color-onyx)]">
              {home.pricing.founding.badge}
            </div>
            <div className="font-blunt mb-4 mt-2 text-[10px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
              {home.pricing.founding.subheading}
            </div>
            <div className="flex items-baseline gap-2">
              <div className="font-blunt text-5xl text-[var(--color-bone)] md:text-6xl">
                {home.pricing.founding.price}
              </div>
              <div className="text-sm text-[var(--color-ash)]/70">
                {home.pricing.founding.cadence}
              </div>
            </div>
            <div className="mt-1 text-[13px] text-[var(--color-ash)]/75">
              {home.pricing.founding.tagline}
            </div>
            <div className="mt-3 inline-block rounded bg-[#5A7A3E]/20 px-2.5 py-1 font-blunt text-[10px] tracking-[0.2em] uppercase text-[#8BAF5C]">
              {home.pricing.founding.pill}
            </div>
            <div className="mt-7 border-t border-white/15 pt-5">
              <div className="font-blunt mb-4 text-[9px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
                What you get
              </div>
              <ul className="space-y-2.5">
                {home.pricing.founding.whatYouGet.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[13px] text-[var(--color-bone)]"
                  >
                    <span className="font-mono text-[var(--color-ochre)]">
                      +
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-7 border-t border-white/15 pt-5">
              <a
                href={home.pricing.founding.cta.href}
                className="cta-ochre inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold"
              >
                {home.pricing.founding.cta.label}
              </a>
            </div>
          </div>

          {/* Standard */}
          <div className="rounded-lg border border-black/15 bg-[#F5EFE1] p-9">
            <div className="font-blunt mb-4 text-[10px] tracking-[0.2em] uppercase opacity-50">
              {home.pricing.standard.label}
            </div>
            <div className="flex items-baseline gap-2">
              <div className="font-blunt text-5xl text-[var(--color-onyx)] md:text-6xl">
                {home.pricing.standard.price}
              </div>
              <div className="text-sm text-[var(--color-slate)]/60">
                {home.pricing.standard.cadence}
              </div>
            </div>
            <div className="mt-1 text-[13px] text-[var(--color-slate)]/75">
              {home.pricing.standard.tagline}
            </div>
            <div className="mt-3 inline-block rounded bg-black/[0.08] px-2.5 py-1 font-blunt text-[10px] tracking-[0.2em] uppercase text-[var(--color-slate)]">
              {home.pricing.standard.pill}
            </div>
            <div className="mt-7 border-t border-black/15 pt-5">
              <div className="font-blunt mb-4 text-[9px] tracking-[0.2em] uppercase opacity-50">
                What you get
              </div>
              <ul className="space-y-2.5">
                {home.pricing.standard.whatYouGet.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[13px] text-[var(--color-slate)]"
                  >
                    <span className="text-[var(--color-slate)]/50">·</span>
                    <span>{item}</span>
                  </li>
                ))}
                {home.pricing.standard.excluded.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[13px] text-[var(--color-slate)]/50 line-through"
                  >
                    <span className="font-mono text-[var(--color-rust)]">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-7 border-t border-black/15 pt-5 text-[12px] text-[var(--color-slate)]/65">
              {home.pricing.standard.availability}
            </div>
          </div>
        </div>

        {/* Math */}
        <div className="mt-10 grid gap-8 rounded-lg bg-[var(--color-onyx)] p-8 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div>
            <div className="font-blunt mb-2 text-[9px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
              {home.pricing.math.label}
            </div>
            <div className="font-blunt text-2xl leading-tight text-[var(--color-bone)] md:text-3xl">
              {home.pricing.math.headline}
            </div>
          </div>
          <p className="text-[14px] leading-relaxed text-[var(--color-ash)]">
            {home.pricing.math.body}
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-14">
          <div className="font-blunt mb-5 text-[10px] tracking-[0.2em] uppercase opacity-45">
            {home.pricing.faq.eyebrow}
          </div>
          <div>
            {home.pricing.faq.items.map((f) => (
              <div
                key={f.question}
                className="border-t border-black/20 py-5 last:border-b"
              >
                <div className="font-blunt text-base text-[var(--color-onyx)]">
                  {f.question}
                </div>
                <p className="mt-2 text-[13.5px] text-[var(--color-slate)]">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id={home.cta.id}
        className="border-t border-white/10 bg-[var(--color-onyx)] px-5 py-24 md:px-10 md:py-28"
      >
        <div className="font-blunt mb-6 text-[10px] tracking-[0.2em] uppercase text-[var(--color-ochre)]">
          {home.cta.eyebrow}
        </div>
        <h2 className="font-blunt max-w-[720px] text-5xl leading-[0.95] text-[var(--color-bone)] md:text-7xl">
          {home.cta.headline}
        </h2>
        <p className="mt-6 max-w-[480px] text-base text-[var(--color-ash)]">
          {home.cta.body}
        </p>
        <BrandInquiryForm
          placeholder={home.cta.inputPlaceholder}
          button={home.cta.button}
        />
        <p className="mt-5 text-[11px] text-[var(--color-ash)]/50">
          {home.cta.fallback}
        </p>
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
