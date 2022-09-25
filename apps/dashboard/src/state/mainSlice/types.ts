import type { WidgetConfiguration } from 'config/types';

export type LoadingState = 'idle' | 'loading' | 'failed';

export interface MainState {
  status: LoadingState;
  step: number;
  published: boolean;
  storeUrl?: string;
  showRemoveDialog: boolean;
  footer: {
    show: boolean;
    cancelButton: {
      show: boolean;
      disabled: boolean;
    };
    backButton: {
      show: boolean;
      disabled: boolean;
    };
    continueButton: {
      show: boolean;
      disabled: boolean;
    };
    publishButton: {
      show: boolean;
      disabled: boolean;
    };
  };
  widgetConfiguration: WidgetConfiguration;
}
