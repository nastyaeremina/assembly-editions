import styled from 'styled-components';
import { Body2, Body3, Heading2, Heading3, Heading4, Heading5, MbBody2, MbBody3, MobileH2, MobileH4 } from './styles';
import { body, title } from './color';
const MainHero = styled.div`
  padding: 80px 0 50px 0;
  @media only screen and (max-width: 769px) {
    padding-bottom: 40px;
    padding-top: 112px;
  }
`;
const HeroSection = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
  text-align: center;
  h1 {
    ${Heading2};
    color: ${title};
    margin: 0;
  }
  .button-section {
    margin-top: 32px;
  }
  @media only screen and (max-width: 769px) {
    padding: 36px 0 40px;
    h1 {
      ${MobileH2}
    }
  }
`;
const BrandName = styled.div`
  padding: 50px 0;
  h2 {
    ${Heading4};
    color: ${title};
    margin: 0 0 12px 0;
  }
  p {
    margin: 0;
    color: ${body};
    ${Body3};
  }
  @media only screen and (max-width: 749px) {
    padding: 40px 0;
    h2 {
      ${MobileH4}
    }
    p {
      ${MbBody3}
    }
  }
`;

const HeroCaption = styled.div`
  max-width: 880px;
  width: 100%;
  margin: 0 auto;
  h1 {
    ${Heading2};
    color: ${title};
    margin: 0 0 20px 0;
  }
  h2 {
    ${Heading3};
    color: ${title};
    margin: 0 0 20px 0;
  }
  h3 {
    ${Heading4};
    color: ${title};
    margin: 0 0 20px 0;
  }
  h4 {
    ${Heading5};
    color: ${title};
    margin: 0 0 20px 0;
  }
  p {
    ${Body2};
    color: ${body};
    margin: 20px 0 0px 0;
  }
  @media only screen and (max-width: 749px) {
    h2 {
      ${MobileH4}
    }
    p {
      ${MbBody3}
      font-size:17px;
    }
  }
`;
export { HeroSection, MainHero, BrandName, HeroCaption };
