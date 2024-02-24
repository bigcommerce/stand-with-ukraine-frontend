import styled from 'styled-components';

import { usePageContext } from '../renderer/usePageContext';

const Wrapper = styled.div`
  display: flex;
  z-index: 10;
  flex-direction: column;
  padding: 1rem 0 2rem 0;
  width: 100%;
  position: relative;
  text-align: center;
  a {
    color: #0f0f0f;
    text-decoration: none;
  }
`;

interface DocLinks {
  [key: string]: {
    href: string;
    content: string;
  };
}

const docLinks: DocLinks = {
  'en-US': {
    href: '/assets/docs/Public offer to make a voluntary charitable donation.pdf',
    content: 'Public offer to make a voluntary charitable donation',
  },
  'uk-UA': {
    href: '/assets/docs/Публічна оферта про надання добровільної благодійної пожертви.pdf',
    content: 'Публічна оферта про надання добровільної благодійної пожертви',
  },
};

export const DocsPanel = () => {
  const { locale } = usePageContext();
  const link = docLinks[locale] || docLinks.en;

  return (
    <Wrapper>
      <a href={link.href} rel="noreferrer" target="_blank" title={link.content}>
        {link.content}
      </a>
    </Wrapper>
  );
};
