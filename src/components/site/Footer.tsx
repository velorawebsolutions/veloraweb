import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/velora-logo.png";


export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <img src={logo} alt="Velora Web Solutions" className="h-10 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Building innovative digital solutions that help businesses grow, compete, and succeed online.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/velorawebsolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/velora-web-solutions-312896413?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterCol title="Services" items={["Website Development", "E-Commerce Solutions", "AI & Automation", "SEO Optimization", "Digital Marketing", "UI/UX Design", "Cloud Solutions", "Maintenance & Support"]} />
        <FooterCol
          title="Company"
          items={[
            { label: "About", to: "/about" },
            { label: "Services", to: "/services" },
            { label: "Portfolio", to: "/portfolio" },
            { label: "Contact", to: "/contact" },
          ]}
        />
        <FooterCol title="Get in touch" items={[]}>
          <a href="mailto:velorawebsolutions@gmail.com" className="block text-sm text-gradient">
            velorawebsolutions@gmail.com
          </a>
        </FooterCol>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <span>© 2026 Velora Web Solutions. All rights reserved.</span>
          <span>Crafted with care for ambitious brands.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
  children,
}: {
  title: string;
  items: (string | { label: string; to: string })[];
  children?: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      {items.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {items.map((it) => {
            const obj = typeof it === "string" ? { label: it, to: "" } : it;
            return (
              <li key={obj.label}>
                {obj.to ? (
                  <Link to={obj.to} className="transition-colors hover:text-foreground">{obj.label}</Link>
                ) : (
                  <span>{obj.label}</span>
                )}
              </li>
            );
          })}
        </ul>
      )}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
