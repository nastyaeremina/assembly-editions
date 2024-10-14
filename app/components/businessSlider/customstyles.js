import styled, { css } from 'styled-components';

const Animated = styled.div`
  position: relative;
  .wrap {
    width: 100%;

    &--logobar {
      height: 524px;
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

const SliderInner = styled.div`
  width: 396px;
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

const HomeSlider = styled.div`
  #container {
    width: 100vw;
  }
  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
  }

  #container[data-animated] {
    overflow: hidden;
  }
  #container[data-animated] #list {
    width: max-content;
    animation: scroll 60s linear infinite;
  }
  #container[data-animated]:hover #list {
    ${(props) =>
      props?.isPauseOnHover &&
      css`
        animation-play-state: paused;
      `}
  }
  @keyframes scroll {
    to {
      translate: calc(-50% - 5px);
    }
  }
`;
export { Animated, SliderInner, HomeSlider };
