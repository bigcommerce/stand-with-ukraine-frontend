import {
  NewUkraineLogo,
  NewUkraineLogoProps,
  RazomLogo,
  RazomLogoProps,
  MiraActionLogo,
  MiraActionLogoProps,
  UnicefLogo,
  UnicefLogoProps,
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
  BlackWidget,
  BlueWidget,
  WhiteWidget,
} from '../../../../assets/WidgetStyles';
import { WidgetPlacement, WidgetStyle } from '../../../../state/mainSlice';

export const MAX_SELECTION = 3;
export interface CharityItem {
  identifier: string;
  name: string;
  image: React.FunctionComponent;
  imageProps: { alt: string; src: any };
  description: string;
  link: string;
}
export const CHARITIES: CharityItem[] = [
  {
    identifier: 'razom',
    name: 'Razom',
    image: RazomLogo,
    imageProps: RazomLogoProps,
    description: `Razom, which means “together” in Ukrainian is providing critical humanitarian aid and recovery devices for Ukrainian people. We are focused on delivering medicine items, hospital supplies, and tech enabled emergency response supplies that facilitate the delivery of this aid. We send on average more than 70 pallets of aid to Ukraine each week. In the first month of the war, we shipped over 218 tons of supplies.`,
    link: 'https://razomforukraine.humanitru.com/donate?amount=100&options=1000%2C500%2C250%2C100%2C50%2C25&ach=show',
  },
  {
    identifier: 'new-ukraine',
    name: 'Nova Ukraine',
    image: NewUkraineLogo,
    imageProps: NewUkraineLogoProps,
    description: `Nova Ukraine is a registered nonprofit organization dedicated to providing humanitarian aid to Ukraine and raising awareness about Ukraine in the United States as well as in the rest of the world. Through your generous donations, we fund a variety of efforts to help the people of Ukraine and to strengthen Ukraine's democratic society.`,
    link: 'https://donorbox.org/crisis-in-ukraine-donate-now-3',
  },
  {
    identifier: 'mira-action',
    name: 'Mira Action',
    image: MiraActionLogo,
    imageProps: MiraActionLogoProps,
    description: `Mira Action Inc. specializes in raising funds to purchase and deliver fully-equipped ambulances and medical supplies to Ukrainian hospitals and ER centers.`,
    link: 'https://miraaction.org/collections/medical-supplies',
  },
  {
    identifier: 'unicef',
    name: 'UNICEF',
    image: UnicefLogo,
    imageProps: UnicefLogoProps,
    description: `UNICEF is providing life-saving help to children inside Ukraine and in neighboring countries. This includes: \n- Providing lifesaving supplies such as water and hygiene kits, medicines, warm clothes and blankets \n- First-aid kits, surgical kits, and oxygen concentrators to those affected by the violence.`,
    link: 'https://help.unicef.org/ukraine-emergency',
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
