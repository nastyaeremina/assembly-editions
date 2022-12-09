import styled, { css } from 'styled-components';
import {
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
  MbBody2,
  MobileH2,
  Value
} from './styles';
const HeroSection = styled.div`
  padding-top: 180px;
  @media only screen and (max-width: 991px) {
    padding-top: 160px;
  }
  @media only screen and (max-width: 749px) {
    padding-top: 116px;
  }
`;
const AppsHeroWrap = styled.div`
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
  @media only screen and (max-width: 749px) {
    h2 {
      ${MobileH2};
    }
    p {
      ${MbBody2};
    }
  }
`;
const FeatureSection = styled.div`
  padding-top: 100px;
  @media only screen and (max-width: 991px) {
    padding-top: 80px;
  }
`;
const FeatureWrap = styled.div`
  display: flex;
  gap: 36px;
`;
const FirstImg = styled.div``;
const Input = styled.input`
  ${Value};
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: 0.01em;
  padding: 11px 20px 11px 55px;
  border: 1.5px solid #bebebf;
  border-radius: 48px;
  width: 306px;
  outline: 0;
  ::placeholder {
    color: ${({ theme }) => theme.colors.lightgray};
  }
  :hover {
    border: 1.5px solid #ccccd0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
  }
  :active {
    border: 1.5px solid #131313;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
  }
  :focus {
    border: 1.5px solid #131313;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
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
    ${LinkTxt};
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.primary};
    ${(props) =>
      props.isActive &&
      css`
        color: ${({ theme }) => theme.colors.title};
      `}
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
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;
const FeatureRight = styled.div`
  h3 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 28px 0;
  }
  @media only screen and (max-width: 749px) {
    h3 {
      margin: 0 0 24px 0;
    }
  }
`;
const FeatureMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 36px;
  @media only screen and (max-width: 991px) {
    gap: 26px;
  }
  @media only screen and (max-width: 749px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
const CardMain = styled.div`
  :hover {
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 0px 0.2px #01011d;
    border-radius: 4px;
  }
`;
const FeatureCard = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100%;
  a {
    position: relative;
    height: 100%;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.colors.whitecolor};
    border-radius: 4px;
    width: 100%;
    box-shadow: 0px 4px 16px transparent;
    border: 1px solid #01011d;
    display: flex;
    flex-direction: column;
    :hover {
      border: 1px solid #01011d;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }
  }
  /* :hover {
    border: 1.5px solid #01011d;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  } */
`;
const CardText = styled.div`
  padding: 20px 16px 21px 16px;
  border-top: 1px solid black;
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
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
const CardEnd = styled.div`
  background-color: ${({ theme }) => theme.colors.greenlight};
  padding: 6px 16px;
  border-top: 1px solid #01011d;
  border-radius: 0 0 4px 4px;
  p {
    ${CardTxt};
    color: ${({ theme }) => theme.colors.purpledark};
    margin: 0;
  }
`;
const FeatureImg = styled.div`
  padding: 38px 16px;
  display: flex;
  min-height: 132px;
  max-height: 132px;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    max-width: 100%;
  }
  @media only screen and (max-width: 749px) {
    justify-content: flex-start;
  }
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
  @media only screen and (max-width: 749px) {
    /* display: none; */
  }
`;
const ExtensionsLastSection = styled.div`
  padding-top: 40px;
  p {
    ${Body5};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
    letter-spacing: 0.02em;
  }
  @media only screen and (max-width: 749px) {
    display: none;
  }
`;
const ExtensionCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 36px;
  @media only screen and (max-width: 991px) {
    gap: 26px;
  }
  @media only screen and (max-width: 749px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
const CardSub = styled.div`
  display: block;
  :hover {
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 0px 0.1px #01011d;
    border-radius: 4px;
  }
  a {
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 4px;
    padding: 15px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    :hover {
      border: 1px solid #000000;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }
  }
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
  img {
    max-width: 100%;
  }
  h4 {
    color: ${({ theme }) => theme.colors.title};
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
    @media only screen and (max-width: 749px) {
      margin-top: 8px;
    }
  }
  @media only screen and (max-width: 749px) {
    margin-bottom: 24px;
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
const InputWrap = styled.form`
  position: relative;
  img {
    position: absolute;
    top: 15px;
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
  padding-top: 120px;
`;
const AppDetailCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: 40px;
`;
const DetailWrap = styled.div`
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 25px;
  position: relative;
  .imagepostion {
    position: absolute;
    top: 131px;
    right: 0;
  }
  .imagepostion2 {
    position: absolute;
    top: 247px;
    right: 0;
  }
`;
const DetailMain = styled.div`
  display: flex;
  padding-bottom: 100px;
`;
const LinePostion = styled.div`
  position: absolute;
  top: 15px;
  right: -45px;
`;
const DetailRight = styled.div`
  padding: 30px 0;
  .mr10 {
    padding-top: 10px;
  }
`;
const RightWrap = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 60px;
  align-items: flex-start;
`;
const DetailTxt = styled.div`
  p {
    ${Label};
    color: ${({ theme }) => theme.colors.lightgray};
    margin: 0 0 12px 0;
  }
  span {
    ${Body4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    ${Body4};
  }
  .tooltip {
    position: relative;
    display: inline-block;
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    opacity: 0;
    width: 834px;
    border-radius: 6px;
    padding: 24px 32px;
    ${Body4};
    background-color: ${({ theme }) => theme.colors.greendark};
    color: ${({ theme }) => theme.colors.greenlight};
    /* Position the tooltip */
    position: absolute;
    z-index: 2;
    top: 40px;
    left: 0;
    margin-left: -54px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
    ::after {
      content: '';
      position: absolute;
      width: 46px;
      border-top: 2px solid #00160e;
      transform: rotate(90deg);
      top: 0;
      left: 42px;
      z-index: -1;
    }
  }
`;
const HelpWrap = styled.div`
  display: flex;
  gap: 12px;
`;
const RightTxt = styled.div`
  background-color: ${({ theme }) => theme.colors.greenlight};
  padding: 7px 20px;
  margin-top: 12px;
  display: inline-block;
  h4 {
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
  padding-bottom: 100px;
  h3 {
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
const MainBg = styled.div`
  background-color: #fffffd;
`;
const ImgView = styled.div`
  max-width: 35px;
  max-height: 35px;
`;
const ImageWrap = styled.div`
  display: block;
  max-height: 543px;
  height: 100%;
  box-shadow: 0px 0px 25.4474px rgba(0, 0, 0, 0.07);
  border-radius: 5px;
`;
const Tooltip = styled.div``;
const AppsDetailWrap = styled.div`
  padding: 40px 0;
  p {
    margin: 20px 0 32px 0;
    ${Body2};
    color: ${({ theme }) => theme.colors.body};
  }
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
  CardSection,
  CardMain,
  MainBg,
  ImgView,
  ImageWrap,
  Tooltip,
  AppsHeroWrap,
  AppsDetailWrap,
  FirstImg,
  ExtensionsLastSection
};
