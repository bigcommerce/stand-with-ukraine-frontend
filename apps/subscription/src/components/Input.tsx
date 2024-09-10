import { InputHTMLAttributes, useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  readonly label: string;
  readonly error?: string;
}

const StyledLabel = styled.label<{ isError: boolean; isSmall: boolean }>`
  color: #5d5d69;
  cursor: text;
  font-size: 1.7rem;
  line-height: 3rem;
  overflow: hidden;
  position: absolute;
  text-overflow: ellipsis;
  white-space: nowrap;
  transform-origin: 0 0;
  transition: transform 0.2s ease;

  ${({ isSmall }) =>
    isSmall &&
    css`
      transform: scale(0.7) translateY(-70%);
    `}

  ${({ isError }) =>
    isError &&
    css`
      color: #b20a0a;
    `}
`;

const StyledInput = styled.input<{ isError: boolean }>`
  border: 0;
  border-bottom: 1px solid #121118;
  height: 3rem;
  width: 100%;

  ${({ isError }) =>
    isError &&
    css`
      border-color: #b20a0a;
    `}

  &:focus {
    outline: none;
  }
`;

const StyledError = styled.div`
  color: #b20a0a;
  font-size: 1.3rem;
  padding: 0.5rem 0;
`;

export const StyledContainer = styled.div`
  margin-bottom: 4rem;
  padding-top: 1rem;
  position: relative;
`;

export const Input = ({
  label,
  error,
  ...inputProps
}: Props & InputHTMLAttributes<HTMLInputElement>) => {
  const [isFocused, setIsFocused] = useState(false);
  const nextId = inputProps.id ?? label.toLowerCase().replace(' ', '_');

  return (
    <StyledContainer>
      <StyledLabel htmlFor={nextId} isError={!!error} isSmall={isFocused || !!inputProps.value}>
        {label}
      </StyledLabel>
      <StyledInput
        {...inputProps}
        id={nextId}
        isError={!!error}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
      {!!error && <StyledError>{error}</StyledError>}
    </StyledContainer>
  );
};
