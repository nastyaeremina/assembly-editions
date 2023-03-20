import styled from 'styled-components';
import { Body2, Heading2, Heading3, MbBody1, MobileH2 } from './styles';

const HeroSection = styled.div`
  width: 100%;
  padding: 224px 0 0px 0;
  text-align: center;
  overflow: hidden;
  @media only screen and (max-width: 749px) {
    padding: 148px 0 0px 0;
  }
`;

const HeroHeading = styled.h1`
  ${Heading2};
  color: ${({ theme }) => theme.colors.title};
  margin: 0 0 20px 0;
  @media only screen and (max-width: 991px) {
    text-align: center;
    ${Heading2}
  }
  @media only screen and (max-width: 749px) {
    margin-bottom: 20px;
    ${MobileH2}
    color: ${({ theme }) => theme.colors.title};
  }
`;

const Para = styled.p`
  ${Body2}
  letter-spacing: 0.02em;
  margin: 0;
  color: ${({ theme }) => theme.colors.body};
  @media only screen and (max-width: 991px) {
    text-align: center;
    ${Body2}
  }
  @media only screen and (max-width: 749px) {
    ${MbBody1};
  }
`;

const HeroBtnBlock = styled.div`
  margin: 32px 0 100px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 80px;
  }
`;

const Heading = styled.h2`
  text-align:center;
  ${Heading3}
  color: ${({ theme }) => theme.colors.title};
  margin-top:0;
  margin-bottom:60px;
  @media only screen and (max-width: 768px) {
    margin-top:0;
    margin-bottom:40px;
  }
`;

const LastSection = styled.div`
    display:flex;
    flex-direction:column;
    gap:40px;
    padding-bottom:100px;
    @media only screen and (max-width: 768px) {
        padding-bottom:80px;
    }
`;
export { HeroSection, HeroHeading, Para, HeroBtnBlock, Heading, LastSection };
