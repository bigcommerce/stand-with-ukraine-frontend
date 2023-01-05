import { createGlobalStyle } from 'styled-components';

import { breakpoints } from '../helpers';

export const SliderOverrides = createGlobalStyle`
    .swiper {
        &.swiper-vertical {
            height: 58rem;
            
            ${breakpoints.desktop} {
                height: 41rem;
            }
        }
    }
    
    .swiper-horizontal {
        padding-bottom: 4rem !important;
        
        & > .swiper-pagination-bullets { bottom: 0 !important; }
    }
`;
