import styled, { css } from "styled-components";
import { HeaderFont, Body2 } from "../../styles/styles";

const NavbarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 999;
  padding: 20px 0;
  /* max-width: 1224px; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;
  ${(props) =>
    props.isScrollPage &&
    css`
      background: rgba(250, 250, 251, 0.75);
      backdrop-filter: blur(32px);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    `}
`;
const NavbarInner = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 56px;
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
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 12px;
    position: absolute;
    left: 16px;
    right: 16px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    box-shadow: var(--shadowColor);
    border-radius: 12px;
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
`;
const NavigationBlock = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 -14px;
  /* justify-content: space-between; */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
`;
const SpanLink = styled.li`
  &.active {
    a {
      color: ${({ theme }) => theme.colors.darkPrimary};
    }
  }
  a {
    ${HeaderFont}
    margin: 0 14px;
    color: ${({ theme }) => theme.colors.title};
    transition: all 300ms;
    cursor: pointer;
    /* :hover {
      color: ${({ theme }) => theme.colors.darkPrimary};
    } */
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 4px;
    width: 100%;
    &.active {
      a {
        background-color: ${({ theme }) => theme.colors.lightBg};
      }
    }
    a {
      padding: 8px 12px;
      display: block;
      border-radius: 6px;
      margin-right: 0;
    }
  }
`;
const HeaderBtnGroup = styled.div`
  @media only screen and (max-width: 768px) {
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
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 12px 0;
    border-top: 1px solid #ebeef2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const SignIn = styled.li`
  a {
    ${HeaderFont};
    margin: 0 14px;
    /* padding: 8px 16px; */
    align-items: center;
    transition: all 300ms;
    color: ${({ theme }) => theme.colors.title};
    cursor: pointer;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.colors.primary};
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
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }
`;
const DropdownSpan = styled.span`
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.textColor};
  ${Body2}
  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 13px;
    line-height: 18px;
    padding-bottom: 8px;
    color: ${({ theme }) => theme.colors.romanSilver};
    text-transform: uppercase;
    border-bottom: 1px solid #ebeef2;
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
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const DropdownMenu = styled.div`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: 0 3px 10px 0 rgb(37 37 38 / 8%);
  @media only screen and (max-width: 768px) {
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
  @media only screen and (max-width: 768px) {
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
  height: 24px;
  width: 24px;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
const FirstLine = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.darkColor};
  border-radius: 1px;
  margin-bottom: 6px;
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
      background-color: ${({ theme }) => theme.colors.darkColor};
    `}
`;
const SecondLine = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.darkColor};
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
  background-color: ${({ theme }) => theme.colors.darkColor};
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
`;

const OverLayBlock = styled.div`
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  width: 100%;
  padding-top: 8px;
  transition: all 200ms ease-in-out;
  top: -100%;
  ${(props) =>
    props.isOpenMobileMenu &&
    css`
      top: 86px;
      height: calc(100vh - 86px);
    `}
  ${(props) =>
    props.isOpenMobileMenu &&
    props.isScrollPage &&
    css`
      top: 64px;
      height: calc(100vh - 64px);
    `}
`;

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
};
