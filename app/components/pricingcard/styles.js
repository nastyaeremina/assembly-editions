import styled, { css } from 'styled-components';
import { Body2, Body4, Body5, Heading2, Heading3, Heading4, Heading5, Limarker } from '../../styles/styles';

import { greenlight, title, darkgray, midiumgray, greenmidlight } from './../../styles/color';

const PriceMenu = styled.div`
  width: 100%;
  border: 1px solid #ccccd0;
  position: relative;
  ${(props) =>
    props.isSupersonic &&
    css`
      border: 1px solid #7ddaa0;
      background-color: #00160e;
    `}

  .cardbtn {
    a {
      width: 100%;
      justify-content: center;
      margin-top: 12px;
    }
  }
`;
const PriceSection = styled.div`
  padding: 24px;
  border-bottom: 1px solid #ccccd0;
  h2 {
    ${Heading4}
    color: ${title};
    margin: 0 0 4px 0;
    @media (max-width: 479px) {
      font-size: 32px;
      line-height: 34px;
    }
  }
  p {
    ${Body5}
    color: ${darkgray};
    margin: 0;
    height: 57px;
  }
  ${(props) =>
    props.isSupersonic &&
    css`
      border-bottom: 1px solid #7ddaa0;
      h2 {
        color: ${greenlight};
      }
      p {
        color: ${greenlight};
      }
    `}
`;
const Pricenumber = styled.h3`
  ${Heading3}
  color: ${title};
  margin: 20px 0 0;
  display: flex;
  gap: 4px;
  align-items: center;
  span {
    ${Heading5}
  }
  @media (max-width: 479px) {
    font-size: 50px;
    line-height: 55px;
    span {
      font-size: 24px;
      line-height: 31px;
    }
  }
  ${(props) =>
    props.isSupersonic &&
    css`
      color: ${greenlight};
    `}
`;
const Caption = styled.h5`
  ${Body5}
  color: ${title};
  margin: 0;
  ${(props) =>
    props.isSupersonic &&
    css`
      color: ${greenlight};
    `}
`;

const PricePlan = styled.div`
  padding: 24px 24px 80px;
  width: 100%;
  margin: 0 auto 136px;
  flex: 1 1 0;
  @media (max-width: 449px) {
    padding: 24px 24px 50px;
    margin: 0 auto 118px;
  }
  h3,
  p {
    b {
      ${Body4}
      color: ${title};
    }
    margin: 0;
  }
  ul {
    padding-left: 24px;
    margin-top: 20px;
    li {
      position: relative;
      margin-top: 12px;
      padding-left: 14px;
      ${Body5}
      color: ${darkgray};
      ${Limarker}
      ::before {
        top: 5px;
        left: -24px;
      }
    }
  }
  ${(props) =>
    props.isSupersonic &&
    css`
      h3,
      p {
        b {
          color: ${greenlight};
        }
      }
      ul {
        li {
          color: ${greenlight};
        }
      }
    `}
`;

const BulletImage = styled.div`
  padding: 5px 10px;
  margin-top: 7px;
  background-color: ${greenmidlight};
  @media only screen and (max-width: 749px) {
    padding: 4px 8px;
  }
`;

const Pricedetail = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardBtn = styled.div`
  position: absolute;
  width: 100%;
  bottom: 24px;
  padding: 0 24px;
`;

const PriceOption = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(278px, 1fr));
  padding-bottom: 40px;
  ${(props) =>
    props.is4Card &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(252px, 1fr));
    `}
  @media only screen and (max-width: 1175px) {
    grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
    gap: 30px;
    ${(props) =>
      props.is4Card &&
      css`
        grid-template-columns: repeat(auto-fill, minmax(356px, 1fr));
      `}
  }
  @media only screen and (max-width: 789px) {
    grid-template-columns: repeat(auto-fill, minmax(262px, 1fr));
  }
`;
export { PriceMenu, PriceSection, Pricenumber, Caption, PricePlan, BulletImage, Pricedetail, CardBtn, PriceOption };
