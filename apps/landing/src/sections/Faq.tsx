import { useState } from 'react';
import styled, { css } from 'styled-components';

import { Container, H1, Item, Paragraph, Section } from '../components';
import { breakpoints } from '../helpers';

interface QuestionProps {
  readonly question: string;
  readonly answer: string;
}

const QUESTIONS = [
  {
    question: "I'm not seeing a widget / changes to the widget are not applied.",
    answer:
      "Hold shift+R to refresh the storefront page, new script often isn't loaded on a background even after a minute. If it didn’t help, please try to remove a widget and re-apply again. If it still does not work notify us via ”Get support”.",
  },
  {
    question:
      'Can I add a charity organization myself instead of choosing from the predefined list?',
    answer:
      'We have included the list of vetted charity organizations, confirmed with our team in Ukraine to make sure that the donation would get to the people in need. The list includes organizations that are providing only humanitarian help.',
  },
  {
    question: 'Can I select page(s) to display the widget?',
    answer:
      'Selecting pages is not supported at this point, however you could select the location. By default widget is going to show up on the following pages: Home, Add Wishlist, Blog List, Blog Post, Brand Pages, All Brands Page, Cart, Category, Product Compare, Contact Form, Product, Search, All Wishlist, Wish List, 404 page.',
  },
];

const StyledQuestion = styled.div`
  border-top: 1px solid #d1d7e0;

  &:last-of-type {
    border-bottom: 1px solid #d1d7e0;
  }
`;

const StyledAction = styled.button<{ isActive: boolean }>`
  border: 0;
  color: #121118;
  cursor: pointer;
  display: block;
  background-color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  padding: 2rem 4rem 2rem 2rem;
  position: relative;
  text-align: left;
  transition: background-color 0.3s ease, color 0.3s ease;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 1rem;
    border-top: 0.5rem solid currentColor;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    top: 4rem;
    right: 2rem;
    transform-origin: 50% 0.25rem;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #edeff3;

      &::after {
        transform: rotate(180deg);
      }
    `}

  &:hover {
    background-color: #edeff3;
  }

  ${breakpoints.desktop} {
    font-size: 2rem;
    padding: 3rem 5rem 3rem 3rem;

    &::after {
      right: 3rem;
    }
  }
`;

const StyledAnswer = styled.div`
  padding: 2rem;

  ${breakpoints.desktop} {
    padding: 3rem;
  }
`;

const StyledH1 = styled(H1)`
  margin-bottom: 3rem;

  ${breakpoints.desktop} {
    margin-bottom: 6rem;
  }
`;

const Question = ({ question, answer }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledQuestion>
      <StyledAction isActive={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {question}
      </StyledAction>
      {isOpen && (
        <StyledAnswer>
          <Paragraph margin="0" weight={300}>
            {answer}
          </Paragraph>
        </StyledAnswer>
      )}
    </StyledQuestion>
  );
};

export const Faq = () => (
  <Section id="faq">
    <StyledH1 margin="0 0 6rem" textAlign="center">
      FAQ
    </StyledH1>
    <Container>
      <Item flexGrow={1}>
        {QUESTIONS.map((question, key) => (
          <Question key={key} {...question} />
        ))}
      </Item>
    </Container>
  </Section>
);
