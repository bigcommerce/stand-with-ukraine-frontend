import { GlobalStyles } from '@bigcommerce/big-design';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Details from './pages/Details';
import Home from './pages/Home';
import Setup from './pages/Setup';

function App() {
  return (
    <>
      <GlobalStyles />
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
  );
}

export default App;
