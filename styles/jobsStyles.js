import styled from "styled-components";
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
  Name,
} from "./styles";

const MainWrap = styled.div`
  background: #fffffd;
`;
const HeroJobSection = styled.div`
  padding: 100px 0 50px;
`;
const JobsWrap = styled.div`
  border-radius: 8px;
  background-image: linear-gradient(
      90deg,
      #000000 18.89%,
      rgba(0, 0, 0, 0) 82.84%
    ),
    url("/images/jobsbg.svg");
  background-position: 0 0, 50% 50%;
  background-size: auto, cover;
  background-repeat: repeat, no-repeat;
  padding-top: 80px;
  padding-left: 80px;
  padding-bottom: 141px;
`;
const UseCaseWrap = styled.div`
  width: 100%;
  max-width: 580px;
  h2 {
    ${Heading2};
    margin: 0;
    color: ${({ theme }) => theme.colors.whiteColor};
  }
  p {
    ${Body2};
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 20px 0 0;
    letter-spacing: 0.02em;
  }
`;
const CareerSection = styled.div`
  padding: 50px 0;
`;
const CareerBlock = styled.div`
  display: flex;
  gap: 60px;
`;
const RoleBlock = styled.div`
  max-width: 612px;
  width: 100%;
`;
const TeamBlock = styled.div`
  /* padding-left: 30px; */
  max-width: 552px;
  width: 100%;
`;
const RoleWrap = styled.div`
  margin-bottom: 40px;
  h3 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 12px 0;
  }
  p {
    ${Body5};
    color: ${({ theme }) => theme.colors.body};
    letter-spacing: 0.02em;
    margin: 0;
  }
`;
const AboutWrap = styled.div`
  h3 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 12px 0;
  }
  p {
    display: block;
    ${Body5};
    color: ${({ theme }) => theme.colors.body};
    letter-spacing: 0.02em;
    margin: 0;
    a {
      color: ${({ theme }) => theme.colors.primary};
      display: inline-block;
      white-space: break-spaces;
      :hover {
        color: ${({ theme }) => theme.colors.title};
      }
    }
  }
`;
const JobDetailWrap = styled.div``;
const JobView = styled.div`
  margin-bottom: 18px;
  h4 {
    margin: 0;
    ${HeaderFont};
    color: ${({ theme }) => theme.colors.title};
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
    border-bottom: 1px dashed #000000;
    p {
      color: #000000;
    }
    .bgdot {
      background-color: #000000;
    }
  }
`;
const LeftRow = styled.div`
  p {
    margin: 0;
    ${Body5};
    color: ${({ theme }) => theme.colors.body};
  }
`;
const RightRow = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
    ${FooterText};
    color: ${({ theme }) => theme.colors.lightgray};
  }
`;
const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.border};
  margin: 0 8px;
`;
const TeamView = styled.div`
  margin-top: 40px;
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
  }
`;
const TeamDetail = styled.div`
  margin-top: 20px;
`;
const TitleWrap = styled.div`
  margin-bottom: 16px;
  :last-child {
    margin-bottom: 0;
  }
`;
const TeamLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    ${Body5};
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 0.02em;
    :hover {
      color: ${({ theme }) => theme.colors.title};
    }
  }
  p {
    ${FooterText};
    color: ${({ theme }) => theme.colors.lightgray};
    margin: 0;
  }
`;
const NameView = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  p {
    ${Name};
    margin: 0;
    color: ${({ theme }) => theme.colors.lightgray};
  }
`;
const ImgWrap = styled.div`
  margin-top: 40px;
`;
const ImgBorder = styled.div`
  border: 1px solid #000000;
  border-radius: 4px;
  overflow: hidden;
  background-color: #ffffff;
  max-height: 320px;
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
      color: ${({ theme }) => theme.colors.black};
    }
    border: 1px solid #000000;
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
    color: ${({ theme }) => theme.colors.border};
  }
  border: 1px solid #ccccd0;
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
  background: #000;
  width: 1px;
  height: 21px;
`;
const RegionView = styled.div`
  border-top: 1px solid #000000;
  margin-top: 20px;
  position: relative;
  padding-top: 15px;
  ::after {
    content: "";
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
const BenefitsSection = styled.div`
  padding: 50px 0 0;
`;
const BenefitWrap = styled.div`
  h4 {
    margin: 0;
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
  }
`;
const BenefitBox = styled.div`
  border: 1px solid #000000;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 40px;
`;
const BoxView = styled.div`
  padding: 28px 24px;
  border-right: 1px solid #120800;
  border-bottom: 1px solid #120800;
  margin: -1px;
  :last-child {
    border-right: none;
  }
`;
const ImgIcon = styled.div`
  display: inline-flex;
`;
const DetailView = styled.div`
  h4 {
    ${Body1};
    margin: 20px 0 0 0;
    color: ${({ theme }) => theme.colors.title};
  }
  p {
    ${Body4};
    margin: 12px 0 0;
    color: ${({ theme }) => theme.colors.body};
  }
`;
const JObMain = styled.div`
  padding-top: 40px;
  margin-top: 80px;
  padding-bottom: 100px;
`;
const DetailLink = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  p {
    ${LinkTxt};
    margin: 0;
    color: ${({ theme }) => theme.colors.lightgray};
  }
`;
const JobDetail = styled.div`
  display: flex;
  padding-top: 28px;
  gap: 46px;
`;
const DetailLeft = styled.div`
  max-width: 260px;
  width: 100%;
  position: sticky;
  top: 100px;
  h3 {
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 24px 0;
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
    color: ${({ theme }) => theme.colors.lightgray};
  }
  span {
    ${Body4};
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
  }
`;
const ImageWrap = styled.div`
  display: flex;
  gap: 4px;
  padding-bottom: 11px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
`;
const DetailRight = styled.div``;
const DetailText = styled.ul`
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
  }
`;
const DeatilTextSub = styled.li`
  p {
    ${Body3};
    color: ${({ theme }) => theme.colors.body};
    margin: 24px 0 0 0;
    :first-child {
      margin: 20px 0 0 0;
    }
  }
  span {
    ${Body3};
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
  }
`;
const DetailInner = styled.ul`
  padding-top: 40px;
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 20px 0;
  }
  .bullet {
    padding-top: 7px;
  }
  .textcolor {
    color: ${({ theme }) => theme.colors.darkgray};
  }
`;
const DetailInnerSub = styled.li`
  display: flex;
  gap: 16px;
  align-items: flex-start;

  .mr0 {
    margin-bottom: 0;
  }
  p {
    ${Body4};
    color: ${({ theme }) => theme.colors.body};
    margin: 0 0 16px 0;
    /* :last-child{
    margin: 0;
  } */
    span {
      color: ${({ theme }) => theme.colors.title};
    }
  }
`;
const BulletImage = styled.div`
  padding: 5px 10px;
  margin-top: 7px;
  background-color: ${({ theme }) => theme.colors.greenmidlight};
`;
const DetailRIghtText = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
    padding-top: 40px;
    :first-child {
      padding-top: 0;
    }
  }

  b {
    font-weight: 400;
  }

  p {
    ${Body3};
    color: ${({ theme }) => theme.colors.body};
    margin: 24px 0 0 0;
    :first-child {
      margin: 20px 0 0 0;
    }
    a {
      display: inline-block;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  span {
    ${Body3};
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
  }
  li {
    position: relative;
    ::before {
      content: "";
      position: absolute;
      top: 7px;
      left: 0;
      width: 20px;
      height: 10px;
      background-color: ${({ theme }) => theme.colors.greenmidlight};
    }
    p {
      padding: 0 10px 0 36px;
      margin-top: 7px;
      font-weight: 400;
      font-size: 18px;
      color: #131313;
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
  AboutWrap,
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
  BenefitsSection,
  BenefitWrap,
  BenefitBox,
  BoxView,
  ImgIcon,
  DetailView,
  MainWrap,
  JObMain,
  DetailLink,
  JobDetail,
  DetailLeft,
  DetailWrap,
  ImageWrap,
  DetailRight,
  DetailText,
  DeatilTextSub,
  DetailInner,
  DetailInnerSub,
  BulletImage,
  DetailRIghtText,
  DetailPosition,
};
