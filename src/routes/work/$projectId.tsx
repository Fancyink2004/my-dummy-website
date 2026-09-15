import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { Link, createFileRoute, notFound, useParams } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work/$projectId")({
  component: ProjectDetail,
});

function ProjectDetail() {
  const { projectId } = useParams({ from: "/work/$projectId" });
  const projectIndex = projects.findIndex((item) => item.id === projectId);
  const project = projects[projectIndex];

  if (!project) {
    throw notFound();
  }

  const previousProject = projects[projectIndex - 1];
  const nextProject = projects[projectIndex + 1];

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <main id="main">
        <article>
          <header className="mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-8 sm:pb-20 sm:pt-16">
            <Link
              to="/"
              hash="work"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-clay transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Work
            </Link>

            <div className="mt-16 grid gap-8 md:grid-cols-12 md:items-end md:gap-12">
              <div className="md:col-span-8">
                <p className="text-xs font-medium uppercase tracking-caps text-oxblood">
                  {project.index} — Selected work
                </p>
                <h1 className="mt-4 font-display text-display font-medium text-ink">
                  {project.title}
                </h1>
              </div>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-5 text-sm md:col-span-4 md:pb-2">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-caps text-clay">
                    Client
                  </dt>
                  <dd className="mt-1 text-ink">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-caps text-clay">
                    Category
                  </dt>
                  <dd className="mt-1 text-ink">{project.category}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-caps text-clay">
                    Year
                  </dt>
                  <dd className="mt-1 text-ink">{project.year}</dd>
                </div>
              </dl>
            </div>
          </header>

          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <img
              src={project.image}
              alt={`${project.title} project`} 
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
          </div>

          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <section className="grid gap-8 border-t border-ink/10 pt-8 md:grid-cols-12 md:gap-12">
              <h2 className="text-xs font-medium uppercase tracking-caps text-clay md:col-span-3">
                Overview
              </h2>
              <p className="max-w-3xl font-display text-2xl leading-snug text-ink sm:text-3xl md:col-span-8 md:col-start-5">
                {project.overview}
              </p>
            </section>

            <ProjectVideo video={project.video} title={project.title} />

            <div className="mt-16 grid gap-12 border-t border-ink/10 pt-8 sm:mt-24 md:grid-cols-3 md:gap-8">
              <StorySection title="Challenge" text={project.challenge} />
              <StorySection title="Approach" text={project.approach} />
              <StorySection title="Outcome" text={project.outcome} />
            </div>

            <section className="mt-16 border-t border-ink/10 pt-8 sm:mt-24" aria-labelledby="gallery-title">
              <h2 id="gallery-title" className="text-xs font-medium uppercase tracking-caps text-clay">
                Image gallery
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {project.gallery?.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    width={1600}
                    height={1200}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-lg object-cover"
                  />
                ))}
              </div>
            </section>

            <nav className="mt-16 grid gap-4 border-t border-ink/10 pt-8 sm:mt-24 sm:grid-cols-2" aria-label="Project navigation">
              {previousProject ? (
                <ProjectNavLink direction="Previous project" project={previousProject} />
              ) : <span />}
              {nextProject ? (
                <ProjectNavLink direction="Next project" project={nextProject} next />
              ) : <span />}
            </nav>

            <Link
              to="/"
              hash="work"
              className="mt-10 inline-flex min-h-11 items-center gap-2 text-sm text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Work
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProjectVideo({ video, title }: { video?: string | null; title: string }) {
  return (
    <section className="mt-16 sm:mt-24" aria-labelledby="video-title">
      <h2 id="video-title" className="sr-only">Project Video</h2>
      <div className="mx-auto aspect-[9/16] w-full max-w-xl overflow-hidden rounded-lg bg-stone">
        {video ? (
          <video
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            aria-label={`${title} project video`}
          >
            <source src={video} />
            Your browser does not support the project video.
          </video>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-clay">
            <Play className="size-8" strokeWidth={1.25} aria-hidden="true" />
            <p className="text-xs font-medium uppercase tracking-caps">Project Video</p>
          </div>
        )}
      </div>
    </section>
  );
}

function StorySection({ title, text }: { title: string; text?: string }) {
  return (
    <section>
      <h2 className="text-xs font-medium uppercase tracking-caps text-clay">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-clay">{text}</p>
    </section>
  );
}

function ProjectNavLink({
  direction,
  project,
  next = false,
}: {
  direction: string;
  project: (typeof projects)[number];
  next?: boolean;
}) {
  return (
    <Link
      to="/work/$projectId"
      params={{ projectId: project.id }}
      className={cn(
        "group flex min-h-20 items-center gap-4 border-y border-ink/10 py-4 text-ink hover:text-oxblood",
        next ? "justify-end text-right" : "",
      )}
    >
      {!next && <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />}
      <span>
        <span className="block text-xs font-medium uppercase tracking-caps text-clay">
          {direction}
        </span>
        <span className="mt-1 block font-display text-2xl">{project.title}</span>
      </span>
      {next && <ArrowRight className="size-4 shrink-0" aria-hidden="true" />}
    </Link>
  );
}