import styled, { css } from 'styled-components';
import {
  Body3,
  Body5,
  HeaderFont,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  MbBody3,
  MbBody4,
  MobileH4
} from '../../styles/styles';

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
  color: var(--title);
  margin: 0;
`;
const Caption = styled.p`
  ${Body3};
  color: var(--body);
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
    color: var(--title);
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
    color: var(--title);
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
    font-weight: 500;
  }
  a {
    color: var(--primary);
    display: initial;
    :hover {
      color: var(--dark-green);
    }
  }
  p {
    ${Body5};
    color: var(--body);
    margin: 8px 0 0;
    a {
      color: var(--primary);
      display: initial;
      i {
        font-style: italic;
        color: var(--primary);
        :hover {
          color: var(--dark-green);
        }
      }
      :hover {
        color: var(--dark-green);
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
    border: 0.4px solid var(--platinum-gray);
  }
  video {
    width: 100%;
    height: 100%;
    margin-top: 16px;
    border-radius: 4px;
    border: 0.4px solid var(--platinum-gray);
  }
  ol {
    padding-left: 20px;
    li {
      ::marker {
        font-size: 15px;
        color: var(--body);
      }
    }
  }
  i {
    font-style: italic;
    color: var(--body);
  }
  ul {
    list-style-type: disc;
    padding-left: 20px;
    li {
      ${Body5};
      color: var(--body);
    }
  }
  table {
    width: 100%;
    margin-bottom: 40px;
    margin-top: 20px;
    box-shadow: var(--border) 0px 0px 0px 1px;
    border-radius: 3px;
    p {
      margin: 0;
    }
    @media only screen and (max-width: 479px) {
      margin-top: 20px;
      margin-bottom: 0px;
    }
    tr {
      :nth-child(odd) {
        background-color: var(--table-color);
      }
      :last-child {
        td {
          :first-child {
            border-radius: 0 0 0 3px;
          }
          :last-child {
            border-radius: 0 0 3px 0;
          }
        }
      }
      :first-child {
        border-bottom: 1px solid var(--border);
      }
    }
    th {
      background-color: var(--table-color);
      padding: 12px 20px;
      text-align: left;
      ${HeaderFont};
      color: var(--title);
      p > b,
      p {
        ${HeaderFont};
        color: var(--title);
      }
      :first-child {
        border-radius: 3px 0 0 0;
      }
      :last-child {
        border-radius: 0 3px 0 0;
      }
    }
    td {
      padding: 12px 20px;
      ${Body5};
      color: var(--title);
      vertical-align: top;
      p {
        ${Body5};
        color: var(--title);
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
