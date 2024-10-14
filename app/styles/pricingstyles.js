import styled, { css } from 'styled-components';
import {
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
  MobileH1,
  MobileH2,
  MobileH4,
  TableText
} from './styles';

const HeroSection = styled.div`
  padding: 180px 0 100px 0;
  text-align: center;
  margin: 0 auto;
  h1 {
    ${Heading2};
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
    margin: 20px 0 32px 0;
  }
  @media only screen and (max-width: 991px) {
    padding: 180px 0px 80px;
  }
  @media only screen and (max-width: 749px) {
    padding: 150px 0px 80px;
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
  justify-content: center;
  padding-bottom: 32px;
  @media only screen and (max-width: 749px) {
    padding-bottom: 28px;
  }
`;
const YearlyButton = styled.div`
  padding: 7px 20px;
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
  a {
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const PriceTable = styled.div`
  padding: 100px 0 0;
  display: block;
  table {
    display: none;
    width: 100%;
    border-collapse: collapse;
    border: 1px solid var(--dark-green);
    border-style: none solid solid;
    :first-child {
      position: sticky;
      top: 83px;
      border-style: none solid none solid;
      z-index: 9;
    }
    thead > tr > td {
      border: 1px solid var(--dark-green);
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
    th {
      border: 1px solid var(--dark-green);
      :first-child {
        border-left: none;
      }
      :last-child {
        border-right: none;
      }
    }
    td {
      border: 1px solid var(--dark-green);
      border-style: none solid;
      :first-child {
        border-left: none;
      }
      :last-child {
        border-right: none;
      }
    }
    tr {
      :nth-child(even) {
        td {
          background: linear-gradient(0deg, var(--table-color) 0%, var(--table-color) 100%), var(--white);
        }
      }
    }
    .bordercolor {
      th {
        color: var(--light-green);
        border-right: 1px solid var(--light-green);
        :last-child {
          border-right: none;
        }
      }
    }
    .tablepadding {
      padding: 12px 20px;
    }
    .tab {
      position: sticky;
      top: 232px;
      z-index: 1;
      background-color: var(--light-green);
      ${Body3};
      color: var(--title);
      padding: 16px 20px;
      vertical-align: top;
      letter-spacing: 0.02em;
    }
    .tablehead {
      background-color: var(--white);
      padding: 16px 20px;
    }
    .sticky {
      position: sticky;
      top: 215px;
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
      background-color: var(--dark-green);
      color: var(--light-green);
      letter-spacing: 0.02em;
      padding: 12px 20px;
      text-align: left;
      width: 200px;
      position: sticky;
      top: 83px;
      ${(props) =>
        props.is4Card &&
        css`
          /* width: 190px; */
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
      padding: 16px 20px;
      vertical-align: top;
      letter-spacing: 0.02em;
      position: sticky;
      top: 84px;
      z-index: -99;
      background: var(--white);
      span {
        ${Body5};
        color: var(--title);
        display: block;
        letter-spacing: 0.02em;
      }

      p {
        color: var(--body);
        ${Body5};
        margin: 4px 0 0 0;
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
    }
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
  PricingButton
};
