import { StrictMode } from 'react';

import { GlobalStyles, NormalizeStyles, SliderOverrides } from '../globalStyles';

import type { PageContext } from './types';
import { PageContextProvider } from './usePageContext';

export { PageShell };

function PageShell({
  pageContext,
  children,
}: {
  readonly pageContext: PageContext;
  readonly children: React.ReactNode;
}) {
  return (
    <StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <NormalizeStyles />
        <GlobalStyles />
        <SliderOverrides />
        {children}
      </PageContextProvider>
    </StrictMode>
  );
}
