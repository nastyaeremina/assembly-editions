import styled from 'styled-components';
import { Body2, Body3, Body4, Body5, Heading2, Heading3, Heading4, Heading6, Quote } from '../../styles/styles';

const QuoteSection = styled.div`
  padding: 100px 0 0px;
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    padding: 80px 0 0px;
  }
`;

const ComparisonTable = styled.div`
  .mobilesecondtable {
    margin-top: 30px;
  }
  h2 {
    margin: 0;
    padding-top: 100px;
    ${Heading3}
    color: ${({ theme }) => theme.colors.title};
    padding-bottom: 40px;
    @media only screen and (max-width: 426px) {
      padding-top: 80px;
    }
  }
  .secondheading {
    border-top-right-radius: 4px;
    border-style: solid solid none none;
    border-width: 1px;
    /* border-right: none; */
    ${Quote}
  }
  table {
    border-collapse: separate;
    width: 100%;
    @media only screen and (max-width: 450px) {
      display: none;
    }
    .radius {
      border-radius: 4px 0px 0px 0px;
      border-style: solid solid none solid;
      border-width: 1px;
    }

    td {
      border: 1px solid black;
      border-style: none solid solid none;
      text-align: right;
      padding: 16px 20px;
      ${Body3}
      color: ${({ theme }) => theme.colors.title};
    }
    th {
      padding: 26px 90px;
      border-color: black;
      text-align: center;
      @media only screen and (max-width: 1024px) {
        padding: 16px 20px;
      }
    }
    tr {
      .leftside {
        text-align: left;
      }
      &:nth-child(1) {
        td {
          &:nth-child(1) {
            border-style: none;
          }
          &:nth-child(2) {
            border-style: solid solid solid none;
          }
          &:nth-child(3) {
            border-style: solid solid solid none;
          }
        }
      }
      &:nth-child(1) {
        td {
          &:nth-child(1) {
            border-style: solid;
          }
        }
      }
      td {
        &:nth-child(1) {
          border-style: none solid solid solid;
        }
      }
    }
  }
`;

const G2section = styled.div`
  h2 {
    margin: 0;
    padding-top: 50px;
    ${Heading3}
    color: ${({ theme }) => theme.colors.title};
    padding-bottom: 40px;
    @media only screen and (max-width: 426px) {
      padding-top:40px;
    }
  }
`;
const G2group = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  padding-bottom: 32px;
  @media only screen and (max-width: 426px) {
    justify-content: flex-end;
    gap: 12px;
    padding-bottom: 28px;
  }
`;
const Groupdetail = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .reporticon {
    width: 24px;
    height: 24px;
  }
  @media only screen and (max-width: 1024px) {
    svg {
      width: 13px;
      height: 13px;
    }
    .reporticon {
      width: 18px;
      height: 18px;
    }
  }
  @media only screen and (max-width: 426px) {
    gap: 6px;
    svg {
      width: 10px;
      height: 10px;
    }
    .reporticon {
      width: 18px;
      height: 18px;
    }
  }
  p {
    ${Body3}
    margin:0;
    color: ${({ theme }) => theme.colors.title};
    @media only screen and (max-width: 426px) {
      ${Body5}
    }
  }
  .report {
    color: ${({ theme }) => theme.colors.hover};
  }
`;
const G2criteria = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px 80px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 426px) {
    gap: 40px;
  }
`;
const G2text = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 572px; */
  width: 100%;
  @media only screen and (max-width: 768px) {
    /* max-width: 375px; */
    max-width: 100%;
  }
  h3 {
    margin: 0;
    ${Heading4}
    color: ${({ theme }) => theme.colors.title};
  }
`;
const G2progressbar = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-top: 12px;
  @media only screen and (max-width: 1024px) {
    margin-top: 6px;
  }
`;
const Processdata = styled.div`
  .seconddata {
    color: #757575;
  }
  span {
    ${Heading6}
    display: flex;
    justify-content: flex-end;
    padding-bottom: 5px;
    color: #000000;
  }
`;
const ComparisonHide = styled.div`
  border: 1px solid #00160e;
  border-radius: 4px;
  background: #ffffff;
`;
const Headingpart = styled.div`
  display:flex;
  justify-content:center;
  padding: 20px 68px;
  border-bottom: 1px solid #00160e;
  h2 {
    font-weight: 400;
    font-size: 32px;
    line-height: 34px;
    text-align:center;
    padding:0;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  gap:12px;
  p {
    ${Body5}
    margin:0;
  }
  .mobilecheckmark {
    width:14px;
    height:14px;
  }
`;
const Comparisontabledata = styled.div`
    padding:14px 16px;
    display:flex;
    flex-direction:column;
    gap:10px;
`
const MobileViewTable = styled.div`
  display: none;
  @media only screen and (max-width: 450px){
    display:block;
  }
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
  MobileViewTable
};
