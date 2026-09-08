import type { Dictionary } from "@/dictionaries/en";
import { Reveal } from "./Reveal";

export function Journey({ dict }: { dict: Dictionary }) {
  return (
    <section id="journey" className="border-t border-line-soft py-16 sm:py-24">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-[clamp(1.65rem,3vw,2.35rem)] font-bold">{dict.journey.title}</h2>
            <p className="mt-2 max-w-[46ch] text-ink-soft">{dict.journey.lede}</p>
          </div>
          <span className="whitespace-nowrap text-sm text-ink-faint">{dict.journey.range}</span>
        </Reveal>

        <Reveal stagger as="ol" className="relative">
          <div className="absolute top-1.5 bottom-1.5 start-[5px] w-px bg-line" />
          {dict.journey.items.map((item, i) => (
            <li key={i} className="group relative ps-10 pb-10 last:pb-0">
              <span
                className={`absolute top-1.5 start-0 h-[11px] w-[11px] rounded-full border-2 transition-colors group-hover:border-accent ${
                  item.now ? "border-accent bg-accent" : "border-line bg-bg"
                }`}
              />
              <div className="mb-1 flex flex-wrap items-baseline gap-3">
                <span className="text-[0.82rem] tabular-nums text-ink-faint">{item.period}</span>
                {item.now && (
                  <span className="rounded-full border border-accent/35 px-2 py-0.5 text-[0.7rem] text-accent">
                    {dict.journey.nowLabel}
                  </span>
                )}
              </div>
              <div className="font-display text-lg font-bold">{item.role}</div>
              <div className="mb-1.5 text-[0.95rem] text-ink-soft">{item.company}</div>
              <p className="max-w-[60ch] text-[0.92rem] text-ink-faint">{item.desc}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
