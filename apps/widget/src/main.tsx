import { render } from 'preact';

import App from './App';
import { getBaseURL } from './utils/baseUrl';

function getAppDiv() {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return document.getElementById('swu') as HTMLDivElement;
  }

  const app = document.createElement('div');

  app.setAttribute('id', 'swu');

  const link = document.createElement('link');

  link.href = `${getBaseURL()}style.css`;
  link.type = 'text/css';
  link.rel = 'stylesheet';

  document.body.append(link);
  document.body.append(app);

  return app;
}

render(<App />, getAppDiv());
