import { beforeEach, describe, expect, it, vi } from 'vitest';

import { analytics } from './analytics';

vi.mock('../constants.ts', async () => {
  const orig: any = Object.assign({}, await vi.importActual('../constants.ts'));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  orig.STORE_HASH = null;

  return orig;
});

describe('Analytics', () => {
  beforeEach(() => {
    fetchMock.doMock();
    fetchMock.resetMocks();
  });

  it('should not send events because STORE_HASH is unset', () => {
    expect(fetchMock.mock.calls.length).toEqual(0);

    analytics.trackModalStatus(true);

    expect(fetchMock.mock.calls.length).toEqual(0);
  });
});
