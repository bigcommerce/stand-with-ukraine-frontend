import styled, { css } from 'styled-components';

interface SectionProps {
  alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-end';
  background?: 'light' | 'primary' | 'gray' | 'dark';
  display?: string;
  justifyContent?: 'center' | 'stretch' | 'flex-start' | 'flex-end';
  paddingX?: number;
  paddingY?: number;
}

interface ContainerProps {
  alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-end';
  justifyContent?: 'center' | 'stretch' | 'flex-start' | 'flex-end';
  paddingX?: number;
  paddingY?: number;
  width?: number;
}

interface ItemProps {
  alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-end';
  display?: string;
  justifyContent?: 'center' | 'stretch' | 'flex-start' | 'flex-end';
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

  ${({ paddingX = 1.5, paddingY = 10 }) => css`
    padding: ${paddingY}rem ${paddingX}rem;
  `}
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
`;

export const Item = styled.div<ItemProps>`
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
