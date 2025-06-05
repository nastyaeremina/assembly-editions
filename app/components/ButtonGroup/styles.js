import styled, { css } from 'styled-components';

const ButtonGroups = styled.div`
  display: flex;
  gap: 20px;
  ${(props) =>
    props.marginTop &&
    css`
      margin-top: ${props.marginTop}px;
    `}
  @media only screen and (max-width: 449px) {
    gap: 12px;
    flex-wrap: wrap;
  }
`;

export { ButtonGroups };
