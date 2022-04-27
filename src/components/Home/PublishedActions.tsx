import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Link } from '@bigcommerce/big-design';

import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { goToStep } from '../Setup/setupSlice';
import { preview, showRemoveDialog } from './homeSlice';
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
  const storeUrl = useAppSelector((state) => state.home.storeUrl);
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
          onClick={() => {
            dispatch(showRemoveDialog());
          }}
          variant="secondary"
          actionType="destructive"
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
          <Link href={storeUrl} target="_blank" rel="noreferrer" external>
            View
          </Link>
        ) : null}
      </ActionContainer>
    </>
  );
}
