import { describe, expect, it } from "vitest";

import {
  defaultLocale,
  getLocaleDirection,
  isRtlLocale,
  localeNames,
  locales,
  rtlLocales,
} from "./index";

describe("locales config", () => {
  it("includes Persian (fa) in locales and localeNames", () => {
    expect(locales).toContain("fa");
    expect(localeNames.fa).toBe("فارسی");
  });

  it("identifies RTL locales correctly", () => {
    expect(rtlLocales).toContain("fa");
    expect(isRtlLocale("fa")).toBe(true);
    expect(isRtlLocale("en")).toBe(false);
    expect(isRtlLocale("fr")).toBe(false);
  });

  it("returns correct direction", () => {
    expect(getLocaleDirection("fa")).toBe("rtl");
    expect(getLocaleDirection("en")).toBe("ltr");
    expect(getLocaleDirection("de")).toBe("ltr");
  });

  it("has a valid default locale", () => {
    expect(defaultLocale).toBe("en");
    expect(locales).toContain(defaultLocale);
  });
});
