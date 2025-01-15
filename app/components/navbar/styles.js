'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderFont, Body2, Body5, FooterText, MbButtonText, MbPrimaryBtn, Heading6 } from '../../styles/styles';

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
      background: var(${props.colorList?.bgColor});
      border-bottom: 0px solid var(${props.colorList?.borderBottomColor});
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
  @media only screen and (max-width: 1024px) {
    gap: 30px;
  }
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
    background: var(--bg-pages);

    animation: 0.2s ease-out 0s 1 slideInFromTop;
    ${(props) =>
      props.isBoxShadow &&
      css`
        box-shadow: 0px 4px 24px var(--black-shadow-70);
      `}
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
    /* border-bottom: 1px solid var(--black); */
  }

  ${(props) =>
    props.isWithOutHeading &&
    css`
      li {
        background-color: unset;
        border-bottom: 1px solid var(--black);
        :first-child {
          border-top: 1px solid var(--black);
        }
        :last-child {
          box-shadow: 0px 4px 12px var(--black-shadow-20); /* Adjust color and opacity as needed */
        }
      }
    `}

  .open {
    opacity: 1;
    z-index: 9999;
    max-height: 1000px;
  }
`;

const Dropdown = styled.div`
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  -webkit-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
  width: 100%;
`;
const LineMenuImg = styled.div`
  position: absolute;
  visibility: 0;
  opacity: 0;
  left: -13px;
  bottom: -30px;
  width: calc(100% + 4px);
  display: none;
  ${(props) =>
    props.lineColor &&
    css`
      svg {
        line {
          stroke: var(${props?.lineColor}) !important;
        }
      }
    `}
  img {
    width: 100%;
  }
`;
const SpanLink = styled.li`
  position: relative;
  transition: color 300ms;
  ${(props) =>
    props.isOpenMenu &&
    css`
      display: none;
    `}
  a {
    ${HeaderFont}
    margin: 0 14px;
    ${(props) =>
      props.textColor &&
      css`
        color: var(${props.textColor});
      `}
    cursor: pointer;
  }
  a:hover {
    ${(props) =>
      props.hoverColor &&
      css`
        color: var(${props.hoverColor});
      `}
  }
  .hovernone {
    ${(props) =>
      props.textColor &&
      css`
        color: var(${props.textColor});
      `}
  }
  .hovernone:hover {
    ${(props) =>
      props.hoverColor &&
      css`
        color: var(${props.hoverColor});
      `}
  }
  &.active {
    a {
      ${(props) =>
        props.hoverColor &&
        css`
          color: var(${props.hoverColor});
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
    border-bottom: 1px solid var(--black);
    :first-child {
      border-top: 1px solid var(--black);
    }
    &.active {
      a {
        background-color: var(--light-green);
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
      color: var(--primary);
    }
  }

  @media only screen and (max-width: 991px) {
    margin-bottom: 0px;
    display: block;
    width: 100%;
    border-bottom: 1px solid var(--black);
    :first-child {
      border-top: 1px solid var(--black);
    }
    &.active {
      a {
        background-color: var(--light-green);
      }
    }
    a {
      padding: 20px 24px;
      display: block;
      border-radius: 0px;
      margin: 0;
      color: var(--title);
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
  background: var(--white);
  box-shadow: 0px 8px 30px var(--box-shadow-gray);
  z-index: 90;
  display: none;
  transition: all 300ms;
  ${(props) =>
    props.features &&
    css`
      width: 100%;
      min-width: 360px;
      background-color: var(--white);
      border: 1px solid var(--dark-green);
      box-shadow: 0px 8px 24px var(--black-shadow-35);
    `}
  ${(props) =>
    props.company &&
    css`
      width: 100%;
      min-width: 400px;
      background-color: var(--white);
      border: 1px solid var(--dark-green);
      box-shadow: 0px 8px 24px var(--black-shadow-35);
    `}
    ${(props) =>
    props.solution &&
    css`
      /* width: 100%; */
      /* min-width: 560px; */
      width: max-content;
      background-color: var(--white);
      border: 1px solid var(--dark-green);
      box-shadow: 0px 8px 24px var(--black-shadow-35);
    `}
`;

const FooterItem = styled.div`
  display: grid;
  grid-template-columns: ${({ itemCount }) => `repeat(${itemCount}, 1fr)`};
`;
const ListLi = styled.li`
  @media only screen and (max-width: 991px) {
    background-color: var(--neutral);
    border-bottom: 1px solid var(--border);
    :last-of-type {
      border-bottom: none;
    }
  }
`;
const Listleft = styled.div`
  /* max-width: 200px; */
  width: 100%;
  padding: 8px 0;
  /* border-right: 1px solid var(--light-green); */
  ${(props) =>
    props.solutionleft &&
    css`
      /* min-width: 277px; */
      /* white-space: nowrap; */
    `}
`;
const Listright = styled.div`
  padding: 8px 0;
  ${(props) =>
    props.solutionright &&
    css`
      /* min-width: 277px; */
      /* white-space: nowrap; */
    `}
  ${(props) =>
    props.isWidth &&
    css`
      max-width: 350px;
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
    border-top: 1px solid var(--navbar-border-color);
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
        color: var(${props.textColor});
      `}
    /* color: var(--title); */
    cursor: pointer;
    text-decoration: none;
    :hover {
      ${(props) =>
        props.hoverColor &&
        css`
          color: var(${props.hoverColor});
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
  background-color: var(--black-shadow-12);
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
  background-color: var(--black);
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
      background-color: var(--light-green);
    `}
    ${(props) =>
    props.textColor &&
    css`
      background-color: var(${props.textColor});
    `}
`;
const SecondLine = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--black);
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
  background-color: var(--black);
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
      background-color: var(--light-green);
    `}
  ${(props) =>
    props.textColor &&
    css`
      background-color: var(${props.textColor});
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
  gap: 12px;

  @media only screen and (max-width: 991px) {
    width: 100%;
  }
  &.footer-item-main-div {
    :hover {
      background-color: unset;
      h5,
      span {
        color: var(--title);
      }
    }
  }
  :hover {
    background-color: var(--dark-green);
    h5,
    span {
      color: var(--light-green);
    }
    .hover-image {
      filter: hue-rotate(390deg) saturate(0.3);
    }
    svg {
      path {
        fill: var(--light-green);
      }
      g {
        path {
          fill: var(--light-green);
        }
      }
    }
    .logo {
      circle {
        fill: var(--light-green);
      }
      path {
        fill: var(--dark-green);
      }
    }
    /* .brand {
      g {
        path {
          fill: var(--light-green);
        }
      }
    } */
    h6 {
      color: var(--light-green);
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
        background-color: var(--dark-blue);
        h5,
        span {
          color: var(--light-blue);
        }
      }
    `}
    ${(props) =>
    props.filehover &&
    css`
      :hover {
        background-color: var(--dark-purple);
        h5,
        span {
          color: var(--light-purple);
        }
      }
    `}
    ${(props) =>
    props.formhover &&
    css`
      :hover {
        background-color: var(--dark-yellow);
        h5,
        span {
          color: var(----light-yellow);
        }
      }
    `}
    ${(props) =>
    props.helphover &&
    css`
      :hover {
        background-color: var(--dark-orange);
        h5,
        span {
          color: var(--light-orange);
        }
      }
    `}
`;
const LeftImg = styled.div`
  display: inline-flex;
`;
const RightText = styled.div`
  color: var(--title);
  &.footer-item {
    padding-left: unset;
    display: flex;
    align-items: center;
    h5 {
      margin: unset;
    }
    svg path {
      transition: all 300ms ease;
    }
  }
  :hover .HoverArrow__linePath {
    opacity: 1;
    fill: none;
    fill: black;
  }
  :hover .HoverArrow__tipPath {
    transform: translateX(2px);
    @media only screen and (max-width: 749px) {
      transform: none;
    }
  }
  ${(props) =>
    props.resourcetext &&
    css`
      padding-left: 12px;
    `}
  h5 {
    margin: 0;
    ${Body5};
    letter-spacing: 0.02em;
    color: var(--title);
  }
  h6 {
    ${Body5};
    letter-spacing: 0.02em;
    margin: 0;
    color: var(--title);
  }
  span {
    ${FooterText};
    display: block;
    color: var(--title);
    margin-top: 4px;
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
    border-bottom: 1px solid var(--border);
    background-color: var(--neutral);
    :last-of-type {
      border-bottom: 1px solid var(--black);
      border-top: 1px solid var(--black);
    }
    :nth-last-of-type(2) {
      border-bottom: none;
    }
    ${(props) =>
      props.isSolutionmenu &&
      css`
        :last-of-type {
          border-bottom: 1px solid var(--black);
        }
      `}
  }
`;
const MobileTextLink = styled(Link)`
  ${HeaderFont}
  padding: 20px 24px;
  color: var(--title) !important;
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
const ResourcesSubMenuDiv = styled.div`
  border-top: 1px solid var(--black);
`;
const MobileText = styled.div`
  ${HeaderFont}
  padding: 20px 24px;
  color: var(--title);
  -webkit-transition: all 300ms;
  transition: all 300ms;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .open-icon {
    transform: rotate(180deg);
    transition: all 0.3s;
  }
  .close-icon {
    transition: all 0.3s;
  }
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
    background-color: var(--dark-green);
    .hover-image {
      filter: hue-rotate(390deg) saturate(0.3);
    }
    svg {
      path {
        fill: var(--light-green);
      }
      g {
        path {
          fill: var(--light-green);
        }
      }
    }
    .logo {
      circle {
        fill: var(--light-green);
      }
      path {
        fill: var(--dark-green);
      }
    }

    h6 {
      color: var(--light-green);
    }
  }
  ${(props) =>
    props.msghover &&
    css`
      :hover {
        background-color: var(--dark-brown);
        h5,
        span {
          color: var(--light-brown);
        }
      }
    `}
  ${(props) =>
    props.billhover &&
    css`
      :hover {
        background-color: var(--dark-blue);
        h5,
        span {
          color: var(--light-blue);
        }
      }
    `}
    ${(props) =>
    props.filehover &&
    css`
      :hover {
        background-color: var(--dark-purple);
        h5,
        span {
          color: var(--light-purple);
        }
      }
    `}
    ${(props) =>
    props.formhover &&
    css`
      :hover {
        background-color: var(--dark-yellow);
        h5,
        span {
          color: var(----light-yellow);
        }
      }
    `}
    ${(props) =>
    props.helphover &&
    css`
      :hover {
        background-color: var(--dark-orange);
        h5,
        span {
          color: var(--light-orange);
        }
      }
    `}
`;
const BackWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  span {
    ${MbButtonText};
    color: var(--black);
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
  background-color: var(--primary);
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
    color: var(--white);
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
      color: var(--white);
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
  display: grid;
  grid-template-columns: ${({ itemCount }) => `repeat(${itemCount}, 1fr)`};
`;
const Last = styled.div`
  display: flex;
  align-items: center;
`;

const LastDroplist = styled.div`
  border-top: 1px solid var(--dark-green);
  padding: 12px 20px;
  width: 100%;
  :nth-child(2) {
    border-left: 1px solid var(--dark-green);
  }
  @media only screen and (max-width: 991px) {
    ${(props) =>
      props.Mobilemenu &&
      css`
        padding: 12px 24px;
        border-top: none;
      `}
    border-top: 1px solid var(--dark-green);
    border-bottom: 1px solid var(--dark-green);
    width: 100%;
    background-color: var(--neutral);
    ${(props) =>
      props.isSolutionmenu &&
      css`
        border-top: none !important;
        background-color: unset;
      `}
    ${(props) =>
      props.isResourcemenu &&
      css`
        background-color: unset;
      `}
  }

  .learn-link,
  .learn-link svg path {
    transition: all 300ms ease;
  }
  a {
    ${MbPrimaryBtn};
    margin: 0;
    color: var(--title);
    cursor: pointer;
    transition: none;
    display: flex;
    align-items: center;
    :hover .HoverArrow__linePath {
      opacity: 1;
      fill: none;
      fill: black;
      /* @media only screen and (max-width: 749px) {
        opacity: 0;
      } */
    }
    @media only screen and (max-width: 991px) {
      width: 100%;
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
      color: var(--primary);
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

const DropDownHeading = styled.div`
  ${Heading6}
  color: var(--dark-green);
  background-color: var(--light-green);
  padding: 12px 20px;
  min-width: 280px;
  ${(props) =>
    props.isWidth &&
    css`
      max-width: 350px;
      min-width: 350px;
    `}
`;

const BorderLine = styled.div`
  border-left: 1px solid var(--dark-green);
  width: 100%;
`;

const FeatureDropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid var(--dark-green);
  max-width: 360px;
  :first-child {
    border-left: none;
  }
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
  FeatureMenu,
  DropDownHeading,
  BorderLine,
  FeatureDropdown,
  Dropdown,
  ResourcesSubMenuDiv,
  FooterItem
};
