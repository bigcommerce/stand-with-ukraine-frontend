import styled, { css } from 'styled-components';

import { Button } from '../components';
import { breakpoints } from '../helpers';
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

const ProceedButton = styled(Button)`
  margin: 1rem;
  background-image: linear-gradient(to bottom right, #121118 50%, #0d52ff 0);
  &:hover {
    color: #fff;
  }
  ${breakpoints.mobile} {
    width: 98%;
  }
  ${breakpoints.desktop} {
    width: auto;
  }
`;
const CancelButton = styled(Button)`
  margin: 1rem;
  ${breakpoints.mobile} {
    width: 98%;
  }
  ${breakpoints.desktop} {
    width: auto;
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
        <ProceedButton onClick={onConfirm}>
          <LocaleText>Proceed</LocaleText>
        </ProceedButton>
        <CancelButton onClick={onCancel}>
          <LocaleText>Cancel</LocaleText>
        </CancelButton>
      </ModalContent>
    </Modal>
  );
};
