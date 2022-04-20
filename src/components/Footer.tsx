import { Button } from '@bigcommerce/big-design';
import { useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { nextStep, previousStep, selectFooter } from './Setup/setupSlice';

const FooterDiv = styled.div`
  display: flex;
  flex: 0 0 8rem;
  width: 100%;
  align-items: center;
  align-self: flex-end;

  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(49, 52, 64, 0.2);

  ${({ theme }) => theme.breakpoints.tablet} {
    flex: 0 0 4rem;
  }
`;

const ButtonContainer = styled.div`
  padding: 0 2rem;
  flex-grow: 1;
  display: block;

  ${({ theme }) => theme.breakpoints.tablet} {
    justify-content: flex-end;
    display: flex;
  }
`;

export default function Footer() {
  const { show, backButton, continueButton } = useAppSelector(selectFooter);
  const dispatch = useAppDispatch();

  const handleBackButton = useCallback(
    () => dispatch(previousStep()),
    [dispatch]
  );
  const handleContinueButton = useCallback(
    () => dispatch(nextStep()),
    [dispatch]
  );

  if (!show) {
    return null;
  }

  return (
    <FooterDiv>
      <ButtonContainer>
        {backButton.show ? (
          <Button
            variant="subtle"
            disabled={backButton.disabled}
            onClick={handleBackButton}
          >
            Back
          </Button>
        ) : null}
        {continueButton.show ? (
          <Button
            disabled={continueButton.disabled}
            onClick={handleContinueButton}
          >
            Continue
          </Button>
        ) : null}
      </ButtonContainer>
    </FooterDiv>
  );
}
