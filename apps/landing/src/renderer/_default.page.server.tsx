import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr';

import HomeImagePlaceholderSrc from '../../public/assets/images/home-placeholder.webp';
import HomeImageSrc from '../../public/assets/images/home.webp';

import { getPageTitle } from './getPageTitle';
import { PageShell } from './PageShell';
import type { PageContextServer } from './types';

export { render };
export { passToClient };

const passToClient = ['pageProps', 'documentProps', 'someAsyncProps'];
const fontsToPreload = [
  'Gotham-Light_Web.woff2',
  'Gotham-Book_Web.woff2',
  'Gotham-Bold_Web.woff2',
  'Gotham-Medium_Web.woff2',
  'GothamCond-Bold_Web.woff2',
];

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;

  const sheet = new ServerStyleSheet();
  const pageHtml = renderToString(
    sheet.collectStyles(
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>,
    ),
  );

  const title = getPageTitle(pageContext);

  const documentHtml = escapeInject`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${dangerouslySkipEscape(
      fontsToPreload
        .map(
          (font) =>
            `<link rel="preload" href="${
              import.meta.env.BASE_URL
            }fonts/gotham/woff2/${font}" as="font" type="font/woff2" crossorigin>`,
        )
        .join('\n'),
    )}
    <link rel="preload" href="${HomeImagePlaceholderSrc}" as="image">
    <link rel="icon" href="${import.meta.env.BASE_URL}favicon.ico" />
    <link rel="apple-touch-icon" href="${import.meta.env.BASE_URL}logo192.png" />
    <title>${title}</title>
    <link rel="manifest" href="${import.meta.env.BASE_URL}manifest-landing.json">
    <meta name="description" content="Help Ukraine by adding an easy widget to your website that allows your visitors to easily donate via verified charities.">
    ${dangerouslySkipEscape(sheet.getStyleTags())}
    <link rel="preload" href="${HomeImageSrc}" as="image">
  </head>
  
  <body>
    <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
    <script>
      window.SWU_CONFIG = {
        "style": "blue",
        "placement": "bottom-right",
        "charity_selections": [
          "razom",
          "new-ukraine",
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
    // See https://vite-plugin-ssr.com/stream#initial-data-after-stream-end
    pageContext: async () => {
      return {
        someAsyncProps: 42,
      };
    },
  };
}
