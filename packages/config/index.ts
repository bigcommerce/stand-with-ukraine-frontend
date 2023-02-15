import { WidgetConfiguration } from './types';

export const DEFAULT_CONFIG: WidgetConfiguration = {
  style: 'blue',
  placement: 'bottom-right',
  charity_selections: ['razom', 'new-ukraine', 'mira-action'],
  modal_title: 'Help the people of Ukraine!',
  modal_body:
    'With each day, the war in Ukraine worsens at an alarming pace. Millions of civilians have lost their homes and many more are without basic necessities like food, water, and health care. Consider donating to one of the charities below and join us in showing support for Ukraine. All charities are trusted, non-profit organizations dedicated to Ukrainian relief efforts. It takes less than a minute.',
  store_hash: 'universal',
};
