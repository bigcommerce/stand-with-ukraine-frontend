import type { MainState } from './types';

export function getButtonStateFromPayload(payload: Partial<{ show: boolean; disabled: boolean }>) {
  return {
    show: Boolean(payload.show),
    disabled: Boolean(payload.disabled),
  };
}

export function handleLoadingState(state: MainState) {
  state.status = 'loading';
}

export const Steps = ['Color', 'Layout', 'Charity', 'Pop-Up'];
