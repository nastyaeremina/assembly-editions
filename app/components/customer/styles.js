import styled, { css } from 'styled-components';
import { Body3, HeaderFont, Heading3, MbBody3, MbPrimaryBtn, MobileH3 } from '../../styles/styles';

import { greendark, body, title, primary } from './../../styles/color';

const TestimonialCard = styled.div`
  border: 1px solid #131313;
  border-radius: 4px;
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
  ${(props) =>
    props.isStandardPage &&
    css`
      margin-bottom: 100px;
      @media only screen and (max-width: 768px) {
        margin-bottom: 80px;
      }
    `}
`;
const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RightCard = styled.div`
  max-width: 405px;
  width: 100%;
  display: flex;
  align-items: stretch;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
  .right {
    max-width: 405px;
    width: 100%;
    border-left: 1px solid #131313;
    border-radius: 0px 3px 3px 0px;
    @media only screen and (max-width: 768px) {
      max-width: 100%;
      border-left: none;
      border-radius: 3px 3px 0px 0px;
    }
  }
`;
const Detail = styled.p`
  ${Body3}
  margin: 20px 0 38px;
  color: ${body};
  @media only screen and (max-width: 768px) {
    ${MbBody3}
    letter-spacing: 0.02em;
    margin-bottom: 32px;
  }
`;

const Percentage = styled.div`
  display: flex;
  gap: 60px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 28px;
  }
`;
const Section = styled.div`
  max-width: 210px;
  width: 100%;
  display: flex;
  flex-direction: column;
  span {
    ${Heading3}
    color: ${title};
  }
  p {
    ${Body3}
    margin:0;
    color: ${greendark};
  }
  @media only screen and (max-width: 768px) {
    span {
      ${MobileH3}
    }
    p {
      ${MbBody3}
    }
  }
`;
const LastDroplist = styled.div`
  border-top: 1px solid #00160e;
  padding: 28px;
  @media only screen and (max-width: 768px) {
    padding: 16px 20px;
  }

  .learn-link,
  .learn-link svg path {
    transition: all 300ms ease;
  }
  a {
    ${Body3};
    margin: 0;
    color: ${title};
    cursor: pointer;
    transition: none;
    @media only screen and (max-width: 768px) {
      ${HeaderFont}
    }
    :hover .HoverArrow__linePath {
      opacity: 1;
      fill: none;
      fill: black;
      /* @media only screen and (max-width: 749px) {
        opacity: 0;
      } */
    }
    :hover .HoverArrow__tipPath {
      transform: translateX(2px);
      /* @media only screen and (max-width: 749px) {
        transform: none;
      } */
    }
  }

  .learn-link:hover {
    color: black;
    /* @media only screen and (max-width: 749px) {
      color: ${primary};
    } */
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
    margin-left: var(--arrowSpacing);
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
    margin-left: 8px;
    --arrowSpacing: 5px;
    --arrowHoverTransition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
    --arrowHoverOffset: translateX(3px);
    /* @media only screen and (max-width: 749px) {
      display: none;
    } */
    /* @media only screen and (max-width: 376px) {
      margin-left: 4px;
    } */
  }
  .mobilearrow {
    display: none;
    /* @media only screen and (max-width: 749px) {
      position: relative;
      display: block;
    } */
  }
`;

const Last = styled.div`
  display: flex;
  align-items: center;
`;

const Top = styled.div`
  padding: 28px 28px 56px;
  .top-logo {
    max-width: 218px;
    width: 100%;
    max-height: 50px;
    height: 100%;
  }
  @media only screen and (max-width: 768px) {
    padding: 28px 20px;
    .top-logo {
      max-width: 175px;
      width: 100%;
      max-height: 40px;
      height: 100%;
    }
  }
`;
export { TestimonialCard, LeftCard, RightCard, Detail, Percentage, Section, LastDroplist, Last, Top };
