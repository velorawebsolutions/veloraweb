import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Globe, ShoppingCart, Bot, Search, Palette, Megaphone, Cloud, Wrench, Plus } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { projects } from "@/lib/projects";
import { EyebrowTag, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Velora — Premium Digital Agency" },
      { name: "description", content: "We build websites, e-commerce, AI automation, and cloud infrastructure that drive measurable business growth." },
      { property: "og:title", content: "Velora — Premium Digital Agency" },
      { property: "og:description", content: "Websites, e-commerce, AI automation, and cloud — engineered to scale." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Globe, title: "Website Development", body: "Custom websites, business portals, landing pages, and web applications." },
  { icon: ShoppingCart, title: "E-Commerce Solutions", body: "Scalable online stores with payment gateway integration." },
  { icon: Bot, title: "AI & Automation", body: "AI chatbots, workflow automation, CRM automation." },
  { icon: Search, title: "SEO Optimization", body: "Search engine optimization and ranking improvements." },
  { icon: Palette, title: "UI/UX Design", body: "Modern user experiences and interface design." },
  { icon: Megaphone, title: "Digital Marketing", body: "Lead generation and online growth strategies." },
  { icon: Cloud, title: "Cloud Solutions", body: "Cloud deployment, hosting, scaling, DevOps." },
  { icon: Wrench, title: "Website Maintenance", body: "Ongoing support, updates, and security monitoring." },
];

const why = ["Experienced Team", "Fast Delivery", "SEO Optimized", "Mobile Responsive", "Affordable Pricing", "Secure Development", "Latest Technologies", "24/7 Support"];
const process = ["Consultation", "Planning", "UI/UX Design", "Development", "Testing", "Launch", "Support"];


const stack = [
  { title: "Frontend", items: ["React", "Next.js", "Tailwind", "TypeScript"] },
  { title: "Backend", items: ["Node.js", "Express", "TanStack"] },
  { title: "Database", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { title: "Cloud", items: ["AWS", "Azure", "Docker"] },
  { title: "AI", items: ["OpenAI", "LangChain", "TensorFlow"] },
];

const testimonials = [
  { quote: "Velora rebuilt our entire commerce stack in 6 weeks. Conversion is up 38% and the team is unbelievably responsive.", name: "Priya Sharma", co: "Lumen Retail" },
  { quote: "The UX work alone was worth twice what we paid. Genuinely strategic engineering partners — not just developers.", name: "Marcus Chen", co: "Northbound SaaS" },
  { quote: "From brand to backend, every detail felt considered. Our site finally matches the quality of our work.", name: "Aditi Rao", co: "Bloom Studios" },
];

const faqs = [
  { q: "How long does a typical project take?", a: "Most marketing sites ship in 3–4 weeks. Complex web apps and AI platforms are scoped during consultation, typically 6–12 weeks." },
  { q: "Do you offer ongoing support?", a: "Yes. Every project includes 30 days of post-launch support and we offer monthly retainers for continuous improvement." },
  { q: "Can you work with my existing team?", a: "Absolutely. We integrate with in-house teams via Slack/Linear and follow your existing workflows." },
  { q: "Do you sign NDAs?", a: "Yes, mutual NDAs are standard. We can sign yours or send ours before any discovery call." },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="mx-auto max-w-7xl px-6 py-32 md:py-44">
          <EyebrowTag>Premium Digital Agency</EyebrowTag>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Transform your business with{" "}
            <span className="text-gradient">smart digital solutions</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We build websites, e-commerce platforms, AI automation systems, cloud infrastructure, and digital experiences that drive measurable business growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105">
              Get free consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
              View portfolio
            </Link>
          </div>

          <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {[["100+", "Projects delivered"], ["50+", "Happy clients"], ["99%", "Client satisfaction"], ["24/7", "Support"]].map(([n, l]) => (
              <div key={l} className="bg-background/80 p-8 text-center backdrop-blur">
                <div className="text-4xl font-bold text-gradient md:text-5xl">{n}</div>
                <div className="mt-2 text-sm text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="What we do" title={<>Services engineered to <span className="text-gradient">scale</span></>} subtitle="Full-stack capability across product, engineering, and growth — under one roof." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cta text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Why Velora" title={<>Built different, <span className="text-gradient">on purpose</span></>} subtitle="Every engagement combines senior craft, transparent process, and ruthless focus on outcomes." />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <div key={w} className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{w}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="How we work" title={<>A process you <span className="text-gradient">can trust</span></>} />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {process.map((step, i) => (
              <div key={step} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-lg font-bold text-gradient">
                  {i + 1}
                </div>
                <div className="mt-4 text-sm font-medium">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Selected work" title={<>Recent projects we're <span className="text-gradient">proud of</span></>} />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/60">
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.tag}</span>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="mt-5 text-sm font-medium text-primary">Visit site ↗</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Stack" title={<>Modern tools, picked <span className="text-gradient">with intent</span></>} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {stack.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
              <h4 className="text-sm font-semibold text-gradient">{s.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Clients say" title={<>Trusted by teams who <span className="text-gradient">ship fast</span></>} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-7">
              <blockquote className="flex-1 text-base text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cta text-sm font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.co}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <SectionHeader eyebrow="FAQ" title={<>Common questions, <span className="text-gradient">clear answers</span></>} />
        <div className="mt-12 space-y-3">
          {faqs.map((f) => <Faq key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 text-center md:p-20">
          <div className="absolute inset-0 -z-10 opacity-50" style={{ background: "radial-gradient(circle at 50% 0%, var(--brand-2), transparent 60%)" }} />
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Ready to build something <span className="text-gradient">remarkable?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Book a free 30-minute consultation. We'll map out scope, timeline, and budget — no pitch.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105">
            Start your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-medium">{q}</span>
        <Plus className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-45" : ""}`} />
      </button>
      {open && <div className="px-6 pb-5 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
}
