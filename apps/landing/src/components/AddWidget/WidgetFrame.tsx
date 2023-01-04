import { ReactNode, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderCloseButton from './HeaderCloseButton';

import { IframeWidgetContext } from './WidgetFrameContext';

const IFrame = styled.iframe`
  flex: 1 0 auto;
  background: #fff;
  width: 100vw;
  height: 80vh;
  z-index: 7;
  position: fixed;
  top: 15%;
  left: 0;
`;

const IframeOverlay = styled.div`
  display: block;
  height: 100vh;
  width: 100vw;
  z-index: 5;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0
`;

function WidgetWrapper() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    if (iframeRef.current !== null) {
      iframeRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center',
      });
    }
  }, [iframeRef]);

  return (
    <>
      <IframeOverlay />
      <HeaderCloseButton/>
      <IFrame
        ref={iframeRef}
        frameBorder="0"
        src="/dashboard/?token=universal.installer.stand-with-ukraine"
      />
    </>
  );
}

export default function WidgetFrame({ children }: { children: ReactNode }) {
  return (
    <IframeWidgetContext.Consumer>
      {({ widgetOpen }) => (
        <>
          {widgetOpen ? <WidgetWrapper /> : children}
          <IframeGlobalStyle frameOpen={widgetOpen} />
        </>
      )}
    </IframeWidgetContext.Consumer>
  );
}

const IframeGlobalStyle = createGlobalStyle<{ frameOpen: boolean }>`
    body {
        // overflow: ${({ frameOpen }) => (frameOpen ? 'hidden' : 'unset')};
    }
`;
