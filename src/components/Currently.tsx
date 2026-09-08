import type { Dictionary } from "@/dictionaries/en";
import { Reveal } from "./Reveal";

export function Currently({ dict }: { dict: Dictionary }) {
  return (
    <section id="currently" className="border-t border-line-soft py-16 sm:py-20">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(1.65rem,3vw,2.35rem)] font-bold">{dict.currently.title}</h2>
          <p className="mt-2 max-w-[46ch] text-ink-soft">{dict.currently.lede}</p>
        </Reveal>

        <Reveal
          stagger
          className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line-soft bg-line-soft sm:grid-cols-2 lg:grid-cols-4"
        >
          {dict.currently.items.map((item) => (
            <div key={item.label} className="bg-bg p-5 transition-colors hover:bg-surface">
              <div className="mb-3 text-2xl">{item.icon}</div>
              <div className="mb-1 text-[0.78rem] text-ink-faint">{item.label}</div>
              <div className="text-[0.95rem] font-semibold leading-snug">{item.value}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
