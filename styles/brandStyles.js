import styled from 'styled-components';
import { Body2, Body3, ButtonText, Heading2, Heading4, LinkTxt } from './styles';
const BrandMain = styled.div`
  padding: 80px 0 50px 0;
`;
const BrandHeroSection = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
  text-align: center;
  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 20px 0;
  }
  p {
    ${Body2};
    color: ${({ theme }) => theme.colors.body};
    margin: 0 0 32px 0;
  }
`;
const BrandName = styled.div`
  padding: 50px 0;
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 12px 0;
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.body};
    ${Body3};
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
    /* cursor: pointer;
    overflow: hidden;
    position: relative; */
    cursor: pointer;
  }
  .hover-name {
    transform: translate3d(0, 70px, 0);
  }
  .effect-goliath:hover .hover-name {
    -webkit-transform: translate3d(0, 2px, 0);
    transform: translate3d(0, 2px, 0);
    transition: transform 0.35s;
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
`;
const BrandImageLeft = styled.div`
  padding: 160px 0;
  background-color: ${({ theme }) => theme.colors.greendark};
  border-radius: 10px;
  width: 100%;
  text-align: center;
  position: relative;
  display: inline-flex;
  justify-content: center;
  margin-top: -2px;
`;
const HoverSection = styled.div`
  /* display: flex; */
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.greenlight};
  padding: 17px 24px;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  align-items: center;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  text-align: center;
  p {
    ${LinkTxt};
    color: ${({ theme }) => theme.colors.greendark};
  }
`;
const HoverLink = styled.div`
  padding: 17px 24px;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  align-items: center;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  text-align: center;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  p {
    ${LinkTxt};
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;
const BlackHover = styled.div`
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.greendark};
  padding: 17px 24px;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  align-items: center;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  text-align: center;
  p {
    ${LinkTxt};
    color: ${({ theme }) => theme.colors.greenlight};
  }
`;
const BrandImageRight = styled.div`
  padding: 160px 0;
  background-color: ${({ theme }) => theme.colors.greenlight};
  border-radius: 10px;
  width: 100%;
  text-align: center;
  position: relative;
  display: inline-flex;
  justify-content: center;
  margin-top: -2px;
`;
const CompanyIcon = styled.div`
  padding: 112px 0;
  background-color: ${({ theme }) => theme.colors.neutral};
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
`;
const ColorSection = styled.div`
  display: flex;
  gap: 63px;
  padding-top: 40px;
  .block2color {
    background-color: ${({ theme }) => theme.colors.greenlight};
  }
  .block3color {
    background-color: ${({ theme }) => theme.colors.greendark};
  }
  .effect-goliath {
    /* cursor: pointer;
    overflow: hidden;
    position: relative; */
    cursor: pointer;
  }
  .hover-name {
    transform: translate3d(0, 70px, 0);
  }
  .effect-goliath:hover .hover-name {
    -webkit-transform: translate3d(0, 2px, 0);
    transform: translate3d(0, 2px, 0);
    transition: transform 0.35s;
    img {
      transform: translate3d(0, 0px, 0);
      -webkit-transform: translate3d(0, 0, 0);
    }
  }
  .hover-name {
    backface-visibility: hidden;
    transition: transform 0.35s;
  }
`;
const Block1 = styled.div`
  height: 366px;
  width: 366px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  position: relative;
`;
const BlockSub = styled.div`
  background-color: ${({ theme }) => theme.colors.greendark};
  border-radius: 0px 0px 10px 10px;
  padding: 8px 20px;
  position: absolute;
  bottom: -2px;
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
    color: ${({ theme }) => theme.colors.greenlight};
  }
  span {
    color: ${({ theme }) => theme.colors.greenlight};
    ${Body2};
    letter-spacing: 0;
  }
`;
const BlockLight = styled.div`
  background-color: ${({ theme }) => theme.colors.greenlight};
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
    color: ${({ theme }) => theme.colors.greendark};
  }
  span {
    color: ${({ theme }) => theme.colors.greendark};
    ${Body2}
  }
`;
const ImgWrap = styled.div`
  width: 100%;
  overflow: hidden;
  /* border-radius: 4px; */
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
