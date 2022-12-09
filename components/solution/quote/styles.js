import styled from 'styled-components';
import { Body4, ButtonText, HeaderFont, MbBody3, MobileH3, Quote } from '../../../styles/styles';

const QuoteSection = styled.div`
  padding: 50px 0;
  overflow: hidden;
`;

const Mainss = styled.div`
  display: flex;
  border: 1px solid #000000;
  border-radius: 4px;
  background: #ffffff;
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
  h3 {
    ${Quote};
    margin: 0px 0 30px 0;
    color: ${({ theme }) => theme.colors.title};
  }
  @media only screen and (max-width: 749px) {
    padding: 30px;
    h3 {
      ${MobileH3};
      margin: 0px 0 30px 0;
      color: ${({ theme }) => theme.colors.title};
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
  @media only screen and (max-width: 749px) {
    h4 {
      margin: 0 0 0 0;
      ${HeaderFont};
      color: ${({ theme }) => theme.colors.title};
    }
    p {
      margin: 0;
      ${MbBody3};
      color: ${({ theme }) => theme.colors.body};
    }
  }
`;
const ImageWrap = styled.div`
  position: relative;
  left: -1px;
  border-right: 1px solid #000;
  margin-top: -1px;
  img {
    height: 100%;
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
