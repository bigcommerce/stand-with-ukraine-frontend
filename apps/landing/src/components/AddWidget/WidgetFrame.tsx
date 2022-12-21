import styled, { createGlobalStyle } from 'styled-components';

import { IframeWidgetContext } from './WidgetFrameContext';

const IFrame = styled.iframe`
  flex: 1 0 auto;
  background: #fff;
`;

export default function WidgetFrame() {
  return (
    <IframeWidgetContext.Consumer>
      {({ widgetOpen }) => (
        <>
          {widgetOpen ? (
            <IFrame
              frameBorder="0"
              src="/dashboard/?token=universal.installer.stand-with-ukraine"
            />
          ) : null}
          <IframeGlobalStyle frameOpen={widgetOpen} />
        </>
      )}
    </IframeWidgetContext.Consumer>
  );
}

const IframeGlobalStyle = createGlobalStyle<{ frameOpen: boolean }>`
    body {
        overflow: ${({ frameOpen }) => (frameOpen ? 'hidden' : 'unset')};
    }
`;
