import { useEffect } from 'react';

import Setup from '../components/Setup/Setup';
import { useAppDispatch } from '../state/hooks';
import { loadStatus } from '../state/mainSlice';

export default function SetupPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadStatus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Setup />;
}
