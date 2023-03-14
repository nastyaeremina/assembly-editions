import styled, { css } from 'styled-components';
import Iconview from '../components/iconview/iconview';
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
  LinkTxt,
  MbBody1,
  MobileH3,
  MbBody3,
  MbBody4,
  HeaderFont,
  MobileH4
} from './styles';

const HomeMain = styled.div`
  background-color: ${({ theme }) => theme.colors.bgpages};
  padding-bottom: 50px;
  @media only screen and (max-width: 749px) {
    padding-bottom: 0;
  }
`;
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
  @media only screen and (max-width: 749px) {
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
  @media only screen and (max-width: 749px) {
    margin: 0 -12px;
  }
  @media only screen and (max-width: 749px) {
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
  @media only screen and (max-width: 749px) {
    opacity: 1;
  }
  @media only screen and (max-width: 749px) {
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
  @media only screen and (max-width: 749px) {
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
  @media only screen and (max-width: 749px) {
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
  @media only screen and (max-width: 749px) {
    padding: 0;
  }
`;

const HeroSection = styled.div`
  width: 100%;
  padding: 224px 0 50px 0;
  text-align: center;
  overflow: hidden;
  @media only screen and (max-width: 749px) {
    padding: 148px 0 40px 0;
  }
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
  color: ${({ theme }) => theme.colors.title};
  margin: 0 0 40px 0;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media only screen and (max-width: 991px) {
    text-align: center;
    font-size: 110px;
    line-height: 100px;
  }
  @media only screen and (max-width: 749px) {
    margin-bottom: 20px;
    font-size: 60px;
    line-height: 54px;
    color: ${({ theme }) => theme.colors.greendark};
  }
`;

const Para = styled.p`
  ${Body1}
  letter-spacing: 0.02em;
  margin: 0;
  color: ${({ theme }) => theme.colors.body};
  @media only screen and (max-width: 991px) {
    text-align: center;
    ${Body1}
  }
  @media only screen and (max-width: 749px) {
    ${MbBody1};
  }
`;

const HeroBtnBlock = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 749px) {
    gap: 16px;
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
  @media only screen and (max-width: 749px) {
    display: none;
  }
`;

const SmsModal = styled.div`
  position: absolute;
  top: 71px;
  right: -54px;
  @media only screen and (max-width: 749px) {
    display: none;
  }
`;

const CallModal = styled.div`
  position: absolute;
  right: 0;
  bottom: -28px;
  @media only screen and (max-width: 749px) {
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
  display: inline-block;
  max-height: 43px;
`;
const Reviewimage = styled.div`
  display: flex;
  gap: 3px;
  :hover {
    display: none;
  }
`;
const ReviewRight = styled.div`
  p {
    ${Caption};
    margin: 0;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.caption};
  }
`;
const BusinessSection = styled.div`
  padding: 100px 0 50px;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    padding: 80px 0 100px;
  }
`;
const BusinessText = styled.div`
  width: 100%;
  padding-bottom: 40px;
  h2 {
    ${Heading3};
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
    padding-bottom: 16px;
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  p {
    max-width: 1164px;
    width: 100%;
    ${Body3};
    margin: 0;
    color: ${({ theme }) => theme.colors.bodycolor};
    letter-spacing: 0.02em;
    width: 100%;
  }
  .app-dec {
    width: 100%;
    max-width: 810px;
  }
  @media only screen and (max-width: 749px) {
    padding-bottom: 32px;
    h2 {
      ${MobileH3};
      color: ${({ theme }) => theme.colors.greendark};
    }
    p {
      ${MbBody3};
    }
  }
`;
const Functionality = styled.div`
  padding: 0px 0 50px;
  @media only screen and (max-width: 749px) {
    padding: 40px 0;
  }
  .ak {
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 749px) {
    .ak {
      margin-bottom: 28px;
    }
  }
`;
const TopFunctionWrap = styled.div`
  width: 100%;
  max-width: 1020px;
  .titlewrap {
    max-width: 820px;
  }
  h2 {
    margin: 0 0 16px 0;
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
    @media only screen and (max-width: 991px) {
      font-size: 44px;
      line-height: 50px;
    }
    @media only screen and (max-width: 749px) {
      ${MobileH3};
    }
  }
  p {
    ${Body3};
    color: ${({ theme }) => theme.colors.body};
    margin: 0;
    @media only screen and (max-width: 749px) {
      ${MbBody3};
    }
  }
`;
const BottomFunction = styled.div`
  margin-top: 40px;
  .am {
    font-family: 'Bagoss';
    letter-spacing: 0.02em;
  }
  .af {
    width: 100%;
  }
  @media only screen and (max-width: 749px) {
    margin-top: 28px;
  }
  .ml0 {
    margin-left: -6px;
  }
`;
const TabRow = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    display: block;
  }

  .tabcss {
    background-color: ${({ theme }) => theme.colors.browndark};
    color: ${({ theme }) => theme.colors.brownlight};
    border-radius: 74px;
    ${Label};
    letter-spacing: 0.01em;
    padding: 7px 20px;

    :hover {
      color: ${({ theme }) => theme.colors.brownlight};
    }

    .b2 {
      padding-bottom: 0;
    }
    .b4 {
      ${(props) =>
        props.textColor &&
        css`
          color: ${props.textColor};
        `}
      ${(props) =>
        props.backColor &&
        css`
          background-color: ${props.bgColor};
        `}
    }
  }
  .ag {
    display: flex;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .bd {
    :hover {
      ${(props) =>
        props.textColor &&
        css`
          color: ${props.textColor};
        `}
    }
  }
  .ml0 {
  }
  .tabsecond {
    padding: 7px 20px;
    color: ${({ theme }) => theme.colors.lightgray};
    ${Label};
    letter-spacing: 0.01em;
  }
  .c1 {
    display: none;
  }

  .b8 {
    font-size: 17px;
    line-height: 21px;
  }
`;
const TabBox = styled.div`
  a {
    ${Label};
    color: ${({ theme }) => theme.colors.lightgray};
    padding: 7px 20px;
    border-radius: 74px;
    font-weight: 500;
    letter-spacing: 0.01em;
    :hover {
      color: ${({ theme }) => theme.colors.title};
    }
  }
  .activetab {
    background-color: ${({ theme }) => theme.colors.browndark};
    color: ${({ theme }) => theme.colors.brownlight};
    :hover {
      color: ${({ theme }) => theme.colors.brownlight};
    }
  }
`;
const IconWrap = styled.div`
  position: relative;
  margin-bottom: 28px;
  ::after {
    content: '';
    position: absolute;
    border-top: 1px solid #000000;
    max-width: 242px;
    width: 100%;
    top: 50%;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const IconSvg = styled.div`
  display: inline-block;
  width: 100%;
  position: relative;
  padding: 8px 10px;
  width: 64px;
  height: 60px;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 10px;
    border-top: 1px solid #00160e;
    border-left: 1px solid #00160e;
    border-bottom: 1px solid #00160e;
    border-radius: 4px 0px 0 4px;
  }
  ::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 10px;
    border-top: 1px solid #00160e;
    border-right: 1px solid #00160e;
    border-bottom: 1px solid #00160e;
    border-radius: 0px 4px 4px 0px;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const IconViewblank = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ccccd0;
  border-radius: 50px;
  position: absolute;
  right: 10px;
  top: -11px;
  display: inline-flex;
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
  display: flex;
  padding-top: 40px;
  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 28px;
    padding-top: 0;
  }
`;
const LeftDetail = styled.div`
  width: 100%;
  max-width: 278px;
  margin-right: 28px;
  h3 {
    margin: 0 0 12px 0;
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
  }
  p {
    ${Body4};
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.body};
    margin: 0 0 24px 0;
  }
  @media only screen and (max-width: 991px) {
    max-width: 100%;
    margin-right: 0;
    .btnmobi {
      margin-bottom: 24px;
    }
  }
  @media only screen and (max-width: 749px) {
    max-width: 100%;
    margin-right: 0;
    h3 {
      margin: 0 0 8px 0;
      ${Heading4};
      color: ${({ theme }) => theme.colors.title};
    }
    p {
      ${MbBody4};
      letter-spacing: 0.02em;
      color: ${({ theme }) => theme.colors.body};
      margin: 0 0 24px 0;
    }
    .btnmobi {
      margin-bottom: 24px;
    }
  }
`;
const RightDetail = styled.div`
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 16px 18px;
  width: 100%;
  background: transparent;
  position: relative;
  cursor: pointer;
  @media only screen and (max-width: 749px) {
    margin-top: 4px;
    padding: 5px 6px;
  }
  img {
    height: 100%;
    max-width: 880px;
    width: 100%;
    max-height: 550px;
    display: block;
  }
`;
const Extension = styled.div`
  padding: 50px 0;
  @media only screen and (max-width: 749px) {
    padding: 40px 0;
  }
`;
const AutomateSection = styled.div`
  padding: 50px 0;
  @media only screen and (max-width: 749px) {
    padding: 40px 0;
  }
`;
const AutomateText = styled.div`
  max-width: 975px;
  width: 100%;
  margin-bottom: 40px;
  .active:hover {
    color: ${({ theme }) => theme.colors.title};
  }
  h2 {
    ${Heading3};
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
    padding-bottom: 16px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    display: inline-block;
  }
  p {
    ${Body3};
    margin: 0;
    color: ${({ theme }) => theme.colors.bodycolor};
    letter-spacing: 0.02em;
    max-width: 933px;
    width: 100%;
  }
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media only screen and (max-width: 749px) {
    max-width: 100%;
    margin-bottom: 0;
    p {
      ${MbBody3};
      letter-spacing: 0.02em;
      color: ${({ theme }) => theme.colors.body};
      margin: 0;
    }
  }
`;
const BottomList = styled.div`
  width: 100%;
  display: flex;
  gap: 63px;
  position: relative;
  @media only screen and (max-width: 991px) {
    display: none;
  }
  @media only screen and (max-width: 749px) {
    display: none;
  }
`;
const CardWrapper = styled.div`
  max-width: 366px;
  width: 100%;

  :last-child {
    padding-right: 0;
  }
  :first-child {
    padding-left: 0;
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
  margin-bottom: 40px;
  width: 100%;
  :last-child {
    margin-bottom: 0;
  }
  .hr-icon {
    transform: translate(0, -50%);
    right: -68px;
  }
`;
const CardTextView = styled.div`
  margin-left: 15px;
  p {
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
  background-color: #ccccd0;
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
  .path {
    opacity: 0.3;
    animation-duration: 15s;
  }
  .path1 {
    animation-name: dash;
    animation-timing-function: linear;
  }
  .path2 {
    animation-name: dash2;
    /* animation-delay: 6.5s; */
    animation-timing-function: linear;
  }
  .path3 {
    animation-name: dash;
    animation-timing-function: linear;
  }
  .path4 {
    animation-name: dash2;
    /* animation-delay: 9s; */
    animation-direction: reverse;
    animation-timing-function: linear;
  }
  @keyframes dash {
    0% {
      stroke-dashoffset: 0;
      opacity: 0.3;
    }
    30% {
      stroke-dashoffset: 0;
      opacity: 0.3;
    }
    31% {
      stroke-dashoffset: 100;
      opacity: 1;
    }
    60% {
      stroke-dashoffset: 100;
      opacity: 1;
    }
    61% {
      stroke-dashoffset: 0;
      opacity: 0.3;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 0.3;
    }
  }
  @keyframes dash2 {
    0% {
      opacity: 0.3;
    }
    90% {
      opacity: 0.3;
      stroke-dashoffset: 0;
    }
    91% {
      stroke-dashoffset: 100;
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;
const HelpSection = styled.div`
  padding: 50px 0;
  @media only screen and (max-width: 749px) {
    padding: 40px 0 80px;
  }
`;
const HelpMain = styled.div`
  display: flex;
  align-items: stretch;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  image {
    border-radius: 0px 4px 4px 0px;
    max-width: 100%;
  }
  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
  }
`;
const HelpLeft = styled.div`
  padding: 60px;
  h2 {
    ${Heading3}
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 40px 0;
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  @media only screen and (max-width: 991px) {
    padding: 30px;
  }
  @media only screen and (max-width: 749px) {
    padding: 20px 20px 28px 20px;
    max-width: 100%;
    h2 {
      max-width: 100%;
      margin-bottom: 28px;
    }
    display: block;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const HelpLeftSub = styled.div`
  max-width: 315px;
  width: 100%;
  / .learn-link,
  .learn-link svg path {
    transition: all 300ms ease;
  }
  a {
    ${LinkTxt};
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: none;
    :hover .HoverArrow__linePath {
      opacity: 1;
      fill: none;
      fill: black;
      @media only screen and (max-width: 749px) {
        opacity: 0;
      }
    }
    :hover .HoverArrow__tipPath {
      transform: translateX(2px);
      @media only screen and (max-width: 749px) {
        transform: none;
      }
    }
  }

  .learn-link:hover {
    color: black;
    @media only screen and (max-width: 749px) {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  .learn-link svg path {
    transition: all 300ms ease;
  }
  .HoverArrow__linePath {
    opacity: 0;
    fill: none;
  }
  .HoverArrow {
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
    position: relative;
    margin-left: var(--arrowSpacing);
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
    margin-left: 8px;
    --arrowSpacing: 5px;
    --arrowHoverTransition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
    --arrowHoverOffset: translateX(3px);
    @media only screen and (max-width: 749px) {
      display: none;
    }
    @media only screen and (max-width: 376px) {
      margin-left: 4px;
    }
  }
  .mobilearrow {
    display: none;
    @media only screen and (max-width: 749px) {
      position: relative;
      display: block;
    }
  }
  h3 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 12px 0;
  }
  p {
    ${Body4};
    margin: 0 0 20px 0;
    color: ${({ theme }) => theme.colors.bodycolor};
  }
  @media only screen and (max-width: 749px) {
    h3 {
      ${MobileH4};
      color: ${({ theme }) => theme.colors.title};
      margin: 0 0 12px 0;
    }
    p {
      ${MbBody4};
      margin: 0 0 16px 0;
      color: ${({ theme }) => theme.colors.bodycolor};
    }
    a {
      ${HeaderFont};
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;
const HelpImg = styled.div`
  margin-top: -1px;
  img {
    display: block;
    height: 100%;
  }
  @media only screen and (max-width: 991px) {
    display: none;
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
const HelpLink = styled.div`
  display: flex;
`;
const HelpWrap = styled.div`
  display: flex;
  gap: 28px;
  @media only screen and (max-width: 749px) {
    flex-wrap: wrap;
  }
`;
const HelpMargin = styled.div`
  margin-top: 40px;
  @media only screen and (max-width: 749px) {
    margin-top: 28px;
  }
`;
const BtnView = styled.div`
  margin-top: 28px;
`;
const ImageHover = styled.a`
  transition: 300ms all ease-in-out;
  animation: fadeIn ease 0.3s;
  -webkit-animation: fadeIn ease 0.3s;
  -moz-animation: fadeIn ease 0.3s;
  -o-animation: fadeIn ease 0.3s;
  -ms-animation: fadeIn ease 0.3s;
  display: inline-block;
  cursor: pointer;
  position: relative;
  display: flex;
  gap: 10px;
  svg {
    path {
      transition: 0.3s;
    }
  }
  :hover {
    svg {
      path {
        fill: #ff492c;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    :hover {
      svg {
        path {
          fill: #00160e;
        }
      }
    }
  }
  .show {
    display: block;
    opacity: 1;
    transition: 300ms all ease-in;
    animation: fadeIn ease 0.3s;
    -webkit-animation: fadeIn ease 0.3s;
    -moz-animation: fadeIn ease 0.3s;
    -o-animation: fadeIn ease 0.3s;
    -ms-animation: fadeIn ease 3s;
  }
  :hover .show {
    opacity: 0;
  }
  :hover .hide {
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    visibility: visible;
  }
  .hide {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transition: 300ms all ease-out;
    animation: fadeIn ease 0.3s;
    -webkit-animation: fadeIn ease 0.3s;
    -moz-animation: fadeIn ease 0.3s;
    -o-animation: fadeIn ease 0.3s;
    -ms-animation: fadeIn ease 3s;
  }
`;
const LeftSvg = styled.div``;
const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #6e847c;
    margin: 0 0 0 0px;
    padding-left: 3px;
  }
`;

const AnimatedIcon = styled(Iconview)`
  .icon {
    opacity: 0;
    display: block;
    position: absolute;
    right: 10px;
  }
  .default-state {
    opacity: 1;
  }
  .loading-state {
    animation-duration: 15s;
    animation-iteration-count: infinite;
  }
  .done-state {
    animation-duration: 15s;
    animation-iteration-count: infinite;
  }
  &&.card1 .loading-state {
    animation-name: example1;
  }
  &&.card1 .done-state {
    animation-name: example2;
  }
  &&.card2 .loading-state {
    animation-name: example3;
  }
  &&.card2 .done-state {
    animation-name: example4;
  }
  &&.card3 .loading-state {
    animation-name: example5;
  }
  &&.card3 .done-state {
    animation-name: example6;
  }
  @keyframes example1 {
    0% {
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    31% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes example2 {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    31% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes example3 {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    31% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    61% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes example4 {
    0% {
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    61% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes example5 {
    0% {
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    61% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    91% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes example6 {
    0% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    91% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;
const Line1 = styled.div`
  position: absolute;
  width: 100%;
  background: linear-gradient(90deg, black 50%, transparent 50%);
  background-repeat: repeat-x;
  background-size: 10px 1px;
  background-position: 0 0;
  opacity: 0.3;
  animation: dash 15s linear infinite;
  ${(props) =>
    props.isAnimationline2 &&
    css`
      width: 125px;
      top: 56px;
      left: auto;
      right: -23px;
      transform: rotate(90deg);
    `}
  ${(props) =>
    props.isAnimationline3 &&
    css`
      width: 50%;
      bottom: -15px;
      right: 0;
    `}
  @keyframes dash {
    0% {
      background-position: 0 0;
    }
    30% {
      background-position: 0 0;
      opacity: 0.3;
    }
    31% {
      opacity: 1;
    }
    59% {
      opacity: 1;
    }
    60% {
      background-position: 100px 0;
      opacity: 0.3;
    }
    100% {
      background-position: 100px 0;
    }
  }
`;
const Line2 = styled.div`
  position: absolute;
  width: 100%;
  background: linear-gradient(90deg, black 50%, transparent 50%);
  background-repeat: repeat-x;
  background-size: 10px 1px;
  background-position: 0 0;
  opacity: 0.3;
  animation: dash2 15s linear infinite;
  ${(props) =>
    props.isAnimationline2 &&
    css`
      width: 125px;
      top: 56px;
      left: auto;
      right: -23px;
      transform: rotate(90deg);
    `}
  ${(props) =>
    props.isAnimationline3 &&
    css`
      width: 50%;
      bottom: -15px;
      right: 0;
    `}
  @keyframes dash2 {
    0% {
      background-position: 0 0;
    }
    30% {
      background-position: 0 0;
    }
    60% {
      background-position: 0 0;
      opacity: 0.3;
    }
    61% {
      opacity: 1;
    }
    89% {
      opacity: 1;
    }
    90% {
      background-position: 100px 0;
      opacity: 0.3;
    }
    100% {
      background-position: 100px 0;
    }
  }
`;
const Line = styled.div`
  width: 65px;
  height: 120px;
  overflow: hidden;
  position: absolute;
  left: auto;
  right: -65px;
  top: 40px;
`
const ZoomImage = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  p {
    font-weight: 500;
    font-size: 13px;
    line-height: 24px;
    letter-spacing: 0.02;
    color: #ffffff;
    margin: 0;
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 1;
    @media only screen and (min-width: 2160px) {
      font-size: 1vw;
    }
  }
`;
const ImageDiv = styled.div`
  .onzoom {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    border-radius: 5px;
    z-index: 1;
    max-width:75%;
    max-height: 75%;
    @media only screen and (max-width: 768px) {
      width: 100%;
      max-width: 90%;
      height:auto;
      /* max-height:75%; */
    }
  }
`;
export {
  HomeMain,
  Scfeaturetitle,
  FeatureTag,
  SectionHeading,
  FeatureBlock,
  FeatureItem,
  FeatureImg,
  FeatureCardTitle,
  LearnMoreLink,
  FeatureWrapBlock,
  HeroSection,
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
  IconSvg,
  IconViewblank,
  BtnView,
  ImageHover,
  HelpImg,
  IconWrap,
  LeftSvg,
  RightWrap,
  AnimatedIcon,
  Line1,
  Line2,
  Line,
  ZoomImage,
  ImageDiv
};
