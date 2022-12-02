import styled from 'styled-components';
import { Body3, Body5, MbBody3 } from '../../styles/styles';

const Slide = styled.div`
  a {
    z-index: 3;
    display: inline-block;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    @media only screen and (max-width: 991px) {
      border-radius: 0;
    }
  }
`;
const SliderWrap = styled.div`
  .mydiv:hover .hide {
    opacity: 1;
  }
  .slick-dots {
    bottom: -40px;
  }
  .slick-dots li {
    margin: 0;
  }
  .slick-dots li button:before {
    font-size: 10px;
    line-height: 20px;
    width: 10px;
    height: 10px;
    color: #dfdfde;
    opacity: 1;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: black;
  }
  .zoom {
    transition: transform 0.3s;
  }
  .mydiv:hover .zoom {
    transform: scale(1.11);
    @media only screen and (max-width: 991px) {
      transform: none !important;
      transition: transform 0.3s;
    }
  }
`;
const WrapImage = styled.div`
  /* border: 1px solid black;
  border-image: 1
    linear-gradient(
      to right,
      transparent 200px,
      black 0,
      black calc(100% - 15px),
      transparent 0
    ); */
  max-width: 350px;
  width: 100%;
  /* position: relative; */
  padding: 22px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 0.3s;

  h4 {
    text-align: center;
    padding-top: 36px;
    ${Body3};
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
    @media only screen and (max-width: 911px) {
      padding-top: 20px;
      ${MbBody3};
    }
  }
  p {
    ${Body5};
    padding-top: 8px;
    text-align: center;
    margin: 0;
    color: ${({ theme }) => theme.colors.body};
    letter-spacing: 0.02em;
    @media only screen and (max-width: 911px) {
      padding-top: 20px;
      ${MbBody3};
    }
  }
  @media only screen and (max-width: 911px) {
    margin: 0 24px;
    padding: 0;
  }
`;
const LeftBorder = styled.div`
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  width: 22px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  display: block;
  transition: 0.3s;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const RightBorder = styled.div`
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  width: 22px;
  display: block;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  transition: 0.3s;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const WrapSlide = styled.div`
  display: flex !important;
  align-items: stretch;
  padding: 0 5px;
  .hide {
    opacity: 0;
  }
  :hover {
    opacity: 100;
  }
  @media only screen and (max-width: 768px) {
    .hide {
      opacity: 1;
    }
  }
`;
const SlideImg = styled.div`
  max-height: 350px;
  img {
    border-radius: 4px;
    height: 100%;
  }
`;

export { Slide, SliderWrap, WrapImage, LeftBorder, RightBorder, WrapSlide, SlideImg };
