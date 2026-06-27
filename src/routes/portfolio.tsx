import { createFileRoute } from "@tanstack/react-router";
import { EyebrowTag, SectionHeader } from "@/components/site/Section";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [
    { title: "Portfolio — Velora" },
    { name: "description", content: "Selected work from Velora Web Solutions — e-commerce, internal tools, and brand sites." },
  ]}),
  component: Portfolio,
});

function Portfolio() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <EyebrowTag>Portfolio</EyebrowTag>
      <SectionHeader title={<>Recent <span className="text-gradient">work</span></>} subtitle="A few projects we've shipped recently across commerce, internal tools, and brand." />
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
  );
}
