import styled, { css } from "styled-components";
import {
  Body1,
  Body3,
  Body4,
  Body5,
  Caption,
  Heading1,
  Heading3,
  Heading4,
  Body2,
  Label,
} from "./styles";

const Scfeaturetitle = styled.div`
  max-width: 720px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FeatureTag = styled.div`
  padding: 3px 12px;
  display: inline-flex;
  border-radius: 26px;
  background-color: ${({ theme }) => theme.colors.lightBg};
  span {
    ${Body2}
    color: ${({ theme }) => theme.colors.manatee};
  }
`;
const SectionHeading = styled.h2`
  margin: 16px 0 0 0;
  ${Heading3}
  text-align: center;
  color: ${({ theme }) => theme.colors.texrColor};
`;
const FeatureWrapBlock = styled.div`
  width: 100%;
  max-width: 896px;
  margin: 14px auto 0 auto;
  @media only screen and (max-width: 768px) {
    margin: 24px 0 0 0;
  }
`;
const FeatureBlock = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -16px;
  @media only screen and (max-width: 768px) {
    margin: 0 -12px;
  }
  @media only screen and (max-width: 479px) {
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
  }
`;
const LearnMoreLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0 0 0;
  opacity: 0;
  transition: all 300ms;
  span {
    ${Body2};
    font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
    margin: 0 6px 0 0;
    color: ${({ theme }) => theme.colors.primary};
  }
  @media only screen and (max-width: 768px) {
    opacity: 1;
  }
  @media only screen and (max-width: 479px) {
    span {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
const FeatureImg = styled.div`
  text-align: center;
  transition: all 300ms;
`;
const FeatureCardTitle = styled.h3`
  margin: 16px 0 0 0;
  ${Body2}
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
  transition: all 300ms;
  @media only screen and (max-width: 479px) {
    margin: 10px 0 0 0;
    font-size: 14px;
    line-height: 20px;
  }
`;
const FeatureItem = styled.li`
  padding: 16px;
  margin-bottom: 0;
  a {
    max-width: 200px;
    min-width: 200px;
    width: 100%;
    height: 200px;
    display: block;
    text-decoration: none;
    padding: 20px 16px;
    border-radius: 12px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.lotion};
    border: 1px solid transparent;
    transition: all 300ms ease-in-out;
    :hover {
      border: 1px solid ${({ theme }) => theme.colors.borderColor};
      background-color: ${({ theme }) => theme.colors.whiteColor};
      box-shadow: var(--shadowCard);
      ${FeatureImg} {
        transform: translate3d(0, -12px, 0);
      }
      ${FeatureCardTitle} {
        transform: translate3d(0, -20px, 0);
      }
      ${LearnMoreLink} {
        opacity: 1;
        transform: translate3d(0, -23px, 0);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 12px;
    a {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      height: auto;
      :hover {
        border: 1px solid transparent;
        background-color: ${({ theme }) => theme.colors.lotion};
        box-shadow: none;
        ${FeatureImg} {
          transform: translate3d(0, 0, 0);
        }
        ${FeatureCardTitle} {
          transform: translate3d(0, 0, 0);
        }
        ${LearnMoreLink} {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    }
  }
  @media only screen and (max-width: 479px) {
    padding: 0;
  }
`;
const FeatureLinkBlock = styled.div``;

const HeroSection = styled.div`
  width: 100%;
  padding: 160px 0 120px 0;
  text-align: center;
  /* background-image: url("/images/Frame-1-figma-1.webp"); */
  /* background-position: center;
  background-size: cover;
  background-repeat: no-repeat; */
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    padding: 136px 0 84px 0;
  }
  @media only screen and (max-width: 479px) {
    padding: 120px 0 40px 0;
  }
`;

const HeroMainBlock = styled.div`
  /* display: flex;
  align-items: center;
  margin-bottom: 100px;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 40px;
  } */
`;

const HeroLeft = styled.div`
  max-width: 534px;
  width: 100%;
  margin: 24px 35px 24px 0;
  @media only screen and (max-width: 991px) {
    max-width: 100%;
    margin: 0 0 24px 0;
  }
`;
const HeroHeading = styled.h1`
  ${Heading1};
  color: ${({ theme }) => theme.colors.greendark};
  margin: 0 0 40px 0;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media only screen and (max-width: 991px) {
    text-align: center;
  }
`;

const Para = styled.p`
  ${Body1}
  letter-spacing: 0.02em;
  margin: 0;
  color: ${({ theme }) => theme.colors.title};
  @media only screen and (max-width: 991px) {
    text-align: center;
    ${Body1}
  }
`;

const HeroBtnBlock = styled.div`
  margin: 42px 0;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
  }
  @media only screen and (max-width: 479px) {
    flex-direction: column;
    margin-top: 16px;
    button {
      max-width: 220px;
      width: 100%;
      a {
        width: 100%;
      }
      :last-child {
        margin-left: 0;
        margin-top: 12px;
      }
    }
  }
`;

const HeroRight = styled.div`
  position: relative;
  transform: translate(80px);
  @media only screen and (max-width: 991px) {
    transform: translate(0);
  }
`;

const MainModal = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const EmailModal = styled.div`
  position: absolute;
  left: -60px;
  top: 86px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SmsModal = styled.div`
  position: absolute;
  top: 71px;
  right: -54px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const CallModal = styled.div`
  position: absolute;
  right: 0;
  bottom: -28px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const PlayIcon = styled.div`
  display: flex;
`;

const PlayerWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -25%);
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 48px 0 rgb(0 0 0 / 32%);
  @media only screen and (max-width: 479px) {
    height: 48px;
    width: 48px;
    ${PlayIcon} {
      width: 12px;
    }
  }
`;

const LightBox = styled.div`
  background-color: fade(black, 80%);
  overflow: scroll;
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 999;
  ${(props) =>
    props.isLightBox &&
    css`
      display: flex;
    `}
`;

const LightBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 960px;
  width: 100%;
  margin: 7% auto;
  padding: 0 3%;
  height: auto;
  z-index: 10;
`;
const VideoContainer = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  padding-top: 30px;
  overflow: hidden;
  height: 0;
  iframe {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
`;
const CloseButton = styled.button`
  padding: 16px 0;
  margin-left: auto;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.whiteColor};
  @media only screen and (max-width: 991px) {
    font-size: 24px;
    padding: 12px 0;
  }
`;
const Iframe = styled.iframe``;
const ReviewLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Reviewimage = styled.div`
  display: flex;
  gap: 3px;
`;
const ReviewRight = styled.div`
  p {
    ${Caption};
    margin: 0;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.caption};
  }
`;
const BusinessSection = styled.div``;
const BusinessText = styled.div`
  max-width: 975px;
  width: 100%;
  padding-bottom: 50px;
  h2 {
    ${Heading3};
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
    padding-bottom: 20px;
  }
  p {
    ${Body3};
    margin: 0;
    color: ${({ theme }) => theme.colors.bodycolor};
    letter-spacing: 0.02em;
    padding-bottom: 32px;
    max-width: 852px;
    width: 100%;
  }
`;
const Functionality = styled.div`
  padding: 120px 0;
`;
const TopFunctionWrap = styled.div`
  width: 100%;
  max-width: 918px;
  h3 {
    margin: 0 0 20px 0;
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
  }
  p {
    ${Body3};
    color: ${({ theme }) => theme.colors.body};
    margin: 0;
  }
`;
const BottomFunction = styled.div`
  margin-top: 40px;
`;
const TabRow = styled.div`
  display: flex;
`;
const TabBox = styled.div`
  .activetab {
    background-color: #f4d8c4;
    color: ${({ theme }) => theme.colors.black};
  }
  a {
    ${Label};
    color: ${({ theme }) => theme.colors.lightgray};
    padding: 7px 20px;
    border-radius: 4px;
    font-weight: 500;
    letter-spacing: 0.01em;
    :hover {
      color: ${({ theme }) => theme.colors.title};
    }
    :active {
      background-color: #f4d8c4;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
const TabName = styled.span`
  display: block;
  margin-left: 12px;
  ${Body4};
  color: ${({ theme }) => theme.colors.body};
`;
const LeftB = styled.div`
  border-top: 1px solid #00160e;
  border-left: 1px solid #00160e;
  border-bottom: 1px solid #00160e;
  width: 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;
const RightB = styled.div`
  border-top: 1px solid #00160e;
  border-right: 1px solid #00160e;
  border-bottom: 1px solid #00160e;
  width: 10px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;
const CenterBox = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;
const ContainWrap = styled.div`
  margin-top: 32px;
  display: flex;
  width: 100%;
`;
const LeftDetail = styled.div`
  width: 100%;
  max-width: 278px;
  margin-right: 28px;
  h4 {
    margin: 0 0 16px 0;
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
  }
  p {
    ${Body4};
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.body};
    margin: 0 0 28px 0;
  }
`;
const RightDetail = styled.div`
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 18px 18px 13px;
  width: 100%;
`;
const Extension = styled.div``;
const AutomateSection = styled.div`
  padding: 120px 0;
`;
const AutomateText = styled.div`
  max-width: 975px;
  width: 100%;
  margin-bottom: 50px;
  h2 {
    ${Heading3};
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
    padding-bottom: 20px;
  }
  p {
    ${Body3};
    margin: 0;
    color: ${({ theme }) => theme.colors.bodycolor};
    letter-spacing: 0.02em;
    max-width: 933px;
    width: 100%;
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
const BottomList = styled.div`
  width: 100%;
  display: flex;
  margin: 0 -31.5px;
  position: relative;
`;
const CardWrapper = styled.div`
  width: 100%;
  max-width: 33.33%;
  padding: 0 31.5px;
  :last-child {
    padding-right: 0;
  }
`;
const CardItem = styled.div`
  background: #ffffff;
  border: 1px solid #212b36;
  border-radius: 4px;
  padding: 16px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 50px;
  width: 100%;
  .hr-icon {
    transform: translate(0, -50%);
    right: -68px;
  }
`;
const CardTextView = styled.div`
  margin-left: 15px;
  h5 {
    margin: 0 0 4px 0;
    ${Body4};
    color: ${({ theme }) => theme.colors.title};
    letter-spacing: 0.02em;
  }
  span {
    display: block;
    ${Body5};
    color: ${({ theme }) => theme.colors.body};
    letter-spacing: 0.02em;
  }
`;
const IconView = styled.div`
  position: absolute;
  right: 10px;
  top: -11px;
  display: inline-flex;
`;
const IconWithoutView = styled.div`
  width: 20px;
  height: 20px;
  background-color: #e9e9ea;
  border-radius: 50px;
  position: absolute;
  right: 10px;
  top: -11px;
`;
const LineIcon = styled.div`
  position: absolute;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(100%, 0);
`;
const HelpSection = styled.div`
  padding-top: 82px;
  padding-bottom: 120px;
`;

const HelpMain = styled.div`
  display: flex;
  border: 1.5px solid #000000;
  background-color: ${({ theme }) => theme.colors.whitecolor};
  image {
    border-radius: 0px 4px 4px 0px;
  }
`;
const HelpLeft = styled.div`
  padding: 60px;
  max-width: 777px;
  width: 100%;
  h3 {
    max-width: 553px;
    width: 100%;
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 42px 0;
  }
`;
const HelpLeftSub = styled.div`
  /* max-width: 315px;
  width: 100%; */
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 12px 0;
  }
  p {
    ${Body4};
    margin: 0 0 20px 0;
    color: ${({ theme }) => theme.colors.bodycolor};
  }
`;
const HelpLink = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const HelpWrap = styled.div`
  display: flex;
  gap: 27px;
`;
const HelpMargin = styled.div`
  margin-top: 67px;
`;

export {
  Scfeaturetitle,
  FeatureTag,
  SectionHeading,
  FeatureBlock,
  FeatureItem,
  FeatureLinkBlock,
  FeatureImg,
  FeatureCardTitle,
  LearnMoreLink,
  FeatureWrapBlock,
  HeroSection,
  HeroMainBlock,
  HeroLeft,
  HeroHeading,
  Para,
  HeroBtnBlock,
  HeroRight,
  MainModal,
  PlayerWrapper,
  EmailModal,
  SmsModal,
  CallModal,
  PlayIcon,
  LightBox,
  LightBoxContainer,
  VideoContainer,
  CloseButton,
  Iframe,
  ReviewLogo,
  Reviewimage,
  ReviewRight,
  BusinessSection,
  BusinessText,
  Functionality,
  TopFunctionWrap,
  BottomFunction,
  TabRow,
  TabBox,
  TabName,
  LeftB,
  RightB,
  CenterBox,
  ContainWrap,
  LeftDetail,
  RightDetail,
  Extension,
  AutomateSection,
  AutomateText,
  BottomList,
  CardWrapper,
  CardItem,
  CardTextView,
  IconView,
  IconWithoutView,
  LineIcon,
  HelpSection,
  HelpMain,
  HelpLeft,
  HelpLeftSub,
  HelpLink,
  HelpWrap,
  HelpMargin,
};
