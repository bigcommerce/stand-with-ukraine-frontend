import CharityList from "config/charities.json";
import DefaultData from "config/default.json";

export const STORAGE_KEYS = {
  WIDGET: "SWU_WIDGET",
  WIDGET_ANIMATION: "SWU_WIDGET_ANIMATION",
};

export const STORAGE_STATUSES = {
  ENABLED: "ENABLED",
  DISABLED: "DISABLED",
  COLLAPSED: "COLLAPSED",
};

const SWU_CONFIG = (window as any)?.SWU_CONFIG;

export const MODAL = {
  title: SWU_CONFIG?.modal_title ?? DefaultData.modal_title,
  description: SWU_CONFIG?.modal_body ?? DefaultData.modal_body,
  style: SWU_CONFIG?.style ?? DefaultData.style,
  placement: SWU_CONFIG?.placement ?? DefaultData.placement,
  charities: SWU_CONFIG?.charity_selections ?? DefaultData.charity_selections,
  img: {
    alt: "Ukraine photo",
    src: `public/assets/images/background.png`,
  },
};

export const CHARITY_LIST = CharityList;
