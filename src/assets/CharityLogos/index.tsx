import Unicef from './Unicef.png';
import NewUkraine from './NewUkraine.png';
import Razom from './Razom.png';
import styled from 'styled-components';

const Image = styled.img`
  height: 70px;
  width: 70px;
`;

export function UnicefLogo() {
  return <Image src={Unicef} alt="Unicef Logo" />;
}

export function RazomLogo() {
  return <Image src={Razom} alt="Razom Logo" />;
}
export function NewUkraineLogo() {
  return <Image src={NewUkraine} alt="New Ukraine Logo" />;
}
