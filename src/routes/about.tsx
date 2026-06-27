import { createFileRoute, Link } from "@tanstack/react-router";
import { EyebrowTag, SectionHeader } from "@/components/site/Section";
import { ArrowRight, Sparkles, Target, Users, Zap } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — Velora Web Solutions" },
    { name: "description", content: "Velora Web Solutions is a digital studio building websites, e-commerce, AI, and cloud solutions that help ambitious brands grow." },
  ]}),
  component: About,
});

const values = [
  { icon: Target, title: "Outcome-first", body: "We measure success by your KPIs — conversions, revenue, retention — not just deliverables." },
  { icon: Sparkles, title: "Senior craft", body: "Every line of code and pixel is shipped by experienced engineers and designers. No juniors hidden behind a PM." },
  { icon: Zap, title: "Fast & focused", body: "Tight scopes, weekly demos, and a bias for shipping. Most marketing sites go live in 3–4 weeks." },
  { icon: Users, title: "True partnership", body: "We work as an extension of your team — transparent, responsive, and invested in your long-term success." },
];

function About() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 py-24">
        <EyebrowTag>About us</EyebrowTag>
        <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
          A digital studio for <span className="text-gradient">ambitious brands</span>
        </h1>
        <div className="mt-8 space-y-5 text-lg text-muted-foreground">
          <p>
            Velora Web Solutions is a team of designers, engineers, and growth specialists building modern
            digital products. We help startups, growing businesses, and enterprises move faster online — through
            websites, e-commerce platforms, AI automation, and cloud infrastructure that actually scales.
          </p>
          <p>
            We started Velora because most agencies feel like factories — templated, slow, and disconnected
            from real business goals. We do the opposite: small senior teams, deep collaboration, and a
            relentless focus on the outcomes that matter to you.
          </p>
          <p>
            From a brand-new landing page to a full SaaS platform, every engagement combines strategic
            thinking with hands-on craft. We sweat the details — performance, accessibility, SEO, and
            developer experience — so your product feels effortless to use and easy to grow.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <SectionHeader eyebrow="What we believe" title={<>Principles that shape <span className="text-gradient">every project</span></>} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cta text-primary-foreground">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {[["100+", "Projects delivered"], ["50+", "Happy clients"], ["99%", "Client satisfaction"], ["24/7", "Support"]].map(([n, l]) => (
            <div key={l} className="bg-background/80 p-8 text-center backdrop-blur">
              <div className="text-4xl font-bold text-gradient md:text-5xl">{n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Let's build something <span className="text-gradient">together</span></h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Book a free 30-minute discovery call — we'll map out scope, timeline, and budget.</p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105">
          Start a conversation <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
