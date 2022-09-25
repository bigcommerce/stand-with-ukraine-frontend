import { Button, Link } from '@bigcommerce/big-design';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { goToStep, showRemoveDialog } from '../../state/mainSlice';
import { preview } from '../../state/mainSlice/asyncActions';
import { selectStoreUrl } from '../../state/mainSlice/selectors';

import RemoveModal from './RemoveModal';

const LoveMessageContainer = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin: 0.5rem 0;
`;

const ActionContainer = styled.div`
  & > button,
  & > a {
    margin-top: 1rem;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    flex: 0 0 4rem;
    display: flex;
    align-items: center;
    margin-top: 1rem;

    & > button,
    & > a {
      margin-left: 1.5rem !important;
      margin-top: 0;
    }

    // don't add margin left for remove button
    > * {
      &:first-child {
        margin-left: 0 !important;
      }
    }
  }
`;

export default function PublishedActions() {
  const storeUrl = useAppSelector(selectStoreUrl);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(preview());
  }, [dispatch]);

  return (
    <>
      <RemoveModal />
      <LoveMessageContainer>
        ❤️ The people of Ukraine very much appreciate your help!
      </LoveMessageContainer>
      <ActionContainer>
        <Button
          actionType="destructive"
          onClick={() => {
            dispatch(showRemoveDialog());
          }}
          variant="secondary"
        >
          Remove
        </Button>
        <Button
          onClick={() => {
            dispatch(goToStep(0));
            navigate('/setup');
          }}
          variant="secondary"
        >
          Edit
        </Button>
        {storeUrl ? (
          <Link external href={storeUrl} rel="noreferrer" target="_blank">
            View
          </Link>
        ) : null}
      </ActionContainer>
    </>
  );
}
