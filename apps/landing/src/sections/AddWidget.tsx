import styled from 'styled-components';

import { ButtonLink, Container, H2, H3, Item, Paragraph, Section } from '../components';
import ConfigureWidgetButton from '../components/ConfigureWidget/ConfigureWidgetButton';
import ConfigureWidgetFrame from '../components/ConfigureWidget/ConfigureWidgetFrame';
import { breakpoints } from '../helpers';

const StyledItem = styled.div`
  background: #000;
  padding: 3rem 1.5rem;

  ${ButtonLink} {
    background-image: linear-gradient(to bottom right, #ffd500 50%, #fff 0);
  }

  ${breakpoints.desktop} {
    padding: 5rem 4rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 3rem;

  ${breakpoints.desktop} {
    margin-bottom: 6rem;
  }
`;

const StyledDescription = styled(Paragraph)`
  min-height: 4.2rem;
`;

export const AddWidget = () => (
  <ConfigureWidgetFrame>
    <Section background="primary" id="add-widget">
      <H2 color="light" margin="0 0 3rem" textAlign="center">
        Add widget
      </H2>
      <StyledParagraph color="light" margin="0 0 6rem" size={2} textAlign="center" weight={300}>
        Please select your platform to quickly add widget to your site
      </StyledParagraph>
      <Container>
        <Item flexBasis="50%" flexGrow={1}>
          <StyledItem>
            <H3 color="light">BigCommerce</H3>
            <StyledDescription color="light" margin="0 0 3rem">
              You will be redirected to BigСommerce app store with all detailed information.
            </StyledDescription>
            <ButtonLink
              href="https://www.bigcommerce.com/apps/stand-with-ukraine/"
              rel="noreferrer"
              target="_blank"
              variant="light"
            >
              Select
            </ButtonLink>
          </StyledItem>
        </Item>
        <Item flexBasis="50%" flexGrow={1}>
          <StyledItem>
            <H3 color="light">All other platforms</H3>
            <StyledDescription color="light" margin="0 0 3rem">
              Design your custom widget right here in less than 2 minutes.
            </StyledDescription>
            <ConfigureWidgetButton />
          </StyledItem>
        </Item>
      </Container>
    </Section>
  </ConfigureWidgetFrame>
);
