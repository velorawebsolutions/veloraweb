import { Link } from "@tanstack/react-router";
import { EyebrowTag } from "./Section";

export function Placeholder({ eyebrow, subtitle }: { eyebrow: string; subtitle: string }) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <EyebrowTag>{eyebrow}</EyebrowTag>
      <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
        This page is <span className="text-gradient">on the way</span>
      </h1>
      <p className="mt-5 text-muted-foreground">{subtitle}</p>
      <Link to="/contact" className="mt-10 inline-flex rounded-full bg-cta px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105">
        Talk to us in the meantime
      </Link>
    </section>
  );
}
