import styled, { css } from 'styled-components';
import { Body4, Body5, CardTxt, FooterText, Heading3, Value } from '../../styles/styles';
import { label_regular } from '../../styles/typography';

const CardSub = styled.div`
  display: block;
  :hover {
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 0px 0.1px var(--dark-purple);
    border-radius: 4px;
  }
  a {
    background: var(--white);
    border: 1px solid var(--dark-purple);
    border-radius: 4px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    height: 100%;
    position: relative;
    :hover {
      border: 1px solid var(--dark-purple);
      box-shadow: 0px 4px 16px var(--black-shadow-10);
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const CardDescription = styled.div`
  color: var(--dark-gray);
  letter-spacing: 0.02em;
  ${Body5}
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
  gap: 12px;
  align-items: center;
  padding-bottom: 12px;
  img {
    max-width: 100%;
  }
  h3 {
    color: var(--title);
    ${Body4}
    letter-spacing: 0.02em;
    margin: 0;
  }
`;

const ImgView = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DirectoryCardSection = styled.div`
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 80px;
    gap: 24px;
  }
  ${(props) =>
    props.isAppdetail &&
    css`
      gap: 40px;
    `}
  ${(props) =>
    props.isSearchEmpty &&
    css`
      padding-bottom: 0;
      @media only screen and (max-width: 768px) {
        padding-bottom: 0;
      }
    `}
`;

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const RatingSection = styled.div`
  display: flex;
  p {
    text-transform: capitalize;
    ${FooterText};
    color: var(--body);
    margin: 0;
  }
`;

const RatingNumber = styled.div`
  display: flex;
  gap: 3px;
`;

const AppInformativeSection = styled.div`
  display: flex;
  gap: 4px;
`;

const CardTop = styled.div`
  padding: 16px;
  ${(props) =>
    props.isFeature &&
    css`
      padding-bottom: 46px;
    `}
`;
const CardEnd = styled.div`
  display: none;
  background-color: var(--light-green);
  padding: 8px 16px;
  border-top: 1px solid var(--dark-purple);
  border-radius: 0 0 3px 3px;
  position: absolute;
  bottom: 0;
  width: 100%;
  p {
    ${CardTxt};
    color: var(--dark-purple);
    margin: 0;
  }
  ${(props) =>
    props.isBottom &&
    css`
      display: flex;
      gap: 6px;
      align-items: center;
    `}
`;

const CardListSection = styled.div`
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  ${(props) =>
    props.is4Card &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(228px, 1fr));
    `}
  @media only screen and (max-width: 449px) {
    grid-template-columns: auto;
    gap: 20px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  h2 {
    ${Heading3};
    color: var(--title);
    margin: 0;
  }
  p {
    ${Body4};
    color: var(--body);
    margin: 0;
  }
  @media only screen and (max-width: 449px) {
    ${Body5}
    gap:8px;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  width: 220px;
  top: var(--space-22);
  padding: var(--space-10) var(--space-12) var(--space-8);
  background-color: var(--title);
  color: var(--off-white-100);
  box-shadow: 0px 4px 16px 0px var(--tooltip-box-shadow);
  border-radius: var(--radius-12);
  opacity: 0;
  span {
    ${label_regular}
  }
  ${(props) =>
    props.isAppDetailtooltip &&
    css`
      top: var(--space-24);
      left: -5px !important; // icon is 16px size that is why we are using -5px
      @media only screen and (max-width: 449px) {
        top: var(--space-20);
        left: -7px !important;
      }
    `}
  @media only screen and (max-width: 768px) {
    ${(props) =>
      props.isAutoAdjust &&
      css`
        left: -32px !important;
        width: calc(100% + 32px);
      `}
  }
`;

const TooltipText = styled.div`
  ${label_regular}
  color: var(--off-white-100);
  margin: 0;
`;

const Line = styled.div`
  position: absolute;
  top: -10px;
  .line {
    background-color: var(--title);
    width: 2px;
    height: 16px;
  }
  @media only screen and (max-width: 768px) {
    ${(props) =>
      props.isAutoAdjust &&
      css`
        display: none;
      `}
  }
`;

const Informative = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  :hover .tooltiptext {
    visibility: visible;
    opacity: 1;
    transition: all 0.55s;
  }
  .tooltiptext {
    visibility: hidden;
    z-index: 99;
  }
  .tooltip-icon {
    width: 13px;
    height: 13px;
  }
  @media only screen and (max-width: 768px) {
    ${(props) =>
      props.isAutoAdjust &&
      css`
        position: unset;
      `}
  }
`;

const Icon = styled.div`
  display: flex;
  width: ${({ iconSize }) => `${iconSize}px`};
  height: ${({ iconSize }) => `${iconSize}px`};
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
  SectionHeader,
  SectionHeading,
  Tooltip,
  Line,
  Informative,
  Icon,
  TooltipText
};
