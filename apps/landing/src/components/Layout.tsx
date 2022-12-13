import styled, { css } from 'styled-components';

interface SectionProps {
  background?: 'light' | 'primary' | 'gray' | 'dark';
  paddingX?: number;
  paddingY?: number;
}

interface ContainerProps {
  alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-end';
  paddingX?: number;
  paddingY?: number;
  width?: number;
}

interface ItemProps {
  flexGrow?: string | number;
  flexShrink?: number;
  flexBasis?: string | number;
}

export const Section = styled.section<SectionProps>`
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

  ${({ paddingX = 1.5, paddingY = 5 }) => css`
    padding: ${paddingY}rem ${paddingX}rem;
  `}
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  gap: 3rem;

  ${({ alignItems = 'stretch' }) => css`
    align-items: ${alignItems};
  `}

  ${({ paddingX = 1.5, paddingY = 0 }) => css`
    padding: ${paddingY}rem ${paddingX}rem;
    margin: 0 -${paddingX}rem;
  `}
  
  ${({ width = 11.2 }) => css`
    max-width: ${width}rem;
  `}
`;

export const Item = styled.div<ItemProps>`
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
