import type { Locale as DateFnsLocale } from "date-fns";
import { useLingui } from "@lingui/react";
import { de, enGB, es, faIR, fr, it, nl, pl, ptBR, ru } from "date-fns/locale";

import type { Locale } from "~/locales";
import { isRtlLocale } from "~/locales";
import { useLinguiContext } from "~/providers/lingui";
import { activateLocale } from "~/utils/i18n";

export function useLocalisation() {
  const { i18n } = useLingui();
  const { locale, setLocale, availableLocales } = useLinguiContext();

  const dateLocaleMap: Partial<Record<Locale, DateFnsLocale>> = {
    en: enGB,
    fr,
    de,
    es,
    it,
    nl,
    ru,
    pl,
    ptbr: ptBR,
    fa: faIR,
  };

  const currentDateLocale = dateLocaleMap[locale] ?? enGB;

  const handleSetLocale = async (newLocale: Locale) => {
    await activateLocale(newLocale);
    setLocale(newLocale);
  };

  const isRtl = isRtlLocale(locale);
  const dir = isRtl ? "rtl" : "ltr";

  return {
    locale,
    dateLocale: currentDateLocale,
    setLocale: handleSetLocale,
    availableLocales,
    formatNumber: (value: number, options?: Intl.NumberFormatOptions) =>
      i18n.number(value, options),
    dir,
    isRtl,
  };
}
