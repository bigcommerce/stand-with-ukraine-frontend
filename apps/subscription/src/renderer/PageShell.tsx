import { StrictMode } from 'react';

import { GlobalStyles, NormalizeStyles } from '../globalStyles';

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
    <StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <NormalizeStyles />
        <GlobalStyles />
        {children}
      </PageContextProvider>
    </StrictMode>
  );
}
