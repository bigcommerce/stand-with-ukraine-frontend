import { defaultLocale } from './locales';
import { translations } from './translations';

export const translate = (text: string, locale: string) => {
  if (locale === defaultLocale) {
    return text;
  }

  return translations[text]?.[locale] ?? text;
};
