import counterReducer, {
  SetupState,
  nextStep,
  previousStep,
} from './setupSlice';

describe('counter reducer', () => {
  const initialState: SetupState = {
    steps: {
      currentStep: 3,
      status: 'idle',
    },
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
      charitySelections: { entity_1: true },
      placement: 'top-left',
      modalBody: 'Test Body',
      modalTitle: 'Test Title',
    },
  };

  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).
toMatchInlineSnapshot(`
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
    "charitySelections": Object {
      "new-ukraine": true,
      "razom": true,
      "unicef": true,
    },
    "modalBody": "We created this project to provide urgent help and support in face of an extreme and unforeseen situation in Ukraine. Today, the sovereign nation of Ukraine has to deal with the most horrendous and catastrophic emergency – a brutal invasion. Razom is responding to this by providing critical medical supplies and amplifying the voices of Ukrainians. ",
    "modalTitle": "Let's support Ukraine!",
    "placement": "bottom-right",
    "style": "blue",
  },
}
`);
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, nextStep());
    expect(actual.steps.currentStep).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, previousStep());
    expect(actual.steps.currentStep).toEqual(2);
  });
});
