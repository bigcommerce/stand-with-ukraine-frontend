import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import counterReducer, { loadStatus } from './homeSlice';
import { fetchStoreStatus } from './homeAPI';

jest.mock('./homeAPI.ts', () => ({
  fetchStoreStatus: jest.fn(),
}));

describe('counter reducer', () => {
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' }))
      .toMatchInlineSnapshot(`
Object {
  "published": false,
  "showRemoveDialog": false,
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
    action = loadStatus();
    (fetchStoreStatus as jest.Mock).mockClear();
    (fetchStoreStatus as jest.Mock).mockResolvedValue({ published: true });
  });

  afterAll(() => {
    jest.unmock('./homeAPI.ts');
  });

  it('should handle load', async () => {
    await action(dispatch, getState, undefined);
    expect(fetchStoreStatus).toHaveBeenCalled();
  });
});
