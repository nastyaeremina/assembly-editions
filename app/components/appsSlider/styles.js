import Link from 'next/link';
import styled, { css } from 'styled-components';

const SliderLine = styled.div`
  background: linear-gradient(90deg, var(--black-shadow-100) 50%, transparent 0),
    linear-gradient(90deg, var(--black-shadow-100) 50%, transparent 0),
    linear-gradient(0deg, var(--black-shadow-100) 50%, transparent 0),
    linear-gradient(0deg, var(--black-shadow-100) 50%, transparent 0);
  background-position: 0 0, 200px 100px, 0 100px, 200px 0;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 10px 4px, 10px 10px, 10px 14px, 10px 14px;
  bottom: 0;
  height: 1px;
  left: 5px;
  position: absolute;
  right: 5px;
  top: 134.5px;
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
      height: 294px;
      overflow: hidden;
      position: relative;
      @media only screen and (max-width: 449px) {
        height: 292px;
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
      @media only screen and (max-width: 449px) {
        padding: 1px 20px 0 0;
      }
    }
  }
  .card-gap {
    display: flex;
    gap: 36px;
    height: 100%;
    @media only screen and (max-width: 449px) {
      gap: 20px;
    }
  }
`;

const SliderInner = styled(Link)`
  width: 270px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  z-index: 99;
  background-color: var(--white);
  height: 100%;
  .appsslider-card {
    border: 1px solid var(--dark-green);
    border-radius: 4px;
    position: relative;
    height: 100%;
  }
  :hover {
    -webkit-transition: all 0.2ms ease-in-out;
    transition: all 0.2ms ease-in-out;
    border: 1px solid var(--dark-green);
    box-shadow: 0px 4px 16px var(--black-shadow-10);
    border-radius: 5px;
    .appsslider-card {
      border: 1px solid var(--dark-green);
      border-radius: 4px;
    }
  }
  @media only screen and (max-width: 449px) {
    width: 250px;
  }
`;

const SliderInnerBox = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid var(--light-green);
  border-radius: 8px;
  /* cursor: pointer; */
  position: relative;
  z-index: 99;
  background-color: var(--dark-green);
  padding: 17px;
  /* padding: 1px; */
  /* :hover {
    border: 2px solid ;
    padding: 0;
    box-shadow: 0px 4px 16px var(--black-shadow-10);
  } */
  .appshero-logo {
    width: 46px;
    height: 46px;
    background: var(--light-green);
    border-radius: 50%;
    @media only screen and (max-width: 449px) {
      width: 32px;
      height: 32px;
    }
  }
  @media only screen and (max-width: 449px) {
    width: 60px;
    height: 60px;
    padding: 14px;
  }
`;

const AppsAnimated = styled.div`
  margin-bottom: 40px;
  position: relative;
  @media only screen and (max-width: 449px) {
    margin-bottom: 32px;
  }
  .wrap {
    width: 100%;

    &--logobar {
      height: 82px;
      overflow: hidden;
      position: relative;
      @media only screen and (max-width: 449px) {
        height: 62px;
      }
    }
  }
  .list1 {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    margin-left: 0;

    &__item1 {
      flex-grow: 0;
      flex-shrink: 0;
      padding: 1px 60px 0 0;
      width: auto;
      @media only screen and (max-width: 449px) {
        padding: 1px 40px 0 0;
      }
    }
  }
  .card-gap {
    display: flex;
    gap: 60px;
    padding: 1px 60px 0 0;
    @media only screen and (max-width: 449px) {
      gap: 40px;
      padding: 1px 40px 0 0;
    }
  }
`;

const AppSliderLine = styled.div`
  background: linear-gradient(90deg, var(--light-green) 50%, transparent 0),
    linear-gradient(90deg, var(--light-green) 50%, transparent 0),
    linear-gradient(0deg, var(--light-green) 50%, transparent 0),
    linear-gradient(0deg, var(--light-green) 50%, transparent 0);
  background-position: 0 0, 200px 100px, 0 100px, 200px 0;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 10px 4px, 10px 10px, 10px 14px, 10px 14px;
  height: 1px;
  left: 5px;
  position: absolute;
  right: 5px;
  top: 41px;
  @media only screen and (max-width: 449px) {
    top: 31px;
  }
`;
export { SliderLine, Animated, SliderInner, SliderInnerBox, AppsAnimated, AppSliderLine };
