import { ButtonLink, H3, Paragraph } from 'landing/src/components';
import { breakpoints } from 'landing/src/helpers';
import { ChangeEvent, MouseEventHandler, useState } from 'react';
import styled, { css } from 'styled-components';

import { Container, H2, Input, Item, Section, StyledContainer } from '../components';
import { locales, translate } from '../locales';
import { LocaleText } from '../renderer/LocaleText';
import { usePageContext } from '../renderer/usePageContext';

import { SubscriptionModal } from './SubscriptionModal';

type Currency = 'usd' | 'eur' | 'uah';

interface SubscriptionItem {
  type: 'common' | 'oneTime' | 'custom';
  amount: SubscriptionItem['type'] extends 'common' ? number : null | number;
  currency: Currency;
  showDialog: (url: string) => void;
}

const amountItems: Record<Currency, number[]> = {
  usd: [25, 50, 75, 100],
  eur: [25, 50, 75, 100],
  uah: [2000, 3000, 4000, 5000],
};

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
    background-image: linear-gradient(to bottom right, #ffd500 50%, #fff 0);
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

const StyledButtonLink = styled(ButtonLink)<{ isDisabled: boolean }>`
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
`;

const SubscriptionItem = ({ type, amount, currency, showDialog }: SubscriptionItem) => {
  const { locale } = usePageContext();
  const [customAmount, setCustomAmount] = useState<string | undefined>(undefined);
  const [isExpanded, setIsExpanded] = useState(false);

  const description = type === 'oneTime' ? null : 'per month';

  const isDisabled = isExpanded && type !== 'common' && !customAmount;

  const label = type === 'oneTime' ? 'Enter donation amount' : 'Enter subscription amount';

  const getHref = () => {
    const language = currency === 'uah' ? 'ua' : 'en';

    if (type === 'common') {
      return `/pay?language=${language}&currency=${currency.toUpperCase()}&amount=${amount}&action=subscribe`;
    }

    if (type === 'oneTime' && !!customAmount) {
      return `/pay?language=${language}&currency=${currency.toUpperCase()}&amount=${customAmount}&action=paydonate`;
    }

    if (type === 'custom' && !!customAmount) {
      return `/pay?language=${language}&currency=${currency.toUpperCase()}&amount=${customAmount}&action=subscribe`;
    }

    return '#';
  };

  const getTitle = () => {
    if (type === 'common') {
      const postFix = currency === 'uah' ? 'грн' : currency;

      return `${amount} ${postFix}`.toUpperCase();
    }

    if (type === 'oneTime') {
      return '1 time donation';
    }

    return 'Custom';
  };

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    if (type !== 'common' && !isExpanded) {
      setIsExpanded(true);
      e.preventDefault();

      return;
    }

    if (type !== 'oneTime') {
      e.preventDefault();
      showDialog(getHref());
    }
  };

  return (
    <StyledItem hasDescription={true}>
      <H3 color="light" margin={description ? '0' : '0 0 5rem'}>
        <LocaleText>{getTitle()}</LocaleText>
      </H3>
      {!!description && (
        <Paragraph color="light">
          <LocaleText>{description}</LocaleText>
        </Paragraph>
      )}
      {isExpanded && type !== 'common' && (
        <Input
          label={translate(label, locale)}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCustomAmount(e.target.value)}
          type="number"
          value={customAmount}
        />
      )}
      <StyledButtonLink
        href={getHref()}
        isDisabled={isDisabled}
        onClick={handleClick}
        rel="noreferrer"
        target="_blank"
        variant="light"
      >
        <LocaleText>Support</LocaleText>
      </StyledButtonLink>
    </StyledItem>
  );
};

export const Subscriptions = () => {
  const { locale } = usePageContext();
  const [activeTab, setActiveTab] = useState<'usd' | 'eur'>('usd');

  const items =
    locale === locales.en
      ? activeTab === 'usd'
        ? amountItems.usd
        : amountItems.eur
      : amountItems.uah;

  const currency = locale === locales.en ? activeTab : 'uah';
  const [isDialogVisible, setIsVisible] = useState<boolean>(false);
  const [targetUrl, setTargetUrl] = useState<string>('#');
  const showDialog = (url: string) => {
    setIsVisible(true);
    setTargetUrl(url);
  };
  const onConfirm = () => {
    window.location.href = targetUrl;
  };

  const onCancel = () => {
    setIsVisible(false);
    setTargetUrl('#');
  };

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
        <SubscriptionModal
          currency={currency}
          isVisible={isDialogVisible}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
        {items.map((amount, i) => (
          <Item flexBasis="31%" key={i}>
            <SubscriptionItem
              amount={amount}
              currency={currency}
              showDialog={showDialog}
              type="common"
            />
          </Item>
        ))}
        <Item flexBasis="31%">
          <SubscriptionItem
            amount={null}
            currency={currency}
            showDialog={showDialog}
            type="custom"
          />
        </Item>
        <Item flexBasis="31%">
          <SubscriptionItem
            amount={null}
            currency={currency}
            showDialog={showDialog}
            type="oneTime"
          />
        </Item>
      </Container>
      <Container>
        <Note color="light">
          <LocaleText>* If you are subscribed, but want to cancel subscription</LocaleText>{' '}
          <a href="#" rel="noreferrer" target="_blank">
            <LocaleText>click here</LocaleText>
          </a>
        </Note>
      </Container>
    </Section>
  );
};
