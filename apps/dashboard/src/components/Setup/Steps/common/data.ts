import { GetCharities } from 'config/charities';
import type { WidgetPlacement, WidgetStyle } from 'config/types';
import { FC } from 'react';

import {
  BottomLeft,
  BottomMiddle,
  BottomRight,
  TopLeft,
  TopMiddle,
  TopRight,
} from '../../../../assets/WidgetPlacement';
import { BlackWidget, BlueWidget, WhiteWidget } from '../../../../assets/WidgetStyles';

export const MAX_SELECTION = 3;

export const CHARITIES = GetCharities(import.meta.env.BASE_URL);

export const PLACEMENT_OPTIONS: Array<{
  label: string;
  placement: WidgetPlacement;
  image: FC<any>;
}> = [
  {
    label: 'Top Left',
    placement: 'top-left',
    image: TopLeft,
  },
  {
    label: 'Top Middle',
    placement: 'top-middle',
    image: TopMiddle,
  },
  {
    label: 'Top Right',
    placement: 'top-right',
    image: TopRight,
  },
  {
    label: 'Bottom Left',
    placement: 'bottom-left',
    image: BottomLeft,
  },
  {
    label: 'Bottom Middle',
    placement: 'bottom-middle',
    image: BottomMiddle,
  },
  {
    label: 'Bottom Right',
    placement: 'bottom-right',
    image: BottomRight,
  },
];

export const WIDGET_STYLES: Array<{
  style: WidgetStyle;
  image: FC<any>;
}> = [
  {
    style: 'blue',
    image: BlueWidget,
  },
  {
    style: 'black',
    image: BlackWidget,
  },
  {
    style: 'white',
    image: WhiteWidget,
  },
];
