import styled, { css } from 'styled-components';
import { body_regular, body_semibold, button_regular, h1_semibold, label_regular } from './typography';

const PricingPageWrapper = styled.div`
  padding-bottom: var(--space-80);
  display: flex;
  flex-direction: column;
  gap: var(--space-80);
  @media only screen and (max-width: 991px) {
    padding-bottom: var(--space-64);
    gap: var(--space-64);
  }
  @media only screen and (max-width: 449px) {
    padding-bottom: var(--space-48);
    gap: var(--space-48);
  }
`;

const HeroSection = styled.div`
  padding: var(--space-80) 0 0 0;
  text-align: center;
  margin: 0 auto;
  h1 {
    ${h1_semibold};
    color: var(--title);
    margin: 0 0 var(--space-40) 0;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
  }
  p {
    ${body_regular};
    color: var(--text-secondary);
    margin: var(--space-24) auto var(--space-64) auto;
    max-width: 720px;
    text-align: center;
  }
  @media only screen and (max-width: 449px) {
    text-align: left;
    padding: var(--space-64) 0 0 0;
    p {
      margin: var(--space-24) 0;
      text-align: left;
    }
  }
`;

const PricingSection = styled.div`
  padding-bottom: var(--space-64);
  @media only screen and (max-width: 991px) {
    padding-bottom: var(--space-40);
  }
  @media only screen and (max-width: 449px) {
    padding-bottom: var(--space-48);
  }
`;
const PriceMenu = styled.div``;
const PriceButton = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: var(--space-40);
  @media only screen and (max-width: 449px) {
    justify-content: flex-start;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: var(--space-20);
  padding: var(--space-8);
  background-color: var(--off-white-550);
  border-radius: var(--radius-16);
  position: relative;
`;

const ToggleOption = styled.span`
  ${button_regular};
  color: var(--title);
  padding: var(--space-2) var(--space-16) 0;
  border-radius: var(--radius-12);
  transition: all 0.3s ease;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  :hover {
    color: ${({ active }) => (active ? 'var(--title)' : 'var(--text-secondary)')};
  }
`;

const WrapSlide = styled.div`
  display: -webkit-inline-box;
  align-items: stretch;
  height: 100%;
`;

const PlanButton = styled.div`
  width: fit-content;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding-top: var(--space-64);
  position: relative;
  .button {
    width: 223px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const TableTitle = styled.p`
  ${body_semibold}
  color: var(--title);
  padding: var(--space-12) var(--space-20);
  margin-top: var(--space-24) !important;
`;

const PriceTable = styled.div`
  padding: var(--space-40) 0 0;
  display: block;
  table {
    display: block;
    width: 100%;
    border-collapse: collapse;
    border: 1px solid var(--border-default);
    border-radius: var(--radius-12);
    :nth-child(2) {
      th {
        border-top: none;
        margin-top: -1px;
      }
    }
    :first-child {
      position: sticky;
      top: ${(props) => props.stickyHeight - 1}px;
      z-index: 9;
      background-color: var(--off-white-100);
      &.topbarContent {
        top: ${(props) => props.stickyHeight - 1}px;
      }
      &.sticky {
        border-radius: 0;
      }
    }
    thead > tr > td {
      border: 1px solid var(--border-default);
      border-style: none solid none none;
      :last-child {
        border-style: none;
      }
    }
    thead > tr > th {
      :first-child {
        width: 630px;
      }
    }
    .title {
      display: flex;
      justify-content: space-between;
      position: relative;
      align-items: center;
      gap: var(--space-12);
    }
    th {
      border: 1px solid var(--border-default);
      border-style: none solid;
      :first-child {
        border-left: none;
      }
      :last-child {
        border-right: none;
      }
    }
    td {
      border: 1px solid var(--border-default);
      border-style: none solid;
      :first-child {
        border-left: none;
      }
      :last-child {
        border-right: none;
      }
    }
    .bordercolor {
      th {
        padding: var(--space-20);
        text-align: center;
        ${body_regular};
        :last-child {
          border-right: none;
        }
        &.isactive {
          background: linear-gradient(180deg, var(--off-white-600) 0%, var(--off-white-200) 100%);
        }
        :first-child {
          text-align: left;
        }
      }
    }
    .icon-div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tab {
      z-index: -1;
      ${body_regular};
      color: var(--title);
      vertical-align: top;
      letter-spacing: 0.02em;
      border: none;
    }
    .tablehead {
      background-color: var(--white);
      padding: 16px 20px;
    }
    th {
      ${body_regular};
      color: var(--title);
      letter-spacing: 0.02em;
      text-align: left;
      width: 18%;
      ${(props) =>
        props.is4Card &&
        css`
          word-break: break-all;
        `}
    }
    td {
      ${button_regular};
      color: var(--title);
      padding: var(--space-12) var(--space-20);
      letter-spacing: 0.02em;
      background-color: var(--off-white-100);
      border-radius: var(--radius-12);
      span {
        ${label_regular};
        color: var(--title);
        display: block;
        letter-spacing: 0.02em;
      }
      h4 {
        margin: 0;
        ${button_regular};
        color: var(--title);
      }
      .spanpadding {
        padding-top: 12px;
      }

      .imagretext {
        color: var(--mid-dark-green);
        margin: 0;
      }
      &.sticky {
        text-align: center;
      }
    }
  }
  p {
    margin: 0;
  }
  table.active {
    display: block;
  }
  @media only screen and (max-width: 991px) {
    padding: 50px 0;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export {
  PricingPageWrapper,
  HeroSection,
  PricingSection,
  PriceMenu,
  PriceButton,
  WrapSlide,
  PlanButton,
  PriceTable,
  ToggleOption,
  ToggleContainer,
  TableTitle
};
