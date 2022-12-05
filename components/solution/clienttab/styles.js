import styled from 'styled-components';
import { Body3, Body4, Body6, Heading3, Heading4, SliderTxt } from '../../../styles/styles';

const ExploreSection = styled.div`
  padding: 50px 0;
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
  a {
    display: inline-flex;
    align-items: center;
    gap: 12px;
  }
`;
const BottomSection = styled.div``;
const SignatureSection = styled.div`
  padding-top: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
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
`;
const RightWrap = styled.div``;
const TabWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
  .activetab {
    position: relative;
    span {
      ${SliderTxt};
      color: ${({ theme }) => theme.colors.body};
    }
    border: 1.08px solid #4c4c4c;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const TabView = styled.div`
  position: relative;
  cursor: pointer;
  span {
    ${SliderTxt};
    color: ${({ theme }) => theme.colors.border};
  }
  border: 1.08px solid #ccccd0;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LastSection = styled.div`
  margin-top: 50px;
  position: relative;
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
  }
`;
const SignBox = styled.div`
  border: 1px solid #131313;
  border-radius: 8px;
  padding: 35px;
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
  top: 100%;
`;
const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .tooltip {
    position: relative;
    display: inline-block;
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
  Tooltip
};
