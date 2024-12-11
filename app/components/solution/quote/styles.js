import styled from 'styled-components';
import css from 'styled-jsx/css';
import { Body4, ButtonText, HeaderFont, MbBody3, MobileH3, Quote } from '../../../styles/styles';

const QuoteSection = styled.div`
  padding: 50px 0 100px;
  ${(props) =>
    props.isComparison &&
    css`
      padding: 100px 0 0px;
    `}
  ${(props) =>
    props.isMasterComparison &&
    css`
      padding: 100px 0 100px;
    `}
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    padding: 40px 0 80px;
    ${(props) =>
      props.isComparison &&
      css`
        padding: 80px 0 0px;
      `}
    ${(props) =>
      props.isMasterComparison &&
      css`
        padding: 80px 0 80px;
      `}
  }
`;

const Mainss = styled.div`
  display: flex;
  border: 1px solid var(--black);
  border-radius: 4px;
  background: var(--white);
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    overflow: hidden;
    flex-wrap: wrap;
  }
`;
const QuoteTxt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  gap: 30px;
  p {
    ${Quote};
    margin: 0px;
    color: var(--title);
  }
  @media only screen and (max-width: 749px) {
    padding: 30px;
    p {
      ${MobileH3};
      margin: 0px;
      color: var(--title);
    }
  }
`;
const QuoteSubTxt = styled.div`
  span {
    display: block;
    margin: 0 0 4px 0;
    ${ButtonText};
    color: var(--title);
  }
  p {
    margin: 0;
    ${Body4};
    color: var(--body);
  }
  @media only screen and (max-width: 749px) {
    span {
      margin: 0 0 0 0;
      ${HeaderFont};
      color: var(--title);
    }
    p {
      margin: 0;
      ${MbBody3};
      color: var(--body);
    }
  }
`;
const ImageWrap = styled.div`
  position: relative;
  left: -1px;
  border-right: 1px solid var(--black);
  margin-top: -1px;
  img {
    height: 100%;
    object-fit: cover;
  }
  @media only screen and (max-width: 991px) {
    left: 0;
    width: 100%;
    border-right: 0;
    img {
      width: 100%;
    }
  }
`;
export { QuoteSection, Mainss, QuoteTxt, QuoteSubTxt, ImageWrap };
