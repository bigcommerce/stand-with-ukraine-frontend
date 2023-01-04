import styled from 'styled-components';

import { ButtonLink, Container, H2, H3, Item, Paragraph, Section } from '../components';
import WidgetFrame from '../components/AddWidget/WidgetFrame';
import WidgetFrameButton from '../components/AddWidget/WidgetFrameButton';
import { breakpoints } from '../helpers';

const StyledItem = styled.div`
  background: #000;
  padding: 3rem 1.5rem;

  ${ButtonLink} {
    background-image: linear-gradient(to bottom right, #0d52ff 50%, #fff 0);
  }

  ${breakpoints.desktop} {
    padding: 5rem 4rem;
  }
`;

export const AddWidget = () => (
  <WidgetFrame>
    <Section background="primary" id="add-widget">
      <H2 color="light" margin="0 0 3rem" textAlign="center">
        Add widget
      </H2>
      <Paragraph color="light" margin="0 0 6rem" size={2} textAlign="center" weight={300}>
        Please select who you are. We have specific solutions
        <br />
        that fits your setup best
      </Paragraph>
      <Container>
        <Item flexGrow={1}>
          <StyledItem>
            <H3 color="light">BigCommerce Merchant</H3>
            <Paragraph color="light" margin="0 0 3rem">
              You will be redirected to Bigcommerce app store with all detailed information.
            </Paragraph>
            <ButtonLink
              href="https://login.bigcommerce.com/deep-links/marketplace/apps/38603"
              variant="light"
            >
              Install App
            </ButtonLink>
          </StyledItem>
        </Item>
        <Item flexGrow={1}>
          <StyledItem>
            <H3 color="light">Others</H3>
            <Paragraph color="light" margin="0 0 3rem">
              You will be able to design your custom widget in 2 minutes. Lets do it now!
            </Paragraph>
            <WidgetFrameButton />
          </StyledItem>
        </Item>
      </Container>
    </Section>
  </WidgetFrame>
);
