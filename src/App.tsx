import { AlertsManager, GlobalStyles } from '@bigcommerce/big-design';
import { theme } from '@bigcommerce/big-design-theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import Home from './pages/Home';
import { store, alertsManager } from './state/store';
import Setup from './pages/Setup';
import { Provider } from 'react-redux';

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
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/setup" element={<Setup />}></Route>
              </Routes>
            </Layout>
          </BrowserRouter>
        </>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
