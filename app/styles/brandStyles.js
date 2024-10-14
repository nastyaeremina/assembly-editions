import styled from 'styled-components';
import { Body2, Body3, ButtonText, Heading2, Heading4, LinkTxt, MbBody2, MbBody3, MobileH2, MobileH4 } from './styles';

const BrandMain = styled.div`
  padding: 80px 0 50px 0;
  @media only screen and (max-width: 769px) {
    padding-bottom: 40px;
    padding-top: 112px;
  }
`;
const BrandHeroSection = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
  text-align: center;
  h1 {
    ${Heading2};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  p {
    ${Body2};
    color: var(--body);
    margin: 0 0 32px 0;
  }
  @media only screen and (max-width: 769px) {
    padding: 36px 0 40px;
    h1 {
      ${MobileH2}
    }
    p {
      ${MbBody2}
    }
  }
`;
const BrandName = styled.div`
  padding: 50px 0;
  h2 {
    ${Heading4};
    color: var(--title);
    margin: 0 0 12px 0;
  }
  p {
    margin: 0;
    color: var(--body);
    ${Body3};
  }
  @media only screen and (max-width: 749px) {
    padding: 40px 0;
    h2 {
      ${MobileH4}
    }
    p {
      ${MbBody3}
    }
  }
`;
const BrandImage = styled.div`
  display: flex;
  gap: 50px;
  padding-top: 40px;
  width: 100%;
  .hide {
    display: none;
  }
  .effect-goliath {
    cursor: pointer;
  }
  .hover-name {
    transform: translate3d(0, 70px, 0);
    @media only screen and (max-width: 769px) {
      transform: none;
    }
  }
  .effect-goliath:hover .hover-name {
    -webkit-transform: translate3d(0, 0px, 0);
    transform: translate3d(0, 0px, 0);
    transition: transform 0.35s;
    @media only screen and (max-width: 769px) {
      transform: none;
    }
    img {
      transform: translate3d(0, 0px, 0);
      -webkit-transform: translate3d(0, 0, 0);
    }
  }
  .hover-name {
    backface-visibility: hidden;
    transition: transform 0.35s;
  }
  p {
    margin: 0;
  }
  @media only screen and (max-width: 769px) {
    flex-wrap: wrap;
    gap: 28px;
    padding-top: 28px;
  }
`;
const BrandImageLeft = styled.div`
  padding: 160px 0;
  background-color: var(--dark-green);
  border-radius: 10px;
  width: 100%;
  text-align: center;
  position: relative;
  display: inline-flex;
  justify-content: center;
  margin-top: -2px;
  .firsticon {
    display: block;
    @media only screen and (max-width: 749px) {
      display: none;
    }
  }
  .mobileshow {
    display: none;
    @media only screen and (max-width: 749px) {
      display: block;
    }
  }
  @media only screen and (max-width: 749px) {
    padding: 89px 0 88px;
  }
`;
const HoverSection = styled.div`
  gap: 12px;
  background-color: var(--light-green);
  padding: 17px 24px;
  border-radius: 0px 0px 7px 7px;
  display: flex;
  align-items: center;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  text-align: center;
  p {
    ${LinkTxt};
    color: var(--dark-green);
  }
  img {
    max-width: 20px;
    max-height: 20px;
  }
  @media only screen and (max-width: 991px) {
    right: -1px;
    left: -1px;
    bottom: -1px;
  }
  @media only screen and (max-width: 749px) {
    right: -1px;
    left: -1px;
    bottom: -1px;
  }
  @media only screen and (max-width: 749px) {
    padding: 10px 13px;
    p {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
    }
  }
  .downdesk {
    display: block;
    @media only screen and (max-width: 749px) {
      display: none;
    }
  }
  .downmobi {
    display: none;
    @media only screen and (max-width: 749px) {
      display: block;
    }
  }
`;
const HoverLink = styled.div`
  padding: 17px 24px;
  border-radius: 0px 0px 7px 7px;
  display: flex;
  align-items: center;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  text-align: center;
  gap: 12px;
  background-color: var(--primary);
  p {
    ${LinkTxt};
    color: var(--white);
  }
  @media only screen and (max-width: 749px) {
    padding: 10px 13px;
    p {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
    }
  }
  .downdesk {
    display: block;
    @media only screen and (max-width: 749px) {
      display: none;
    }
  }
  .downmobi {
    display: none;
    @media only screen and (max-width: 749px) {
      display: block;
    }
  }
`;
const BlackHover = styled.div`
  gap: 12px;
  background-color: var(--dark-green);
  padding: 17px 24px;
  border-radius: 0px 0px 7px 7px;
  display: flex;
  align-items: center;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  text-align: center;
  p {
    ${LinkTxt};
    color: var(--light-green);
  }
  @media only screen and (max-width: 749px) {
    padding: 10px 13px;
    p {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
    }
  }
  .downdesk {
    display: block;
    @media only screen and (max-width: 749px) {
      display: none;
    }
  }
  .downmobi {
    display: none;
    @media only screen and (max-width: 749px) {
      display: block;
    }
  }
`;
const BrandImageRight = styled.div`
  padding: 160px 0;
  background-color: var(--light-green);
  border-radius: 10px;
  width: 100%;
  text-align: center;
  position: relative;
  display: inline-flex;
  justify-content: center;
  margin-top: -2px;
  .firsticon {
    display: block;
    @media only screen and (max-width: 749px) {
      display: none;
    }
  }
  .mobileshow {
    display: none;
    @media only screen and (max-width: 749px) {
      display: block;
    }
  }
  @media only screen and (max-width: 749px) {
    padding: 89px 0 88px;
  }
`;
const CompanyIcon = styled.div`
  padding: 112px 0;
  background-color: var(--neutral);
  border-radius: 10px;
  width: 100%;
  text-align: center;
  position: relative;
  display: inline-flex;
  justify-content: center;
  :hover .hide {
    position: absolute;
    bottom: 0;
    display: flex;
    transform: translate3d(0, 0, 0);
    right: 0;
    left: 0;
  }
  .companyicon {
    display: block;
    @media only screen and (max-width: 749px) {
      display: none;
    }
  }
  .companyiconmobi {
    display: none;
    @media only screen and (max-width: 749px) {
      display: block;
    }
  }
  @media only screen and (max-width: 749px) {
    padding: 62px 0;
  }
`;
const ColorSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 63px;
  padding-top: 40px;
  .block2color {
    background-color: var(--light-green);
  }
  .block3color {
    background-color: var(--dark-green);
  }
  .effect-goliath {
    cursor: pointer;
  }
  .hover-name {
    transform: translate3d(0, 70px, 0);
    @media only screen and (max-width: 769px) {
      transform: none;
    }
  }
  .effect-goliath:hover .hover-name {
    -webkit-transform: translate3d(0, 0px, 0);
    transform: translate3d(0, 0px, 0);
    transition: transform 0.35s;
    img {
      transform: translate3d(0, 0px, 0);
      -webkit-transform: translate3d(0, 0, 0);
    }
    @media only screen and (max-width: 769px) {
      transform: none;
    }
  }
  .hover-name {
    backface-visibility: hidden;
    transition: transform 0.35s;
  }
  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding-top: 28px;
    border-radius: 10px;
  }
  @media only screen and (max-width: 749px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;
const Block1 = styled.div`
  height: 366px;
  width: 366px;
  background-color: var(--primary);
  border-radius: 10px;
  position: relative;
  @media only screen and (max-width: 769px) {
    height: 335px;
    width: 100%;
  }
`;
const BlockSub = styled.div`
  background-color: var(--dark-green);
  border-radius: 0px 0px 7px 7px;
  padding: 8px 20px;
  position: absolute;
  bottom: 0px;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;

  align-items: center;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  text-align: center;
  gap: 12px;
  p {
    ${ButtonText};
    color: var(--light-green);
  }
  span {
    color: var(--light-green);
    ${Body2};
    letter-spacing: 0;
  }

  @media only screen and (max-width: 749px) {
    p {
      font-size: 16px;
      line-height: 23px;
    }
    span {
      font-size: 19px;
      line-height: 25px;
    }
  }
`;
const BlockLight = styled.div`
  background-color: var(--light-green);
  border-radius: 0px 0px 10px 10px;
  padding: 8px 20px;
  position: absolute;
  bottom: -2px;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  p {
    ${ButtonText};
    color: var(--dark-green);
  }
  span {
    color: var(--dark-green);
    ${Body2}
  }
  @media only screen and (max-width: 749px) {
    p {
      font-size: 16px;
      line-height: 23px;
    }
    span {
      font-size: 19px;
      line-height: 25px;
    }
  }
`;
const ImgWrap = styled.div`
  width: 100%;
  overflow: hidden;
`;
export {
  BrandHeroSection,
  BrandName,
  BrandImage,
  BrandImageLeft,
  HoverSection,
  BlackHover,
  BrandImageRight,
  CompanyIcon,
  HoverLink,
  ColorSection,
  Block1,
  BlockSub,
  BlockLight,
  BrandMain,
  ImgWrap
};
