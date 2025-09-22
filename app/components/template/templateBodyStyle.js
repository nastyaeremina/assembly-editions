import styled, { css } from 'styled-components';
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
import { body_regular, button_regular, button_semibold } from '../../styles/typography';

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
  padding: 0 var(--space-12) var(--space-16);
  border-bottom: 1px solid var(--title);
  ${Heading6};
  color: var(--title);
  @media only screen and (max-width: 449px) {
    padding: 0 0 var(--space-16);
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-32);
  @media only screen and (max-width: 449px) {
    padding: 0 0 16px;
    ${(props) =>
      props.hasSpacing &&
      css`
        padding: 0;
      `}
  }
`;
const InfoTitle = styled.div`
  margin: 0;
  display: flex;
  align-items: flex-start;
  gap: var(--space-8);
  p {
    color: var(--title);
    ${button_semibold};
    margin: 0;
  }
`;
const InfoDescription = styled.p`
  display: flex;
  gap: var(--space-8);
  align-items: flex-start;
  ${body_regular}
  color: var(--title);
  margin: 0;
  a {
    color: var(--link-default);
    ${body_regular}
    display: inline-flex;
    :hover {
      color: var(--link-hover);
    }
    :focus-visible {
      border-radius: var(--radius-8);
      outline: 1px solid var(--link-default);
    }
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
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
    stroke: var(--dark-green);
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
      background-color: var(--footer);
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
  color: var(--title);
`;

const TemplateContent = styled.div`
  width: 100%;
  h3 {
    ${Heading4};
    color: var(--title);
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
    color: var(--title);
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
  p {
    ${Body4};
    color: var(--body);
    margin: 16px 0 0;
  }
  a {
    color: var(--primary);
    display: initial;
    cursor: pointer;
    :hover {
      color: var(--dark-green);
    }
  }
  img {
    border-radius: 4px;
    border: 0.4px solid var(--platinum-gray);
    display: flex;
    margin: 16px auto 0;
    width: inherit;
  }
  video {
    width: inherit;
    margin: 16px auto 0;
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
        color: var(--title);
      }
      a {
        display: inline-block;
        ${Body3}
        color: var(--primary);
        @media only screen and (max-width: 450px) {
          ${MbBody3}
        }
        :hover {
          color: var(--title);
        }
      }
    }
    li::marker {
      color: var(--body);
    }
    span {
      font-weight: 500;
      color: var(--title);
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
  TemplateContent
};
