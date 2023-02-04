import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { Body3, Body4, Body5 } from '../../styles/styles';

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
`;
const WrapImage = styled.div`
  max-width: 350px;
  width: 100%;
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
const SliderInner = styled(Link)`
  padding: 11px 20px 11px 15px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  margin: 0 40px;
  cursor: pointer;
  position: relative;
  z-index: 9999;
  height:59px;
`;
const SliderSub = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  p{
    ${Body4};
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
  }
`;
const borderAnimation = keyframes`
  100% {
    background-position: 0px 0px, 300px 116px, 0px 150px, 216px 0px;
  }
  0% {
    background-position: 300px 0px, 0px 116px, 0px 0px, 216px 150px;
  }
`;
const SliderLine = styled.div`
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 50%, transparent 0),
    linear-gradient(90deg, rgba(0, 0, 0, 1) 50%, transparent 0),
    linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, transparent 0),
    linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, transparent 0);
  background-position: 0 0, 200px 100px, 0 100px, 200px 0;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 10px 4px, 10px 10px, 10px 14px, 10px 14px;
  bottom: 0;
  height: 1px;
  left: 5px;
  margin: auto;
  position: absolute;
  right: 5px;
  top: 0;
`;

export { Slide, SliderWrap, WrapImage, SliderInner, SliderSub, SliderLine };
