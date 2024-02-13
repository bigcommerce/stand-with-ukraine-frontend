import { createGlobalStyle } from 'styled-components';

import GothamBlackBase64 from '../../public/fonts/gotham/woff2/Gotham-Black_Web.woff2.base64?raw';
import GothamBoldBase64 from '../../public/fonts/gotham/woff2/Gotham-Bold_Web.woff2.base64?raw';
import GothamBookLightBase64 from '../../public/fonts/gotham/woff2/Gotham-Book_Web.woff2.base64?raw';
import GothamLightBase64 from '../../public/fonts/gotham/woff2/Gotham-Light_Web.woff2.base64?raw';
import GothamMediumBase64 from '../../public/fonts/gotham/woff2/Gotham-Medium_Web.woff2.base64?raw';
import GothamCondBase64 from '../../public/fonts/gotham/woff2/GothamCond-Bold_Web.woff2.base64?raw';

function generateFontUrlFromBase64(base64String: string, fontType = 'woff2') {
  return `data:application/x-font-${fontType};charset=utf-8;base64,${base64String}`;
}

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Gotham';
    src: url(${generateFontUrlFromBase64(GothamLightBase64)}) format('woff2'),
         url('${import.meta.env.BASE_URL}/fonts/gotham/woff/Gotham-Light_Web.woff') format('woff');
    font-display: swap;
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham';
    src: url(${generateFontUrlFromBase64(GothamBookLightBase64)}) format('woff2'),
         url('${import.meta.env.BASE_URL}/fonts/gotham/woff/Gotham-Book_Web.woff') format('woff');
    font-display: swap;
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham';
    src: url(${generateFontUrlFromBase64(GothamMediumBase64)}) format('woff2'),
         url('${import.meta.env.BASE_URL}/fonts/gotham/woff/Gotham-Medium_Web.woff') format('woff');
    font-display: swap;
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham';
    src: url(${generateFontUrlFromBase64(GothamBoldBase64)}) format('woff2'),
         url('${import.meta.env.BASE_URL}/fonts/gotham/woff/Gotham-Bold_Web.woff') format('woff');
    font-display: swap;
    font-weight: 700;
    font-style: normal;
  }
 
  @font-face {
    font-family: 'Gotham';
    src: url(${generateFontUrlFromBase64(GothamBlackBase64)}) format('woff2'),
         url('${import.meta.env.BASE_URL}/fonts/gotham/woff/Gotham-Black_Web.woff') format('woff');
    font-display: swap;
    font-weight: 800;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Gotham Cond';
    src:url(${generateFontUrlFromBase64(GothamCondBase64)}) format('woff2'),
        url('${
          import.meta.env.BASE_URL
        }/fonts/gotham/woff/GothamCond-Bold_Web.woff') format('woff');
    font-display: swap;
    font-weight: 600;
    font-style: normal;
  }
`;
