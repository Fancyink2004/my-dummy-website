import { person } from "@/lib/portfolio";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-ink/10">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-caps text-clay">
            02 — Studio
          </p>
          <h2 className="mt-3 font-display text-title font-medium text-ink">
            About
          </h2>
          <figure className="mt-8">
            <img
              src="/images/hands.jpg"
              alt="Hands arranging printed sheets and color chips on a plaster table."
              className="aspect-[3/4] w-full rounded-md object-cover"
              width={1200}
              height={1600}
              loading="lazy"
            />
            <figcaption className="mt-3 text-xs uppercase tracking-caps text-clay">
              Working studies, 2026
            </figcaption>
          </figure>
        </div>

        <div className="space-y-6 text-lede text-ink lg:col-span-7 lg:pt-16">
          <p>
            I run a small independent practice from a studio in Alfama, working
            with founders, editors, and in-house teams who still believe a
            product can have a point of view.
          </p>
          <p className="text-clay">
            Before Lisbon I spent seven years in New York at a brand studio, and
            two at a product company that shipped too fast. I left to make fewer
            things, more carefully. The work sits between identity, interface,
            and print.
          </p>
          <p className="text-clay">
            I care about how type sits on a page, how a first screen feels at
            seven in the morning, and whether a mark still holds when it is
            stamped on kraft.
          </p>
          <p className="pt-4 text-sm font-medium uppercase tracking-caps text-oxblood">
            {person.availability}
          </p>
        </div>
      </div>
    </section>
  );
}
