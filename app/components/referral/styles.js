import styled from 'styled-components';
import { Body2, Heading2, MobileH2, MbBody2 } from '../../styles/styles';
import { black, body } from '../../styles/color';
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
    color: ${black};
  }
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin-top:76px;
    margin-bottom:80px;
    gap:40px;
    height:auto ;
    padding-top: 40px;
  }
`;
const HeroLeft = styled.div`
  h2 {
    ${Heading2};
    margin: 0;
    color: ${black};
    @media only screen and (max-width: 768px) {
    ${MobileH2};
  }
  }
  P {
    ${Body2};
    color: ${body};
    margin: 20px 0 32px 0;
    @media only screen and (max-width: 768px) {
    ${MbBody2};
  }
  }
`;
const HeroRight = styled.div`
    @media only screen and (max-width: 376px) {

img{
  width:264px;
}
    }
`;
export { MainSection, HeroWrap, HeroLeft, HeroRight };
