import { Form, FormGroup, Panel, Radio } from '@bigcommerce/big-design';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setWidgetStyle, WidgetStyle } from '../setupSlice';
import { ReactComponent as BlueWidgetStyleSVG } from '../../../assets/WidgetStyles/BlueStyle.svg';
import { ReactComponent as BlackWidgetStyleSVG } from '../../../assets/WidgetStyles/BlackStyle.svg';
import { ReactComponent as WhiteWidgetStyleSVG } from '../../../assets/WidgetStyles/WhiteStyle.svg';

const Body = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;

  width: 427px;
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
    (event: React.ChangeEvent<HTMLElement>) =>
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

export default function Style() {
  const widgetStyle = useAppSelector((state) => state.setup.widgetStyle);

  return (
    <Panel header="Select widget style">
      <Body>
        Please, select a widget style that fits your site colors the most
      </Body>
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
    </Panel>
  );
}
