export const locales = [
  "en",
  "fr",
  "de",
  "es",
  "it",
  "nl",
  "ru",
  "pl",
  "ptbr",
  "fa",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  it: "Italiano",
  nl: "Nederlands",
  ru: "Русский",
  pl: "Polski",
  ptbr: "Português",
  fa: "فارسی",
};

export const rtlLocales: readonly Locale[] = ["fa"] as const;

export function isRtlLocale(locale: string): boolean {
  return rtlLocales.includes(locale as Locale);
}

export function getLocaleDirection(locale: string): "rtl" | "ltr" {
  return isRtlLocale(locale) ? "rtl" : "ltr";
}
