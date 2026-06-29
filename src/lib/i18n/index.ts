import type { Locale } from "@/contexts/LanguageContext";
import { getAboutT } from "./about";
import { getDemoT, buildSelectOptions, CUSTOM_INPUT_VALUE } from "./demo";
import { getHomeT } from "./home";
import { getNavT } from "./nav";
import { getTechT } from "./tech";

export function getTranslations(locale: Locale) {
  return {
    nav: getNavT(locale),
    home: getHomeT(locale),
    about: getAboutT(locale),
    demo: getDemoT(locale),
    tech: getTechT(locale),
  };
}

export {
  getNavT,
  getHomeT,
  getAboutT,
  getDemoT,
  getTechT,
  buildSelectOptions,
  CUSTOM_INPUT_VALUE,
};
