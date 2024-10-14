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
  MobileH4,
  MobileH2,
  MbButtonText,
  MbBody2
} from './styles';

const HomeMain = styled.div`
  background-color: var(--bg-pages);
  padding-bottom: 50px;
  @media only screen and (max-width: 749px) {
    padding-bottom: 0;
  }
`;

const HeroSection = styled.div`
  width: 100%;
  padding: 180px 0 50px 0;
  text-align: center;
  overflow: hidden;
  @media only screen and (max-width: 749px) {
    padding: 148px 0 40px 0;
  }
`;

const HeroHeading = styled.h1`
  ${Heading1};
  color: var(--title);
  margin: 0 0 40px 0;
  span {
    color: var(--primary);
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
    color: var(--dark-green);
  }
`;

const Para = styled.p`
  ${Body1}
  letter-spacing: 0.02em;
  margin: 0;
  color: var(--body);
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

const ReviewLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  display: inline-block;
  max-height: 43px;
`;
const BusinessSection = styled.div`
  box-shadow: 0px -26px 32px var(--black-shadow-8);
  position: relative;
  z-index: 1;
  padding: 100px 0 100px;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    padding: 80px 0 80px;
  }
  @media only screen and (max-width: 449px) {
    padding: 80px 0 40px;
  }
`;
const BusinessText = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-bottom: 40px;
  gap: 120px;
  h2 {
    ${Heading3};
    margin: 0;
    color: var(--title);
    padding-bottom: 16px;
    span {
      color: var(--primary);
    }
  }
  p {
    max-width: 1164px;
    width: 100%;
    ${Body3};
    margin: 0;
    color: var(--body);
    letter-spacing: 0.02em;
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 32px;
    gap: 20px;
    h2 {
      padding-bottom: 0;
      ${MobileH2};
      line-height: 50px;
      color: var(--dark-green);
    }
    p {
      ${Body3};
    }
  }
  @media only screen and (max-width: 449px) {
    flex-direction: column;
    padding-bottom: 32px;
    gap: 16px;
    h2 {
      padding-bottom: 0;
      ${MobileH3};
      color: var(--dark-green);
    }
    p {
      ${MbBody3};
    }
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 810px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Functionality = styled.div`
  padding: 0px 0 50px;
  ${(props) =>
    props.isStandardPage &&
    css`
      padding: 0 0 100px;
    `}
  @media only screen and (max-width: 768px) {
    padding: 0 0 40px;
    ${(props) =>
      props.isStandardPage &&
      css`
        padding: 0 0 80px;
      `}
  }
`;
const IconWrap = styled.div`
  position: relative;
  margin-bottom: 28px;
  ::after {
    content: '';
    position: absolute;
    border-top: 1px solid var(--black);
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
    border-top: 1px solid var(--dark-green);
    border-left: 1px solid var(--dark-green);
    border-bottom: 1px solid var(--dark-green);
    border-radius: 4px 0px 0 4px;
  }
  ::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 10px;
    border-top: 1px solid var(--dark-green);
    border-right: 1px solid var(--dark-green);
    border-bottom: 1px solid var(--dark-green);
    border-radius: 0px 4px 4px 0px;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ContainWrap = styled.div`
  display: flex;
  padding-top: 40px;
  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 0;
    padding-top: 0;
  }
  ${(props) =>
    props.isAutomation &&
    css`
      padding-bottom: 50px;
      @media only screen and (max-width: 768px) {
        padding-bottom: 30px;
      }
    `}
`;
const LeftDetail = styled.div`
  width: 100%;
  max-width: 278px;
  margin-right: 28px;
  h3 {
    margin: 0 0 12px 0;
    ${Heading4};
    color: var(--title);
  }
  p {
    ${Body4};
    letter-spacing: 0.02em;
    color: var(--body);
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
      color: var(--title);
    }
    p {
      ${MbBody4};
      letter-spacing: 0.02em;
      color: var(--body);
      margin: 0 0 24px 0;
    }
    .btnmobi {
      margin-bottom: 24px;
    }
  }
`;
const RightDetail = styled.div`
  border: 1px solid var(--black);
  border-radius: 5px;
  padding: 16px 18px;
  width: 100%;
  background: transparent;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
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
  ${(props) =>
    props.isAutomation &&
    css`
      padding: 0;
      img {
        width: 100%;
        max-width: 100%;
        border-radius: 5px;
        max-height: ${props?.isGifFile ? '276px' : '550px'};
      }
      @media only screen and (max-width: 749px) {
        padding: 0;
      }
    `}
`;
const Extension = styled.div`
  padding: 50px 0 100px;
  @media only screen and (max-width: 749px) {
    padding: 40px 0 80px;
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
  .automation-button {
    margin-top: 28px;
    a {
      color: var(--white);
      :hover {
        color: var(--white);
      }
    }
  }
  .active:hover {
    color: var(--title);
  }
  a {
    color: var(--primary);
    display: inline-block;
    :hover {
      color: var(--dark-green);
    }
  }
  h2 {
    ${Heading3};
    margin: 0;
    color: var(--title);
    padding-bottom: 16px;
  }
  p {
    ${Body3};
    margin: 0;
    color: var(--body);
    letter-spacing: 0.02em;
    max-width: 933px;
    width: 100%;
  }
  span {
    color: var(--primary);
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 0;
    p {
      ${Body3};
      letter-spacing: 0.02em;
      color: var(--body);
      margin: 0;
    }
  }
  @media only screen and (max-width: 449px) {
    p {
      ${MbBody3};
    }
  }
`;
const BottomList = styled.div`
  width: 100%;
  display: flex;
  gap: 63px;
  position: relative;
  ${(props) =>
    props.isAnimated &&
    css`
      text-align: left !important;
      filter: drop-shadow(0px 4.68797px 157.047px var(--primary));
      padding: 100px 0;
    `}
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
  background: var(--white);
  border: 1px solid var(--card-border-color);
  border-radius: 4px;
  padding: 16px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
  width: 100%;
  ${(props) =>
    props.isAnimated &&
    css`
      background: var(--dark-green);
      border: 1px solid var(--light-green);
    `}
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
    color: var(--title);
    letter-spacing: 0.02em;
    ${(props) =>
      props.isAnimated &&
      css`
        color: var(--light-green);
      `}
  }
  span {
    display: block;
    ${Body5};
    color: var(--body);
    letter-spacing: 0.02em;
    ${(props) =>
      props.isAnimated &&
      css`
        color: var(--light-green);
      `}
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
  border: 1px solid var(--black);
  border-radius: 4px;
  background-color: var(--white);
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
    color: var(--title);
    margin: 0 0 40px 0;
    span {
      color: var(--primary);
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
    color: var(--primary);
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
    color: var(--primary);
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
      color: var(--primary);
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
    color: var(--title);
    margin: 0 0 12px 0;
  }
  p {
    ${Body4};
    margin: 0 0 20px 0;
    color: var(--body);
  }
  @media only screen and (max-width: 749px) {
    h3 {
      ${MobileH4};
      color: var(--title);
      margin: 0 0 12px 0;
    }
    p {
      ${MbBody4};
      margin: 0 0 16px 0;
      color: var(--body);
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
  .app-store-button {
    a {
      text-transform: capitalize;
    }
  }
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
        fill: var(--hover);
      }
    }
  }
  @media only screen and (max-width: 991px) {
    :hover {
      svg {
        path {
          fill: var(--dark-green);
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
    color: var(--extra-text-color);
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
    ${(props) =>
    props.isAnimated &&
    css`
      background: linear-gradient(90deg, var(--light-green) 50%, transparent 50%);
      background-repeat: repeat-x;
      background-size: 10px 1px;
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
    ${(props) =>
    props.isAnimated &&
    css`
      background: linear-gradient(90deg, var(--light-green) 50%, transparent 50%);
      background-repeat: repeat-x;
      background-size: 10px 1px;
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
`;
const ZoomImage = styled.div`
  background: var(--modal-bg-color);
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
    color: var(--white);
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
    max-width: 75%;
    max-height: 85%;
    height: auto;
    @media only screen and (max-width: 1440px) {
      width: 100%;
      max-width: 75%;
      height: auto;
    }
    @media only screen and (max-width: 1024px) {
      width: 100%;
      max-width: 75%;
      height: auto;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
      max-width: 90%;
      height: auto;
    }
  }
`;

const Responsive = styled.div`
  display: none;
  @media only screen and (max-width: 449px) {
    display: flex;
  }
`;
const Desktop = styled.div`
  display: none;
  margin-bottom: 50px;
`;

const Block = styled.div`
  display: flex;
  align-items: end;
  gap: 32px;
`;

const SliderButton = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 40px;
  @media only screen and (max-width: 449px) {
    justify-content: center;
    padding-top: 32px;
    padding-bottom: 0;
  }
`;

const Arrow = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    border: 1px solid var(--title);
    transition: all 0.3s;
    svg {
      path {
        stroke: var(--title);
      }
    }
  }
  ${(props) =>
    props.isDisabled &&
    css`
      cursor: no-drop;
      pointer-event: none;
      :hover {
        border: 1px solid var(--border);
        svg {
          path {
            stroke: var(--border);
          }
        }
      }
    `}
`;

const SliderBlock = styled.div``;

const ButtonGroup = styled.div`
  @media only screen and (max-width: 449px) {
    display: none;
  }
`;
const ResponsiveButtonGroup = styled.div`
  display: none;
  @media only screen and (max-width: 449px) {
    display: block;
  }
`;
const BusinessSectionText = styled.div`
  width: 100%;
  padding-bottom: 40px;
  h2 {
    ${Heading3};
    margin: 0;
    color: var(--title);
    padding-bottom: 16px;
    span {
      color: var(--primary);
    }
  }
  p {
    max-width: 1164px;
    width: 100%;
    ${Body3};
    margin: 0;
    color: var(--body);
    letter-spacing: 0.02em;
    width: 100%;
  }
  .app-dec {
    width: 100%;
    max-width: 810px;
  }
  .block-button {
    margin-top: 28px;
  }
  @media only screen and (max-width: 749px) {
    padding-bottom: 32px;
    h2 {
      ${MobileH3};
      color: var(--dark-green);
    }
    p {
      ${MbBody3};
    }
  }
`;
export {
  HomeMain,
  HeroSection,
  HeroHeading,
  Para,
  HeroBtnBlock,
  ReviewLogo,
  BusinessSection,
  BusinessText,
  Functionality,
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
  HelpSection,
  HelpMain,
  HelpLeft,
  HelpLeftSub,
  HelpLink,
  HelpWrap,
  HelpMargin,
  IconSvg,
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
  ImageDiv,
  Responsive,
  Desktop,
  Block,
  SliderButton,
  Arrow,
  SliderBlock,
  ButtonGroup,
  ResponsiveButtonGroup,
  BusinessSectionText
};
