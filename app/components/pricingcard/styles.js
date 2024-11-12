import styled, { css } from 'styled-components';
import { Body1, Body4, Body5, FooterText, Heading4, MbBody4, MbPrimaryBtn } from '../../styles/styles';

const PriceMenu = styled.div`
  width: 100%;
  border: 1px solid var(--border);
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom: none;
  position: relative;
  ${(props) => {
    return props.index && css``;
  }}
`;
const PlanSection = styled.div`
  &.last-section {
    border-bottom: 1px solid var(--border);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  ${(props) => {
    return (
      props.isFirst &&
      css`
        padding-top: 16px !important;
      `
    );
  }}
  @media only screen and (max-width: 768px) {
    .list-item {
      display: flex;
      align-items: center;
    }
  }
`;
const PriceSection = styled.div`
  padding: 16px 16px 8px;
  h2 {
    ${Body1}
    color: var(--title);
    margin: 0 0 4px 0;
    @media screen and (max-width: 768px) {
      margin: 0 0 8px 0;
    }
  }
  p {
    ${Body5}
    color: var(--dark-gray);
    margin: 0;
    @media screen and (max-width: 449px) {
      height: unset;
    }
  }
  ${(props) =>
    props.isSupersonic &&
    css`
      background: linear-gradient(180deg, var(--green-shadow-20) 0%, var(--transparent-color-2) 50%);
    `}

  @media screen and (max-width: 768px) {
    padding: 24px;
    border-bottom: 1px solid var(--border);
  }
`;
const Pricenumber = styled.h3`
  ${Heading4}
  color: var(--title);
  margin: 4px 0 0;
  display: flex;
  gap: 8px;
  align-items: end;
  span {
    ${Body4};
    color: var(--title);
  }
  @media (max-width: 479px) {
    font-size: 32px;
    line-height: 34px;
  }
`;
const Caption = styled.h5`
  ${Body5}
  color: var(--dark-gray);
  margin: 16px 0 0;
  @media screen and (max-width: 768px) {
    margin: 24px 0 0;
  }
`;

const PriceTag = styled.span`
  background-color: var(--footer);
  width: max-content;
  padding: 2px 6px;
  border-radius: 4px;
  text-decoration: none;
  ${FooterText};
  color: var(--text-primary);
  margin-left: 3px;
`;
const GridItem = styled.div`
  display: grid;
  width: 100%;

  grid-template-rows: repeat(2, 1fr);
  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(1, 1fr);
  }
  @media screen and (max-width: 449px) {
    grid-template-rows: repeat(1, 1fr);
  }
`;
const PricePlan = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 12px;
  .grid-item {
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);
    padding: 0 16px;
  }
  .grid-item:nth-child(-n + 4) {
    padding: 0;
  }
  @media screen and (max-width: 800px) {
    padding: unset;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
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
      margin-top: 24px;
    }
    .grid-item-head:nth-child(4n + 4) {
      margin-top: 24px;
    }
  }
  @media screen and (max-width: 449px) {
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
      margin-top: 24px;
    }
    .grid-item-head:nth-child(4n + 3) {
      margin-top: 24px;
    }
    .grid-item-head:nth-child(4n + 4) {
      margin-top: 24px;
    }
  }
  .empty-p {
    height: 27px;
  }
  @media (max-width: 449px) {
    padding: unset;
    margin: 0 auto 0;
  }
  h3,
  p {
    b {
      ${MbPrimaryBtn};
      line-height: 19px;
      color: var(--title);
    }

    margin: 0;
  }
  hr {
    border: none;
    background-color: var(--footer);
    height: 1px;
    margin: 0;
    margin-bottom: 16px;
    margin-top: 16px;
  }
  ul {
    padding-left: 26px;
    margin-top: 8px;
    li {
      position: relative;
      margin-top: 8px;
      ${Body5}
      color: var(--dark-gray);
      ::before {
        left: -26px;
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.49804 14.791C7.49721 14.791 7.49637 14.791 7.49554 14.791C7.32887 14.7902 7.16971 14.7235 7.05221 14.6043L3.71887 11.2193C3.47637 10.9735 3.47971 10.5777 3.72554 10.3352C3.97137 10.0935 4.36804 10.096 4.60971 10.3418L7.50055 13.2785L15.3889 5.39016C15.633 5.14599 16.0289 5.14599 16.273 5.39016C16.5172 5.63432 16.5172 6.03019 16.273 6.27435L7.93971 14.6077C7.82304 14.7252 7.66388 14.791 7.49804 14.791Z" fill="%235B5B5B" stroke="%235B5B5B" stroke-width="0.5"/></svg>');
        background-size: contain;
        background-repeat: no-repeat;
        @media screen and (max-width: 768px) {
          left: -32px;
        }
      }
    }
    @media screen and (max-width: 768px) {
      padding-left: 32px;
    }
  }
`;

const BulletImage = styled.div`
  padding: 5px 10px;
  margin-top: 7px;
  background-color: var(--mid-light-green);
  @media only screen and (max-width: 749px) {
    padding: 4px 8px;
  }
`;

const Pricedetail = styled.div`
  display: flex;
  flex-direction: column;
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
  gap: 12px;
  .terriarybtn-div {
    height: 19px;
    .button {
      cursor: pointer;
    }
    @media screen and (max-width: 449px) {
      height: unset;
    }
  }
  .cardbtn {
    a {
      width: 100%;
      justify-content: center;
      margin-top: 14px;
      padding: 8px;
      font-size: 16px;
      line-height: 24px;
    }
  }
  .contact-button {
    ${MbBody4};
    color: var(--dark-gray);
    text-decoration: underline;
    margin-top: 12px;
  }
`;

const PriceOption = styled.div`
  /* ${(props) =>
    props.is4Card &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(252px, 1fr));
    `}
  @media only screen and (max-width: 1175px) {
    grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
    gap: 24px;
    ${(props) =>
    props.is4Card &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(356px, 1fr));
    `}
  }
  @media only screen and (max-width: 789px) {
    grid-template-columns: repeat(auto-fill, minmax(262px, 1fr));
  } */
`;
export {
  PriceMenu,
  PriceSection,
  Pricenumber,
  Caption,
  PricePlan,
  BulletImage,
  Pricedetail,
  CardBtn,
  PriceOption,
  Description,
  PriceTag,
  PlanSection,
  GridItem
};
