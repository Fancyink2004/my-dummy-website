import { ArrowUp } from "lucide-react";
import { navLinks, person } from "@/lib/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-caps text-paper/55">
              Independent practice
            </p>
            <p className="mt-3 font-display text-display font-medium leading-none tracking-display">
              {person.name}
            </p>
          </div>
          <a
            href={`mailto:${person.email}`}
            className="font-display text-2xl underline-offset-4 hover:underline"
          >
            {person.email}
          </a>
        </div>

        <div className="mt-14 grid gap-10 border-t border-paper/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-caps text-paper/55">
              Studio
            </p>
            <p className="mt-3 text-sm leading-relaxed text-paper/80">
              {person.location}
              <br />
              {person.availability}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-caps text-paper/55">
              Index
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-paper/80 hover:text-paper">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-caps text-paper/55">
              Colophon
            </p>
            <p className="mt-3 text-sm leading-relaxed text-paper/80">
              Set in Fraunces and Figtree. Photographed in analog light.
              Built as a single quiet page.
            </p>
          </div>
          <div className="flex items-start justify-between gap-4 sm:block">
            <p className="text-xs font-medium uppercase tracking-caps text-paper/55">
              © {new Date().getFullYear()}
            </p>
            <a
              href="#top"
              className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm text-paper/80 hover:text-paper"
            >
              Back to top
              <ArrowUp className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
