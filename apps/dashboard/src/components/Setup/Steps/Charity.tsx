import { Checkbox, Collapse, Link, Panel, Text } from '@bigcommerce/big-design';
import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { configureButtons, configureContinueButton, toggleCharity } from '../../../state/mainSlice';
import { RootState } from '../../../state/store';

import BodySmall from './common/BodySmall';
import { CHARITIES, MAX_SELECTION } from './common/data';

const Image = styled.img`
  height: 70px;
  width: 70px;
`;

const Grid = styled.div`
  grid-template-columns: 1;
  grid-gap: 1rem;
  display: grid;
`;

const CharityWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px;

  border: 1px solid #d9dce9;
  box-sizing: border-box;
  border-radius: 4px;

  &:hover {
    border-color: #b4bad1;
  }
`;

const CheckboxWrapper = styled.div`
  margin-top: 21px;
`;

const CharityContentWrapper = styled.div`
  flex: 1;
  display: flex;
  padding-left: 1rem;
  flex-direction: column;
  align-items: flex-start;
`;

const CharityLogoWrapper = styled.div`
  width: 70px;
  height: 70px;
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
  id,
  selected,
  logoProps,
  limitReached,
  donationLink,
}: {
  name: string;
  description: string;
  id: string;
  selected: boolean;
  limitReached: boolean;
  logoProps: any;
  donationLink: string;
}) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const handleCollapse = (isOpen: boolean) => setOpen(isOpen);
  const handleSelectChange = useCallback(() => dispatch(toggleCharity(id)), [dispatch, id]);

  const content = useMemo(() => {
    const paragraphs = description.split('\n');

    return paragraphs.map((item, key) => (
      <Text key={key} marginBottom="none">
        {item}{' '}
        {key === paragraphs.length - 1 && (
          <Link external href={donationLink} target="_blank">
            Learn more
          </Link>
        )}
      </Text>
    ));
  }, [description, donationLink]);

  return (
    <CharityWrapper>
      <CheckboxWrapper>
        <Checkbox
          checked={selected}
          disabled={!selected && limitReached}
          id={id}
          label=""
          onChange={handleSelectChange}
        />
      </CheckboxWrapper>
      <CharityLogoWrapper>
        <Image {...logoProps} />
      </CharityLogoWrapper>
      <CharityContentWrapper>
        <CharityLabel>{name}</CharityLabel>
        <Collapse onCollapseChange={handleCollapse} title={open ? 'Show less' : 'Show more'} />
        {open ? content : null}
      </CharityContentWrapper>
    </CharityWrapper>
  );
}

function selectWidgetCharities(state: RootState) {
  const charities = state.widgetConfiguration.charity_selections;
  const numCharitiesSelected = Object.values(state.widgetConfiguration.charity_selections).filter(
    (value) => value,
  ).length;

  return {
    charities,
    numCharities: numCharitiesSelected,
    limitReached: numCharitiesSelected >= MAX_SELECTION,
  };
}

export const CHARITY_BUTTON_STATE = {
  cancelButton: { show: false, disabled: false },
  backButton: { show: true, disabled: false },
  continueButton: { show: true, disabled: true },
  publishButton: { show: false, disabled: false },
};

export default function Charity() {
  const { charities, numCharities, limitReached } = useAppSelector(selectWidgetCharities);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(configureButtons(CHARITY_BUTTON_STATE));
  }, [dispatch]);

  useEffect(() => {
    dispatch(configureContinueButton({ show: true, disabled: numCharities === 0 }));
  }, [dispatch, numCharities]);

  return (
    <Panel header="Choose your charities">
      <BodySmall>
        All charities are trusted, non-profit organizations involved with Ukrainian relief efforts
        and provide only humanitarian aid. You can choose up to 3 charities.
      </BodySmall>
      <Grid>
        {CHARITIES.map(({ id, ...rest }, index) => (
          <SelectCharity
            id={id}
            key={index}
            limitReached={limitReached}
            selected={Boolean(charities.includes(id))}
            {...rest}
          />
        ))}
      </Grid>
    </Panel>
  );
}
