import { vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';

const fetchMock = createFetchMock(vi);

fetchMock.enableMocks();
// disable fetch mock unless test explicitly calls fetchMock.doMock()
fetchMock.dontMock();
