import styled, { css } from 'styled-components';
import { body_regular, h4_regular } from '../../styles/typography';

const TabsVerticalSection = styled.div`
  display: flex;
  gap: var(--space-48);
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
  gap: var(--space-48);
  justify-content: space-between;
  @media only screen and (max-width: 991px) {
    gap: var(--space-40);
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
  height: 100%;
  width: 100%;
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
    object-fit: cover;
  }
  ${(props) =>
    props.isSelectedTab &&
    css`
      position: relative;
      height: 100%;
      width: 100%;
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

const ToolsTab = styled.button`
  padding: var(--space-20) var(--space-20) var(--space-16);
  border-bottom: 1px solid var(--border-default);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  transition: border-bottom 0.3s ease;
  :focus-visible {
    border-radius: var(--radius-12);
  }
  ${(props) =>
    props.selectedTab &&
    css`
      border-bottom: 1px solid transparent;
      background-color: var(--off-white-550);
      border-radius: var(--radius-12);
    `}
  ${(props) =>
    props.isAboveSelected &&
    css`
      border-bottom: 1px solid transparent;
    `}
  @media only screen and (max-width: 991px) {
    border-top: 1px solid var(--border-default);
    border-bottom: none;
    padding: var(--space-20) 0 0;
    gap: var(--space-4);
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
const Title = styled.h4`
  ${h4_regular};
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0;
  transition: color 0.3s ease;
  ${(props) =>
    props.selectedTab &&
    css`
      color: var(--title);
      margin: 0 0 var(--space-4);
    `}
  ${ToolsTab}:hover & {
    color: var(--title);
  }
  @media only screen and (max-width: 991px) {
    ${(props) =>
      props.selectedTab &&
      css`
        margin: 0;
      `}
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
  overflow: auto;
  padding: var(--space-4);
  ::-webkit-scrollbar {
    display: none;
  }
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
      margin-bottom: var(--space-16);
      :last-child {
        margin: var(--space-16) 0 0;
      }
    }
  }
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
  ResponsiveCaption
};
