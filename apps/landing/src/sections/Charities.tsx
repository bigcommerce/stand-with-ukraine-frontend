import styled from 'styled-components';

import { Container, H1, H5, Item, Paragraph, Section } from '../components';

const StyledPreview = styled.div`
  align-items: center;
  background-color: #edeff3;
  display: flex;
  height: 17.5rem;
  justify-content: center;

  img {
    height: 6.4rem;
    object-fit: contain;
    width: 6.4rem;
  }
`;

const StyledContent = styled.div`
  background-color: #121118;
  padding: 5rem 4rem;

  ${Paragraph} {
    line-height: 2.5rem;
  }
`;

const StyledLink = styled.a`
  align-items: center;
  color: #fff;
  display: inline-flex;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s ease;

  img {
    height: 1.2rem;
    margin-left: 1.2rem;
    width: 2rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #03eada;

    img {
      transform: translateX(50%);
    }
  }
`;

export const Charities = () => (
  <Section id="charities">
    <H1 margin="0 0 6rem" textAlign="center">
      Charities
    </H1>
    <Container>
      <Item flexBasis="33%">
        <StyledPreview>
          <img alt="razom logo" src={`${import.meta.env.BASE_URL}assets/images/razom.png`} />
        </StyledPreview>
        <StyledContent>
          <H5 color="light">Razom</H5>
          <Paragraph color="light" margin="0 0 3rem" weight={300}>
            Nova Ukraine is a registered nonprofit organization dedicated to providing humanitarian
            aid to Ukraine and raising awareness about Ukraine in the United States as well as in
            the rest of the world.
          </Paragraph>
          <StyledLink href="#">
            Learn more
            <img alt="arrow icon" src={`${import.meta.env.BASE_URL}assets/images/arrow.svg`} />
          </StyledLink>
        </StyledContent>
      </Item>
      <Item flexBasis="33%">
        <StyledPreview>
          <img alt="razom logo" src={`${import.meta.env.BASE_URL}assets/images/razom.png`} />
        </StyledPreview>
        <StyledContent>
          <H5 color="light">Razom</H5>
          <Paragraph color="light" margin="0 0 3rem" weight={300}>
            Nova Ukraine is a registered nonprofit organization dedicated to providing humanitarian
            aid to Ukraine and raising awareness about Ukraine in the United States as well as in
            the rest of the world.
          </Paragraph>
          <StyledLink href="#">
            Learn more
            <img alt="arrow icon" src={`${import.meta.env.BASE_URL}assets/images/arrow.svg`} />
          </StyledLink>
        </StyledContent>
      </Item>
      <Item flexBasis="33%">
        <StyledPreview>
          <img alt="razom logo" src={`${import.meta.env.BASE_URL}assets/images/razom.png`} />
        </StyledPreview>
        <StyledContent>
          <H5 color="light">Razom</H5>
          <Paragraph color="light" margin="0 0 3rem" weight={300}>
            Nova Ukraine is a registered nonprofit organization dedicated to providing humanitarian
            aid to Ukraine and raising awareness about Ukraine in the United States as well as in
            the rest of the world.
          </Paragraph>
          <StyledLink href="#">
            Learn more
            <img alt="arrow icon" src={`${import.meta.env.BASE_URL}assets/images/arrow.svg`} />
          </StyledLink>
        </StyledContent>
      </Item>
    </Container>
  </Section>
);
