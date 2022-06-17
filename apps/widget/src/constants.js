export const STORAGE_KEYS = {
  WIDGET: 'SWU_WIDGET',
  WIDGET_ANIMATION: 'SWU_WIDGET_ANIMATION',
};

export const STORAGE_STATUSES = {
  ENABLED: 'ENABLED',
  DISABLED: 'DISABLED',
};

export const MODAL = {
  title: window?.SWU_CONFIG?.modal_title ?? 'Help the people of Ukraine!',
  description: window?.SWU_CONFIG?.modal_body ?? 'Right now Ukraine is experiencing a tragic, unlawful, and unjustified invasion. Every day people suffer. We want to support them in their desire for freedom and independence. All charities are trusted, non-profit organizations dedicated to Ukrainian relief efforts.',
  img: {
    alt: 'Ukraine photo',
    src: 'https://swu-app-yboxh.ondigitalocean.app/widget/images/background.png',
  },
};

export const CHARITY_LIST = [
  {
    id: 'razom',
    icon: {
      alt: 'Razom logo',
      src: 'https://swu-app-yboxh.ondigitalocean.app/widget/images/razom.png'
    },
    title: 'Razom',
    content: 'Razom, which means “together” in Ukrainian is providing critical humanitarian aid and recovery devices for Ukrainian people. We are focused on delivering medicine items, hospital supplies, and tech enabled emergency response supplies that facilitate the delivery of this aid. We send on average more than 70 pallets of aid to Ukraine each week. In the first month of the war, we shipped over 218 tons of supplies.',
    link: 'https://razomforukraine.humanitru.com/donate?amount=100&options=1000%2C500%2C250%2C100%2C50%2C25&ach=show',
  },
  {
    id: 'new-ukraine',
    icon: {
      alt: 'New Ukraine logo',
      src: 'https://swu-app-yboxh.ondigitalocean.app/widget/images/new-ukraine.png'
    },
    title: 'New Ukraine',
    content: 'Nova Ukraine is a registered nonprofit organization dedicated to providing humanitarian aid to Ukraine and raising awareness about Ukraine in the United States as well as in the rest of the world. Through your generous donations, we fund a variety of efforts to help the people of Ukraine and to strengthen Ukraine\'s democratic society.',
    link: 'https://donorbox.org/crisis-in-ukraine-donate-now-3',
  },
  {
    id: 'unicef',
    icon: {
      alt: 'UNICEF logo',
      src: 'https://swu-app-yboxh.ondigitalocean.app/widget/images/unicef.png'
    },
    title: 'UNICEF',
    content: 'UNICEF is providing life-saving help to children inside Ukraine and in neighbouring countries. This includes: \n- Providing lifesaving supplies such as water and hygiene kits, medicines, warm clothes and blanket \n- First-aid kits, surgical kits, and oxygen concentrators to those affected by the violence.',
    link: 'https://help.unicef.org/ukraine-emergency',
  },
];
