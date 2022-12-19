import React from 'react';
import styled from 'styled-components';

import { Container, H1, Item, Section } from '../components';

const StyledPreview = styled.a`
  position: relative;
  display: block;
  margin-bottom: 3em;
  padding-bottom: 50%;
  overflow: hidden;

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
  <Section>
    <H1 margin="0 0 6rem" textAlign="center">
      Brands already added
    </H1>
    <Container>
      <Item flexGrow={1}>
        <StyledPreview href="#" target="_blank">
          <img
            alt="furniture.com screenshot"
            src={`${import.meta.env.BASE_URL}assets/images/case-photo.png`}
          />
        </StyledPreview>
        <StyledLink href="#" target="_blank">
          furniture.com
        </StyledLink>
      </Item>
      <Item flexGrow={1}>
        <StyledPreview href="#" target="_blank">
          <img
            alt="furniture.com screenshot"
            src={`${import.meta.env.BASE_URL}assets/images/case-photo.png`}
          />
        </StyledPreview>
        <StyledLink href="#" target="_blank">
          furniture.com
        </StyledLink>
      </Item>
      <Item flexGrow={1}>
        <StyledPreview href="#" target="_blank">
          <img
            alt="furniture.com screenshot"
            src={`${import.meta.env.BASE_URL}assets/images/case-photo.png`}
          />
        </StyledPreview>
        <StyledLink href="#" target="_blank">
          furniture.com
        </StyledLink>
      </Item>
    </Container>
  </Section>
);
