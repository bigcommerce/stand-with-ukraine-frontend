import { Stepper } from '@bigcommerce/big-design';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  previousStep,
  nextStep,
  Steps,
  selectStep,
  showFooter,
  hideFooter,
} from './setupSlice';
import Charity from './Steps/Charity';
import Layout from './Steps/Layout';
import Modal from './Steps/Modal';
import Style from './Steps/Style';

export default function Setup() {
  const { currentStep } = useAppSelector(selectStep);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // on mount show footer
    dispatch(showFooter());

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
      {currentStep === 0 ? <Style /> : null}
      {currentStep === 1 ? <Layout /> : null}
      {currentStep === 2 ? <Charity /> : null}
      {currentStep === 3 ? <Modal /> : null}
    </>
  );
}
