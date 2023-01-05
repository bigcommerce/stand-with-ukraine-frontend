import styled, { css, CSSProperties } from 'styled-components';

import { breakpoints } from '../helpers';

interface SectionProps {
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  background?: 'light' | 'primary' | 'gray' | 'dark';
  display?: string;
  paddingX?: number;
  paddingY?: number;
}

interface ContainerProps {
  alignItems?: CSSProperties['alignItems'];
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  paddingX?: number;
  paddingY?: number;
  width?: number;
}

interface ItemProps {
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  display?: string;
  flexGrow?: string | number;
  flexShrink?: number;
  flexBasis?: string | number;
}

export const Section = styled.section<SectionProps>`
  ${({ display = 'block' }) => css`
    display: ${display};
  `}

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
    
    ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}

  ${({ background = 'light' }) => {
    const value = (() => {
      switch (background) {
        case 'primary':
          return 'linear-gradient(115.91deg, #0D52FF 8.17%, #4100A3 91.36%)';

        case 'gray':
          return '#EDEFF3';

        case 'dark':
          return '#000';

        case 'light':
        default:
          return '#fff';
      }
    })();

    return css`
      background: ${value};
    `;
  }}

  ${({ paddingX = 1.5, paddingY = 3 }) => css`
    padding: ${paddingY}rem ${paddingX}rem;
  `}
  
  ${breakpoints.desktop} {
    ${({ paddingX = 1.5, paddingY = 10 }) => css`
      padding: ${paddingY}rem ${paddingX}rem;
    `}
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  gap: 3rem;
  margin: 0 auto;
  width: 100%;

  ${({ alignItems = 'stretch' }) => css`
    align-items: ${alignItems};
  `}

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}

  ${({ paddingX = 0, paddingY = 0 }) => css`
    padding: ${paddingY}rem ${paddingX}rem;
  `}
  
  ${({ width = 112 }) => css`
    max-width: ${width}rem;
  `}
  
  ${({ flexDirection }) =>
    flexDirection
      ? css`
          flex-direction: ${flexDirection};
        `
      : css`
          flex-direction: column;

          ${breakpoints.desktop} {
            flex-direction: row;
          }
        `}
`;

export const Item = styled.div<ItemProps>`
  max-width: 100%;

  ${({ display = 'block' }) => css`
    display: ${display};
  `}

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
    
    ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
    
  ${({ flexGrow }) =>
    flexGrow &&
    css`
      flex-grow: ${flexGrow};
    `}

  ${({ flexShrink }) =>
    flexShrink &&
    css`
      flex-shrink: ${flexShrink};
    `}
    
    ${({ flexBasis }) =>
    flexBasis &&
    css`
      flex-basis: ${flexBasis};
    `}
`;
