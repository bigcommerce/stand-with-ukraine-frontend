import Unicef from './Unicef.png';
import NewUkraine from './NewUkraine.png';
import Razom from './Razom.png';
import styled from 'styled-components';

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
