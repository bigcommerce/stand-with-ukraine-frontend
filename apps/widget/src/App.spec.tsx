import { render, screen, waitFor } from '@testing-library/preact';
import { h } from 'preact';
import { describe, expect, it } from 'vitest';

import App, { createProdContainer, getDevContainer } from './App';

describe('App', () => {
  it('renders learn preact app', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Help the people of Ukraine!')).toBeDefined();
    });
  });
});

describe('devContainer', () => {
  it('should get app container for dev environment', async () => {
    const div = document.createElement('div');

    div.setAttribute('id', 'swu');
    document.body.appendChild(div);

    const container = getDevContainer();

    expect(container).toBeDefined();
    expect(container.id).toBe('swu');
  });
});

describe('createProdContainer', () => {
  it('should create the div inside the document', async () => {
    const container = createProdContainer();

    expect(container).toBeDefined();
    expect(container.id).toBe('swu');
  });
});
