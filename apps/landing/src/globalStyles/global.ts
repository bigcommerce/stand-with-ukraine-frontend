import { createGlobalStyle } from 'styled-components';

export const REM_SIZE = '10px';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: ${REM_SIZE};
  }
  
  body {
    font-size: 1.5rem;
  }
`;
