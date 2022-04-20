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
      backButton: {
        show: true,
        disabled: true,
      },
      continueButton: {
        show: false,
        disabled: true,
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
    expect(
      counterReducer(undefined, { type: 'unknown' })
    ).toMatchInlineSnapshot();
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
