import styled from "styled-components";
import {
  Body1,
  Body2,
  Body3,
  Body4,
  CardTxt,
  Heading2,
  Heading3,
  Heading4,
  Label,
} from "./styles";

const MainWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.greendark};
`;
const EnterPriseHero = styled.div`
  padding: 160px 0 0 0;
  background-image: url("/images/enterpriceone.png");
  background-position: center 80px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vw;
  background-color: linear-gradient(
    180deg,
    #00160e 0%,
    rgba(0, 22, 14, 0.8552) 79.69%,
    rgba(0, 22, 14, 0) 100%
  );
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
`;
const BtnWrap = styled.div``;
const BenefitsSection = styled.div`
  padding: 0px 0 136px;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 320px;
    top: -133px;
    background: linear-gradient(
      180deg,
      #00160e 0%,
      rgba(0, 22, 14, 0.8552) 79.69%,
      rgba(0, 22, 14, 0) 100%
    );
    transform: rotate(-180deg);
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
`;
const BoxView = styled.div`
  padding: 28px 24px;
  border-right: 1px solid ${({ theme }) => theme.colors.greenlight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.greenlight};
  margin: -1px;
  display: flex;
  height: 100%;
  min-height: 265px;
  :last-child {
    border-right: none;
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
`;
const ComingUp = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.greenlight};
  right: -1px;
  bottom: -37px;
  left: 50%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.greenlight};
  border-radius: 0px 0px 4px 4px;
`;
const SpanText = styled.span`
  ${CardTxt};
  color: ${({ theme }) => theme.colors.purpledark};
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
    color: ${({ theme }) => theme.colors.body};
    max-width: 780px;
    width: 100%;
  }
`;
const BtnList = styled.div`
  position: relative;
  ::before {
    content: "";
    height: 80px;
    border-left: 1px dashed #00160e;
    position: absolute;
    top: 42px;
  }
`;
const StepsSection = styled.div`
  padding-bottom: 100px;
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
    content: "";
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
    content: "";
    width: 55px;
    border-top: 1px dashed #e3ffee;
    position: absolute;
    left: 0;
    top: 50%;
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
`;
const DaySecond = styled.div`
  margin-top: 328px;
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
`;
const LeftTopView = styled.div`
  padding-right: 55px;
  position: relative;
  ::after {
    content: "";
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
    content: "";
    width: 55px;
    border-top: 1px dashed #e3ffee;
    position: absolute;
    right: 0;
    top: 50%;
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
    content: "";
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
    content: "";
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
};
