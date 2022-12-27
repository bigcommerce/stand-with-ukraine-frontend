import { useState } from 'react';
import styled, { css } from 'styled-components';

import { Container, H1, Item, Paragraph, Section } from '../components';
import { breakpoints } from '../helpers';

interface QuestionProps {
  question: string;
  answer: string;
}

const QUESTIONS = Array.from({ length: 3 }, () => ({
  question:
    'Lorem ipsum dolor sit amet, his ea ludus sadipscing voluptatibus. Lorem ipsum dolor sit amet.',
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar mattis nunc sed blandit libero volutpat. Eu lobortis elementum nibh tellus molestie nunc non.',
}));

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
    <H1 margin="0 0 6rem" textAlign="center">
      FAQ
    </H1>
    <Container>
      <Item flexGrow={1}>
        {QUESTIONS.map((question, key) => (
          <Question key={key} {...question} />
        ))}
      </Item>
    </Container>
  </Section>
);
