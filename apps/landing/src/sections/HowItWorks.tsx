import React from 'react';
import styled from 'styled-components';

import { ButtonLink, Container, H2, Item, Section } from '../components';

const StyledOl = styled.ol`
  margin: 0;
  padding: 0;
  counter-reset: count;

  li {
    position: relative;
    counter-increment: count;
    font-size: 1.7rem;
    min-height: 7.1rem;
    list-style-type: none;
    line-height: 2.7rem;
    margin-bottom: 4rem;
    padding-left: 6rem;
    text-transform: uppercase;

    &::before {
      content: counter(count);
      position: absolute;
      top: 0;
      left: 0;
      font-size: 9.2rem;
      font-family: 'Gotham Cond';
      font-weight: bold;
      line-height: 7.2rem;
      vertical-align: text-top;
    }
  }
`;

export const HowItWorks = () => (
  <Section background="gray" id="how-it-works">
    <H2 margin="0 0 6rem" textAlign="center">
      How it works
    </H2>
    <Container>
      <Item flexBasis="67%">Video</Item>
      <Item flexBasis="33%">
        <StyledOl>
          <li>Design custom widget in 2 mins</li>
          <li>Copy widget code to your website</li>
          <li>Customers can donate to charities in Ukraine through your website</li>
        </StyledOl>
        <ButtonLink href="#add-widget" variant="dark">
          Add widget
        </ButtonLink>
      </Item>
    </Container>
  </Section>
);
