import { Button, Link } from '@bigcommerce/big-design';
import styled from 'styled-components';
import { useAppSelector } from '../../state/hooks';
import RouterButton from '../RouterButton';
import FAQ from './FAQ';
import { selectHome } from './homeSlice';

const LoveMessageContainer = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

const ActionContainer = styled.div`
  margin-top: 1rem;

  & > button,
  & > a {
    margin-left: 0.5rem;
  }

  // don't add margin left for remove button
  > * {
    &:first-child {
      margin-left: 0;
    }
  }
`;

export default function PublishedActions() {
  const { storeUrl } = useAppSelector(selectHome);

  return (
    <>
      <FAQ />
      <LoveMessageContainer>
        ❤️ The people of Ukraine very much appreciate your help!
      </LoveMessageContainer>
      <ActionContainer>
        <Button variant="secondary" actionType="destructive">
          Remove
        </Button>
        <RouterButton
          linkProps={{
            to: '/setup',
          }}
          variant="secondary"
        >
          Edit
        </RouterButton>
        {/* {storeUrl ? ( */}
        <Link href={storeUrl || '#'} target="_blank" rel="noreferrer" external>
          View
        </Link>
        {/* ) : null} */}
      </ActionContainer>
    </>
  );
}
