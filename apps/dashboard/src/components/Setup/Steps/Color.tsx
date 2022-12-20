import { Panel, Radio } from '@bigcommerce/big-design';
import type { WidgetStyle } from 'config/types';
import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { configureButtons, setWidgetStyle } from '../../../state/mainSlice';
import { selectInstallerType } from '../../../state/mainSlice/selectors';
import { RootState } from '../../../state/store';

import { WIDGET_STYLES } from './common/data';

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;

  max-width: 400px;
  height: 116px;

  border: 1px solid #d9dce9;
  box-sizing: border-box;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    border-color: #b4bad1;
  }

  & img {
    width: 90%;
  }
`;

const Grid = styled.div`
  grid-template-columns: 1;
  grid-gap: 1rem;
  display: grid;
`;

function SelectWidgetStyle({
  widgetStyle,
  selected,
  image,
}: {
  widgetStyle: WidgetStyle;
  selected: WidgetStyle;
  image: any;
}) {
  const dispatch = useAppDispatch();
  const handleChange = useCallback(
    () => dispatch(setWidgetStyle(widgetStyle)),
    [dispatch, widgetStyle],
  );

  return (
    <SelectWrapper onClick={handleChange}>
      <Radio checked={selected === widgetStyle} label="" onChange={handleChange} />
      {image}
    </SelectWrapper>
  );
}

function selectWidgetStyle(state: RootState): WidgetStyle {
  return state.widgetConfiguration.style;
}

const COLOR_BUTTON_STATE = {
  cancelButton: { show: true, disabled: false },
  backButton: { show: false, disabled: false },
  continueButton: { show: true, disabled: false },
  publishButton: { show: false, disabled: false },
};

const UNIVERSAL_COLOR_BUTTON_STATE = {
  ...COLOR_BUTTON_STATE,
  cancelButton: { show: false, disabled: false },
};

export default function Color() {
  const widgetStyle = useAppSelector(selectWidgetStyle);
  const dispatch = useAppDispatch();
  const installerType = useAppSelector(selectInstallerType);

  useEffect(() => {
    dispatch(
      configureButtons(
        installerType === 'universal' ? UNIVERSAL_COLOR_BUTTON_STATE : COLOR_BUTTON_STATE,
      ),
    );
  }, [dispatch]);

  return (
    <Panel header="Select widget color">
      <Grid>
        {WIDGET_STYLES.map(({ style, image: ImageComponent }, index) => (
          <SelectWidgetStyle
            image={<ImageComponent />}
            key={index}
            selected={widgetStyle}
            widgetStyle={style}
          />
        ))}
      </Grid>
    </Panel>
  );
}
