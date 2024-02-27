import { useState } from 'react';
import styled, { css } from 'styled-components';

import {
  ButtonLink,
  Container,
  H2,
  H3,
  Item,
  Paragraph,
  Section,
  StyledContainer,
} from '../components';
import { breakpoints } from '../helpers';
import { locales } from '../locales';
import { LocaleText } from '../renderer/LocaleText';
import { usePageContext } from '../renderer/usePageContext';

export interface SubscriptionItem {
  title: string;
  description?: string;
  url: string;
}

const usdItems: SubscriptionItem[] = [
  { title: '25 USD', description: 'per month', url: 'https://pay.fondy.eu/s/fMnXeFNi' },
  { title: '50 USD', description: 'per month', url: 'https://pay.fondy.eu/s/JaJY6jTzVRu' },
  { title: '75 USD', description: 'per month', url: 'https://pay.fondy.eu/s/QEW5xP' },
  { title: '100 USD', description: 'per month', url: 'https://pay.fondy.eu/s/Fn9TS9Bwf2qLD' },
  { title: 'Custom', description: 'per month', url: 'https://pay.fondy.eu/s/QWY431oLDuJ' },
  { title: '1 time donation', url: 'https://pay.fondy.eu/s/0jCTyK' },
];

const eurItems: SubscriptionItem[] = [
  { title: '25 EUR', description: 'per month', url: 'https://pay.fondy.eu/s/BxiJkCmB9cceDpX' },
  { title: '50 EUR', description: 'per month', url: 'https://pay.fondy.eu/s/k4o6lBt9PpeT6na' },
  { title: '75 EUR', description: 'per month', url: 'https://pay.fondy.eu/s/v8BGL6vhdwB' },
  { title: '100 EUR', description: 'per month', url: 'https://pay.fondy.eu/s/9fKHsjAM' },
  { title: 'Custom', description: 'per month', url: 'https://pay.fondy.eu/s/9vsr' },
  { title: '1 time donation', url: 'https://pay.fondy.eu/s/EUeK2h9ELybe' },
];

const uahItems: SubscriptionItem[] = [
  { title: '2000 грн', description: '/ місяць', url: 'https://pay.fondy.eu/s/rcGjT0nI' },
  { title: '3000 грн', description: '/ місяць', url: 'https://pay.fondy.eu/s/F2beCPBCuF' },
  { title: '4000 грн', description: '/ місяць', url: 'https://pay.fondy.eu/s/wDFTuOZAUcnh' },
  { title: '5000 грн', description: '/ місяць', url: 'https://pay.fondy.eu/s/BQUQW8tB6ecI9t8v' },
  { title: 'Інша сума', description: '/ місяць', url: 'https://pay.fondy.eu/s/9vsr' },
  { title: 'Разовий донат', url: 'https://pay.fondy.eu/s/XWujPPC' },
];

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 3rem;
  line-height: 1.6;

  ${breakpoints.desktop} {
    margin-bottom: 6rem;
  }
`;

const Tabs = styled.div`
  display: flex;
  flex-grow: 1;
  margin-bottom: 6rem;
`;

const TabButton = styled.button<{ isActive?: boolean }>`
  color: #fff;
  cursor: pointer;
  background: none;
  border: 0;
  border-bottom: 1px solid #fff;
  display: block;
  flex-grow: 1;
  font-size: 3.4rem;
  overflow: hidden;
  padding: 0 1rem 1rem;
  position: relative;
  text-align: center;
  text-transform: uppercase;

  ${({ isActive }) =>
    isActive &&
    css`
      cursor: default;
    `}

  &::after {
    content: '';
    background-color: #fff;
    height: 1rem;
    left: 0;
    position: absolute;
    top: 100%;
    transition: transform 0.3s ease;
    width: 100%;

    ${({ isActive }) =>
      isActive &&
      css`
        transform: translateY(-0.5rem);
      `}
  }

  &:hover::after {
    transform: ${({ isActive }) => (isActive ? 'translateY(-0.5rem)' : 'translateY(-1rem)')};
  }
`;

const StyledItem = styled.div<{ hasDescription: boolean }>`
  background: #000;
  padding: 3rem 1.5rem;
  text-align: center;

  ${Paragraph} {
    margin-bottom: 3rem;
  }

  ${ButtonLink} {
    max-width: 50rem;
    width: 100%;
  }

  ${breakpoints.desktop} {
    padding: 5rem 4rem;
  }

  label {
    color: #fff;
  }

  ${StyledContainer} {
    margin-bottom: 2rem;
    margin-top: -1rem;
  }

  input {
    color: #fff;
    background-color: transparent;
    border-bottom-color: #fff;
  }
`;

const Note = styled(Paragraph)`
  margin-top: 6rem;
  text-transform: uppercase;

  a {
    color: #fff;
  }
`;

export const Subscriptions = () => {
  const { locale } = usePageContext();
  const [activeTab, setActiveTab] = useState<'usd' | 'eur'>('usd');

  const items = locale === locales.en ? (activeTab === 'usd' ? usdItems : eurItems) : uahItems;

  return (
    <Section background="blue" id="subscriptions">
      <H2 color="light" margin="0 0 3rem" textAlign="center">
        <LocaleText>Subscription that saves lives</LocaleText>
      </H2>
      <StyledParagraph color="light" margin="0 0 6rem" size={2} textAlign="center" weight={300}>
        <LocaleText>
          Monthly support would provide the ability to help systematically and quickly. However, we
          would appreciate one time donation as well
        </LocaleText>
      </StyledParagraph>
      {locale === locales.en && (
        <Container>
          <Tabs>
            <TabButton isActive={activeTab === 'usd'} onClick={() => setActiveTab('usd')}>
              usd
            </TabButton>
            <TabButton isActive={activeTab === 'eur'} onClick={() => setActiveTab('eur')}>
              eur
            </TabButton>
          </Tabs>
        </Container>
      )}
      <Container flexWrap="wrap">
        {items.map(({ title, description, url }, key) => (
          <Item flexBasis="31%" key={key}>
            <StyledItem hasDescription={!!description} key={key}>
              <H3 color="light" margin={description ? '0' : '0 0 5rem'}>
                <LocaleText>{title}</LocaleText>
              </H3>
              {!!description && (
                <Paragraph color="light">
                  <LocaleText>{description}</LocaleText>
                </Paragraph>
              )}
              <ButtonLink href={url} rel="noreferrer" target="_blank" variant="light">
                <LocaleText>Support</LocaleText>
              </ButtonLink>
            </StyledItem>
          </Item>
        ))}
      </Container>
      <Container>
        <Note color="light">
          <LocaleText>* If you are subscribed, but want to cancel subscription</LocaleText>{' '}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScF3VX6Q1GctTWHBzCdKQllsTISdutgT-8KDU3OKySgRbHzBA/viewform"
            rel="noreferrer"
            target="_blank"
          >
            <LocaleText>click here</LocaleText>
          </a>
        </Note>
      </Container>
    </Section>
  );
};
