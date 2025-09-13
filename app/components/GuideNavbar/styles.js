import styled, { css } from 'styled-components';
import { Body4, FooterText, MbBody5 } from '../../styles/styles';

const SideNavbar = styled.div`
  width: 300px;
  height: 100vh;
  padding: 40px 0px 0px 20px;
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
  /* gap: 40px; */
`;
const CopilotGuideLogo = styled.img`
  cursor: pointer;
  @media only screen and (max-width: 991px) {
    width: 96px;
    height: 22px;
  }
`;

const SideNavbarHead = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-right: 20px;
`;
const NavTitle = styled.div`
  a {
    padding-left: 15px;
    ${Body4};
    color: var(--dark-green);
    margin: 0;
  }
  @media only screen and (max-width: 991px) {
    border-left: 1px solid var(--medium-gray);
  }
`;

const NavHead = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  cursor: pointer;
  :hover {
    .head {
      color: var(--primary);
    }
    svg {
      path {
        stroke: var(--primary);
      }
    }
    .close {
      svg {
        path {
          stroke: var(--primary);
        }
      }
    }
  }
  .close {
    transform: rotate(90deg);
    transition: all 0.3s ease;
    svg {
      path {
        stroke: var(--dark-green);
      }
    }
  }
  @media only screen and (max-width: 991px) {
    :hover {
      .head {
        color: var(--medium-gray);
      }
      svg {
        path {
          stroke: var(--light-gray);
        }
      }
      .close {
        svg {
          path {
            stroke: var(--dark-green);
          }
        }
      }
    }
  }
`;
const OptionName = styled.p`
  margin: 0;
  ${MbBody5};
  color: var(--medium-gray);
  ${(props) =>
    props.isSelected &&
    css`
      color: var(--dark-green);
    `}
`;
const OptionIcon = styled.div`
  transition: all 0.3s ease;
`;

const NavItem = styled.li`
  ${(props) =>
    props.isSubItem &&
    css`
      padding-left: 28px !important;
    `};
  display: flex;
  gap: 10px;
  padding-left: 12px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding-top: 14px;
  :first-child {
    padding-top: 12px;
    padding-bottom: 2px;
  }
  :hover {
    .secondhead {
      color: var(--primary);
    }
    .fill {
      path {
        fill: var(--primary);
        stroke: unset !important;
      }
    }
    .svgicon {
      svg {
        path {
          stroke: var(--primary);
        }
        ellipse {
          fill: var(--primary);
        }
      }
    }
    .close {
      svg {
        path {
          stroke: var(--primary);
        }
      }
    }
  }
  .guidelink {
    display: flex;
    gap: 10px;
    width: 100%;
    align-items: center;
  }
  .close {
    transform: rotate(90deg);
    transition: all 0.3s ease;
    svg {
      path {
        stroke: var(--dark-green);
      }
    }
  }
  @media only screen and (max-width: 991px) {
    :hover {
      .secondhead {
        color: var(--medium-gray);
      }
      .svgicon {
        svg {
          path {
            stroke: var(--light-gray);
          }
          ellipse {
            fill: var(--light-gray);
          }
        }
      }
      .close {
        svg {
          path {
            stroke: var(--dark-green);
          }
        }
      }
    }
  }
`;

const Icon = styled.div`
  display: flex;
  /* align-items: center; */
  width: 20px;
  height: 20px;
  .fill {
    path {
      fill: var(--light-gray);
      stroke: unset;
    }
  }
  svg {
    width: 22px;
    height: 22px;
    path {
      stroke: var(--light-gray);
    }
  }
  ${(props) =>
    props.isSelected &&
    css`
      svg {
        path {
          stroke: var(--dark-green);
        }
      }
      .fill {
        path {
          fill: var(--dark-green);
        }
      }
    `}
`;
const IconText = styled.div`
  ${MbBody5};
  color: var(--medium-gray);
  ${(props) =>
    props.isSelected &&
    css`
      color: var(--dark-green);
    `}
`;

const NavmenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100vh;
  overflow: scroll;
  padding: 40px 20px 240px 0px;
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    var(--black-shadow-20) calc(40px / 2),
    var(--black) 40px,
    var(--black) calc(100% - 40px),
    var(--black-shadow-20) calc(100% - calc(40px / 2)),
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    var(--black-shadow-20) calc(40px / 2),
    var(--black) 40px,
    var(--black) calc(100% - 40px),
    var(--black-shadow-20) calc(100% - calc(40px / 2)),
    transparent 100%
  );
  @media only screen and (min-width: 992px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
  @media only screen and (max-width: 991px) {
    padding: 30px 24px 180px;
    /* mask-image: unset; */
  }
`;

const GuideSectionItem = styled.div`
  a {
    color: var(--white);
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

  ul {
    /* margin: 0px 5px; */
    &:first-child {
      margin-top: 16px;
    }
    overflow: hidden;
    text-align: center;
    width: auto;
    max-height: 0;
    opacity: 0;
    -webkit-transition: all 0.5s ease-in-out 0s;
    transition: all 0.5s ease-in-out 0s;
  }

  .open {
    opacity: 1;
    z-index: 9999;
    ${(props) =>
      css`
        max-height: ${props.totalHeight}px;
      `}
  }

  .arrow {
    width: 13px;
    transition: transform 0.3s ease;
  }

  .arrow.open {
    transform: rotate(90deg);
  }

  ${(props) =>
    css`
      .drop-down {
        max-height: ${props.totalHeight}px;
      }
    `}
  .drop-down {
    list-style: none;
    overflow: hidden;
    -webkit-transition: height 0.3s ease;
    transition: height 0.3s ease;
  }
  .drop-down.closed {
    height: 18px;
  }
  :last-child {
    /* padding-bottom: 100px; */
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
    background: var(--main-bg-color);
    border-bottom: 0px solid rgb(204, 204, 208);
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
  padding: 16px 24px;
`;
const MobileNavMenu = styled.div`
  position: absolute;
  z-index: 1;
  background-color: var(--white);
  /* top: 76px; */
  width: 100%;
  height: 100vh;
  /* padding: 0px 24px 0; */
  /* overflow: scroll; */
`;

const BtnIcon = styled.div`
  position: absolute;
  top: 11px;
  right: 20px;
  display: flex;
  gap: 4px;
`;

const Main = styled.div`
  background: var(--white-overlay-color);
  backdrop-filter: blur(2px);
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  top: 0;
`;

const PopUp = styled.div`
  background-color: var(--neutral);
  position: absolute;
  top: 15vh;
  left: calc(50% - 327px);
  border-radius: 12px;
  .vercel [cmdk-root] {
    width: 640px;
    padding: 8px 0 0;
    /* background: ${({ theme }) => theme.inputBackground}; */
    border-radius: 12px;
    overflow: hidden;
    /* border: 1px solid ${({ theme }) => theme.border}; */
    box-shadow: 0 16px 70px var(--black-shadow-20);
    transition: transform 100ms ease;
  }

  .dark .vercel [cmdk-root] {
    background: var(--black-shadow);
  }

  .vercel [cmdk-input] {
    border: none;
    width: 100%;
    font-size: 17px;
    padding: 8px 8px 16px 46px;
    outline: none;
    color: var(--dark-green);
    /* margin-bottom: 16px; */
    border-radius: 0;
    background-color: var(--neutral);
  }

  .vercel [cmdk-input]::placeholder {
    /* color: ${({ theme }) => theme.modalplaceholder}; */
  }

  .vercel [cmdk-vercel-badge] {
    height: 20px;
    /* background: ${({ theme }) => theme.projectnamehover}; */
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    font-size: 12px;
    /* color: ${({ theme }) => theme.description}; */
    border-radius: 4px;
    margin: 4px 0 4px 12px;
    user-select: none;
    text-transform: capitalize;
    font-weight: 500;
  }

  .vercel [cmdk-item] {
    content-visibility: auto;
    cursor: pointer;
    border-radius: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    user-select: none;
    will-change: background, color;
    transition: all 150ms ease;
    transition-property: none;
  }

  .vercel [cmdk-item][data-selected='true'] {
    background: var(--select-bg-color);
  }

  .vercel [cmdk-item][data-disabled='true'] {
    color: var(--select-text-color);
    cursor: not-allowed;
  }

  .vercel [cmdk-item]:active {
    transition-property: background;
    background: var(--neutral);
    color: var(--dark-green);
  }

  .vercel [cmdk-item] svg {
    width: 22px;
    height: 22px;
  }

  .vercel [cmdk-list] {
    /* min-height:330px; */
    max-height: 400px;
    overflow: auto;
    overscroll-behavior: contain;
    transition: 100ms ease;
    transition-property: height;
    padding: 8px;
    border-top: 1px solid var(--border);
    scroll-padding-block: 8px;
  }
  .vercel [cmdk-vercel-shortcuts] {
    display: flex;
    margin-left: auto;
    gap: 8px;
  }

  .vercel [cmdk-vercel-shortcuts] kbd {
    font-family: 'Inter';
    font-size: 12px;
    min-width: 20px;
    padding: 4px;
    height: 20px;
    border-radius: 4px;
    /* color: ${({ theme }) => theme.description}; */
    background: var(--neutral);
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
    font-size: 12px;
    /* color: ${({ theme }) => theme.lighttext}; */
    padding: 0 8px;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .vercel [cmdk-empty] {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    white-space: pre-wrap;
    color: var(--dark-green);
  }
  .vercel [cmdk-group-items] {
    display: flex;
    flex-direction: column;
  }
  .highlight {
    /* background-color: yellow; */
    font-weight: 500;
    color: var(--primary);
  }
  .search-icon {
    position: absolute;
    z-index: 1;
    width: 16px;
    height: 16px;
    top: 18px;
    left: 20px;
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
  padding: 12px;
  .list {
    display: flex;
    gap: 10px;
  }
`;

const SearchListText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--body);
  font-style: 400;
  h4 {
    margin: 0;
    font-weight: 500;
  }
  .text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
`;

const InputWrap = styled.form`
  margin-top: 40px;
  max-width: 260px;
  width: 100%;
  position: relative;
  cursor: pointer;
  .ask-icon {
    position: absolute;
    top: 9px;
    left: 20px;
  }
`;
const Text = styled.div`
  ${FooterText};
  color: var(--medium-gray);
  letter-spacing: 0.01em;
  padding: 11px 68px 11px 48px;
  border: 1.5px solid var(--border);
  border-radius: 48px;
  width: 100%;
  outline: 0;
  :hover {
    border: 1.5px solid var(--border);
    box-shadow: 0px 4px 8px var(--black-shadow-7);
  }
`;

export {
  SideNavbar,
  Maindiv,
  CopilotGuideLogo,
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
  InputWrap
};
