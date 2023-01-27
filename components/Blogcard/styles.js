import styled from "styled-components";
import { MbButtonText } from "../../styles/styles";

const BlogDetail = styled.div`
    display:flex;
    max-width:880px;
    width:100%;
    cursor: pointer;
    margin:auto;
    margin-top:28px;
    margin-bottom:28px;
    border:1px solid #01011D;
    border-radius:4px;
    @media only screen and (max-width: 749px){
        flex-wrap:wrap;
    }
    :hover{
        h1{
            color: ${({ theme }) => theme.colors.title};
        }
        .image{
            transform: scale(1.1);
             transition: transform .2s;
        }
    }
`
const Leftside = styled.div`
display : inline-flex;
align-items : stretch ;
border-right:1px solid #01011D;
padding:0;
margin:0;
overflow:hidden;
max-width:266px;
width:100%;
.image{
    object-fit:cover;
    border-radius:4px 0px 0px 4px; 
    @media only screen and (max-width: 749px){
    border-right:none;
    display:flex;
    border-radius:4px 4px 0px 0px ;
    width:100%;
    height:250px;
}
}
@media only screen and (max-width: 749px){
    border-right:none;
    display:flex;
    width:100%;
}
`
const Rightside = styled.div`
display:flex;
justify-content: space-between ;
flex-direction:column;

`
const Text = styled.div`
    margin:20px 25px 0px 25px;
`
const Heading = styled.div`
`
const Desc = styled.div`
`
const Bottom = styled.div`
    ${MbButtonText}
    background-color: ${({ theme }) => theme.colors.greenlight};
    padding:8px 25px;
    /* margin-top:30px; */
    border-top:1px solid #01011D;
    border-bottom-right-radius:4px;
    @media only screen and (max-width: 749px){
        border-bottom-left-radius:4px;
    }
`
export { BlogDetail, Leftside, Rightside, Text, Heading, Desc, Bottom }