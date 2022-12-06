import styled, { css } from 'styled-components';
import { Body4, ButtonText, Quote } from '../../styles/styles';

const QuoteMain = styled.div`
  ${(props) =>
    props.gradientImage &&
    css`
      background-image: url(${props.gradientImage});
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
const QuoteTop = styled.div`
  position: relative;
  height: 407px;
`;
const QuoteLine = styled.div`
  bottom: -103px;
  position: absolute;
  left: 25%;
  margin-left: -1px;
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
`;
export { QuoteMain, Mainss, QuoteTxt, QuoteSubTxt, QuoteTop, QuoteLine, QuoteImg };
