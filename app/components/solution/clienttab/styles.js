import styled, { css } from 'styled-components';
import { body_regular, button_regular, h3_semibold, h4_semibold } from '../../../styles/typography';

const ExploreSection = styled.div`
  padding: 50px 0;
  overflow: hidden;
  ${(props) =>
    props.isStandardPage &&
    css`
      padding: 0 0 100px;
      @media only screen and (max-width: 768px) {
        padding: 0 0 80px;
      }
    `}
  @media only screen and (max-width: 749px) {
    padding: 40px 0;
    ${(props) =>
      props.isStandardPage &&
      css`
        padding: 0 0 80px;
      `}
  }
`;
const TopView = styled.div`
  width: 100%;
  max-width: 811px;
  h2 {
    ${h3_semibold};
    color: var(--title);
    margin: 0;
    span {
      color: var(--primary);
    }
  }
  p {
    ${body_regular};
    letter-spacing: 0.02em;
    color: var(--body);
    margin: 16px 0 28px;
  }
  .button-group {
    margin-bottom: 28px;
  }
`;
const BottomSection = styled.div``;
const SignatureSection = styled.div`
  padding-top: 12px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 749px) {
    flex-wrap: wrap;
  }
`;
const LeftWrap = styled.div`
  max-width: 612px;
  width: 100%;
  h3 {
    ${h4_semibold};
    margin: 0 0 12px;
    color: var(--title);
  }
  p {
    ${body_regular};
    color: var(--text-secondary);
    margin: 0;
  }
  @media only screen and (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 749px) {
    max-width: 100%;
    margin-bottom: 40px;
    h3 {
      margin: 0 0 12px;
    }
  }
  @media only screen and (max-width: 749px) {
    margin-bottom: 28px;
  }
`;
const RightWrap = styled.div`
  @media only screen and (max-width: 991px) {
    width: 100%;
  }
  @media only screen and (max-width: 749px) {
    width: 100%;
  }
`;
const TabWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
  .activetab {
    position: relative;
    span {
      ${button_regular};
      color: var(--text-secondary);
    }
    border: 1.08px solid var(--body);
    width: 100%;
    max-width: 72px;
    min-width: 72px;
    height: 100%;
    min-height: 72px;
    max-height: 72px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    justify-content: flex-end;
    gap: 20px;
    .activetab {
      width: 100%;
      max-width: 59px;
      min-width: 59px;
      height: 100%;
      min-height: 59px;
      max-height: 59px;
    }
  }
  @media only screen and (max-width: 749px) {
    width: 100%;
    justify-content: flex-end;
    gap: 20px;
    .activetab {
      border: 1px solid var(--body);
      width: 100%;
      max-width: 57px;
      min-width: 57px;
      height: 100%;
      min-height: 57px;
      max-height: 57px;
    }
  }
`;
const TabView = styled.div`
  position: relative;
  cursor: pointer;
  span {
    ${button_regular};
    color: var(--border);
  }
  border: 1.08px solid var(--border);
  width: 100%;
  max-width: 72px;
  min-width: 72px;
  height: 100%;
  min-height: 72px;
  max-height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    span {
      color: var(--title);
    }
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    max-width: 59px;
    min-width: 59px;
    height: 100%;
    min-height: 59px;
    max-height: 59px;
  }
  @media only screen and (max-width: 749px) {
    border: 1px solid var(--border);
    width: 100%;
    max-width: 57px;
    min-width: 57px;
    height: 100%;
    min-height: 57px;
    max-height: 57px;
  }
`;
const LastSection = styled.div`
  margin-top: 50px;
  position: relative;
  overflow: hidden;
  ::before {
    content: '';
    background-image: url('/images/signbg.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    height: 438px;
    transform: translate(-50%, -50%);
    @media only screen and (max-width: 991px) {
      height: 219px;
    }
    @media only screen and (max-width: 749px) {
      height: 100px;
    }
  }
  @media only screen and (max-width: 991px) {
    margin-top: 35px;
  }
  @media only screen and (max-width: 749px) {
    margin-top: 35px;
  }
`;
const SignBox = styled.div`
  border: 1px solid var(--title);
  border-radius: 8px;
  padding: 35px;
  cursor: pointer;
  @media only screen and (max-width: 991px) {
    padding: 25px;
    background-color: var(--white);
  }
  @media only screen and (max-width: 749px) {
    padding: 8px;
  }
  @media only screen and (max-width: 449px) {
    border-radius: 4px;
  }
`;
const SignImgView = styled.div`
  display: inline-flex;
  box-shadow: 0px 0px 34px var(--black-shadow-7);
  background: var(--white);
  position: relative;
  border-radius: 4px;
  img {
    max-height: 725px;
    height: 100%;
    max-width: 100%;
    border-radius: 4px;
  }
  @media only screen and (max-width: 449px) {
    border-radius: 2px;
    img {
      border-radius: 2px;
    }
  }
`;
const ActiveTab = styled.div`
  position: absolute;
  top: 101%;
`;
const BtnWrap = styled.div`
  a {
    text-align: center;
    letter-spacing: 0;
  }
  @media only screen and (max-width: 749px) {
    width: 100%;
    white-space: nowrap;
    a {
      padding: 8px 28px;
      border-radius: 48px;
      text-align: center;
      width: 100%;
      justify-content: center;
    }
  }
  .tooltip {
    position: relative;
    display: inline-block;
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    opacity: 0;
    width: 834px;
    border-radius: 6px;
    padding: 24px 32px;
    ${button_regular};
    background-color: var(--dark-green);
    color: var(--light-green);
    /* Position the tooltip */
    position: absolute;
    z-index: 2;
    top: 40px;
    left: 0;
    margin-left: -54px;
    box-shadow: 0px 4px 16px var(--black-shadow-25);
    border-radius: 4px;
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
    ::after {
      content: '';
      position: absolute;
      width: 46px;
      border-top: 2px solid var(--dark-green);
      transform: rotate(90deg);
      top: 0;
      left: 42px;
      z-index: -1;
    }
  }
`;
const IconView = styled.div`
  cursor: pointer;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;
const MainWrap = styled.div`
  .main-section {
    overflow: hidden;
  }
`;
const Tooltip = styled.div``;
export {
  ExploreSection,
  TopView,
  BottomSection,
  SignatureSection,
  LeftWrap,
  RightWrap,
  TabWrap,
  TabView,
  LastSection,
  SignBox,
  SignImgView,
  ActiveTab,
  BtnWrap,
  IconView,
  Tooltip,
  MainWrap
};
