import type { Dictionary } from "@/dictionaries/en";
import { Reveal } from "./Reveal";
import { IconBriefcase, IconWordpress, IconTeam, IconFlask } from "./icons";

const iconMap = {
  briefcase: IconBriefcase,
  wordpress: IconWordpress,
  team: IconTeam,
  flask: IconFlask,
};

export function Categories({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-t border-line-soft py-16 sm:py-20">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(1.65rem,3vw,2.35rem)] font-bold">
            {dict.categories.title}
          </h2>
          <p className="mt-2 max-w-[46ch] text-ink-soft">{dict.categories.lede}</p>
        </Reveal>

        <Reveal stagger className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {dict.categories.items.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <a
                key={item.title}
                href="#work"
                className="group rounded-2xl border border-line-soft bg-surface p-5 transition-all hover:-translate-y-1 hover:border-accent/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent transition-colors group-hover:border-accent/40">
                  {Icon && <Icon className="h-4.5 w-4.5" />}
                </div>
                <h3 className="font-display text-base font-bold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{item.desc}</p>
                <div className="mt-4 text-xs text-ink-faint">{item.count}</div>
              </a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
