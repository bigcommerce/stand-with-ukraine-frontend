import styled from 'styled-components';

import { Container, H2, Section } from '../components';
import { breakpoints } from '../helpers';

const StyledList = styled.ul`
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 100%;

  strong {
    display: block;
    font-size: 7.2rem;
    font-family: 'Gotham Cond';
    line-height: 1;
    white-space: nowrap;
  }

  li {
    flex-grow: 1;
    flex-basis: 33%;
    list-style-type: none;
    line-height: 1.8;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  ${breakpoints.desktop} {
    flex-direction: row;

    strong {
      font-size: 9.2rem;
    }

    li {
      font-size: 1.7rem;
    }
  }
`;

export const Stats = () => (
  <Section background="dark" id="stats">
    <H2 color="light" margin="0 0 6rem" textAlign="center">
      #TEAMONAMISSION
    </H2>
    <Container>
      <StyledList>
        <li>
          <strong>57</strong>
          subscribers
        </li>
        <li>
          <strong>7</strong>
          countries
        </li>
        <li>
          <strong>{'>$5000'}</strong>
          monthly support
        </li>
      </StyledList>
    </Container>
  </Section>
);
