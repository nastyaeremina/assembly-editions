import styled, { css } from 'styled-components';
import { Body4, FooterText, MbBody5 } from '../../styles/styles';
import { greendark, lightgray, primary, title } from '../../styles/color';

const SideNavbar = styled.div`
  width: 300px;
  height: 100vh;
  padding: 40px 0px 0px 20px;
  border-right: 1px solid #ccccd0;
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
const NavTitle = styled.p`
  padding-left: 15px;
  ${Body4};
  color: ${greendark};
  margin: 0;
  @media only screen and (max-width: 991px) {
    border-left: 1px solid #757575;
  }
`;

const NavHead = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  cursor: pointer;
  :hover {
    .head {
      color: ${primary};
    }
    svg {
      path {
        stroke: #09aa6c;
      }
    }
    .close {
      svg {
        path {
          stroke: #09aa6c;
        }
      }
    }
  }
  .close {
    transform: rotate(90deg);
    transition: all 0.3s ease;
    svg {
      path {
        stroke: #00160e;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    :hover {
      .head {
        color: ${lightgray};
      }
      svg {
        path {
          stroke: #a5aba9;
        }
      }
      .close {
        svg {
          path {
            stroke: #00160e;
          }
        }
      }
    }
  }
`;
const OptionName = styled.p`
  margin: 0;
  ${MbBody5};
  color: ${lightgray};
  ${(props) =>
    props.isSelected &&
    css`
      color: ${greendark};
    `}
`;
const OptionIcon = styled.div`
  transition: all 0.3s ease;
`;
const NavItem = styled.li`
  display: flex;
  gap: 10px;
  padding-left: 12px;
  align-items: center;
  cursor: pointer;
  padding-top: 14px;
  :first-child {
    padding-top: 0px;
    padding-bottom: 2px;
  }
  :hover {
    .secondhead {
      color: ${primary};
    }
    .svgicon {
      svg {
        path {
          stroke: #09aa6c;
        }
        ellipse {
          fill: #09aa6c;
        }
      }
    }
  }
  .guidelink {
    display: flex;
    gap: 10px;
  }
  @media only screen and (max-width: 991px) {
    :hover {
      .secondhead {
        color: ${lightgray};
      }
      .svgicon {
        svg {
          path {
            stroke: #a5aba9;
          }
          ellipse {
            fill: #a5aba9;
          }
        }
      }
    }
  }
  .guidelink {
    display: flex;
    gap: 10px;
  }
`;
const Icon = styled.div`
  display: flex;
  /* align-items: center; */
  width: 20px;
  height: 20px;
  svg {
    width: 22px;
    height: 22px;
    path {
      stroke: #a5aba9;
    }
  }
  ${(props) =>
    props.isSelected &&
    css`
      svg {
        path {
          stroke: #00160e;
        }
      }
    `}
`;
const IconText = styled.div`
  ${MbBody5};
  color: ${lightgray};
  ${(props) =>
    props.isSelected &&
    css`
      color: ${greendark};
    `}
`;
const NavItemSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const NavmenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100vh;
  overflow: scroll;
  padding: 40px 20px 140px 0px;
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.2) calc(40px / 2),
    #000 40px,
    #000 calc(100% - 40px),
    rgba(0, 0, 0, 0.2) calc(100% - calc(40px / 2)),
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.2) calc(40px / 2),
    #000 40px,
    #000 calc(100% - 40px),
    rgba(0, 0, 0, 0.2) calc(100% - calc(40px / 2)),
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
const NavBg = styled.div`
  background: linear-gradient(180deg, #f9f9f9, transparent);
  height: 15px;
  position: absolute;
  max-width: 260px;
  width: 100%;
  z-index: -1;
`;
const NavBg = styled.div`
  background: linear-gradient(180deg, #f9f9f9, transparent);
  height: 15px;
  position: absolute;
  max-width: 260px;
  width: 100%;
  z-index: -1;
`;
const GuideSectionItem = styled.div`
  ${(props) =>
    css`
      .drop-down {
        height: ${props.totalHeight}px;
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
`;
const NavSection = styled.ul``;
const GuideRight = styled.div`
  width: 220px;
  padding: 90px 20px 0px 0px;
  position: sticky;
  top: 0;
  height: 100vh;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;
const ItemList = styled.div`
  border-left: 1px solid #ccccd0;
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
    color: ${lightgray};
  }
  :hover {
    border-left: 1px solid #09aa6c;
    margin-left: -1px;
    a {
      color: ${primary};
    }
  }
  ${(props) =>
    props.isSelected &&
    css`
      border-left: 1px solid #00160e;
      margin-left: -1px;
      a {
        color: ${greendark};
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
const ItemSubName = styled.p`
  padding: 4px 0px 4px 30px;
  margin: 0;
  ${MbBody5};
  cursor: pointer;
  a {
    color: ${lightgray};
  }
  ${(props) =>
    props.isSelected &&
    css`
      border-left: 1px solid #09aa6c;
      margin-left: -1px;
      a {
        color: ${primary};
      }
    `}
`;
const GuideMobileNavbar = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    display: block;
    position: sticky;
    top: 0;
    height: 100%;
    background: rgba(255, 255, 253, 0.8);
    border-bottom: 0px solid rgb(204, 204, 208);
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
  background-color: #ffffff;
  /* top: 76px; */
  width: 100%;
  height: 100vh;
  /* padding: 0px 24px 0; */
  /* overflow: scroll; */
`;

const BtnIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 20px;
  display: flex;
  gap: 4px;
`;

const AskDiv = styled.div`
  border-radius: 36px;
  border: 1px solid #ccccd0;
  padding: 9px 20px;
  position: relative;
  max-width: 260px;
  width: 100%;
  ${FooterText};
  color: ${lightgray};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
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
  NavItemSection,
  NavmenuSection,
  GuideRight,
  ItemList,
  ItemName,
  ItemSubName,
  GuideMobileNavbar,
  NavbarHeader,
  MobileNavMenu,
  BtnIcon,
  AskDiv,
  NavSection,
  GuideSectionItem,
  NavBg
};
