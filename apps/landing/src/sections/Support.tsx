import styled from 'styled-components';

import { ButtonLink, Container, H2, H3, Item, Paragraph, Section } from '../components';
import { breakpoints } from '../helpers';

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 3rem;
  line-height: 1.6;

  ${breakpoints.desktop} {
    margin-bottom: 6rem;
  }
`;

const StyledItem = styled.div`
  background: #000;
  padding: 3rem 1.5rem;
  text-align: center;

  ${H3} {
    margin-bottom: 0;
  }

  ${Paragraph} {
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
      Select an option to support our BigCommerce colleagues defending Ukraine on a regular basis!
      <br />
      You can cancel your support any time by sending a message via Contact us form below.
    </StyledParagraph>
    <Container flexWrap="wrap">
      <Item flexBasis="31%">
        <StyledItem>
          <H3 color="light">2000 UAH</H3>
          <Paragraph color="light">per month</Paragraph>
          <ButtonLink
            href="https://pay.fondy.eu/s/rcGjT0nI"
            rel="noreferrer"
            target="_blank"
            variant="light"
          >
            Support
          </ButtonLink>
        </StyledItem>
      </Item>
      <Item flexBasis="31%">
        <StyledItem>
          <H3 color="light">3000 UAH</H3>
          <Paragraph color="light">per month</Paragraph>
          <ButtonLink
            href="https://pay.fondy.eu/s/F2beCPBCuF"
            rel="noreferrer"
            target="_blank"
            variant="light"
          >
            Support
          </ButtonLink>
        </StyledItem>
      </Item>
      <Item flexBasis="31%">
        <StyledItem>
          <H3 color="light">4000 UAH</H3>
          <Paragraph color="light">per month</Paragraph>
          <ButtonLink
            href="https://pay.fondy.eu/s/wDFTuOZAUcnh"
            rel="noreferrer"
            target="_blank"
            variant="light"
          >
            Support
          </ButtonLink>
        </StyledItem>
      </Item>
      <Item flexBasis="31%">
        <StyledItem>
          <H3 color="light">5000 UAH</H3>
          <Paragraph color="light">per month</Paragraph>
          <ButtonLink
            href="https://pay.fondy.eu/s/BQUQW8tB6ecI9t8v"
            rel="noreferrer"
            target="_blank"
            variant="light"
          >
            Support
          </ButtonLink>
        </StyledItem>
      </Item>
      <Item flexBasis="31%">
        <StyledItem>
          <H3 color="light">Custom</H3>
          <Paragraph color="light">per month</Paragraph>
          <ButtonLink
            href="https://pay.fondy.eu/s/4lEyTDf3yFEC"
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
