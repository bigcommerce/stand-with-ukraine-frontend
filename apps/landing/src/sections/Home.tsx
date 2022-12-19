import React from 'react';
import styled from 'styled-components';

import { ButtonLink, Container, H1, Item, Paragraph, Section } from '../components';

const StyledSection = styled(Section)`
  padding-top: 17.5rem;
  padding-bottom: 10rem;
`;

const StyledImage = styled.img`
  max-height: 40rem;
  width: auto;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Home = () => (
  <StyledSection background="primary">
    <Container alignItems="center" justifyContent="center">
      <Item>
        <H1 color="light">Help Ukraine by adding widget to your website </H1>
        <Paragraph color="light" margin="0 0 3rem" size={2} weight={300}>
          Show your support and provide your site visitors verified and simple way to help Ukraine!
        </Paragraph>
        <ButtonsContainer>
          <ButtonLink href="#" variant="light">
            Add widget
          </ButtonLink>
          <ButtonLink href="#">How it works</ButtonLink>
        </ButtonsContainer>
      </Item>
      <Item>
        <StyledImage
          alt="stand with ukraine"
          src={`${import.meta.env.BASE_URL}assets/images/home.png`}
        />
      </Item>
    </Container>
  </StyledSection>
);
