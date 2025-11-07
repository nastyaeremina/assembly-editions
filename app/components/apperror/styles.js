import styled from 'styled-components';
import { body_regular } from '../../styles/typography';

const AppMain = styled.div`
  text-align: center;
  margin: auto;
  width: 100%;
  img {
    width: calc(100% - 48px);
  }
  h4 {
    ${body_regular};
    color: var(--dark-green);
    margin: 40px 0 0 0;
  }
  p {
    margin: 20px 0 0 0;
    color: var(--medium-gray);
    ${body_regular}
  }
  span {
    font-weight: 500;
  }
`;
export { AppMain };
