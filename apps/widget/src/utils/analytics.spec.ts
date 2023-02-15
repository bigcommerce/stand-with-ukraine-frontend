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

  it(`should send events using 'universal' STORE_HASH when unset`, () => {
    expect(fetchMock.mock.calls.length).toEqual(0);

    analytics.trackModalStatus(true);

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.lastCall?.[0]?.toString().includes('universal'));
  });
});
