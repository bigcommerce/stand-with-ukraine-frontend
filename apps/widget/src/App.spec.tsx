import { h } from 'preact';
import { it } from 'vitest';

import { render, screen } from '@testing-library/preact';

import App from './App';

it('renders learn preact app', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
