import { Panel } from '@bigcommerce/big-design';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { configureBackButton, configureContinueButton } from '../setupSlice';

export default function Charity() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(configureBackButton({ show: true, disabled: false }));
    dispatch(configureContinueButton({ show: true, disabled: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Panel header="Select widget style"></Panel>;
}
