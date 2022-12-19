import { Button, ButtonProps } from '@bigcommerce/big-design';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as BigDesignLogoSVG } from '../assets/big-design-logo.svg';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { nextStep, previousStep } from '../state/mainSlice';
import { writeConfiguration } from '../state/mainSlice/api';
import { publish } from '../state/mainSlice/asyncActions';
import {
  selectConfiguration,
  selectFooter,
  selectInstallerType,
} from '../state/mainSlice/selectors';
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

function BuiltWithBigDesign() {
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

function FooterButton({
  buttonState,
  onClick,
  text,
  ...rest
}: {
  buttonState: { show: boolean; disabled: boolean };
  onClick: () => void;
  text: string;
} & ButtonProps) {
  return buttonState.show ? (
    <Button disabled={buttonState.disabled} onClick={onClick} {...rest}>
      {text}
    </Button>
  ) : null;
}

function useFooter() {
  const { show, cancelButton, backButton, continueButton, publishButton } =
    useAppSelector(selectFooter);
  const widgetConfiguration = useAppSelector(selectConfiguration);
  const installerType = useAppSelector(selectInstallerType);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCancelButton = useCallback(() => navigate('/'), [navigate]);
  const handleBackButton = useCallback(() => dispatch(previousStep()), [dispatch]);
  const handleContinueButton = useCallback(() => dispatch(nextStep()), [dispatch]);
  const handlePublishButton = useCallback(async () => {
    if (installerType === 'bigcommerce') {
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
    } else if (installerType === 'universal') {
      navigate('/code');
    }
  }, [dispatch, navigate, widgetConfiguration, installerType]);

  return {
    show,
    cancelButton,
    backButton,
    continueButton,
    publishButton,
    handleBackButton,
    handleCancelButton,
    handlePublishButton,
    handleContinueButton,
  };
}

export default function Footer() {
  const {
    show,
    cancelButton,
    backButton,
    continueButton,
    publishButton,
    handleBackButton,
    handleCancelButton,
    handlePublishButton,
    handleContinueButton,
  } = useFooter();

  if (show) {
    return (
      <FooterDiv>
        <ButtonContainer>
          <FooterButton
            buttonState={cancelButton}
            onClick={handleCancelButton}
            text="Cancel"
            variant="subtle"
          />
          <FooterButton
            buttonState={backButton}
            onClick={handleBackButton}
            text="Back"
            variant="subtle"
          />
          <FooterButton
            buttonState={continueButton}
            onClick={handleContinueButton}
            text="Continue"
          />
          <FooterButton buttonState={publishButton} onClick={handlePublishButton} text="Publish" />
        </ButtonContainer>
      </FooterDiv>
    );
  }

  return <BuiltWithBigDesign />;
}
