import type { Dictionary } from "@/dictionaries/en";
import type { Locale } from "@/lib/i18n-config";

export function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <footer className="border-t border-line-soft py-6">
      <div className="mx-auto flex max-w-(--container-page) flex-wrap items-center justify-between gap-3 px-5 text-[0.82rem] text-ink-faint sm:px-8">
        <span>{dict.footer.rights}</span>
        <a href={`/${locale}#top`} className="rounded-full border border-line px-3.5 py-1.5">
          {dict.footer.backTop}
        </a>
      </div>
    </footer>
  );
}
