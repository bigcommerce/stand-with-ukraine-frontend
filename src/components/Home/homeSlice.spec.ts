import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import counterReducer, { loadStore } from './homeSlice';
import { fetchStoreData } from './homeAPI';

jest.mock('./homeAPI.ts', () => ({
  fetchStoreData: jest.fn(),
}));

describe('counter reducer', () => {
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' }))
      .toMatchInlineSnapshot(`
Object {
  "published": false,
  "status": "idle",
}
`);
  });
});

describe('loadStore async action', () => {
  let dispatch: Dispatch;
  let action: AsyncThunkAction<{ published: boolean }, void, {}>;
  let getState: () => unknown;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
    action = loadStore();
    (fetchStoreData as jest.Mock).mockClear();
    (fetchStoreData as jest.Mock).mockResolvedValue({ published: true });
  });

  afterAll(() => {
    jest.unmock('./homeAPI.ts');
  });

  it('should handle load', async () => {
    await action(dispatch, getState, undefined);
    expect(fetchStoreData).toHaveBeenCalled();
  });
});
