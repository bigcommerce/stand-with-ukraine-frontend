import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr';

import { getPageTitle } from './getPageTitle';
import { PageShell } from './PageShell';
import type { PageContextServer } from './types';

export { render };
export { passToClient };

const passToClient = ['pageProps', 'documentProps', 'someAsyncProps'];

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
    <link rel="icon" href="${import.meta.env.BASE_URL}favicon.ico" />
    <link rel="apple-touch-icon" href="${import.meta.env.BASE_URL}logo192.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <link rel="manifest" href="${import.meta.env.BASE_URL}manifest-landing.json">
    ${dangerouslySkipEscape(sheet.getStyleTags())}
  </head>
  
  <body>
    <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
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
