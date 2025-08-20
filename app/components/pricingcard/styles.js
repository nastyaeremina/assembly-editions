import styled, { css } from 'styled-components';
import { button_regular, button_semibold, h3_semibold, h4_semibold, label_regular } from '../../styles/typography';

const PriceMenu = styled.div`
  width: 100%;
  border: 1px solid var(--border-default);
  border-top-right-radius: var(--radius-12);
  border-top-left-radius: var(--radius-12);
  border-bottom: none;
  position: relative;
  overflow: hidden;
  background-color: var(--off-white-100);
  ${(props) => {
    return props.index && css``;
  }}
`;
const PlanSection = styled.div`
  background-color: var(--off-white-100);
  .list-item {
    ${button_semibold}
    color: var(--title);
  }
  li {
    .list-item {
      ${button_regular}
      color: var(--text-secondary);
    }
  }
  &.last-section {
    border-bottom: 1px solid var(--border-default);
    border-bottom-left-radius: var(--radius-12);
    border-bottom-right-radius: var(--radius-12);
  }
  ${(props) => {
    return (
      props.isFirst &&
      css`
        padding-top: var(--space-8) !important;
      `
    );
  }}
  @media only screen and (max-width: 768px) {
    .list-item {
      display: flex;
      align-items: center;
      gap: var(--space-3);
    }
  }
`;
const PriceSection = styled.div`
  padding: var(--space-16) var(--space-16) var(--space-12);
  h4 {
    ${h4_semibold}
    color: var(--title);
    margin: 0 0 var(--space-4) 0;
  }
  p {
    ${button_regular}
    color: var(--text-secondary);
    margin: 0;
    @media only screen and (max-width: 449px) {
      height: unset;
    }
  }
  ${(props) =>
    props.isSupersonic &&
    css`
      background: linear-gradient(180deg, var(--neutral) 0%, var(--white) 50%);
    `}
`;

const Pricenumber = styled.h3`
  ${h3_semibold}
  color: var(--title);
  padding-top: var(--space-4);
  display: flex;
  gap: var(--space-8);
  align-items: baseline;
  span {
    ${button_regular};
    color: var(--title);
  }
`;

const Caption = styled.h5`
  ${button_regular}
  color: var(--text-secondary);
  margin: var(--space-16) 0 0;
`;

const PriceTag = styled.span`
  background-color: var(--extra-light-gray);
  width: max-content;
  padding: 0 var(--space-6);
  border-radius: var(--radius-4);
  text-decoration: none;
  ${label_regular};
  color: var(--title);
  margin-left: 3px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const PricePlan = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--space-10);
  .grid-item {
    border-left: 1px solid var(--border-default);
    border-right: 1px solid var(--border-default);
    padding: 0 var(--space-16);
  }
  .grid-item:nth-child(-n + 4) {
    padding: 0;
  }
  .empty-p {
    height: 24px;
    @media only screen and (max-width: 768px) {
      height: 16px;
    }
  }
  @media only screen and (max-width: 800px) {
    padding: unset;
    grid-template-columns: repeat(2, 1fr);
    column-gap: var(--space-24);
    .grid-item:nth-child(4n + 1) {
      order: 1;
    }
    .grid-item:nth-child(4n + 2) {
      order: 1;
    }
    .grid-item:nth-child(4n + 3) {
      order: 2;
    }
    .grid-item:nth-child(4n + 4) {
      order: 2;
    }
    .grid-item-head:nth-child(4n + 3) {
      margin-top: var(--space-24);
    }
    .grid-item-head:nth-child(4n + 4) {
      margin-top: var(--space-24);
    }
  }
  @media only screen and (max-width: 449px) {
    grid-template-columns: repeat(1, 1fr);
    .grid-item:nth-child(4n + 1) {
      order: 1;
    }
    .grid-item:nth-child(4n + 2) {
      order: 5;
    }
    .grid-item:nth-child(4n + 3) {
      order: 9;
    }
    .grid-item:nth-child(4n + 4) {
      order: 13;
    }
    .grid-item-head:nth-child(4n + 2) {
      margin-top: var(--space-24);
    }
    .grid-item-head:nth-child(4n + 3) {
      margin-top: var(--space-24);
    }
    .grid-item-head:nth-child(4n + 4) {
      margin-top: var(--space-24);
    }
  }
  @media only screen and (max-width: 449px) {
    padding: unset;
    margin: 0 auto 0;
  }
  h3,
  p {
    b {
      ${button_semibold};
      color: var(--title);
    }
    margin: 0;
  }
  hr {
    border: none;
    background-color: var(--border-default);
    height: 1px;
    margin: 0;
    margin-bottom: var(--space-16);
    margin-top: var(--space-16);
  }
  ul {
    padding-left: var(--space-20);
    margin-top: var(--space-8);
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    li {
      position: relative;
      ${button_regular}
      color: var(--text-secondary);
      ::before {
        left: -24px;
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.49804 14.791C7.49721 14.791 7.49637 14.791 7.49554 14.791C7.32887 14.7902 7.16971 14.7235 7.05221 14.6043L3.71887 11.2193C3.47637 10.9735 3.47971 10.5777 3.72554 10.3352C3.97137 10.0935 4.36804 10.096 4.60971 10.3418L7.50055 13.2785L15.3889 5.39016C15.633 5.14599 16.0289 5.14599 16.273 5.39016C16.5172 5.63432 16.5172 6.03019 16.273 6.27435L7.93971 14.6077C7.82304 14.7252 7.66388 14.791 7.49804 14.791Z" fill="%23101010"/></svg>');
        background-size: contain;
        background-repeat: no-repeat;
        top: var(--space-1);
        @media only screen and (max-width: 768px) {
          left: -32px;
        }
      }
    }
    @media only screen and (max-width: 768px) {
      padding-left: 32px;
    }
  }
`;

const Description = styled.div`
  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
      @media only screen and (max-width: 449px) {
        height: auto;
      }
    `}
`;

const CardBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  .terriarybtn-div {
    height: var(--space-19);
    .button {
      cursor: pointer;
    }
    @media only screen and (max-width: 449px) {
      height: unset;
    }
  }
  .cardbtn {
    a {
      width: 100%;
      justify-content: center;
      margin-top: var(--space-16);
      padding: 8px;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export { PriceMenu, PriceSection, Pricenumber, Caption, PricePlan, CardBtn, Description, PriceTag, PlanSection };
