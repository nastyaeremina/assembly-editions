import styled from 'styled-components';
import { Body1, Body4 } from '../../styles/styles';

const AppMain = styled.div`
  text-align: center;
  margin: auto;
  width: 100%;
  h4 {
    ${Body1};
    color: var(--dark-green);
    margin: 40px 0 0 0;
  }
  p {
    margin: 20px 0 0 0;
    color: var(--medium-gray);
    ${Body4}
  }
  span {
    font-weight: 500;
  }
`;
export { AppMain };
