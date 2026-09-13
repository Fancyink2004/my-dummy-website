export const categories = ["All", "Brand", "Product", "Web"] as const;

export type Category = (typeof categories)[number];
export type ProjectCategory = Exclude<Category, "All">;

export type Project = {
  id: string;
  index: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: string;
  image: string;
  description: string;
  span: "wide" | "narrow" | "half";
};

export const person = {
  name: "Aria Voss",
  role: "Product designer & creative director",
  location: "Lisbon",
  email: "aria@studiovoss.com",
  availability: "Available for selected projects, autumn 2026",
  established: "2016",
};

export const projects: Project[] = [
  {
    id: "atelier",
    index: "01",
    title: "Atelier",
    client: "Casa Form",
    category: "Brand",
    year: "2025",
    image: "/images/atelier.jpg",
    description:
      "A quiet identity for a Lisbon ceramics studio — marks, packaging, and a catalog printed on uncoated stock.",
    span: "wide",
  },
  {
    id: "northline",
    index: "02",
    title: "Northline",
    client: "Metro Norte",
    category: "Product",
    year: "2025",
    image: "/images/northline.jpg",
    description:
      "Wayfinding and a passenger app for a new urban rail line. Fewer screens, clearer journeys.",
    span: "narrow",
  },
  {
    id: "field-notes",
    index: "03",
    title: "Field Notes",
    client: "Quarterly",
    category: "Web",
    year: "2024",
    image: "/images/fieldnotes.jpg",
    description:
      "An online reading room for an independent journal. Type-led, issue-based, built to be read slowly.",
    span: "narrow",
  },
  {
    id: "lumina",
    index: "04",
    title: "Lumina",
    client: "Haus Light",
    category: "Brand",
    year: "2024",
    image: "/images/lumina.jpg",
    description:
      "Art direction and a campaign system for a family of sculptural pendants. Light as material, not decoration.",
    span: "wide",
  },
  {
    id: "harbor",
    index: "05",
    title: "Harbor",
    client: "Tide Co.",
    category: "Product",
    year: "2023",
    image: "/images/harbor.jpg",
    description:
      "A wealth product for people who dislike finance apps. Calm surfaces, honest numbers, no theatre.",
    span: "half",
  },
  {
    id: "meridian",
    index: "06",
    title: "Meridian",
    client: "Studio Meridian",
    category: "Web",
    year: "2023",
    image: "/images/meridian.jpg",
    description:
      "A project archive for an architecture practice. Large plates, sparse copy, nothing extra.",
    span: "half",
  },
];

export const skills = [
  {
    name: "Art direction",
    detail: "Campaigns, photography, and the tone a brand keeps under pressure.",
  },
  {
    name: "Brand identity",
    detail: "Marks, type, color, and the rules that let a system live without you.",
  },
  {
    name: "Product design",
    detail: "Interfaces with a point of view. Flows that respect attention.",
  },
  {
    name: "Editorial design",
    detail: "Journals, catalogs, and digital reading rooms. Type first.",
  },
  {
    name: "Type systems",
    detail: "Pairings, scales, and optical sizes that hold from stamp to billboard.",
  },
  {
    name: "Design systems",
    detail: "Tokens, components, and the boring work that makes the rest look easy.",
  },
  {
    name: "Research",
    detail: "Interviews, audits, and the questions before the first sketch.",
  },
  {
    name: "Prototyping",
    detail: "From paper to high fidelity. Prove it before it ships.",
  },
];

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const inquiryTypes = ["Brand", "Product", "Web", "Other"] as const;
export type InquiryType = (typeof inquiryTypes)[number];
