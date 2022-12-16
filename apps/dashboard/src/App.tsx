import { AlertsManager, GlobalStyles } from '@bigcommerce/big-design';
import { theme } from '@bigcommerce/big-design-theme';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import AuthProvider from './components/Auth/AuthProvider';
import Layout from './components/Layout';
import Code from './pages/Code';
import Home from './pages/Home';
import Setup from './pages/Setup';
import { alertsManager, store } from './state/store';

const AppGlobalStyles = createGlobalStyle`
  #stand-with-ukraine {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    background-color: ${({ theme }) => theme.colors.secondary10};
    flex-direction: column;
   }

   .router-link {
     text-decoration: none;
   }
`;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          {/* eslint-disable-next-line @typescript-eslint/consistent-type-assertions */}
          <AlertsManager manager={alertsManager as any} />
          <AppGlobalStyles />
          <HashRouter>
            <AuthProvider>
              <Layout>
                <Routes>
                  <Route element={<Home />} index />
                  <Route element={<Setup />} path="/setup" />
                  <Route element={<Code />} path="/code" />
                </Routes>
              </Layout>
            </AuthProvider>
          </HashRouter>
        </>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
