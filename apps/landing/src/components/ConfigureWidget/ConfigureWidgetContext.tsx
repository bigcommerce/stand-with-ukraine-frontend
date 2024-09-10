import { createContext, ReactNode, useState } from 'react';

export const ConfigureWidgetContext = createContext<{
  widgetOpen: boolean;
  setWidgetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  widgetOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setWidgetOpen: () => {},
});

export function ConfigureWidgetProvider({ children }: { readonly children: ReactNode }) {
  const [widgetOpen, setWidgetOpen] = useState(false);

  return (
    <ConfigureWidgetContext.Provider
      value={{
        widgetOpen,
        setWidgetOpen,
      }}
    >
      {children}
    </ConfigureWidgetContext.Provider>
  );
}
