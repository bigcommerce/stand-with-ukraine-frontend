import styled from 'styled-components';
import { IframeWidgetContext } from './WidgetFrameContext';

import CloseSVG from './close-button.svg'

const CloseButton = styled.a`
  position: fixed;
  right: 1.5rem;
  top: calc(15% + 1.5rem);
  z-index: 9;
  cursor: pointer;
`;

export default function HeaderCloseButton() {
  return (
    <IframeWidgetContext.Consumer>
      {({ setWidgetOpen, widgetOpen }) =>
        widgetOpen ? (
          <CloseButton onClick={() => setWidgetOpen(false)}>
            <img src={CloseSVG} alt="Close Button" />
          </CloseButton>
        ) : null
      }
    </IframeWidgetContext.Consumer>
  );
}
