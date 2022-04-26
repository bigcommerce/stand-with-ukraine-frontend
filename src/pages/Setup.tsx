import { useEffect } from 'react';
import { loadStatus } from '../components/Home/homeSlice';
import Setup from '../components/Setup/Setup';
import { useAppDispatch } from '../state/hooks';

export default function SetupPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadStatus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Setup />;
}
