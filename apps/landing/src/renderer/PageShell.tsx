import { StrictMode } from 'react';

import { Fonts, GlobalStyles, NormalizeStyles, SliderOverrides } from '../globalStyles';

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
        <Fonts />
        <NormalizeStyles />
        <GlobalStyles />
        <SliderOverrides />
        {children}
      </PageContextProvider>
    </StrictMode>
  );
}
