import styled from 'styled-components';
import { Body3, Heading3 } from '../../styles/styles';

const MainHeroSection = styled.div``;
const ErrorMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  height: calc(100vh - 250px);
  h3 {
    ${Heading3};
    margin: 0 0 16px 0;
    color: var(--title);
  }
  p {
    color: var(--body);
    ${Body3};
    margin: 0 0 24px 0;
    text-align: center;
  }
`;
export { MainHeroSection, ErrorMain };
