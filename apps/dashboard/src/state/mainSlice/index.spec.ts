import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { beforeEach, describe, expect, it, vi } from 'vitest';

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
      store_hash: 'universal',
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
          "store_hash": "universal",
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
  const dispatch: Dispatch = vi.fn();
  // eslint-disable-next-line @typescript-eslint/ban-types
  let action: AsyncThunkAction<{ published: boolean }, void, {}>;
  const getState: () => unknown = vi.fn();

  beforeEach(() => {
    action = loadStatus();
    fetchMock.doMock();
    vi.resetAllMocks();
    fetchMock.mockResponse(JSON.stringify({ published: true }));
  });

  it('should handle load', async () => {
    await action(dispatch, getState, undefined);
    expect(global.fetch).toHaveBeenCalled();
  });
});
