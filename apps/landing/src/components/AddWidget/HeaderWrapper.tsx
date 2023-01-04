import styled from 'styled-components';

import { IframeWidgetContext } from './WidgetFrameContext';

const Wrapper = styled.div.attrs((props: { open: boolean }) => props)`
  display: flex;
  position: fixed;
  z-index: 10;
  flex-direction: column;
  width: 100%;
  height: ${({ open }) => (open ? '100vh' : 'auto')};
`;

export default function HeaderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <IframeWidgetContext.Consumer>
      {({ widgetOpen }) => <Wrapper open={false}>{children}</Wrapper>}
    </IframeWidgetContext.Consumer>
  );
}
