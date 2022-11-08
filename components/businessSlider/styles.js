import styled from "styled-components";
import { Body3, Body5 } from "../../styles/styles";

const Slide = styled.div`
  a {
    z-index: 3;
    display: inline-block;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    @media only screen and (max-width: 600px) {
      border-radius: 0;
    }
  }
`;
const SliderWrap = styled.div`
  overflow: hidden;
  .mydiv:hover .hide {
    opacity: 1;
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
  margin: 0 22px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 0.3s;

  h4 {
    text-align: center;
    padding-top: 22px;
    ${Body3};
    margin: 0;
    color: ${({ theme }) => theme.colors.greendark};
  }
  p {
    ${Body5};
    padding-top: 7px;
    text-align: center;
    margin: 0;
    color: ${({ theme }) => theme.colors.body};
    letter-spacing: 0.02em;
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
`;
const WrapSlide = styled.div`
  display: flex !important;
  align-items: stretch;
  .hide {
    opacity: 0;
  }
  :hover {
    opacity: 100;
  }
`;
export { Slide, SliderWrap, WrapImage, LeftBorder, RightBorder, WrapSlide };
