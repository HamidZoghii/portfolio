import Image from "next/image";
import type { Dictionary } from "@/dictionaries/en";
import { Reveal } from "./Reveal";
import { IconArrowUpRight } from "./icons";
import { withBasePath } from "@/lib/base-path";

export function Experiments({ dict }: { dict: Dictionary }) {
  return (
    <section id="experiments" className="border-t border-line-soft py-16 sm:py-24">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(1.65rem,3vw,2.35rem)] font-bold">{dict.experiments.title}</h2>
          <p className="mt-2 max-w-[46ch] text-ink-soft">{dict.experiments.lede}</p>
        </Reveal>

        <Reveal stagger className="mt-8 flex flex-col gap-4">
          {dict.experiments.items.map((item) => (
            <div
              key={item.id}
              className="flex max-w-[780px] flex-col items-stretch gap-4 rounded-2xl border border-line-soft bg-surface p-4 sm:flex-row sm:items-center"
            >
              <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-[10px] border border-line-soft sm:aspect-[4/3] sm:w-[200px]">
                <Image
                  src={withBasePath(item.image)}
                  alt={`${item.title} homepage`}
                  fill
                  sizes="200px"
                  className="object-cover object-top"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center gap-2.5 text-sm text-ink-faint">
                  <span className="rounded-full border border-accent/35 px-2.5 py-0.5 text-xs text-accent">
                    {item.statusLabel}
                  </span>
                  <span>{item.meta}</span>
                </div>
                <h3 className="font-display text-[1.3rem] font-bold">{item.title}</h3>
                <p className="mt-1 max-w-[56ch] text-[0.95rem] text-ink-soft">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-line px-2.5 py-1 text-[0.78rem] text-ink-soft">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 inline-flex items-center gap-1.5 border-b border-accent/35 pb-0.5 text-[0.85rem] font-semibold transition-colors hover:text-accent"
                >
                  {item.linkLabel}
                  <IconArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
