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
  MbPrimaryBtn,
  MobileH4
} from '../../styles/styles';

const MainSection = styled.div`
  max-width: 50%;
  width: 100%;
  padding: 40px 80px;
  background-color: var(--main-bg-color);
  @media only screen and (max-width: 991px) {
    height: 100%;
    max-width: 100%;
    padding: 28px 160px 22px;
  }
  @media only screen and (max-width: 600px) {
    max-width: 100%;
    padding: 28px 24px 20px;
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
    color: var(--primary);
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
  max-width: 480px;
  margin: 0 auto;
  .btnposition {
    width: 100%;
    text-align: center;
    button {
      padding: 7px;
      ${HeaderFont};
    }
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
  h2 {
    ${Heading3};
    color: var(--title);
    margin: 0;
    padding-top: 32px;
  }
  h4 {
    ${Heading4};
    color: var(--title);
    margin: 0 0 12px 0;
  }
  p {
    ${Body3};
    color: var(--body);
    margin: 0;
    padding-top: 16px;
    padding-bottom: 28px;
  }
  @media only screen and (max-width: 768px) {
    h4 {
      ${MobileH4};
      margin-bottom: 8px;
    }
    p {
      ${MbBody3};
    }
  }
`;
const FormDetail = styled.div`
  padding-bottom: 28px;
  position: relative;
  ${(props) =>
    props.isWeeklyform &&
    css`
      padding-bottom: 20px;
    `}
  label {
    display: block;
    ${MbPrimaryBtn};
    color: var(--sub-title);
    margin: 0 0 5px 0;
  }
  select {
    margin-bottom: 20px;
    padding: 7px 0;
    border: 1px solid var(--selected-border-color);
    border-radius: 4px;
    background-color: var(--white);
    background-image: none;
    background-position: 0 0;
    background-size: auto;
    background-repeat: repeat;
    ${Body5};
    outline: 0;
    appearance: none;
    width: 100%;
    position: relative;
    :hover {
      border-color: var(--primary);
    }
    :focus {
      border-color: var(--primary);
    }
  }
  .wselect {
    display: block;
    width: 100%;
    height: 32px;
    padding: 7px 12px;
    ${Body5};
    color: var(--title);
    font-weight: 400px;
    /* vertical-align: middle; */
    background-color: var(--white);
    border: 1px solid var(--border-gray);
  }
  .sm {
    border-radius: 4px;
    ${Body5};
  }
  textarea {
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 32px;
    /* height: 32px; */
    padding: 7px 12px;
    outline: 0;
    border: 1px solid var(--selected-border-color);
    overflow: hidden;
    color: var(--title);
    :hover {
      border-color: var(--primary);
    }
    :focus {
      border-color: var(--primary);
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
  }
`;

const Input = styled.input`
  padding: 7px 12px;
  background-color: var(--white);
  border: 1px solid var(--border);
  border-radius: 4px;
  outline: 0;
  height: 32px;
  margin-bottom: 20px;
  ${Body5};
  width: 100%;
  color: var(--title);
  :hover {
    border-color: var(--primary);
  }
  :focus {
    border-color: var(--primary);
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
  color: var(--delete-text);
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
  gap: 16px;
  .firstlable {
    width: 100%;
  }
`;
const NameInfo = styled.div`
  .inputtext {
    margin-bottom: 20px;
    padding: 8px 12px;
    border-radius: 4px;
  }
`;

const ImgWrap = styled.div`
  display: inline-flex;
  max-height: 24px;
  img {
    height: 100%;
  }
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
  max-width: 480px;
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
  align-items: center;
`;

const CardView = styled.div`
  background-color: var(--white);
  padding: 40px 60px;
  border-radius: 4px;
  border: 1px solid var(--black);
  width: 100%;
  display: flex;
  align-items: center;
  max-height: 653px;
  height: 100%;
  .button-group {
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    a {
      width: 100%;
      justify-content: center;
      padding: 7px;
      ${HeaderFont};
    }
    @media (max-width: 768px) {
      padding-top: 20px;
    }
  }
  @media only screen and (max-width: 749px) {
    padding: 40px 20px;
  }
`;
const CardList = styled.div`
  text-align: center;
  width: 100%;
`;
const ImgLine = styled.div``;
const TextWrap = styled.div`
  h1,
  h2,
  h3 {
    ${Heading4};
    margin: 32px 0 0;
    color: var(--black);
  }
  p {
    ${Body4};
    max-width: 335px;
    margin: 12px auto 0;
    display: inline-block;
    color: var(--title);
    &:first-child {
      margin: 0px auto;
    }
  }
  a {
    display: initial;
    color: var(--title);
    ${Body4};
    text-decoration: underline;
  }
  @media only screen and (max-width: 749px) {
    h1,
    h2,
    h3 {
      margin: 20px 0 0;
    }
    p {
      ${MbBody4};
      max-width: 100%;
      margin: 12px auto 0;
      display: inline-block;
      color: var(--title);
    }
    a {
      ${MbBody4};
      display: inline-block;
    }
  }
`;

const ItemDiv = styled.div`
  position: relative;
  .icon-div {
    position: absolute;
    right: 12px;
    top: 33px;
    z-index: 1;
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
  ImgWrap,
  ThanksWrap,
  HelpLink,
  SubmitSection,
  CardView,
  CardList,
  ImgLine,
  TextWrap,
  ItemDiv
};
