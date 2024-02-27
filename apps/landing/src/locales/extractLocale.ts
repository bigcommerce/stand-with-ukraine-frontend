import { defaultLocale, locales } from './locales';

export const extractLocale = (
  urlPathname: string,
): { locale: string; urlWithoutLocale: string } => {
  const urlPaths = urlPathname.split('/').filter(Boolean);

  if (Object.values(locales).includes(urlPaths[0])) {
    const [locale, ...paths] = urlPaths;

    return { locale, urlWithoutLocale: `/${paths.join('/')}` };
  }

  return { locale: defaultLocale, urlWithoutLocale: urlPathname };
};
