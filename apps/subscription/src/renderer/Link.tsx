export { Link };

import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

import { defaultLocale } from '../locales';

import { usePageContext } from './usePageContext';

function Link({
  children,
  href,
  locale,
  ...props
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement> & { locale?: string }>) {
  const pageContext = usePageContext();

  const nextLocale = locale ?? pageContext.locale;

  const nextHref = nextLocale === defaultLocale ? href : `/${locale}${href}`;

  return (
    <a href={nextHref} {...props}>
      {children}
    </a>
  );
}
