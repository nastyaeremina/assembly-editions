import styled, { css } from 'styled-components';
import { body_regular, h2_semibold, h4_regular, label_regular } from '../../styles/typography';

const FaqSection = styled.div`
  padding: var(--space-64) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-40) 0;
  }
  @media only screen and (max-width: 749px) {
    padding: var(--space-48) 0;
  }
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
    ${(props) =>
      props.isGuideFAQ &&
      css`
        padding: 40px 0;
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
  margin-bottom: var(--space-48);
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
    ${h2_semibold};
    margin: 0;
    color: var(--title);
    text-align: center;
    ${(props) =>
      props.isGuideFAQ &&
      css`
        ${body_regular};
      `};
    @media only screen and (max-width: 449px) {
      text-align: left;
    }
  }
  @media only screen and (max-width: 449px) {
    margin-bottom: var(--space-24);
  }
`;

const DivFAQ = styled.div`
  border-bottom: 1px solid var(--border-default);
  padding-bottom: var(--space-20);
  transition: all 0.6s ease;
  ${(props) =>
    props.isGuideFAQ &&
    css`
      padding-bottom: var(--space-24);
    `}
  .accordion-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: var(--space-20);
    cursor: pointer;
    > div > svg {
      margin-top: var(--space-4);
      display: flex;
    }
    ${(props) =>
      props.isGuideFAQ &&
      css`
        padding: 24px 0px 0;
        > div > svg {
          width: 20px;
          height: 20px;
        }
        @media only screen and (max-width: 449px) {
          padding: 28px 0px 0;
          > div > svg {
            width: 20px;
            height: 20px;
          }
        }
      `}
    :hover {
      .faq-copy-icon {
        opacity: 1;
        transition: all 0.3s;
      }
    }
    @media only screen and (max-width: 449px) {
      padding: var(--space-20) 0 0;
      > div > svg {
        margin-top: var(--space-5);
        width: 18px;
        height: 18px;
      }
    }
  }
  .accordion-heading {
    ${h4_regular}
    color: var(--title);
    margin: 0 var(--space-20) 0 0;
    ${(props) =>
      props.isGuideFAQ &&
      css`
        ${body_regular};
        display: inline-flex;
        gap: var(--space-10);
        align-items: center;
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
  svg path {
    transition: all 0.6s ease;
    transform-origin: center;
  }
  svg .active {
    transform: rotate(90deg);
    transition: all 0.6s ease;
  }
`;
const FAQAnswer = styled.div`
  max-height: ${(props) => (props.isActive ? `${props.height}px` : '0')};
  overflow: hidden;
  transition: max-height 0.6s ease;

  div {
    ${body_regular}
    color: var(--text-secondary);
    padding: var(--space-8) var(--space-38) 0 0;
    ${(props) =>
      props.isGuideFAQ &&
      css`
        ${label_regular};
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
      margin-top: var(--space-8);
      :first-child {
        margin-top: 0;
      }
    }
    @media only screen and (max-width: 449px) {
      padding: var(--space-16) 0 0 0;
    }
  }

  ol {
    padding-left: var(--space-18);
    li {
      margin-top: var(--space-6);
    }
  }

  ul {
    list-style-type: disc;
    list-style-position: outside;
    padding-left: var(--space-18);
    li {
      margin-top: var(--space-6);
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
