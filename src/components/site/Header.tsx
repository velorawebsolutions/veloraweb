import { Link } from "@tanstack/react-router";
import logo from "@/assets/velora-logo.png";


const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center" aria-label="Velora Web Solutions">
          <img src={logo} alt="Velora Web Solutions" className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-card px-2 py-1.5 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-1.5 text-sm text-foreground bg-secondary" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="rounded-full bg-cta px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
