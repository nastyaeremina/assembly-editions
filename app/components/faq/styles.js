import styled, { css } from 'styled-components';
import { Body1, Body4, Body5, Heading3, Heading4, MbBody3, MobileH4 } from '../../styles/styles';

const FaqSection = styled.div`
  padding: 100px 0 60px 0;
  ${(props) =>
    props.isStandardPage &&
    css`
      padding: 0px 0 60px;
    `}
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
      background-color: var(--light-green);
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
    ${(props) =>
      props.isStandardPage &&
      css`
        padding: 0px 0 40px;
      `}
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
  :hover {
    .copy-icon-h4 {
      opacity: 1;
    }
  }
  ${(props) =>
    props.isGuideFAQ &&
    css`
      display: inline-flex;
      align-items: center;
      gap: 10px;

      .copy-icon-h4 {
        opacity: 0;
        cursor: pointer;
        transition: all 0.3s;
      }
      .copy-icon-h4 {
        :hover {
          opacity: 1;
          transition: all 0.3s;
        }
      }
    `}
  h2 {
    ${Heading3};
    margin: 0;
    color: var(--title);
    ${(props) =>
      props.isGuideFAQ &&
      css`
        ${Body1};
        font-weight: 400;
      `}
  }
  margin-bottom: 20px;
  @media only screen and (max-width: 991px) {
    h2 {
      font-size: 28px;
      line-height: 31px;
      ${(props) =>
        props.isGuideFAQ &&
        css`
          ${Body1};
          font-weight: 400;
        `}
    }
  }
  @media only screen and (max-width: 749px) {
    margin-bottom: 0;
    ${(props) =>
      props.isGuideFAQ &&
      css`
        h2 {
          ${MobileH4}
        }
      `}
  }
`;

const DivFAQ = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 40px;
  ${(props) =>
    props.isGuideFAQ &&
    css`
      padding-bottom: 24px;
    `}
  .accordion-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0px 0;
    cursor: pointer;
    ${(props) =>
      props.isGuideFAQ &&
      css`
        padding: 24px 0px 0;
        > div > svg {
          width: 20px;
          height: 20px;
        }
        @media only screen and (max-width: 449px) {
          padding: 40px 0px 0;
          > div > svg {
            width: 24px;
            height: 24px;
          }
        }
      `}
    :hover {
      .faq-copy-icon {
        opacity: 1;
        transition: all 0.3s;
      }
    }
  }
  .accordion-heading {
    ${Heading4}
    margin:0 30px 0 0;
    ${(props) =>
      props.isGuideFAQ &&
      css`
        ${Body4};
        line-height: 24px;
        font-weight: 400;
        display: inline-flex;
        gap: 10px;
        align-items: center;
        @media only screen and (max-width: 449px) {
          ${Body4};
        }
      `}
  }
  .accordion-content {
  }
  .faq-copy-icon {
    width: 18px;
    height: 18px;
    /* margin-left: -10px; */
    opacity: 0;
    transition: all 0.6s;
  }
  @media only screen and (max-width: 426px) {
    svg {
      height: 24px;
      width: 24px;
    }
  }
  svg path {
    transition: all 0.6s ease;
    transform-origin: center;
  }
  svg .active {
    transform: rotate(90deg);
    transition: all 0.6s ease;
  }
  :last-child {
    border-bottom: none;
  }
`;
const FAQAnswer = styled.div`
  max-height: ${(props) => (props.isActive ? `${props.height}px` : '0')};
  overflow: hidden;
  transition: max-height 0.6s ease;

  div {
    ${Body1}
    color: var(--body);
    padding: 20px 32px 0 0;
    ${(props) =>
      props.isGuideFAQ &&
      css`
        ${Body5};
        padding: 20px 32px 0 0;
        p {
          margin-top: 0;
          :last-child {
            margin-bottom: 0;
          }
          :first-child {
            margin-top: -4px;
          }
        }
      `}
    p {
      margin: 0;
      margin-top: 20px;
      :first-child {
        margin-top: 0;
      }
    }

    @media only screen and (max-width: 426px) {
      ${MbBody3}
    }
  }

  ol {
    padding-left: 18px;
    li {
      margin-top: 6px;
    }
  }

  ul {
    list-style-type: disc;
    list-style-position: outside;
    padding-left: 18px;
    li {
      margin-top: 6px;
    }
  }

  a {
    color: var(--primary);
    display: initial;
    cursor: pointer;

    :hover {
      color: var(--dark-green);
    }
  }

  p {
    margin: 0;
  }
`;

export { FaqSection, FaqTitle, DivFAQ, FAQAnswer };
