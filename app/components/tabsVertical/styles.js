import styled, { css } from 'styled-components';
import { body_regular, h4_regular } from '../../styles/typography';

const TabsVerticalSection = styled.div`
  display: flex;
  gap: var(--space-64);
  padding: var(--space-64) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-48) 0;
    flex-direction: column;
    gap: var(--space-40);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-40) 0;
    gap: var(--space-32);
  }
`;
const TabsVerticalLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-64);
  justify-content: space-between;
  max-width: 564px;
  @media only screen and (max-width: 991px) {
    gap: var(--space-40);
    max-width: 100%;
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-32);
  }
`;
const TabsVerticalRight = styled.div`
  width: 100%;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;
const MainSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: var(--radius-16);
  position: relative;
  @media only screen and (max-width: 991px) {
    margin-top: 0;
    height: auto;
  }
`;
const Tabbutton = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  z-index: 1;
`;
const ShowImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease 0s, visibility 1ms ease 0.3s;
  display: flex;
  justify-content: center;
  padding-bottom: var(--space-4);
  img {
    height: auto;
    width: 100%;
    border-radius: var(--radius-16);
    border: 1px solid var(--off-white-550);
  }
  ${(props) =>
    props.isSelectedTab &&
    css`
      position: relative;
      opacity: 1;
      visibility: visible;
      transition: opacity 0.3s ease 0s;
    `};
  @media only screen and (max-width: 1024px) {
    img {
      width: 100%;
    }
  }
  @media only screen and (max-width: 991px) {
    padding-bottom: 0;
    img {
      width: 100%;
    }
  }
`;

const Image = styled.img``;

const Title = styled.h4`
  ${body_regular};
  font-weight: 400;
  color: var(--title);
  margin: 0;
  transition: color 0.3s ease;
  ${(props) =>
    props.selectedTab &&
    css`
      color: var(--title);
      margin: 0 0 var(--space-8);
    `}
  @media only screen and (max-width: 991px) {
    ${(props) =>
      props.selectedTab &&
      css`
        margin: 0;
      `}
  }
`;

const TabIcon = styled.div`
  display: flex;
  padding-top: var(--space-4);
  svg {
    path {
      fill: var(--gray-400);
      transition: 0.3s all ease-in-out;
    }
  }
  @media (max-width: 449px) {
    padding-top: var(--space-2);
  }
`;

const ToolsTab = styled.button`
  padding: var(--space-20) var(--space-20) var(--space-16);
  border-bottom: 1px solid var(--border-default);
  display: flex;
  align-items: flex-start;
  text-align: left;
  cursor: pointer;
  background-color: var(--off-white-300);
  transition: border-bottom 0.3s ease background-color 0.3s ease-in-out;
  gap: var(--space-12);
  :hover {
    svg {
      path {
        fill: var(--text-secondary);
      }
    }
    ${Title} {
      color: var(--text-secondary);
    }
  }
  ${(props) =>
    props.selectedTab &&
    css`
      background-color: var(--off-white-550);
      :hover {
        svg {
          path {
            fill: var(--gray-400);
          }
        }
        ${Title} {
          color: var(--title);
        }
      }
    `}

  @media only screen and (max-width: 991px) {
    border-top: 1px solid var(--border-default);
    border-bottom: none;
    padding: var(--space-20) 0 0;
    gap: var(--space-12);
    ${(props) =>
      props.selectedTab &&
      css`
        background-color: unset;
        border-radius: unset;
      `}
  }
`;
const DesktopCaption = styled.div`
  transition: all 0.3s;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;
const ResponsiveCaption = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    display: block;
  }
`;

const Caption = styled.p`
  ${body_regular};
  text-align: left;
  color: var(--text-secondary);
  margin: 0;
`;

const TabsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResponsiveImageSection = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    display: block;
    height: 0;
    overflow: hidden;
    transition: all 0.6s;
    margin-top: var(--space-16);
    :last-child {
      margin-top: 0;
    }
    &.responsive-image {
      transition: all 0.6s;
      margin-bottom: var(--space-20);
      :last-child {
        margin: var(--space-16) 0 0;
      }
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    gap: var(--space-4);
  }
`;

const Icon = styled.div`
  display: flex;
`;

export {
  TabsVerticalSection,
  TabsVerticalLeft,
  TabsVerticalRight,
  Tabbutton,
  ShowImage,
  MainSection,
  Image,
  ToolsTab,
  Title,
  Caption,
  TabsSection,
  ResponsiveImageSection,
  DesktopCaption,
  ResponsiveCaption,
  TabIcon,
  TitleWrapper,
  Icon
};
