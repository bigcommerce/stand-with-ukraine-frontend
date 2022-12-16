import styled, { css } from 'styled-components';

interface TextProps {
  color?: 'dark' | 'light' | 'gray' | string;
  margin?: string;
  size?: number;
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

const getBaseStyles = ({ color = 'dark', margin = '0', size = 1.5 }: TextProps) => css`
  color: ${getColor(color)};
  font-size: ${size}rem;
  margin: ${margin};
  line-height: 1.5;
`;

export const H1 = styled.h1<Pick<TextProps, 'color' | 'margin'>>`
  ${({ color, margin = `0 0 2rem` }) => getBaseStyles({ color, margin, size: 4.1 })}
`;

export const H2 = styled.h2<Pick<TextProps, 'color' | 'margin'>>`
  ${({ color, margin = `0 0 2rem` }) => getBaseStyles({ color, margin, size: 4.1 })}
`;

export const H3 = styled.h2<Pick<TextProps, 'color' | 'margin'>>`
  ${({ color, margin = `0 0 1rem` }) => getBaseStyles({ color, margin, size: 3.4 })}
`;

export const Paragraph = styled.p<Pick<TextProps, 'color' | 'margin' | 'size'>>`
  ${({ color, margin = `0 0 2rem`, size }) => getBaseStyles({ color, margin, size })}
`;
