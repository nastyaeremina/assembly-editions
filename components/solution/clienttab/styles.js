import styled from 'styled-components';
import { Body3, Body4, Heading3, Heading4, MbBody3, MbBody4, SliderTxt } from '../../../styles/styles';

const ExploreSection = styled.div`
  padding: 50px 0;
  overflow: hidden;
  @media only screen and (max-width: 749px) {
    padding: 40px 0;
  }
`;
const TopView = styled.div`
  width: 100%;
  max-width: 811px;
  h3 {
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  p {
    ${Body3};
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.body};
    margin: 16px 0 28px;
  }
  @media only screen and (max-width: 749px) {
    p {
      ${MbBody3};
    }
  }
`;
const BottomSection = styled.div``;
const SignatureSection = styled.div`
  padding-top: 40px;
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
  h4 {
    ${Heading4};
    margin: 0 0 12px;
    color: ${({ theme }) => theme.colors.title};
  }
  p {
    ${Body4};
    color: ${({ theme }) => theme.colors.body};
    margin: 0;
  }
  @media only screen and (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 749px) {
    max-width: 100%;
    margin-bottom: 40px;
    h4 {
      ${Heading4};
      margin: 0 0 12px;
      color: ${({ theme }) => theme.colors.title};
    }
    p {
      ${Body4};
      color: ${({ theme }) => theme.colors.body};
      margin: 0;
    }
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
      ${SliderTxt};
      color: ${({ theme }) => theme.colors.body};
      @media only screen and (max-width: 991px) {
        ${MbBody4}
      }
    }
    border: 1.08px solid #4c4c4c;
    width: 72px;
    height: 72px;
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
      width: 59px;
      height: 59px;
    }
  }
  @media only screen and (max-width: 749px) {
    width: 100%;
    justify-content: flex-end;
    gap: 20px;
    .activetab {
      width: 57px;
      height: 57px;
    }
  }
`;
const TabView = styled.div`
  position: relative;
  cursor: pointer;
  span {
    ${SliderTxt};
    color: ${({ theme }) => theme.colors.border};
    @media only screen and (max-width: 991px) {
      ${MbBody4}
    }
  }
  border: 1.08px solid #ccccd0;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 991px) {
    width: 59px;
    height: 59px;
  }
  @media only screen and (max-width: 749px) {
    width: 57px;
    height: 57px;
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
  border: 1px solid #131313;
  border-radius: 8px;
  padding: 35px;
  background-color: #fffffd;
  @media only screen and (max-width: 991px) {
    padding: 25px;
  }
  @media only screen and (max-width: 749px) {
    padding: 9px;
  }
`;
const SignImgView = styled.div`
  display: inline-flex;
  box-shadow: 0px 0px 34px rgba(0, 0, 0, 0.07);
  background: #ffffff;
  position: relative;
  border-radius: 6px;
  img {
    max-height: 725px;
    height: 100%;
    max-width: 100%;
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
    ${Body4};
    background-color: ${({ theme }) => theme.colors.greendark};
    color: ${({ theme }) => theme.colors.greenlight};
    /* Position the tooltip */
    position: absolute;
    z-index: 2;
    top: 40px;
    left: 0;
    margin-left: -54px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
    ::after {
      content: '';
      position: absolute;
      width: 46px;
      border-top: 2px solid #00160e;
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
  background-color: #fffffd;
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
