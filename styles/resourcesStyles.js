import styled from 'styled-components';
import { Body4, Heading2, Heading4, Heading5, Heading6, LinkTxt, MobileH2 } from './styles';
const MainSection = styled.div``;
const PrivacuHero = styled.div`
  background-color: ${({ theme }) => theme.colors.greendark};
  padding: 152px 0 100px 0;
  text-align: center;
  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.greenlight};
    margin: 0;
  }
  @media only screen and (max-width: 749px) {
    padding: 116px 0 80px;
    h2 {
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
    color: ${({ theme }) => theme.colors.body};
  }
  span {
    ${Heading6};
    color: ${({ theme }) => theme.colors.body};
  }
`;
const PrivacyContent = styled.div`
  padding-top: 60px;
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
    margin-bottom: -4px;
  }
  h5 {
    ${Heading5};
    color: ${({ theme }) => theme.colors.title};
    margin: 30px 0 0 0;
  }
  h6 {
    ${Heading6};
    color: ${({ theme }) => theme.colors.title};
    margin: 30px 0 0 0;
  }
  strong{
    ${Heading6};
    color: ${({ theme }) => theme.colors.title};
  }
  li{
     padding-left: 36px;
  position: relative;
  margin-top: 10px;
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
const PrivacyContactData = styled.div``;
const ContentInfo = styled.div`
  padding: 28px 0 100px 0;
  @media only screen and (max-width: 749px) {
    padding: 10px 0 80px;
  }
`;
const InfoWrap = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid #000000;

  h4 {
    ${Heading4};
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
  }
  @media only screen and (max-width: 749px) {
    h4 {
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
    color: ${({ theme }) => theme.colors.primary};
    display: block;
    transition: all 300ms;
    :hover {
      color: ${({ theme }) => theme.colors.black};
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
  background-color: ${({ theme }) => theme.colors.footercolor};
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
  PrivacyContactData,
  ContentInfo,
  InfoWrap,
  InfoLink,
  FooterSection,
  FooterSub
};
