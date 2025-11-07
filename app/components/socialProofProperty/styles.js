import styled, { css } from 'styled-components';
import { button_regular } from '../../styles/typography';

const PropertyMainDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 32px;
  flex-wrap: wrap;
  h6 {
    ${button_regular};
    color: var(--title);
    margin: 0;
    margin-top: 2px;
  }
  ${(props) =>
    props.isBookDemo &&
    css`
      margin: 0;
    `}
  @media only screen and (max-width: 449px) {
    gap: 8px;
    margin-top: 28px;
  }
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  @media only screen and (max-width: 449px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export { PropertyMainDiv, Logos };
