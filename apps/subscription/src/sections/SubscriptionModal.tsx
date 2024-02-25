import { createContext, MouseEventHandler, PropsWithChildren, useContext, useState } from 'react';
import styled from 'styled-components';

import { ButtonLink, Paragraph } from '../components';
import { breakpoints } from '../helpers';
import { defaultLocale } from '../locales';
import { LocaleText } from '../renderer/LocaleText';
import { usePageContext } from '../renderer/usePageContext';

import { SubscriptionItem } from './Subscriptions';

interface SubscriptionContextProps {
  isOpen: boolean;
  url: null | string;
  currency: SubscriptionItem['currency'] | null;
  closeModal(): void;
  openModal(url: string, currency: SubscriptionItem['currency']): void;
}

const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 15px;
  overflow-y: auto;
  background-color: rgba(49, 52, 64, 0.7);
  z-index: 10002;
`;

const ModalBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #121118;
  max-width: 68.4rem;
  padding: 3rem 2rem;
  position: relative;
  width: 100%;

  ${breakpoints.tablet} {
    padding: 5rem 4rem;
  }

  ${ButtonLink} {
    width: 100%;
    max-width: 26.5rem;
  }
`;

const CloseModal = styled.button`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  background: none;
  border: 0;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 0.2rem;
    height: 1.5rem;
    background-color: #8c93ad;
    top: 50%;
    left: 50%;
    border-radius: 0.2rem;
  }

  &::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const SubscriptionModalContext = createContext<SubscriptionContextProps | null>(null);

export const SubscriptionModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState<SubscriptionContextProps['url']>(null);
  const [currency, setCurrency] = useState<SubscriptionContextProps['currency']>(null);

  const openModal: SubscriptionContextProps['openModal'] = (url, currency) => {
    if (document.body) {
      document.body.style.overflow = 'hidden';
    }

    setUrl(url);
    setCurrency(currency);
    setIsOpen(true);
  };

  const closeModal = () => {
    if (document.body) {
      document.body.style.overflow = 'initial';
    }

    setUrl(null);
    setCurrency(null);
    setIsOpen(false);
  };

  return (
    <SubscriptionModalContext.Provider value={{ isOpen, url, currency, openModal, closeModal }}>
      {children}
    </SubscriptionModalContext.Provider>
  );
};

export const useSubscriptionModal = () => {
  const context = useContext(SubscriptionModalContext);

  if (!context) {
    throw new Error('useSubscriptionModal must be used within a <SubscriptionModalProvider>');
  }

  return context;
};

export const SubscriptionModal = () => {
  const { isOpen, url, currency, closeModal } = useSubscriptionModal();
  const { locale } = usePageContext();

  const nextCurrency = currency && (currency === 'uah' ? 'грн' : currency.toUpperCase());

  const message =
    nextCurrency &&
    (locale === defaultLocale
      ? `You will need to verify your card by confirming payment for 0 ${nextCurrency} and once verified, you will be subscribed for the amount of donation you selected.`
      : `При підтвердженні платежу, необхідно підтвердити списання 0 ${nextCurrency} для верифікації вашої картки. Після підтвердження, підписка на обрану вами суму буде оформлена.`);

  const handleContentClick: MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation();

  if (!isOpen) {
    return null;
  }

  return (
    <Modal onClick={closeModal}>
      <ModalBody onClick={handleContentClick}>
        <CloseModal onClick={closeModal} />
        {!!message && (
          <Paragraph color="light" margin="0 0 3rem" textAlign="center">
            {message}
          </Paragraph>
        )}
        {!!url && (
          <ButtonLink href={url} rel="noreferrer" target="_blank" variant="light">
            <LocaleText>Proceed</LocaleText>
          </ButtonLink>
        )}
      </ModalBody>
    </Modal>
  );
};
