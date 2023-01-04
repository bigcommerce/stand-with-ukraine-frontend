import styled from 'styled-components';

import { Container, H2, Item, Section } from '../components';
import { breakpoints } from '../helpers';

const StyledPreview = styled.a`
  position: relative;
  display: block;
  margin-bottom: 1rem;
  padding-bottom: 50%;
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
    img {
      transform: scale(1.2);
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
      Brands already support
    </H2>
    <Container>
      <Item flexGrow={1}>
        <StyledPreview href="https://barnmansion.com/" target="_blank">
          <img
            alt="furniture.com screenshot"
            src={`${import.meta.env.BASE_URL}assets/images/barnmansion.png`}
          />
        </StyledPreview>
        <StyledLink href="https://barnmansion.com/" target="_blank">
          barnmansion.com
        </StyledLink>
      </Item>
      <Item flexGrow={1}>
        <StyledPreview href="https://mybeautymart.com/" target="_blank">
          <img
            alt="furniture.com screenshot"
            src={`${import.meta.env.BASE_URL}assets/images/mybeautymart.png`}
          />
        </StyledPreview>
        <StyledLink href="https://mybeautymart.com/" target="_blank">
          mybeautymart.com
        </StyledLink>
      </Item>
      <Item flexGrow={1}>
        <StyledPreview href="https://benchandchisel.com/" target="_blank">
          <img
            alt="furniture.com screenshot"
            src={`${import.meta.env.BASE_URL}assets/images/benchandchisel.png`}
          />
        </StyledPreview>
        <StyledLink href="https://benchandchisel.com/" target="_blank">
          benchandchisel.com
        </StyledLink>
      </Item>
    </Container>
  </Section>
);
