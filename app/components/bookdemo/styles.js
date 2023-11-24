import styled, { css } from 'styled-components';
import {
  Body3,
  Body4,
  Body5,
  Body6,
  CardTxt,
  HeaderFont,
  Heading3,
  Heading4,
  LinkTxt,
  MbBody3,
  MbBody4,
  MobileH4
} from '../../styles/styles';
import { bgcolor, black, body, greenlight, primary, subtitle, title, whiteColor } from '../../styles/color';
const MainSection = styled.div`
  max-width: 50%;
  width: 100%;
  padding: 40px 80px;
  background-color: ${bgcolor};
  @media only screen and (max-width: 991px) {
    height: 100%;
    margin-bottom: 50px;
    max-width: 100%;
    padding: 28px 160px 22px;
  }
  @media only screen and (max-width: 600px) {
    max-width: 100%;
    padding: 28px 24px 22px;
  }
`;
const LastText = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${HeaderFont};
  margin-top: 20px;
  @media only screen and (max-width: 991px) {
    margin-top: 16px;
  }
  .learn-link,
  .learn-link svg path {
    transition: all 300ms ease;
  }
  a {
    ${HeaderFont};
    margin: 0 0 0 5px;
    color: ${primary};
    cursor: pointer;
    transition: none;
    display: flex;
    align-items: center;
    :hover .HoverArrow__linePath {
      opacity: 1;
      fill: none;
      fill: black;
      @media only screen and (max-width: 749px) {
        opacity: 0;
      }
    }
    :hover .HoverArrow__tipPath {
      transform: translateX(2px);
      @media only screen and (max-width: 749px) {
        transform: none;
      }
    }
  }

  .learn-link:hover {
    color: black;
    @media only screen and (max-width: 749px) {
      color: green;
    }
  }
  .learn-link svg path {
    transition: all 300ms ease;
  }
  .HoverArrow__linePath {
    opacity: 0;
    fill: none;
  }
  .HoverArrow {
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
    position: relative;
    /* top: 1px; */
    margin-left: var(--arrowSpacing);
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
    margin-left: 4px;
    --arrowSpacing: 5px;
    --arrowHoverTransition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
    --arrowHoverOffset: translateX(3px);
    @media only screen and (max-width: 749px) {
      display: none;
    }
  }
  .mobilearrow {
    display: none;
    @media only screen and (max-width: 749px) {
      position: relative;
      display: inline-block;
      margin-left: 5px;
    }
  }
`;
const FormSection = styled.form`
  max-width: 370px;
  margin: 0 auto;
  .btnposition {
    width: 100%;
    text-align: center;
    a {
      width: 100%;
      text-align: center;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
const FormTxt = styled.div`
  padding: 30px 0;
  h4 {
    ${Heading4};
    color: ${title};
    margin: 0 0 12px 0;
  }
  p {
    ${Body5};
    color: ${body};
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    padding: 48px 0 28px;
    h4 {
      ${MobileH4};
      margin-bottom: 8px;
    }
    p {
      ${MbBody4};
    }
  }
`;
const FormDetail = styled.div`
  padding-bottom: 30px;
  ${(props) =>
    props.isWeeklyform &&
    css`
      padding-bottom: 20px;
    `}
  label {
    display: block;
    ${CardTxt};
    color: ${subtitle};
    margin: 0 0 5px 0;
  }
  span {
    color: ${primary};
  }
  select {
    margin-bottom: 20px;
    padding: 7px 0;
    border: 1px solid #dfe1eb;
    border-radius: 4px;
    background-color: #fff;
    background-image: none;
    background-position: 0 0;
    background-size: auto;
    background-repeat: repeat;
    font-size: 15px;
    line-height: 16px;
    outline: 0;
    appearance: none;
    width: 100%;
    :hover {
      border-color: ${primary};
    }
    :focus {
      border-color: ${primary};
    }
  }
  .wselect {
    display: block;
    width: 100%;
    height: 32px;
    padding: 7px 12px;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    color: ${title};
    font-weight: 400px;
    /* vertical-align: middle; */
    background-color: #fff;
    border: 1px solid #ccc;
  }
  .sm {
    border-radius: 4px;
    font-size: 12px;
    line-height: 14px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 32px;
    /* height: 32px; */
    padding: 7px 12px;
    outline: 0;
    border: 1px solid #dfe1eb;
    overflow: hidden;
    color: ${title};
    :hover {
      border-color: ${primary};
    }
    :focus {
      border-color: ${primary};
    }
  }
  label {
    font-size: 15px;
    margin-bottom: 2px;
    font-weight: 500;
    line-height: 24px;
  }

  @media only screen and (max-width: 768px) {
    padding-bottom: 28px;
    ${(props) =>
      props.isWeeklyform &&
      css`
        padding-bottom: 8px;
      `}
    label {
      font-size: 12px;
      margin-bottom: 6px;
      font-weight: 500;
      line-height: 16px;
    }
  }
`;

const Input = styled.input`
  padding: 7px 12px;
  background-color: ${whiteColor};
  border: 1px solid #ccccd0;
  border-radius: 4px;
  outline: 0;
  height: 32px;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 14px;
  width: 100%;
  color: ${title};
  :hover {
    border-color: ${primary};
  }
  :focus {
    border-color: ${primary};
  }
`;
const ValidationForm = styled.div`
  display: flex;
  margin-top: -18px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #ff5644;
  svg {
    display: inline-flex;
    margin-right: 4px;
    justify-content: center;
  }
  ${(props) =>
    props.isLast &&
    css`
      margin-top: 2px;
      margin-bottom: 0px;
    `}
`;
const NameBlock = styled.div`
  display: flex;
  gap: 20px;
  .firstlable {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;
const NameInfo = styled.div`
  .inputtext {
    margin-bottom: 20px;
    padding: 8px 12px;
    border-radius: 4px;
  }
`;
const SliderSection = styled.div`
  position: relative;
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .ImageSection {
    max-width: 900px;
    width: 100%;
    /* background-image: url("/images/demoimage.png");
    height: 900px;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 120px 0 60px; */
  }
  .swiper {
    width: 100%;
    height: 100vh;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    width: 72px;
    height: 72px;
    text-align: center;
    color: ${body};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    background: transparent;
    border: 1.08px solid #4c4c4c;
    animation: spin 1.5s infinite linear;
    margin: 0;
    span {
      ${Body6};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: transparent;
    border: 1px solid #09aa6c;
    border-radius: 68.4px;
    span {
      ${Body6};
      color: ${whiteColor};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .swiper-pagination {
    display: flex;
    bottom: 60px;
    justify-content: end;
    gap: 16px;
    left: -120px;
    bottom: 60px;
    margin: 0 !important;
  }
`;
const Swiper = styled.div`
  width: 100%;
  height: 100%;
`;

const SwiperSlide = styled.div`
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;
const ImageText = styled.div`
  position: absolute;
  max-width: 660px;
  width: 500%;
  text-align: left;
  bottom: 172px;
  h3 {
    ${Heading3};
    color: ${whiteColor};
    margin: 0 0 24px 0;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ffffff;
  padding-top: 24px;
  p {
    ${Body4};
    color: ${whiteColor};
    margin: 0;
  }
`;
const ImgWrap = styled.div`
  display: inline-flex;
  max-height: 24px;
  @media only screen and (max-width: 768px) {
    .desktop {
      display: none;
    }
  }
  .mbicon {
    display: none;
    @media only screen and (max-width: 768px) {
      display: block;
    }
  }
`;
const HelpLink = styled.div`
  display: flex;
  align-items: center;
`;
const SubmitSection = styled.div`
  max-width: 504px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ThanksWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardView = styled.div`
  background-color: ${greenlight};
  padding: 50px 0;
  border-radius: 10px;
  width: 100%;
  @media only screen and (max-width: 749px) {
    padding: 40px 0;
  }
`;
const CardList = styled.div`
  text-align: center;
`;
const ImgLine = styled.div``;
const TextWrap = styled.div`
  padding: 40px 80px;
  h1,
  h2,
  h3 {
    ${Heading3};
    margin: 0 0 14px;
    color: ${black};
  }
  p {
    ${Body3};
    max-width: 335px;
    margin: 16px auto 0;
    display: inline-block;
    color: ${title};
    &:first-child {
      margin: 0px auto;
    }
  }
  a {
    display: initial;
    color: ${title};
    ${Body3};
    text-decoration: underline;
  }
  @media only screen and (max-width: 749px) {
    padding: 30px 40px;
    h1,
    h2,
    h3 {
      margin: 0 0 20px;
    }
    p {
      ${MbBody3};
      max-width: 100%;
      margin: 10px auto 0;
      display: inline-block;
      color: ${title};
    }
    a {
      ${MbBody3};
      display: inline-block;
    }
  }
`;
const ContactText = styled.span`
  display: block;
  ${Body3};
  color: ${title};
  @media only screen and (max-width: 749px) {
    ${MbBody3};
  }
`;
export {
  MainSection,
  FormSection,
  FormTxt,
  FormDetail,
  Input,
  ValidationForm,
  NameBlock,
  NameInfo,
  LastText,
  SliderSection,
  Swiper,
  SwiperSlide,
  ImageText,
  TextWrapper,
  ImgWrap,
  ThanksWrap,
  HelpLink,
  SubmitSection,
  CardView,
  CardList,
  ImgLine,
  TextWrap,
  ContactText
};
