import styled, { css } from 'styled-components';
import Image from 'next/image';
import { Body2, Heading2, MbBody2, MobileH2 } from '../../styles/styles';

const BlockLeft = styled.div`
  max-width: 552px;
`;
const Head = styled.h2`
  margin: 0;
  color: var(--title);
  ${Heading2}
  @media only screen and (max-width: 749px) {
    ${MobileH2}
  }
`;
const HeadCaption = styled.div`
  margin: 20px 0 32px;
  p {
    ${Body2}
    color: var(--body);
    margin: 12px 0 0;
    :first-child {
      margin: 0;
    }
    @media only screen and (max-width: 749px) {
      ${MbBody2}
      margin: 8px 0 0;
    }
  }
`;
const BlockRight = styled.div`
  margin: 0px 0 100px 0;

  @media only screen and (max-width: 768px) {
    margin: 0 auto 60px;
  }
`;
const FeatureHeroSection = styled.div`
  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
  padding-top: 180px;
  overflow: hidden;
  @media only screen and (max-width: 749px) {
    padding-top: 150px;
  }
`;

const BLockImg = styled.div`
  position: relative;
  padding: 20px;
  ${(props) =>
    props.lineColor &&
    css`
      border: 1.5px solid var(${props.lineColor});
    `}
  border-radius: 10px;
  cursor: pointer;
  .heroimage {
    max-width: 570px;
    width: 100%;
  }
  ::after {
    content: '';
    position: absolute;
    ${(props) =>
      props.lineColor &&
      css`
        border-top: 1.5px solid var(${props.lineColor});
      `}

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
  @media only screen and (max-width: 768px) {
    padding: 9px;
  }
`;

const FeatureImage = styled(Image)`
  width: 570px;
  height: 392px;
  @media only screen and (max-width: 1200px) {
    width: auto;
    height: auto;
  }
`;

const VideoPlay = styled.div`
  background: var(--light-modal-bg-color);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  .play {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    max-width: 819px;
    max-height: 461px;
    width: 100%;
    height: 100%;
  }
  .iframecss {
    max-width: 819px;
    width: 100%;
    max-height: 461px;
    height: 100%;
  }
`;

const VideoClose = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02;
  color: var(--white);
  margin: 0;
  @media only screen and (min-width: 2160px) {
    font-size: 20px;
  }
`;

const HeroBlock = styled.div`
  display: flex;
  gap: 60px;

  @media only screen and (max-width: 996px) {
    flex-wrap: wrap;
    gap: 40px;
  }
`;
export {
  Head,
  HeadCaption,
  BlockLeft,
  BlockRight,
  FeatureHeroSection,
  BLockImg,
  FeatureImage,
  VideoPlay,
  VideoClose,
  HeroBlock
};
