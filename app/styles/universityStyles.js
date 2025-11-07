import styled, { css } from 'styled-components';
import {
  body_regular,
  button_regular,
  h2_semibold,
  h3_semibold,
  h4_regular,
  h4_semibold,
  label_regular
} from './typography';

const UniversitySection = styled.div`
  padding-bottom: 100px;
  @media only screen and (max-width: 749px) {
    padding-bottom: 80px;
  }
`;
const UniversityHero = styled.div`
  padding-top: 100px;
  text-align: center;
  max-width: 780px;
  margin: 0 auto;
  h1 {
    ${h2_semibold};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  p {
    color: var(--text-secondary);
    margin: 0;
    ${body_regular};
  }
  @media only screen and (max-width: 749px) {
    h1 {
      margin: 0 0 20px 0;
    }
  }
`;
const FeatureWrap = styled.div`
  display: flex;
  gap: 36px;
  @media only screen and (max-width: 991px) {
    width: 100%;
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
  top: 150px;
`;
const InputWrap = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 15px;
    left: 20px;
  }
`;
const ResponsiveInputWrap = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    position: relative;
    img {
      position: absolute;
      top: 15px;
      left: 20px;
    }
  }
`;
const Input = styled.input`
  ${button_regular};
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
const ResponsiveInput = styled.input`
  ${button_regular};
  color: var(--title);
  letter-spacing: 0.01em;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  padding: 11px 20px 11px 55px;
  border: 1.5px solid var(--ghost-gray);
  border-radius: 48px;
  width: 100%;
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
    ${h4_semibold};
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
  ${body_regular};
  letter-spacing: 0.02em;
  color: var(--primary);
  margin: 0;
  cursor: pointer;
  transition: color 0.6s ease;
  a {
    color: var(--primary);
  }

  :hover {
    color: var(--title);
    a {
      color: var(--title);
    }
  }
  :active {
    color: var(--title);
  }
  ${(props) =>
    props.isActive &&
    css`
      color: var(--title);
      a {
        color: var(--title);
      }
    `}
`;
const FeatureRight = styled.div`
  width: 100%;
  margin-top: -40px;
  position: relative;
  h2 {
    ${h4_semibold};
    color: var(--title);
    margin: 0 0 28px 0;
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    margin-top: 0;
  }
`;

const FeatureMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 36px;
  row-gap: 28px;
  @media only screen and (max-width: 749px) {
    grid-template-columns: 1fr;
    gap: 24px;
    row-gap: 24px;
  }
`;
const FeatureCard = styled.div`
  border-radius: 4px;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
  }
  :hover .hovericon {
    display: block;
    opacity: 0.4;
    background: var(--black);
  }
  :hover .hoveritem {
    opacity: 1;
  }
  @media only screen and (max-width: 991px) {
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
  h2 {
    scroll-margin-top: 70px;
  }
  ${(props) =>
    props.isNotFirst &&
    css`
      padding-top: 40px;
    `}
  @media only screen and (max-width: 991px) {
    width: 100%;
    padding: 0;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding-top: 40px;
  }
`;
const RightWrap = styled.div`
  width: 100%;
`;
const DetailVideoMain = styled.div`
  /* padding-top: 80px; */
`;
const DetailVideoHero = styled.div`
  padding: 0 0 40px;
  h1 {
    ${h3_semibold};
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
    ${body_regular};
    margin-top: 20px;
    color: var(--medium-gray);
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
    ${h4_regular};
    color: var(--body);
    margin: 40px 0 0 0;
  }
  @media only screen and (max-width: 769px) {
    padding-bottom: 80px;
    p {
      margin-top: 28px;
    }
  }
  .yt-lite {
    border-radius: 4px;
    transition: opacity 0.35s ease;
    @media only screen and (min-width: 991px) {
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
          @media only screen and (max-width: 991px) {
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
          @media only screen and (max-width: 991px) {
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
    }
    @media only screen and (max-width: 991px) {
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
    ${h3_semibold};
    color: var(--title);
    margin: 0;
  }
  @media only screen and (max-width: 769px) {
    padding-bottom: 80px;
  }
`;
const UniversityVideo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 48px;
  row-gap: 28px;
  padding-top: 40px;
  @media only screen and (max-width: 749px) {
    grid-template-columns: 1fr;
    gap: 24px;
    row-gap: 24px;
    padding-top: 28px;
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
    ${label_regular};
    color: var(--title);
    letter-spacing: 0.02em;
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
  EmptySection,
  ResponsiveInputWrap,
  ResponsiveInput,
  RightWrap
};
