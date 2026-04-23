import { home } from "@/content/home";

export default function Page() {
  const { comingSoon } = home;

  return (
    <main className="relative min-h-dvh flex flex-col items-center justify-center px-6 py-24">
      <p className="font-blunt-micro text-micro text-ochre mb-6">
        {comingSoon.kicker}
      </p>
      <h1 className="font-blunt-display text-display text-bone leading-none text-center">
        HEADSTASH
      </h1>
      <p className="mt-6 max-w-md text-center text-body-l text-fog">
        {comingSoon.tagline}
      </p>
      <footer className="absolute bottom-6 left-0 right-0 flex justify-center">
        <p className="font-blunt-micro text-micro text-fog/60">
          Tuff Ghost Media LLC · 2026
        </p>
      </footer>
    </main>
  );
}
