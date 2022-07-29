export type WidgetConfiguration = {
  style: WidgetStyle;
  placement: WidgetPlacement;
  charity_selections: string[];
  modal_title: string;
  modal_body: string;
  store_hash: string;
};

export type WidgetStyle = 'blue' | 'black' | 'white';
export type WidgetPlacement =
  | 'top-left'
  | 'top-middle'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-middle'
  | 'bottom-right';

export type Charity = {
  id: string;
  logoProps: {
    alt: string;
    src: string;
  };
  name: string;
  description: string;
  donationLink: string;
};
