import styled from 'styled-components';
import { Body4, ButtonText, Quote } from '../../../styles/styles';

const QuoteSection = styled.div`
  padding: 50px 0;
`;

const Mainss = styled.div`
  display: flex;
  gap: 40px;
  border: 1px solid #000000;
  border-radius: 4px;
  background: #ffffff;
  overflow: hidden;
`;
const QuoteTxt = styled.div`
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;

  h3 {
    ${Quote};
    margin: 40px 0 30px 0;
    color: ${({ theme }) => theme.colors.title};
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
`;
const ImageWrap = styled.div`
  position: relative;
  left: -1px;
  border-right: 1px solid #000;
  margin-top: -1px;
  img {
    height: 100%;
  }
`;
export { QuoteSection, Mainss, QuoteTxt, QuoteSubTxt, ImageWrap };
