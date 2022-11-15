import styled from "styled-components";
import { Body4, ButtonText,Quote } from "../../styles/styles";

const QuoteMain = styled.div`
background-image: url("/images/bgimage.svg");
/* background-position: center;  */
    background-repeat: no-repeat;
    /* background-size: contain; */
    /* position: relative; */
    background-size: contain;
    right: 0;
    top: 0px;
    width: 100%;
    display: block;
    background-position: 50% 50%;
    padding: 50px 0;
    position: relative;
::after{
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
}
`;
const Mainss = styled.div`
display: flex;
gap: 40px;
border: 1.5px solid #000000;
border-radius: 4px;
background: #FFFFFF;
`;
const QuoteTxt = styled.div`h3{
  ${Quote};
  margin: 40px 0 30px 0;
  color: ${({ theme }) => theme.colors.title};
  height: 240px;
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
export {QuoteMain,Mainss,QuoteTxt,QuoteSubTxt,QuoteTop};
