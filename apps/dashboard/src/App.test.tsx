import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import App from './App';

it('renders learn react link', async () => {
  render(<App />);

  await waitFor(() => {
    const linkElement = screen.getByText(/Your authentication token is Invalid./i);

    expect(linkElement).toBeDefined();
  });
});
