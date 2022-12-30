import styled, { css } from 'styled-components';
import Link from 'next/link';
import { HeaderFont, Body2, Body5, FooterText, Body4, MbButtonText, MbPrimaryBtn } from '../../styles/styles';

const NavbarWrapper = styled.div`
  position: fixed;
  left: 0;
  ${(props) =>
    props.isAnnouncebar ?
    css`
    top: 44px;
    `:  css`
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
const SalescampLogo = styled.img`
  cursor: pointer;
`;
const CopilotLogo = styled.img`
  cursor: pointer;
`;
const TrySalescampBlock = styled.div`
  display: none;
  ${(props) =>
    props.BlogDetails &&
    css`
      display: block;
    `}
  ${(props) =>
    props.BlogDetails &&
    props.mobile &&
    css`
      display: none;
    `}
    @media only screen and (max-width: 991px) {
    display: none;
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
    left: 16px;
    right: 16px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    box-shadow: var(--shadowColor);
    border-radius: 0px;
  }
  ${(props) =>
    props.BlogDetails &&
    css`
      display: none;
    `}
  ${(props) =>
    props.BlogDetails &&
    props.mobile &&
    css`
      display: flex;
    `}
    @media only screen and (max-width: 991px) {
    display: flex;
    left: 0;
    right: 0;
    padding: 0;
    background: #fdfdfb;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.7);
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
  &.active {
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
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
        background-color: ${({ theme }) => theme.colors.lightBg};
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
      color: ${({ theme }) => theme.colors.primary};
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
        background-color: ${({ theme }) => theme.colors.lightBg};
      }
    }
    a {
      padding: 20px 24px;
      display: block;
      border-radius: 0px;
      margin: 0;
      color: ${({ theme }) => theme.colors.title};
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
  padding: 8px 0;
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
      min-width: 200px;
      background-color: #ffffff;
      border: 1px solid #00160e;
      box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.35);
    `}
`;
const ListLi = styled.li``;
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
    /* color: ${({ theme }) => theme.colors.title}; */
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
  @media only screen and (max-width: 991px) {
    a {
      ${MbButtonText};
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
  color: ${({ theme }) => theme.colors.textColor};
  ${Body2}
  @media only screen and (max-width: 991px) {
    /* width: 100%;
    font-size: 13px;
    line-height: 18px;
    padding-bottom: 8px;
    color: ${({ theme }) => theme.colors.romanSilver};
    text-transform: uppercase;
    border-bottom: 1px solid #ebeef2; */
  }
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
const DropdownMenu = styled.div`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: 0 3px 10px 0 rgb(37 37 38 / 8%);
  @media only screen and (max-width: 991px) {
    padding: 0;
    border: none;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    width: 100%;
  }
`;
const DropDownLink = styled.span`
  display: block;
  &.active {
    a {
      color: ${({ theme }) => theme.colors.darkPrimary};
    }
  }
  a {
    display: block;
    cursor: pointer;
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkColor};
    padding: 10px;
    transition: all 300ms;
    :hover {
      color: ${({ theme }) => theme.colors.darkPrimary};
    }
    :focus {
      border: none;
      outline: none;
    }
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    &.active {
      a {
        background-color: ${({ theme }) => theme.colors.lightBg};
      }
    }
    a {
      ${Body2}
      padding: 8px 12px;
    }
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
  background-color: ${({ theme }) => theme.colors.black};
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
    props.BlogDetails &&
    css`
      background-color: ${({ theme }) => theme.colors.whiteColor};
    `}
    ${(props) =>
    props.BlogDetails &&
    props.isScrollPage &&
    css`
      background-color: ${({ theme }) => theme.colors.footercolor};
    `}
    ${(props) =>
    props.isEnterPrice &&
    css`
      background-color: ${({ theme }) => theme.colors.greenlight};
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
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 1px;
  margin-bottom: 6px;
  transition: all 300ms;
  transform: translate3d(0px, 0px, 0px) rotateZ(0deg);
  ${(props) =>
    props.isOpenMobileMenu &&
    css`
      opacity: 0;
    `}
  ${(props) =>
    props.BlogDetails &&
    css`
      background-color: ${({ theme }) => theme.colors.whiteColor};
    `}
    ${(props) =>
    props.BlogDetails &&
    props.isScrollPage &&
    css`
      background-color: ${({ theme }) => theme.colors.darkColor};
    `}
`;
const ThirdLine = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 1px;
  transition: all 300ms;
  transform: translate3d(0px, 0px, 0px) rotateZ(0deg);
  ${(props) =>
    props.isOpenMobileMenu &&
    css`
      transform: translate3d(0px, -8px, 0px) rotateZ(-45deg);
    `}
  ${(props) =>
    props.BlogDetails && props.isScrollPage
      ? css`
          background-color: ${({ theme }) => theme.colors.darkColor};
        `
      : props.BlogDetails
      ? css`
          background-color: ${({ theme }) => theme.colors.whiteColor};
        `
      : css``}
      ${(props) =>
    props.isEnterPrice &&
    css`
      background-color: ${({ theme }) => theme.colors.greenlight};
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
    background-color: ${({ theme }) => theme.colors.greendark};
    svg {
      path {
        fill: #e3ffee;
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
      color: ${({ theme }) => theme.colors.greenlight};
    }
  }
  //hover style for features list

  ${(props) =>
    props.msghover &&
    css`
      :hover {
        background-color: ${({ theme }) => theme.colors.browndark};
        h5,
        span {
          color: ${({ theme }) => theme.colors.brownlight};
        }
      }
    `}
  ${(props) =>
    props.billhover &&
    css`
      :hover {
        background-color: ${({ theme }) => theme.colors.bluedark};
        h5,
        span {
          color: ${({ theme }) => theme.colors.bluelight};
        }
      }
    `}
    ${(props) =>
    props.filehover &&
    css`
      :hover {
        background-color: ${({ theme }) => theme.colors.purpledark};
        h5,
        span {
          color: ${({ theme }) => theme.colors.purplelight};
        }
      }
    `}
    ${(props) =>
    props.formhover &&
    css`
      :hover {
        background-color: ${({ theme }) => theme.colors.yellowdark};
        h5,
        span {
          color: ${({ theme }) => theme.colors.yellowlight};
        }
      }
    `}
    ${(props) =>
    props.helphover &&
    css`
      :hover {
        background-color: ${({ theme }) => theme.colors.orangedark};
        h5,
        span {
          color: ${({ theme }) => theme.colors.orangelight};
        }
      }
    `}
`;
const LeftImg = styled.div`
  display: inline-flex;
`;
const RightText = styled.div`
  color: ${({ theme }) => theme.colors.title};
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
    color: ${({ theme }) => theme.colors.title};
  }
  h6 {
    ${Body5};
    letter-spacing: 0.02em;
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
  }
  span {
    ${FooterText};
    display: block;
    color: ${({ theme }) => theme.colors.title};
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
    background-color: ${({ theme }) => theme.colors.greendark};
    svg {
      path {
        fill: #e3ffee;
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
      color: ${({ theme }) => theme.colors.greenlight};
    }
  }
  //hover style for features list

  ${(props) =>
    props.msghover &&
    css`
      :hover {
        background-color: ${({ theme }) => theme.colors.browndark};
        h5,
        span {
          color: ${({ theme }) => theme.colors.brownlight};
        }
      }
    `}
  ${(props) =>
    props.billhover &&
    css`
      :hover {
        background-color: ${({ theme }) => theme.colors.bluedark};
        h5,
        span {
          color: ${({ theme }) => theme.colors.bluelight};
        }
      }
    `}
    ${(props) =>
    props.filehover &&
    css`
      :hover {
        background-color: ${({ theme }) => theme.colors.purpledark};
        h5,
        span {
          color: ${({ theme }) => theme.colors.purplelight};
        }
      }
    `}
    ${(props) =>
    props.formhover &&
    css`
      :hover {
        background-color: ${({ theme }) => theme.colors.yellowdark};
        h5,
        span {
          color: ${({ theme }) => theme.colors.yellowlight};
        }
      }
    `}
    ${(props) =>
    props.helphover &&
    css`
      :hover {
        background-color: ${({ theme }) => theme.colors.orangedark};
        h5,
        span {
          color: ${({ theme }) => theme.colors.orangelight};
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
    color: ${({ theme }) => theme.colors.black};
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
  background-color: ${({ theme }) => theme.colors.primary};
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
    color: ${({ theme }) => theme.colors.whiteColor};
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
    color: black;
    @media only screen and (max-width: 749px) {
      color: ${({ theme }) => theme.colors.whiteColor};
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
export {
  NavbarWrapper,
  NavbarInner,
  SalescampLogo,
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
  DropdownMenu,
  DropDownLink,
  MobileMenu,
  ThirdLine,
  SecondLine,
  FirstLine,
  OverLayBlock,
  TrySalescampBlock,
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
  HelpLink
};
