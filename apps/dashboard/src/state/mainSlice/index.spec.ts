import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { afterAll, beforeAll, beforeEach, describe, expect, it, SpyInstance, vi } from 'vitest';

import { fetchStoreStatus } from './api';
import { loadStatus } from './asyncActions';
import type { MainState } from './types';

import mainReducer, { nextStep, previousStep } from '.';

describe('counter reducer', () => {
  const initialState: MainState = {
    installerType: 'bigcommerce',
    showRemoveDialog: false,
    published: false,
    status: 'idle',
    step: 3,
    footer: {
      show: false,
      cancelButton: {
        show: false,
        disabled: false,
      },
      backButton: {
        show: true,
        disabled: true,
      },
      continueButton: {
        show: false,
        disabled: true,
      },
      publishButton: {
        show: false,
        disabled: false,
      },
    },

    widgetConfiguration: {
      style: 'black',
      charity_selections: ['entity_1'],
      placement: 'top-left',
      modal_body: 'Test Body',
      modal_title: 'Test Title',
      store_hash: 'test_hash',
    },
  };

  it('should handle initial state', () => {
    expect(mainReducer(undefined, { type: 'unknown' })).toMatchInlineSnapshot(`
      {
        "footer": {
          "backButton": {
            "disabled": false,
            "show": false,
          },
          "cancelButton": {
            "disabled": false,
            "show": false,
          },
          "continueButton": {
            "disabled": false,
            "show": false,
          },
          "publishButton": {
            "disabled": false,
            "show": false,
          },
          "show": false,
        },
        "installerType": "bigcommerce",
        "published": false,
        "showRemoveDialog": false,
        "status": "idle",
        "step": 0,
        "storeUrl": undefined,
        "widgetConfiguration": {
          "charity_selections": [
            "razom",
            "new-ukraine",
            "mira-action",
          ],
          "modal_body": "With each day, the war in Ukraine worsens at an alarming pace. Millions of civilians have lost their homes and many more are without basic necessities like food, water, and health care. Consider donating to one of the charities below and join us in showing support for Ukraine. All charities are trusted, non-profit organizations dedicated to Ukrainian relief efforts. It takes less than a minute.",
          "modal_title": "Help the people of Ukraine!",
          "placement": "bottom-right",
          "store_hash": "test_hash",
          "style": "blue",
        },
      }
    `);
  });

  it('should handle increment', () => {
    const actual = mainReducer(initialState, nextStep());

    expect(actual.step).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = mainReducer(initialState, previousStep());

    expect(actual.step).toEqual(2);
  });
});

describe('loadStore async action', () => {
  let dispatch: Dispatch;
  // eslint-disable-next-line @typescript-eslint/ban-types
  let action: AsyncThunkAction<{ published: boolean }, void, {}>;
  let getState: () => unknown;

  beforeAll(() => {
    vi.mock('./api.ts', async () => {
      const actual: any = await vi.importActual('./api.ts');
      return {
        ...actual,
        fetchStoreStatus: vi.fn(),
      };
    });
  });

  beforeEach(() => {
    dispatch = vi.fn();
    getState = vi.fn();
    action = loadStatus();

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    (fetchStoreStatus as unknown as SpyInstance).mockClear().mockResolvedValue({ published: true });
  });

  afterAll(() => {
    vi.unmock('./api.ts');
  });

  it('should handle load', async () => {
    await action(dispatch, getState, undefined);
    expect(fetchStoreStatus).toHaveBeenCalled();
  });
});
