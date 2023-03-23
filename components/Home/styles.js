import styled from 'styled-components';
import { Body1, Body2, Body5, FooterText, Heading2, Heading3, MbBody1, MobileH2 } from '../../styles/styles';

const HeroSection = styled.div`
  width: 100%;
  padding: 224px 0 0px 0;
  /* margin-bottom: 50px; */
  text-align: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.greendark};
  @media only screen and (max-width: 749px) {
    padding: 148px 0 0px 0;
  }
  @media only screen and (max-width: 768px) {
    /* margin-bottom: 40px; */
  }
`;

const HeroHeading = styled.h1`
  ${Heading2};
  color: ${({ theme }) => theme.colors.greenlight};
  margin: 0 0 20px 0;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media only screen and (max-width: 991px) {
    text-align: center;
    ${Heading2}
  }
  @media only screen and (max-width: 749px) {
    margin-bottom: 20px;
    ${MobileH2}
    color: ${({ theme }) => theme.colors.greenlight};
  }
`;

const Para = styled.p`
  max-width:880px;
  width:100%;
  ${Body2}
  letter-spacing: 0.02em;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.whiteColor};
  @media only screen and (max-width: 991px) {
    text-align: center;
    ${Body2}
  }
  @media only screen and (max-width: 749px) {
    ${MbBody1};
  }
`;
const ImageHover = styled.a`
  transition: 300ms all ease-in-out;
  animation: fadeIn ease 0.3s;
  -webkit-animation: fadeIn ease 0.3s;
  -moz-animation: fadeIn ease 0.3s;
  -o-animation: fadeIn ease 0.3s;
  -ms-animation: fadeIn ease 0.3s;
  display: inline-block;
  cursor: pointer;
  position: relative;
  display: flex;
  gap: 10px;
  svg {
    path {
      transition: 0.3s;
    }
  }
  :hover {
    svg {
      path {
        fill: #e3ffee;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    :hover {
      svg {
        path {
          fill: #e3ffee;
        }
      }
    }
  }
  @media only screen and (max-width: 450px) {
    svg {
      width: 74px;
      height: 14px;
    }
    :hover {
      svg {
        path {
          fill: #e3ffee;
        }
      }
    }
  }
  .show {
    display: block;
    opacity: 1;
    transition: 300ms all ease-in;
    animation: fadeIn ease 0.3s;
    -webkit-animation: fadeIn ease 0.3s;
    -moz-animation: fadeIn ease 0.3s;
    -o-animation: fadeIn ease 0.3s;
    -ms-animation: fadeIn ease 3s;
  }
  :hover .show {
    opacity: 0;
  }
  :hover .hide {
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    visibility: visible;
  }
  .hide {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transition: 300ms all ease-out;
    animation: fadeIn ease 0.3s;
    -webkit-animation: fadeIn ease 0.3s;
    -moz-animation: fadeIn ease 0.3s;
    -o-animation: fadeIn ease 0.3s;
    -ms-animation: fadeIn ease 3s;
  }
`;

const ReviewLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  margin-top: 32px;
  @media only screen and (max-width: 450px) {
    gap: 30px;
  }
`;

const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  p {
    font-family: 'Bagoss';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 0 0 0 0px;
    text-align: center;
    letter-spacing: 0.02em;
    @media only screen and (max-width: 450px) {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }
  }
`;

const HeroBtnBlock = styled.div`
  margin: 32px 0 0px;
  @media only screen and (max-width: 768px) {
    margin-bottom:80px;
  }
`;

const MainImage = styled.div`
  width: 100%;
  filter: drop-shadow(0px 4.68797px 157.047px rgba(9, 170, 108, 0.55));
  .heromain-image {
    max-width:1000px;
    width: 100%;
    max-height: 415px;
    height: 100%;
    margin-bottom: -4px;
    margin-top: 50px;
    border-radius: 7px 7px 0 0;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Hero = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    display: none;
  }
  .bgleft {
    z-index: 1;
  }
  .hybridleft {
    position: absolute;
    max-width: 560px;
    width: 100%;
    max-height: 267px;
    height: 100%;
    border-radius: 7px 7px 0 0;
    margin-top: 117px;
    margin-left: 92px;
    z-index: 2;
    @media only screen and (max-width: 1024px) {
      position: absolute;
      max-width: 442px;
      width: 100%;
      max-height: 210px;
      height: 100%;
      margin-top: 96px;
      margin-left: 76px;
      z-index: 2;
    }
  }
  .bgright {
    /* position: relative; */
    z-index: 1;
  }
  .hybridright {
    position: absolute;
    max-width: 230px;
    width: 100%;
    max-height: 267px;
    height: 100%;
    border-radius: 7px 7px 0 0;
    margin-left: 890px;
    margin-top: 117px;
    z-index: 2;
    @media only screen and (max-width: 1024px) {
      position: absolute;
      max-width: 181px;
      width: 100%;
      max-height: 210px;
      height: 100%;
      margin-left: 710px;
      margin-top: 96px;
      z-index: 2;
    }
  }
`;

const HeroImage = styled.div``
const HeroLine = styled.div`
  margin-top: 150px;
  .first-line {
    position: absolute;
    left: 0;
  }
  .second-line {
    position: absolute;
    margin-top: 64px;
    margin-left: 600px;
  }
  .third-line {
    position: absolute;
    margin-top: 128px;
    margin-left: 600px;
  }
  .last-line {
    position: absolute;
    margin-top: 192px;
    right: 0;
  }
  @media only screen and (max-width: 1024px) {
    margin-top: 125px;
    .first-line {
        width:900px;
    }
    .second-line {
      position: absolute;
      margin-top: 44px;
      margin-left: 400px;
    }
    .third-line {
      position: absolute;
      margin-top: 88px;
      margin-left: 400px;
    }
    .last-line {
      position: absolute;
      margin-top: 132px;
      right: 0;
      width: 500px;
    }
  }
`;
const LeftHeading = styled.p`
  ${Body5}
  position: absolute;
  margin-top: 58px;
  margin-left: 74px;
  padding: 10px 6px;
  background-color: ${({ theme }) => theme.colors.greendark};
  color: ${({ theme }) => theme.colors.greenlight};
  border: 1px solid #e3ffee;
  border-radius: 4px 4px 0px 0px;
  border-bottom: none;
  z-index: 2;
  @media only screen and (max-width: 1024px) {
    ${FooterText}
    margin-top:40px;
    margin-left: 59px;
  }
`;

const RightHeading = styled.p`
  ${Body5}
  position: absolute;
  margin-top: 58px;
  margin-left: 903px;
  padding: 10px 6px;
  background-color: ${({ theme }) => theme.colors.greendark};
  color: ${({ theme }) => theme.colors.greenlight};
  border: 1px solid #e3ffee;
  border-radius: 4px 4px 0px 0px;
  border-bottom: none;
  z-index: 2;
  @media only screen and (max-width: 1024px) {
    ${FooterText}
    margin-top: 40px;
    margin-left: 702px;
  }
`;
export {
  HeroSection,
  HeroHeading,
  Para,
  ImageHover,
  ReviewLogo,
  RightWrap,
  HeroBtnBlock,
  MainImage,
  Hero,
  HeroImage,
  HeroLine,
  LeftHeading,
  RightHeading
};
