import styled, { css } from 'styled-components';
import { Body1, Heading3, Heading4, MbBody3 } from '../../styles/styles';

import { greenlight, body, title } from './../../styles/color';

const FaqSection = styled.div`
  padding: 100px 0 60px 0;
  li {
    padding-bottom: 0;
    :last-child {
      border-bottom: 0;
    }
  }
  .listtitle {
    margin-right: 30px;
  }
  .listcaption {
    padding-bottom: 40px;
    padding-right: 72px;
    @media only screen and (max-width: 991px) {
      padding-right: 70px;
    }
    @media only screen and (max-width: 749px) {
      padding-right: 70px;
    }
  }
  ${(props) =>
    props.enterprise &&
    css`
      padding: 100px 0 60px 0;
      background-color: ${greenlight};
    `}
  ${(props) =>
    props.isGuideFAQ &&
    css`
      padding: 60px 0 100px 0;
    `}
  .ak:last-child {
    border-bottom: none;
  }
  .c2:last-child {
    border-bottom: none;
  }
  @media only screen and (max-width: 991px) {
    padding: 80px 0 40px;
    .listtitle {
      font-size: 28px !important;
      line-height: 34px !important;
    }
    .listcaption {
      font-size: 18px !important;
      line-height: 22px !important;
    }
  }
  @media only screen and (max-width: 749px) {
    .listtitle {
      font-size: 22px !important;
      line-height: 23px !important;
    }
    .listcaption {
      font-size: 16px !important;
      line-height: 21px !important;
    }
  }
`;
const FaqTitle = styled.div`
  h2 {
    ${Heading3};
    margin: 0;
    color: ${title};
  }
  margin-bottom: 20px;
  @media only screen and (max-width: 991px) {
    h2 {
      font-size: 50px;
      line-height: 55px;
    }
  }
  @media only screen and (max-width: 749px) {
    margin-bottom: 0;
  }
`;
const FaqWrap = styled.div`
  .faq-list {
    list-style: none;
    padding: 0;
  }
  .faq-list li {
    border-bottom: 1px solid #131313;
    padding: 0px 0 40px;
    text-align: left;
    margin-bottom: 40px;
    :last-child {
      margin-bottom: 0;
      border-bottom: none;
      padding-bottom: 0;
    }
  }

  .faq-list .faq-heading::before {
    content: '';
    background-image: url('/images/plusicon.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    right: 0;
    top: 0px;
    width: 32px;
    height: 32px;
    display: block;
  }

  .faq-list .the-active .faq-heading::before {
    content: '';
    background-image: url('/images/minusicon.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 32px;
    height: 32px;
  }

  .faq-heading {
    position: relative;
    cursor: pointer;
    ${Heading4};
    margin: 0;
    color: ${title};
  }

  .faq-heading:hover {
    color: var(--theme-color);
  }

  .faq-text {
    display: none;
  }
  .container {
    width: 1200px;
    margin: auto;
  }
  .art-box svg {
    width: 100%;
  }
  .row {
    display: flex;
  }
  .row .col {
    flex-basis: 50%;
  }
  .read {
    ${Body1};
    margin: 0;
    color: ${body};
    margin-top: 20px;
  }
`;

const DivFAQ = styled.div`
  border-bottom: 1px solid black;
  .accordion-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0px;
    cursor: pointer;
  }
  .accordion-heading {
    ${Heading4}
    margin:0 30px 0 0;
  }
  .accordion-content {
  }
  @media only screen and (max-width: 426px) {
    svg {
      height: 24px;
      width: 24px;
    }
  }
  svg path {
    transition: all 0.2s ease;
    transform-origin: center;
  }
  svg .active {
    transform: rotate(90deg);
  }
  :last-child {
    border-bottom: none;
  }
`;
const FAQAnsware = styled.div`
  div {
    ${Body1}
    color: ${body};
    padding: 0 32px 40px 0;
    @media only screen and (max-width: 426px) {
      ${MbBody3}
    }
  }
  opacity: 0;
  max-height: 0;
  transition: opacity 400ms ease-in-out 0s, max-height 400ms ease-in-out 0s;
  overflow: hidden;
  &&.active {
    opacity: 1;
    overflow: visible;
    max-height: 500px;
  }
`;
export { FaqSection, FaqWrap, FaqTitle, DivFAQ, FAQAnsware };
