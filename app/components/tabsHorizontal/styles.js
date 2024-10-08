import styled, { css } from 'styled-components';
import { Body4, Heading5, MbBody4, MobileH4 } from '../../styles/styles';
import { black, body, border, darkgray, title } from '../../styles/color';

const TabsHorizontalSection = styled.div`
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 80px;
  }
`;

const TabsSection = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 40px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
const ToolsTab = styled.div`
  padding: 20px 0;
  border-top: 1px solid ${border};
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  ${(props) =>
    props.selectedTab &&
    css`
      border-top: 1px solid ${black};
    `}
  @media only screen and (max-width: 768px) {
    padding: 16px 0 0;
    gap: 6px;
  }
`;
const Title = styled.h3`
  ${Heading5};
  font-weight: 400;
  color: ${darkgray};
  margin: 0;
  ${(props) =>
    props.selectedTab &&
    css`
      color: ${title};
    `}
  ${ToolsTab}:hover & {
    color: ${title};
  }
  @media only screen and (max-width: 449px) {
    ${MobileH4}
  }
`;
const Caption = styled.p`
  ${Body4};
  color: ${body};
  margin: 0;
  @media only screen and (max-width: 449px) {
    ${MbBody4}
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
    scale: 1;
    visibility: hidden;
    transition: opacity 0.2s ease 0s, scale 0.3s ease-in-out 0s, visibility 1ms ease 0.3s;
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

const MainSection = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  overflow: hidden;
  border: 1px solid ${title};
  border-radius: 4px;
  position: relative;
  margin-top: 40px;
  @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
`;
const Tabbutton = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  z-index: 1;
  .outlet {
    position: relative;
  }
`;
const ShowImage = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0px;
  height: 100%;
  width: 100%;
  opacity: 0;
  scale: 1;
  visibility: hidden;
  transition: opacity 0.3s ease 0s, scale 0.3s ease-in-out 0s, visibility 1ms ease 0.3s;
  padding: 60px 24px 0px;
  display: flex;
  justify-content: center;
  img {
    height: 100%;
    border-radius: 4px 4px 0 0;
    border: 1px solid ${title};
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
      border-radius: 4px;
    }
  }
`;
const ResponsiveImageSection = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    height: 0;
    transition: all 0.6s;
    overflow: hidden;
    margin-top: 16px;
    :last-child {
      margin-top: 0;
    }
    &.responsive-image {
      transition: all 0.6s;
      margin-bottom: 16px;
      :last-child {
        margin-bottom: 0px;
        margin-top: 16px;
      }
    }
  }
`;
const DesktopImageSection = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export {
  TabsHorizontalSection,
  TabsSection,
  ToolsTab,
  Title,
  Caption,
  Image,
  BgImage,
  ShowImage,
  MainSection,
  Tabbutton,
  ResponsiveImageSection,
  DesktopImageSection
};
