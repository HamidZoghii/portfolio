import Image from "next/image";
import type { Dictionary } from "@/dictionaries/en";
import { Reveal } from "./Reveal";
import { withBasePath } from "@/lib/base-path";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <Reveal as="section" className="border-t border-line-soft py-16 sm:py-20">
      <div className="mx-auto grid max-w-(--container-page) grid-cols-1 gap-10 px-5 sm:px-8 md:grid-cols-[0.9fr_1.6fr] md:gap-16">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl border border-line">
            <Image
              src={withBasePath("/images/hamid-photo.webp")}
              alt={dict.hero.name}
              fill
              sizes="220px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-[3px] bg-accent" />
          </div>
          <div className="text-sm text-ink-faint">{dict.about.label}</div>
        </div>

        <div className="max-w-[64ch]">
          <p className="font-display text-[clamp(1.1rem,2vw,1.4rem)] leading-[1.55]">{dict.about.p1}</p>
          <p className="mt-6 font-display text-[clamp(1.1rem,2vw,1.4rem)] leading-[1.55] text-ink-soft">
            {dict.about.p2}
          </p>
          <blockquote className="my-6 border-s-2 border-accent ps-5 font-display text-[clamp(1.2rem,2.4vw,1.55rem)] font-semibold leading-[1.4]">
            {dict.about.quote}
          </blockquote>
          <p className="font-display text-[clamp(1.1rem,2vw,1.4rem)] leading-[1.55] text-ink-soft">
            {dict.about.p3}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
