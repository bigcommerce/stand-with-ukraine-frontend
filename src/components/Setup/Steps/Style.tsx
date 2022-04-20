import { Panel, Radio } from '@bigcommerce/big-design';
import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import {
  configureBackButton,
  configureContinueButton,
  setWidgetStyle,
  WidgetStyle,
} from '../setupSlice';
import { ReactComponent as BlueWidgetStyleSVG } from '../../../assets/WidgetStyles/BlueStyle.svg';
import { ReactComponent as BlackWidgetStyleSVG } from '../../../assets/WidgetStyles/BlackStyle.svg';
import { ReactComponent as WhiteWidgetStyleSVG } from '../../../assets/WidgetStyles/WhiteStyle.svg';
import { RootState } from '../../../state/store';
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

const WIDGET_STYLES: {
  style: WidgetStyle;
  image: React.FunctionComponent<any>;
}[] = [
  {
    style: 'blue',
    image: BlueWidgetStyleSVG,
  },
  {
    style: 'black',
    image: BlackWidgetStyleSVG,
  },
  {
    style: 'white',
    image: WhiteWidgetStyleSVG,
  },
];

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
      {WIDGET_STYLES.map(({ style, image: ImageComponent }, index) => (
        <SelectWidgetStyle
          key={index}
          selected={widgetStyle}
          image={<ImageComponent />}
          widgetStyle={style}
        />
      ))}
    </Panel>
  );
}
