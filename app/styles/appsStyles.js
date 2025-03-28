import styled, { css } from 'styled-components';
import {
  Body2,
  Body4,
  Body5,
  CardTxt,
  HeaderFont,
  Heading2,
  Heading4,
  Heading5,
  LinkTxt,
  MbBody2,
  MbBody4,
  MobileH2,
  Value
} from './styles';

const HeroSection = styled.div`
  padding-top: 180px;
  @media only screen and (max-width: 991px) {
    padding-top: 180px;
  }
  @media only screen and (max-width: 749px) {
    padding-top: 150px;
  }
`;
const AppsHeroWrap = styled.div`
  text-align: center;
  h1 {
    ${Heading2};
    color: var(--title);
    margin: 0 auto;
    margin-bottom: 20px;
  }
  p {
    ${Body2};
    margin: 0 auto;
    margin-bottom: 32px;
    color: var(--body);
    letter-spacing: 0.02em;
  }
  @media only screen and (max-width: 749px) {
    h1 {
      ${MobileH2};
    }
    p {
      ${MbBody2};
    }
  }
`;
const FeatureSection = styled.div`
  padding-top: 100px;
  @media only screen and (max-width: 991px) {
    padding-top: 80px;
  }
`;
const FeatureWrap = styled.div`
  display: flex;
  gap: 36px;
  ${(props) =>
    props.isAutomation &&
    css`
      padding-bottom: 100px;
    `}
`;
const FirstImg = styled.div`
  img {
    max-width: 100%;
  }
`;
const Input = styled.input`
  ${Value};
  color: var(--title);
  letter-spacing: 0.01em;
  padding: 11px 55px 11px 55px;
  border: 1.5px solid var(--ghost-gray);
  border-radius: 48px;
  width: 306px;
  outline: 0;
  ::placeholder {
    color: var(--medium-gray);
  }
  :hover {
    border: 1.5px solid var(--border);
    box-shadow: 0px 4px 8px var(--black-shadow-7);
  }
  :active {
    border: 1.5px solid var(--title);
    box-shadow: 0px 4px 8px var(--black-shadow-7);
  }
  :focus {
    border: 1.5px solid var(--title);
    box-shadow: 0px 4px 8px var(--black-shadow-7);
  }
  @media only screen and (max-width: 449px) {
    padding: 10px 50px 10px 52px;
    width: 100%;
    ${MbBody4}
  }
`;
const Catagory = styled.ul`
  padding-top: 40px;

  h4 {
    padding-bottom: 20px;
    margin: 0;
    ${Heading5};
    color: var(--title);
    border-bottom: 1px solid var(--black);
    letter-spacing: 0.02em;
    max-width: 306px;
    width: 100%;
  }
`;
const Catagoryitem = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid var(--black);
  a {
    ${LinkTxt};
    letter-spacing: 0.02em;
    color: var(--primary);
    ${(props) =>
      props.isActive &&
      css`
        color: var(--title);
      `}
    margin: 0;
    :hover {
      color: var(--title);
    }
    :active {
      color: var(--title);
    }
  }
`;
const FeatureLeft = styled.div`
  position: relative;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;
const FeatureRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${(props) =>
    !props.isSearch &&
    css`
      justify-content: center;
    `}
  h2 {
    ${Heading4};
    color: var(--title);
    margin: 0 0 28px 0;
  }
  @media only screen and (max-width: 749px) {
    h2 {
      margin: 0 0 24px 0;
    }
  }
`;
const FeatureMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 36px;
  ${(props) =>
    props.isAutomationDirectoryCard &&
    css`
      grid-template-columns: 1fr 1fr;
    `}
  @media only screen and (max-width: 991px) {
    gap: 26px;
  }
  @media only screen and (max-width: 749px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
const CardText = styled.div`
  padding: 20px 16px 46px 16px;
  border-top: 1px solid black;
  h3 {
    ${Body4};
    color: var(--title);
    letter-spacing: 0.02em;
    margin: 0 0 8px 0;
  }
  p {
    color: var(--dark-gray);
    ${Body5};
    letter-spacing: 0.02em;
    margin: 0;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
const CardEnd = styled.div`
  background-color: var(--light-green);
  padding: 6px 16px;
  border-top: 1px solid var(--dark-purple);
  border-radius: 0 0 4px 4px;
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  p {
    ${CardTxt};
    color: var(--dark-purple);
    margin: 0;
  }
`;
const FeatureImg = styled.div`
  padding: 38px 16px;
  display: flex;
  min-height: 132px;
  max-height: 132px;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    max-width: 100%;
  }
  .logo {
    width: 236px;
    height: 56px;
  }
  @media only screen and (max-width: 749px) {
    justify-content: center;
  }
`;
const Featured = styled.div``;
const ExtensionsSection = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  p {
    ${Body5};
    color: var(--title);
    letter-spacing: 0.02em;
  }
  @media only screen and (max-width: 749px) {
    /* display: none; */
  }
`;
const ExtensionCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 36px;
  ${(props) =>
    props.isAutomationDirectoryCard &&
    css`
      grid-template-columns: 1fr 1fr;
    `}
  @media only screen and (max-width: 991px) {
    gap: 26px;
  }
  @media only screen and (max-width: 749px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
const InputWrap = styled.form`
  position: relative;
  width: 100%;
  max-width: 1272px;
  padding: 0 24px;
  margin: 0 auto;
  div {
    position: absolute;
    right: 24px;
  }
  img {
    position: absolute;
    top: 15px;
    left: 45px;
  }
  @media only screen and (max-width: 820px) {
    div {
      position: relative;
      right: 0;
      margin: 0 auto;
      margin-bottom: 30px;
    }
    input {
      width: 100%;
    }
  }
  @media only screen and (max-width: 449px) {
    img {
      top: 11px;
    }
  }
`;

const LeftWrap = styled.div`
  position: sticky;
  top: 95px;
`;
const DetailLink = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 28px;
  p {
    ${LinkTxt};
    margin: 0;
    color: var(--medium-gray);
    @media only screen and (max-width: 749px) {
      ${HeaderFont};
    }
  }
  :hover {
    p {
      color: var(--title);
    }
    svg path {
      stroke: var(--title);
    }
  }
`;
const AppsDetailMain = styled.div`
  /* padding-top: 164px;
  @media only screen and (max-width: 749px) {
    padding-top: 148px;
  } */
`;
const AppHeader3 = styled.h2`
  ${Heading4}
  margin-top: 0;
  &&::before {
    display: block;
    content: ' ';
    height: 83px;
    margin-top: -83px;
    visibility: hidden;
  }
`;

const AppSliderSection = styled.div`
  margin: 116px 0 100px;
  position: relative;
  .drop {
    background-image: url('/images/appbackground.png');
    background-size: contain;
    width: 100%;
    height: 526px;
    position: absolute;
    top: -115px;
    bottom: 0;
  }
  @media only screen and (max-width: 1024px) {
    .drop {
      background-size: cover;
      height: 526px;
      top: -115px;
      bottom: 0;
    }
  }
  @media only screen and (max-width: 449px) {
    .drop {
      background-size: cover;
      height: 426px;
      top: -100px;
      bottom: 0;
    }
  }
  @media only screen and (max-width: 449px) {
    margin: 40px 0 80px;
  }
`;

const SearchEmpty = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  @media only screen and (max-width: 449px) {
    padding-bottom: 80px;
  }
`;
export {
  HeroSection,
  FeatureSection,
  FeatureWrap,
  Input,
  Catagory,
  Catagoryitem,
  FeatureLeft,
  FeatureRight,
  FeatureMenu,
  CardText,
  CardEnd,
  FeatureImg,
  Featured,
  ExtensionsSection,
  ExtensionCard,
  InputWrap,
  LeftWrap,
  DetailLink,
  AppsDetailMain,
  AppsHeroWrap,
  AppHeader3,
  AppSliderSection,
  SearchEmpty
};
