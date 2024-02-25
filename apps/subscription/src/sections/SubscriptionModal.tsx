import styled, { css } from 'styled-components';

import { Button } from '../components';
import { translate } from '../locales';
import { LocaleText } from '../renderer/LocaleText';
import { usePageContext } from '../renderer/usePageContext';

const Modal = styled.div<{ isVisible: boolean }>`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  ${({ isVisible }) =>
    !isVisible &&
    css`
      display: none;
    `}
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 3rem;
  border: 1px solid #888;
  border-radius: 5px;
  width: 80%;
  max-width: 50%;
  text-align: center;
  p {
    padding: 1rem;
  }
`;

interface Props {
  currency: string;
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const SubscriptionModal = ({ currency, isVisible, onConfirm, onCancel }: Props) => {
  const { locale } = usePageContext();

  const message = translate(
    'You will need to verify your card by confirming payment for 0 {currency} and once verified, you will be subscribed for the amount of donation you selected.',
    locale,
    {
      '{currency}': currency === 'uah' ? 'грн' : currency.toUpperCase(),
    },
  );

  return (
    <Modal isVisible={isVisible}>
      <ModalContent>
        <p>{message}</p>

        <Button margin="0 1rem" onClick={onConfirm}>
          <LocaleText>Proceed</LocaleText>
        </Button>
        <Button margin="0 1rem" onClick={onCancel}>
          <LocaleText>Cancel</LocaleText>
        </Button>
      </ModalContent>
    </Modal>
  );
};
