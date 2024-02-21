import { createGlobalStyle } from 'styled-components';

export const SliderOverrides = createGlobalStyle`
    .swiper {
        background-color: #edeff3;
    }

    .swiper-button-next, .swiper-button-prev {
        color: #fff !important;
    }

    .swiper-pagination-bullet-active {
        background-color: #fff !important;
    }
`;
