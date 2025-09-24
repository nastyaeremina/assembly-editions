import styled, { css } from 'styled-components';
import { Body4, Body5, HeaderFont, Heading4, Heading5, MbBody4 } from '../../styles/styles';
import { body_regular, h2_semibold } from '../../styles/typography';

const AppDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-80);
  @media only screen and (max-width: 991px) {
    gap: var(--space-64);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-48);
  }
`;
const DetailTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
`;
const AppLogo = styled.div`
  display: flex;
  img {
    border: 1px solid var(--border-default);
    border-radius: var(--radius-8);
  }
  @media only screen and (max-width: 449px) {
    img {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-4);
    }
  }
`;
const Caption = styled.p`
  ${body_regular};
  color: var(--text-secondary);
  margin: 0;
  max-width: 720px;
  width: 100%;
`;
const Title = styled.div`
  display: flex;
  gap: var(--space-16);
  align-items: center;
  h2 {
    ${h2_semibold};
    color: var(--title);
    margin: 0;
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-12);
  }
`;

const DetailContent = styled.div`
  display: flex;
  gap: var(--space-64);
  padding: var(--space-64) 0;
  position: relative;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    padding: var(--space-40) 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-48) 0;
  }
`;

const LeftContent = styled.div`
  width: 100%;
  max-width: 728px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media only screen and (max-width: 991px) {
    max-width: 100%;
  }
`;
const RightContent = styled.div`
  max-width: 432px;
  width: 100%;
  position: sticky;
  top: ${(props) => props.stickyTop + 40}px;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    max-width: 300px;
  }
  @media only screen and (max-width: 991px) {
    max-width: 100%;
    position: unset;
  }
`;
const ImageSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-40);
  .left-arrow {
    display: none;
  }
  .right-arrow {
    display: none;
  }

  .big-image {
    max-height: fit-content;
    height: 100%;
    object-fit: cover;
    width: 100%;
    border-radius: var(--radius-8);
    border: 1px solid var(--border-default);
    object-fit: cover;
    cursor: zoom-in;
    user-select: none;
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
    width: unset;
    &.single-image-display {
      margin: 0;
      border: 0.5px solid var(--platinum-gray);
      border-radius: 4px;
      overflow: hidden;
      img {
        border: none;
      }
    }
    img {
      border-radius: var(--radius-4);
      border-style: solid none;
      object-fit: cover;
      cursor: pointer;
    }
    .big-image {
      border-radius: var(--radius-4);
    }
  }
`;

const ImageSlider = styled.div`
  .roundbutton-section {
    display: flex;
    gap: var(--space-4);
    width: 100%;
    margin-top: var(--space-24);
  }
  .round {
    width: 10px;
    height: 10px;
    border-radius: var(--radius-30);
    background-color: var(--border-default);
    cursor: pointer;
  }
  .active-round {
    width: 10px;
    height: 10px;
    border-radius: var(--radius-30);
    background-color: var(--title);
    cursor: pointer;
  }
`;

const CloseIcon = styled.button`
  position: absolute;
  top: var(--space-20);
  right: var(--space-20);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-200);
  border-radius: var(--radius-30);
  width: 40px;
  height: 40px;
  margin: 0;
  z-index: 1;
  border: none;
  transition: background-color 0.3s ease-in;

  .close-icon {
    transition: all 0.3s ease-in;
    path {
      fill: var(--off-white-100);
    }
  }
  &:hover {
    background-color: var(--gray-350);
  }
`;

const ArrowIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: var(--gray-50);
  border-radius: var(--radius-30);
  border: 1px solid var(--border-hover);
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  transition: background-color 0.3s ease-in;

  ${(props) =>
    props.isHide &&
    css`
      display: none;
    `}
  &:hover {
    background-color: var(--off-white-400);
  }

  ${(props) =>
    props.disabled &&
    css`
      border: 1px solid var(--border-default);
      cursor: not-allowed !important;
      svg {
        path {
          fill: var(--border-default);
        }
      }
    `}
  @media only screen and (max-width: 991px) {
    display: none;
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
    height: auto;
    margin-top: 16px;
    border-radius: 4px;
    border: 0.4px solid var(--platinum-gray);
    cursor: zoom-in;
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
  blockquote {
    border-left: 4px solid var(--neutral);
    padding-left: 20px;
    margin: 20px 0;
    font-style: italic;
    @media only screen and (max-width: 449px) {
      padding-left: 16px;
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
  pre {
    border: 1px solid var(--neutral);
    padding: 10px 12px;
    margin: 12px 0;
    background-color: var(--table-color);
    border-radius: 2px;
    width: max-content;
  }
  code {
    color: var(--body);
    font-family: 'Azeret Mono', monospace !important;
  }
  @media only screen and (max-width: 449px) {
    h3 {
      margin: 20px 0 0;
    }
    h3 + p {
      margin: 8px 0 0;
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
  align-items: center;
  gap: var(--space-16);

  @media only screen and (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-24);
  }
`;

const HeroSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
  align-items: flex-start;
`;
const MainHeroSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-80);
  align-items: flex-start;
  padding-bottom: var(--space-24);
  @media only screen and (max-width: 991px) {
    gap: var(--space-64);
    padding-bottom: var(--space-20);
  }

  @media only screen and (max-width: 449px) {
    padding-top: var(--space-16);
    padding-bottom: var(--space-24);
    gap: var(--space-48);
  }
`;

const ResponsiveSection = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    display: flex;
  }
`;

const SmallImageList = styled.div`
  display: flex;
  gap: var(--space-8);
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

const SmallImage = styled.button`
  display: flex;
  cursor: pointer;
  border: 1px solid var(--border-default);
  border-radius: var(--space-8);
  overflow: hidden;
  user-select: none;
  position: relative;
  .image {
    width: 128px;
    height: 72px;
  }
  :focus-visible {
    border-radius: var(--radius-8);
    .overlay {
      opacity: 1;
      background-color: transparent;
    }
  }
  ${(props) =>
    props.isActive &&
    css`
      border: 1px solid var(--border-hover);
    `}
`;

const Overlay = styled.div`
  background-color: var(--off-white-400);
  opacity: 75%;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  &:hover {
    opacity: 1;
    background-color: transparent;
  }
  ${(props) =>
    props.isActive &&
    css`
      opacity: 1;
      background-color: transparent;
    `}
`;
export {
  AppDetail,
  Overlay,
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
  Section,
  HeroSectionWrapper,
  MainHeroSectionWrapper,
  ResponsiveSection,
  SmallImageList,
  SmallImage
};
