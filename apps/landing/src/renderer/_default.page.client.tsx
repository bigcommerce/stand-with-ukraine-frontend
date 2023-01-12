export { render };
export { onHydrationEnd };
export { onPageTransitionStart };
export { onPageTransitionEnd };
export const clientRouting = true;
export const hydrationCanBeAborted = true;

import { createRoot, hydrateRoot, Root } from 'react-dom/client';
import 'lazysizes';

import { getPageTitle } from './getPageTitle';
import { PageShell } from './PageShell';
import type { PageContextClient } from './types';

let root: Root;

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const container = document.getElementById('page-view')!;

  if (pageContext.isHydration) {
    root = hydrateRoot(container, page);
  } else {
    if (!root) {
      root = createRoot(container);
    }

    root.render(page);
  }

  document.title = getPageTitle(pageContext);
}

function onHydrationEnd() {
  // eslint-disable-next-line no-console
  console.log('Hydration finished; page is now interactive.');
}

function onPageTransitionStart() {
  // eslint-disable-next-line no-console
  console.log('Page transition start');
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.querySelector('body')!.classList.add('page-is-transitioning');
}

function onPageTransitionEnd() {
  // eslint-disable-next-line no-console
  console.log('Page transition end');
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.querySelector('body')!.classList.remove('page-is-transitioning');
}
