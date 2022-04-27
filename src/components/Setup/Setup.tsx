import { useEffect } from 'react';

import { Stepper } from '@bigcommerce/big-design';

import { useAppDispatch, useAppSelector } from '../../state/hooks';
import {
  getConfiguration,
  hideFooter,
  selectCurrentStep,
  showFooter,
  Steps,
} from './setupSlice';
import Charity from './Steps/Charity';
import Color from './Steps/Color';
import Modal from './Steps/Modal';
import Placement from './Steps/Placement';

export default function Setup() {
  const currentStep = useAppSelector(selectCurrentStep);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // on mount show footer
    dispatch(showFooter());
    dispatch(getConfiguration());

    // on dismount hide it
    return () => {
      dispatch(hideFooter());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const dispatch = useAppDispatch();

  return (
    <>
      <Stepper steps={Steps} currentStep={currentStep}></Stepper>
      {currentStep === 0 ? <Color /> : null}
      {currentStep === 1 ? <Placement /> : null}
      {currentStep === 2 ? <Charity /> : null}
      {currentStep === 3 ? <Modal /> : null}
    </>
  );
}
