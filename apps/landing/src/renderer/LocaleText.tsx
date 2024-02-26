export { LocaleText };

import { PropsWithChildren } from 'react';

import { translate } from '../locales';

import { usePageContext } from './usePageContext';

function LocaleText({ children }: PropsWithChildren) {
  const { locale } = usePageContext();

  if (typeof children === 'string' && locale) {
    return <>{translate(children, locale)}</>;
  }

  return <>{children}</>;
}
