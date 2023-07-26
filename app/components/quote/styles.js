import styled, { css } from 'styled-components';
import { Body4, ButtonText, MobileH3, Quote } from '../../styles/styles';
import { body, title } from '../../styles/color';

const QuoteMain = styled.div`
  ${(props) =>
    props.gradientImage &&
    css`
      background-image: url(${props.gradientImage?.fullScreen});
    `}
  background-repeat: no-repeat;
  background-size: contain;
  right: 0;
  top: 0px;
  width: 100%;
  display: block;
  background-position: 50% 50%;
  padding: 50px 0;
  position: relative;
  @media only screen and (max-width: 768px) {
    padding: 40px 0;
    ${(props) =>
      props.gradientImage &&
      css`
        background-image: url(${props.gradientImage?.responsive});
      `}
    ${(props) =>
      props.caseStudies &&
      css`
        padding: 80px 0;
      `}
  }
  ${(props) =>
    props.caseStudies &&
    css`
      padding: 100px 0;
    `}
`;
const Mainss = styled.div`
  display: flex;
  gap: 40px;
  border: 1px solid #000000;
  border-radius: 4px;
  background: #ffffff;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    gap: 0;
  }
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const QuoteTxt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 40px 40px 0;
  p {
    ${Quote};
    margin: 0;
    color: ${title};
  }
  @media only screen and (max-width: 768px) {
    padding: 30px 28px;
    p {
      ${MobileH3};
      padding-bottom: 30px;
    }
  }
`;
const QuoteSubTxt = styled.div`
  span {
    margin: 0 0 5px 0;
    display: block;
    ${ButtonText};
    color: ${title};
  }
  p {
    margin: 0;
    ${Body4};
    color: ${body};
  }
  @media only screen and (max-width: 768px) {
    span {
      font-size: 16px;
      line-height: 24px;
    }
    p {
      font-size: 16px;
      line-height: 21px;
    }
  }
`;
const QuoteTop = styled.div`
  position: relative;
  height: 407px;
`;
const QuoteLine = styled.div`
  bottom: -104px;
  position: absolute;
  left: 25%;
  margin-left: -1px;
  @media only screen and (max-width: 768px) {
    left: 50%;
    display: none;
  }
`;
const QuoteImg = styled.div`
  position: relative;
  left: -1px;
  border-right: 1px solid #000;
  margin-top: -1px;
  img {
    border-radius: 2px 0 0 2px;
    height: 100%;
  }
  @media only screen and (max-width: 768px) {
    border-right: 0;
    border-bottom: 1px solid #000000;
    left: 0;
    width: 100%;
    img {
      width: 100%;
      border-radius: 2px 2px 0 0;
    }
  }
`;
export { QuoteMain, Mainss, QuoteTxt, QuoteSubTxt, QuoteTop, QuoteLine, QuoteImg };
