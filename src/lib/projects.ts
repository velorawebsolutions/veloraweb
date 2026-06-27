import projStch from "@/assets/proj-stch.png";
import projVault from "@/assets/proj-clientvault.png";
import projSathya from "@/assets/proj-sathyabhaama.png";

export type Project = {
  img: string;
  tag: string;
  title: string;
  body: string;
  stack: string[];
  url: string;
};

export const projects: Project[] = [
  {
    img: projStch,
    tag: "E-Commerce",
    title: "STCH Brand",
    body: "Apparel brand storefront with curated collection, lookbook, and modern checkout experience.",
    stack: ["Shopify", "Editorial UI", "Brand"],
    url: "https://www.stchbrand.store/",
  },
  {
    img: projVault,
    tag: "Internal Tool",
    title: "ClientVault — Data Manager",
    body: "Secure client data manager with search, analytics, and CSV export, built on a realtime database.",
    stack: ["React", "Firebase", "Dashboard"],
    url: "https://shumanclientvault.netlify.app/",
  },
  {
    img: projSathya,
    tag: "E-Commerce",
    title: "Sathyabhaama",
    body: "Heritage saree and bridal lehenga storefront — warm editorial design with full catalog browsing.",
    stack: ["React", "Commerce", "Branding"],
    url: "https://agent-6a205d19e3de2bbf3fac67a4--sathyabhaamain.netlify.app/",
  },
];
