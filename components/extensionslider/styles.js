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
  ::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    border-top: 1px dashed #000000;
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
  padding: 15px;
  border: 1px solid #000000;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  max-width: 270px;
  width: 100%;
  margin: 0 12px;
  p {
    ${Body5};
    color: ${({ theme }) => theme.colors.midiumgray};
    letter-spacing: 0.02em;
    margin: 0;
  }
`;
const SliderSub = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 12px;
  h4 {
    ${Body4};
    margin: 0;
    color: ${({ theme }) => theme.colors.black};
  }
`;
export { Slide, SliderWrap, WrapImage, SliderInner, SliderSub };
