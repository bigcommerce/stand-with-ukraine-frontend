import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';

import { fetchStoreStatus } from './mainApi';
import mainReducer, {
  loadStatus,
  MainState,
  nextStep,
  previousStep,
} from './mainSlice';

jest.mock('./mainApi.ts', () => ({
  fetchStoreStatus: jest.fn(),
}));

describe('counter reducer', () => {
  const initialState: MainState = {
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
    },
  };

  it('should handle initial state', () => {
    expect(mainReducer(undefined, { type: 'unknown' })).toMatchInlineSnapshot(`
Object {
  "footer": Object {
    "backButton": Object {
      "disabled": false,
      "show": false,
    },
    "cancelButton": Object {
      "disabled": false,
      "show": false,
    },
    "continueButton": Object {
      "disabled": false,
      "show": false,
    },
    "publishButton": Object {
      "disabled": false,
      "show": false,
    },
    "show": false,
  },
  "steps": Object {
    "currentStep": 0,
    "status": "idle",
  },
  "widgetConfiguration": Object {
    "charity_selections": Array [
      "razom",
      "unicef",
      "new-ukraine",
    ],
    "modal_body": "With each day, the war in Ukraine worsens at an alarming pace. Millions of civilians have lost their homes and many more are without basic necessities like food, water, and health care. Consider donating to one of the charities below and join us in showing support for Ukraine. All charities are trusted, non-profit organizations dedicated to Ukrainian relief efforts. It takes less than a minute.",
    "modal_title": "Help the people of Ukraine!",
    "placement": "bottom-right",
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
  let action: AsyncThunkAction<{ published: boolean }, void, {}>;
  let getState: () => unknown;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
    action = loadStatus();
    (fetchStoreStatus as jest.Mock).mockClear();
    (fetchStoreStatus as jest.Mock).mockResolvedValue({ published: true });
  });

  afterAll(() => {
    jest.unmock('./mainApi.ts');
  });

  it('should handle load', async () => {
    await action(dispatch, getState, undefined);
    expect(fetchStoreStatus).toHaveBeenCalled();
  });
});
