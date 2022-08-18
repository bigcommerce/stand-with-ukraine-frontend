import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const HeaderGroup = styled.div`
  height: 40px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`;

const HeaderText = styled.h1`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;

  color: #313440;

  margin-left: 0.67em;
`;

export default function Header() {
  return (
    <HeaderGroup>
      <Logo />
      <HeaderText>Stand with Ukraine</HeaderText>
    </HeaderGroup>
  );
}
