import styled, { css } from 'styled-components';
import { Body4, ButtonText, MobileH3, Quote } from '../../styles/styles';

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
  @media only screen and (max-width: 749px) {
    padding: 40px 0;
    ${(props) =>
      props.gradientImage &&
      css`
        background-image: url(${props.gradientImage?.responsive});
      `}
  }
  /* ::before{
  content: "";
    position: absolute;
    border: 1px solid #120800;
    width: 100px;
    transform: rotate(90deg);
    top: 0;
    left: 306px;
}
::before{
  border: 1px solid #120800;
transform: rotate(90deg);
} */
`;
const Mainss = styled.div`
  display: flex;
  gap: 40px;
  border: 1px solid #000000;
  border-radius: 4px;
  background: #ffffff;
  overflow: hidden;
  @media only screen and (max-width: 769px) {
    gap: 0;
  }
  @media only screen and (max-width: 376px) {
    flex-wrap: wrap;
  }
`;
const QuoteTxt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 40px 40px 0;
  h3 {
    ${Quote};
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
  }
  @media only screen and (max-width: 769px) {
    padding: 30px 28px;
    h3 {
      ${MobileH3};
      padding-bottom: 30px;
    }
  }
`;
const QuoteSubTxt = styled.div`
  h4 {
    margin: 0 0 5px 0;
    ${ButtonText};
    color: ${({ theme }) => theme.colors.title};
  }
  p {
    margin: 0;
    ${Body4};
    color: ${({ theme }) => theme.colors.body};
  }
  @media only screen and (max-width: 769px) {
    h4 {
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
  bottom: -103px;
  position: absolute;
  left: 25%;
  margin-left: -1px;
  @media only screen and (max-width: 769px) {
    left: 50%;
  }
  @media only screen and (max-width: 376px) {
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
  @media only screen and (max-width: 769px) {
    img {
      width: 323px;
    }
  }
  @media only screen and (max-width: 376px) {
    border-right: 0;
    border-bottom: 2px solid #000000;
    left: 0;
    img {
      width: 100%;
    }
  }
`;
export { QuoteMain, Mainss, QuoteTxt, QuoteSubTxt, QuoteTop, QuoteLine, QuoteImg };
