import { useMemo, useState } from "react";
import {
  categories,
  projects,
  type Category,
  type Project,
} from "@/lib/portfolio";
import { cn } from "@/lib/utils";

const spanClass: Record<Project["span"], string> = {
  wide: "md:col-span-7",
  narrow: "md:col-span-5",
  half: "md:col-span-6",
};

export function Work() {
  const [filter, setFilter] = useState<Category>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section id="work" className="scroll-mt-24 border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <header className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-caps text-clay">
              01 — Selected work
            </p>
            <h2 className="mt-3 font-display text-title font-medium text-ink">
              Projects
            </h2>
          </div>
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => {
              const active = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(category)}
                  className={cn(
                    "min-h-11 rounded-full px-4 text-sm transition-[background-color,color] duration-150 ease-out",
                    active
                      ? "bg-ink text-paper"
                      : "bg-stone text-clay hover:text-ink",
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </header>

        <div
          key={filter}
          className="grid grid-cols-1 gap-x-6 gap-y-12 animate-fade-up md:grid-cols-12"
        >
          {visible.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={
                filter === "All" ? spanClass[project.span] : "md:col-span-6"
              }
              priority={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  className,
  priority,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
}) {
  const [revealed, setRevealed] = useState(false);

  return (
    <article className={cn("group", className)}>
      <button
        type="button"
        className="relative block w-full overflow-hidden rounded-lg text-left"
        aria-expanded={revealed}
        aria-label={`${project.title}: ${project.description}`}
        onClick={() => setRevealed((value) => !value)}
      >
        <img
          src={project.image}
          alt=""
          width={1600}
          height={1200}
          loading={priority ? "eager" : "lazy"}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 via-ink/35 to-transparent p-5 transition-opacity duration-300 ease-out md:p-6",
            revealed
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",
          )}
        >
          <p className="max-w-md text-sm leading-relaxed text-paper md:text-base">
            {project.description}
          </p>
        </div>
      </button>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-caps text-clay">
            {project.index} · {project.client}
          </p>
          <h3 className="mt-1 font-display text-2xl font-medium text-ink">
            {project.title}
          </h3>
        </div>
        <p className="shrink-0 text-sm text-clay">
          {project.category} · {project.year}
        </p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-clay md:hidden">
        {project.description}
      </p>
    </article>
  );
}
