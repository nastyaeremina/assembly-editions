import styled, { css } from 'styled-components';
import { Body3, Body4, Body5, Heading2, Heading5, Heading6, MbBody2, MbBody3, MobileH2 } from '../../../styles/styles';

const HeroSection = styled.div`
  padding: 180px 0 0 0;
  ${(props) =>
    props.isStandardPage &&
    css`
      padding: 0 0 100px;
      @media only screen and (max-width: 768px) {
        padding: 0 0 80px;
      }
    `}
  @media only screen and (max-width: 749px) {
    padding-top: 116px;
    ${(props) =>
      props.isStandardPage &&
      css`
        padding: 0 0 80px;
      `}
  }
`;
const SolutionWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 163px;
  &.details-hero {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media only screen and (max-width: 991px) {
      justify-content: center;
    }
  }
  ${(props) =>
    props.isWeeklycontainer &&
    css`
      gap: 60px;
      padding-bottom: 100px;
    `}
  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
    gap: 60px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    gap: 40px;
    ${(props) =>
      props.isWeeklycontainer &&
      css`
        padding-bottom: 80px;
      `}
  }
  .weeklydemo-form {
    position: relative;
    width: 100%;
    border: 1px solid var(--dark-green);
    padding: 28px 28px 40px;
    @media only screen and (max-width: 768px) {
      padding: 18px 18px 30px;
    }
  }
  .message-card {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--light-green);
  }
`;

const ImageSection = styled.div`
  position: relative;
  .graph-img {
    margin-right: 100px;
    @media only screen and (max-width: 768px) {
      margin-right: unset;
    }
  }
`;

const Card = styled.div`
  width: 216px;
  border: 1px solid var(--mid-dark-green);
  border-radius: 4px;
  position: absolute;
  top: -42px;
  left: 72px;
  overflow: hidden;
  @media only screen and (max-width: 449px) {
    left: 101px;
  }
  &.second-card {
    left: 168px;
    top: 123px;
    @media only screen and (max-width: 449px) {
      left: 10px;
    }
  }
`;

const TopDiv = styled.div`
  padding: 8px 12px;
  border-bottom: 1px solid var(--mid-dark-green);
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: var(--white);
  img {
    width: 32px;
    height: 32px;
  }
  h5 {
    ${Heading6};
    color: var(--title);
    margin: 0;
  }
`;

const BottomDiv = styled.div`
  padding: 8px 12px;
  background-color: var(--light-green);
  &.second-card {
    background-color: var(--other-bg-color);
  }
  h4 {
    ${Heading5};
    margin: 0;
    color: var(--mid-dark-green);
  }
  p {
    margin: 0;
    margin-top: 2px;
    ${Body5};
    color: var(--dark-gray);
  }
`;

const LeftWrap = styled.div`
  margin: 0 auto;
  max-width: 808px;
  &.details-hero {
    max-width: 786px;
    margin: unset;
    text-align: left;
    h1 {
      ${Heading2};
      color: var(--title);
      margin: 0;
      span {
        color: var(--primary);
      }
      @media only screen and (max-width: 768px) {
        ${MobileH2}
      }
    }
    p {
      ${Body3};
      color: var(--body);
      letter-spacing: 0.02em;
      margin: 20px 0 0;
      @media only screen and (max-width: 449px) {
        ${MbBody2}
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 20px;

      li {
        ${Body3};
        color: var(--body);
        position: relative;
        padding-left: 28px;

        ::before {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background-image: url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="20" height="20" rx="10" fill="%2309AA6C"/%3E%3Cg clip-path="url(%23clip0_18360_106181)"%3E%3Cpath d="M5.95312 10.2407L8.18501 12.4726L13.8662 7.19727" stroke="%23E3FFEE" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id="clip0_18360_106181"%3E%3Crect width="9.33333" height="9.33333" fill="white" transform="translate(5.33594 5.33398)"/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E');
          background-size: contain;
          background-repeat: no-repeat;
          left: 0;
          top: 3px;
        }
      }
    }
  }
  .button {
    margin-top: 32px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 32px;
`;

const PoweredBySection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 20px;
  flex-wrap: wrap;
  h6 {
    margin: 0;
    ${Body4};
    color: var(--title);
  }
  h5 {
    margin: 0 !important;
    ${Body4};
    color: var(--medium-gray);
  }
  @media only screen and (max-width: 768px) {
    svg {
      width: 22px;
      height: 22px;
    }
    h6 {
      ${MbBody3};
    }
    h5 {
      ${MbBody3};
    }
  }
`;
const RightWrap = styled.div`
  .comparison-img {
    padding-bottom: 0px;
    @media only screen and (max-width: 991px) {
      display: block;
      text-align: left;
    }
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    text-align: center;
    img {
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    text-align: right;
    ${(props) =>
      props.emptyMobileImage &&
      css`
        text-align: center;
      `}
  }
  @media only screen and (max-width: 749px) {
    display: block;
  }
`;
const TextSection = styled.div`
  text-align: center;
  &.details-hero {
    text-align: left;
    @media only screen and (max-width: 449px) {
      ul {
        li {
          ${MbBody2};
        }
      }
    }
  }
  h1 {
    ${Heading2};
    color: var(--title);
    margin: 0;
    span {
      color: var(--primary);
    }
  }
  p {
    ${Body3};
    color: var(--body);
    letter-spacing: 0.02em;
    margin: 20px 0 0;
    @media only screen and (max-width: 449px) {
      ${MbBody2}
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 20px;

    li {
      ${Body3};
      color: var(--body);
      position: relative;
      padding-left: 28px;

      ::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background-image: url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="20" height="20" rx="10" fill="%2309AA6C"/%3E%3Cg clip-path="url(%23clip0_18360_106181)"%3E%3Cpath d="M5.95312 10.2407L8.18501 12.4726L13.8662 7.19727" stroke="%23E3FFEE" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id="clip0_18360_106181"%3E%3Crect width="9.33333" height="9.33333" fill="white" transform="translate(5.33594 5.33398)"/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E');
        background-size: contain;
        background-repeat: no-repeat;
        left: 0;
        top: 3px;
      }
      @media only screen and (max-width: 449px) {
        ${MbBody2};
      }
    }
  }
`;
const ListSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 20px;
`;
const ListItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  p {
    margin: 0;
    ${Body3};
    color: var(--body);
  }
`;
const BtnWrap = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 32px;
  @media only screen and (max-width: 449px) {
    gap: 12px;
    flex-wrap: wrap;
  }
`;

const ImageView = styled.div`
  position: relative;
  background-color: var(--white);
  padding-bottom: 174px;
  z-index: 2;
  ${(props) =>
    props.emptyMobileImage &&
    css`
      padding-bottom: 0;
    `}
  @media only screen and (max-width: 449px) {
    display: none;
  }
`;
const MobileImg = styled.div`
  display: inline-flex;
  position: absolute;
  left: 0;
  top: 152px;
  left: -103px;
  border-radius: 21.0831px;
  background: transparent;
  height: -webkit-fill-available;
  img {
    box-shadow: 0px 15px 64px var(--black-shadow-15), 0px 0px 15.6171px var(--black-shadow-8),
      inset 0px 0px 6.24685px var(--black-shadow-16);
    border-radius: 21px;
  }
  @media only screen and (max-width: 991px) {
    left: 0;
  }
`;
const Mobilenew = styled.div`
  display: none;
  @media only screen and (max-width: 749px) {
    display: inline-flex;
    position: absolute;
    left: 0;
    top: 80px;
    left: 0px;
    border-radius: 21.0831px;
    background: transparent;
    height: -webkit-fill-available;
    img {
      box-shadow: 0px 15px 64px var(--black-shadow-15), 0px 0px 15.6171px var(--black-shadow-8),
        inset 0px 0px 6.24685px var(--black-shadow-16);
      border-radius: 21px;
    }
  }
`;
const MobileView = styled.div`
  display: none;
  @media only screen and (max-width: 449px) {
    display: block;
    position: relative;
    background-color: var(--white);
    padding-bottom: 90px;
    z-index: 2;
    ${(props) =>
      props.emptyMobileImage &&
      css`
        padding-bottom: 0;
      `}
  }
`;
export {
  HeroSection,
  SolutionWrap,
  LeftWrap,
  RightWrap,
  TextSection,
  BtnWrap,
  ImageView,
  MobileImg,
  MobileView,
  Mobilenew,
  PoweredBySection,
  ListSection,
  ListItem,
  ImageSection,
  Card,
  TopDiv,
  BottomDiv,
  ButtonGroup
};
