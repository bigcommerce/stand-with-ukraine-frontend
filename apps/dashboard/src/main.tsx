import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// eslint-disable-next-line import/no-named-as-default-member,@typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('stand-with-ukraine')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
