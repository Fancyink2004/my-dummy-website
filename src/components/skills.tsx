import { skills } from "@/lib/portfolio";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <header className="mb-10 sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-caps text-clay">
            03 — Practice
          </p>
          <h2 className="mt-3 font-display text-title font-medium text-ink">
            Skills
          </h2>
        </header>
        <ol className="grid grid-cols-1 border-t border-ink/10 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <li
              key={skill.name}
              className="flex gap-5 border-b border-ink/10 py-6 pr-4 sm:odd:pr-8 sm:even:pl-8"
            >
              <span className="w-8 shrink-0 font-display text-sm text-oxblood">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-medium text-ink">
                  {skill.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-clay">
                  {skill.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
