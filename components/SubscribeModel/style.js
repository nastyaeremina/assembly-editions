import styled from "styled-components"
import css from "styled-jsx/css";
import { ButtonText, Heading4, MbBody5, MbButtonText, MbPrimaryBtn } from "../../styles/styles";

const Model = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width:100%;
  height:100vh;
  position:fixed;
  z-index:9999;
  top:0;
  left:0;
`;

const BlogSubscribe = styled.div`
    border: 1px solid #131313;
    border-radius: 5px;
    background-color:#FFFFFF;
    max-width:520px;
    width:100%;
    position:absolute;
    top:50%;
    transform:translate(-50%, -50%);
    left:50%;
    @media only screen and (max-width:426px){
        width:327px;
    }
`

const Premium = styled.div`
    h2{
        max-width:400px;
        width:100%;
        margin:auto;
        text-align:center;
        ${MbBody5}
        color: ${({ theme }) => theme.colors.body};
        padding-bottom:50px;
        @media only screen and (max-width:426px){
            padding:0px 28px 32px;
         }
    }
`
const CloseModel = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-right:22px;
    margin-top:22px;
    cursor: pointer;
`
const Logo = styled.div`
    display:flex;
    flex-direction:column;
    /* margin:auto; */
    align-items:center;
    p{
        ${Heading4}
        color: ${({ theme }) => theme.colors.title};
        margin-top:13px;
        margin-bottom:30px;
    }
    .last-step{
        margin-top:50px;
        @media only screen and (max-width:426px){
            margin-top:32px;
         }
    }
`

const Form = styled.div`
padding:0 50px 50px;
@media only screen and (max-width:426px){
           padding:0 28px 32px;
         } 
label{
    margin-bottom:15px;
    ${MbButtonText}
    color: ${({ theme }) => theme.colors.subtitle};
}
`

const Input = styled.input`
  padding: 7px 12px;
  background-color: ${({ theme }) => theme.colors.whitecolor};
  border: 1px solid #ccccd0;
  border-radius: 4px;
  outline: 0;
  height:32px;
  margin-bottom: 20px;
  margin-top:5px;
  font-size: 12px;
  line-height: 14px;
  width: 100%;
  color: ${({ theme }) => theme.colors.title};
  :hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  :focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = styled.div`
    margin-top:32px;
    text-align:center;
  a {
    max-width:426px;
    margin:auto;
    width:100%;
    text-align:center;
    ${ButtonText}
    display: inline-block;
    letter-spacing: 0.02em;
    padding:11px 32px;
    border-radius: 26px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.whiteColor};
    border: 1px solid #09aa6c;
     @media only screen and (max-width:426px){
            padding:8px 32px;
            width:auto;
         }
    :hover {
        background-color: ${({ theme }) => theme.colors.primary};
    }
    text-decoration: none;
    transition: all 300ms;
}
`
export {
    Model,
    BlogSubscribe,
    Premium,
    CloseModel,
    Logo,
    Form,
    Button,
    Input
};