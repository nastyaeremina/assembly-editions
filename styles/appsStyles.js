import styled, { css } from "styled-components";
import {
  Body1,
  Body2,
  Body4,
  Body5,
  CardTxt,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Label,
  LinkTxt,
  Value,
} from "./styles";
const HeroSection = styled.div`
  padding-top: 180px;
  text-align: center;

  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 auto;
    margin-bottom: 20px;
  }
  p {
    ${Body2};
    margin: 0 auto;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.colors.body};
    letter-spacing: 0.02em;
  }
`;
const FeatureSection = styled.div`
  padding: 100px 0;
`;
const FeatureWrap = styled.div`
  display: flex;
  gap: 36px;
`;
const Input = styled.input`
  ${Value};
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: 0.01em;
  padding: 14px 20px 14px 55px;
  border: 1px solid #bebebf;
  border-radius: 48px;
  width: 306px;
  outline: 0;
  ::placeholder {
    color: ${({ theme }) => theme.colors.lightgray};
  }
`;
const Catagory = styled.ul`
  padding-top: 40px;

  h4 {
    padding-bottom: 20px;
    margin: 0;
    ${Heading5};
    color: ${({ theme }) => theme.colors.title};
    border-bottom: 1px solid #000000;
    letter-spacing: 0.02em;
    max-width: 306px;
    width: 100%;
  }
`;
const Catagoryitem = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid #000000;
  a {
    ${Body4};
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
    :hover {
      color: ${({ theme }) => theme.colors.title};
    }
    :active {
      color: ${({ theme }) => theme.colors.title};
    }
  }
`;
const OtherWrap = styled.ul`
  padding-top: 79px;
  h4 {
    padding-bottom: 20px;
    margin: 0;
    ${Heading5};
    color: ${({ theme }) => theme.colors.title};
    border-bottom: 1px solid #000000;
    letter-spacing: 0.02em;
    max-width: 306px;
    width: 100%;
  }
`;
const FeatureLeft = styled.div`
  position: relative;
`;
const FeatureRight = styled.div`
  h3 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 28px 0;
  }
`;
const FeatureMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 36px;
`;
const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.whitecolor};
  border: 1px solid #01011d;
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;
  width: 100%;
`;
const CardText = styled.div`
  padding: 20px 16px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  h4 {
    ${Body4};
    color: ${({ theme }) => theme.colors.title};
    letter-spacing: 0.02em;
    margin: 0 0 8px 0;
  }
  p {
    color: ${({ theme }) => theme.colors.darkgray};
    ${Body5};
    letter-spacing: 0.02em;
    margin: 0;
  }
`;
const CardEnd = styled.div`
  background-color: ${({ theme }) => theme.colors.greenlight};
  padding: 8px 16px;
  p {
    ${CardTxt};
    color: ${({ theme }) => theme.colors.purpledark};
    margin: 0;
  }
`;
const FeatureImg = styled.div`
  padding: 38px 16px;
`;
const Featured = styled.div``;
const ExtensionsSection = styled.div`
  padding-top: 40px;
  p {
    ${Body5};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
    letter-spacing: 0.02em;
  }
`;
const ExtensionCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 36px;
`;
const CardSub = styled.div`
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 15px;
  p {
    color: ${({ theme }) => theme.colors.darkgray};
    letter-spacing: 0.02em;
    ${Body5}
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
const CardInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 12px;

  h4 {
    color: ${({ theme }) => theme.colors.black};
    ${Body4}
    letter-spacing: 0.02em;
    margin: 0;
  }
`;
const SchedulingApps = styled.div`
  padding-top: 40px;
`;
const CardWrap = styled.div``;
const AppsTitle = styled.div`
  margin-bottom: 28px;
  h3 {
    margin-bottom: 0;
  }
  p {
    margin: 0;
    ${Body4};
    color: ${({ theme }) => theme.colors.title};
    margin-top: 12px;
  }
`;
const BuildWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 27px;
`;
const BuildAppsDetail = styled.div`
  h5 {
    ${Body4};
    color: ${({ theme }) => theme.colors.black};
    margin: 0;
  }
  p {
    ${Body5};
    color: ${({ theme }) => theme.colors.darkgray};
    letter-spacing: 0.02em;
    margin: 12px 0 28px 0;
  }
  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding: 7px 31px;
  }
`;
const InputWrap = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 18px;
    left: 20px;
  }
`;
const LeftWrap = styled.div`
  position: sticky;
  top: 95px;
`;
const DetailLink = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 28px;
  p {
    ${LinkTxt};
    margin: 0;
    color: ${({ theme }) => theme.colors.lightgray};
  }
`;
const AppsDetailMain = styled.div`
padding-top: 40px;
margin-top: 80px;
`;
const AppDetailCard = styled.div`
 background-color: ${({ theme }) => theme.colors.background};
 padding: 40px 0;
 margin-bottom: 40px;
 p{
  margin: 20px 0 32px 0;
  ${Body2};
  color: ${({ theme }) => theme.colors.body};
 }
`;
const DetailWrap = styled.div`
border: 1px solid #000000;
border-radius: 7px;
padding: 25px;
position:relative ;
.imagepostion{
  position: absolute;
  top:131px;
  right: 0;
}
.imagepostion2{
  position: absolute;
  top:247px;
  right:0;
}
`;
const DetailMain = styled.div`
display:flex;
padding-bottom: 100px;
`;
const LinePostion = styled.div`
position: absolute;
top:15px;
right: -45px;
`;
const DetailRight = styled.div`padding: 30px 0;
.mr10{
  padding-top: 10px;
}
`;
const RightWrap = styled.div`
display: flex;
gap:10px;
padding-bottom: 60px;
align-items: flex-start;
`;
const DetailTxt = styled.div`
p{
  ${Label};
  color: ${({ theme }) => theme.colors.lightgray};
  margin: 0 0 12px 0;
}
span{
  ${Body4};
      color: ${({ theme }) => theme.colors.title};
      margin: 0;

  
}
a{
  color: ${({ theme }) => theme.colors.primary};
  ${Body4};

}
`;
const HelpWrap = styled.div`
display: flex;
gap:12px;
`;
const RightTxt = styled.div`
  background-color: ${({ theme }) => theme.colors.greenlight};
  padding:7px 20px;
  margin-top: 12px;
  h4{
    ${Label};
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
    letter-spacing: 0.01em;
  }
`;
const LeftImage = styled.div`
padding-top: 10px;
`;
const AppWrap = styled.div`
padding-bottom: 50px;
h3{
  ${Heading3};
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
}
`;
const CardSection = styled.div`
padding-top: 50px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 48px;
`;
export {
  HeroSection,
  FeatureSection,
  FeatureWrap,
  Input,
  Catagory,
  Catagoryitem,
  FeatureLeft,
  FeatureRight,
  FeatureMenu,
  FeatureCard,
  CardText,
  CardEnd,
  FeatureImg,
  Featured,
  ExtensionsSection,
  ExtensionCard,
  CardSub,
  CardInfo,
  SchedulingApps,
  CardWrap,
  AppsTitle,
  BuildWrap,
  BuildAppsDetail,
  InputWrap,
  OtherWrap,
  LeftWrap,
  DetailLink,
  AppsDetailMain,
  AppDetailCard,
  DetailWrap,
  DetailMain,
  LinePostion,
  DetailRight,
  RightWrap,
  DetailTxt,
  HelpWrap,
  RightTxt,
  LeftImage,
  AppWrap,
  CardSection
};
