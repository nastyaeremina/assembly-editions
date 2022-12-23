import styled from 'styled-components';
import { Body1, Body3, Body4, Heading3 } from '../../styles/styles';
const AppMain = styled.div`
  text-align: center;
  margin: auto;
  width: 100%;
  h4 {
    ${Body1};
    color: ${({ theme }) => theme.colors.greendark};
    margin: 40px 0 0 0;
  }
  p {
    margin: 20px 0 0 0;
    color: ${({ theme }) => theme.colors.lightgray};
    ${Body4}
  }
  span {
    font-weight: 500;
  }
`;
export { AppMain };
