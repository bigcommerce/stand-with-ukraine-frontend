import { Panel, Radio } from '@bigcommerce/big-design';
import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { configureButtons, setWidgetStyle, WidgetStyle } from '../setupSlice';
import { RootState } from '../../../state/store';
import BodySmall from './common/BodySmall';
import styled from 'styled-components';
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
    (_: React.ChangeEvent<HTMLElement>) =>
      dispatch(setWidgetStyle(widgetStyle)),
    [dispatch, widgetStyle]
  );

  return (
    <SelectWrapper onClick={handleChange as any}>
      <Radio
        label=""
        checked={selected === widgetStyle}
        onChange={handleChange}
      />
      {image}
    </SelectWrapper>
  );
}

function selectWidgetStyle(state: RootState): WidgetStyle {
  return state.setup.widgetConfiguration.style;
}

export default function Style() {
  const widgetStyle = useAppSelector(selectWidgetStyle);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      configureButtons({
        cancelButton: {
          show: true,
          disabled: false,
        },
        backButton: { show: false, disabled: false },
        continueButton: { show: true, disabled: false },
        publishButton: { show: false, disabled: false },
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Panel header="Select widget style">
      <BodySmall>
        Please, select a widget style that fits your site colors the most
      </BodySmall>
      <Grid>
        {WIDGET_STYLES.map(({ style, image: ImageComponent }, index) => (
          <SelectWidgetStyle
            key={index}
            selected={widgetStyle}
            image={<ImageComponent />}
            widgetStyle={style}
          />
        ))}
      </Grid>
    </Panel>
  );
}
