import styled, { css } from 'styled-components';

interface ButtonProps {
  fullWidth?: boolean;
  margin?: string;
  variant?: 'light' | 'dark';
}

const getBackground = (variant: ButtonProps['variant'] = 'dark') => css`
  color: ${variant === 'dark' ? '#fff' : '#4C4B58'};
  background-position-x: -400px;
  background-position-y: -400px;
  background-repeat: no-repeat;
  background-size: 950px 690px;
  background-image: ${variant === 'dark'
    ? 'linear-gradient(to bottom right,#fff 50%,#121118 0)'
    : 'linear-gradient(to bottom right,#121118 50%,#fff 0)'};

  &:hover {
    color: ${variant === 'light' ? '#fff' : '#4C4B58'};
    background-position-x: 0;
    background-position-y: 0;
  }
`;

const getTransition = () => css`
  transition: all 0.3s cubic-bezier(0.85, 0, 0.4, 1);
`;

const getBaseStyles = ({ fullWidth, margin = '0', variant }: ButtonProps) => css`
  cursor: pointer;
  display: inline-block;
  padding: 1.4rem 2.5rem;
  width: ${fullWidth ? '100%' : 'auto'};
  border: 0;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  margin: ${margin};
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }

  ${getBackground(variant)}
  ${getTransition()}
`;

export const Button = styled.button<ButtonProps>`
  ${(props) => getBaseStyles(props)}
`;

export const ButtonLink = styled.a<ButtonProps>`
  text-decoration: none;

  ${(props) => getBaseStyles(props)}
`;

export const CloseButton = styled.a<ButtonProps>`
  position: absolute;
  left: 1.5rem;

  ${(props) => getBaseStyles(props)}
`;
