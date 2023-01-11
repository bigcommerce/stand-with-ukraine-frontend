import styled from 'styled-components';

const ActionContainer = styled.div`
  & > button,
  & > a {
    margin-top: 1rem;
    display: inline-block;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    flex: 0 0 4rem;
    display: flex;
    align-items: center;
    margin-top: 1rem;

    & > button,
    & > a {
      margin-left: 1.5rem !important;
      margin-top: 0;
    }

    // don't add margin left for remove button
    > * {
      &:first-child {
        margin-left: 0 !important;
      }
    }
  }
`;

export default ActionContainer;
