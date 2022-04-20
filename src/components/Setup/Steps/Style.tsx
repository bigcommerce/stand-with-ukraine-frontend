import { Panel, Radio } from '@bigcommerce/big-design';
import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  configureBackButton,
  configureContinueButton,
  setWidgetStyle,
  WidgetStyle,
} from '../setupSlice';
import { ReactComponent as BlueWidgetStyleSVG } from '../../../assets/WidgetStyles/BlueStyle.svg';
import { ReactComponent as BlackWidgetStyleSVG } from '../../../assets/WidgetStyles/BlackStyle.svg';
import { ReactComponent as WhiteWidgetStyleSVG } from '../../../assets/WidgetStyles/WhiteStyle.svg';
import { RootState } from '../../../app/store';
import BodySmall from './common/BodySmall';
import styled from 'styled-components';

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

  margin: 1em 0;

  cursor: pointer;

  &:hover {
    border-color: #b4bad1;
  }
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
    dispatch(configureBackButton({ show: false }));
    dispatch(configureContinueButton({ show: true, disabled: false }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Panel header="Select widget style">
      <BodySmall>
        Please, select a widget style that fits your site colors the most
      </BodySmall>
      {/* <Grid gridColumns="repeat(auto-fit, minmax(400px, 1fr))"> */}
      <SelectWidgetStyle
        selected={widgetStyle}
        image={<BlueWidgetStyleSVG />}
        widgetStyle="blue"
      />
      <SelectWidgetStyle
        selected={widgetStyle}
        image={<BlackWidgetStyleSVG />}
        widgetStyle="black"
      />
      <SelectWidgetStyle
        selected={widgetStyle}
        image={<WhiteWidgetStyleSVG />}
        widgetStyle="white"
      />
      {/* </Grid> */}
    </Panel>
  );
}
