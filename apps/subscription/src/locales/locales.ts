export const locales = { en: 'en-US', ua: 'uk-UA' };

export const langs = Object.entries(locales).reduce<Record<string, string>>(
  (acc, [lang, locale]) => ({ ...acc, [locale]: lang }),
  {},
);

export const defaultLocale = locales.en;
