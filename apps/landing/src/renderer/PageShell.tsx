import React from 'react';

import { Fonts, GlobalStyles, NormalizeStyles } from '../globalStyles';

import type { PageContext } from './types';
import { PageContextProvider } from './usePageContext';

export { PageShell };

function PageShell({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Fonts />
        <NormalizeStyles />
        <GlobalStyles />
        {children}
      </PageContextProvider>
    </React.StrictMode>
  );
}
