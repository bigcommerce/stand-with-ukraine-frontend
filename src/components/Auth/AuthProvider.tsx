import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Link, ProgressCircle } from '@bigcommerce/big-design';

import { useAppDispatch } from '../../state/hooks';
import { loadStatus } from '../../state/mainSlice';
import { GetSessionToken, SetSessionToken } from '../../state/utils';

const Wrapper = styled.div`
  display: flex;
  flex: 1 0 100%;
  align-items: center;
  justify-content: center;
  text-align: center;

  & h2,
  & a {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 1rem 0 1rem 0;
  }
`;

type Status = 'loading' | 'authenticated' | 'unauthenticated';

export default function AuthProvider({ children }: { children: any }) {
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    async function GetAndValidateToken() {
      // eslint-disable-next-line no-restricted-globals
      const searchParams = new URLSearchParams(location.search);
      const token = searchParams.get('token') ?? GetSessionToken() ?? null;

      if (token !== null) {
        SetSessionToken(token);

        const { meta } = await dispatch(loadStatus());
        if (meta.requestStatus === 'fulfilled') {
          setStatus('authenticated');
          return;
        }
      }

      setStatus('unauthenticated');
    }

    GetAndValidateToken();
  }, [dispatch]);

  if (status === 'authenticated') {
    return children;
  }

  return (
    <Wrapper>
      {status === 'unauthenticated' ? (
        <h2>
          {process.env.NODE_ENV === 'development' ? (
            <>
              {'Start the local mock server after reading README'}
              <br />
            </>
          ) : null}
          {'Your authentication token is invalid or expired.'}
          <br />
          {'Please '}
          <Link
            target="_blank"
            href="https://apps.bigcommerce.com/details/38603"
          >
            open the app
          </Link>
          {' from your BigCommerce admin portal.'}
        </h2>
      ) : (
        <ProgressCircle />
      )}
    </Wrapper>
  );
}
