import styled, { css } from 'styled-components';
import {
  Body1,
  Body2,
  Body3,
  Body4,
  Body5,
  FooterText,
  Heading2,
  Heading3,
  Heading4,
  Label,
  MbBody3,
  MbPrimaryBtn,
  MobileH1,
  MobileH2,
  MobileH4,
  TableText
} from './styles';

const HeroSection = styled.div`
  padding: 180px 0 0 0;
  text-align: center;
  margin: 0 auto;
  h1 {
    ${Heading3};
    color: var(--title);
    margin: 0 0 40px 0;
    max-width: 780px;
    width: 100%;
    margin: 0 auto;
  }
  span {
    margin: 0;
    color: var(--primary);
    ${Heading2}
  }
  p {
    ${Body2};
    color: var(--body);
    letter-spacing: 0.02em;
    margin: 16px 0 40px 0;
  }
  @media only screen and (max-width: 991px) {
    padding: 180px 0px 80px;
  }
  @media only screen and (max-width: 749px) {
    padding: 116px 0px 0;
    h1 {
      ${MobileH2};
      color: var(--title);
      margin: 0 0 40px 0;
      max-width: 780px;
      width: 100%;
      margin: 0 auto;
    }
    span {
      margin: 0;
      color: var(--primary);
      ${MobileH2}
    }
    p {
      font-size: 17px;
      line-height: 21px;
      color: var(--body);
      letter-spacing: 0.02em;
      margin: 20px 0 32px 0;
    }
  }
`;

const PricingSection = styled.div``;
const PriceMenu = styled.div``;
const PriceButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
  gap: 5px;
  @media only screen and (max-width: 449px) {
    justify-content: center;
  }
`;
const YearlyButton = styled.div`
  padding: 4px 12px;
  border-radius: 4px;
  button {
    color: var(--medium-gray);
    letter-spacing: 0.01em;
    ${Label};
  }
  &.active {
    background-color: var(--light-green);
    button {
      color: var(--black);
    }
  }
`;

const SaveButton = styled.div`
  padding: 4px 12px;
  border-radius: 4px;
  background-color: var(--light-green);
  ${MbPrimaryBtn};
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding-left: 5px;
`;

const ToggleOption = styled.span`
  ${MbPrimaryBtn};
  font-weight: ${({ active }) => (active ? '500' : '400')};
  color: ${({ active }) => (active ? 'var(--title)' : 'var(--body)')};
`;

const ToggleSwitch = styled.div`
  width: 28px;
  height: 16px;
  background-color: var(--title);
  border-radius: 12px;
  position: relative;
  transition: background-color 0.3s ease;
  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${({ active }) => (active ? '14px' : '2px')};
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 50%;
    transition: left 0.3s ease;
  }
`;

const MonthlyButton = styled.div`
  padding: 7px 20px;
  border-radius: 4px;
  button {
    color: var(--medium-gray);
    ${Label};
    letter-spacing: 0.01em;
  }
  &.active {
    background-color: var(--light-green);
    button {
      color: var(--black);
    }
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
  padding-top: 100px;
  position: relative;
  a {
    cursor: pointer;
    display: flex;
    flex-direction: row-reverse;
    padding: 10px 0;
    justify-content: center;
    font-size: 17px !important;
    line-height: 21px !important;
    gap: 8px;
    width: 209px;
    white-space: nowrap;
    img {
      margin-right: unset !important;
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const PriceTable = styled.div`
  padding: 25px 0 0;
  display: block;
  table {
    display: block;
    width: 100%;
    border-collapse: collapse;
    border: 1px solid var(--border);
    border-style: none solid solid;
    border-radius: 2px;
    :nth-child(2) {
      th {
        border-top: none;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        margin-top: -1px;
      }
    }
    :first-child {
      position: sticky;
      top: 81px;
      border-style: none solid none solid;
      z-index: 9;
      background-color: var(--white);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      &.topbarContent {
        top: 126px;
      }
    }
    thead > tr > td {
      border: 1px solid var(--border);
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
    }
    th {
      border: 1px solid var(--border);
      :first-child {
        border-left: none;
      }
      :last-child {
        border-right: none;
      }
    }
    td {
      border: 1px solid var(--border);
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
        padding: 19px 20px;
        text-align: center;
        ${Body1};
        :last-child {
          border-right: none;
        }
        &.isactive {
          background: linear-gradient(180deg, var(--green-shadow-20) 0%, var(--transparent-color-2) 70%);
        }
      }
    }
    .icon-div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tablepadding {
      padding: 12px 20px;
    }
    .tab {
      z-index: -1;
      background-color: var(--table-color);
      ${Body3};
      color: var(--title);
      padding: 12px 20px;
      vertical-align: top;
      letter-spacing: 0.02em;
      border: none;
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }
    .tablehead {
      background-color: var(--white);
      padding: 16px 20px;
    }
    .leftradius {
      border-radius: 4px 0px 0px 0px;
    }
    .tabletext {
      ${TableText};
      color: var(--dark-green);
    }
    .subtext {
      ${FooterText};
      color: var(--dark-gray);
    }
    th {
      ${Body3};
      letter-spacing: 0.02em;
      padding: 12px 20px;
      text-align: left;
      width: 18%;
      ${(props) =>
        props.is4Card &&
        css`
          word-break: break-all;
        `}
      .amount {
        margin: 0 0 4px 0;
        color: var(--title);
        ${TableText};
      }
      .spantext {
        ${FooterText};
        color: var(--dark-gray);
        display: block;
      }
    }
    td {
      ${Body3};
      color: var(--title);
      padding: 12px 20px;
      vertical-align: top;
      letter-spacing: 0.02em;
      span {
        ${Body5};
        color: var(--title);
        display: block;
        letter-spacing: 0.02em;
      }
      h4 {
        margin: 0;
        ${Body4};
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
const PricingButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 449px) {
    gap: 12px;
  }
`;

export {
  HeroSection,
  PricingSection,
  PriceMenu,
  PriceButton,
  YearlyButton,
  MonthlyButton,
  WrapSlide,
  PlanButton,
  PriceTable,
  PricingButton,
  SaveButton,
  ToggleSwitch,
  ToggleOption,
  ToggleContainer
};
