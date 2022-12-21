import { createGlobalStyle } from 'styled-components';

export const REM_SIZE = '10px';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: ${REM_SIZE};
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 1.4rem;
    font-family: Gotham, Helvetica, Arial, sans-serif;
  }
`;
