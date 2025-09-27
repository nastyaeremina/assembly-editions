import styled, { css } from 'styled-components';
import { Body3, Heading2, MbBody2 } from '../../../styles/styles';
import { body_regular, body_semibold, button_regular, h1_semibold, h4_semibold } from '../../../styles/typography';

const HeroSection = styled.div`
  padding: 180px 0 100px 0;
  &.details-hero {
    padding: 0 0 var(--space-24);
    @media only screen and (max-width: 991px) {
      padding: 0 0 var(--space-20);
    }
    @media only screen and (max-width: 449px) {
      padding: 0 0 var(--space-24);
    }
  }
  ${(props) =>
    props.isStandardPage &&
    css`
      padding: 0 0 var(--space-100);
      @media only screen and (max-width: 768px) {
        padding: 0 0 var(--space-80);
      }
    `}
  @media only screen and (max-width: 749px) {
    padding-top: 116px;
    padding-bottom: var();
    ${(props) =>
      props.isStandardPage &&
      css`
        padding: 0 0 var(--space-24);
      `};
  }
`;
const SolutionWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 163px;
  &.details-hero {
    gap: var(--space-64);
    align-items: center;
    width: 100%;
    @media only screen and (max-width: 991px) {
      align-items: flex-start;
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
  min-width: 411px;

  .graph-img {
    margin-left: var(--space-13);
  }
  @media only screen and (max-width: 991px) {
    margin: 0 auto;
    .graph-img {
      margin-top: 42px;
    }
  }
  @media only screen and (max-width: 449px) {
    min-width: unset;
    margin: 0;
    .graph-img {
      margin-top: 56px;
    }
  }
  @media only screen and (max-width: 374px) {
    .graph-img {
      margin-left: 0;
    }
  }
`;

const Card = styled.div`
  width: 216px;
  border: 1px solid var(--border-default);
  background-color: var(--off-white-100);
  border-radius: var(--radius-8);
  position: absolute;
  top: -42px;
  left: 105px;
  overflow: hidden;
  box-shadow: 0px 2px 16px 0px #00000014;

  @media only screen and (max-width: 991px) {
    top: 0;
  }
  @media only screen and (max-width: 475px) {
    left: 60px;
  }
  @media only screen and (max-width: 374px) {
    width: 200px;
  }

  &.second-card {
    left: 195px;
    top: 113px;
    @media only screen and (max-width: 991px) {
      top: 155px;
    }
    @media only screen and (max-width: 475px) {
      left: 127px;
      top: 152px;
    }
    @media only screen and (max-width: 374px) {
      left: 116px;
    }
  }
`;

const TopDiv = styled.div`
  padding: var(--space-12);
  display: flex;
  align-items: center;
  gap: var(--space-12);
  img {
    width: 32px;
    height: 32px;
    border-radius: var(--radius-4);
  }
  h5 {
    ${body_semibold};
    color: var(--title);
    margin: 0;
  }
`;

const BottomDiv = styled.div`
  padding: var(--space-8) var(--space-12);
  border-top: 1px solid var(--border-default);

  h4 {
    ${h4_semibold};
    margin: 0;
    color: var(--title);
  }
  p {
    margin: 0;
    ${button_regular};
    color: var(--text-secondary);
  }
`;

const LeftWrap = styled.div`
  margin: 0 auto;
  max-width: 808px;
  .button-group {
    margin-top: 32px;
  }
  &.details-hero {
    max-width: 749px;
    width: 100%;
    margin: 0;
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
  gap: var(--space-8);
  padding-bottom: var(--space-24);
  flex-wrap: wrap;
  h6 {
    margin: 0;
    ${body_regular};
    color: var(--title);
    padding-top: var(--space-2);
  }
  h5 {
    margin: 0 !important;
    ${body_regular};
    color: var(--text-secondary);
    padding-top: var(--space-2);
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
      height: 100%;
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
    h1 {
      ${h1_semibold};
      color: var(--title);
      margin: 0;
      margin-bottom: var(--space-12);
    }
    p {
      ${body_regular}
      color: var(--title);
      margin: 0;
    }
  }
  @media only screen and (max-width: 449px) {
    .button-group {
      margin-top: 24px;
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
    gap: var(--space-16);
    margin-top: var(--space-24);

    li {
      ${body_regular};
      color: var(--title);
      position: relative;
      padding-left: var(--space-24);

      @media only screen and (max-width: 449px) {
        padding-left: var(--space-22);
      }
      ::before {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        background-image: url('data:image/svg+xml,%3Csvg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cg clip-path="url(%23clip0_6892_156155)"%3E%3Cpath d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z" fill="%23101010"/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id="clip0_6892_156155"%3E%3Crect width="16" height="16" fill="white"/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E');
        background-size: contain;
        background-repeat: no-repeat;
        left: 0;
        top: 5px;
        @media only screen and (max-width: 449px) {
          top: 4px;
          width: 14px;
          height: 14px;
        }
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

const ImageView = styled.div`
  position: relative;
  background-color: var(--white);
  z-index: 2;
  display: flex;
  img {
    object-fit: cover;
    border-radius: 30px;
  }
  ${(props) =>
    props.emptyMobileImage &&
    css`
      padding-bottom: 0;
      margin-left: 0;
    `}
  @media only screen and (max-width: 991px) {
    margin-left: 100px;
    ${(props) =>
      props.emptyMobileImage &&
      css`
        margin-left: 0;
      `}
  }
  @media only screen and (max-width: 449px) {
    display: none;
  }
`;
const MobileImg = styled.div`
  display: inline-flex;
  position: absolute;
  left: 0;
  bottom: 25px;
  left: -100px;
  background: transparent;
  img {
    box-shadow: 0px 2px 8px 0px var(--black-shadow-8);
    border-radius: 12px;
    height: auto;
    max-height: 583px;
    max-width: 220px;
    width: auto;
  }
`;

const MobileView = styled.div`
  display: none;
  @media only screen and (max-width: 449px) {
    display: block;
    position: relative;
    background-color: var(--white);
    z-index: 2;
    display: flex;
    margin-left: 70px;
    img {
      object-fit: cover;
      border-radius: 16px;
    }
    ${(props) =>
      props.emptyMobileImage &&
      css`
        padding-bottom: 0;
        margin-left: 0;
      `}
  }
`;

const Mobilenew = styled.div`
  display: none;
  @media only screen and (max-width: 749px) {
    display: inline-flex;
    position: absolute;
    left: 0;
    bottom: 25px;
    left: -70px;
    background: transparent;
    img {
      box-shadow: 0px 2px 8px 0px var(--black-shadow-8);
      border-radius: 12px;
      height: auto;
      max-height: 304px;
      max-width: 190px;
      width: auto;
      @media only screen and (max-width: 385px) {
        max-height: 260px;
      }
    }
  }
`;

const ButtonGroups = styled.div`
  display: flex;
  gap: var(--space-8);
  margin-top: var(--space-32);
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-24);
  margin-top: var(--space-40);
  overflow: hidden;
  .customer-image-logo {
    width: auto;
  }
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media only screen and (max-width: 449px) {
    margin-top: var(--space-24);
    gap: var(--space-12);
  }
`;

export {
  HeroSection,
  SolutionWrap,
  LeftWrap,
  RightWrap,
  TextSection,
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
  ButtonGroup,
  ButtonGroups,
  LogoSection
};
