import { Link, ProgressCircle } from '@bigcommerce/big-design';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAppDispatch } from '../../state/hooks';
import { setInstallerType } from '../../state/mainSlice';
import { loadStatus } from '../../state/mainSlice/asyncActions';
import { GetSessionToken, IsUniversalInstallerToken, SetSessionToken } from '../../state/utils';

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

export default function AuthProvider({ children }: { readonly children: any }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [localStateStatus, localStateSetStatus] = useState<Status>('loading');

  useEffect(() => {
    async function GetAndValidateToken() {
      const searchParams = new URLSearchParams(location.search);
      const searchToken = searchParams.get('token');

      if (searchToken !== null) {
        // consume the token by clearing the search query params
        history.replaceState({}, document.title, location.pathname);
      } else if (localStateStatus !== 'loading') {
        // if search token is null and status is not loading
        // no need to do further work
        return;
      }

      const token = searchToken ?? GetSessionToken() ?? null;

      if (token !== null) {
        SetSessionToken(token);

        if (IsUniversalInstallerToken(token)) {
          dispatch(setInstallerType('universal'));
          navigate('/setup');

          return localStateSetStatus('authenticated');
        }

        dispatch(setInstallerType('bigcommerce'));
        navigate('/');

        const { meta } = await dispatch(loadStatus());

        if (meta.requestStatus === 'fulfilled') {
          return localStateSetStatus('authenticated');
        }
      }

      localStateSetStatus('unauthenticated');
    }

    void GetAndValidateToken();
  }, [dispatch, navigate, localStateStatus, localStateSetStatus]);

  if (localStateStatus === 'authenticated') {
    return children;
  }

  return (
    <Wrapper>
      {localStateStatus === 'unauthenticated' ? (
        <h2>
          {process.env.NODE_ENV === 'development' ? (
            <>
              Start the local mock server after reading README
              <br />
            </>
          ) : null}
          Your authentication token is Invalid.
          <br />
          {'Please '}
          <Link href="https://www.bigcommerce.com/apps/stand-with-ukraine/" target="_blank">
            install
          </Link>
          {' and '}
          <Link href="https://apps.bigcommerce.com/details/38603" target="_blank">
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
