import { ButtonLink, H3, Paragraph } from 'landing/src/components';
import { breakpoints } from 'landing/src/helpers';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import { Container, H2, Item, Section } from '../components';

interface SubscriptionItem {
  title: string;
  url: string;
  description?: string;
}

const usdItems: SubscriptionItem[] = [
  { title: '25 USD', description: 'per month', url: '#' },
  { title: '50 USD', description: 'per month', url: '#' },
  { title: '75 USD', description: 'per month', url: '#' },
  { title: '100 USD', description: 'per month', url: '#' },
  { title: 'Custom', description: 'per month', url: '#' },
  { title: '1 time donation', url: '#' },
];

const eurItems: SubscriptionItem[] = [
  { title: '25 EUR', description: 'per month', url: '#' },
  { title: '50 EUR', description: 'per month', url: '#' },
  { title: '75 EUR', description: 'per month', url: '#' },
  { title: '100 EUR', description: 'per month', url: '#' },
  { title: 'Custom', description: 'per month', url: '#' },
  { title: '1 time donation', url: '#' },
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

const StyledItem = styled.div`
  background: #000;
  padding: 3rem 1.5rem;
  text-align: center;

  ${H3} {
    margin-bottom: 0;
  }

  ${Paragraph} {
    margin-bottom: 3rem;
  }

  ${ButtonLink} {
    background-image: linear-gradient(to bottom right, #ffd500 50%, #fff 0);
    max-width: 50rem;
    width: 100%;
  }

  ${breakpoints.desktop} {
    padding: 5rem 4rem;
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
  const [activeTab, setActiveTab] = useState<'usd' | 'eur'>('usd');

  const items = activeTab === 'usd' ? usdItems : eurItems;

  return (
    <Section background="blue" id="subscriptions">
      <H2 color="light" margin="0 0 3rem" textAlign="center">
        Subscription that saves lives
      </H2>
      <StyledParagraph color="light" margin="0 0 6rem" size={2} textAlign="center" weight={300}>
        Monthly support would provide the ability to help systematically
        <br />
        and quickly. However, we would appreciate one time donation as well
      </StyledParagraph>
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
      <Container flexWrap="wrap">
        {items.map(({ title, description, url }, i) => (
          <Item flexBasis="31%" key={i}>
            <StyledItem>
              <H3 color="light" margin={description ? undefined : '0 0 5rem'}>
                {title}
              </H3>
              {!!description && <Paragraph color="light">{description}</Paragraph>}
              <ButtonLink href={url} rel="noreferrer" target="_blank" variant="light">
                Support
              </ButtonLink>
            </StyledItem>
          </Item>
        ))}
      </Container>
      <Container>
        <Note color="light">
          * If you are subscribed, but want to cancel subscription{' '}
          <a href="#" rel="noreferrer" target="_blank">
            click here
          </a>
        </Note>
      </Container>
    </Section>
  );
};
