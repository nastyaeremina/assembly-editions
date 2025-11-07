'use client';

import styled, { css } from 'styled-components';
import { body_regular, label_regular } from '../../styles/typography';

const Tabbutton = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  z-index: 1;
  .Tabs {
    width: 80%;
    height: auto;
    min-height: 400px;
    background: var(--tab-background-color);
    margin: 3.5rem auto 1.5rem;
    color: var(--tab-text-color);
    border-radius: 2rem;

    @media only screen and (max-width: 769px) {
      padding: 2rem 0;
    }
  }
  .outlet {
    position: relative;
  }
`;

const TabDetails = styled.div`
  .FirstTab p,
  .SecondTab p {
    font-size: 2rem;
    text-align: center;
  }
`;

const Tab = styled.div`
  position: relative;
  z-index: 10;
  white-space: nowrap;
  border-radius: 30px;
  padding: 10px 20px;
  list-style: none;
  text-align: center;
  font-family: 'Bagoss';
  font-size: 17px;
  line-height: 21px;
  font-weight: 500;
  cursor: pointer;
  color: black;
  transition: all 0.5s ease;
  &&.active {
    color: var(--light-green);

    ${(props) =>
      props.textColor &&
      css`
        color: ${props.textColor};
      `}
    background-color:var(--dark-green);
    ${(props) =>
      props.bgcolor &&
      css`
        color: ${props.bgcolor};
      `}
  }
  @media only screen and (max-width: 449px) {
    padding: 5px 20px;
    font-size: 15px;
    line-height: 24px;
  }
`;
const BottomFunction = styled.div`
  margin-top: 40px;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 28px;
  }
  @media only screen and (max-width: 449px) {
    display: flex;
    flex-direction: column;
    justify-content: unset;
    margin-top: 28px;
  }

  .image-container {
    background-position: center;
    transform: scale(1.2, 1.2);
  }
  @keyframes zoomeffect {
    0% {
      background-position: center;
      transform: scale(1.2, 1.2);
    }
    80% {
      background-position: center;
      transform: scale(1, 1);
    }
  }
`;

const Nav = styled.div`
  display: none;
  // this css work in tablet and mobile device
  .tabsection {
    background-color: var(--secondary-hover-color);
    display: flex;
    white-space: nowrap;
    border-radius: 80px;
    position: relative;
    border: 1px solid var(--dark-green);
    cursor: pointer;
    width: max-content;
  }
  .tab {
    padding: 10px 20px;
    z-index: 1;
    color: var(--black);
    ${label_regular};
    transition: all 0.3s ease-in-out 0s;
  }
  .activetab {
    position: absolute;
    background-color: var(--dark-green);
    height: 100%;
    border-radius: 80px;
    transition: all 0.3s ease-in-out 0s;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 -24px;
    padding: 0 24px;
    overflow: scroll;
    scrollbar-width: none;
    margin-bottom: 28px;
    display: block;
    .tab {
      padding: 5px 20px;
    }
  }
  @media only screen and (max-width: 449px) {
    overflow: scroll;
    margin: 0 -24px;
    padding: 0 24px;
    scrollbar-width: none;
    margin-bottom: 28px;
    max-width: 100vw;
  }
  ul {
    position: relative;
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: scroll;
    border: 1px solid var(--dark-green);
    border-radius: 40px;
    width: fit-content;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      background-color: var(--dark-green);
      display: none;
    }
  }
  ul .active_place {
    position: absolute;
    height: 41px;
    width: 100px;
    transition: all 0.5s ease;
    z-index: 1;
    border-radius: 30px;
    background-color: var(--dark-green);
    ${(props) =>
      props.bgcolor &&
      css`
        background-color: ${props.bgcolor};
      `}
    @media only screen and (max-width: 425px) {
      height: 36px;
    }
    @media only screen and (max-width: 375px) {
      height: 34px;
    }
  }
  ul.nav {
    ${label_regular}
    letter-spacing: 0.01em;
    color: var(--black);
    padding-left: 0px;
    display: flex;
    @media only screen and (max-width: 449px) {
      overflow: auto;
      display: flex;
    }
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }
`;

const TabbuttonTop = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 40px 40px 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 80px;
  align-items: flex-start;
  @media only screen and (max-width: 1024px) {
    gap: 6px;
  }
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
    width: auto;
    padding: 14px 19px 0px 19px;
  }
  ${(props) =>
    props.isDesktopView &&
    css`
      flex-direction: column-reverse;
      gap: 24px;
    `}
`;

const LeftContent = styled.p`
  font-family: 'Bagoss';
  margin: 0;
  ${body_regular}
  color: var(--white);
  opacity: 0;
  display: none;
  ${(props) =>
    props.isShow &&
    css`
      opacity: 1;
      display: inline-block;
    `}
  @media only screen and (max-width: 1440px) {
    max-width: 500px;
    width: 100%;
    ${(props) =>
      props.isDesktopView &&
      css`
        max-width: 812px;
      `}
  }
  @media only screen and (max-width: 1024px) {
    max-width: 375px;
    ${(props) =>
      props.isDesktopView &&
      css`
        max-width: 812px;
      `}
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const RightContent = styled.div`
  max-width: 746px;
  max-height: 41px;
  width: 100%;
  display: contents;
  height: 41px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
  ul {
    position: relative;
  }
  ul .active_place {
    position: absolute;
    height: 41px;
    width: 100px;
    transition: all 0.5s ease;
    z-index: 1;
    border-radius: 30px;
    color: var(--light-green);
    background-color: var(--dark-green);
    ${(props) =>
      props.bgcolor &&
      css`
        background-color: ${props.bgcolor};
      `}
  }
  ul.nav {
    width: fit-content;
    background: var(--secondary-hover-color);
    border: 1px solid var(--dark-green);
    border-radius: 41px;
    ${label_regular}
    color: var(--black);
    padding-left: 0px;
    display: flex;
    @media only screen and (max-width: 1440px) {
      overflow: auto;
      display: flex;
    }
    @media only screen and (max-width: 1024px) {
      overflow: auto;
      display: flex;
    }
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }
  // this css work for desktop device
  .tabsection {
    background-color: var(--secondary-hover-color);
    display: flex;
    white-space: nowrap;
    border-radius: 80px;
    position: relative;
    border: 1px solid var(--dark-green);
    cursor: pointer;
  }
  .tab {
    padding: 10px 20px;
    z-index: 1;
    color: var(--black);
    ${label_regular};
    transition: all 0.3s ease-in-out 0s;
  }
  .activetab {
    position: absolute;
    background-color: var(--dark-green);
    height: 100%;
    border-radius: 80px;
    transition: all 0.3s ease-in-out 0s;
  }
  ${(props) =>
    props.isDesktopView &&
    css`
      .tabsection {
        overflow: auto;
        max-width: 1272px;
        ::-webkit-scrollbar {
          display: none;
        }
        @media only screen and (max-width: 1024px) {
          max-width: 880px;
        }
      }
    `}
`;

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

const MainSection = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  overflow: hidden;
  border: 1px solid var(--title);
  border-radius: 4px;
  position: relative;
`;

const Description = styled.div`
  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
      @media only screen and (max-width: 768px) {
        height: auto;
      }
    `}
  ${(props) =>
    props.isDesktopView &&
    css`
      height: auto;
      max-width: 812px;
    `}
`;

const ShowImage = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  opacity: 0;
  scale: 0.95;
  visibility: hidden;
  transition: scale 0.3s ease-in-out 0s, visibility 1ms ease 0.3s;
  padding: 34px 0 60px 0;
  display: flex;
  justify-content: center;
  img {
    height: 100%;
    border-radius: 4px;
    border: 1px solid var(--title);
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
      transition: scale 0.4s ease-in-out 0s;
    `};
  @media only screen and (max-width: 768px) {
    padding: 14px;
    img {
      width: 100%;
    }
  }
`;
export {
  Tabbutton,
  TabDetails,
  Tab,
  BottomFunction,
  Nav,
  TabbuttonTop,
  LeftContent,
  RightContent,
  BgImage,
  MainSection,
  Description,
  ShowImage
};
