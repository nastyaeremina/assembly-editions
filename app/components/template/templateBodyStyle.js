import styled, { css } from 'styled-components';
import { body, footercolor, greendark, greenlight, lightgray, primary, title } from '../../styles/color';
import {
  Body3,
  Body4,
  Body5,
  HeaderFont,
  Heading4,
  Heading5,
  Heading6,
  MbBody3,
  MbBody4,
  MbBody5
} from '../../styles/styles';

const TemplateBody = styled.div`
  display: flex;
  gap: 60px;
  justify-content: space-between;
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    padding-bottom: 80px;
  }
`;
const RightSection = styled.div`
  max-width: 306px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex-direction: row;
    max-width: 100%;
  }
  @media only screen and (max-width: 449px) {
    flex-direction: column;
  }
`;
const AboutSection = styled.div`
  padding: 0px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  @media only screen and (max-width: 449px) {
    padding: 0;
  }
  ${(props) =>
    props.isDirectory &&
    css`
      padding: 0;
    `}
`;
const Title = styled.div`
  padding: 0 12px 16px;
  border-bottom: 1px solid ${title};
  ${Heading6};
  color: ${title};
  @media only screen and (max-width: 449px) {
    padding: 0 0 16px;
  }
`;
const Info = styled.div`
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .app-button {
    a {
      ${HeaderFont};
      padding: 8px 32px;
    }
  }
  @media only screen and (max-width: 449px) {
    padding: 0 0 16px;
    ${(props) =>
      props.hasSpacing &&
      css`
        padding: 0;
      `}
  }
`;
const InfoTitle = styled.h5`
  ${Body5}
  color: ${title};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;
`;
const Tooltip = styled.div`
  position: absolute;
  width: 234px;
  top: 25px;
  left: -6px;
  padding: 12px;
  background-color: ${greendark};
  color: ${greenlight};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  p {
    ${Body5}
    color: ${greenlight};
    margin: 0;
  }
  span {
    ${Body4}
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const InfoDescription = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;
  ${Body5}
  color: ${lightgray};
  margin: 0;
  a {
    color: ${primary};
    display: inline-flex;
    :hover {
      color: ${greendark};
    }
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AppsSection = styled.div`
  padding: 0px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  @media only screen and (max-width: 449px) {
    padding: 0;
  }
`;
const ListSection = styled.ul``;
const ListItem = styled.li`
  a {
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  svg path {
    transition: all 300ms ease;
  }
  .HoverArrow__linePath {
    opacity: 0;
    fill: none;
  }
  .HoverArrow {
    position: relative;
    stroke-width: 2px;
    fill: none;
    stroke: ${greendark};
    margin-left: 8px;
    --arrowSpacing: 5px;
    --arrowHoverTransition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
    --arrowHoverOffset: translateX(3px);
  }
  :hover .HoverArrow__linePath {
    opacity: 1;
    fill: none;
    fill: black;
  }
  :hover .HoverArrow__tipPath {
    transform: translateX(2px);
  }
  @media only screen and (min-width: 449px) {
    :hover {
      background-color: ${footercolor};
      border-radius: 4px;
    }
  }

  @media only screen and (max-width: 449px) {
    a {
      padding: 12px 0;
    }
  }
`;
const ListName = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const ListIcon = styled.div``;

const LableName = styled.div`
  ${MbBody5}
  color: ${title};
`;

const TemplateContent = styled.div`
  width: 100%;
  h3 {
    ${Heading4};
    color: ${title};
    margin: 30px 0 0;
    :first-child {
      margin: 0;
    }
  }
  h3 + p {
    margin: 12px 0 0;
  }
  h4 > b,
  h4 {
    ${Heading5};
    font-weight: 400;
    color: ${title};
    margin: 20px 0 0;
  }
  h4 + p {
    margin: 6px 0 0;
  }
  b {
    font-weight: 500;
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
  p {
    ${Body4};
    color: ${body};
    margin: 16px 0 0;
  }
  a {
    color: ${primary};
    display: initial;
    cursor: pointer;
    :hover {
      color: #00160e;
    }
  }
  img {
    border-radius: 4px;
    border: 0.4px solid #dfe1e4;
    display: flex;
    margin: 16px auto 0;
    width: inherit;
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
  ul {
    list-style-type: disc;
    margin-left: 15px;
    margin-top: 16px;
    li {
      margin-top: 8px;
      p {
        margin: 0;
      }
      strong {
        font-weight: 500;
        color: ${title};
      }
      a {
        display: inline-block;
        ${Body3}
        color: ${primary};
        @media only screen and (max-width: 450px) {
          ${MbBody3}
        }
        :hover {
          color: ${title};
        }
      }
    }
    li::marker {
      color: ${body};
    }
    span {
      font-weight: 500;
      color: ${title};
    }
  }
  @media only screen and (max-width: 449px) {
    p {
      ${MbBody4}
    }
    h3 {
      margin: 24px 0 0;
    }
  }
`;
export {
  TemplateBody,
  RightSection,
  AboutSection,
  Title,
  Info,
  InfoTitle,
  InfoDescription,
  InfoDiv,
  AppsSection,
  ListSection,
  ListItem,
  ListName,
  ListIcon,
  LableName,
  TemplateContent,
  Tooltip
};
