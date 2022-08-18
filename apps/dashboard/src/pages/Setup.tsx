import React, { useEffect } from 'react';

import Setup from '../components/Setup/Setup';
import { useAppDispatch } from '../state/hooks';
import { loadStatus } from '../state/mainSlice';

export default function SetupPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadStatus());
  }, [dispatch]);

  return <Setup />;
}
