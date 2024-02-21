import { ReactNode, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { breakpoints } from '../../helpers';

import ConfigureWidgetCloseButton from './ConfigureWidgetCloseButton';
import { ConfigureWidgetContext } from './ConfigureWidgetContext';

const IFrame = styled.iframe`
  flex: 1 0 auto;
  background: #fff;
  width: 100vw;
  height: 100vh;
  z-index: 11000;
  position: fixed;
  top: 0;
  left: 0;

  ${breakpoints.tablet} and (orientation: portrait) {
    height: 80vh;
    top: 10%;
  }

  ${breakpoints.desktop} {
    height: 80vh;
    top: 10%;
  }
`;

const IframeOverlay = styled.div`
  display: block;
  height: 100vh;
  width: 100vw;
  z-index: 10050;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
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
      <ConfigureWidgetCloseButton />
      <IFrame
        frameBorder="0"
        ref={iframeRef}
        src="/dashboard/?token=universal.installer.stand-with-ukraine"
      />
    </>
  );
}

export default function ConfigureWidgetFrame({ children }: { children: ReactNode }) {
  return (
    <ConfigureWidgetContext.Consumer>
      {({ widgetOpen }) => (
        <>
          {widgetOpen ? <WidgetWrapper /> : children}
          <IframeGlobalStyle frameOpen={widgetOpen} />
        </>
      )}
    </ConfigureWidgetContext.Consumer>
  );
}

const IframeGlobalStyle = createGlobalStyle<{ frameOpen: boolean }>`
    body {
        // overflow: ${({ frameOpen }) => (frameOpen ? 'hidden' : 'unset')};
    }
`;
