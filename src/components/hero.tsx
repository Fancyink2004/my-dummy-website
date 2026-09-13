import { ArrowDown } from "lucide-react";
import { person } from "@/lib/portfolio";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16">
      <div className="mb-8 flex items-center justify-between text-xs font-medium uppercase tracking-caps text-clay">
        <span>
          {person.location} · Est. {person.established}
        </span>
        <span>Vol. 06</span>
      </div>

      <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="animate-fade-up mb-5 text-sm font-medium uppercase tracking-caps text-oxblood">
            {person.role}
          </p>
          <h1 className="animate-fade-up font-display text-display font-medium text-ink">
            I design brands, products, and printed matter.
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-lede text-clay"
            style={{ animationDelay: "80ms" }}
          >
            An independent practice in {person.location} for studios and
            companies that still care about the details.
          </p>
          <a
            href="#work"
            className="animate-fade-up mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink"
            style={{ animationDelay: "140ms" }}
          >
            View selected work
            <ArrowDown className="size-4" />
          </a>
        </div>
        <figure className="animate-fade-up lg:col-span-5" style={{ animationDelay: "120ms" }}>
          <img
            src="/images/studio.jpg"
            alt="A quiet Lisbon studio: oak desk, brass lamp, and stacks of paper by a tall window."
            className="aspect-[4/5] w-full rounded-md object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
            width={1600}
            height={1200}
          />
          <figcaption className="mt-3 text-xs uppercase tracking-caps text-clay">
            Studio, Alfama · {person.location}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
