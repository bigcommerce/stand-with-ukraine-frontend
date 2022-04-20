import { GlobalStyles } from '@bigcommerce/big-design';
import { theme } from '@bigcommerce/big-design-theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import Details from './pages/Details';
import Home from './pages/Home';
import { store } from './app/store';
import Setup from './pages/Setup';
import { Provider } from 'react-redux';

const AppGlobalStyles = createGlobalStyle`
  #stand-with-ukraine {
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: ${({ theme }) => theme.colors.secondary10};
    flex-direction: column;
   }
`;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <AppGlobalStyles />
          <Layout>
            <BrowserRouter>
              <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/setup" element={<Setup />}></Route>
                <Route path="/details" element={<Details />}></Route>
              </Routes>
            </BrowserRouter>
          </Layout>
        </>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
