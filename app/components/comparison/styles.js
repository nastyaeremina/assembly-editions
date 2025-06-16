import styled, { css } from 'styled-components';
import {
  Body1,
  Body2,
  Body3,
  Body4,
  Body5,
  Heading3,
  Heading4,
  Heading6,
  MbBody2,
  MbBody3,
  MobileH4,
  Quote
} from '../../styles/styles';

const QuoteSection = styled.div`
  padding: 100px 0 0px;
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    padding: 80px 0 0px;
  }
`;

const ComparisonTable = styled.div`
  padding-bottom: 100px;
  .mobilesecondtable {
    margin-top: 30px;
  }
  h2 {
    margin: 0;
    ${Heading3}
    color: var(--title);
    padding-bottom: 60px;
    @media only screen and (max-width: 450px) {
      padding-bottom: 40px;
    }
  }
  p {
    ${Body3}
    color: var(--body);
    margin-top: -24px;
    margin-bottom: 40px;
    @media only screen and (max-width: 450px) {
      ${MbBody3}
    }
  }
  @media only screen and (max-width: 449px) {
    padding-bottom: 80px;
  }
`;

const MainTableSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media only screen and (max-width: 449px) {
    gap: 40px;
  }
`;

const TableMainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  .table {
    max-width: 661px;
    width: 100%;
    border: 1px solid var(--dark-green);
    padding: 20px;
    border-radius: 4px;
    position: relative;
    .icon-div {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: auto;
        @media only screen and (max-width: 449px) {
          height: 24px;
        }
      }
    }
    ::after {
      content: '';
      position: absolute;
      border-top: 1px solid var(--dark-green);
      max-width: 100vw;
      width: 100vw;
      top: 50%;
      left: 100%;
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
    th {
      @media only screen and (max-width: 449px) {
        display: none;
      }
    }
    p {
      margin: 0;
      ${Body4}
      color: var(--title);
    }
    table {
      border-collapse: collapse;
      width: 100%;
      td {
        text-align: center;
        padding: 16px;
        ${Body4}
        color: var(--title);
        :nth-child(4) {
          background-color: var(--light-green);
        }
        :first-child {
          padding-left: unset;
          text-align: start;
        }
        :nth-child(2),
        :nth-child(3) {
          display: none;
        }
        @media only screen and (max-width: 449px) {
          display: block;
          padding: 16px;

          :nth-child(2) {
            background-color: unset;
          }
          :first-child {
            background-color: var(--light-green);
            padding-left: 16px;
            border-radius: 2px;
            margin-top: 32px;
          }
          :nth-child(2),
          :nth-child(3) {
            width: 50%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: 18px;
            border-bottom: 1px solid var(--border);
          }
          :nth-child(4),
          :nth-child(5) {
            width: 50%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: 18px;
            border-bottom: 1px solid var(--border);
          }
          :nth-child(4) {
            background-color: unset;
          }
        }
      }
      tbody {
        tr {
          :last-child {
            td {
              :nth-child(4)  {
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
                @media only screen and (max-width: 449px) {
                  border-radius: unset;
                }
              }
            }
          }
          :nth-child(2) {
            td {
              :first-child {
                margin-top: unset;
              }
            }
          }
        }
      }
      th {
        padding: 15px 20px;
        border-color: black;
        text-align: center;
        width: 100%;
        :nth-child(2),
        :nth-child(3) {
          display: none;
        }
        :nth-child(4) {
          background-color: var(--light-green);
          border-top-right-radius: 4px;
          border-top-left-radius: 4px;
        }
      }
      tr {
        border-top: 1px solid var(--border);
        .leftside {
          text-align: left;
        }
        :first-child {
          border-top: none;
        }
        @media only screen and (max-width: 449px) {
          border-top: none;
        }
      }
    }
    @media only screen and (max-width: 768px) {
      max-width: unset;
      img {
        height: 24px;
        object-fit: contain;
      }
    }
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 503px;
  h4 {
    ${Body1};
    color: var(--primary);
    margin: 0;
    @media only screen and (max-width: 449px) {
      ${MobileH4};
    }
  }
  @media only screen and (max-width: 768px) {
    gap: 16px;
    h4 {
      margin-top: 4px;
    }
  }
`;

const TitleSection = styled.div`
  h3 {
    ${Heading4};
    color: var(--Title);
    margin: 0;
  }
  p {
    margin: 0;
    margin-top: 12px;
    ${Body4};
    color: var(--body);
    @media only screen and (max-width: 768px) {
      ${Body5};
      margin-top: 8px;
    }
  }
`;

const G2section = styled.div`
  max-width: 1272px;
  width: 100%;
  margin: 0 auto;
  overflow: visible;
  padding: 0 24px 100px;
  h2 {
    margin: 0;
    ${Heading3}
    color: var(--title);
  }
  p {
    padding-top: 16px;
    margin: 0;
    padding-bottom: 32px;
    ${Body3};
    max-width: 780px;
    color: var(--body);
  }
  @media only screen and (max-width: 991px) {
    width: unset;
    overflow: hidden;
    padding-bottom: 80px;
    p {
      ${MbBody3};
      padding-bottom: 16px;
    }
  }
`;
const G2group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  padding-bottom: 40px;
  @media only screen and (max-width: 426px) {
    gap: 12px;
  }
`;
const ButtonGroup = styled.div`
  @media only screen and (max-width: 449px) {
    display: none;
  }
`;
const Groupdetail = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media only screen and (max-width: 426px) {
    gap: 6px;
    svg {
      width: 18px;
      height: 18px;
    }
  }
  p {
    ${Heading6}
    margin:0;
    color: var(--title);
    padding: 0;
  }
  .report {
    color: var(--hover);
  }
`;
const G2criteria = styled.div`
  display: flex;
  gap: 28px;
  width: 1272px;
  margin: 0 auto;
  overflow: visible;
  transition: transform 500ms ease;
  @media only screen and (max-width: 768px) {
    width: unset;
  }
`;
const G2text = styled.div`
  border: 1px solid var(--title);
  border-radius: 4px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 400px;
  h3 {
    margin: 0;
    ${Body1}
    color: var(--title);
  }
  @media only screen and (max-width: 449px) {
    min-width: 100%;
    h3 {
      ${MobileH4}
    }
  }
`;
const G2progressbar = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 20px;
`;
const Processdata = styled.div`
  .progress-number-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .seconddata {
    color: var(--medium-gray);
  }
  span {
    ${Body3}
    display: flex;
    padding-bottom: 5px;
    color: var(--black);
    @media only screen and (max-width: 449px) {
      ${Body4}
    }
  }
  .item-title {
    ${Body4};
    color: var(--medium-gray);
    @media only screen and (max-width: 449px) {
      ${MbBody3}
    }
  }
`;
const ComparisonHide = styled.div`
  border: 1px solid var(--dark-green);
  border-radius: 4px;
  background: var(--white);
`;
const Headingpart = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 20px;
  border-bottom: 1px solid var(--dark-green);
  position: relative;
  h2 {
    font-weight: 400;
    font-size: 32px;
    line-height: 34px;
    text-align: center;
    padding: 0;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  p {
    ${Body5}
    margin:0;
  }
  .mobilecheckmark {
    width: 14px;
    height: 14px;
  }
`;
const Comparisontabledata = styled.div`
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const MobileViewTable = styled.div`
  display: none;
  @media only screen and (max-width: 450px) {
    display: block;
  }
`;
const Carditem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--dark-green);
  border-radius: 4px;
  overflow: hidden;
  padding: 24px 26px;
  p {
    border-right: 1px solid var(--dark-green);
    padding-right: 24px;
    margin: 0;
    margin-right: 24px;
    align-items: center;
    display: flex;
    ${Body2};
    color: var(--title);
    @media only screen and (max-width: 449px) {
      ${MbBody2};
      height: 28px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 24px;
  }
`;
const ComparisonLogo = styled.div`
  background-color: var(--white);
  img {
    height: 38px;
    width: 100%;
    object-fit: contain;
    @media only screen and (max-width: 449px) {
      height: 28px;
    }
  }
`;

const CardMainDiv = styled.div`
  padding-top: 60px;
  :first-child {
    padding-top: 0;
  }
  :last-child {
    padding-bottom: 100px;
  }
  :last-child {
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 450px) {
    padding-top: 40px;
    :last-child {
      padding-bottom: 80px;
    }
    :last-child {
      padding-bottom: 80px;
    }
  }
`;

const Allcard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  padding-top: 40px;
  @media only screen and (max-width: 450px) {
    gap: 20px;
    justify-content: center;
    padding-top: 28px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.div`
  ${Heading4};
  color: var(--title);
`;

const TableDropdown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid var(--border);
  border-radius: 4px;
  cursor: pointer;
  ${(props) =>
    props.isFocus &&
    css`
      border: 1px solid black;
    `}
  p {
    ${Body4}
    margin:0;
    padding: 12px 20px;
    width: 150px;
    text-align: left;
  }
  .dropdownicon {
    margin-right: 20px;
  }
`;
const Dropdownbox = styled.div`
  width: calc(100% - 50px);
  border: 1px solid var(--dark-green);
  box-shadow: 0px 8px 24px var(--black-shadow-15);
  border-radius: 4px;
  background: var(--white);
  position: absolute;
  padding: 8px;
  z-index: 99;
  ${Body4}
  margin-top:10px;
  @media only screen and (max-width: 1024px) {
    width: calc(100% - 40px);
  }
  @media only screen and (max-width: 450px) {
    margin-top: 58px;
  }
`;
const Comparisonname = styled.div`
  width: 100%;
  padding: 4px 8px;
  text-align: left;
  :hover {
    background-color: var(--light-green);
    border-radius: 3px;
  }
  ${(props) =>
    props.isActive &&
    css`
      color: var(--primary);
      background-color: var(--white);
    `}
`;
export {
  QuoteSection,
  ComparisonTable,
  G2section,
  G2group,
  Groupdetail,
  G2criteria,
  G2text,
  G2progressbar,
  Processdata,
  ComparisonHide,
  Headingpart,
  Details,
  Comparisontabledata,
  MobileViewTable,
  Carditem,
  ComparisonLogo,
  Allcard,
  TableDropdown,
  Dropdownbox,
  Comparisonname,
  Title,
  CardMainDiv,
  TableMainDiv,
  ButtonGroup,
  LeftSection,
  TitleSection,
  MainTableSection
};
