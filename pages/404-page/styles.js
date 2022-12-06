import styled from 'styled-components';
import { Body3, Heading3 } from '../../styles/styles';
const MainHeroSection = styled.div``;
const ErrorMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  h3 {
    ${Heading3};
    margin: 0 0 16px 0;
    color: ${({ theme }) => theme.colors.title};
  }
  p {
    color: ${({ theme }) => theme.colors.body};
    ${Body3};
    margin: 0 0 24px 0;
  }
`;
export { MainHeroSection, ErrorMain };
