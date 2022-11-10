import styled, { css } from "styled-components";
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
  TableText,
} from "./styles";
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
  span{
    margin:0;
    color: ${({ theme }) => theme.colors.primary};
    ${Heading2}
  }
  p {
    ${Body2};
    color: ${({ theme }) => theme.colors.body};
    letter-spacing: 0.02em;
    margin: 20px 0 32px 0;
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
`;
const YearlyButton = styled.div`
  background-color: ${({ theme }) => theme.colors.greenlight};
  padding: 7px 20px;
  border-radius: 4px;
  a {
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: 0.01em;
    ${Label};
  }
`;
const MonthlyButton = styled.div`
  padding: 7px 20px;
  border-radius: 4px;
  a {
    color: ${({ theme }) => theme.colors.lightgray};
    ${Label};
    letter-spacing: 0.01em;
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
`;

const PriceMenuLeft = styled.div`
  max-width: 382px;
  width: 100%;
`;
const RightBorder = styled.div`
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  width: 29px;

  display: block;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  margin-left: -29px;
`;
const LeftBorder = styled.div`
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
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
    max-width: 114px;
    width: 100%;
  }
`;
const PricePlan = styled.ul`
  padding-top: 32px;
  max-width:285px;
  width: 100%;
  h4 {
    color: ${({ theme }) => theme.colors.title};
    ${Body2};
    margin: 0 0 20px 0;
    letter-spacing: 0.02em;
  }
`;
const PricePlanWrap = styled.li`
  display: flex;
  gap: 14px;
  margin: 12px 0 0 0;
  align-items: flex-start;
  p {
    color: ${({ theme }) => theme.colors.midiumgray};
    letter-spacing: 0.02em;
    ${Body4};
    margin: 0;
max-width: 249px;
width: 100%;
  }
`;
const PlanPlanSub = styled.div``;
const PlanButton = styled.div`
  border: 1px solid #000000;
  border-radius: 48px;
  padding: 11px 0;
  max-width: 322px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  a {
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: 0.02em;
    ${ButtonText};
  }
`;
const PriceTable = styled.div`
  padding: 100px 0;
  table {
    width: 100%;
    border-spacing: 0;
    .tableBorder {
      border: none;
      background-color: transparent;
      width: 624px;
    }
    .tablecolor {
      background-color: ${({ theme }) => theme.colors.greenlight};
    }
    .tablepadding{
        padding: 12px 20px;
    }
    .tabletext {
      ${TableText}
      color: ${({ theme }) => theme.colors.greendark};
      
    }
   
    .subtext{
        ${FooterText};
      color: ${({ theme }) => theme.colors.darkgray};
    }
    th {
      ${Body3};
      border-radius: 3px 0px 0px 0px;
      background-color: ${({ theme }) => theme.colors.greendark};
      letter-spacing: 0.02em;
      color: ${({ theme }) => theme.colors.greenlight};
      padding: 12px 20px;
      text-align: left;
      width: 200px;
      border-right: 1px solid #E3FFEE;
    }
    td {
      ${Body3}
      padding: 16px 20px;
      color: ${({ theme }) => theme.colors.title};
      border: 1px solid #00160e;
      vertical-align: top;
      letter-spacing: 0.02em;

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
        margin: 4px 0 0 0;
        ${Body5};
        letter-spacing: 0.02em;
      }
      h4{
        ${Body4};
        color: ${({ theme }) => theme.colors.title};
        margin: 0;
      }
      .spanpadding{
        padding-top:12px;
      }
      h3{
        color: ${({ theme }) => theme.colors.greendark};
        ${TableText}
        margin: 0 0 4px 0;
      }
      .imagretext{
        color: ${({ theme }) => theme.colors.greenmiddark};
        margin: 0;
      }
    }
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
  margin-bottom: 120px;
`;
const PriceImageLeft = styled.div`
  padding: 40px;
  max-width: 820px;

  width: 100%;
  h3 {
    margin: 40px 0 0 0;
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
  }
  span{
    ${Heading3};
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    margin: 16px 0 28px 0;
    color: ${({ theme }) => theme.colors.body};
    letter-spacing: 0.02em;
    ${Body3};
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
};
