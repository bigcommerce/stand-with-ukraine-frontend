import { Button } from '@bigcommerce/big-design';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as BigDesignLogoSVG } from '../assets/big-design-logo.svg';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { writeConfiguration } from '../state/mainApi';
import {
  nextStep,
  previousStep,
  publish,
  selectConfiguration,
  selectFooter,
} from '../state/mainSlice';
import { alertsManager } from '../state/store';

const FooterDiv = styled.div`
  display: flex;
  flex: 0 0 8rem;
  width: 100%;
  align-items: center;
  align-self: flex-end;
  position: sticky;
  bottom: 0;

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

const BuiltWithContainer = styled.a`
  padding: 0 2rem;
  flex-grow: 1;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 1rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 100%;
  }

  & svg {
    margin-left: 1rem;
    max-height: 50px;
    max-width: 300px;
  }
`;

export default function Footer() {
  const { show, cancelButton, backButton, continueButton, publishButton } =
    useAppSelector(selectFooter);
  const widgetConfiguration = useAppSelector(selectConfiguration);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCancelButton = useCallback(() => navigate('/'), [navigate]);
  const handleBackButton = useCallback(() => dispatch(previousStep()), [dispatch]);
  const handleContinueButton = useCallback(() => dispatch(nextStep()), [dispatch]);

  const handlePublishButton = useCallback(async () => {
    await writeConfiguration(widgetConfiguration);
    await dispatch(publish());
    alertsManager.add({
      autoDismiss: true,
      messages: [
        {
          text: 'Widget was published on your store',
        },
      ],
      type: 'success',
    });
    navigate('/');
  }, [dispatch, navigate, widgetConfiguration]);

  if (!show) {
    return (
      <BuiltWithContainer
        href="https://developer.bigcommerce.com/big-design/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <div>
          Built with <BigDesignLogoSVG />
        </div>
      </BuiltWithContainer>
    );
  }

  return (
    <FooterDiv>
      <ButtonContainer>
        {cancelButton.show ? (
          <Button disabled={cancelButton.disabled} onClick={handleCancelButton} variant="subtle">
            Cancel
          </Button>
        ) : null}
        {backButton.show ? (
          <Button disabled={backButton.disabled} onClick={handleBackButton} variant="subtle">
            Back
          </Button>
        ) : null}
        {continueButton.show ? (
          <Button disabled={continueButton.disabled} onClick={handleContinueButton}>
            Continue
          </Button>
        ) : null}
        {publishButton.show ? (
          <Button disabled={publishButton.disabled} onClick={handlePublishButton}>
            Publish
          </Button>
        ) : null}
      </ButtonContainer>
    </FooterDiv>
  );
}
