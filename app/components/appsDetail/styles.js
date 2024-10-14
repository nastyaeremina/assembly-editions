import styled, { css } from 'styled-components';
import {
  Body3,
  Body4,
  Body5,
  HeaderFont,
  Heading3,
  Heading4,
  Heading5,
  MbBody3,
  MbBody4,
  MobileH4
} from '../../styles/styles';

const AppDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 80px;
  }
  @media only screen and (max-width: 449px) {
    gap: 20px;
  }
`;
const DetailTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media only screen and (max-width: 449px) {
    gap: 12px;
  }
`;
const AppLogo = styled.div`
  @media only screen and (max-width: 449px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;
const Caption = styled.div`
  ${Body3};
  color: var(--body);
  @media only screen and (max-width: 449px) {
    ${MbBody3};
  }
`;
const Title = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  h3 {
    ${Heading3};
    color: var(--title);
    margin: 0;
  }
  @media only screen and (max-width: 449px) {
    h3 {
      ${MobileH4}
    }
  }
`;

const DetailContent = styled.div`
  display: flex;
  gap: 30px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 80px;
  }
`;

const LeftContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const RightContent = styled.div`
  max-width: 308px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
const ImageSection = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  .left-arrow {
    display: none;
  }
  .right-arrow {
    display: none;
  }

  img {
    border-radius: 4px;
    border: 1px solid var(--border);
    object-fit: cover;
    cursor: pointer;
    user-select: none;
  }
  .big-image {
    max-height: fit-content;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
  ${(props) =>
    !props.isHide &&
    css`
      :hover {
        .left-arrow {
          display: flex;
          left: 20px;
          top: calc(50% - 19px);
        }
        .right-arrow {
          display: flex;
          right: 20px;
          top: calc(50% - 19px);
        }
      }
    `}
  @media only screen and (max-width: 1024px) {
    width: 100%;
    img {
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    ${(props) =>
      !props.isHide &&
      css`
        .left-arrow {
          display: flex;
          left: 20px;
        }
        .right-arrow {
          display: flex;
          right: 20px;
        }
      `}
  }
  @media only screen and (max-width: 449px) {
    margin: 0 -24px;
    width: unset;
    img {
      border-radius: 0px;
      border: 1px var(--border);
      border-style: solid none;
      object-fit: cover;
      cursor: pointer;
    }
    .big-image {
      /* height: 238px; */
    }
  }
`;

const ImageSlider = styled.div`
  .roundbutton-section {
    display: flex;
    justify-content: center;
    gap: 12px;
    width: 100%;
    margin-top: 20px;
  }
  .round {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--snow-drift-gray);
    cursor: pointer;
  }
  .active-round {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--black);
    cursor: pointer;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 0%;
  right: 0%;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02;
  color: var(--white);
  margin: 0;
  z-index: 1;
  :hover {
    svg {
      path {
        stroke: var(--white);
      }
    }
  }
  @media only screen and (min-width: 2160px) {
    font-size: 1vw;
  }
`;

const ArrowIcon = styled.div`
  position: absolute;
  top: calc(50% - 19px);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0px 4px 16px 0px var(--black-shadow-10);
  svg {
    path {
      stroke: var(--title);
    }
  }
  ${(props) =>
    props.isHide &&
    css`
      display: none;
    `}
  @media only screen and (max-width: 449px) {
    /* width: 26px;
    height: 26px; */
  }
`;

const AppDetailContent = styled.div`
  h3 > b,
  h3 {
    ${Heading4};
    font-weight: 400;
    color: var(--title);
    margin: 28px 0 0;
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
    ${Heading5};
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
    margin: 8px 0 0;
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
    ${Body4};
    color: var(--body);
    margin: 12px 0 0;
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
    margin: 12px 0 20px;
    li {
      p {
        margin: 8px 0 0;
      }
      ::marker {
        font-size: 18px;
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
    margin: 12px 0 0px;
    li {
      ${Body5};
      color: var(--body);
      p {
        margin: 8px 0 0;
      }
      ::marker {
        font-size: 18px;
        color: var(--body);
      }
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
      ${Body4};
      color: var(--title);
      vertical-align: top;
      p {
        ${Body4};
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
    h3 {
      margin: 20px 0 0;
    }
    h3 + p {
      margin: 8px 0 0;
    }
    h4 {
      ${MobileH4}
    }
    h4 + p {
      margin: 8px 0 0;
    }
    p {
      ${MbBody4}
      margin: 12px 0 0;
    }
    ol {
      margin: 12px 0;
      li::marker {
        font-size: 15px;
      }
    }
    ul {
      margin: 12px 0 0;
      li::marker {
        font-size: 15px;
      }
    }
  }
`;

const AboutDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media only screen and (max-width: 449px) {
    gap: 24px;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  .install-button {
    a {
      padding: 7px 32px;
      font-size: 16px;
      line-height: 24px;
      margin-top: 20px;
    }
  }
  @media only screen and (max-width: 449px) {
    flex-direction: column;
    .install-button {
      a {
        padding: 9px 16px;
        font-size: 12px;
        line-height: 12px;
        margin-top: 0px;
      }
    }
  }
`;
export {
  AppDetail,
  DetailTitleSection,
  AppLogo,
  Caption,
  Title,
  DetailContent,
  LeftContent,
  RightContent,
  ImageSection,
  CloseIcon,
  ArrowIcon,
  ImageSlider,
  AppDetailContent,
  AboutDescription,
  Section
};
