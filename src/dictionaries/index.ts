import "server-only";
import type { Locale } from "../lib/i18n-config";
import type { Dictionary } from "./en";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en").then((m) => m.default),
  fa: () => import("./fa").then((m) => m.default as Dictionary),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
