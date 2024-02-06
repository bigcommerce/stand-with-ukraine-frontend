import type { Config } from 'vike/types';

export default {
  passToClient: ['pageProps', 'documentProps', 'someAsyncProps'],
  clientRouting: true,
  hydrationCanBeAborted: true,
} satisfies Config;
