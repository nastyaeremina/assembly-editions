import styled, { css } from 'styled-components';

const SliderImageDiv = styled.div`
  .onzoom {
    z-index: 1;
    max-width: 70%;
    width: 100%;
    user-select: none;
    box-shadow: 0px 10px 10px -4px #00000014;
    border-radius: var(--radius-8);
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
    @media only screen and (max-width: 449px) {
      border-radius: var(--radius-4);
    }
  }
`;

const ZoomImageSection = styled.div`
  .left-arrow {
    left: var(--space-20);
  }
  .right-arrow {
    right: var(--space-20);
  }
  background: var(--model-background-color);
  backdrop-filter: blur(16px);
  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11111;
  margin-top: 0 !important;
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
  .round {
    background-color: var(--gray-200);
  }
  .active-round {
    background-color: var(--off-white-100);
  }
  @media only screen and (max-width: 768px) {
    .left-arrow {
      left: 22px;
    }
    .right-arrow {
      right: 22px;
    }
  }
`;
const ResponsiveSection = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    display: flex;
    z-index: 1;
  }
`;

const Wrapperdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  padding: var(--space-32) 0;
  gap: var(--space-10);
  @media only screen and (max-width: 449px) {
    padding: var(--space-16) 0;
  }
`;
export { SliderImageDiv, ZoomImageSection, ResponsiveSection, Wrapperdiv };
