import { defaultLocale } from './locales';
import { translations } from './translations';

const replace = (text: string, placeholders: Record<string, string> = {}) => {
  let result = text;

  Object.entries(placeholders).forEach(([placeholder, value]) => {
    result = result.replace(placeholder, value);
  });

  return result;
};

export const translate = (
  text: string,
  locale: string,
  placeholders: Record<string, string> = {},
) => {
  if (locale === defaultLocale) {
    return replace(text, placeholders);
  }

  return replace(translations[text]?.[locale] ?? text, placeholders);
};
