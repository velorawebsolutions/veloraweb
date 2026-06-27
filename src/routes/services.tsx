import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, ShoppingCart, Bot, Search, Megaphone, Palette, Cloud, Wrench, ArrowRight } from "lucide-react";
import { EyebrowTag, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — Velora" },
    { name: "description", content: "Website development, e-commerce, AI & automation, SEO, digital marketing, UI/UX, cloud, and maintenance." },
  ]}),
  component: Services,
});

const services = [
  { icon: Globe, title: "Website Development", body: "Custom websites, business portals, landing pages, and web applications engineered for performance and scale." },
  { icon: ShoppingCart, title: "E-Commerce Solutions", body: "Scalable online stores with secure payment gateways, inventory management, and conversion-focused UX." },
  { icon: Bot, title: "AI & Automation", body: "AI chatbots, workflow automation, and intelligent agents that eliminate repetitive work and unlock new capabilities." },
  { icon: Search, title: "SEO Optimization", body: "Technical SEO, on-page optimization, and content strategy that drives qualified organic traffic." },
  { icon: Megaphone, title: "Digital Marketing", body: "Lead-generation, paid acquisition, and growth strategies tailored to your audience and ROI goals." },
  { icon: Palette, title: "UI/UX Design", body: "Modern interfaces and product experiences crafted around real user behavior and brand identity." },
  { icon: Cloud, title: "Cloud Solutions", body: "Cloud architecture, deployment, scaling, and DevOps on AWS, Azure, and modern serverless platforms." },
  { icon: Wrench, title: "Maintenance & Support", body: "Ongoing updates, security monitoring, performance tuning, and 24/7 support after launch." },
];

function Services() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <EyebrowTag>Services</EyebrowTag>
        <SectionHeader title={<>Everything you need, <span className="text-gradient">under one roof</span></>} subtitle="Full-stack capability across product, engineering, growth, and operations." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/60">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cta text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105">
            Start your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
