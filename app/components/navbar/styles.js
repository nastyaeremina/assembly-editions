'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderFont, Body2, Body5, FooterText, MbButtonText, MbPrimaryBtn } from '../../styles/styles';
import {
  lightBg,
  greendark,
  greenlight,
  browndark,
  brownlight,
  title,
  bluedark,
  primary,
  whiteColor,
  black,
  bluelight,
  purpledark,
  purplelight,
  yellowdark,
  yellowlight,
  orangedark,
  orangelight,
  textColor
} from './../../styles/color';

const NavbarWrapper = styled.div`
  position: fixed;
  left: 0;
  ${(props) =>
    props.isAnnouncebar
      ? css`
          top: 44px;
        `
      : css`
          top: 0px;
        `}

  right: 0;
  bottom: auto;
  z-index: 999;
  padding: 20px 0;
  /* max-width: 1224px; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    css`
      background: ${props.colorList?.bgColor};
      border-bottom: 0px solid ${props.colorList?.borderBottomColor};
    `}
  &&.scroll {
    backdrop-filter: blur(6px);
    border-width: 1px;
  }
  @media only screen and (max-width: 991px) {
    padding: 24px 0;
    ${(props) =>
      props.isAnnouncebar &&
      css`
        top: 34px;
      `}
  }
  @media only screen and (max-width: 748px) {
    padding: 16px 0;
    ${(props) =>
      props.isAnnouncebar &&
      css`
        top: 34px;
      `}
  }
`;
const NavbarInner = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 60px;
  @media only screen and (max-width: 991px) {
    justify-content: space-between;
    gap: unset;
  }
`;
const CopilotLogo = styled(Image)`
  cursor: pointer;
  @media only screen and (max-width: 991px) {
    width: 96px;
    height: 22px;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    padding: 12px;
    position: absolute;
    left: 0;
    right: 0;
    padding: 0;
    background: #fdfdfb;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.7);
    animation: 0.2s ease-out 0s 1 slideInFromTop;
  }
  @keyframes slideInFromTop {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }
  @media only screen and (max-width: 991px) {
    display: none;
    ${(props) =>
      props.mobile &&
      css`
        display: flex !important;
      `}
  }
`;
const NavigationBlock = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 -14px;
  /* justify-content: space-between; */
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin: 0;
  }
`;
const LineMenuImg = styled.div`
  position: absolute;
  visibility: 0;
  opacity: 0;
  left: -10px;
  bottom: -27px;
  display: none;
  ${(props) =>
    props.lineColor &&
    css`
      svg {
        line {
          stroke: ${props?.lineColor} !important;
        }
      }
    `}
`;
const SpanLink = styled.li`
  position: relative;
  transition: color 300ms;
  a {
    ${HeaderFont}
    margin: 0 14px;
    ${(props) =>
      props.textColor &&
      css`
        color: ${props.textColor};
      `}
    cursor: pointer;
  }
  a:hover {
    ${(props) =>
      props.hoverColor &&
      css`
        color: ${props.hoverColor};
      `}
  }
  .hovernone {
    ${(props) =>
      props.textColor &&
      css`
        color: ${props.textColor};
      `}
  }
  .hovernone:hover {
    ${(props) =>
      props.hoverColor &&
      css`
        color: ${props.hoverColor};
      `}
  }
  &.active {
    a {
      ${(props) =>
        props.hoverColor &&
        css`
          color: ${props.hoverColor};
        `}
    }
  }
  :hover .dropdownlist {
    display: flex;
    min-width: 400px;
    width: 100%;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 0px;
    width: 100%;
    border-bottom: 1px solid #000000;
    :first-child {
      border-top: 1px solid #000000;
    }
    &.active {
      a {
        background-color: ${lightBg};
      }
    }
    a {
      padding: 20px 24px;
      display: block;
      border-radius: 0px;
      margin: 0;
    }
  }
  :hover .innerlist,
  li {
    display: block;
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
  :hover .img-line {
    opacity: 1;
    visibility: visible;
    display: block;
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
`;
const SpanMobileLink = styled.li`
  display: none;
  position: relative;
  transition: all 300ms;
  a {
    ${HeaderFont}
    margin: 0 14px;
    ${(props) =>
      props.textColor &&
      css`
        color: ${props.title};
      `}
  }
  a:hover {
    ${(props) =>
      props.hoverColor &&
      css`
        color: ${props.hoverColor};
      `}
  }
  &.active {
    a {
      color: ${primary};
    }
  }

  @media only screen and (max-width: 991px) {
    margin-bottom: 0px;
    display: block;
    width: 100%;
    border-bottom: 1px solid #000000;
    :first-child {
      border-top: 1px solid #000000;
    }
    &.active {
      a {
        background-color: ${lightBg};
      }
    }
    a {
      padding: 20px 24px;
      display: block;
      border-radius: 0px;
      margin: 0;
      color: ${title};
    }
  }
  :hover .innerlist,
  li {
    display: block;

    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
  :hover .img-line {
    opacity: 1;
    visibility: visible;
    display: block;
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
`;
const InnerList = styled.ul`
  position: absolute;
  top: 47px;
  left: -10px;
  background: #fff;
  box-shadow: 0px 8px 30px #ddd;
  z-index: 90;
  display: none;
  transition: all 300ms;
  ${(props) =>
    props.features &&
    css`
      width: 100%;
      min-width: 360px;
      background-color: #ffffff;
      border: 1px solid #00160e;
      box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.35);
    `}
  ${(props) =>
    props.company &&
    css`
      width: 100%;
      min-width: 400px;
      background-color: #ffffff;
      border: 1px solid #00160e;
      box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.35);
    `}
    ${(props) =>
    props.solution &&
    css`
      width: 100%;
      min-width: 554px;
      background-color: #ffffff;
      border: 1px solid #00160e;
      box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.35);
    `}
`;
const ListLi = styled.li``;
const Listleft = styled.div`
  max-width: 200px;
  width: 100%;
  padding: 8px 0;
  border-right: 1px solid #00160e;
  ${(props) =>
    props.solutionleft &&
    css`
      min-width: 277px;
      white-space: nowrap;
    `}
`;
const Listright = styled.div`
  max-width: 200px;
  width: 100%;
  padding: 8px 0;
  ${(props) =>
    props.solutionright &&
    css`
      min-width: 277px;
      white-space: nowrap;
    `}
`;
const HeaderBtnGroup = styled.div`
  @media only screen and (max-width: 991px) {
    width: 100%;
  }
`;
const SignInSignUpBtn = styled.ul`
  display: flex;
  align-items: center;
  margin-left: -14px;
  button {
    margin-left: 14px;
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    padding: 12px 0;
    border-top: 1px solid #ebeef2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hederbtn {
    a {
      padding: 8px 32px;
      margin-left: 14px;
      ${HeaderFont};
    }
  }
`;
const SignIn = styled.li`
  a {
    ${HeaderFont};
    margin: 0 14px;
    /* padding: 8px 16px; */
    align-items: center;
    transition: all 300ms;
    ${(props) =>
      props.textColor &&
      css`
        color: ${props.textColor};
      `}
    /* color: ${title}; */
    cursor: pointer;
    text-decoration: none;
    :hover {
      ${(props) =>
        props.hoverColor &&
        css`
          color: ${props.hoverColor};
        `}
    }
  }
  @media only screen and (max-width: 748px) {
    a {
      ${MbButtonText};
    }
  }
  @media only screen and (max-width: 434px) {
    a {
      ${MbButtonText};
      text-align: center;
    }
  }
`;

const DropDownToggle = styled.div`
  display: flex;
  padding: 0;
  align-items: center;
  transition: all 300ms;
  user-select: none;
  cursor: pointer;
  @media only screen and (max-width: 991px) {
    /* width: 100%;
    padding: 12px; */
  }
`;
const DropdownSpan = styled.span`
  margin-right: 4px;
  color: ${textColor};
  ${Body2}
`;
const DropDownArrow = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isPopoverOpen &&
    css`
      img {
        display: none;
      }
    `}
`;
const HorizontalLine = styled.div`
  width: 1px;
  height: 24px;
  margin-right: 8px;
  margin-left: 16px;
  background-color: rgba(0, 0, 0, 0.12);
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  height: 44px;
  width: 44px;
  display: none;
  @media only screen and (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const FirstLine = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background-color: ${black};
  border-radius: 1px;
  margin-bottom: 14px;
  transition: all 300ms;
  transform: translate3d(0px, 0px, 0px) rotateZ(0deg);
  ${(props) =>
    props.isOpenMobileMenu &&
    css`
      transform: translate3d(0px, 8px, 0px) rotateZ(45deg);
    `}
  ${(props) =>
    props.isEnterPrice &&
    css`
      background-color: ${greenlight};
    `}
    ${(props) =>
    props.textColor &&
    css`
      background-color: ${props.textColor};
    `}
`;
const SecondLine = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background-color: ${black};
  border-radius: 1px;
  margin-bottom: 6px;
  transition: all 300ms;
  transform: translate3d(0px, 0px, 0px) rotateZ(0deg);
  ${(props) =>
    props.isOpenMobileMenu &&
    css`
      opacity: 0;
    `}
`;
const ThirdLine = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background-color: ${black};
  border-radius: 1px;
  transition: all 300ms;
  transform: translate3d(0px, 0px, 0px) rotateZ(0deg);
  ${(props) =>
    props.isOpenMobileMenu &&
    css`
      transform: translate3d(0px, -8px, 0px) rotateZ(-45deg);
    `}
  ${(props) =>
    props.isEnterPrice &&
    css`
      background-color: ${greenlight};
    `}
  ${(props) =>
    props.textColor &&
    css`
      background-color: ${props.textColor};
    `}
`;

const OverLayBlock = styled.div`
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  width: 100%;
  padding-top: 8px;
  transition: color 200ms ease-in-out;
  top: 76px;
  height: calc(100vh - 76px);
  padding-top: 0;
`;
const MenuWrap = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  margin: 0 !important;
  transition: all 300ms;

  @media only screen and (max-width: 991px) {
    width: 100%;
  }
  :hover {
    background-color: ${greendark};
    .hover-image {
      filter: hue-rotate(390deg) saturate(0.3);
    }
    svg {
      path {
        fill: #e3ffee;
      }
      g {
        path {
          fill: #e3ffee;
        }
      }
    }
    .logo {
      circle {
        fill: #e3ffee;
      }
      path {
        fill: #00160e;
      }
    }
    /* .brand {
      g {
        path {
          fill: #e3ffee;
        }
      }
    } */
    h6 {
      color: ${greenlight};
    }
  }
  //hover style for features list

  ${(props) =>
    props.darkColor &&
    css`
      :hover {
        background-color: ${props.darkColor};
        h5,
        span {
          color: ${props.lightColor};
        }
      }
    `}
  ${(props) =>
    props.billhover &&
    css`
      :hover {
        background-color: ${bluedark};
        h5,
        span {
          color: ${bluelight};
        }
      }
    `}
    ${(props) =>
    props.filehover &&
    css`
      :hover {
        background-color: ${purpledark};
        h5,
        span {
          color: ${purplelight};
        }
      }
    `}
    ${(props) =>
    props.formhover &&
    css`
      :hover {
        background-color: ${yellowdark};
        h5,
        span {
          color: ${yellowlight};
        }
      }
    `}
    ${(props) =>
    props.helphover &&
    css`
      :hover {
        background-color: ${orangedark};
        h5,
        span {
          color: ${orangelight};
        }
      }
    `}
`;
const LeftImg = styled.div`
  display: inline-flex;
`;
const RightText = styled.div`
  color: ${title};
  padding-left: 20px;
  ${(props) =>
    props.resourcetext &&
    css`
      padding-left: 12px;
    `}
  h5 {
    margin: 0 0 4px 0;
    ${Body5};
    letter-spacing: 0.02em;
    color: ${title};
  }
  h6 {
    ${Body5};
    letter-spacing: 0.02em;
    margin: 0;
    color: ${title};
  }
  span {
    ${FooterText};
    display: block;
    color: ${title};
  }
`;
const SignInMobile = styled.ul`
  display: none;
  @media only screen and (max-width: 991px) {
    display: flex;
    align-items: center;
  }
`;
const MobileRight = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
const MobileListLi = styled.li`
  @media only screen and (max-width: 991px) {
    width: 100%;
    border-bottom: 1px solid #000000;
    :first-child {
      border-top: 1px solid #000000;
    }
  }
`;
const MobileTextLink = styled(Link)`
  ${HeaderFont}
  padding: 20px 24px;
  color: #131313 !important;
  -webkit-transition: all 300ms;
  transition: all 300ms;
  cursor: pointer;
  :hover {
    ${(props) =>
      props.hoverColor &&
      css`
        color: ${props.hoverColor} !important;
      `}
  }
`;
const MobileText = styled.div`
  ${HeaderFont}
  padding: 20px 24px;
  color: #131313;
  -webkit-transition: all 300ms;
  transition: all 300ms;
  cursor: pointer;
`;
const MenuMobileWrap = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  margin: 0 !important;
  transition: all 300ms;

  @media only screen and (max-width: 991px) {
    width: 100%;
    padding: 22px 24px;
  }
  :hover {
    background-color: ${greendark};
    .hover-image {
      filter: hue-rotate(390deg) saturate(0.3);
    }
    svg {
      path {
        fill: #e3ffee;
      }
      g {
        path {
          fill: #e3ffee;
        }
      }
    }
    .logo {
      circle {
        fill: #e3ffee;
      }
      path {
        fill: #00160e;
      }
    }

    h6 {
      color: ${greenlight};
    }
  }
  ${(props) =>
    props.msghover &&
    css`
      :hover {
        background-color: ${browndark};
        h5,
        span {
          color: ${brownlight};
        }
      }
    `}
  ${(props) =>
    props.billhover &&
    css`
      :hover {
        background-color: ${bluedark};
        h5,
        span {
          color: ${bluelight};
        }
      }
    `}
    ${(props) =>
    props.filehover &&
    css`
      :hover {
        background-color: ${purpledark};
        h5,
        span {
          color: ${purplelight};
        }
      }
    `}
    ${(props) =>
    props.formhover &&
    css`
      :hover {
        background-color: ${yellowdark};
        h5,
        span {
          color: ${yellowlight};
        }
      }
    `}
    ${(props) =>
    props.helphover &&
    css`
      :hover {
        background-color: ${orangedark};
        h5,
        span {
          color: ${orangelight};
        }
      }
    `}
`;
const BackWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  span {
    ${MbButtonText};
    color: ${black};
    ${(props) =>
      props.textColor &&
      css`
        color: ${props.textColor};
      `}
  }
`;
const SvgIcon = styled.div`
  display: inline-flex;
`;
const TextView = styled.div`
  ${HeaderFont};
  ${(props) =>
    props.textColor &&
    css`
      color: ${props.textColor};
    `}
  margin: 0 14px;
  -webkit-transition: all 300ms;
  transition: all 300ms;
  cursor: pointer;
`;
const TopBar = styled.div`
  top: 0;
  background-color: ${primary};
  width: 100%;
  position: fixed;
  z-index: 9999;
`;
const AnnounceBar = styled.div`
  padding: 10px 0;
  text-align: center;
  .learn-link,
  .learn-link svg path {
    transition: all 300ms ease;
  }
  a {
    ${MbPrimaryBtn};
    margin: 0;
    color: ${whiteColor};
    cursor: pointer;
    transition: none;
    @media only screen and (max-width: 749px) {
      ${MbButtonText};
      display: flex;
      align-items: center;
      justify-content: center;
    }
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
    @media only screen and (max-width: 749px) {
      color: ${whiteColor};
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
    /* top: 1px; */
    margin-left: var(--arrowSpacing);
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
    margin-left: 4px;
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
      display: inline-block;
      margin-left: 4px;
    }
  }
`;
const HelpLink = styled.div``;

const Dspace = styled.div`
  height: 34px;
  display: block;
`;

const Drop = styled.div`
  display: flex;
  min-width: 400px;
  width: 100%;
`;
const Last = styled.div`
  display: flex;
  align-items: center;
`;

const LastDroplist = styled.div`
  border-top: 1px solid #00160e;
  padding: 12px 20px;
  @media only screen and (max-width: 991px) {
    ${(props) =>
      props.Mobilemenu &&
      css`
        padding: 12px 24px;
        border-top: none;
      `}
  }

  .learn-link,
  .learn-link svg path {
    transition: all 300ms ease;
  }
  a {
    ${MbPrimaryBtn};
    margin: 0;
    color: ${title};
    cursor: pointer;
    transition: none;
    :hover .HoverArrow__linePath {
      opacity: 1;
      fill: none;
      fill: black;
      /* @media only screen and (max-width: 749px) {
        opacity: 0;
      } */
    }
    :hover .HoverArrow__tipPath {
      transform: translateX(2px);
      /* @media only screen and (max-width: 749px) {
        transform: none;
      } */
    }
  }

  .learn-link:hover {
    color: black;
    /* @media only screen and (max-width: 749px) {
      color: ${primary};
    } */
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
    /* @media only screen and (max-width: 749px) {
      display: none;
    } */
    /* @media only screen and (max-width: 376px) {
      margin-left: 4px;
    } */
  }
  .mobilearrow {
    display: none;
    /* @media only screen and (max-width: 749px) {
      position: relative;
      display: block;
    } */
  }
`;

const FeatureMenu = styled.div`
  padding: 8px 0;
`;
export {
  NavbarWrapper,
  NavbarInner,
  NavMenu,
  NavigationBlock,
  SpanLink,
  HeaderBtnGroup,
  SignInSignUpBtn,
  SignIn,
  DropDownToggle,
  DropdownSpan,
  DropDownArrow,
  HorizontalLine,
  MobileMenu,
  ThirdLine,
  SecondLine,
  FirstLine,
  OverLayBlock,
  CopilotLogo,
  InnerList,
  ListLi,
  MenuWrap,
  LeftImg,
  RightText,
  LineMenuImg,
  SignInMobile,
  MobileRight,
  MobileListLi,
  MenuMobileWrap,
  MobileText,
  SpanMobileLink,
  BackWrap,
  SvgIcon,
  MobileTextLink,
  TextView,
  TopBar,
  AnnounceBar,
  HelpLink,
  Dspace,
  Listleft,
  Listright,
  Drop,
  Last,
  LastDroplist,
  FeatureMenu
};
