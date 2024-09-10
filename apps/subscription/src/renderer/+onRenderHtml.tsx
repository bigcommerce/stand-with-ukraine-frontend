import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import SwiperNavigationCss from 'swiper/css/navigation?raw';
// eslint-disable-next-line import/no-unresolved
import SwiperPaginationCss from 'swiper/css/pagination?raw';
// eslint-disable-next-line import/no-unresolved
import SwiperCss from 'swiper/css?raw';
import { dangerouslySkipEscape, escapeInject } from 'vike/server';

import { langs } from '../locales';

import { Fonts } from './fonts';
import { getPageTitle } from './getPageTitle';
import { PageShell } from './PageShell';
import type { PageContextServer } from './types';

export { render as onRenderHtml };

const BASE_URL = `https://subscription.standwithukraineapp.com`;
const metaTags = `
    <meta name="title" content="Stand with Ukraine subscription">
    <meta name="description" content="Support BigCommerce colleagues defending Ukraine! Our colleagues from Kyiv office are defending Ukraine on a frontline. Let's help them to stay safe!">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${BASE_URL}">
    <meta property="og:title" content="Stand with Ukraine subscription">
    <meta property="og:description" content="Support BigCommerce colleagues defending Ukraine! Our colleagues from Kyiv office are defending Ukraine on a frontline. Let's help them to stay safe!">
    <meta property="og:image" content="${BASE_URL}/assets/subscription/images/home.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${BASE_URL}">
    <meta property="twitter:title" content="Stand with Ukraine subscription">
    <meta property="twitter:description" content="Support BigCommerce colleagues defending Ukraine! Our colleagues from Kyiv office are defending Ukraine on a frontline. Let's help them to stay safe!">
    <meta property="twitter:image" content="${BASE_URL}/assets/subscription/images/home.png">
`;

async function render(pageContext: PageContextServer) {
  const { locale, Page, pageProps } = pageContext;

  const sheet = new ServerStyleSheet();
  const pageHtml = renderToString(
    sheet.collectStyles(
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
        <Fonts />
      </PageShell>,
    ),
  );

  const title = getPageTitle(pageContext);

  const documentHtml = escapeInject`
<!DOCTYPE html>
<html lang="${langs[locale] ?? 'en'}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="favicon.ico" />
    <link rel="apple-touch-icon" href="logo192.png" />
    ${dangerouslySkipEscape(sheet.getStyleTags())}
    ${dangerouslySkipEscape(`<style>${SwiperCss}${SwiperPaginationCss}</style>`)}
    ${dangerouslySkipEscape(`<style>${SwiperCss}${SwiperNavigationCss}</style>`)}
    <title>${title}</title>
    ${dangerouslySkipEscape(metaTags)}
  </head>
  
  <body>
    <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
  </body>
</html>
    `;

  return {
    documentHtml,
    // See https://vike.dev/stream#initial-data-after-stream-end
    pageContext: async () => {
      return {
        someAsyncProps: 42,
      };
    },
  };
}
