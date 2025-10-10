import styled, { css } from 'styled-components';
import { body_semibold, button_regular, h2_semibold, h3_semibold, h4_semibold } from '../../styles/typography';
import Link from 'next/link';

const TestimonialCard = styled(Link)`
  border-radius: var(--radius-16);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-64);
  padding: var(--space-32);
  background-color: var(--off-white-550);
  ${(props) =>
    props.isFullWidth &&
    css`
      grid-template-columns: 1fr;
      gap: var(--space-32);
    `}
  ${(props) =>
    props.isStandardPage &&
    css`
      margin-bottom: var(--space-100);
      @media only screen and (max-width: 768px) {
        margin-bottom: var(--space-80);
      }
    `}
    :hover {
    .svg-icon {
      transform: none;
      opacity: 1;
    }
    .full-width-card-svg-icon {
      transform: none;
      opacity: 1;
    }
  }
  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: var(--space-32);
    ${(props) =>
      props.isFullWidth &&
      css`
        grid-template-columns: 1fr;
        gap: var(--space-32);
      `}
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-16);
    gap: var(--space-20);
  }
`;
const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-64);
  position: relative;
  .svg-icon {
    transform: translateX(-2px) scale(0.98);
    transition: transform 0.25s, opacity 0.25s;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0;
  }
  ${(props) =>
    props.isFullWidth &&
    css`
      order: 2;
      gap: var(--space-32);
    `}
  @media only screen and (max-width: 991px) {
    order: 2;
    gap: var(--space-64);
    .svg-icon {
      position: absolute;
      top: 0;
      right: 0;
    }
    ${(props) =>
      props.isFullWidth &&
      css`
        gap: var(--space-64);
      `}
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-16);
    ${(props) =>
      props.isFullWidth &&
      css`
        gap: var(--space-16);
      `}
  }
`;
const RightCard = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  ${(props) =>
    props.isFullWidth &&
    css`
      order: 1;
    `}
  @media only screen and (max-width: 991px) {
    order: 1;
    max-width: 100%;
  }
  .right {
    width: 100%;
    height: auto;
    border-radius: var(--radius-8);
    object-fit: cover;
  }
`;
const Detail = styled.div`
  p {
    ${h4_semibold}
    margin: var(--space-24) 0 0;
    color: var(--title);
    ${(props) =>
      props.isFullWidth &&
      css`
        max-width: 538px;
      `}
    @media only screen and (max-width: 449px) {
      margin: var(--space-20) 0 0;
    }
  }
  strong {
    font-weight: 500;
  }
  h2 {
    ${h2_semibold}
    margin: var(--space-24) 0;
    color: var(--title);
    @media only screen and (max-width: 449px) {
      margin: var(--space-20) 0 0;
    }
  }
  h3 {
    ${h3_semibold}
    margin: var(--space-24) 0;
    color: var(--title);
    @media only screen and (max-width: 449px) {
      margin: var(--space-20) 0 0;
    }
  }
`;

const Percentage = styled.div`
  display: flex;
  gap: var(--space-48);
  padding-top: var(--space-32);
  flex-wrap: wrap;
  @media only screen and (max-width: 449px) {
    margin-top: 0;
    padding-top: var(--space-24);
    gap: var(--space-32);
    row-gap: var(--space-24);
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  span {
    ${h4_semibold}
    color: var(--title);
  }
  p {
    ${button_regular}
    margin:0;
    color: var(--text-secondary);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-8);
  }
`;
const LastDroplist = styled.div``;

const Top = styled.div`
  position: relative;
  .top-logo {
    max-width: 218px;
    width: auto;
    max-height: 48px;
    height: 100%;
  }
  .full-width-card-svg-icon {
    transform: translateX(-2px) scale(0.98);
    transition: transform 0.25s, opacity 0.25s;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
  }
  @media only screen and (max-width: 991px) {
    .top-logo {
      max-height: 36px;
    }
  }
`;

export { TestimonialCard, LeftCard, RightCard, Detail, Percentage, Section, LastDroplist, Top };
