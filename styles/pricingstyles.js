import styled, { css, keyframes } from 'styled-components';
import {
  Body2,
  Body3,
  Body4,
  Body5,
  ButtonText,
  FooterText,
  Heading2,
  Heading3,
  Heading4,
  Label,
  MbBody3,
  MobileH1,
  MobileH2,
  MobileH4,
  TableText
} from './styles';
const HeroSection = styled.div`
  padding: 180px 0 100px 0;
  text-align: center;
  margin: 0 auto;
  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 40px 0;
    max-width: 780px;
    width: 100%;
    margin: 0 auto;
  }
  span {
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    ${Heading2}
  }
  p {
    ${Body2};
    color: ${({ theme }) => theme.colors.body};
    letter-spacing: 0.02em;
    margin: 20px 0 32px 0;
  }
  @media only screen and (max-width: 991px) {
    padding: 140px 0px 80px;
  }
  @media only screen and (max-width: 749px) {
    padding: 116px 0px 80px;
    h2 {
      ${MobileH2};
      color: ${({ theme }) => theme.colors.title};
      margin: 0 0 40px 0;
      max-width: 780px;
      width: 100%;
      margin: 0 auto;
    }
    span {
      margin: 0;
      color: ${({ theme }) => theme.colors.primary};
      ${MobileH2}
    }
    p {
      font-size: 17px;
      line-height: 21px;
      color: ${({ theme }) => theme.colors.body};
      letter-spacing: 0.02em;
      margin: 20px 0 32px 0;
    }
  }
`;
const HeroHeading = styled.div`
  text-align: center;
`;
const PricingSection = styled.div``;
const PriceMenu = styled.div``;
const PriceButton = styled.div`
  display: flex;
  padding-bottom: 32px;
  @media only screen and (max-width: 749px) {
    padding-bottom: 28px;
  }
`;
const YearlyButton = styled.div`
  padding: 7px 20px;
  border-radius: 4px;
  button {
    color: ${({ theme }) => theme.colors.lightgray};
    letter-spacing: 0.01em;
    ${Label};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.greenlight};
    button {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
const MonthlyButton = styled.div`
  padding: 7px 20px;
  border-radius: 4px;
  button {
    color: ${({ theme }) => theme.colors.lightgray};
    ${Label};
    letter-spacing: 0.01em;
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.greenlight};
    button {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
const LeftTopBorder = styled.div`
  border-top: 1px solid black;
  border-left: 1px solid black;
  width: 6px;
  margin-right: -6px;
  display: block;
  border-top-left-radius: 4px;
  height: 6px;
`;
const RightTopBorder = styled.div`
  border-top: 1px solid black;
  border-right: 1px solid black;
  width: 6px;
  margin-left: -6px;
  display: block;
  border-top-right-radius: 4px;
  height: 6px;
`;
const LeftbottomBorder = styled.div`
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  width: 6px;
  margin-left: -6px;
  display: block;
  border-top-right-radius: 4px;
  height: 6px;
`;
const WrapSlide = styled.div`
  display: -webkit-inline-box;
  align-items: stretch;
  height: 100%;
`;
const RightBottomBorder = styled.div`
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  width: 6px;
  margin-left: -6px;
  display: block;
  border-top-right-radius: 4px;
  height: 6px;
`;
const PricingMenu = styled.div``;
const PriceOption = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  padding-bottom: 40px;
  @media only screen and (max-width: 991px) {
    gap: 20px;
  }
  @media only screen and (max-width: 749px) {
    flex-wrap: wrap;
    gap: 40px;
    padding-bottom: 0;
    justify-content: center;
  }
`;

const PriceMenuLeft = styled.div`
  max-width: 382px;
  width: 100%;
`;
const RightBorder = styled.div`
  border-top: 1px solid #003f27;
  border-right: 1px solid #003f27;
  border-bottom: 1px solid #003f27;
  width: 29px;

  display: block;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  margin-left: -29px;
`;
const LeftBorder = styled.div`
  border-top: 1px solid #003f27;
  border-left: 1px solid #003f27;
  border-bottom: 1px solid #003f27;
  width: 29px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  display: block;
  margin-right: -29px;
`;
const PriceLeft = styled.div`
  padding: 40px 30px;
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 12px 0;
  }
  p {
    ${Body4};
    color: ${({ theme }) => theme.colors.bodycolor};
    letter-spacing: 0.02em;
    margin: 0 0 28px 0;
  }
  @media only screen and (max-width: 991px) {
    padding: 20px;
    h4 {
      font-size: 28px;
      line-height: 34px;
    }
    p {
      font-size: 16px;
      line-height: 23px;
    }
  }
  @media only screen and (max-width: 749px) {
    padding: 40px 30px;
    h4 {
      ${MobileH4};
    }
    p {
      ${MbBody3};
    }
  }
`;
const PriceWrap = styled.div`
  display: flex;
  gap: 12px;
  padding-bottom: 32px;
  border-bottom: 1px solid black;
  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
  }
  p {
    ${Body5};
    color: ${({ theme }) => theme.colors.lightgray};
    letter-spacing: 0.02em;
    margin: 0;
    /* align-self: end; */
    max-width: 115px;
    width: 100%;
  }
  @media only screen and (max-width: 991px) {
    h2 {
      font-size: 45px;
      line-height: 36px;
    }
    p {
      font-size: 12px;
      line-height: 14px;
    }
  }
  @media only screen and (max-width: 749px) {
    h2 {
      ${MobileH1};
    }
    p {
      ${Body5};
    }
  }
`;
const PricePlan = styled.ul`
  padding-top: 32px;
  max-width: 285px;
  width: 100%;
  margin: 0 auto;
  h4 {
    color: ${({ theme }) => theme.colors.title};
    ${Body2};
    margin: 0 0 20px 0;
    letter-spacing: 0.02em;
  }
  p {
    color: ${({ theme }) => theme.colors.darkgray};
  }
  @media only screen and (max-width: 991px) {
    h4 {
      font-size: 18px;
      line-height: 20px;
    }
  }
  @media only screen and (max-width: 749px) {
    h4 {
      ${Body2};
    }
  }
`;
const PricePlanWrap = styled.li`
  display: flex;
  gap: 16px;
  margin: 12px 0 0 0;
  align-items: flex-start;
  p {
    color: ${({ theme }) => theme.colors.midiumgray};
    letter-spacing: 0.02em;
    ${Body4};
    margin: 0;
    /* max-width: 249px;
    width: 100%; */
  }
  @media only screen and (max-width: 991px) {
    p {
      font-size: 16px;
      line-height: 18px;
    }
  }
  @media only screen and (max-width: 749px) {
    p {
      ${Body4};
    }
  }
`;
const PlanPlanSub = styled.div``;
const PlanButton = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  a {
    cursor: pointer;
  }
  @media only screen and (max-width: 749px) {
    display: none;
  }
`;
const FadeIN = keyframes`
 from { opacity: 0; }
      to { opacity: 1; }
`;
const PriceTable = styled.div`
  padding: 100px 0;
  display: block;
  overflow: hidden;
  transition: height 400ms ease 0s, padding 400ms ease 0s, margin 400ms ease 0s;
  animation: ${FadeIN} 1s;
  table {
    display: none;
    width: 100%;
    border-spacing: 0;
    animation: ${FadeIN} 1s;
    transition: height 400ms ease 0s, padding 400ms ease 0s, margin 400ms ease 0s;
    border-collapse: separate;
    .tableBorder {
      /* border: none; */
      background-color: #fff;
      /* width: 624px; */
    }
    .bordercolor {
      /* background-color: ${({ theme }) => theme.colors.greendark}; */
      td {
        color: ${({ theme }) => theme.colors.greenlight};
        border-right-color: ${({ theme }) => theme.colors.greenlight};
      }
    }
    .radius {
      border-radius: 4px 0px 0px 0px;
    }
    .rightradius {
      border-top-right-radius: 4px;
      border-right: none;
    }
    .tablecolor {
      background-color: ${({ theme }) => theme.colors.greenlight};
    }
    .tablepadding {
      padding: 12px 20px;
    }
    .leftradius {
      border-radius: 4px 0px 0px 0px;
    }
    .tabletext {
      ${TableText};
      color: ${({ theme }) => theme.colors.greendark};
    }
    .subtext {
      ${FooterText};
      color: ${({ theme }) => theme.colors.darkgray};
    }
    th {
      ${Body3};
      background-color: ${({ theme }) => theme.colors.greendark};
      color: ${({ theme }) => theme.colors.greenlight};
      letter-spacing: 0.02em;
      padding: 12px 20px;
      text-align: left;
      width: 200px;
      border-right: 1px solid #e3ffee;
    }
    td {
      ${Body3};
      color: ${({ theme }) => theme.colors.title};
      padding: 16px 20px;
      border: 1px solid #00160e;
      vertical-align: top;
      letter-spacing: 0.02em;
      border-style: none solid solid none;
      span {
        ${Body5};
        color: ${({ theme }) => theme.colors.title};
        display: block;
        letter-spacing: 0.02em;
      }
      .spantext {
        ${FooterText};
        color: ${({ theme }) => theme.colors.darkgray};
      }
      p {
        color: ${({ theme }) => theme.colors.body};
        ${Body5};
        margin: 4px 0 0 0;
        letter-spacing: 0.02em;
      }
      h4 {
        margin: 0;
        ${Body4};
        color: ${({ theme }) => theme.colors.title};
      }
      .spanpadding {
        padding-top: 12px;
      }
      h3 {
        margin: 0 0 4px 0;
        color: ${({ theme }) => theme.colors.greendark};
        ${TableText};
      }
      .imagretext {
        color: ${({ theme }) => theme.colors.greenmiddark};
        margin: 0;
      }
    }
    tr {
      &:nth-child(1) {
        td {
          &:nth-child(1) {
            border-style: none;
          }
          &:nth-child(2) {
            border-style: solid;
          }
        }
      }
      &:nth-child(2) {
        td {
          &:nth-child(1) {
            border-top-left-radius: 4px;
            border-style: solid;
          }
        }
      }
      td {
        &:nth-child(1) {
          border-style: none solid solid solid;
        }
      }
    }
  }
  table.active {
    display: block;
  }
  @media only screen and (max-width: 991px) {
    padding: 50px 0;
  }
  @media only screen and (max-width: 749px) {
    display: none;
  }
`;
const LearnLink = styled.div`
  padding-top: 8px;
  a {
    display: flex;
    align-items: center;
    ${FooterText};
    color: ${({ theme }) => theme.colors.title};
    img {
      margin-left: 6px;
    }
  }
`;
const ImgMargin = styled.div`
  margin-left: 6px;
`;
const TextUnderline = styled.div`
  padding-bottom: 4px;
  border-bottom: 1px solid #00160e;
  display: inline-block;
`;
const PriceTxt = styled.p`
  margin-top: 6px;
  p {
    ${FooterText};
    color: ${({ theme }) => theme.colors.white};
  }
  span {
    ${FooterText};
    color: ${({ theme }) => theme.colors.mediumgray};
  }
`;
const PricePadding = styled.div`
  padding-top: 12px;
`;
const ImageWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const PriceImage = styled.div`
  display: flex;
  border: 1px solid #000000;
  border-radius: 4px;
  @media only screen and (max-width: 749px) {
    display: none;
  }
`;
const PriceImageLeft = styled.div`
  padding: 40px;
  max-width: 820px;
  width: 100%;
  border-right: 1px solid #000000;
  img {
    display: block;
  }
  h3 {
    margin: 40px 0 0 0;
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
  }
  span {
    ${Heading3};
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    margin: 16px 0 28px 0;
    color: ${({ theme }) => theme.colors.body};
    letter-spacing: 0.02em;
    ${Body3};
  }
  @media only screen and (max-width: 991px) {
    border-right: none;
  }
`;
const Pricefaq = styled.div`
  h3 {
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
  }
  margin: 0 0 60px 0;
`;
const PriceText = styled.div`
  max-width: 115px;
  width: 100%;
`;
const BulletImage = styled.div`
  padding: 5px 10px;
  margin-top: 7px;
  background-color: ${({ theme }) => theme.colors.greenmidlight};
  @media only screen and (max-width: 749px) {
    padding: 4px 8px;
  }
`;
const PricePlusImage = styled.div`
  img {
    height: 100%;
  }
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;
export {
  HeroHeading,
  HeroSection,
  PricingSection,
  PriceMenu,
  PriceButton,
  YearlyButton,
  MonthlyButton,
  LeftTopBorder,
  RightTopBorder,
  WrapSlide,
  LeftbottomBorder,
  RightBottomBorder,
  PricingMenu,
  PriceOption,
  PriceMenuLeft,
  LeftBorder,
  RightBorder,
  PriceLeft,
  PriceWrap,
  PricePlan,
  PricePlanWrap,
  PlanPlanSub,
  PlanButton,
  PriceTable,
  LearnLink,
  ImgMargin,
  TextUnderline,
  PriceTxt,
  PricePadding,
  ImageWrap,
  PriceImage,
  PriceImageLeft,
  Pricefaq,
  PriceText,
  BulletImage,
  PricePlusImage
};
