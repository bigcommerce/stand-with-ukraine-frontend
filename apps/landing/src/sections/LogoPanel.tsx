import styled, { css } from 'styled-components';

import BCLogo from '../../public/assets/images/bc-logo.svg';
import SWULogo from '../../public/assets/images/swu-logo.svg';
import { Item, Section } from '../components';
import { breakpoints } from '../helpers';

interface Props {
  isFixed?: boolean;
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

  ${({ isFixed }) =>
    isFixed &&
    css`
      ${breakpoints.desktop} {
        position: fixed;
      }
    `}
`;

export const LogoPanel = ({ isFixed = false }: Props) => (
  <Wrapper isFixed={isFixed}>
    <StyledSection alignItems="center" display="flex" paddingY={2}>
      <Item display="flex" justifyContent="flex-end">
        <a href="https://www.bigcommerce.com/" rel="noreferrer" target="_blank">
          <img alt="Bigcommerce logo" src={BCLogo} />
        </a>
      </Item>
      <Item display="flex" flexGrow={1} justifyContent="flex-start">
        <a href="#">
          <img alt="Stand with ukraine logo" src={SWULogo} />
        </a>
      </Item>
    </StyledSection>
  </Wrapper>
);
