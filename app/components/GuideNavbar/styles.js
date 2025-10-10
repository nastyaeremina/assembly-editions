import styled, { css } from 'styled-components';
import { MbBody5 } from '../../styles/styles';
import { button_regular, button_semibold, label_regular } from '../../styles/typography';

const SideNavbar = styled.div`
  width: 300px;
  height: 100vh;
  padding: var(--space-24) 0 0;
  border-right: 1px solid var(--border);
  position: fixed;
  top: 0;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;
const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideNavbarHead = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-12);
  padding-right: var(--space-20);
  padding-left: var(--space-20);
  a {
    :focus-visible {
      outline: 1px solid var(--link-default);
      border-radius: var(--radius-8);
    }
  }
  @media only screen and (max-width: 991px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const NavTitle = styled.div`
  a {
    ${button_regular};
    color: var(--title);
    margin: 0;
  }
`;

const Divider = styled.div`
  height: 24px;
  width: 1px;
  background-color: var(--border-default);
`;

const NavHead = styled.button`
  display: flex;
  justify-content: space-between;
  gap: var(--space-12);
  cursor: pointer;
  padding: var(--space-4) 0;
  width: 100%;
  :focus-visible {
    border-radius: var(--radius-8);
  }
  @media only screen and (min-width: 992px) {
    :hover {
      .head {
        color: var(--title);
      }
      svg {
        path {
          fill: var(--title);
        }
      }
    }
  }
  @media only screen and (max-width: 991px) {
    padding: var(--space-10) 0 var(--space-6);
  }
`;
const OptionName = styled.p`
  margin: 0;
  ${button_regular};
  color: var(--text-secondary);
  ${(props) =>
    props.isSelected &&
    css`
      ${button_semibold};
      color: var(--title);
    `}
`;
const OptionIcon = styled.div`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s ease;
    margin-top: var(--space-3);
    path {
      fill: var(--text-secondary);
    }
  }
  .rotate-icon {
    transform: rotate(90deg);
    path {
      fill: var(--title);
    }
  }
`;

const NavItem = styled.div`
  display: flex;
  gap: var(--space-8);
  margin-left: var(--space-16);
  cursor: pointer;
  width: 100%;
  ${(props) =>
    props.isSubItem &&
    css`
      padding-left: var(--space-32);
      margin-left: unset;
    `};
  @media only screen and (min-width: 992px) {
    :hover {
      .secondhead {
        color: var(--title);
      }
      .svgicon {
        svg {
          path {
            fill: var(--title);
          }
          ellipse {
            fill: var(--title);
          }
        }
      }
    }
  }
  @media only screen and (max-width: 991px) {
    padding: var(--space-10) 0 var(--space-6) var(--space-16);
    margin-left: 0;
  }
`;

const Icon = styled.div`
  display: flex;
  svg {
    width: 14px;
    height: 14px;
    margin-top: var(--space-3);
    transition: all 0.3s ease-in-out;
    path {
      fill: var(--text-secondary);
    }
  }
  &.svgicon-search {
    margin-top: var(--space-4);
  }
  ${(props) =>
    props.isSelected &&
    css`
      svg {
        path {
          fill: var(--title);
        }
      }
    `}
`;
const IconText = styled.p`
  ${button_regular};
  color: var(--text-secondary);
  margin: 0;
  transition: color 0.3s ease;
  text-align: left;
  ${(props) =>
    props.isSelected &&
    css`
      ${button_semibold};
      color: var(--title);
    `};
`;

const NavmenuSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: scroll;
  padding: var(--space-8) var(--space-20) var(--space-160);
  transition: opacity 0.6s ease-in-out;
  @media only screen and (min-width: 992px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
  @media only screen and (max-width: 991px) {
    padding: var(--space-16) var(--space-32) var(--space-100);
    width: 100%;
    height: unset;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-16) var(--space-16) var(--space-100);
  }
`;

const GuideSectionItem = styled.div`
  a {
    color: var(--white);
  }

  .guidelink {
    display: flex;
    gap: var(--space-8);
    width: 100%;
    padding-top: var(--space-4);
    padding-bottom: var(--space-4);
    &:focus-visible {
      box-shadow: inset 0 0 0 2px var(--link-default);
      outline: unset;
      border-radius: var(--radius-8);
    }
    :hover {
      svg {
        path {
          fill: var(--title);
        }
      }
      p {
        color: var(--title);
      }
    }
  }
  ul {
    transition: height 0.4s ease-in-out, padding 0.4s ease-in-out;
    overflow: hidden;
  }
  .open {
    padding: var(--space-4) 0 var(--space-8);
  }
  @media only screen and (max-width: 991px) {
    .subitem-dropdown {
      padding-left: var(--space-12);
    }
  }

  nav {
    margin: 15px;
    color: var(--black);
    overflow: hidden;
  }

  #button {
    width: 100px;
    text-align: center;
    border-radius: 20px;
    margin-bottom: 10px;
    padding: 5px;
    color: var(--white);
    background: var(--black);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }

  .second-li {
    padding-left: 14px;
    padding-top: 10px;
  }
`;
const NavSection = styled.ul``;
const GuideRight = styled.div`
  max-width: 284px;
  width: 100%;
  padding-top: var(--space-80);
  position: sticky;
  top: 0;
  overflow: scroll;
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;
const ItemList = styled.div`
  border-left: 1px solid var(--border);
`;
const ItemName = styled.p`
  padding: 6px 0px 6px 8px;
  margin: 0;
  ${MbBody5};
  cursor: pointer;
  :first-child {
    padding-top: 0;
  }
  a {
    color: var(--medium-gray);
  }
  :hover {
    border-left: 1px solid var(--primary);
    margin-left: -1px;
    a {
      color: var(--primary);
    }
  }
  ${(props) =>
    props.isSelected &&
    css`
      border-left: 1px solid var(--dark-green);
      margin-left: -1px;
      a {
        color: var(--dark-green);
      }
    `}
  ${(props) =>
    props.level === 2 &&
    css`
      padding: 6px 0px 6px 22px;
    `}
    ${(props) =>
    props.level === 3 &&
    css`
      padding: 6px 0px 6px 44px;
    `}
    ${(props) =>
    props.level === 4 &&
    css`
      padding: 6px 0px 6px 66px;
    `}
    ${(props) =>
    props.level === 5 &&
    css`
      padding: 6px 0px 6px 88px;
    `}
    ${(props) =>
    props.level === 6 &&
    css`
      padding: 6px 0px 6px 110px;
    `}
`;
const GuideMobileNavbar = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    display: block;
    position: sticky;
    top: 0;
    height: 100%;
    background: var(--off-white-300);
    border-bottom: 0px solid var(--border-default);
    z-index: 11;
    &&.scroll {
      backdrop-filter: blur(6px);
      border-width: 1px;
    }
  }
`;
const NavbarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: var(--space-20) var(--space-32);
  @media only screen and (max-width: 449px) {
    padding: var(--space-20) var(--space-16);
  }
`;
const MobileNavMenu = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  background-color: var(--off-white-300);
  width: 100%;
  height: 0;
  opacity: 0;
  transition: height 0.4s ease-in-out, opacity 0.3s ease-in-out;
  ${(props) =>
    props.isOpenMobile &&
    css`
      height: 100dvh;
      opacity: 1;
    `}
`;

const BtnIcon = styled.div`
  display: flex;
  gap: var(--space-4);
`;

const Main = styled.div`
  background: var(--off-white-100-with-opacity);
  backdrop-filter: blur(8px);
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  top: 0;
`;

const PopUp = styled.div`
  position: absolute;
  top: 15vh;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);

  .vercel {
    height: 100%;
  }

  .close-icon {
    position: absolute;
    top: var(--space-12);
    right: var(--space-12);
    cursor: pointer;
    display: flex;
  }

  .vercel [cmdk-root] {
    width: 500px;
    height: 100%;
    @media only screen and (max-width: 449px) {
      width: unset;
    }
  }

  .vercel [cmdk-input] {
    ${button_regular}
    width: 100%;
    padding: var(--space-8) var(--space-12) var(--space-6) var(--space-40);
    outline: none;
    border: 1px solid var(--border-default);
    color: var(--title);
    border-radius: var(--radius-30);
    transition: transform 100ms ease;
    background-color: var(--off-white-300);
    box-shadow: 0px 10px 10px -4px #00000014;
  }

  .vercel [cmdk-input]::placeholder {
    color: var(--gray-200);
  }

  .vercel [cmdk-input]::focus-visible {
    border: 1px solid var(--title);
  }
  .vercel [cmdk-item] {
    content-visibility: auto;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    user-select: none;
    will-change: background, color;
    transition: all 150ms ease;
    transition-property: none;
  }

  .vercel [cmdk-item][data-selected='true'] {
    background: var(--off-white-600);
  }

  .vercel [cmdk-item][data-disabled='true'] {
    color: var(--text-secondary);
    cursor: not-allowed;
  }

  .vercel [cmdk-item]:active {
    transition-property: background;
    background: var(--off-white-600);
    color: var(--title);
  }

  .vercel [cmdk-item] svg {
    width: 14px;
    height: 14px;
    @media only screen and (max-width: 991px) {
      margin-top: 0;
    }
  }

  .vercel [cmdk-list] {
    max-height: 464px;
    overflow: auto;
    overscroll-behavior: contain;
    transition: 100ms ease;
    transition-property: height;
    padding: var(--space-8);
    scroll-padding-block: var(--space-8);
    margin-top: var(--space-8);
    border: 1px solid var(--border-default);
    background-color: var(--off-white-300);
    border-radius: var(--radius-12);
    box-shadow: 0px 10px 10px -4px #00000014;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .vercel [cmdk-vercel-shortcuts] {
    display: flex;
    margin-left: auto;
    gap: 8px;
  }

  .vercel [cmdk-vercel-shortcuts] kbd {
    font-family: 'Inter';
    padding: 4px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  }

  .vercel [cmdk-separator] {
    height: 1px;
    width: 100%;
    margin: 4px 0;
  }

  .vercel *:not([hidden]) + [cmdk-group] {
    margin-top: 8px;
  }

  .vercel [cmdk-group-heading] {
    user-select: none;
    ${button_semibold}
    padding: 0 8px;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .vercel [cmdk-empty] {
    ${button_regular}
    display: flex;
    align-items: center;
    justify-content: center;
    height: 128px;
    white-space: pre-wrap;
    color: var(--title);
    flex-direction: column;
    gap: var(--space-8);
    text-align: center;
    p {
      ${label_regular}
      color: var(--text-secondary);
      margin: 0;
    }
  }
  .vercel [cmdk-group-items] {
    display: flex;
    flex-direction: column;
  }
  .highlight {
    font-weight: 600;
    color: var(--title);
  }
  .search-icon {
    position: absolute;
    z-index: 1;
    top: var(--space-10);
    left: var(--space-12);
  }
  @media only screen and (max-width: 449px) {
    width: calc(100% - 32px);
  }
`;
const OverLayDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const SearchList = styled.div`
  padding: var(--space-8) var(--space-12);
  .list {
    display: flex;
    gap: 10px;
  }
`;

const SearchListText = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-secondary);
  font-style: 400;
  h4 {
    margin: 0;
    ${button_semibold}
  }
  .text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    ${label_regular}
    .highlight {
      font-weight: 400;
    }
  }
`;

const InputWrap = styled.button`
  margin: var(--space-32) var(--space-20) var(--space-16);
  max-width: 260px;
  width: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 var(--space-12);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-30);
  height: 40px;
  :hover {
    border: 1px solid var(--border-hover);
  }
  .desktop-search-icon {
    display: flex;
  }
`;
const Text = styled.div`
  ${button_regular};
  color: var(--gray-200);
  letter-spacing: 0.01em;
  width: 100%;
  outline: 0;
  padding-left: var(--space-8);
  text-align: left;
`;

const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  ${(props) =>
    props.isOpen &&
    css`
      max-height: 1000px; /* A sufficiently large value that covers max possible content */
      opacity: 1;
    `}
  ${(props) =>
    !props.isOpen &&
    css`
      max-height: 0px;
      opacity: 0;
    `}
  @media only screen and (max-width: 991px) {
    padding-left: var(--space-16);
  }
`;

const SectionArticleList = styled.ul`
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  ${(props) =>
    props.isOpen &&
    css`
      max-height: 2000px; /* A sufficiently large value for sections */
      opacity: 1;
    `}
  ${(props) =>
    !props.isOpen &&
    css`
      max-height: 0px;
      opacity: 0;
    `}
`;

const SearchBarContent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-12);
`;

const ResponsiveInputWrap = styled.button`
  padding: var(--space-12);
  display: flex;
  svg {
    path {
      fill: var(--title);
    }
  }
`;

export {
  SideNavbar,
  Maindiv,
  SideNavbarHead,
  NavTitle,
  NavHead,
  OptionName,
  OptionIcon,
  NavItem,
  Icon,
  IconText,
  NavmenuSection,
  GuideRight,
  ItemList,
  ItemName,
  GuideMobileNavbar,
  NavbarHeader,
  MobileNavMenu,
  BtnIcon,
  NavSection,
  GuideSectionItem,
  Main,
  PopUp,
  OverLayDiv,
  SearchList,
  SearchListText,
  Text,
  InputWrap,
  ArticleList,
  SectionArticleList,
  SearchBarContent,
  ResponsiveInputWrap,
  Divider
};
