import { Charity } from './types';

const CHARITIES: Charity[] = [
  {
    id: 'razom',
    logoProps: {
      alt: 'Razom logo',
      src: '/assets/images/razom.png',
    },
    name: 'Razom',
    description:
      'Razom, which means “together” in Ukrainian is providing critical humanitarian aid and recovery devices for Ukrainian people. We are focused on delivering medicine items, hospital supplies, and tech enabled emergency response supplies that facilitate the delivery of this aid. We send on average more than 70 pallets of aid to Ukraine each week. In the first month of the war, we shipped over 218 tons of supplies.',
    donationLink:
      'https://razomforukraine.humanitru.com/donate?amount=100&options=1000%2C500%2C250%2C100%2C50%2C25&ach=show',
  },
  {
    id: 'new-ukraine',
    logoProps: {
      alt: 'New Ukraine logo',
      src: '/assets/images/new-ukraine.png',
    },
    name: 'New Ukraine',
    description:
      "Nova Ukraine is a registered nonprofit organization dedicated to providing humanitarian aid to Ukraine and raising awareness about Ukraine in the United States as well as in the rest of the world. Through your generous donations, we fund a variety of efforts to help the people of Ukraine and to strengthen Ukraine's democratic society.",
    donationLink: 'https://donorbox.org/crisis-in-ukraine-donate-now-3',
  },
  {
    id: 'mira-action',
    logoProps: {
      alt: 'Mira Action logo',
      src: '/assets/images/mira-action.png',
    },
    name: 'Mira Action',
    description:
      'Mira Action Inc. specializes in raising funds to purchase and deliver fully-equipped ambulances and medical supplies to Ukrainian hospitals and ER centers.',
    donationLink: 'https://miraaction.org/collections/medical-supplies',
  },
  {
    id: 'unicef',
    logoProps: {
      alt: 'UNICEF logo',
      src: '/assets/images/unicef.png',
    },
    name: 'UNICEF',
    description:
      'UNICEF is providing life-saving help to children inside Ukraine and in neighboring countries. This includes: \n- Providing lifesaving supplies such as water and hygiene kits, medicines, warm clothes and blanket \n- First-aid kits, surgical kits, and oxygen concentrators to those affected by the violence.',
    donationLink: 'https://help.unicef.org/ukraine-emergency',
  },
];

export function GetCharities(baseURL: string): Charity[] {
  return CHARITIES.map((charity) => ({
    ...charity,
    icon: {
      ...charity.logoProps,
      src: `${baseURL}${charity.logoProps.src}`,
    },
  }));
}
