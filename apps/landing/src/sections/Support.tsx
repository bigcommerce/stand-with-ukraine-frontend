import styled from 'styled-components';

import { ButtonLink, Container, H2, H3, Item, Paragraph, Section } from '../components';
import { breakpoints } from '../helpers';

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 3rem;

  ${breakpoints.desktop} {
    margin-bottom: 6rem;
  }
`;

const StyledItem = styled.div`
  background: #000;
  padding: 3rem 1.5rem;
  text-align: center;

  ${H3} {
    margin-bottom: 3rem;
  }

  ${ButtonLink} {
    background-image: linear-gradient(to bottom right, #ffd500 50%, #fff 0);
    max-width: 50rem;
    width: 100%;
  }

  ${breakpoints.desktop} {
    padding: 5rem 4rem;
  }
`;

export const Support = () => (
  <Section background="blue" id="support">
    <H2 color="light" margin="0 0 3rem" textAlign="center">
      Support our colleagues
    </H2>
    <StyledParagraph color="light" margin="0 0 6rem" size={2} textAlign="center" weight={300}>
      Select option to support our colleagues that defends Ukraine!
    </StyledParagraph>
    <Container>
      <Item flexBasis="50%" flexGrow={1}>
        <StyledItem>
          <H3 color="light">2000</H3>
          <ButtonLink
            href="https://pay.fondy.eu/merchants/9989e4238d2bca3292873fb855506edfa149a3c7/default/index.html?button=692f94ed19eb75fbff4622417b4c1c3bd3ba25d3"
            rel="noreferrer"
            target="_blank"
            variant="light"
          >
            Support
          </ButtonLink>
        </StyledItem>
      </Item>
      <Item flexBasis="50%" flexGrow={1}>
        <StyledItem>
          <H3 color="light">Custom</H3>
          <ButtonLink
            href="https://pay.fondy.eu/merchants/9989e4238d2bca3292873fb855506edfa149a3c7/default/index.html?button=3d8d9d715ed9d4e4e93ff5e18f3049b10d21082b"
            rel="noreferrer"
            target="_blank"
            variant="light"
          >
            Support
          </ButtonLink>
        </StyledItem>
      </Item>
    </Container>
  </Section>
);
