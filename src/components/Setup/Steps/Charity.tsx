import { Panel } from '@bigcommerce/big-design';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Razom } from '../../../assets/CharityLogos';
import { useAppDispatch } from '../../../state/hooks';
import { configureBackButton, configureContinueButton } from '../setupSlice';
import BodySmall from './common/BodySmall';

const Grid = styled.div`
  grid-template-columns: 1;
  grid-gap: 1rem;
  display: grid;
`;

const CHARITIES: {
  identifier: string;
  name: string;
  image: React.FunctionComponent;
  description: string;
}[] = [
  {
    identifier: 'razom',
    name: 'Razom',
    image: Razom,
    description: `Razom, which means “together” in Ukrainian is providing critical humanitarian aid and recovery devices for Ukrainin people. We are focused on delivering medicine items, hospital supplies, and tech enabled emergency response supplies that facilitate the delivery of this aid. We send on average more than 70 pallets of aid to Ukraine each week. In the first month of the war, we shipped over 218 tons of supplies. Learn more `,
  },
];

export default function Charity() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(configureBackButton({ show: true, disabled: false }));
    dispatch(configureContinueButton({ show: true, disabled: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Panel header="Choose your charities">
      <BodySmall>
        Choose up to 3 charities to be offered to shoppers. Charities listed
        below are trustworthy and safe.
      </BodySmall>
      <Grid></Grid>
    </Panel>
  );
}
