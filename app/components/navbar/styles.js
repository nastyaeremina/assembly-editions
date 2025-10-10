'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import {
  body_regular,
  body_semibold,
  button_regular,
  h4_semibold,
  label_regular,
  label_semibold
} from '../../styles/typography';

export const NavbarMainDiv = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavbarWrapper = styled.div`
  padding: var(--space-20) 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--off-white-300);
  border-bottom: 0px solid var(--border-default);
  &&.scroll {
    border-width: 1px;
  }
`;

const NavbarInner = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-64);
  @media only screen and (max-width: 1110px) {
    gap: var(--space-24);
  }
  @media only screen and (max-width: 1080px) {
    justify-content: space-between;
    gap: unset;
  }
  @media only screen and (max-width: 449px) {
    .logo-icon {
      width: 130px;
      height: 24px;
    }
  }
`;

const AssemblyLogo = styled(Image)`
  cursor: pointer;
  @media only screen and (max-width: 1080px) {
    width: 96px;
    height: 22px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 1080px) {
    padding: var(--space-16) 0;
    flex-direction: column;
    background: var(--bg-pages);
    animation: 0.2s ease-out 0s 1 slideInFromTop;
    overflow-y: auto;
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
  @media only screen and (max-width: 1080px) {
    ${(props) =>
      props.mobile &&
      css`
        display: flex;
      `}
  }
`;

const MobileSectionTitle = styled.div`
  ${label_semibold}
  color: var(--text-secondary);
  margin-bottom: var(--space-12);
  margin: 0;
  padding: var(--space-8) var(--space-14) var(--space-4);
`;

const MobileSectionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const NavigationBlock = styled.ul`
  display: flex;
  align-items: center;
  gap: var(--space-4);
  @media only screen and (max-width: 1080px) {
    gap: var(--space-12);
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin: 0;
  }

  .SpanLink:hover,
  .SpanLink:has(.innerlist:hover) {
    background-color: var(--off-white-600);
    border-radius: var(--radius-30);
  }
`;

const Dropdown = styled.div`
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  width: 100%;
  &.open {
    max-height: ${(props) => props.calculatedHeight}px; /* Dynamic height based on content */
    opacity: 1;
  }
`;

const LineMenuImg = styled.div`
  position: absolute;
  visibility: 0;
  opacity: 0;
  left: -13px;
  bottom: -30px;
  width: calc(100% + 4px);
  height: 30px;
  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;

const LinkText = styled(Link)`
  ${label_semibold}
  color: var(--title);
  cursor: pointer;
  padding: var(--space-13) var(--space-16) var(--space-11);
  border-radius: var(--radius-30);
  :hover {
    background-color: var(--off-white-600);
    color: var(--title);
  }
  :focus-visible {
    outline: 2px solid var(--link-default);
    border-radius: var(--radius-30);
  }
  @media only screen and (max-width: 1080px) {
    padding: var(--space-13) var(--space-16) var(--space-11);
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
  :hover .dropdownlist {
    display: flex;
    min-width: 400px;
    width: 100%;
  }
  :hover .innerlist,
  li {
    display: block;
    @media only screen and (max-width: 1080px) {
      display: none;
    }
  }
  @media only screen and (max-width: 1080px) {
    width: 100%;
    padding: var(--space-6) 0;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ResponsiveSpanLink = styled.button`
  position: relative;
  transition: color 300ms;
  ${(props) =>
    props.isOpenMenu &&
    css`
      display: none;
    `}
  &:hover .innerlist,
  li {
    display: block;
    @media only screen and (max-width: 1080px) {
      display: none;
    }
  }
  :hover .img-line {
    opacity: 1;
    visibility: visible;
    display: block;
    @media only screen and (max-width: 1080px) {
      display: none;
    }
  }
  @media only screen and (max-width: 1080px) {
    width: 100%;
    padding: var(--space-6) var(--space-12) var(--space-6) 0;
  }
  :focus-visible {
    outline: 2px solid var(--link-default);
    border-radius: var(--radius-12);
  }
`;

const SpanMobileLink = styled.li`
  display: none;
  position: relative;
  transition: all 300ms;
  padding: var(--space-6) 0;
  a {
    ${body_semibold}
    margin: 0;
    color: var(--title);
    @media only screen and (max-width: 449px) {
      ${h4_semibold}
    }
  }
  &.active {
    a {
      color: var(--title);
    }
  }

  @media only screen and (max-width: 1080px) {
    margin-bottom: 0px;
    display: block;
    width: 100%;
  }
  :hover .innerlist,
  li {
    display: block;

    @media only screen and (max-width: 1080px) {
      display: none;
    }
  }
  :hover .img-line {
    opacity: 1;
    visibility: visible;
    display: block;
    @media only screen and (max-width: 1080px) {
      display: none;
    }
  }
`;

const InnerList = styled.ul`
  position: absolute;
  top: 47px;
  left: -22px;
  z-index: 90;
  display: none;
  transition: all 300ms;
  &.active {
    display: flex;
  }
  ${(props) =>
    props.features &&
    css`
      width: 100%;
      min-width: 360px;
    `}
  ${(props) =>
    props.company &&
    css`
      width: 100%;
      min-width: 400px;
    `}
    ${(props) =>
    props.solution &&
    css`
      width: max-content;
    `}
`;

const ListLi = styled.li`
  @media only screen and (max-width: 1080px) {
    background-color: var(--neutral);
    border-bottom: 1px solid var(--border);
    :last-of-type {
      border-bottom: none;
    }
  }
`;

const Listright = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${(props) =>
    props.isWidth &&
    css`
      max-width: 350px;
    `}
`;

const HeaderBtnGroup = styled.div`
  @media only screen and (max-width: 1080px) {
    width: 100%;
  }
`;

const SignInSignUpBtn = styled.ul`
  display: flex;
  align-items: center;
  gap: var(--space-4);
  @media only screen and (max-width: 1080px) {
    gap: var(--space-12);
    width: 100%;
    padding: var(--space-12) 0;
    border-top: 1px solid var(--navbar-border-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hederbtn {
    a {
      padding: 8px 32px;
      margin-left: 14px;
      ${label_regular};
    }
  }
`;

const BergerMenu = styled.button`
  padding: var(--space-13) var(--space-12);
  border-radius: 50%;
  border: none;
`;

const FirstLine = styled.span`
  display: block;
  width: 16px;
  height: 2px;
  background-color: var(--title);
  border-radius: var(--radius-30);
  margin-bottom: var(--space-4);
  transform: translate3d(0px, 0px, 0px) rotateZ(0deg);
  ${(props) =>
    props.isActive &&
    css`
      transform: translate3d(0px, 5px, 0px) rotateZ(45deg);
    `}
`;

const SecondLine = styled.span`
  display: block;
  width: 16px;
  height: 2px;
  background-color: var(--title);
  border-radius: var(--radius-30);
  margin-bottom: var(--space-4);
  transform: translate3d(0px, 0px, 0px) rotateZ(0deg);
  ${(props) =>
    props.isActive &&
    css`
      opacity: 0;
    `}
`;

const ThirdLine = styled.span`
  display: block;
  width: 16px;
  height: 2px;
  background-color: var(--title);
  border-radius: var(--radius-30);
  transform: translate3d(0px, 0px, 0px) rotateZ(0deg);
  ${(props) =>
    props.isActive &&
    css`
      transform: translate3d(0px, -7px, 0px) rotateZ(-45deg);
    `}
`;

const OverLayBlock = styled.div`
  display: none;
  @media only screen and (max-width: 1080px) {
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    width: 100%;
    padding-top: 8px;
    top: ${(props) => props.top}px;
    height: 0;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--off-white-300);
    opacity: 0;
    ${(props) =>
      props.isOpenModal &&
      css`
        height: calc(100dvh - ${(props) => props.top}px);
        opacity: 1;
      `}
  }
`;

const NavigationMainDiv = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;

const MenuWrap = styled(Link)`
  display: flex;
  align-items: center;
  padding: var(--space-12) var(--space-14);
  transition: all 300ms;
  gap: var(--space-12);
  border-radius: var(--radius-8);
  &:focus-visible {
    outline: 2px solid var(--link-default);
    border-radius: var(--radius-8);
  }
  @media only screen and (max-width: 1080px) {
    width: 100%;
  }
  :hover {
    background-color: var(--bg-primary-hover);
  }
`;

const LeftImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-8);
  background-color: var(--text-secondary);
  min-width: 36px;
  width: 36px;
  height: 36px;
  ${(props) =>
    props.isSmallImage &&
    css`
      background-color: unset;
      min-width: unset;
      width: unset;
      height: unset;
    `}
`;

const RightText = styled.div`
  color: var(--title);
  ${(props) =>
    props.resourcetext &&
    css`
      padding-left: 12px;
    `}
  .title {
    margin: 0;
    ${button_regular};
    color: var(--title);
  }
  .title {
    ${button_regular};
    margin: 0;
    color: var(--title);
  }
  span {
    ${label_regular};
    display: block;
    color: var(--text-secondary);
  }
`;

const SignInMobile = styled.ul`
  display: none;
  @media only screen and (max-width: 1080px) {
    display: flex;
    align-items: center;
    gap: var(--space-12);
    .login-link {
      width: unset;
      padding: 0;
    }
  }
  @media only screen and (max-width: 550px) {
    .login-link {
      display: none;
    }
  }
`;

const MobileRight = styled.div`
  display: none;
  @media only screen and (max-width: 1080px) {
    display: flex;
    align-items: center;
    gap: var(--space-12);
  }
`;

const MobileListLi = styled.li`
  @media only screen and (max-width: 1080px) {
    width: 100%;
  }
`;

const MobileTextLink = styled(Link)`
  ${body_semibold}
  color: var(--title);
  -webkit-transition: all 300ms;
  transition: all 300ms;
  cursor: pointer;
  :active {
    color: var(--text-secondary);
  }
  :focus-visible {
    outline: 2px solid var(--link-default);
    border-radius: var(--radius-12);
  }
  @media only screen and (max-width: 449px) {
    ${h4_semibold}
  }
`;

const MobileText = styled.div`
  ${body_semibold}
  color: var(--title);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-20);
  transition: color 0.3s ease;
  :active {
    color: var(--text-secondary);
    svg {
      path {
        fill: var(--text-secondary);
      }
    }
  }
  svg {
    transition: transform 0.3s ease;
  }
  .rotate-icon {
    transform: rotate(90deg);
  }
  @media only screen and (max-width: 449px) {
    ${h4_semibold}
  }
`;

const TopBar = styled.div`
  background-color: var(--assembly-blue);
  width: 100%;
`;

const AnnounceBar = styled.div`
  padding: var(--space-11) 0;
  a {
    margin: 0;
    cursor: pointer;
    transition: none;
    p {
      margin: 0;
      ${label_semibold};
      color: var(--title);
      margin-top: var(--space-2);
    }
  }
`;

const HelpLink = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    justify-content: center;
    @media only screen and (max-width: 449px) {
      justify-content: space-between;
    }
    .hover-line-path {
      opacity: 0;
      transition: opacity 0.4s ease, transform 0.4s ease;
    }

    .hover-tip-path {
      transition: opacity 0.4s ease, transform 0.4s ease;
    }
    &:hover {
      .hover-line-path {
        opacity: 1;
        transform: translateX(2px);
      }
      .hover-tip-path {
        transform: translateX(2px);
      }
    }
  }
`;

const Icon = styled.div`
  display: flex;
  svg {
    path {
      fill: var(--title);
    }
  }
`;

const Drop = styled.div`
  background-color: var(--off-white-600-with-opacity);
  border: 1px solid var(--border-default-with-opacity);
  border-radius: var(--radius-20);
  overflow: hidden;
  padding: var(--space-12);
  backdrop-filter: blur(4px);
`;

const DropDownHeading = styled.div`
  ${label_semibold}
  color: var(--text-secondary);
  min-width: 280px;
  padding: var(--space-8) var(--space-14) var(--space-4);
  ${(props) =>
    props.isWidth &&
    css`
      max-width: 350px;
      min-width: 350px;
    `}
`;

const FeatureDropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid var(--border-default);
  max-width: 360px;
  padding: var(--space-12);
  :first-child {
    border-left: none;
  }
`;

const ParentMenuDiv = styled.div`
  background-color: var(--off-white-300);
  border: 1px solid var(--border-default-with-opacity);
  border-radius: var(--radius-16);
  display: grid;
  grid-template-columns: ${({ itemCount }) => `repeat(${itemCount}, 1fr)`};
  overflow: hidden;
`;

const VisitSite = styled.div`
  gap: var(--space-4);
  display: flex;
  align-items: center;
  ${button_regular}
  color: var(--text-secondary);
  transition: color 0.3s ease;
  white-space: nowrap;
  svg {
    path {
      transition: fill 0.3s ease;
      fill: var(--text-secondary);
    }
  }
  .hover-line-path {
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  .hover-tip-path {
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  :hover {
    color: var(--title);
    svg {
      path {
        fill: var(--title);
      }
    }
  }
`;

const HighlightSectionDiv = styled.div`
  padding: var(--space-20);
  transition: background-color 0.3s ease-in-out;
  margin: -12px;
  a {
    display: flex;
    flex-direction: column;
    gap: var(--space-20);
    align-items: flex-start;
    :focus-visible {
      border-radius: var(--radius-8);
    }
  }
  &:hover {
    background-color: var(--bg-primary-hover);
    ${VisitSite} {
      color: var(--title);
      svg {
        path {
          fill: var(--title);
        }
      }
    }
    .hover-line-path {
      opacity: 1;
      transform: translateX(2px);
    }
    .hover-tip-path {
      transform: translateX(2px);
    }
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  width: 100%;
  .hightLight-image {
    border: 1px solid var(--border-default);
    border-radius: var(--radius-8);
    width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const Title = styled.p`
  margin: 0;
  ${body_regular}
  color: var(--title);
`;

const Description = styled.p`
  margin: 0;
  ${button_regular}
  color: var(--text-secondary);
`;

const Section = styled.div`
  border: 1px solid var(--border-default);
  border-radius: var(--radius-16);
  padding: var(--space-12);
  margin-top: var(--space-12);
  overflow: hidden;
`;

const BottomButtonSection = styled.div`
  border-top: 1px solid var(--border-default);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  @media only screen and (max-width: 1080px) {
    padding: var(--space-16) var(--space-32);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-16);
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
  ThirdLine,
  FirstLine,
  OverLayBlock,
  AssemblyLogo,
  InnerList,
  ListLi,
  MenuWrap,
  LeftImg,
  RightText,
  LineMenuImg,
  SignInMobile,
  MobileRight,
  MobileListLi,
  MobileText,
  SpanMobileLink,
  MobileTextLink,
  TopBar,
  AnnounceBar,
  HelpLink,
  Listright,
  Drop,
  DropDownHeading,
  FeatureDropdown,
  Dropdown,
  NavigationMainDiv,
  ParentMenuDiv,
  LinkText,
  HighlightSectionDiv,
  ContentDiv,
  Content,
  Title,
  Description,
  BergerMenu,
  SecondLine,
  Icon,
  ResponsiveSpanLink,
  MobileSectionTitle,
  MobileSectionList,
  DropdownContainer,
  Section,
  BottomButtonSection,
  VisitSite
};
