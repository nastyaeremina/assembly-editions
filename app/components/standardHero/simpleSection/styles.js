import styled, { css } from 'styled-components';
import { Body3, Heading2, Heading3, MbBody3, MobileH2, MobileH3 } from '../../../styles/styles';

const SimpleMainSection = styled.div`
  overflow: hidden;
`;
const HeroBlock = styled.div`
  display: flex;
  gap: 60px;
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 40px;
    padding-bottom: 80px;
  }
`;

const BlockLeft = styled.div`
  max-width: 567px;
  h2 {
    margin: 0px;
    color: var(--title);
    ${Heading3}
    ${(props) =>
      props.isHeading1 &&
      css`
        ${Heading2}
      `}
  }
  @media only screen and (max-width: 749px) {
    h2 {
      ${MobileH3}
      ${(props) =>
        props.isHeading1 &&
        css`
          ${MobileH2}
        `}
    }
  }
`;
const BlockRight = styled.div``;
const HeroBody = styled.div`
  color: var(--body);
  ${Body3}
  margin: 16px 0 28px 0;
  ${(props) =>
    props.isHeading1 &&
    css`
      margin: 20px 0 32px 0;
    `}
  @media only screen and (max-width: 749px) {
    ${MbBody3}
  }
`;
const BlockImg = styled.div`
  position: relative;
  border: 1px solid var(--dark-green);

  border-radius: 4px;
  cursor: pointer;
  .heroimage {
    max-width: 612px;
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
const FeatureImage = styled.img`
  width: 612px;
  height: auto;
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
export { BlockLeft, BlockRight, HeroBlock, HeroBody, BlockImg, FeatureImage, SimpleMainSection, VideoPlay, VideoClose };
