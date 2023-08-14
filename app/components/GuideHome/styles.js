import styled from 'styled-components';
import { Body3, Body5, Heading3, Heading5, MbBody3, MbBody4, MobileH4 } from '../../styles/styles';
import { body, primary, title } from '../../styles/color';

const GuideCenter = styled.div`
  max-width: 740px;
  width: 100%;
  padding: 90px 50px 0px 50px;
  margin: 0 auto;
  @media only screen and (max-width: 749px) {
    padding: 40px 24px 0;
  }
`;
const MainContent = styled.div``;
const FAQSection = styled.div`
  max-width: 692px;
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 749px) {
    max-width: 740px;
    width: 100%;
  }
`;
const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const PageTitle = styled.h1`
  ${Heading3};
  color: ${title};
  margin: 0;
`;
const Caption = styled.p`
  ${Body3};
  color: ${body};
  margin: 0;
  @media only screen and (max-width: 449px) {
    ${MbBody3}
  }
`;
const GuideDetail = styled.div`
  padding: 40px 0;
  h3,
  h4,
  h5 {
    ${Heading5};
    font-weight: 400;
    color: ${title};
    margin: 40px 0 0;
    :first-child {
      margin: 0;
    }
  }
  p {
    ${Body5};
    color: ${body};
    margin: 8px 0 0;
    a {
      color: ${primary};
      display: initial;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
  ol {
    padding-left: 20px;
    li {
      ::marker {
        font-size: 15px;
        color: ${body};
      }
    }
  }
  i {
    font-weight: 700;
  }
  ul {
    list-style-type: disc;
    padding-left: 20px;
    li {
      ${Body5};
      color: ${body};
    }
  }
  @media only screen and (max-width: 449px) {
    padding: 40px 0 0;
    h4 {
      ${MobileH4}
    }
    p {
      ${MbBody4}
    }
  }
`;
export { GuideCenter, MainContent, FAQSection, HeroSection, PageTitle, Caption, GuideDetail };
