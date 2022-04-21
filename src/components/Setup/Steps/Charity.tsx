import { Checkbox, Collapse, Panel, Text } from '@bigcommerce/big-design';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ComeBackAlive, NewUkraine, Razom } from '../../../assets/CharityLogos';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { RootState } from '../../../state/store';
import {
  configureBackButton,
  configureContinueButton,
  toggleCharity,
} from '../setupSlice';
import BodySmall from './common/BodySmall';

const Grid = styled.div`
  grid-template-columns: 1;
  grid-gap: 1rem;
  display: grid;
`;

const MAX_SELECTION = 3;
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
  {
    identifier: 'come-back-alive',
    name: 'Come Back Alive',
    image: ComeBackAlive,
    description: `Razom, which means “together” in Ukrainian is providing critical humanitarian aid and recovery devices for Ukrainin people. We are focused on delivering medicine items, hospital supplies, and tech enabled emergency response supplies that facilitate the delivery of this aid. We send on average more than 70 pallets of aid to Ukraine each week. In the first month of the war, we shipped over 218 tons of supplies. Learn more `,
  },
  {
    identifier: 'new-ukraine',
    name: 'New Ukraine',
    image: NewUkraine,
    description: `Razom, which means “together” in Ukrainian is providing critical humanitarian aid and recovery devices for Ukrainin people. We are focused on delivering medicine items, hospital supplies, and tech enabled emergency response supplies that facilitate the delivery of this aid. We send on average more than 70 pallets of aid to Ukraine each week. In the first month of the war, we shipped over 218 tons of supplies. Learn more `,
  },
  {
    identifier: 'razom-1',
    name: 'Razom',
    image: Razom,
    description: `Razom, which means “together” in Ukrainian is providing critical humanitarian aid and recovery devices for Ukrainin people. We are focused on delivering medicine items, hospital supplies, and tech enabled emergency response supplies that facilitate the delivery of this aid. We send on average more than 70 pallets of aid to Ukraine each week. In the first month of the war, we shipped over 218 tons of supplies. Learn more `,
  },
  {
    identifier: 'come-back-alive-1',
    name: 'Come Back Alive',
    image: ComeBackAlive,
    description: `Razom, which means “together” in Ukrainian is providing critical humanitarian aid and recovery devices for Ukrainin people. We are focused on delivering medicine items, hospital supplies, and tech enabled emergency response supplies that facilitate the delivery of this aid. We send on average more than 70 pallets of aid to Ukraine each week. In the first month of the war, we shipped over 218 tons of supplies. Learn more `,
  },
  {
    identifier: 'new-ukraine-1',
    name: 'New Ukraine',
    image: NewUkraine,
    description: `Razom, which means “together” in Ukrainian is providing critical humanitarian aid and recovery devices for Ukrainin people. We are focused on delivering medicine items, hospital supplies, and tech enabled emergency response supplies that facilitate the delivery of this aid. We send on average more than 70 pallets of aid to Ukraine each week. In the first month of the war, we shipped over 218 tons of supplies. Learn more `,
  },
];

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;

  border: 1px solid #d9dce9;
  box-sizing: border-box;
  border-radius: 4px;

  &:hover {
    border-color: #b4bad1;
  }
`;

const CharityContentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  flex-direction: column;
  align-items: flex-start;
`;

const CharityLogoWrapper = styled.div`
  width: 50px;
  height: 50px;
  padding: 0 1rem;
`;

const CharityLabel = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  margin: 0;
`;

function SelectCharity({
  name,
  description,
  identifier,
  selected,
  image,
  limitReached,
}: {
  name: string;
  description: string;
  identifier: string;
  selected: boolean;
  limitReached: boolean;
  image: any;
}) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const handleCollapse = (isOpen: boolean) => setOpen(isOpen);
  const handleSelectChange = useCallback(
    (_: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(toggleCharity(identifier)),
    [dispatch, identifier]
  );

  return (
    <SelectWrapper>
      <Checkbox
        label=""
        checked={selected}
        disabled={!selected && limitReached}
        onChange={handleSelectChange}
      />
      <CharityLogoWrapper>{image}</CharityLogoWrapper>
      <CharityContentWrapper>
        <CharityLabel>{name}</CharityLabel>
        {/*
        // @ts-ignore */}
        <Collapse
          title={open ? 'Show less' : 'Show more'}
          onCollapseChange={handleCollapse}
        ></Collapse>
        {open ? <Text>{description}</Text> : null}
      </CharityContentWrapper>
    </SelectWrapper>
  );
}

function selectWidgetCharities(state: RootState) {
  const charities = state.setup.widgetConfiguration.charitySelections;
  const numCharitiesSelected = Object.values(
    state.setup.widgetConfiguration.charitySelections
  ).filter((value) => value).length;
  return {
    charities,
    numCharities: numCharitiesSelected,
    limitReached: numCharitiesSelected >= MAX_SELECTION,
  };
}

export default function Charity() {
  const { charities, numCharities, limitReached } = useAppSelector(
    selectWidgetCharities
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(configureBackButton({ show: true, disabled: false }));
    dispatch(configureContinueButton({ show: true, disabled: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(
      configureContinueButton({ show: true, disabled: numCharities === 0 })
    );
  }, [dispatch, numCharities]);

  return (
    <Panel header="Choose your charities">
      <BodySmall>
        Choose up to 3 charities to be offered to shoppers. Charities listed
        below are trustworthy and safe.
      </BodySmall>
      <Grid>
        {CHARITIES.map(
          ({ identifier, name, image: ImageComponent, description }, index) => (
            <SelectCharity
              key={index}
              selected={Boolean(charities[identifier])}
              limitReached={limitReached}
              identifier={identifier}
              name={name}
              image={<ImageComponent />}
              description={description}
            />
          )
        )}
      </Grid>
    </Panel>
  );
}
