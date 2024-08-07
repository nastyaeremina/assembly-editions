import styled, { css } from 'styled-components';

const ButtonGroups = styled.div`
  display: flex;
  gap: 20px;
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: ${props.hasMarginTop}px;
    `}
  @media only screen and (max-width: 449px) {
    gap: 12px;
  }
`;

export { ButtonGroups };
