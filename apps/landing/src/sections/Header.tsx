import React from 'react';
import styled from 'styled-components';

import { Item, Section } from '../components';

const StyledSection = styled(Section)`
  position: fixed;
  width: 100%;
  z-index: 10;

  ${Item} {
    padding-right: 2rem;

    + ${Item} {
      border-left: 1px solid #afb4be;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;

export const Header = () => (
  <StyledSection alignItems="center" display="flex" justifyContent="center" paddingY={2}>
    <Item display="flex" flexGrow={1} justifyContent="flex-end">
      <a href="#" target="_blank">
        <img alt="Bigcommerce logo" src={`${import.meta.env.BASE_URL}assets/images/bc-logo.svg`} />
      </a>
    </Item>
    <Item display="flex" flexGrow={1} justifyContent="flex-start">
      <a href="#" target="_blank">
        <img
          alt="Stand with ukraine logo"
          src={`${import.meta.env.BASE_URL}assets/images/swu-logo.svg`}
        />
      </a>
    </Item>
  </StyledSection>
);
