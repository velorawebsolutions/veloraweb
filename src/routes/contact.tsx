import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { EyebrowTag } from "@/components/site/Section";
import { sendContactMessage } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Velora" },
    { name: "description", content: "Tell us about your project. We'll respond within one business day." },
  ]}),
  component: Contact,
});

function Contact() {
  const send = useServerFn(sendContactMessage);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const f = new FormData(e.currentTarget);
    try {
      await send({ data: {
        name: String(f.get("name") || ""),
        email: String(f.get("email") || ""),
        phone: String(f.get("phone") || ""),
        company: String(f.get("company") || ""),
        service: String(f.get("service") || ""),
        budget: String(f.get("budget") || ""),
        details: String(f.get("details") || ""),
      }});
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <EyebrowTag>Let's talk</EyebrowTag>
      <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
        Tell us about your <span className="text-gradient">project</span>
      </h1>
      <p className="mt-5 text-muted-foreground">
        We'll respond within one business day with next steps and a discovery call.
      </p>

      {sent ? (
        <div className="mt-10 rounded-2xl border border-border bg-card p-8 text-center">
          <h2 className="text-2xl font-semibold text-gradient">Message sent</h2>
          <p className="mt-2 text-muted-foreground">Thanks — we'll be in touch shortly at velorawebsolutions@gmail.com.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-10 grid gap-5 rounded-2xl border border-border bg-card p-8 md:grid-cols-2">
          <Field label="Name *" name="name" required />
          <Field label="Email *" name="email" type="email" required />
          <Field label="Phone" name="phone" />
          <Field label="Company" name="company" />
          <Select label="Service" name="service" options={["Website Development","E-Commerce","AI & Automation","SEO","UI/UX Design","Digital Marketing","Cloud Solutions","Maintenance"]} />
          <Select label="Budget" name="budget" options={["< ₹25k","₹25k–₹1L","₹1L–₹5L","₹5L+","Not sure yet"]} />
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">Project details *</label>
            <textarea name="details" required rows={5} maxLength={4000} className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
          </div>
          {error && <div className="md:col-span-2 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</div>}
          <div className="md:col-span-2 flex items-center justify-between">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Back to home</Link>
            <button type="submit" disabled={loading} className="rounded-full bg-cta px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105 disabled:opacity-60">
              {loading ? "Sending…" : "Send message"}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input name={name} type={type} required={required} className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <select name={name} className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary">
        <option value="">Select an option</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
