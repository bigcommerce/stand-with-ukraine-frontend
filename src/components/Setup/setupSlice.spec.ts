import counterReducer, {
  SetupState,
  nextStep,
  previousStep,
  setWidgetStyle,
} from './setupSlice';

describe('counter reducer', () => {
  const initialState: SetupState = {
    currentStep: 3,
    status: 'idle',
    showFooter: false,
    showFooterBackButton: true,
    showFooterContinueButton: true,

    widgetStyle: 'black',
    widgetCharitySelections: { entity_1: true },
    widgetLayout: 'top-left',
    widgetModalBody: 'Test Body',
    widgetModalTitle: 'Test Title',
  };

  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' }))
      .toMatchInlineSnapshot(`
Object {
  "currentStep": 0,
  "status": "idle",
  "widgetCharitySelections": Object {},
  "widgetLayout": "bottom-right",
  "widgetModalBody": "We created this project to provide urgent help and support in face of an extreme and unforeseen situation in Ukraine. Today, the sovereign nation of Ukraine has to deal with the most horrendous and catastrophic emergency – a brutal invasion. Razom is responding to this by providing critical medical supplies and amplifying the voices of Ukrainians. ",
  "widgetModalTitle": "Let's support Ukraine!",
  "widgetStyle": "blue",
}
`);
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, nextStep());
    expect(actual.currentStep).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, previousStep());
    expect(actual.currentStep).toEqual(2);
  });
});
