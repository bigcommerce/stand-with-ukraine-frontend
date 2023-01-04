import { ButtonLink } from '../Button';

import { IframeWidgetContext } from './WidgetFrameContext';

export default function WidgetFrameButton() {
  return (
    <IframeWidgetContext.Consumer>
      {({ setWidgetOpen }) => (
        <ButtonLink onClick={() => setWidgetOpen(true)} variant="light">
          Select
        </ButtonLink>
      )}
    </IframeWidgetContext.Consumer>
  );
}
