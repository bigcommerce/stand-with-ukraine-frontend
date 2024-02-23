export type { PageContextServer };
export type { PageContextClient };
export type { PageContext };
export type { PageProps };
export type { PrerenderContext };

import type {
  OnPrerenderStartSync as VKOnPrerenderStartSync,
  PageContextClient as VKPageContextClient,
  PageContextServer as VKPageContextServer,
} from 'vike/types';

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = Record<string, unknown>;

export interface PageContextCustom {
  Page: Page;
  locale: string;
  pageProps?: PageProps;
  exports: {
    documentProps?: {
      title: string;
    };
  };
  documentProps?: {
    title: string;
  };
}

type PageContextServer = VKPageContextServer<Page> & PageContextCustom;
type PageContextClient = VKPageContextClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;

type PrerenderContext = Omit<
  ReturnType<VKOnPrerenderStartSync>['prerenderContext'],
  'pageContexts'
> & { pageContexts: PageContext[] };
