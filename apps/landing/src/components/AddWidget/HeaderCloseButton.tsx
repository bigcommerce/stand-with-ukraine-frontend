import { ButtonLink, CloseButton } from '../Button';

import { IframeWidgetContext } from './WidgetFrameContext';

export default function HeaderCloseButton() {
  return (
    <IframeWidgetContext.Consumer>
      {({ setWidgetOpen, widgetOpen }) =>
        widgetOpen ? (
          <CloseButton onClick={() => setWidgetOpen(false)} variant="light">
            Close
          </CloseButton>
        ) : null
      }
    </IframeWidgetContext.Consumer>
  );
}
