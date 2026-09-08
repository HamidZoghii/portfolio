"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/dictionaries/en";
import type { Locale } from "@/lib/i18n-config";
import { IconMenu, IconClose } from "./icons";

const navKeys = ["work", "currently", "journey", "stack", "experiments", "contact"] as const;

export function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const otherLocale: Locale = locale === "en" ? "fa" : "en";
  const restOfPath = pathname.replace(/^\/(en|fa)/, "") || "";
  const switchHref = `/${otherLocale}${restOfPath}`;

  const wordmark = dict.hero.name.split(" ")[0] + ".";

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors ${
        scrolled ? "border-b border-line-soft bg-bg/80" : "border-b border-transparent bg-bg/60"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-(--container-page) items-center justify-between px-5 sm:px-8">
        <Link href={`/${locale}#top`} className="font-display text-xl font-bold tracking-tight">
          {wordmark}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="group relative py-1 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {dict.nav[key]}
              <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={switchHref}
            className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-accent/40 hover:text-ink"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink md:hidden"
          >
            {open ? <IconClose className="h-4.5 w-4.5" /> : <IconMenu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-b border-line-soft bg-bg px-5 pb-4 sm:px-8 md:hidden">
          <ul className="flex flex-col gap-3 pt-2">
            {navKeys.map((key) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm text-ink-soft"
                >
                  {dict.nav[key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
