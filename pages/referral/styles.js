import styled from 'styled-components';
import { Body2, Heading2 } from '../../styles/styles';
const MainSection = styled.div``;
const HeroWrap = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 50px;
  h2 {
    ${Heading2};
    margin: 0;
    color: ${({ theme }) => theme.colors.black};
  }
`;
const HeroLeft = styled.div`
  h2 {
    ${Heading2};
    margin: 0;
    color: ${({ theme }) => theme.colors.black};
  }
  P {
    ${Body2};
    color: ${({ theme }) => theme.colors.body};
    margin: 20px 0 32px 0;
  }
`;
const HeroRight = styled.div``;
export { MainSection, HeroWrap, HeroLeft, HeroRight };
