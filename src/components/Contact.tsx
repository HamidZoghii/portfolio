import type { Dictionary } from "@/dictionaries/en";
import { Reveal } from "./Reveal";
import { IconGithub, IconWhatsapp, IconMail } from "./icons";

export function Contact({ dict }: { dict: Dictionary }) {
  return (
    <Reveal
      as="section"
      className="border-t border-line-soft py-16 sm:py-24"
    >
      <div id="contact" className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <h2 className="max-w-[16ch] font-display text-[clamp(2rem,5.5vw,3.5rem)] font-bold leading-[1.1]">
          {dict.contact.title}
        </h2>
        <p className="mt-4 max-w-[46ch] text-[1.05rem] text-ink-soft">{dict.contact.lede}</p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={`mailto:${dict.contact.email}`}
            className="flex items-center gap-2 border-b border-accent/35 pb-1 font-display text-[clamp(1.15rem,2.4vw,1.5rem)] font-semibold text-accent"
          >
            <IconMail className="h-5 w-5" />
            {dict.contact.email}
          </a>
          <div className="flex items-center gap-6">
            <a
              href={dict.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              <IconGithub className="h-4 w-4" />
              {dict.contact.github}
            </a>
            <a
              href={dict.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              <IconWhatsapp className="h-4 w-4" />
              {dict.contact.whatsapp}
            </a>
            <a href={`tel:${dict.contact.phone.replace(/\s/g, "")}`} className="text-sm text-ink-soft transition-colors hover:text-ink">
              {dict.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
