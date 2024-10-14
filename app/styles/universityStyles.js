import styled, { css } from 'styled-components';
import {
  Body2,
  Body5,
  HeaderFont,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  LinkTxt,
  MbBody2,
  MobileH2,
  Value
} from './styles';

const UniversitySection = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
  @media only screen and (max-width: 749px) {
    padding-bottom: 80px;
    padding-top: 48px;
  }
`;
const UniversityHero = styled.div`
  padding-top: 100px;
  text-align: center;
  max-width: 780px;
  margin: 0 auto;
  h1 {
    ${Heading2};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  p {
    color: var(--body);
    margin: 0;
    ${Body2};
  }
  @media only screen and (max-width: 749px) {
    h1 {
      ${MobileH2};
      color: var(--title);
      margin: 0 0 20px 0;
    }
    p {
      color: var(--body);
      margin: 0;
      ${MbBody2};
    }
  }
`;
const FeatureWrap = styled.div`
  display: flex;
  gap: 36px;
  padding-top: 100px;
  @media only screen and (max-width: 991px) {
    width: 100%;
  }
  @media only screen and (max-width: 749px) {
    padding-top: 80px;
  }
`;
const FeatureLeft = styled.div`
  position: relative;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const LeftWrap = styled.div`
  position: sticky;
  top: 148px;
`;
const InputWrap = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 15px;
    left: 20px;
  }
`;
const Input = styled.input`
  ${Value};
  color: var(--title);
  letter-spacing: 0.01em;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  padding: 11px 20px 11px 55px;
  border: 1.5px solid var(--ghost-gray);
  border-radius: 48px;
  width: 306px;
  outline: 0;
  transition: 0.3s all;
  ::placeholder {
    color: var(--medium-gray);
  }
  :hover {
    border: 1.5px solid var(--border);
    box-shadow: 0px 4px 8px var(--black-shadow-7);
  }
  :active {
    border: 1.5px solid var(--title);
    box-shadow: 0px 4px 8px var(--black-shadow-7);
  }
  :focus {
    border: 1.5px solid var(--title);
    box-shadow: 0px 4px 8px var(--black-shadow-7);
  }
`;
const Catagory = styled.ul`
  padding-top: 50px;
  .active {
    color: var(--title);
  }
  h4 {
    padding-bottom: 20px;
    margin: 0;
    ${Heading5};
    color: var(--title);
    border-bottom: 1px solid var(--black);
    letter-spacing: 0.02em;
    max-width: 306px;
    width: 100%;
  }
`;
const Catagoryitem = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid var(--black);
  a {
    ${LinkTxt};
    letter-spacing: 0.02em;
    color: var(--primary);
    margin: 0;
    :hover {
      color: var(--title);
    }
    :active {
      color: var(--title);
    }
    ${(props) =>
      props.isActive &&
      css`
        color: var(--title);
      `}
  }
`;
const FeatureRight = styled.div`
  width: 100%;
  margin-top: -40px;
  position: relative;
  h2 {
    ${Heading4};
    color: var(--title);
    margin: 0 0 28px 0;
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
  }
`;

const FeatureMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 36px;
  row-gap: 28px;
  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 749px) {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`;
const FeatureCard = styled.div`
  border-radius: 4px;
  max-height: 152px;
  height: 100%;
  position: relative;
  :hover .hovericon {
    display: block;
    opacity: 0.4;
    background: var(--black);
  }
  :hover .hoveritem {
    opacity: 1;
  }
  @media only screen and (max-width: 991px) {
    max-height: 192px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media only screen and (max-width: 769px) {
    :hover .hovericon {
      display: none;
    }
    :hover .hoveritem {
      opacity: 0;
    }
  }
`;
const ExtensionsSection = styled.div`
  padding-top: 40px;
  ${(props) =>
    props.isNotFirst &&
    css`
      padding-top: 40px;
    `}
  ${(props) =>
    props.isSelected &&
    css`
      padding-top: 100px;
    `}
    @media only screen and (max-width: 991px) {
    width: 100%;
  }
`;

const DetailVideoMain = styled.div`
  padding-top: 80px;
`;
const DetailVideoHero = styled.div`
  padding: 40px 0;
  h1 {
    ${Heading3};
    color: var(--title);
    margin: 0;
  }
  @media only screen and (max-width: 769px) {
    padding-bottom: 28px;
  }
`;
const Backlink = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 28px;
  :hover {
    p {
      color: var(--title);
    }
    svg path {
      stroke: var(--title);
    }
  }
  p {
    ${LinkTxt};
    margin-top: 20px;
    color: var(--medium-gray);
  }
  @media only screen and (max-width: 769px) {
    p {
      ${HeaderFont}
    }
  }
`;

const VideoSection = styled.div`
  padding-bottom: 100px;
  .mainimage {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 2;
    max-width: 100%;
    @media only screen and (max-width: 769px) {
      max-width: 80px;
      width: 100%;
    }
  }
  p {
    ${Body2};
    color: var(--body);
    margin: 40px 0 0 0;
  }
  @media only screen and (max-width: 769px) {
    padding-bottom: 80px;
    p {
      margin-top: 28px;
      ${MbBody2}
    }
  }
  .yt-lite {
    border-radius: 4px;
    transition: opacity 0.35s ease;
    :hover {
      ::before {
        content: '';
        background-color: var(--black);
        opacity: 0.4;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        @media only screen and (max-width: 749px) {
          display: none;
        }
      }
      .icon-player {
        background-image: url('/images/ytbicon.svg');
        width: 137px;
        height: 96px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 1;
        @media only screen and (max-width: 749px) {
          background-image: url('/images/mobileytb.svg');
          width: 66px;
          height: 46px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 1;
        }
      }
    }
    @media only screen and (max-width: 749px) {
      ::before {
        content: '';
        background-color: var(--black);
        opacity: 0.4;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
      }
      .icon-player {
        background-image: url('/images/mobileytb.svg');
        width: 66px;
        height: 46px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 1;
      }
    }
  }
`;
const VIdeoWrap = styled.div`
  padding-bottom: 100px;
  h2 {
    ${Heading3};
    color: var(--title);
    margin: 0;
  }
  @media only screen and (max-width: 769px) {
    padding-bottom: 80px;
  }
`;
const UniversityVideo = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-top: 40px;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 1fr 1fr;
    padding-top: 28px;
  }
  @media only screen and (max-width: 376px) {
    grid-template-columns: 1fr;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  border-radius: 4px;
  transition: background 0.3s ease;
  @media only screen and (max-width: 769px) {
    max-height: 192px;
    height: 100%;
  }
`;
const HoverButton = styled.div`
  position: absolute;

  left: 50%;
  top: 50%;
  text-align: center;
  opacity: 0;
  transition: opacity 0.35s ease;
  transform: translate(-50%, -50%);
`;
const OverLay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: black;
  opacity: 0.4;
  border-radius: 8px;
  @media only screen and (max-width: 769px) {
    border-radius: 4px;
    bottom: 3px;
  }
`;
const YoutubeWrap = styled.div`
  .icon-player {
    background-image: url('/images/ytbicon.svg');
    width: 137px;
    height: 96px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
`;

const EmptySection = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  p {
    ${Body5};
    color: var(--title);
    letter-spacing: 0.02em;
  }
  @media only screen and (max-width: 749px) {
    /* display: none; */
  }
`;
export {
  UniversitySection,
  UniversityHero,
  FeatureWrap,
  FeatureLeft,
  LeftWrap,
  InputWrap,
  Input,
  Catagory,
  Catagoryitem,
  FeatureRight,
  FeatureMenu,
  FeatureCard,
  ExtensionsSection,
  DetailVideoMain,
  DetailVideoHero,
  Backlink,
  VideoSection,
  VIdeoWrap,
  UniversityVideo,
  Overlay,
  HoverButton,
  OverLay,
  YoutubeWrap,
  EmptySection
};
