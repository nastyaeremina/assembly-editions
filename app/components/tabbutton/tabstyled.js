'use client';

import styled, { css } from 'styled-components';
import { Label } from '../../styles/styles';
import { whiteColor } from '../../styles/color';

const Tabbutton = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  ${(props) =>
    props.bgimage &&
    css`
      background: url(${props.bgimage});
      width: 100%;
      background-size: cover;
      border-radius: 5px;
      border: 1px solid #131313;
      background-repeat: no-repeat;
    `}

  .Tabs {
    width: 80%;
    height: auto;
    min-height: 400px;
    background: #053742;
    margin: 3.5rem auto 1.5rem;
    color: #e8f0f2;
    border-radius: 2rem;

    @media (max-width: 769px) {
      padding: 2rem 0;
    }
  }
`;

const TabDetails = styled.div`
  .FirstTab p,
  .SecondTab p {
    font-size: 2rem;
    text-align: center;
  }
`;

const Tab = styled.li`
  white-space: nowrap;
  border-radius: 19px;
  padding: 10px 20px;
  list-style: none;
  text-align: center;
  font-family: 'Bagoss';
  font-size: 17px;
  line-height: 21px;
  font-weight: 500;
  cursor: pointer;
  &&.active {
    ${(props) =>
      props.textColor &&
      css`
        color: ${props.textColor} !important;
      `}
    ${(props) =>
      props.bgColor &&
      css`
        background: ${props.bgColor} !important;
      `}
  }
  @media only screen and (max-width: 991px) {
    padding: 5px 20px;
    font-size: 15px;
    line-height: 24px;
  } ;
`;
const BottomFunction = styled.div`
  margin-top: 40px;
  .am {
    font-family: 'Bagoss';
    letter-spacing: 0.02em;
  }
  .af {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-top: 28px;
  }
  @media only screen and (max-width: 449px) {
    display: flex;
    flex-direction: column;
    justify-content: unset;
    align-content: unset;
    align-items: unset;
    margin-top: 28px;
  }
  .ml0 {
    margin-left: -6px;
  }
`;

const NAV = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    overflow: scroll;
    margin: 0 -24px;
    padding: 0 24px;
    scrollbar-width: none;
    margin-bottom: 28px;
    display: block;
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
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: scroll;
    border: 1px solid #00160e;
    border-radius: 40px;
    width: fit-content;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  ul.nav {
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 0.01em;
    color: #000000;
    padding-left: 0px;
    display: flex;
    @media (max-width: 445px) {
      overflow: auto;
      display: flex;
    }
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }
  ul.nav li:hover {
    color: #131313;
  }
  ul.nav li.active {
    background: #00160e;
    color: #e3ffee;
  }
`;

const TabbuttonBottom = styled.div`
  width: 100%;
  background: transparent;
  position: relative;
  cursor: pointer;
  display: flex;
  padding: 34px 0 60px 0;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;
    max-width: 881.76px;
    width: 100%;
    border: 1px solid #131313;
    border-radius: 4px;
    max-height: 550.63px;
    box-shadow: 4px 4px 32px 0px rgba(0, 0, 0, 0.25);
    display: block;
  }
  ${(props) =>
    props.isAutomation &&
    css`
      padding: 0;
      img {
        width: 100%;
        max-width: 100%;
        border-radius: 5px;
        max-height: ${props?.isGifFile ? '276px' : '550px'};
      }
      @media only screen and (max-width: 749px) {
        padding: 0;
      }
    `}
  @media only screen and (max-width: 768px) {
    padding: 14px;
  }
`;
const TabbuttonTop = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 40px 40px 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 80px;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
    width: auto;
    padding: 14px 19px 0px 19px;
  }
`;

const LeftContent = styled.p`
  font-family: 'Bagoss';
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: ${whiteColor};
  @media only screen and (max-width: 1440px) {
    max-width: 566px;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 375px;
  }
  @media only screen and (max-width: 768px) {
    text-align: left;
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
  ul.nav {
    max-width: 746px;
    width: fit-content;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid #00160e;
    border-radius: 41px;
    ${Label}
    color: #000000;
    padding-left: 0px;
    display: flex;
    @media (max-width: 1440px) {
      margin: 0 -25px;
      /* padding: 0 24px; */
      overflow: auto;
      display: flex;
    }
    @media (max-width: 1024px) {
      margin: 0 -25px;
      /* padding: 0 24px; */
      overflow: auto;
      display: flex;
    }
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }
  ul.nav li:hover {
    color: #131313;
  }
  ul.nav li.active {
    background: #120800;
    color: #fff7f0;
  }
`;

export { Tabbutton, TabDetails, Tab, BottomFunction, NAV, TabbuttonBottom, TabbuttonTop, LeftContent, RightContent };
