import styled, { css } from 'styled-components';
import { body_regular, button_regular, h2_semibold, h3_semibold, h4_regular } from '../../styles/typography';

const FaqSection = styled.div`
  padding: var(--space-64) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-48) 0;
  }
  @media only screen and (max-width: 749px) {
    padding: var(--space-40) 0;
  }
  li {
    padding-bottom: 0;
    :last-child {
      border-bottom: 0;
    }
  }
  ${(props) =>
    props.isGuideFAQ &&
    css`
      padding: var(--space-64) 0;
      @media only screen and (max-width: 449px) {
        padding: var(--space-48) 0;
      }
    `}
`;
const FaqTitle = styled.div`
  margin-bottom: var(--space-48);
  :hover {
    .copy-icon {
      opacity: 1;
    }
  }
  h2 {
    ${h2_semibold};
    margin: 0;
    color: var(--title);
    text-align: center;
    @media only screen and (max-width: 449px) {
      text-align: left;
    }
  }
  ${(props) =>
    props.isGuideFAQ &&
    css`
      display: inline-flex;
      align-items: center;
      gap: 10px;
      h2 {
        ${h3_semibold}
      }
      .copy-icon {
        opacity: 0;
        cursor: pointer;
        transition: all 0.3s;
      }
      .copy-icon {
        :hover {
          opacity: 1;
          transition: all 0.3s;
        }
      }
      a {
        display: flex;
        :focus-visible {
          .copy-icon {
            opacity: 1;
            transition: all 0.3s;
          }
          outline: 1px solid var(--link-default);
          border-radius: var(--radius-4);
        }
      }
    `}

  @media only screen and (max-width: 449px) {
    margin-bottom: var(--space-12);
  }
`;

const DivFAQ = styled.div`
  border-bottom: 1px solid var(--border-default);
  padding-bottom: var(--space-20);
  transition: all 0.6s ease;
  ${(props) =>
    props.isGuideFAQ &&
    css`
      border: none;
      border-bottom: 1px solid var(--border-default);
      :last-child {
        border-bottom: 1px solid var(--border-default) !important;

        @media only screen and (max-width: 449px) {
          padding-bottom: var(--space-20) !important ;
        }
      }
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
        padding: var(--space-20) 0px 0;
        gap: var(--space-20);
        > div > svg {
          width: 20px;
          height: 20px;
        }

        @media only screen and (max-width: 449px) {
          padding: 28px 0px 0;
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
    p {
      margin: 0;
      ${h4_regular}
      color: var(--title);
      display: inline;
    }
    ${(props) =>
      props.isGuideFAQ &&
      css`
        p {
          ${body_regular}
        }
        .copy-icon {
          display: inline-flex;
          margin-left: var(--space-10);
          a {
            display: flex;
            :focus-visible {
              .faq-copy-icon {
                opacity: 1;
                transition: all 0.3s;
              }
              outline: 1px solid var(--link-default);
              border-radius: var(--radius-4);
            }
          }
        }
      `}
  }
  .accordion-content {
  }
  .faq-copy-icon {
    width: 18px;
    height: 18px;
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
        ${button_regular};
        padding: var(--space-8) var(--space-38) 0 0;
        p {
          margin-top: 0;
          :last-child {
            margin-bottom: 0;
          }
        }
        a {
          ${button_regular};
          color: var(--link-default);
          :hover {
            color: var(--link-hover);
          }
        }
        em {
          ${button_regular};
          color: var(--text-secondary);
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
    ${body_regular}
    color: var(--link-default);
    display: initial;
    cursor: pointer;

    :hover {
      color: var(--link-hover);
    }
  }

  p {
    margin: 0;
  }
`;

export { FaqSection, FaqTitle, DivFAQ, FAQAnswer };
