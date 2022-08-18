import { Panel, Radio } from '@bigcommerce/big-design';
import type { WidgetPlacement } from 'config/types';
import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { configureButtons, setWidgetPlacement } from '../../../state/mainSlice';
import { RootState } from '../../../state/store';

import BodySmall from './common/BodySmall';
import { PLACEMENT_OPTIONS } from './common/data';

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 16px;

  max-width: 320px;
  height: 220px;

  border: 1px solid #d9dce9;
  box-sizing: border-box;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    border-color: #b4bad1;
  }

  & > svg {
    margin-top: 1rem;
    max-width: 320px;
    width: 100%;
  }
`;

function SelectWidgetPlacement({
  label,
  widgetPlacement,
  selected,
  image,
}: {
  label: string;
  widgetPlacement: WidgetPlacement;
  selected: WidgetPlacement;
  image: any;
}) {
  const dispatch = useAppDispatch();
  const handleChange = useCallback(
    () => dispatch(setWidgetPlacement(widgetPlacement)),
    [dispatch, widgetPlacement],
  );

  return (
    <SelectWrapper onClick={handleChange}>
      <Radio checked={selected === widgetPlacement} label={label} onChange={handleChange} />
      {image}
    </SelectWrapper>
  );
}

function selectWidgetPlacement(state: RootState): WidgetPlacement {
  return state.widgetConfiguration.placement;
}

const Grid = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  display: grid;

  @media (min-width: 1122px) {
    grid-template-columns: repeat(3, 320px);
  }
`;

export default function Placement() {
  const widgetPlacement = useAppSelector(selectWidgetPlacement);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      configureButtons({
        cancelButton: { show: false, disabled: false },
        backButton: { show: true, disabled: false },
        continueButton: { show: true, disabled: false },
        publishButton: { show: false, disabled: false },
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Panel header="Select widget layout">
      <BodySmall>
        This determines where the widget will appear on the page. The layout will be the same for
        both desktop and mobile shoppers.
      </BodySmall>
      <Grid>
        {PLACEMENT_OPTIONS.map(({ label, placement, image: ImageComponent }, idx) => (
          <SelectWidgetPlacement
            image={<ImageComponent />}
            key={idx}
            label={label}
            selected={widgetPlacement}
            widgetPlacement={placement}
          />
        ))}
      </Grid>
    </Panel>
  );
}
