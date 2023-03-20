import styled, { css } from 'styled-components';
import { Body2, Body3, Body4, Body5, HeaderFont, Heading2, Heading3, Heading5, Heading6, MbBody1, MbBody5, MobileH2 } from './styles';

const HeroSection = styled.div`
  width: 100%;
  padding: 224px 0 0px 0;
  text-align: center;
  overflow: hidden;
  @media only screen and (max-width: 749px) {
    padding: 148px 0 0px 0;
  }
`;

const HeroHeading = styled.h1`
  ${Heading2};
  color: ${({ theme }) => theme.colors.title};
  margin: 0 0 20px 0;
  @media only screen and (max-width: 991px) {
    text-align: center;
    ${Heading2}
  }
  @media only screen and (max-width: 749px) {
    margin-bottom: 20px;
    ${MobileH2}
    color: ${({ theme }) => theme.colors.title};
  }
`;

const Para = styled.p`
  ${Body2}
  letter-spacing: 0.02em;
  margin: 0;
  color: ${({ theme }) => theme.colors.body};
  @media only screen and (max-width: 991px) {
    text-align: center;
    ${Body2}
  }
  @media only screen and (max-width: 749px) {
    ${MbBody1};
  }
`;

const HeroBtnBlock = styled.div`
  margin: 32px 0 100px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 80px;
  }
`;

const Heading = styled.h2`
  text-align: center;
  ${Heading3}
  color: ${({ theme }) => theme.colors.title};
  margin-top: 0;
  margin-bottom: 60px;
  @media only screen and (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 40px;
  }
`;

const HighlightSection = styled.div`
  padding: 20px 108px;
  margin-bottom: 100px;
  background-color: ${({ theme }) => theme.colors.greendark};
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    padding: 20px 24px;
    margin-bottom: 80px;
    flex-direction: column;
    align-items: center;
  }
`;
const Highlight = styled.div`
  max-width: 408px;
  width: 100%;
  color: ${({ theme }) => theme.colors.greenlight};
  text-align: center;
  ${(props) =>
    props.ishighlight1 &&
    css`
      padding: 12px 40px 12px 20px;
    `}
  ${(props) =>
    props.ishighlight2 &&
    css`
      border-right: 1px solid #e3ffee;
      border-left: 1px solid #e3ffee;
      padding: 12px 40px;
    `}
    ${(props) =>
    props.ishighlight3 &&
    css`
      padding: 12px 20px 12px 40px;
    `}
  @media only screen and (max-width: 768px) {
    ${(props) =>
      props.ishighlight1 &&
      css`
        padding: 20px 0px;
      `}
    ${(props) =>
      props.ishighlight2 &&
      css`
        border-top: 1px solid #e3ffee;
        border-bottom: 1px solid #e3ffee;
        border-left: none;
        border-right: none;
        padding: 20px 0px;
      `}
    ${(props) =>
      props.ishighlight3 &&
      css`
        padding: 20px 0px;
      `}
  }
  h2 {
    ${Heading5}
    margin:0;
  }
  p {
    ${Body4}
    margin:5px 0 0;
  }
`;

const CustomerSection = styled.div`
  display: flex;
  gap:32px;
`;
const LeftSection = styled.div`
  max-width: 274px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    display:none;
  }
`;
const RightSection = styled.div``;
const CustomerLogo = styled.div``;
const Head = styled.h2`
  ${Heading6}
  padding-bottom:16px;
  margin: 20px 0 0;
  border-bottom: 1px solid #000000;
`;
const Detail = styled.div`
  margin:20px 0 0;
  h3 {
    ${Body5}
    margin:0 0 4px;
    color: ${({ theme }) => theme.colors.title};
  }
  p {
    ${Body5}
    margin:0;
    color: ${({ theme }) => theme.colors.body};
  }
  a {
    ${Body5}
    margin:0;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.colors.title};
    }
  }
`;
const DetailSection = styled.div``;
const Top = styled.div`
  padding: 0px 16px 16px;
`;
const Bottom = styled.div`
  padding: 8px 16px 16px;
`
const LastDroplist = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  padding:17px 0;
  border-bottom: 1px solid #131313;
  :last-child{
    border-bottom:none;
  }
  .learn-link,
  .learn-link svg path {
    transition: all 300ms ease;
  }
  a {
    ${MbBody5};
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
    cursor: pointer;
    transition: none;
    :hover .HoverArrow__linePath {
      opacity: 1;
      fill: none;
      fill: black;
    }
    :hover .HoverArrow__tipPath {
      transform: translateX(1px);
    }
  }

  .learn-link:hover {
    color: black;
  }
  .learn-link svg path {
    transition: all 300ms ease;
  }
  .HoverArrow__linePath {
    opacity: 0;
    fill: none;
  }
  .HoverArrow {
    stroke-width: 1px;
    fill: none;
    stroke: currentColor;
    position: relative;
    margin-left: var(--arrowSpacing);
    stroke-width: 1px;
    fill: none;
    stroke: currentColor;
    margin-left: 8px;
    --arrowSpacing: 5px;
    --arrowHoverTransition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
    --arrowHoverOffset: translateX(3px);
  }
  .mobilearrow {
    display: none;
  }
`;
const Last = styled.div`
  display: flex;
  align-items: center;
`;
export {
  HeroSection,
  HeroHeading,
  Para,
  HeroBtnBlock,
  Heading,
  HighlightSection,
  Highlight,
  CustomerSection,
  LeftSection,
  RightSection,
  CustomerLogo,
  Head,
  Detail,
  DetailSection,
  Top,
  Bottom,
  LastDroplist,
  Last
};
