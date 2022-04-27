import { Stepper } from '@bigcommerce/big-design';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../state/hooks';
import {
  Steps,
  showFooter,
  hideFooter,
  selectCurrentStep,
  getConfiguration,
} from './setupSlice';
import Charity from './Steps/Charity';
import Placement from './Steps/Placement';
import Modal from './Steps/Modal';
import Color from './Steps/Color';

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
