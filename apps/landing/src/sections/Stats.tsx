import styled from 'styled-components';

import { Container, H2, Section } from '../components';

const StyledList = styled.ul`
  color: #fff;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  strong {
    display: block;
    font-size: 9.2rem;
    font-family: 'Gotham Cond';
    line-height: 1;
    white-space: nowrap;
  }

  li {
    flex-grow: 1;
    flex-basis: 33%;
    list-style-type: none;
    line-height: 1.8;
    font-size: 1.7rem;
    text-transform: uppercase;
  }
`;

export const Stats = () => (
  <Section background="dark">
    <H2 color="light" margin="0 0 6rem" textAlign="center">
      Why it is important
    </H2>
    <Container>
      <StyledList>
        <li>
          <strong>{'>600 000'}</strong>
          houses were destroyed
        </li>
        <li>
          <strong>{'>90%'}</strong>
          of Ukrainians has electricity and water outages everyday
        </li>
        <li>
          <strong>{'>8 000 000'}</strong>
          people had to leave their home
        </li>
      </StyledList>
    </Container>
  </Section>
);