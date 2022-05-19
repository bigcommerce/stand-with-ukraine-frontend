import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { AlertsManager, GlobalStyles } from '@bigcommerce/big-design';
import { theme } from '@bigcommerce/big-design-theme';

import AuthProvider from './components/Auth/AuthProvider';
import Layout from './components/Layout';
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
          <AlertsManager manager={alertsManager} />
          <AppGlobalStyles />
          <AuthProvider>
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route index element={<Home />}></Route>
                  <Route path="/setup" element={<Setup />}></Route>
                </Routes>
              </Layout>
            </BrowserRouter>
          </AuthProvider>
        </>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
