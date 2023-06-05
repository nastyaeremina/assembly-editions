import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Body2, Body4, Body5, MbBody2 } from '../../styles/styles';

const SliderInner = styled(Link)`
  width: 423px;
  border: 1px solid #00160e;
  border-radius: 4px;
  /* margin: 0 40px; */
  cursor: pointer;
  position: relative;
  z-index: 99;
  /* margin: 0 18px; */
  background-color: #fff;
  :hover {
    outline: 1px solid #00160e;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  }
  @media only screen and (max-width: 449px) {
    width: 278px;
  }
`;
const SliderSub = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #00160e;
  gap: 4px;
  h4 {
    ${Body2}
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    white-space: inherit;
    @media only screen and (max-width: 449px) {
      ${MbBody2}
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      white-space: inherit;
    }
  }
  p {
    ${Body4}
    color: ${({ theme }) => theme.colors.body};
    margin: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    white-space: inherit;
    white-space: wrap;
    @media only screen and (max-width: 449px) {
      ${Body5}
    }
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
  height: 1px;
  left: 5px;
  position: absolute;
  right: 5px;
  bottom: 64px;
`;
const SliderIcon = styled.div`
  display: flex;
  gap: 10px;
  padding: 11px 18px;
  .logo {
    border: 0.375px solid #00160e;
    border-radius: 50%;
    @media only screen and (max-width: 449px) {
      width: 35px;
      height: 35px;
    }
  }
`;
const AnimateSlider = styled.div`
  display: flex;
  position: relative;
`;
const Animated = styled.div`
  margin-bottom: 100px;
  position: relative;
  @media only screen and (max-width: 449px) {
    margin-bottom: 80px;
  }
  ${(props) =>
    props.isDetailSlider &&
    css`
      margin-bottom: 0px;
      @media only screen and (max-width: 449px) {
        margin-bottom: 0px;
      }
    `}
  .wrap {
    width: 100%;

    &--logobar {
      height: 238px;
      overflow: hidden;
      position: relative;
      @media only screen and (max-width: 449px) {
        height: 190px;
      }
    }
  }
  .list {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    margin-left: 0;

    &__item {
      flex-grow: 0;
      flex-shrink: 0;
      padding: 1px 36px 0 0;
      width: auto;
    }
  }
`;
export { SliderInner, SliderSub, SliderLine, SliderIcon, AnimateSlider, Animated };
