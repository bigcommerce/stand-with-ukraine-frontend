import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectFooter } from './Setup/setupSlice';

const FooterDiv = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 68px;
  width: 100%;

  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(49, 52, 64, 0.2);
`;

export default function Footer() {
  const { show, backButton, continueButton } = useAppSelector(selectFooter);

  return show ? <FooterDiv>Test</FooterDiv> : null;
}
