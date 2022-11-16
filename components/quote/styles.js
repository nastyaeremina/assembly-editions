import styled from "styled-components";
import { Body4, ButtonText,Quote } from "../../styles/styles";

const QuoteMain = styled.div`
background-image: url("/images/bgimage.svg");
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
border: 1.5px solid #000000;
border-radius: 4px;
background: #FFFFFF;
`;
const QuoteTxt = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
padding: 40px 40px 40px 0;
h3{
  ${Quote};
  margin: 0;
  color: ${({ theme }) => theme.colors.title};
}`;
const QuoteSubTxt = styled.div`
h4{
  margin: 0 0 5px 0;
  ${ButtonText};
  color: ${({ theme }) => theme.colors.title};
}
p{
  margin: 0;
  ${Body4};
  color: ${({ theme }) => theme.colors.body};
};
`;
const QuoteTop = styled.div`
position: relative;
height: 407px;
`;
const QuoteLine = styled.div`
position: absolute;
top:0;
`;
export {QuoteMain,Mainss,QuoteTxt,QuoteSubTxt,QuoteTop,QuoteLine};
