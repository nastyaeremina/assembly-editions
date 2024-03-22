import styled, { css } from 'styled-components';
import { Body3, Body5, Heading3, Heading4, Heading5, Heading6, MbBody3, MbBody4, MobileH4 } from '../../styles/styles';
import { body, primary, title } from '../../styles/color';

const GuideCenter = styled.div`
  max-width: 740px;
  width: 100%;
  padding: 90px 50px 0px 50px;
  margin: 0 auto;
  @media only screen and (max-width: 749px) {
    padding: 40px 24px 40px;
  }
`;
const MainContent = styled.div``;
const FAQSection = styled.div`
  max-width: 740px;
  width: 100%;
  margin: 0 auto;
  padding: 0 26px;
  @media only screen and (max-width: 749px) {
    padding: 0;
  }
`;
const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const PageTitle = styled.h2`
  ${Heading3};
  color: ${title};
  margin: 0;
`;
const Caption = styled.p`
  ${Body3};
  color: ${body};
  margin: 0;
  @media only screen and (max-width: 449px) {
    ${MbBody3}
  }
`;
const GuideDetail = styled.div`
  padding: 40px 0;
  h3 > b,
  h3 {
    ${Heading5};
    font-weight: 400;
    color: ${title};
    margin: 40px 0 0;
    display: flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
    :first-child {
      margin: 0;
    }
    :hover {
      .copy-icon {
        opacity: 1;
        transition: all 0.3s;
      }
    }
  }
  h4 > b,
  h4 {
    ${Heading6};
    font-weight: 400;
    color: ${title};
    margin: 20px 0 0;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    :first-child {
      margin: 0;
    }
    :hover {
      .copy-icon-h4 {
        opacity: 1;
        transition: all 0.3s;
      }
    }
  }
  h4 + p {
    margin: 6px 0 0;
  }
  b {
    font-weight: 600;
  }
  a {
    color: ${primary};
    display: initial;
    :hover {
      color: #00160e;
    }
  }
  p {
    ${Body5};
    color: ${body};
    margin: 8px 0 0;
    a {
      color: ${primary};
      display: initial;
      i {
        font-style: italic;
        color: ${primary};
        :hover {
          color: #00160e;
        }
      }
      :hover {
        color: #00160e;
      }
      u {
        text-decoration: none;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    margin-top: 16px;
    border-radius: 4px;
    border: 0.4px solid #dfe1e4;
  }
  video {
    width: 100%;
    height: 100%;
    margin-top: 16px;
    border-radius: 4px;
    border: 0.4px solid #dfe1e4;
  }
  ol {
    padding-left: 20px;
    li {
      ::marker {
        font-size: 15px;
        color: ${body};
      }
    }
  }
  i {
    font-style: italic;
    color: ${body};
  }
  ul {
    list-style-type: disc;
    padding-left: 20px;
    li {
      ${Body5};
      color: ${body};
    }
  }
  table {
    width: 100%;
    border: 1px solid #00160e;
    margin-bottom: 40px;
    margin-top: 20px;
    p {
      margin: 0;
    }
    @media only screen and (max-width: 479px) {
      margin-top: 20px;
      margin-bottom: 0px;
    }
    tr {
      :nth-child(odd) {
        background-color: #f8f9fb;
      }
    }
    th {
      background-color: #e3ffee;
      border: 1px solid #00160e;
      padding: 12px 20px;
      text-align: left;
      ${Heading6};
      font-weight: 400;
      color: ${title};
      p > b,
      p {
        ${Heading6};
        font-weight: 400;
        color: ${title};
      }
    }
    td {
      border: 1px solid #00160e;
      border-style: none solid none solid;
      padding: 16px 20px;
      ${Body5};
      color: ${title};
      vertical-align: top;
      p {
        ${Body5};
        color: ${title};
        padding-top: 20px;
        :first-child {
          padding-top: 0;
        }
        i {
          font-style: italic !important;
        }
      }
    }
  }
  .copy-icon {
    width: 24px;
    height: 24px;
    opacity: 0;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
    margin-top: 0;
    display: flex;
    :hover {
      opacity: 1;
      transition: all 0.3s;
    }
  }
  .copy-icon-h4 {
    width: 18px;
    height: 18px;
    opacity: 0;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
      opacity: 1;
      transition: all 0.3s;
    }
  }
  @media only screen and (max-width: 449px) {
    padding: 40px 0 0;
    h4 {
      ${MobileH4}
    }
    p {
      ${MbBody4}
    }
  }
`;
export { GuideCenter, MainContent, FAQSection, HeroSection, PageTitle, Caption, GuideDetail };
