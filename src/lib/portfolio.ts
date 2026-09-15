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
  overview?: string;
  challenge?: string;
  approach?: string;
  outcome?: string;
  gallery?: string[];
  video?: string | null;
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
    overview:
      "Atelier is a considered identity for a ceramics studio whose work is shaped by hand, heat, and time. The system gives the studio a calm, tactile presence across its packaging, catalog, and digital touchpoints.",
    challenge:
      "Casa Form needed to feel established without losing the warmth and irregularity that made its work human. The identity had to hold together across small labels, large-format print, and a growing body of makers' stories.",
    approach:
      "We built the system around a restrained wordmark, generous typography, and a palette drawn from clay, paper, and kiln ash. Uncoated stocks and close-up photography made the material quality part of every interaction.",
    outcome:
      "The studio launched with a flexible identity that made each collection feel distinct while keeping the overall practice recognisable and quietly confident.",
    gallery: ["/images/atelier.jpg", "/images/studio.jpg"],
    video: "/videos/atelier.mp4",
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
    overview:
      "Northline is a wayfinding and product system for a new urban rail line connecting the northern edge of the city to its centre.",
    challenge:
      "Passengers needed to make quick decisions in unfamiliar stations, often while moving through a crowded environment. The physical and digital experiences had to speak the same visual language.",
    approach:
      "We reduced the interface to a small set of clear journey states, then carried those cues into station signage, maps, and service updates. High contrast and deliberate spacing kept information legible at a glance.",
    outcome:
      "Northline gave the network a consistent public face and helped passengers move from platform to destination with fewer moments of uncertainty.",
    gallery: ["/images/northline.jpg", "/images/studio.jpg"],
    video: null,
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
    overview:
      "Field Notes is an online reading room for Quarterly, designed to give independent journalism the time and space it deserves.",
    challenge:
      "The journal had a strong print presence but its digital archive made long-form reading feel fragmented. The new site needed to support discovery without competing with the writing.",
    approach:
      "A type-led layout, issue-based navigation, and a measured rhythm of images and text turn the archive into a place to browse, settle in, and return to.",
    outcome:
      "The reading room made the journal's back catalogue easier to explore while preserving the slower, editorial character of the print edition.",
    gallery: ["/images/fieldnotes.jpg", "/images/studio.jpg"],
    video: null,
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
    overview:
      "Lumina is an art direction and campaign system for a family of sculptural pendants made by Haus Light.",
    challenge:
      "The collection was visually rich, but its launch materials treated the fixtures as isolated products. Haus Light needed a world that could show how the pieces shape a room.",
    approach:
      "We photographed light as a physical material, pairing quiet interiors with a flexible campaign grammar of shadow, scale, and close detail.",
    outcome:
      "The resulting system works across launch films, print, and product pages, giving every fixture a sense of place without flattening its character.",
    gallery: ["/images/lumina.jpg", "/images/studio.jpg"],
    video: null,
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
    overview:
      "Harbor is a wealth product for people who want a clearer relationship with their money and less performance from their tools.",
    challenge:
      "Most financial products make confidence feel like a visual effect. Tide Co. needed a product that could make complex information feel direct, calm, and useful.",
    approach:
      "We focused the experience on plain language, transparent numbers, and a small set of reassuring actions. The visual system keeps the interface warm without hiding its precision.",
    outcome:
      "Harbor gives customers a steadier daily view of their finances and a product language that earns trust through clarity.",
    gallery: ["/images/harbor.jpg", "/images/studio.jpg"],
    video: null,
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
    overview:
      "Meridian is a project archive for an architecture practice that lets the work carry the conversation.",
    challenge:
      "The studio's previous archive was difficult to scan and gave every project the same weight. The new structure needed to make comparison easy while leaving room for atmosphere.",
    approach:
      "We designed large image plates, restrained project notes, and a simple index that lets visitors move between buildings without losing their place.",
    outcome:
      "The archive now feels like an extension of the studio: precise, spacious, and confident enough to leave some things unsaid.",
    gallery: ["/images/meridian.jpg", "/images/studio.jpg"],
    video: null,
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
