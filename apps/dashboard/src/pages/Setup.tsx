import { useEffect } from 'react';

import Setup from '../components/Setup/Setup';
import { useAppDispatch } from '../state/hooks';
import { loadStatus } from '../state/mainSlice/asyncActions';

export default function SetupPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadStatus());
  }, [dispatch]);

  return <Setup />;
}
