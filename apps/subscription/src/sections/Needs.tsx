import styled from 'styled-components';

import MedicalSuppliesSrc from '../../public/assets/subscription/images/medical-supplies.jpg';
import RadioProtectionToolsSrc from '../../public/assets/subscription/images/radio-protection-tools.jpg';
import TransportSrc from '../../public/assets/subscription/images/transport.jpg';
import { Container, H2, Item, Paragraph, Section } from '../components';
import { breakpoints } from '../helpers';

const SubTitle = styled(Paragraph)`
  font-weight: 300;
`;

const Small = styled(Paragraph)`
  font-size: 1.6rem;
  font-weight: 300;
`;

const CardTitle = styled(Paragraph)`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StyledImage = styled.img`
  display: block;
  margin: 0 auto 3rem;

  ${breakpoints.tablet} {
    margin: 0 0 3rem;
  }
`;

export const Needs = () => (
  <Section>
    <H2 textAlign="center">What are the constant needs</H2>
    <SubTitle color="#313440" margin="0 0 6rem" size={2} textAlign="center">
      There’s a constant need in transport, protection and medical supplies. And
      <br />
      our focus is in making sure we can provide help fast.
    </SubTitle>
    <Container>
      <Item flexBasis="33%">
        <StyledImage alt="transport" className="lazyload" data-src={TransportSrc} />
        <CardTitle>Transport</CardTitle>
        <Small color="#6D6E7A">
          Transport is essential to survive and transport people and ammunition. Cars get damaged
          every day and require either maintenance or full replacement.
        </Small>
      </Item>
      <Item flexBasis="33%">
        <StyledImage alt="transport" className="lazyload" data-src={RadioProtectionToolsSrc} />
        <CardTitle>Radio protection tools</CardTitle>
        <Small color="#6D6E7A">
          Anti drone protection is #1 request today, in addition to body armor, night vision,
          Starlink kits and powerstations for stable connection, drones with thermal vision.
        </Small>
      </Item>
      <Item flexBasis="33%">
        <StyledImage alt="transport" className="lazyload" data-src={MedicalSuppliesSrc} />
        <CardTitle>Medical supplies</CardTitle>
        <Small color="#6D6E7A">
          Medical tourniquets, medical bandage, medical kits and medicines, body warmers and
          sleeping bags.
        </Small>
      </Item>
    </Container>
  </Section>
);
