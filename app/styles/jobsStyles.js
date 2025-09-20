import styled from 'styled-components';
import { body_regular, body_semibold, button_semibold, h1_semibold, h2_semibold, h4_regular } from './typography';

const MainWrap = styled.div`
  background: var(--off-white-300);
  padding: var(--space-80) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-80);
  @media only screen and (max-width: 991px) {
    padding: var(--space-64) 0;
    gap: var(--space-64);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-64) 0 var(--space-48);
    gap: var(--space-48);
  }
`;

const CareerSection = styled.div`
  padding: var(--space-64) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-40) 0;
  }
  @media only screen and (max-width: 749px) {
    padding: var(--space-48) 0;
  }
`;
const CareerBlock = styled.div``;
const RoleBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-64);
  align-items: flex-start;
  @media only screen and (max-width: 749px) {
    gap: var(--space-32);
  }
`;

const RoleWrap = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
  align-items: flex-start;
  h2 {
    ${h2_semibold};
    color: var(--title);
    margin: 0;
  }
  p {
    ${body_regular};
    color: var(--title);
    margin: 0;
  }
`;
const JobDetailWrap = styled.div`
  width: 100%;
`;
const JobView = styled.div`
  margin-bottom: var(--space-32);
  :last-child {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 749px) {
    margin-bottom: var(--space-24);
  }
`;
const RoleList = styled.div`
  margin: var(--space-8) 0px 0px;
  display: flex;
  flex-direction: column;
`;
const RoleRow = styled.div`
  margin: var(--space-20) 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-40);

  :hover {
    p {
      color: var(--black);
    }
    .bgdot {
      background-color: var(--black);
    }
  }
`;
const LeftRow = styled.div`
  width: 100%;
  p {
    margin: 0;
    ${body_regular};
    color: var(--title);
  }
  @media only screen and (max-width: 749px) {
    width: unset;
    max-width: unset;
  }
`;
const RightRow = styled.div`
  width: 100%;
  p {
    margin: 0;
    ${body_regular};
    color: var(--title);
  }
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

const ImgWrap = styled.div`
  margin-top: 40px;
`;

const JObMain = styled.div`
  padding: var(--space-80) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-64) 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-48) 0;
  }
`;

const JobDetail = styled.div`
  display: flex;
  gap: var(--space-96);
  padding: var(--space-64) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-40) 0;
    gap: var(--space-48);
    flex-direction: column;
  }
  @media only screen and (max-width: 767px) {
    padding: var(--space-48) 0;
  }
`;
const DetailLeft = styled.div`
  position: sticky;
  top: var(--space-120);
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
  max-width: 293px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    width: 100%;
    position: unset;
    max-width: 100%;
  }
  @media only screen and (max-width: 991px) and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-24);
  }
`;
const DetailWrap = styled.div`
  display: flex;
  gap: var(--space-8);
  flex-direction: column;
  p {
    ${button_semibold};
    margin: 0;
    color: var(--title);
  }
  span {
    ${body_regular};
    margin: 0;
    color: var(--title);
  }
`;
const ImageWrap = styled.div`
  display: flex;
  margin-left: 12px;
  a {
    width: 40px;
    height: 40px;
    margin-left: -12px;
    &:focus-visible {
      border-radius: var(--radius-30);
      position: relative;
      z-index: 2;
    }
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-30);
    border: 1px solid var(--off-white-300);
  }
`;
const DetailRight = styled.div`
  max-width: 835px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-48);
  align-items: flex-start;
  @media only screen and (max-width: 991px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-40);
  }
`;

const DetailPosition = styled.div`
  position: relative;
  max-width: 293px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    max-width: 100%;
  }
`;

const JobTitle = styled.p`
  margin: 0;
  ${body_semibold};
  color: var(--title);
  padding: var(--space-12) 0 var(--space-20) 0;
  border-bottom: 1px solid var(--border-default);
`;
const Icon = styled.div`
  width: 16px;
  height: 16px;
`;

const NewHeroSection = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: var(--space-64);
  padding-bottom: var(--space-24);
  @media only screen and (max-width: 991px) and (min-width: 768px) {
    padding-bottom: var(--space-20);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-48);
    padding-top: var(--space-16);
  }
`;

const Title = styled.h1`
  margin: 0;
  ${h1_semibold}
  color: var(--title);
  max-width: 900px;
  width: 100%;
`;

const HeaderSeciton = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: var(--space-32);
`;

const ImageDiv = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  .image {
    width: 100%;
    height: 100%;
  }
`;

const ImageSection = styled.div`
  position: relative;
  display: flex;
  padding: 158px 0;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-default);
  overflow: hidden;
  border-radius: var(--radius-16);
  width: 100%;
  @media only screen and (max-width: 991px) {
    padding: 78px 32px;
  }
  @media only screen and (max-width: 449px) {
    border-radius: var(--radius-12);
    padding: var(--space-20);
  }
`;

const RoleDetails = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  gap: var(--space-12);
  width: 100%;
`;

const LogoSection = styled.div`
  display: flex;
  border-radius: var(--radius-16);
  padding: var(--space-28) var(--space-24);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  .logo-icon {
    path {
      fill: var(--off-white-100);
    }
  }
  @media only screen and (max-width: 991px) {
    padding: var(--space-22) var(--space-20);
  }
`;

const RoleSection = styled.div`
  display: flex;
  gap: var(--space-8);
  padding: var(--space-24);
  background: var(--off-white-100-with-10-opacity);
  border-radius: var(--radius-16);
  backdrop-filter: blur(28px);
  @media only screen and (max-width: 991px) {
    padding: var(--space-20);
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 600px) {
    padding: var(--space-8) var(--space-12);
    border-radius: var(--radius-8);
    flex-direction: column;
    gap: 0;
    width: 100%;
  }
`;

const Overlay = styled.div`
  background: var(--off-white-100-with-10-opacity);
  border-radius: var(--radius-16);
  backdrop-filter: blur(28px);
  width: 180px;
  height: 80px;
  @media only screen and (max-width: 991px) {
    width: 171px;
    height: 68px;
  }
`;

const WrapperDiv = styled.div`
  position: relative;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

const RoleTitle = styled.p`
  margin: 0;
  color: var(--off-white-100);
  ${h4_regular}
  opacity: 50%;
  white-space: nowrap;
`;
const Role = styled.p`
  margin: 0;
  color: var(--off-white-100);
  ${h4_regular}
  white-space: nowrap;
  @media only screen and (max-width: 991px) {
    white-space: normal;
  }
`;
const JobDetailSectionWrapper = styled.div`
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

const OverlayDiv = styled.div`
  background-color: var(--title);
  border: 1px solid var(--off-white-300);
  border-radius: var(--radius-30);
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: scale(0.98);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease, visibility 0s linear 0.3s;
`;

const AvtarWrapper = styled.div`
  position: relative;
  &:hover {
    .overlay {
      opacity: 40%;
      visibility: visible;
      pointer-events: auto;
      transform: scale(1);
      transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease, visibility 0s;
    }
  }
`;

export {
  CareerSection,
  CareerBlock,
  RoleBlock,
  RoleWrap,
  JobDetailWrap,
  JobView,
  RoleList,
  RoleRow,
  LeftRow,
  RightRow,
  ImgWrap,
  MainWrap,
  JObMain,
  JobDetail,
  DetailLeft,
  DetailWrap,
  ImageWrap,
  DetailRight,
  DetailPosition,
  JobTitle,
  Icon,
  NewHeroSection,
  Title,
  HeaderSeciton,
  ImageSection,
  ImageDiv,
  RoleDetails,
  LogoSection,
  RoleSection,
  Overlay,
  WrapperDiv,
  RoleTitle,
  Role,
  JobDetailSectionWrapper,
  OverlayDiv,
  AvtarWrapper
};
