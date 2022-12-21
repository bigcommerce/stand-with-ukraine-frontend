import { createContext, ReactNode, useState } from 'react';

export const IframeWidgetContext = createContext<{
  widgetOpen: boolean;
  setWidgetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  widgetOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setWidgetOpen: () => {},
});

export function WidgetStateProvider({ children }: { children: ReactNode }) {
  const [widgetOpen, setWidgetOpen] = useState(false);

  return (
    <IframeWidgetContext.Provider
      value={{
        widgetOpen,
        setWidgetOpen,
      }}
    >
      {children}
    </IframeWidgetContext.Provider>
  );
}
