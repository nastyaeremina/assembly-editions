import styled from "styled-components";
import {
  ButtonText,
  HeaderFont,
  Heading1,
  Heading3,
  Heading4,
  HeroPara,
  Body1,
  Body2,
  Body3,
} from "./styles";

const Container = styled.div`
  width: 100%;
  max-width: 1254px;
  margin: 0 auto;
  padding: 0 15px;
`;

const FcfeatureBlock = styled.div`
  padding: 60px 0;
  @media only screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;

const ScHeading = styled.h1`
  margin: 0 0 16px 0;
  ${Heading1}
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
`;

const ScPara = styled.p`
  margin: 0;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.textColor};
`;

const ScMainBlock = styled.div`
  padding-bottom: 120px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 80px;
  }
  @media only screen and (max-width: 749px) {
    padding-bottom: 60px;
  }
`;

const ProductivityMain = styled.div`
  padding-top: 120px;
  @media only screen and (max-width: 768px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 749px) {
    padding-top: 60px;
  }
`;

const PricingMainBlock = styled.div`
  padding: 156px 0 120px 0;
  @media only screen and (max-width: 768px) {
    padding: 136px 0 84px 0;
  }
  @media only screen and (max-width: 479px) {
    padding: 120px 0 64px 0;
  }
`;

const FcfeatureWrap = styled.div`
  padding: 60px 0;
  background-color: ${({ theme }) => theme.colors.black};

  /* overflow: hidden;
  &.dnone {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 80px 0;
  }
  @media only screen and (max-width: 749px) {
    padding: 60px 0;
  } */
`;

const SolutionTopSection = styled.div`
  padding: 80px 0 120px 0;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    padding: 60px 0 80px 0;
  }
  @media only screen and (max-width: 749px) {
    padding: 40px 0 60px 0;
  }
`;

const FaqContainer = styled.div`
  max-width: 710px;
  width: 100%;
  margin: auto;
`;

const FaqHeading = styled.h2`
  margin: 0 0 50px 0;
  ${Heading3}
  text-align: center;
  color: ${({ theme }) => theme.colors.lightDark};
`;

const PrimaryButton = styled.div`
  a {
    ${ButtonText}
    display: inline-block;
    letter-spacing: 0.02em;
    padding: 12px 35px;
    border-radius: 26px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.whiteColor};
    text-decoration: none;
    transition: all 300ms;
    border: 1px solid #09aa6c;
    :hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const SecondryButton = styled.div`
  a {
    ${ButtonText}
    display: inline-block;
    padding: 11px 35px;
    border: 1px solid #000000;
    border-radius: 48px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    box-shadow: 1px 0 3px 0 rgb(0 0 0 / 12%);
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: 0.02em;
    text-decoration: none;
    transition: all 300ms;
    :hover {
      background-color: ${({ theme }) => theme.colors.gainsboro};
    }
  }
`;
const BlackButton = styled.li`
  a {
    margin-left: 14px;
    ${HeaderFont}
    display: inline-block;
    padding: 8px 32px;
    border-radius: 48px;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.neutral};
    text-decoration: none;
    transition: all 300ms;
  }
`;

const Scfeature = styled.div`
  padding: 60px 0;
  @media only screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;
const ScHeroSection = styled.div`
  width: 100%;
  padding: 156px 0 84px 0;
  position: relative;
  &.solution {
    overflow: hidden;
  }
  @media only screen and (max-width: 768px) {
    padding: 136px 0 84px 0;
  }
  @media only screen and (max-width: 749px) {
    padding: 120px 0 48px 0;
  }
`;
const ScFeatureHeading = styled.h1`
  ${Heading1}
  margin: 0 0 24px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
  text-transform: capitalize;
`;
const ScFeaturePara = styled.p`
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  ${HeroPara}
  text-align: center;
  color: ${({ theme }) => theme.colors.lightDark};
`;
const LinearBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: auto;
  bottom: auto;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0),
      hsla(0, 0%, 100%, 0) 78%,
      hsla(0, 0%, 100%, 0.5) 91%,
      #fff
    ),
    url("/images/blogdetail_linearbg.webp");
  background-position: 0 0, 50% 50%;
  background-size: auto, cover;
  background-repeat: repeat, no-repeat;
  &.blogdetail {
    height: 718px;
  }
  &.glossaryDetail {
    height: 314px;
  }
  &.pricing {
    height: 400px;
  }
  &.pagenotfound {
    height: 400px;
  }
  &.feature {
    height: 390px;
  }
  &.featuredetail {
    height: 278px;
  }
  &.help {
    height: 508px;
  }
  &.invoice {
    height: 580px;
  }
`;
const BlogBreadCum = styled.div`
  display: flex;
  align-items: center;
`;
const BreadCumLink = styled.div`
  ${Body3}
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.romanSilver};
  a {
    color: ${({ theme }) => theme.colors.romanSilver};
    transition: all 300ms;
    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const SlashBlock = styled.div`
  margin: 0 6px;
`;

const RichTextBlock = styled.div`
  > :where(h3, h4, h5, h6):first-child {
    margin-top: 0;
  }

  p {
    ${Body1}
    color: ${({ theme }) => theme.colors.blackOlive};
    @media only screen and (max-width: 768px) {
      ${Body2}
    }
  }

  h2,
  h3,
  h4,
  h5 {
    margin: 32px 0 16px 0;
    color: ${({ theme }) => theme.colors.lightDark};
    font-family: ${({ theme }) => theme.fontfamily.darkColor};
    @media only screen and (max-width: 479px) {
      margin: 24px 0 12px 0;
    }
  }
  h2 {
    ${Heading3}
  }
  h3 {
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    @media only screen and (max-width: 479px) {
      margin: 0 0 16px 0;
      font-size: 24px;
      line-height: 30px;
    }
  }
  h4,
  h5 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  }

  p {
    margin: 0;
    margin: 0 0 16px 0;
    @media only screen and (max-width: 479px) {
      margin: 0 0 12px 0;
    }
  }

  q {
    padding-left: 24px;
    border-left: 6px solid ${({ theme }) => theme.colors.borderColor};
    display: block;
    margin-bottom: 24px;
  }
  blockquote {
    padding-left: 24px;
    border-left: 6px solid ${({ theme }) => theme.colors.borderColor};
    display: block;
    margin-bottom: 24px;
  }
  a {
    font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  }

  b {
    font-weight: 700;
  }

  ul {
    margin: 0 0 16px 0;
    padding: 0 0 0 12px;
    li {
      margin-bottom: 0;
      padding: 0 0 0 16px;
      color: ${({ theme }) => theme.colors.textColor};
      background-image: url("/images/list-circle.svg");
      background-repeat: no-repeat;
      background-position: 0 12px;
    }
    @media only screen and (max-width: 768px) {
      padding: 0 0 0 4px;
      li {
        padding: 0 0 0 16px;
      }
    }
  }

  ol {
    margin: 0 0 16px 0;
    padding: 0 0 0 40px;
    list-style-type: decimal;
    li {
      color: ${({ theme }) => theme.colors.textColor};
      padding: 0 0 0 10px;
      background-image: none;
    }
    @media only screen and (max-width: 479px) {
      padding: 0 0 0 32px;
    }
  }

  img {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 24px;
    display: block;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: all 300ms;
    :hover {
      text-decoration: underline;
    }
  }
`;

const LogosManilock = styled.div``;
const LogosText = styled.p`
  ${Body2}
  margin-bottom: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.whiteColor};
`;
const LogoListWrap = styled.div`
  margin: 0 auto;
  max-width: 980px;
  width: 100%;
`;

const LogosList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    margin: 0 -8px;
    justify-content: center;
  }
`;
const LogosItem = styled.li`
  padding: 12px;
  margin: 0;
  @media only screen and (max-width: 991px) {
    padding: 8px;
  }
`;
const PageNotFoundMain = styled.div`
  padding: 156px 0 120px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    padding: 136px 0 84px 0;
  }
`;
const PageNotFoundHeading = styled.h1`
  ${Heading1}
  margin: 12px 0 0 0;
  color: ${({ theme }) => theme.colors.textColor};
`;
const PageNotFoundPara = styled.p`
  ${HeroPara}
  margin: 16px 0 32px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
  @media only screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
const SearchForm = styled.form`
  position: relative;
  height: auto;
  width: 100%;
  max-width: 420px;
  margin: 30px auto 0 auto;
  @media only screen and (max-width: 768px) {
    max-width: 360px;
    margin: 20px auto 0 auto;
  }
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 12px 40px 12px 20px;
  border-radius: 28px;
  height: auto;
  line-height: unset;
  border: 1px solid #d1d3da;
  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: var(--inputBoxShadow);
  }
  ::placeholder {
    ${Body3}
    font-weight: 500;
  }
  @media only screen and (max-width: 768px) {
    padding: 8px 40px 8px 20px;
  }
`;
const SearchIcon = styled.input`
  height: 24px;
  width: 24px;
  background-image: url("/images/search.svg");
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 18px;
  top: 13px;
  cursor: pointer;
  outline-offset: 0;
  text-indent: -99999px;
  @media only screen and (max-width: 768px) {
    right: 13px;
    top: 9px;
  }
`;
const PanelBlock = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const BlogSpan = styled.span`
  ${Body3}
  color: ${({ theme }) => theme.colors.romanSilver};
  transition: all 300ms;
  a {
    color: ${({ theme }) => theme.colors.romanSilver};
    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
const Circle = styled.div`
  height: 4px;
  width: 4px;
  margin: 0 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.romanSilver};
`;
const CategoryImg = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  text-align: center;
`;
const CategoryCardHeading = styled.h3`
  margin: 12px 0 20px 0;
  ${Heading4}
  color: ${({ theme }) => theme.colors.textColor};
  transition: all 300ms;
  @media only screen and (max-width: 479px) {
    margin: 12px 0;
  }
`;
const CategoryCard = styled.div`
  > a {
    height: 100%;
    display: inline-block;
    padding: 10px;
    text-decoration: none;
    border-radius: 12px 12px 8px 8px;
    transition: all 300ms;
    :hover {
      background-color: ${({ theme }) => theme.colors.whiteColor};
      box-shadow: var(--shadowCard);
      ${CategoryCardHeading} {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    @media only screen and (max-width: 768px) {
      :hover {
        background-color: none;
        box-shadow: none;
        ${CategoryCardHeading} {
          color: ${({ theme }) => theme.colors.textColor};
        }
      }
    }
  }
`;
const CategoryContentBlock = styled.div`
  margin-top: 16px;
`;

const PublishDate = styled.span`
  ${Body2}
  color: ${({ theme }) => theme.colors.romanSilver};
  @media only screen and (max-width: 479px) {
    ${Body3}
  }
`;
const LifeTimeMainBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 42px;
`;
const LifeTimeBlock = styled.div`
  margin: auto;
  display: inline-block;
  padding: 6px 16px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 1px 1px 3px 0 rgb(0 0 0 / 12%);
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export {
  PrimaryButton,
  BlackButton,
  Container,
  SecondryButton,
  Scfeature,
  LinearBg,
  SlashBlock,
  BlogBreadCum,
  BreadCumLink,
  RichTextBlock,
  FcfeatureBlock,
  FcfeatureWrap,
  ScMainBlock,
  ScHeroSection,
  ScHeading,
  ScPara,
  LogosManilock,
  LogosText,
  LogosList,
  LogosItem,
  LogoListWrap,
  PricingMainBlock,
  PageNotFoundMain,
  PageNotFoundHeading,
  PageNotFoundPara,
  ScFeatureHeading,
  ScFeaturePara,
  SearchInput,
  SearchIcon,
  SearchForm,
  PanelBlock,
  BlogSpan,
  Circle,
  CategoryCard,
  CategoryContentBlock,
  CategoryCardHeading,
  CategoryImg,
  PublishDate,
  LifeTimeBlock,
  LifeTimeMainBlock,
  ProductivityMain,
  FaqContainer,
  FaqHeading,
  SolutionTopSection,
};
