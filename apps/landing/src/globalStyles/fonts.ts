import { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Gotham';
    src: url('${
      import.meta.env.BASE_URL
    }fonts/gotham/woff2/Gotham-Light_Web.woff2') format('woff2'),
         url('${import.meta.env.BASE_URL}fonts/gotham/woff/Gotham-Light_Web.woff') format('woff');
    font-display: swap;
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('${import.meta.env.BASE_URL}fonts/gotham/woff2/Gotham-Book_Web.woff2') format('woff2'),
         url('${import.meta.env.BASE_URL}fonts/gotham/woff/Gotham-Book_Web.woff') format('woff');
    font-display: swap;
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('${
      import.meta.env.BASE_URL
    }fonts/gotham/woff2/Gotham-Medium_Web.woff2') format('woff2'),
         url('${import.meta.env.BASE_URL}fonts/gotham/woff/Gotham-Medium_Web.woff') format('woff');
    font-display: swap;
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('${import.meta.env.BASE_URL}fonts/gotham/woff2/Gotham-Bold_Web.woff2') format('woff2'),
         url('${import.meta.env.BASE_URL}fonts/gotham/woff/Gotham-Bold_Web.woff') format('woff');
    font-display: swap;
    font-weight: 700;
    font-style: normal;
  }
 
  @font-face {
    font-family: 'Gotham';
    src: url('${
      import.meta.env.BASE_URL
    }fonts/gotham/woff2/Gotham-Black_Web.woff2') format('woff2'),
         url('${import.meta.env.BASE_URL}fonts/gotham/woff/Gotham-Black_Web.woff') format('woff');
    font-display: swap;
    font-weight: 800;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Gotham Cond';
    src:url('${
      import.meta.env.BASE_URL
    }fonts/gotham/woff2/GothamCond-Bold_Web.woff2') format('woff2'),
        url('${import.meta.env.BASE_URL}fonts/gotham/woff/GothamCond-Bold_Web.woff') format('woff');
    font-display: swap;
    font-weight: 600;
    font-style: normal;
}
`;
