import { Button, Link } from '@bigcommerce/big-design';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { goToStep } from '../Setup/setupSlice';
import FAQ from './FAQ';
import { selectHome, showRemoveDialog } from './homeSlice';
import RemoveModal from './RemoveModal';

const LoveMessageContainer = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
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
      margin-left: 1rem;
      margin-top: 0;
    }

    // don't add margin left for remove button
    > * {
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

export default function PublishedActions() {
  const { storeUrl } = useAppSelector(selectHome);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
        {/* {storeUrl ? ( */}
        <Link href={storeUrl || '#'} target="_blank" rel="noreferrer" external>
          View
        </Link>
        {/* ) : null} */}
      </ActionContainer>
      <FAQ />
    </>
  );
}
