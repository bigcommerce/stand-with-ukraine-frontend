import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';

const Container = styled.div`
  display: flex;
  padding: 2rem 2rem 0 2rem;
  flex: 1 1 auto;
  flex-direction: column;
`;

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Container>
        <Header />
        {children}
      </Container>
      <Footer />
    </>
  );
}
