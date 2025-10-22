import styled, { css } from 'styled-components';
import { body_regular, body_semibold, button_regular, h3_semibold, label_regular } from '../../styles/typography';

const CardSub = styled.div`
  display: block;
  a {
    background: var(--off-white-300);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-16);
    height: 100%;
    position: relative;
  }
`;

const CardDescription = styled.div`
  color: var(--text-secondary);
  ${button_regular}
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const CardInfo = styled.div`
  display: flex;
  gap: var(--space-16);
  align-items: center;
  img {
    max-width: 100%;
  }
`;

const ImgView = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    /* border-radius: var(--radius-8); */
  }
`;

const DirectoryCardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-48);
  @media only screen and (max-width: 991px) {
    gap: var(--space-40);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-32);
  }
`;

const CardTitle = styled.div`
  p {
    ${body_semibold}
    color: var(--black);
    margin: 0;
  }
`;
const RatingSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  p {
    text-transform: capitalize;
    ${button_regular};
    color: var(--text-secondary);
    margin: 0;
  }
  .dot-icon {
    margin: var(--space-4) 0;
  }
`;

const RatingNumber = styled.div`
  display: flex;
  gap: var(--space-4);
  align-items: center;
  p {
    ${button_regular};
    color: var(--text-secondary);
    margin: 0;
  }
`;

const AppInformativeSection = styled.div`
  display: flex;
  gap: var(--space-4);
  align-items: center;
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  justify-content: space-between;
  height: 100%;
  .svg-icon {
    width: 20px;
    height: 20px;
    transform: translateX(-2px) scale(0.98);
    transition: transform 0.25s, opacity 0.25s;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0;
  }
  &:hover {
    .svg-icon {
      transform: none;
      opacity: 1;
    }
  }
`;

const CardTopSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  padding: var(--space-20) var(--space-20) 0;
`;
const CardEnd = styled.div`
  background-color: var(--gray-50);
  padding: var(--space-10) var(--space-20) var(--space-6);
  border-top: 1px solid var(--border-default);
  border-radius: 0 0 var(--space-16) var(--space-16);
  width: 100%;
  p {
    ${button_regular};
    color: var(--title);
    margin: 0;
  }
  ${(props) =>
    props.isBottom &&
    css`
      display: flex;
      gap: var(--space-8);
      align-items: center;
    `}
`;

const CardListSection = styled.div`
  display: grid;
  gap: var(--space-24);
  grid-template-columns: repeat(auto-fill, minmax(289px, 1fr));
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  }
`;

const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  width: 100%;
  max-width: 600px;
  width: 100%;
  h3 {
    ${h3_semibold};
    color: var(--title);
    margin: 0;
  }
  p {
    ${body_regular};
    color: var(--text-secondary);
    margin: 0;
  }
  ${(props) =>
    props.hasPadding &&
    css`
      h3 {
        padding: var(--space-2) 0;
      }
    `}
  @media only screen and (max-width: 991px) {
    ${(props) =>
      props.hideOnMobile &&
      css`
        h3 {
          display: none;
        }
      `}
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-16);
  }
`;

const TooltipSection = styled.div`
  position: absolute;
  width: 220px;
  top: var(--space-22);
  padding: var(--space-10) var(--space-12) var(--space-8);
  background-color: var(--title);
  color: var(--off-white-100);
  box-shadow: 0px 4px 16px 0px var(--tooltip-box-shadow);
  border-radius: var(--radius-12);
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 9999; /* Ensure tooltip appears above other elements */
  span {
    ${label_regular}
  }
  @media only screen and (max-width: 768px) {
    ${(props) =>
      props.isAutoAdjust &&
      css`
        /* Use dynamic width based on viewport */
        width: calc(100vw - 32px);
        max-width: 220px;
        min-width: 180px;
        /* Ensure tooltip stays within viewport bounds */
        left: max(-200px, min(0px, var(--tooltip-left, -6px))) !important;
        /* Prevent horizontal overflow */
        word-wrap: break-word;
        overflow-wrap: break-word;
      `}
  }
  @media only screen and (max-width: 480px) {
    ${(props) =>
      props.isAutoAdjust &&
      css`
        width: calc(100vw - 24px);
        max-width: 200px;
        min-width: 160px;
        padding: var(--space-8) var(--space-10) var(--space-6);
        /* More aggressive positioning for very small screens */
        left: max(-180px, min(0px, var(--tooltip-left, -6px))) !important;
      `}
  }
  @media only screen and (max-width: 320px) {
    ${(props) =>
      props.isAutoAdjust &&
      css`
        width: calc(100vw - 16px);
        max-width: 180px;
        min-width: 140px;
        padding: var(--space-6) var(--space-8) var(--space-4);
        font-size: 12px;
      `}
  }
`;

const TooltipText = styled.div`
  ${label_regular}
  color: var(--off-white-100);
  margin: 0;
`;

const Line = styled.div`
  display: flex;
  position: absolute;
  top: -7px;
  transform-origin: bottom center;
  margin-left: var(--space-18);
`;

const Informative = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  :hover .tooltiptext {
    visibility: visible;
    opacity: 1;
    transition: all 0.3s ease;
  }
  .tooltiptext {
    visibility: hidden;
    z-index: 9999;
  }
  .tooltip-icon {
    width: 13px;
    height: 13px;
  }
  @media only screen and (max-width: 768px) {
    ${(props) =>
      props.isAutoAdjust &&
      css`
        /* Keep relative positioning for mobile auto-adjustment */
        position: relative;
        /* Ensure tooltip container doesn't interfere with layout */
        overflow: visible;
      `}
  }
  @media only screen and (max-width: 480px) {
    ${(props) =>
      props.isAutoAdjust &&
      css`
        /* Ensure tooltip is positioned relative to viewport on very small screens */
        position: relative;
        /* Allow tooltip to extend beyond container bounds */
        overflow: visible;
      `}
  }
`;

const Icon = styled.div`
  display: flex;
  width: ${({ iconSize }) => `${iconSize}px`};
  height: ${({ iconSize }) => `${iconSize}px`};
`;

const ReviewSection = styled.div`
  padding: var(--space-20) 0 var(--space-16);
  margin: 0 var(--space-20);
  border-top: 1px solid var(--border-default);
  ${(props) =>
    props.isBottom &&
    css`
      padding: var(--space-20) 0 0;
    `}
`;

const CardTopInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: var(--space-20);
`;

const ArrowIcon = styled.div`
  display: flex;
`;
const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
`;

export {
  CardSub,
  CardDescription,
  CardInfo,
  ImgView,
  DirectoryCardSection,
  CardTitle,
  RatingSection,
  RatingNumber,
  AppInformativeSection,
  CardEnd,
  CardTop,
  CardListSection,
  SectionHeading,
  TooltipSection,
  Line,
  Informative,
  Icon,
  TooltipText,
  ReviewSection,
  CardTopInfo,
  ArrowIcon,
  CardTopSectionWrapper,
  BottomSection
};
