import { ProgressBar } from '@bigcommerce/big-design';
import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../state/hooks';
import { selectLoadingStatus } from '../state/mainSlice';

import Footer from './Footer';
import Header from './Header';

const Container = styled.div`
  display: flex;
  padding: 2rem 2rem 0 2rem;
  flex: 1 1 auto;
  flex-direction: column;
`;

const LoadingBar = styled.div`
  align-self: flex-start;
  height: 4px;
  width: 100%;
`;

export default function Layout({ children }: { children: any }) {
  const loadingStatus = useAppSelector(selectLoadingStatus);

  return (
    <>
      <LoadingBar>{loadingStatus === 'loading' ? <ProgressBar /> : null}</LoadingBar>
      <Container>
        <Header />
        {children}
      </Container>
      <Footer />
    </>
  );
}
