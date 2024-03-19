import styled from 'styled-components';
import { Body3, Heading3, MbBody3, MbBody4, MbButtonText, MobileH3, MobileH4 } from '../../styles/styles';
import { black, body, border, title, whiteColor } from '../../styles/color';

const AppDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 80px;
  }
  @media only screen and (max-width: 449px) {
    gap: 20px;
  }
`;
const DetailTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media only screen and (max-width: 449px) {
    gap: 12px;
  }
`;
const AppLogo = styled.div`
  @media only screen and (max-width: 449px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;
const Caption = styled.div`
  ${Body3};
  color: ${body};
  @media only screen and (max-width: 449px) {
    ${MbBody3};
  }
`;
const Title = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  h3 {
    ${Heading3};
    color: ${title};
    margin: 0;
  }
  @media only screen and (max-width: 449px) {
    h3 {
      ${MobileH4}
    }
  }
`;

const DetailContent = styled.div`
  display: flex;
  gap: 30px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 80px;
  }
`;

const LeftContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const RightContent = styled.div`
  max-width: 308px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
const ImageSection = styled.div`
  display: flex;
  gap: 24px;
  img {
    border-radius: 4px;
    border: 1px solid ${border};
    object-fit: cover;
    cursor: pointer;
  }
  .big-image {
    max-height: 344px;
    height: 100%;
    object-fit: cover;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    img {
      width: 100%;
    }
    .big-image {
      max-height: 262px;
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SmallImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  img {
    max-height: 160px;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const LastImage = styled.div`
  position: relative;
`;

const ButtonImage = styled.div`
  display: flex;
  /* position: relative; */
  /* top: -130px;
  right: -720px; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  z-index: 1;
  cursor: pointer;
  .section1 {
    a {
      border-radius: 48px;
      border: 1px solid;
      ${MbButtonText}
      padding: 10px 16px;
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ResponsiveImageSection = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    gap: 12px;
    margin: 0 -24px;
    padding: 0 24px;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    img {
      border: 1px solid ${border};
      border-radius: 4px;
      max-height: 160px;
      height: 100%;
      min-width: 280px;
      object-fit: cover;
    }
  }
`;

const AppDetailSlider = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 0%;
  right: 0%;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02;
  color: #ffffff;
  margin: 0;
  :hover {
    svg {
      path {
        stroke: ${whiteColor};
      }
    }
  }
  @media only screen and (min-width: 2160px) {
    font-size: 1vw;
  }
`;

const SliderSection = styled.div`
  .left-arrow {
    left: 44px;
  }
  .right-arrow {
    right: 44px;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const ArrowIcon = styled.div`
  position: absolute;
  top: 50%;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: ${whiteColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  svg {
    path {
      stroke: ${title};
    }
  }
  @media only screen and (max-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;
export {
  AppDetail,
  DetailTitleSection,
  AppLogo,
  Caption,
  Title,
  DetailContent,
  LeftContent,
  RightContent,
  ImageSection,
  SmallImageSection,
  ButtonImage,
  LastImage,
  ResponsiveImageSection,
  AppDetailSlider,
  CloseIcon,
  SliderSection,
  ArrowIcon
};
