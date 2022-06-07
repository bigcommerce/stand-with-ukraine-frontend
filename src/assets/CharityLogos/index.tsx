import styled from 'styled-components';

import NewUkraine from './NewUkraine.png';
import Razom from './Razom.png';
import Unicef from './Unicef.png';
import MiraAction from './MiraAction.png';

const Image = styled.img`
  height: 70px;
  width: 70px;
`;

export const UnicefLogoProps = {
  src: Unicef,
  alt: 'Unicef Logo',
};
export function UnicefLogo() {
  return <Image {...UnicefLogoProps} />;
}

export const RazomLogoProps = {
  src: Razom,
  alt: 'Razom Logo',
};
export function RazomLogo() {
  return <Image {...RazomLogoProps} />;
}

export const NewUkraineLogoProps = {
  src: NewUkraine,
  alt: 'New Ukraine Logo',
};
export function NewUkraineLogo() {
  return <Image {...NewUkraineLogoProps} />;
}

export const MiraActionLogoProps = {
  src: MiraAction,
  alt: 'Mira Action Logo',
};
export function MiraActionLogo() {
  return <Image {...MiraActionLogoProps} />;
}
