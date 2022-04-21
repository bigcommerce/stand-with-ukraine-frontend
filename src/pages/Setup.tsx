import { useEffect } from 'react';
import { loadStore } from '../components/Home/homeSlice';
import Setup from '../components/Setup/Setup';
import { useAppDispatch } from '../state/hooks';

export default function SetupPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadStore());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Setup />;
}
