import styled from 'styled-components';
import { Body4, Heading2, Heading4, Heading6, LinkTxt, MobileH2 } from './styles';
import { black, body, footercolor, greendark, greenlight, primary, title } from './color';
const MainSection = styled.div``;
const PrivacuHero = styled.div`
  background-color: ${greendark};
  padding: 180px 0 100px 0;
  text-align: center;
  h1 {
    ${Heading2};
    color: ${greenlight};
    margin: 0;
  }
  @media only screen and (max-width: 749px) {
    padding: 148px 0 80px;
    h1 {
      ${MobileH2};
    }
  }
`;
const PostContent = styled.div`
  padding-top: 60px;
  .mr0 {
    margin: 0;
  }
  .mt12 {
    margin-top: 12px;
  }
  p {
    margin: 16px 0 0 0;
    ${Body4};
    color: ${body};
  }
  span {
    ${Heading6};
    color: ${body};
  }
`;
const PrivacyContent = styled.div`
  h4 {
    ${Heading4};
    color: ${title};
    margin: 60px 0 12px 0;
  }
  h5 {
    ${Heading6};
    color: ${title};
    margin: 0 0 16px 0;
  }
  h6 {
    ${Heading6};
    color: ${title};
    margin: 30px 0 16px 0;
  }
  strong {
    ${Heading6};
    color: ${title};
  }
  p {
    ${Body4};
    color: ${body};
    margin: 0 0 16px 0;
    :last-child {
      margin-bottom: 0;
    }
    strong {
      color: ${body};
      ${Heading6};
    }
  }
  ul {
    margin-bottom: 10px;
    li {
      padding-left: 36px;
      position: relative;
      ${Body4};
      color: ${body};
      margin-bottom: 8px;
      :last-child {
        margin-bottom: 0;
      }
      strong {
        color: ${body};
        ${Heading6};
      }
      :before {
        content: '';
        position: absolute;
        top: 7px;
        left: 0;
        width: 20px;
        height: 10px;
        background-color: #7ddaa0;
      }
    }
  }
`;
const PrivacyData = styled.div`
  padding-left: 36px;
  position: relative;
  margin-top: 10px;
  p {
    margin: 0;
  }
  :before {
    content: '';
    position: absolute;
    top: 7px;
    left: 0;
    width: 20px;
    height: 10px;
    background-color: #7ddaa0;
  }
`;
const ContentInfo = styled.div`
  padding: 28px 0 100px 0;
  @media only screen and (max-width: 749px) {
    padding: 10px 0 80px;
  }
`;
const InfoWrap = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid #000000;

  h2 {
    ${Heading4};
    margin: 0;
    color: ${title};
  }
  @media only screen and (max-width: 749px) {
    h2 {
      font-size: 32px;
      line-height: 34px;
    }
  }
`;
const InfoLink = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-top: 30px;
  row-gap: 16px;
  a {
    ${LinkTxt};
    color: ${primary};
    display: block;
    transition: all 300ms;
    :hover {
      color: ${black};
    }
  }
  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 749px) {
    grid-template-columns: 1fr;
    grid-row-gap: 26px;
  }
`;
const FooterSection = styled.div`
  margin-top: 60px;
  background-color: ${footercolor};
`;
const FooterSub = styled.div`
  padding: 40px 0;
  display: flex;
  gap: 40px;
`;
export {
  MainSection,
  PrivacuHero,
  PostContent,
  PrivacyContent,
  PrivacyData,
  ContentInfo,
  InfoWrap,
  InfoLink,
  FooterSection,
  FooterSub
};
