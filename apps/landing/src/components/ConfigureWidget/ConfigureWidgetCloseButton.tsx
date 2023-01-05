import styled from 'styled-components';

import CloseSVG from './close-button.svg';
import { ConfigureWidgetContext } from './ConfigureWidgetContext';

const CloseButton = styled.a`
  position: fixed;
  right: 1.5rem;
  top: calc(15% + 1.5rem);
  z-index: 11001;
  cursor: pointer;
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
