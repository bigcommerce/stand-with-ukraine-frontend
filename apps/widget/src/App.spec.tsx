import { h } from 'preact';
import { expect, it } from 'vitest';

import { render, screen, waitFor } from '@testing-library/preact';

import App from './App';

it('renders learn preact app', async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('Help the people of Ukraine!')).toBeDefined();
  });
});
