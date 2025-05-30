import styled, { css } from 'styled-components';
import {
  Body1,
  Body2,
  Body3,
  Body4,
  Body5,
  Body6,
  FooterText,
  HeaderFont,
  Heading2,
  Heading3,
  Heading4,
  Label,
  LinkTxt,
  MbBody2,
  MbBody3,
  MbBody4,
  MbBody5,
  MbPrimaryBtn,
  MobileH2,
  MobileH3,
  MobileH4,
  Name
} from './styles';

const MainWrap = styled.div`
  background: var(--main-bg-color);
`;
const HeroJobSection = styled.div`
  padding: 144px 0 50px;
  @media only screen and (max-width: 749px) {
    padding: 148px 0 40px;
  }
`;
const JobsWrap = styled.div`
  border-radius: 8px;
  ${(props) =>
    props.imageUrl &&
    css`
      background-image: linear-gradient(90deg, var(--black) 18.89%, var(--black-shadow-0) 82.84%),
        url(${props.imageUrl});
      @media only screen and (max-width: 991px) {
        background-image: linear-gradient(90deg, var(--black) 18.89%, var(--black-shadow-0) 82.84%),
          url(${props.imageUrl});
      }
    `}
  background-position: 0 0, 50% 50%;
  background-size: auto, cover;
  background-repeat: repeat, no-repeat;
  padding-top: 80px;
  padding-left: 80px;
  padding-bottom: 141px;
  @media only screen and (max-width: 991px) {
    height: 470px;
    padding-top: 60px;
    padding-left: 60px;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  @media only screen and (max-width: 749px) {
    display: none;
  }
`;
const JobsMobi = styled.div`
  display: none;
  @media only screen and (max-width: 749px) {
    display: block;
    border-radius: 8px;
    background-image: linear-gradient(180deg, var(--black) 51.28%, var(--black) 70.01%), url('/images/jobmobi.svg');
    background-position: 0 0, 50% 50%;
    background-size: auto, cover;
    background-repeat: repeat, no-repeat;
    padding: 0 24px;
    padding-top: 50px;
    padding-bottom: 304px;
    height: 634px;
    width: 100%;
  }
`;
const UseCaseWrap = styled.div`
  width: 100%;
  max-width: 580px;
  h1 {
    ${Heading2};
    margin: 0;
    color: var(--white);
  }
  p {
    ${Body2};
    color: var(--white);
    margin: 20px 0 0;
    letter-spacing: 0.02em;
  }
  @media only screen and (max-width: 991px) {
    max-width: 251px;
    h1 {
      font-size: 36px;
      line-height: 56px;
    }
    p {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.02em;
    }
  }
`;
const UseCaseWrapMobi = styled.div`
  text-align: center;
  h1 {
    ${MobileH2};
    margin: 0;
    color: var(--white);
  }
  p {
    ${MbBody2};
    color: var(--white);
    margin: 20px 0 0;
    letter-spacing: 0.02em;
  }
`;
const CareerSection = styled.div`
  padding-top: 50px;
  @media only screen and (max-width: 749px) {
    padding: 40px 0;
  }
`;
const CareerBlock = styled.div`
  display: flex;
  gap: 60px;
  @media only screen and (max-width: 991px) {
    gap: 30px;
  }
  @media only screen and (max-width: 749px) {
    flex-wrap: wrap;
    gap: 66px;
  }
`;
const RoleBlock = styled.div`
  max-width: 612px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    max-width: 50%;
  }
  @media only screen and (max-width: 749px) {
    max-width: 100%;
  }
`;
const TeamBlock = styled.div`
  max-width: 552px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    max-width: 50%;
  }
  @media only screen and (max-width: 749px) {
    max-width: 100%;
  }
`;
const RoleWrap = styled.div`
  margin-bottom: 40px;
  h2 {
    ${Heading4};
    color: var(--title);
    margin: 0 0 12px 0;
  }
  p {
    ${Body5};
    color: var(--body);
    letter-spacing: 0.02em;
    margin: 0;
  }
  @media only screen and (max-width: 991px) {
    h2 {
      font-size: 26px;
      line-height: 34px;
    }
  }
  @media only screen and (max-width: 749px) {
    h2 {
      ${MobileH4};
    }
    p {
      ${MbBody5};
    }
  }
`;
const JobDetailWrap = styled.div``;
const JobView = styled.div`
  margin-bottom: 14px;
  h3 {
    margin: 0;
    ${HeaderFont};
    color: var(--title);
  }
  @media only screen and (max-width: 749px) {
    h3 {
      ${MbPrimaryBtn}
    }
  }
`;
const RoleList = styled.div`
  margin: 14px 0px 0px;
`;
const RoleRow = styled.div`
  padding: 6px 0px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dashed transparent;
  cursor: pointer;
  :hover {
    border-bottom: 1px dashed var(--black);
    p {
      color: var(--black);
    }
    .bgdot {
      background-color: var(--black);
    }
  }
  @media only screen and (max-width: 749px) {
    margin-bottom: 2px;
  }
`;
const LeftRow = styled.div`
  p {
    margin: 0;
    ${Body5};
    color: var(--body);
  }
`;
const RightRow = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
    ${FooterText};
    color: var(--medium-gray);
  }
`;
const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--border);
  margin: 0 8px;
`;
const TeamView = styled.div`
  h2 {
    ${Heading4};
    color: var(--title);
    margin: 0;
  }
  @media only screen and (max-width: 991px) {
    h2 {
      font-size: 26px;
      line-height: 34px;
    }
  }
  @media only screen and (max-width: 749px) {
    h2 {
      ${MobileH4};
    }
  }
`;
const TeamDetail = styled.div`
  margin-top: 20px;
  @media only screen and (max-width: 749px) {
    margin-top: 12px;
  }
`;
const TitleWrap = styled.div`
  margin-bottom: 16px;
  :last-child {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 749px) {
    margin-bottom: 12px;
  }
`;
const TeamLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    ${Body5};
    color: var(--primary);
    letter-spacing: 0.02em;
    :hover {
      color: var(--title);
    }
  }
  p {
    ${FooterText};
    color: var(--medium-gray);
    margin: 0;
  }
  @media only screen and (max-width: 749px) {
    align-items: flex-start;
    a {
      max-width: 224px;
    }
  }
`;
const NameView = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  p {
    ${Name};
    margin: 0;
    color: var(--medium-gray);
  }
`;
const ImgWrap = styled.div`
  margin-top: 40px;
`;
const ImgBorder = styled.div`
  border: 1px solid var(--black);
  border-radius: 4px;
  overflow: hidden;
  background-color: var(--white);
  max-height: 320px;
  img {
    height: auto;
  }
`;
const TabList = styled.div`
  margin-top: 20px;
`;
const TabWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  justify-content: flex-end;
  .activetab {
    position: relative;
    span {
      ${Body6};
      color: var(--black);
    }
    border: 1px solid var(--black);
    width: 40px;
    height: 40px;
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
    ${Body6};
    color: var(--border);
  }
  border: 1px solid var(--border);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ActiveTab = styled.div`
  position: absolute;
  bottom: 101%;
  background: var(--black);
  width: 1px;
  height: 21px;
`;
const RegionView = styled.div`
  border-top: 1px solid var(--black);
  margin-top: 20px;
  position: relative;
  padding-top: 15px;
  ::after {
    content: '';
    position: absolute;
    -webkit-clip-path: polygon(49% 100%, 0 0, 100% 0);
    clip-path: polygon(49% 100%, 0 0, 100% 0);
    top: 0;
    background: black;
    width: 14px;
    height: 7px;
    right: 0;
  }
  p {
    ${Label};
    letter-spacing: 0.01em;
    text-align: right;
    margin: 0;
  }
`;
const JObMain = styled.div`
  padding-top: 164px;
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
    padding-top: 148px;
    padding-bottom: 80px;
  }
`;
const DetailLink = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 28px;
  p {
    ${LinkTxt};
    margin: 0;
    color: var(--medium-gray);
  }
  @media only screen and (max-width: 375px) {
    gap: 4px;
    p {
      ${HeaderFont}
    }
  }
`;
const JobDetail = styled.div`
  display: flex;
  gap: 46px;
  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
const DetailLeft = styled.div`
  max-width: 260px;
  width: 100%;
  position: sticky;
  top: 120px;
  margin-top: -44px;
  h3 {
    ${Heading3};
    color: var(--title);
    margin: 0 0 24px 0;
  }
  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 40px;
      line-height: 46px;
    }
    width: 100%;
    max-width: 100%;
  }
  @media only screen and (max-width: 469px) {
    h3 {
      ${MobileH3}
      margin: 0 0 16px 0;
    }
  }
`;
const DetailWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding-bottom: 20px;
  p {
    ${Body4};
    margin: 0;
    color: var(--medium-gray);
  }
  span {
    ${Body4};
    margin: 0;
    color: var(--title);
  }
  @media only screen and (max-width: 749px) {
    padding-bottom: 16px;
    p {
      ${MbBody4};
    }
    span {
      ${MbBody4};
    }
  }
`;
const ImageWrap = styled.div`
  display: flex;
  gap: 4px;
  padding-bottom: 12px;
  a {
    width: 30px;
    height: 30px;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
`;
const DetailRight = styled.div`
  margin-top: 10px;
  @media only screen and (max-width: 375px) {
    padding-top: 34px;
  }
`;
const DetailRIghtText = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${Heading4};
    color: var(--title);
    margin: 0;
    padding-top: 40px;
    :first-child {
      padding-top: 0;
    }
  }

  b {
    font-weight: 400;
    color: var(--title);
  }

  p {
    ${Body3};
    color: var(--body);
    margin: 24px 0 0 0;
    :first-child {
      margin: 20px 0 0 0;
    }
    a {
      display: inline-block;
      color: var(--primary);
    }
  }
  span {
    ${Body3};
    color: var(--primary);
    margin: 0;
  }
  li {
    position: relative;
    ::before {
      content: '';
      position: absolute;
      top: 7px;
      left: 0;
      width: 20px;
      height: 10px;
      background-color: var(--mid-light-green);
    }
    p {
      padding: 0 10px 0 36px;
      margin-top: 7px;
      font-weight: 400;
      font-size: 18px;
      color: var(--body);
    }
  }
  @media only screen and (max-width: 375px) {
    p {
      margin-top: 16px;
      ${MbBody3}
    }
    li {
      p {
        ${MbBody4}
      }
    }
  }
`;
const DetailPosition = styled.div`
  position: relative;
`;
export {
  HeroJobSection,
  JobsWrap,
  UseCaseWrap,
  CareerSection,
  CareerBlock,
  RoleBlock,
  TeamBlock,
  RoleWrap,
  JobDetailWrap,
  JobView,
  RoleList,
  RoleRow,
  LeftRow,
  RightRow,
  Dot,
  TeamView,
  TeamDetail,
  TitleWrap,
  TeamLine,
  NameView,
  ImgWrap,
  ImgBorder,
  TabList,
  TabWrap,
  TabView,
  ActiveTab,
  RegionView,
  MainWrap,
  JObMain,
  DetailLink,
  JobDetail,
  DetailLeft,
  DetailWrap,
  ImageWrap,
  DetailRight,
  DetailRIghtText,
  DetailPosition,
  JobsMobi,
  UseCaseWrapMobi
};
