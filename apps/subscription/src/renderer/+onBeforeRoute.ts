import { extractLocale } from '../locales';

export default onBeforeRoute;

import { PageContext } from './types';

function onBeforeRoute(pageContext: PageContext) {
  const { urlWithoutLocale, locale } = extractLocale(pageContext.urlPathname);

  return {
    pageContext: { locale, urlLogical: urlWithoutLocale },
  };
}
