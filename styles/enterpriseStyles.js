import styled from 'styled-components';
import {
  Body2,
  Body4,
  CardTxt,
  Heading2,
  Heading3,
  Heading4,
  Label,
  MbBody2,
  MbBody4,
  MbBody5,
  MobileH2,
  MobileH4
} from './styles';

const MainWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.greendark};
`;
const EnterPriseHero = styled.div`
  padding: 160px 0 0 0;
  background-image: url('/images/enterpriceone.png');
  background-position: center 80px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vw;
  background-color: linear-gradient(180deg, #00160e 0%, rgba(0, 22, 14, 0.8552) 79.69%, rgba(0, 22, 14, 0) 100%);
  @media only screen and (max-width: 991px) {
    padding-top: 100px;
    min-height: 900px;
  }
  @media only screen and (max-width: 749px) {
    background-image: url('/images/entermobi.png');
    background-position: center 285px;
    background-size: cover;
    padding-top: 116px;
    height: 900px;
    min-height: 900px;
  }
`;
const LeftHero = styled.div`
  max-width: 712px;
  width: 100%;
  /* padding-bottom: 895px; */
`;
const TitleSec = styled.div`
  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.greenlight};
    margin: 0;
  }
  p {
    ${Body2};
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.greenlight};
    margin: 20px 0 32px;
  }
  @media only screen and (max-width: 991px) {
    h2 {
      font-size: 60px;
      line-height: 70px;
    }
    p {
      font-size: 22px;
      line-height: 25px;
      letter-spacing: 0.02em;
      color: ${({ theme }) => theme.colors.greenlight};
      margin: 20px 0 32px;
      max-width: 500px;
    }
  }
  @media only screen and (max-width: 749px) {
    h2 {
      ${MobileH2};
    }
    p {
      ${MbBody2};
      letter-spacing: 0.02em;
      color: ${({ theme }) => theme.colors.greenlight};
      margin: 20px 0 32px;
      max-width: 297px;
    }
  }
`;
const BtnWrap = styled.div``;
const BenefitsSection = styled.div`
  padding: 0px 0 136px;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 320px;
    top: -133px;
    background: linear-gradient(180deg, #00160e 0%, rgba(0, 22, 14, 0.8552) 79.69%, rgba(0, 22, 14, 0) 100%);
    transform: rotate(-180deg);
    @media only screen and (max-width: 749px) {
      height: 141px;
      top: 0;
    }
  }
  @media only screen and (max-width: 749px) {
    padding-bottom: 116px;
    margin-top: -10px;
  }
`;
const BenefitWrap = styled.div`
  h4 {
    margin: 0;
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
  }
`;
const BenefitBox = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.greenlight};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: relative;
  border-radius: 4px 4px 0px 4px;
  .bordernone {
    border-right: 1px solid #e3ffee;
    border-top-right-radius: 4px;
  }
  .borderbottom {
    border-bottom: 1px solid #e3ffee;
  }
  @media only screen and (max-width: 991px) {
    border-right: 0;
    border-bottom: 0;
    grid-template-columns: 1fr 1fr 1fr;

    .bordernone {
      border-right: 1px solid #e3ffee;
    }
    .borderbottom {
      border-bottom: 1px solid #e3ffee;
    }
  }
  @media only screen and (max-width: 749px) {
    grid-template-columns: 1fr 1fr;
    border-bottom-left-radius: 0px;
  }
`;
const BoxView = styled.div`
  padding: 28px 24px;
  border-right: 1px solid ${({ theme }) => theme.colors.greenlight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.greenlight};
  margin: -1px;
  display: flex;
  padding-top: 80px;
  :last-child {
    border-right: none;
  }
  @media only screen and (max-width: 991px) {
    :nth-child(3) {
      border-top-right-radius: 4px;
      border-right: 1px solid #e3ffee;
      border-top-right-radius: 4px;
    }
  }
  @media only screen and (max-width: 749px) {
    padding: 16px;
    padding-top: 50px;
    :nth-child(2) {
      border-top-right-radius: 4px;
    }
    :nth-child(7) {
      border-bottom-left-radius: 0px;
    }
  }
`;
const ImgIcon = styled.div`
  display: inline-flex;
`;
const DetailView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h4 {
    ${Heading4};
    margin: 0px 0 0 0;
    color: ${({ theme }) => theme.colors.greenlight};
  }
  p {
    ${Body4};
    margin: 12px 0 0;
    color: ${({ theme }) => theme.colors.greenlight};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  @media only screen and (max-width: 749px) {
    h4 {
      ${MobileH4};
    }
    p {
      ${MbBody5};
      margin: 8px 0 0;
      color: ${({ theme }) => theme.colors.greenlight};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`;
const ComingUp = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.greenlight};
  right: -1px;
  bottom: -30px;
  left: 50%;
  padding: 7px 24px;
  border: 1px solid ${({ theme }) => theme.colors.greenlight};
  border-radius: 0px 0px 4px 4px;
  @media only screen and (max-width: 991px) {
    right: 239px;
    left: -1px;
  }
  @media only screen and (max-width: 749px) {
    left: -1;
    right: -1px;
  }
`;
const SpanText = styled.span`
  ${CardTxt};
  color: ${({ theme }) => theme.colors.purpledark};
  display: block;
`;
const MovingSection = styled.div`
  background-color: ${({ theme }) => theme.colors.greenlight};
`;
const PlusWrap = styled.div`
  padding: 80px 0;
  text-align: center;
  h3 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
  }
  p {
    margin: 20px auto 32px;
    ${Body2};
    text-align: center;
    color: ${({ theme }) => theme.colors.body};
    max-width: 780px;
    width: 100%;
  }
  @media only screen and (max-width: 749px) {
    padding: 45px 0;
    h3 {
      ${MobileH2};
      color: ${({ theme }) => theme.colors.title};
      margin: 0;
    }
    p {
      ${MbBody2};
      color: ${({ theme }) => theme.colors.body};
      text-align: center;
    }
  }
`;
const BtnList = styled.div``;
const StepsSection = styled.div`
  padding-bottom: 100px;
  @media only screen and (max-width: 749px) {
    padding-bottom: 80px;
  }
`;

const StepWrap = styled.div`
  width: 100%;
  display: flex;
`;
const LeftStep = styled.div`
  width: 100%;
  max-width: 50%;
  text-align: right;
`;
const RightStep = styled.div`
  width: 100%;
  max-width: 50%;
  padding: 100px 0;
  border-left: 1px dashed #e3ffee;
  position: relative;
`;
const DayOne = styled.div``;

const TopView = styled.div`
  padding-left: 55px;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.greenlight};
  }
  ::before {
    content: '';
    width: 55px;
    border-top: 1px dashed #e3ffee;
    position: absolute;
    left: 0;
    top: 50%;
  }
  @media only screen and (max-width: 749px) {
    padding-left: 41px;
  }
`;
const DayLabel = styled.div`
  background: #e3ffee;
  border-radius: 4px;
  display: inline-block;
  padding: 7px 20px;
`;
const Daybox = styled.div`
  span {
    ${Label};
    color: ${({ theme }) => theme.colors.black};
    display: block;
  }
`;
const BottomView = styled.div`
  padding-left: 55px;
  margin-top: 25px;
  max-width: 555px;
  width: 100%;
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.greenlight};
    margin: 0;
  }
  p {
    ${Body4};
    color: ${({ theme }) => theme.colors.greenlight};
    margin: 12px 0 0;
  }
  @media only screen and (max-width: 749px) {
    padding-left: 13px;
    max-width: 100%;
    margin-top: 13px;
    h4 {
      ${MobileH4};
      color: ${({ theme }) => theme.colors.greenlight};
      margin: 0;
    }
    p {
      ${MbBody4};
      color: ${({ theme }) => theme.colors.greenlight};
      margin: 8px 0 0;
    }
  }
`;
const DaySecond = styled.div`
  margin-top: 328px;
  @media only screen and (max-width: 749px) {
    margin-top: 245px;
  }
`;
const LeftBottomView = styled.div`
  padding-right: 55px;
  margin-top: 25px;
  width: 100%;
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.greenlight};
    margin: 0;
  }
  p {
    ${Body4};
    color: ${({ theme }) => theme.colors.greenlight};
    margin: 12px 0 0;
  }
  @media only screen and (max-width: 749px) {
    padding-right: 13px;
    margin-top: 13px;
    h4 {
      ${MobileH4};
      color: ${({ theme }) => theme.colors.greenlight};
      margin: 0;
    }
    p {
      ${MbBody4};
      color: ${({ theme }) => theme.colors.greenlight};
      margin: 8px 0 0;
    }
  }
`;
const LeftTopView = styled.div`
  padding-right: 55px;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    right: -8px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    top: 50%;
    transform: translate(0, -50%);
    background-color: ${({ theme }) => theme.colors.greenlight};
  }
  ::before {
    content: '';
    width: 55px;
    border-top: 1px dashed #e3ffee;
    position: absolute;
    right: 0;
    top: 50%;
  }
  @media only screen and (max-width: 749px) {
    padding-right: 41px;
  }
`;
const DayCenter = styled.div`
  margin-top: 352px;
`;
const BottomDay = styled.div`
  text-align: center;
  position: relative;
  padding-top: 40px;
  ::after {
    content: '';
    position: absolute;
    top: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.greenlight};
  }
  ::before {
    content: '';
    border-left: 1px dashed #e3ffee;
    position: absolute;
    height: 40px;
    top: 0;
    left: 50%;
  }
`;
const LastLabel = styled.div`
  display: inline-block;
  background: #e3ffee;
  border-radius: 4px;
  padding: 7px 20px;
`;
const BottomLast = styled.div`
  width: 100%;
  max-width: 562px;
  margin: 25px auto 0;
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.greenlight};
    margin: 0;
  }
  p {
    ${Body4};
    color: ${({ theme }) => theme.colors.greenlight};
    margin: 12px 0 0;
  }
  @media only screen and (max-width: 749px) {
    max-width: 100%;
    margin-top: 18px;
    h4 {
      ${MobileH4};
      color: ${({ theme }) => theme.colors.greenlight};
      margin: 0;
    }
    p {
      ${MbBody4};
      color: ${({ theme }) => theme.colors.greenlight};
      margin: 8px 0 0;
    }
  }
`;
const BtnListtwo = styled.div`
  position: relative;
  ::before {
    content: '';
    height: 80px;
    border-left: 1px dashed #00160e;
    position: absolute;
    top: 0px;
  }
`;

export {
  MainWrap,
  EnterPriseHero,
  LeftHero,
  TitleSec,
  BtnWrap,
  BenefitsSection,
  BenefitWrap,
  BenefitBox,
  BoxView,
  ImgIcon,
  DetailView,
  ComingUp,
  SpanText,
  MovingSection,
  PlusWrap,
  BtnList,
  StepsSection,
  StepWrap,
  LeftStep,
  RightStep,
  DayOne,
  TopView,
  Daybox,
  DayLabel,
  BottomView,
  DaySecond,
  LeftTopView,
  DayCenter,
  LeftBottomView,
  BottomDay,
  LastLabel,
  BottomLast,
  BtnListtwo
};
