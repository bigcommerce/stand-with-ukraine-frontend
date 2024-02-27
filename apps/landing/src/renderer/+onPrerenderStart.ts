export default onPrerenderStart;

import { defaultLocale, locales } from '../locales';

import { PageContext, PrerenderContext } from './types';

function onPrerenderStart(prerenderContext: PrerenderContext) {
  const pageContexts: PageContext[] = [];

  for (const pageContext of prerenderContext.pageContexts) {
    for (const locale of Object.values(locales)) {
      const urlOriginal =
        locale === defaultLocale ? pageContext.urlOriginal : `/${locale}${pageContext.urlOriginal}`;

      pageContexts.push({ ...pageContext, locale, urlOriginal });
    }
  }

  return { prerenderContext: { pageContexts } };
}
