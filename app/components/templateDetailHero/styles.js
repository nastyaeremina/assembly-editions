import styled, { css } from 'styled-components';
import Image from 'next/image';
import { Body2, Body6, Heading2, MbBody2, MobileH2, MobileH3 } from '../../styles/styles';

const TemplateHeroSection = styled.div`
  overflow: hidden;
  @media only screen and (max-width: 449px) {
    padding-top: 148px;
  }
`;

const HeroBlock = styled.div`
  display: flex;
  gap: 50px;

  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 40px;
  }
`;

const BlockLeft = styled.div`
  max-width: 612px;
  h1 {
    margin: 0px 0 16px 0;
    color: var(--title);
    ${Heading2}
  }
  @media only screen and (max-width: 1024px) {
    max-width: 980px;
  }
  @media only screen and (max-width: 749px) {
    h1 {
      ${MobileH2}
    }
    p {
      ${MbBody2}
    }
  }
  @media only screen and (max-width: 749px) {
    h1 {
      ${MobileH3}
    }
    p {
      ${MbBody2}
    }
  }
`;
const BlockRight = styled.div`
  margin: 0px 0 100px 0;

  @media only screen and (max-width: 1024px) {
    margin: 0 auto 60px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 0 60px;
    width: 100%;
  }
`;
const TabView = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 20px;
  cursor: pointer;
  span {
    ${Body6};
    color: var(--border);
  }
`;

const BLockImg = styled.div`
  position: relative;
  border: 1px solid var(--dark-green);

  border-radius: 4px;
  cursor: pointer;
  .heroimage {
    max-width: 934px;
    width: 100%;
    display: flex;
    border-radius: 3px;
    overflow: hidden;
  }
  ::after {
    content: '';
    position: absolute;
    border-top: 1px solid var(--dark-green);
    max-width: 100vw;
    width: 100vw;
    top: 50%;
    left: 100%;
  }
  .icon {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
`;

const FeatureImage = styled(Image)`
  width: 513px;
  height: auto;
  @media only screen and (max-width: 1200px) {
    width: auto;
    height: auto;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 100px;
  @media only screen and (max-width: 1024px) {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 449px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const ActiveTab = styled.div`
  position: absolute;
  top: -21px;
`;

const TabSection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  .activetab {
    border: 1px solid var(--black);
    span {
      color: var(--black);
    }
  }
`;

const HeroBody = styled.div`
  p {
    color: var(--body);
    ${Body2}
    margin: 0 0 32px 0;
  }
  @media only screen and (max-width: 749px) {
    p {
      ${MbBody2}
      margin: 0 0 28px 0;
    }
  }
`;
export {
  TemplateHeroSection,
  HeroBlock,
  BlockLeft,
  BlockRight,
  TabView,
  BLockImg,
  FeatureImage,
  ButtonSection,
  ActiveTab,
  TabSection,
  HeroBody
};
