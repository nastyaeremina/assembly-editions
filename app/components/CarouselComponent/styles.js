import styled, { css } from 'styled-components';
import { body_regular, body_semibold } from '../../styles/typography';

const BackArrow = styled.div`
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  transition: opacity 0.25s ease;
  .back-arrow {
    path {
      fill: var(--off-white-100);
    }
  }
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

const Description = styled.p`
  color: var(--off-white-100);
  ${body_regular}
  margin: 0;
  opacity: 0;
  transition: opacity 0.25s ease;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

const Overlay = styled.div`
  background: #00000033;
  padding: var(--space-16);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.6s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    backdrop-filter: blur(8px);
    background: #00000066;
    ${Description} {
      opacity: 1;
    }
    ${BackArrow} {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 991px) {
    &:hover {
      backdrop-filter: unset;
      background: #00000033;
    }
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
`;

const Card = styled.div`
  max-width: 237px;
  min-width: 237px;
  height: 100%;
  border-radius: var(--radius-8);
  border: 1px solid var(--border-default);
  display: flex;
  position: relative;
  overflow: hidden;
  .image {
    max-width: 237px;
    width: 100%;
    height: 342px;
    object-fit: cover;
  }
  &:focus-visible {
    outline: 2px solid var(--link-default);
    border-radius: var(--radius-8);
    ${Overlay} {
      background: #0000004d;
    }
  }
  &.is-partial {
    pointer-events: none;
    cursor: default;
    ${Overlay} {
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      background: rgba(0, 0, 0, 0.2);
      will-change: backdrop-filter;
      ${Details} {
        filter: blur(4px);
      }
      ${BackArrow} {
        filter: blur(4px);
      }
    }
  }
`;

const Label = styled.p`
  color: var(--off-white-100);
  ${body_semibold}
  margin: 0;
`;

const SliderMainDiv = styled.div`
  width: 100%;
  max-width: 1272px;
  overflow: visible;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: var(--space-24);
`;

const SliderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: var(--off-white-100);
  border-radius: var(--radius-30);
  border: 1px solid var(--border-default);
  cursor: pointer;
  transition: all 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  &.left-arrow {
    left: -24px;
  }
  &.right-arrow {
    right: -80px;
    @media only screen and (max-width: 1400px) {
      right: -24px;
    }
  }
  ${(props) =>
    !props.isDisabled &&
    css`
      &:active {
        box-shadow: 0px 0px 34.2px 0px #bce7f4, 0px 0px 6.84px 0px #7da4ff;
        border: 1px solid var(--border-hover);
      }
      &:hover {
        box-shadow: 0px 0px 34.2px 0px #bce7f4, 0px 0px 6.84px 0px #7da4ff;
        border: 1px solid var(--border-hover);
      }
    `}
  ${(props) =>
    props.isActive &&
    css`
      box-shadow: 0px 0px 34.2px 0px #bce7f4, 0px 0px 6.84px 0px #7da4ff;
      border: 1px solid var(--border-hover);
    `}
  ${(props) =>
    props.isDisabled &&
    css`
      background-color: var(--gray-50);
      cursor: not-allowed;
      svg {
        path {
          fill: var(--border-default);
        }
      }
    `}
    ${(props) =>
    props.isLeftButtonNotShow &&
    css`
      &.left-arrow {
        display: none;
      }
    `}
    @media only screen and (max-width: 991px) {
    display: none;
  }
`;

const MainDiv = styled.div`
  transition: transform 500ms ease;
  display: flex;
  gap: var(--space-24);
  width: 100%;
  max-width: 1272px;
  margin: 0 auto;
  overflow: visible;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export { Card, Label, Overlay, Details, Description, BackArrow, SliderMainDiv, CardWrapper, SliderButton, MainDiv };
