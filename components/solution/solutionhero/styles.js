import styled, { css } from 'styled-components';
import { Body2, Heading2, MbBody2, MobileH2 } from '../../../styles/styles';

const HeroSection = styled.div`
  padding: 180px 0 0 0;
  @media only screen and (max-width: 749px) {
    padding-top: 148px;
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
    border: 1px solid #00160e;
    padding: 28px 28px 40px;
    @media only screen and (max-width: 768px) {
      padding: 18px 18px 30px;
    }
  }
  .message-card {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.greenlight};
  }
`;
const LeftWrap = styled.div``;
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
    text-align: right;
  }
`;
const TextSection = styled.div`
  h1 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    ${Body2};
    color: ${({ theme }) => theme.colors.body};
    letter-spacing: 0.02em;
    margin: 20px 0 32px;
  }
  @media only screen and (max-width: 749px) {
    h1 {
      ${MobileH2};
    }
    p{
      ${MbBody2}
    }
  }
`;
const BtnWrap = styled.div`
  display: flex;
  gap: 20px;
`;

const ImageView = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  padding-bottom: 174px;
  z-index: 2;
  @media only screen and (max-width: 991px) {
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
  img {
    box-shadow: 0px 15px 64px rgba(0, 0, 0, 0.15), 0px 0px 15.6171px rgba(0, 0, 0, 0.08),
      inset 0px 0px 6.24685px rgba(0, 0, 0, 0.16);
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
    img {
      box-shadow: 0px 15px 64px rgba(0, 0, 0, 0.15), 0px 0px 15.6171px rgba(0, 0, 0, 0.08),
        inset 0px 0px 6.24685px rgba(0, 0, 0, 0.16);
      border-radius: 21px;
    }
  }
`;
const MobileView = styled.div`
  display: none;
  @media only screen and (max-width: 749px) {
    display: block;
    position: relative;
    background-color: ${({ theme }) => theme.colors.whiteColor};
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
