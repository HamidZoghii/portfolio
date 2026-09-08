import type { Dictionary } from "@/dictionaries/en";
import { Reveal } from "./Reveal";

export function Stack({ dict }: { dict: Dictionary }) {
  const groups = [
    { ...dict.stack.primary, note: undefined as string | undefined },
    { ...dict.stack.working, note: undefined as string | undefined },
    { ...dict.stack.exploring, note: dict.stack.exploring.note as string | undefined },
  ];

  return (
    <section id="stack" className="border-t border-line-soft py-16 sm:py-24">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(1.65rem,3vw,2.35rem)] font-bold">{dict.stack.title}</h2>
          <p className="mt-2 max-w-[46ch] text-ink-soft">{dict.stack.lede}</p>
        </Reveal>

        <Reveal stagger className="mt-8 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {groups.map((group, gi) => {
            const isExploring = gi === 2;
            return (
              <div key={group.label}>
                <div className="mb-2 text-sm text-ink-faint">{group.label}</div>
                {group.note && <div className="mb-2 text-[0.8rem] text-ink-faint">{group.note}</div>}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-lg border px-3.5 py-2 text-[0.88rem] transition-all hover:-translate-y-0.5 ${
                        isExploring
                          ? "border-dashed border-line text-ink-soft hover:text-ink"
                          : "border-line bg-surface hover:border-accent/40"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
