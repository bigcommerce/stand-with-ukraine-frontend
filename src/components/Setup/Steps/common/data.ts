import {
  ComeBackAlive,
  NewUkraine,
  Razom,
} from '../../../../assets/CharityLogos';
import {
  BottomLeft,
  BottomMiddle,
  BottomRight,
  TopLeft,
  TopMiddle,
  TopRight,
} from '../../../../assets/WidgetPlacement';
import {
  BlackWidgetStyleSVG,
  BlueWidgetStyleSVG,
  WhiteWidgetStyleSVG,
} from '../../../../assets/WidgetStyles';
import { WidgetPlacement, WidgetStyle } from '../../setupSlice';

export const MAX_SELECTION = 3;
export const CHARITIES: {
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

export const PLACEMENT_OPTIONS: {
  label: string;
  placement: WidgetPlacement;
  image: React.FunctionComponent<any>;
}[] = [
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

export const WIDGET_STYLES: {
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
