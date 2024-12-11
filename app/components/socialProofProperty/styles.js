import styled from 'styled-components';
import { Body4, Body5 } from '../../styles/styles';

const PropertyMainDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 32px;
  flex-wrap: wrap;
  h6 {
    ${Body4};
    color: var(--title);
    margin: 0;
    margin-top: 2px;
    @media only screen and (max-width: 449px) {
      ${Body5};
    }
  }
  @media only screen and (max-width: 449px) {
    gap: 8px;
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
