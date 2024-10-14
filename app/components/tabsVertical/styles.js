import styled, { css } from 'styled-components';
import { Body4, Heading5, MbBody4, MobileH4 } from '../../styles/styles';

const TabsVerticalSection = styled.div`
  display: flex;
  gap: 40px;
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 80px;
    flex-direction: column;
  }
`;
const TabsVerticalLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media only screen and (max-width: 449px) {
    gap: 40px;
  }
`;
const TabsVerticalRight = styled.div`
  width: 100%;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const MainSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--title);
  border-radius: 4px;
  position: relative;
  @media only screen and (max-width: 768px) {
    margin-top: 0;
    height: auto;
  }
`;
const Tabbutton = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  z-index: 1;
  .outlet {
    position: relative;
    height: 100%;
  }
`;
const ShowImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0px;
  height: 100%;
  width: 100%;
  opacity: 0;
  scale: 0.97;
  visibility: hidden;
  transition: opacity 0.4s ease 0s, scale 0.3s ease-in-out 0s, visibility 1ms ease 0.3s;
  padding: 40px;
  display: flex;
  justify-content: center;
  img {
    height: 100%;
    border-radius: 4px;
    border: 1px solid var(--title);
    object-fit: cover;
    object-position: left;
  }
  ${(props) =>
    props.isSelectedTab &&
    css`
      position: relative;
      height: 100%;
      width: 100%;
      opacity: 1;
      scale: 1;
      visibility: visible;
      transition: opacity 0.3s ease 0s, scale 0.4s ease-in-out 0s;
    `};
  @media only screen and (max-width: 1024px) {
    img {
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 14px;
    img {
      width: 100%;
    }
  }
`;

const Image = styled.img``;

const BgImage = styled.div`
  margin: 0px auto;
  position: absolute;
  width: 100%;
  height: 100%;
  scale: 1;
  transition: all 1s cubic-bezier(0.72, 0, 0.12, 1) 0s;
  overflow: hidden;
  opacity: 1;
  will-change: scale, width;
  .img {
    object-position: center top;
    object-fit: cover;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    opacity: 0;
    scale: 1.1;
    visibility: hidden;
    transition: opacity 0.3s ease 0s, scale 0.3s ease-in-out 0s, visibility 1ms ease 0.3s;
  }

  .active-img {
    object-position: center center;
    object-fit: cover;
    /* position: absolute; */
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    opacity: 1;
    scale: 1;
    visibility: visible;
    transition: opacity 0s ease 0s, scale 0.4s ease-in-out 0s;
  }
`;

const ToolsTab = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  ${(props) =>
    props.selectedTab &&
    css`
      border-bottom: 1px solid var(--black);
    `}
  @media only screen and (max-width: 768px) {
    border-top: 1px solid var(--border);
    border-bottom: none;
    padding: 16px 0 0 0;
    gap: 6px;
    ${(props) =>
      props.selectedTab &&
      css`
        border-top: 1px solid var(--black);
      `}
  }
`;
const DesktopCaption = styled.div`
  transition: all 0.3s;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ResponsiveCaption = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
const Title = styled.h3`
  ${Heading5};
  font-weight: 400;
  color: var(--dark-gray);
  margin: 0;
  ${(props) =>
    props.selectedTab &&
    css`
      color: var(--title);
      margin: 0 0 8px;
    `}
  ${ToolsTab}:hover & {
    color: var(--title);
  }
  @media only screen and (max-width: 449px) {
    ${MobileH4}
  }
`;
const Caption = styled.p`
  ${Body4};
  color: var(--body);
  margin: 0;
  @media only screen and (max-width: 449px) {
    ${MbBody4}
  }
`;

const TabsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResponsiveImageSection = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    height: 0;
    overflow: hidden;
    transition: all 0.6s;
    margin-top: 16px;
    :last-child {
      margin-top: 0;
    }
    &.responsive-image {
      transition: all 0.6s;
      margin-bottom: 16px;
      :last-child {
        margin-top: 16px;
        margin-bottom: 0px;
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
  BgImage,
  ToolsTab,
  Title,
  Caption,
  TabsSection,
  ResponsiveImageSection,
  DesktopCaption,
  ResponsiveCaption
};
