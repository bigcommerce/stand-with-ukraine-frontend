import { createContext, ReactNode, useContext } from 'react';

import type { PageContext } from './types';

export { PageContextProvider };
export { usePageContext };

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const Context = createContext<PageContext>(undefined as any);

function PageContextProvider({
  pageContext,
  children,
}: {
  readonly pageContext: PageContext;
  readonly children: ReactNode;
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

function usePageContext() {
  const pageContext = useContext(Context);

  return pageContext;
}
