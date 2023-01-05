import styled, { css } from 'styled-components';

import { breakpoints } from '../helpers';

interface TextProps {
  color?: 'dark' | 'light' | 'gray' | string;
  margin?: string;
  size?: number;
  textAlign?: 'center' | 'left' | 'right';
  weight?: number;
}

const getColor = (color: TextProps['color'] = 'dark') => {
  switch (color) {
    case 'dark':
      return '#121118';

    case 'gray':
      return '#5D5D69';

    case 'light':
      return '#fff';

    default:
      return color;
  }
};

const getFontWeight = (weight: TextProps['weight']) =>
  weight &&
  css`
    font-weight: ${weight};
  `;

const getTextAlign = (align: TextProps['textAlign']) =>
  align &&
  css`
    text-align: ${align};
  `;

const getBaseStyles = ({ color = 'dark', margin = '0', size = 1.5 }: TextProps) => css`
  color: ${getColor(color)};
  font-size: ${size}rem;
  margin: ${margin};
  line-height: 1.4;
`;

export const H1 = styled.h1<Pick<TextProps, 'color' | 'margin' | 'textAlign'>>`
  ${({ color, margin = `0 0 2rem` }) => getBaseStyles({ color, margin, size: 3.4 })}
  ${({ textAlign }) => getTextAlign(textAlign)}
  
  ${breakpoints.desktop} {
    font-size: 4.1rem;
  }
`;

export const H2 = styled.h2<Pick<TextProps, 'color' | 'margin' | 'textAlign'>>`
  ${({ color }) => getBaseStyles({ color, margin: '0 0 2rem', size: 3.4 })}
  ${({ textAlign }) => getTextAlign(textAlign)}
  
  ${breakpoints.desktop} {
    font-size: 4.1rem;
    margin: ${({ margin = `0 0 2rem` }) => margin};
  }
`;

export const H3 = styled.h3<Pick<TextProps, 'color' | 'margin' | 'textAlign'>>`
  ${({ color, margin = `0 0 1rem` }) => getBaseStyles({ color, margin, size: 2.5 })}
  ${({ textAlign }) => getTextAlign(textAlign)}
  
  ${breakpoints.desktop} {
    font-size: 3.4rem;
  }
`;

export const H4 = styled.h4<Pick<TextProps, 'color' | 'margin' | 'textAlign'>>`
  ${({ color, margin = `0 0 1rem` }) => getBaseStyles({ color, margin, size: 2.5 })}
  ${getFontWeight(400)}
  ${({ textAlign }) => getTextAlign(textAlign)}
`;

export const H5 = styled.h5<Pick<TextProps, 'color' | 'margin' | 'textAlign'>>`
  ${({ color, margin = `0 0 1rem` }) => getBaseStyles({ color, margin, size: 2 })}
  ${getFontWeight(400)}
  ${({ textAlign }) => getTextAlign(textAlign)}
`;

export const Paragraph = styled.p<TextProps>`
  ${({ color, margin = `0 0 2rem`, size }) => getBaseStyles({ color, margin, size })}
  ${({ weight }) => getFontWeight(weight)}
  ${({ textAlign }) => getTextAlign(textAlign)}
`;
