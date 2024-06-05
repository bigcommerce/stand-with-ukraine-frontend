import styled from 'styled-components';

import { breakpoints } from '../../helpers';

import CloseSVG from './close-button.svg';
import { ConfigureWidgetContext } from './ConfigureWidgetContext';

const CloseButton = styled.a`
  position: fixed;
  right: 1rem;
  top: 4.5rem;
  z-index: 11001;
  cursor: pointer;
  height: 2rem;
  width: 2rem;

  & img {
    height: 100%;
    width: 100%;
  }

  ${breakpoints.tablet} and (orientation: portrait) {
    top: calc(10% + 4.5rem);
    right: 4rem;
    height: 2.5rem;
    width: 2.5rem;
  }

  ${breakpoints.desktop} {
    top: calc(10% + 4.5rem);
    right: 4rem;
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export default function ConfigureWidgetCloseButton() {
  return (
    <ConfigureWidgetContext.Consumer>
      {({ setWidgetOpen, widgetOpen }) =>
        widgetOpen ? (
          <CloseButton onClick={() => setWidgetOpen(false)}>
            <img alt="Close Button" src={CloseSVG} />
          </CloseButton>
        ) : null
      }
    </ConfigureWidgetContext.Consumer>
  );
}
