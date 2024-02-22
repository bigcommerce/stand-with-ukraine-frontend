import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import SwiperNavigationCss from 'swiper/css/navigation?raw';
import SwiperPaginationCss from 'swiper/css/pagination?raw';
import SwiperCss from 'swiper/css?raw';
import { dangerouslySkipEscape, escapeInject } from 'vike/server';

import HomeImagePlaceholderSrc from '../../public/assets/images/home-placeholder.webp';
import HomeImageSrc from '../../public/assets/images/home.webp';
import { langs } from '../locales';

import { Fonts } from './fonts';
import { getPageTitle } from './getPageTitle';
import { PageShell } from './PageShell';
import type { PageContextServer } from './types';

export { render as onRenderHtml };

const BASE_URL = `https://subscription.standwithukraineapp.com`;
const metaTags = `
    <meta name="title" content="Stand with Ukraine">
    <meta name="description" content="Help Ukraine by adding an easy widget to your website that allows your visitors to easily donate via verified charities.">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${BASE_URL}">
    <meta property="og:title" content="Stand with Ukraine">
    <meta property="og:description" content="Help Ukraine by adding an easy widget to your website that allows your visitors to easily donate via verified charities.">
    <meta property="og:image" content="${BASE_URL}/assets/images/home.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${BASE_URL}">
    <meta property="twitter:title" content="Stand with Ukraine">
    <meta property="twitter:description" content="Help Ukraine by adding an easy widget to your website that allows your visitors to easily donate via verified charities.">
    <meta property="twitter:image" content="${BASE_URL}/assets/images/home.png">
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
    <link rel="preload" href="${HomeImagePlaceholderSrc}" as="image">
    <link rel="icon" href="favicon.ico" />
    <link rel="apple-touch-icon" href="logo192.png" />
    ${dangerouslySkipEscape(sheet.getStyleTags())}
    ${dangerouslySkipEscape(`<style>${SwiperCss}${SwiperPaginationCss}</style>`)}
    ${dangerouslySkipEscape(`<style>${SwiperCss}${SwiperNavigationCss}</style>`)}
    <link rel="preload" href="${HomeImageSrc}" as="image">
    <link rel="preload" href="https://standwithukraineapp.com/widget/style.css" as="style" />
    <title>${title}</title>
    ${dangerouslySkipEscape(metaTags)}
  </head>
  
  <body>
    <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
    <script>
      window.SWU_CONFIG = {
        "style": "blue",
        "placement": "bottom-right",
        "charity_selections": [
          "razom",
          "unicef",
          "mira-action"
        ],
        "modal_title": "Help the people of Ukraine!",
        "modal_body": "With each day, the war in Ukraine worsens at an alarming pace. Millions of civilians have lost their homes and many more are without basic necessities like food, water, and health care. Consider donating to one of the charities below and join us in showing support for Ukraine. All charities are trusted, non-profit organizations dedicated to Ukrainian relief efforts. It takes less than a minute."
      };
    </script>
    <script defer src="https://standwithukraineapp.com/widget/index.js"></script>
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
