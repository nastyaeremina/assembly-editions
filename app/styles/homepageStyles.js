import styled, { css } from 'styled-components';
import Iconview from '../components/iconview/iconview';
import { AutomationCardVariant } from '../constants/constant';
import { body_regular, h4_semibold, tag } from './typography';

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
    ${h4_semibold};
    color: var(--title);
  }
  p {
    ${body_regular};
    letter-spacing: 0.02em;
    color: var(--text-secondary);
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
    }
    p {
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

const BottomList = styled.div`
  width: 100%;
  display: flex;
  gap: 63px;
  position: relative;
  ${(props) =>
    props.variant === AutomationCardVariant.GREEN &&
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
    props.variant === AutomationCardVariant.GREEN &&
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
    ${body_regular};
    color: var(--title);
    ${(props) =>
      props.variant === AutomationCardVariant.GREEN &&
      css`
        color: var(--light-green);
      `}
  }
  span {
    display: block;
    ${body_regular};
    color: var(--text-secondary);
    ${(props) =>
      props.variant === AutomationCardVariant.GREEN &&
      css`
        color: var(--light-green);
      `}
  }
`;

const HelpLeftSub = styled.div`
  max-width: 315px;
  width: 100%;
  .learn-link,
  .learn-link svg path {
    transition: all 300ms ease;
  }
  a {
    ${body_regular};
    margin: 0;
    color: var(--title);
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
      color: var(--text-secondary);
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
    ${h4_semibold};
    color: var(--title);
    margin: 0 0 12px 0;
  }
  p {
    ${body_regular};
    margin: 0 0 20px 0;
    color: var(--text-secondary);
  }
  @media only screen and (max-width: 749px) {
    h3 {
      margin: 0 0 12px 0;
    }
    p {
      color: var(--body);
    }
    a {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;

const HelpLink = styled.div`
  display: flex;
`;

const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  p {
    ${body_regular}
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

const AnimatedLine = styled.div`
  position: absolute;
  width: 100%;
  background: linear-gradient(90deg, black 50%, transparent 50%);
  background-repeat: repeat-x;
  background-size: 10px 1px;
  background-position: 0 0;
  opacity: 0.3;
  animation: dash 15s linear infinite;
  ${(props) =>
    props.isSecondaryAnimation &&
    css`
      width: 125px;
      top: 56px;
      left: auto;
      right: -23px;
      transform: rotate(90deg);
    `}
  ${(props) =>
    props.isFinalAnimation &&
    css`
      width: 50%;
      bottom: -15px;
      right: 0;
    `}
    ${(props) =>
    props.variant === AutomationCardVariant.GREEN &&
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

const StaticLine = styled.div`
  position: absolute;
  width: 100%;
  background: linear-gradient(90deg, black 50%, transparent 50%);
  background-repeat: repeat-x;
  background-size: 10px 1px;
  background-position: 0 0;
  opacity: 0.3;
  animation: dash2 15s linear infinite;
  ${(props) =>
    props.isSecondaryAnimation &&
    css`
      width: 125px;
      top: 56px;
      left: auto;
      right: -23px;
      transform: rotate(90deg);
    `}
  ${(props) =>
    props.isFinalAnimation &&
    css`
      width: 50%;
      bottom: -15px;
      right: 0;
    `}
    ${(props) =>
    props.variant === AutomationCardVariant.GREEN &&
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
    ${tag}
    color: var(--white);
    margin: 0;
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 1;
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

export {
  Functionality,
  ContainWrap,
  LeftDetail,
  RightDetail,
  BottomList,
  CardWrapper,
  CardItem,
  CardTextView,
  HelpLeftSub,
  HelpLink,
  IconSvg,
  IconWrap,
  RightWrap,
  AnimatedIcon,
  AnimatedLine,
  StaticLine,
  Line,
  ZoomImage,
  ImageDiv,
  Responsive,
  Desktop
};
