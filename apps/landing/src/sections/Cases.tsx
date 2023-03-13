import styled from 'styled-components';

import BarnmansionScreenshot from '../../public/assets/images/barnmansion.webp';
import BenchandchiselScreenshot from '../../public/assets/images/benchandchisel.webp';
import MybeautymartScreenshot from '../../public/assets/images/mybeautymart.webp';
import { Container, H2, Item, Section } from '../components';
import { breakpoints } from '../helpers';

const StyledPreview = styled.a`
  position: relative;
  display: block;
  margin-bottom: 1rem;
  padding-bottom: 56.25%;
  overflow: hidden;
  box-shadow: 0 1.5rem 1.8rem rgb(27 25 34 / 13%);

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    object-fit: cover;
    width: 100%;
    transition: transform 0.3s ease;
  }

  &:hover {
    + a {
      color: #0d52ff;
    }
  }

  ${breakpoints.desktop} {
    margin-bottom: 3rem;
  }
`;

const StyledLink = styled.a`
  color: #121118;
  display: inline-block;
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #0d52ff;
  }
`;

export const Cases = () => (
  <Section id="cases">
    <H2 margin="0 0 6rem" textAlign="center">
      Brands showing their support
    </H2>
    <Container>
      <Item flexGrow={1}>
        <StyledPreview href="https://barnmansion.com/" target="_blank">
          <img
            alt="barnmansion.com screenshot"
            className="lazyload"
            data-src={BarnmansionScreenshot}
          />
        </StyledPreview>
        <StyledLink href="https://barnmansion.com/" target="_blank">
          barnmansion.com
        </StyledLink>
      </Item>
      <Item flexGrow={1}>
        <StyledPreview href="https://mybeautymart.com/" target="_blank">
          <img
            alt="mybeautymart.com screenshot"
            className="lazyload"
            data-src={MybeautymartScreenshot}
          />
        </StyledPreview>
        <StyledLink href="https://mybeautymart.com/" target="_blank">
          mybeautymart.com
        </StyledLink>
      </Item>
      <Item flexGrow={1}>
        <StyledPreview href="https://benchandchisel.com/" target="_blank">
          <img
            alt="benchandchisel.com screenshot"
            className="lazyload"
            data-src={BenchandchiselScreenshot}
          />
        </StyledPreview>
        <StyledLink href="https://benchandchisel.com/" target="_blank">
          benchandchisel.com
        </StyledLink>
      </Item>
    </Container>
  </Section>
);
