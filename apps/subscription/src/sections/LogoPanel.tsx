import styled, { css } from 'styled-components';

import BCLogo from '../../public/assets/images/bc-logo.svg';
import SWULogoUA from '../../public/assets/subscription/images/swu-logo-ua.svg';
import SWULogo from '../../public/assets/subscription/images/swu-logo.svg';
import { Item, Section } from '../components';
import { breakpoints } from '../helpers';
import { locales } from '../locales';
import { usePageContext } from '../renderer/usePageContext';

interface Props {
  readonly isFixed?: boolean;
}

const StyledSection = styled(Section)`
  width: 100%;
  justify-content: flex-start;
  gap: 2rem;

  img {
    height: 3.2rem;
    width: 4.3rem;
    object-fit: cover;
    object-position: left top;
  }

  ${Item} {
    flex-grow: 0;

    &:first-child img {
      width: auto;
    }

    + ${Item} {
      border-left: 1px solid #afb4be;
      padding-left: 2rem;
    }
  }

  ${breakpoints.desktop} {
    gap: 0;
    justify-content: center;

    img {
      width: auto;
    }

    ${Item} {
      flex-grow: 1;
      padding-right: 2rem;

      + ${Item} {
        padding-right: 2rem;
      }
    }
  }
`;

const Wrapper = styled.div<{ isFixed: boolean }>`
  display: flex;
  z-index: 10;
  flex-direction: column;
  width: 100%;
  position: relative;

  ${({ isFixed }) =>
    isFixed &&
    css`
      ${breakpoints.desktop} {
        position: fixed;
      }
    `}
`;

const LangNav = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.5rem;
`;

const LangLink = styled.a<{ isActive: boolean }>`
  display: block;
  padding: 0.5rem;
  color: #121118;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : '300')};
  text-decoration: none;

  ${({ isActive }) =>
    isActive &&
    css`
      cursor: default;
      pointer-events: none;
    `}
`;

const links = [
  { href: `/`, locale: locales.en, content: 'EN' },
  { href: `/${locales.ua}`, locale: locales.ua, content: 'UA' },
];

export const LogoPanel = ({ isFixed = false }: Props) => {
  const { locale: currentLocale } = usePageContext();

  const swuLogo = currentLocale === locales.en ? SWULogo : SWULogoUA;

  return (
    <Wrapper isFixed={isFixed}>
      <StyledSection alignItems="center" display="flex" paddingY={2}>
        <Item display="flex" justifyContent="flex-end">
          <a href="https://www.bigcommerce.com/" rel="noreferrer" target="_blank">
            <img alt="Bigcommerce logo" src={BCLogo} />
          </a>
        </Item>
        <Item display="flex" flexGrow={1} justifyContent="flex-start">
          <a href="#">
            <img alt="Stand with ukraine logo" src={swuLogo} />
          </a>
        </Item>
      </StyledSection>
      <LangNav>
        {links.map(({ href, locale, content }) => (
          <LangLink href={href} isActive={locale === currentLocale} key={content}>
            {content}
          </LangLink>
        ))}
      </LangNav>
    </Wrapper>
  );
};
