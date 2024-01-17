import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Body1, Body4, Heading3, Heading4, LinkTxt } from '../../styles/styles';
import {
  bluelight,
  bodycolor,
  brownlight,
  greendark,
  greenlight,
  orangelight,
  primary,
  purplelight,
  title,
  yellowlight
} from '../../styles/color';
const ClientMain = styled.div`
  padding: 50px 0 100px 0;
  &::before {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    z-index: -1;
    content: url(/images/billhoverbg.svg) url(/images/hoverfile.svg) url(/images/hoverblock.svg)
      url(/images/hoverform.svg) url(/images/hoverbase.svg) url(/images/hovermessage.svg);
  }
  @media only screen and (max-width: 769px) {
    padding: 40px 0 80px 0;
  }
`;
const ClientHero = styled.div`
  text-align: center;
  h2 {
    max-width: 920px;
    width: 100%;
    ${Heading3};
    color: ${title};
    margin: 0 auto;
    span {
      color: ${primary};
    }
  }
  @media only screen and (max-width: 749px) {
    text-align: left;
  }
`;
const CardSection = styled.div`
  /* display: grid; */
  gap: 16px;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: stretch;
  align-content: stretch;
  width: 100%;
  padding-bottom: 16px;
  padding-top: 40px;
  ${(props) =>
    props.isProductdemo &&
    css`
      /* display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
    `}
  /* transition: all 0.5s ease; */
  .mydiv:hover .hide {
    display: block;
    @media only screen and (max-width: 749px) {
      display: none;
    }
  }
  .mydiv:hover .show {
    display: none;
    @media only screen and (max-width: 749px) {
      display: block;
    }
  }
  ${(props) =>
    props.bgImage &&
    css`
      .mydiv:hover {
        background-image: url('/images/billhoverbg.svg');
      }
    `}
  .mydiv:hover {
    /* background-image: url('/images/billhoverbg.svg'); */
    background-repeat: no-repeat;
    background-size: cover;
    a {
      color: ${bluelight};
      /* position: relative;
      top: 3px; */
    }
    @media only screen and (max-width: 749px) {
      background-image: none;
      a {
        color: ${title};
      }
    }
  }
  @media only screen and (max-width: 749px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .file {
    border: 1px solid #01011d;
  }
  .form {
    border: 1px solid #171500;
  }
  .Helpdesk {
    border: 1px solid #1c0c00;
  }
  .message {
    border: 1px solid #27000a;
  }
  .file:hover .hide {
    display: block;
    @media only screen and (max-width: 749px) {
      display: none;
    }
  }
  .file:hover .show {
    display: none;
    @media only screen and (max-width: 749px) {
      display: block;
    }
  }
  .file:hover {
    background-image: url('/images/hoverfile.svg');
    background-repeat: no-repeat;
    background-size: cover;
    a {
      color: ${purplelight};
    }
    @media only screen and (max-width: 991px) {
      background-image: none;
      a {
        color: ${title};
      }
    }
  }
  .form:hover {
    background-image: url('/images/hoverform.svg');
    a {
      color: ${yellowlight};
    }
    @media only screen and (max-width: 991px) {
      background-image: none;
      a {
        color: ${title};
      }
    }
  }
  .Helpdesk:hover {
    background-image: url('/images/hoverbase.svg');
    @media only screen and (max-width: 991px) {
      background-image: none;
    }
    a {
      color: ${orangelight};
      @media only screen and (max-width: 991px) {
        color: ${title};
      }
    }
  }
  .message:hover {
    background-image: url('/images/hovermessage.svg');
    @media only screen and (max-width: 991px) {
      background-image: none;
    }
    a {
      color: ${brownlight};
      @media only screen and (max-width: 991px) {
        color: ${title};
      }
    }
  }
  @media only screen and (max-width: 749px) {
    grid-template-columns: 1fr 1fr;
    gap: 11px;
    row-gap: 16px;
    flex-wrap: wrap;
  }
`;
const ModuleCard = styled.div`
  ${(props) =>
    props.bgImage &&
    css`
      &:hover {
        background-image: url(${props.bgImage});
      }
    `}
  padding: 36px;
  border: 1px solid #01292c;
  border-radius: 4px;
  display: block;
  cursor: pointer;
  height: auto;
  width: auto;
  /* flex-grow: 1; */
  flex: 1 1 0;
  display: flex;
  align-items: stretch;
  /* transition: all 5s ease; */
  ${(props) =>
    props.isProductdemo &&
    css`
      .learn-link {
        display: flex;
        flex-direction: column;
      }
    `}
  a {
    ${LinkTxt};
    color: ${title};
  }
  .learn-link {
    transition: transform 300ms ease;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .learn-link svg path {
    transition: transform 300ms ease;
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
    margin-left: var(--arrowSpacing);
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
    margin-left: 8px;
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
  .mobilearrow {
    display: none;
  }
  @media only screen and (max-width: 991px) {
    .mobilearrow {
      display: block;
      margin-left: 4px;
    }
  }
  .mobilearrow a {
    color: ${title};
    cursor: pointer;
    display: block;
    ${LinkTxt};
    :hover .HoverArrow__linePath {
      opacity: 1;
      fill: none;
      @media only screen and (max-width: 991px) {
        opacity: 0;
        margin-left: 4px;
      }
    }
    :hover .HoverArrow__tipPath {
      transform: translateX(4px);
    }
  }
  .hide {
    display: none;
  }
  :hover {
    display: block;
    color: white;
  }
  :hover .icon-link {
    transform: translateY(1px);
    @media only screen and (max-width: 991px) {
      transform: none;
    }
  }
  :hover .icon-message {
    transform: translateY(0px);
  }
  :hover .HoverArrow__linePath {
    opacity: 1;
    fill: none;
    @media only screen and (max-width: 991px) {
      opacity: 0;
      margin-left: 4px;
    }
  }
  :hover .HoverArrow__tipPath {
    transform: translateX(4px);
    @media only screen and (max-width: 991px) {
      transform: none;
    }
  }

  @media only screen and (min-width: 749px) {
    ${(props) =>
      props.strokecolor &&
      css`
        :hover {
          svg {
            path {
              stroke: ${props.strokecolor};
            }
          }
        }
      `}
  }
  @media only screen and (max-width: 991px) {
    padding: 20px;
    a {
      font-size: 16px;
      line-height: 22px;
    }
  }
  @media only screen and (max-width: 749px) {
    width: unset;
  }
`;
const CardText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 40px;
  transition: all 300ms ease-in-out;
  h4 {
    margin: 0;
    color: ${title};
    ${LinkTxt};
  }
  h4:hover {
    color: white;
  }
`;
const BlockSection = styled(Link)`
  border: 1px solid #00160e;
  border-radius: 4px;
  padding: 40px 49px;
  display: flex;
  align-items: center;
  gap: 60px;
  width: 100%;
  img {
    max-width: 185px;
    width: 100%;
    max-height: 145px;
    height: 100%;
  }
  @media only screen and (max-width: 749px) {
    padding: 30px 35px;
    gap: 40px;

    img {
      max-width: 124px;
    }
  }
  @media only screen and (max-width: 749px) {
    flex-direction: column;
    gap: 0;
    padding: 20px;
    max-width: 100%;
    width: 100%;
  }
  :hover {
    background-image: url('/images/hoverblock.svg');
    background-repeat: no-repeat;
    background-size: cover;
    @media only screen and (max-width: 991px) {
      background-image: none;
    }
    a {
      color: ${greenlight};
      @media only screen and (max-width: 991px) {
        color: ${title};
      }
    }
    h3 {
      color: ${greenlight};
      @media only screen and (max-width: 991px) {
        color: ${title};
      }
    }
    .hide {
      display: block;
      @media only screen and (max-width: 749px) {
        display: none;
      }
    }
    .show {
      display: none;
      @media only screen and (max-width: 749px) {
        display: block;
      }
    }
  }

  :hover .HoverArrow__linePath {
    opacity: 1;
    fill: none;
  }
  :hover .HoverArrow__tipPath {
    transform: translateX(4px);
  }
  .hide {
    display: none;
  }
`;
const BlockText = styled.div`
  text-align: left;
  max-width: 879px;
  width: 100%;
  h3 {
    margin: 0 0 50px 0;
    ${Body1};
    color: ${greendark};
  }
  .hidden {
    display: none;
  }
  .learn-link:hover {
    color: #e3ffee;

    @media only screen and (max-width: 991px) {
      color: ${title};
    }
  }
  @media only screen and (max-width: 991px) {
    h3 {
      font-size: 18px;
      line-height: 23px;
      margin-bottom: 0;
    }
    @media only screen and (max-width: 749px) {
      h3 {
        display: none;
      }
    }
  }
`;
const BlockWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .hidden {
    display: none;
  }
  .show {
    display: block;
  }
  h4 {
    margin: 0;
    color: ${title};
    ${LinkTxt};
  }
  .show:hover {
    display: none;
  }
  .hidden:hover {
    display: block;
  }
`;
const HelpLeftSub = styled.div`
  display: block;
  margin-top: 40px;
  h4 {
    ${Heading4};
    color: ${title};
    margin: 0 0 12px 0;
  }
  p {
    ${Body4};
    margin: 0 0 20px 0;
    color: ${bodycolor};
  }
  @media only screen and (max-width: 769px) {
    margin-top: 18px;
  }
`;
const ImageWrapper = styled.div`
  /* max-height: 165px; */
  /* height: 100%; */
  width: 100%;
  img {
    max-width: 100%;
    height: 100%;
  }
  svg {
    max-width: 220px;
    width: 100%;
    max-height: 165px;
    height: 100%;
  }
  @media only screen and (max-width: 1025px) {
    max-height: 124px;
    svg {
      max-width: 185px;
      width: 100%;
      max-height: 124px;
      height: 100%;
    }
  }
  @media only screen and (max-width: 769px) {
    max-height: 100px;
  }
  @media only screen and (max-width: 769px) {
    max-height: 105px;
    height: 105px;
    min-height: 105px;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 749px) {
    svg {
      max-width: 124px;
      width: 100%;
      max-height: 165px;
      height: 100%;
    }
  }
`;
const HelpLink = styled.div`
  text-align: left;
  white-space: nowrap;
  .mobilearrow {
    display: none;
  }
  @media only screen and (max-width: 769px) {
    display: flex;
    align-items: center;
    .center {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .mobilearrow {
      display: block;
    }
  }
  .learn-link {
    transition: transform 300ms ease;
    height: 100%;
  }
  .learn-link svg path {
    transition: transform 300ms ease;
  }
  .learn-link:hover {
    @media only screen and (max-width: 749px) {
      color: #131313;
    }
  }
  .learn-link svg path {
    transition: transform 300ms ease;
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
    margin-left: var(--arrowSpacing);
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
    margin-left: 8px;
    @media only screen and (max-width: 769px) {
      display: none;
    }
  }
  a {
    color: ${title};
    cursor: pointer;
    display: block;
    ${LinkTxt};
    @media only screen and (max-width: 769px) {
      font-size: 16px;
      line-height: 24px;
    }
    :hover .HoverArrow__linePath {
      opacity: 1;
      fill: none;
      @media only screen and (max-width: 749px) {
        opacity: 0;
      }
    }
    :hover .HoverArrow__tipPath {
      transform: translateX(4px);
      @media only screen and (max-width: 749px) {
        transform: none;
      }
    }
  }
`;

const LastProductdemocard = styled.div`
  margin-top: 16px;
`;

const LastCardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-basis: 100%;
  align-self: stretch;
  width: 100%;
  @media (max-width: 749px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;
export {
  ClientMain,
  ClientHero,
  CardSection,
  ModuleCard,
  CardText,
  BlockSection,
  BlockText,
  BlockWrap,
  HelpLeftSub,
  ImageWrapper,
  HelpLink,
  LastProductdemocard,
  LastCardSection
};
