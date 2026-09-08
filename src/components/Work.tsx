import Image from "next/image";
import type { Dictionary } from "@/dictionaries/en";
import { Reveal } from "./Reveal";
import { IconArrowUpRight } from "./icons";

export function Work({ dict }: { dict: Dictionary }) {
  return (
    <section id="work" className="py-16 sm:py-24">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-[clamp(1.65rem,3vw,2.35rem)] font-bold">{dict.work.title}</h2>
            <p className="mt-2 max-w-[46ch] text-ink-soft">{dict.work.lede}</p>
          </div>
          <span className="whitespace-nowrap text-sm text-ink-faint">
            {dict.work.projects.length} {dict.work.countLabel}
          </span>
        </Reveal>

        <div>
          {dict.work.projects.map((project, i) => (
            <Reveal
              key={project.id}
              className="grid grid-cols-1 items-center gap-8 border-t border-line-soft py-10 last:border-b md:grid-cols-2 md:gap-10"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="group relative aspect-[16/11] overflow-hidden rounded-[14px] border border-line bg-surface">
                  <div className="flex h-[30px] items-center gap-[5px] border-b border-line-soft px-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-line" />
                    <span className="h-1.5 w-1.5 rounded-full bg-line" />
                    <span className="h-1.5 w-1.5 rounded-full bg-line" />
                  </div>
                  <div className="relative h-[calc(100%-30px)] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} website homepage`}
                      fill
                      sizes="(min-width: 768px) 560px, 100vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2.5 text-sm text-ink-faint">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs ${
                      project.status === "live"
                        ? "border-available/30 text-available"
                        : "border-accent/35 text-accent"
                    }`}
                  >
                    {project.statusLabel}
                  </span>
                  <span>{project.meta}</span>
                </div>

                <h3 className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] font-bold">{project.title}</h3>
                <p className="mt-2 max-w-[52ch] text-[0.98rem] text-ink-soft">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-line px-2.5 py-1 text-[0.78rem] text-ink-soft">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-3 text-[0.82rem] text-ink-faint">{project.role}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 inline-flex items-center gap-1.5 border-b border-accent/35 pb-0.5 text-[0.85rem] font-semibold transition-colors hover:text-accent"
                >
                  {project.linkLabel}
                  <IconArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
