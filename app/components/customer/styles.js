import styled, { css } from 'styled-components';
import { body_semibold, button_regular, h2_semibold, h3_semibold, h4_semibold } from '../../styles/typography';
import Link from 'next/link';

const TestimonialCard = styled(Link)`
  border: 1px solid var(--border-default);
  border-radius: var(--radius-16);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-64);
  padding: var(--space-32);
  transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out;
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
    background-color: var(--bg-primary-hover);
  }
  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    ${(props) =>
      props.isFullWidth &&
      css`
        grid-template-columns: 1fr;
        gap: var(--space-64);
      `}
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-16);
    gap: var(--space-16);
  }
`;
const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-64);
  ${(props) =>
    props.isFullWidth &&
    css`
      order: 2;
      gap: var(--space-32);
    `}
  @media only screen and (max-width: 991px) {
    order: 2;
    gap: var(--space-64);
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
    border: 1px solid var(--border-default);
  }
`;
const Detail = styled.div`
  p {
    ${body_semibold}
    margin: var(--space-24) 0 0;
    color: var(--title);
    ${(props) =>
      props.isFullWidth &&
      css`
        max-width: 538px;
        ${h4_semibold}
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
  border-bottom: 1px solid var(--border-default);
  padding: var(--space-20) 0;
  flex-wrap: wrap;
  margin-top: var(--space-24);
  @media only screen and (max-width: 449px) {
    margin-top: 0;
    padding: var(--space-24) 0 var(--space-20);
    gap: var(--space-32);
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
`;
const LastDroplist = styled.div``;

const Top = styled.div`
  .top-logo {
    max-width: 218px;
    width: auto;
    max-height: 48px;
    height: 100%;
  }
`;
export { TestimonialCard, LeftCard, RightCard, Detail, Percentage, Section, LastDroplist, Top };
