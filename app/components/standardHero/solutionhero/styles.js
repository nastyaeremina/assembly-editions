import styled, { css } from 'styled-components';
import { Body2, Heading2, MbBody2, MobileH2 } from '../../../styles/styles';

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
  gap: 163px;
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
const LeftWrap = styled.div`
  margin: 0 auto;
  max-width: 808px;
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
  }
  @media only screen and (max-width: 768px) {
    text-align: right;
  }
  @media only screen and (max-width: 749px) {
    display: block;
  }
`;
const TextSection = styled.div`
  text-align: center;
  h1 {
    ${Heading2};
    color: var(--title);
    margin: 0;
    span {
      color: var(--primary);
    }
  }

  p {
    ${Body2};
    color: var(--body);
    letter-spacing: 0.02em;
    margin: 20px 0 0;
  }
  @media only screen and (max-width: 749px) {
    h1 {
      ${MobileH2};
    }
    p {
      ${MbBody2}
    }
  }
`;
const BtnWrap = styled.div`
  display: flex;
  gap: 20px;
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
  Mobilenew
};
