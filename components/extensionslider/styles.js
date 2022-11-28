import styled from "styled-components";
import { Body3, Body4, Body5 } from "../../styles/styles";

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
  position: relative;
  /* ::before {
    content: "";
    width: 100%;
    background-image: url("/images/backimage.svg");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    border-top: 1px dashed #000000;
  } */
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
    color: ${({ theme }) => theme.colors.greenmiddark};
    letter-spacing: 0.02em;
  }
`;
const SliderInner = styled.div`
  padding: 11px 15px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  width: 100%;
  max-width: 180px;
  margin: 0 40px;
  /* p {
    ${Body5};
    color: ${({ theme }) => theme.colors.midiumgray};
    letter-spacing: 0.02em;
    margin: 0;
  } */
`;
const SliderSub = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  h4 {
    ${Body4};
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
  }
`;
const SliderLine = styled.div`
  -webkit-animation: lineboarderanimation 10s linear infinite;
  animation: lineboarderanimation 10s linear infinite;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 50%, transparent 0),
    linear-gradient(90deg, rgba(0, 0, 0, 1) 50%, transparent 0),
    linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, transparent 0),
    linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, transparent 0);
  background-position: 0 0, 200px 100px, 0 100px, 200px 0;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 7px 4px, 7px 4px, 7px 14px, 7px 14px;
  bottom: 0;
  height: 1px;
  left: 5px;
  margin: auto;
  position: absolute;
  right: 5px;
  top: 0;
  /* overflow: hidden; */
`;
export { Slide, SliderWrap, WrapImage, SliderInner, SliderSub, SliderLine };
