import { DEFAULT_CONFIG } from 'config';
import { GetCharities } from 'config/charities';
import type { WidgetConfiguration } from 'config/types';

import { getBaseURL } from './utils/baseUrl';

export const STORAGE_KEYS = {
  WIDGET: 'SWU_WIDGET',
  WIDGET_ANIMATION: 'SWU_WIDGET_ANIMATION',
};

export const STORAGE_STATUSES = {
  ENABLED: 'ENABLED',
  DISABLED: 'DISABLED',
  COLLAPSED: 'COLLAPSED',
};

const SWU_CONFIG: WidgetConfiguration = Object.assign(
  {},
  DEFAULT_CONFIG,
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions,@typescript-eslint/no-unsafe-member-access
  (window as any)?.SWU_CONFIG ?? null,
);

export const MODAL = {
  title: SWU_CONFIG.modal_title,
  description: SWU_CONFIG.modal_body,
  style: SWU_CONFIG.style,
  placement: SWU_CONFIG.placement,
  charities: SWU_CONFIG.charity_selections,
  img: {
    alt: 'Ukraine photo',
    src: `${getBaseURL()}assets/images/background.png`,
  },
};

export const STORE_HASH = SWU_CONFIG.store_hash;

export const CHARITIES = GetCharities(getBaseURL());
