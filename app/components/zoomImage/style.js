import styled, { css } from 'styled-components';

const SliderImageDiv = styled.div`
  .onzoom {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    border-radius: 4px;
    z-index: 1;
    max-width: 75%;
    max-height: 85%;
    height: 100%;
    width: 100%;
    user-select: none;
    @media only screen and (max-width: 1440px) {
      width: 100%;
      max-width: 75%;
      height: auto;
    }
    @media only screen and (max-width: 1024px) {
      width: 100%;
      max-width: 75%;
      height: auto;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
      max-width: 90%;
      height: auto;
    }
  }
`;

const ZoomImageSection = styled.div`
  .left-arrow {
    left: 44px;
  }
  .right-arrow {
    right: 44px;
  }
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  ${(props) =>
    props.isHide &&
    css`
      .left-arrow {
        display: none;
      }
      .right-arrow {
        display: none;
      }
    `}
  @media only screen and (max-width: 768px) {
    .left-arrow {
      left: 22px;
    }
    .right-arrow {
      right: 22px;
    }
  }
`;
export { SliderImageDiv, ZoomImageSection };
