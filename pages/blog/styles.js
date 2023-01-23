import styled from "styled-components";
import { Body4, Body5, FooterText, Heading4, MbBody4, MbBody5, MbButtonText } from "../../styles/styles";

const FirstBlog = styled.div`
    border: 1px solid #01011D;
    border-radius:4px;
    max-width: 882px;
    width:100%;
    margin: 120px auto 0px;
    .image{
        height:auto;
        max-width:100%;
        @media only screen and (max-width:749px){
            height:250px;
            object-fit:cover;
        }
    }
    @media only screen and (max-width: 749px){
        margin: 96px auto 0px;
    }
    :hover{
        h1{
        color: ${({ theme }) => theme.colors.title};
        }
    }
`;

const Textarea = styled.div`
    margin:20px 25px;
    h1{
        ${Body4}
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom:4px;
        margin-top:0px;
        @media only screen and (max-width:749px){
            ${MbBody4}
        }
    }
`

const PostDetail = styled.div`
    ${FooterText}
    display:flex;
    color: ${({ theme }) => theme.colors.lightgray};
    gap:8px;
    align-items:center;
    li{
        list-style-type:none;
    }
`
const Par = styled.div`
    ${Body5}
    margin-top:16px;
    color: ${({ theme }) => theme.colors.body};
    @media only screen and (max-width:749px){
        ${MbBody5}
    }
`

const Last = styled.div`
    border-top: 1px solid #01011D;
    border-radius: 0px 0px 4px 4px;
    background-color: ${({ theme }) => theme.colors.greenlight};
    padding:8px 25px;
    p{
        ${MbButtonText}
        margin:0px;
    }
`

const BlogList = styled.div`
    border: 1px solid #01011D;
    border-radius: 4px;
    max-width:880px;
    width:100%;
    margin:auto;
    display:flex;
    height:205px;
    margin-bottom:25px;
`

const Leftside = styled.div`
    border-right:1px solid #01011D;
    border-radius:4px 0px 0px 4px;
`

const Rightside = styled.div`
display:flex;
flex-direction:column;
`
const Lastpra = styled.div`
    margin-top:17px;
    border-top: 1px solid #01011D;
    border-radius: 0px 0px 4px 4px;
    background-color: ${({ theme }) => theme.colors.greenlight};
    padding:8px 25px;
    p{
        ${MbButtonText}
        margin:0px;
    }
`
const LastSection = styled.div`
max-width: 880px;
width:100%;
border-width: 1px 0px 1px 1px;
border-style: solid;
border-color: #000000;
border-radius: 4px 4px 4px 4px;
display:flex;
margin:100px auto;
@media only screen and (max-width: 768px){
    border-width: 1px 1px 1px 1px;
    border-style: solid;
    margin:80px auto;
    }
`

const Left = styled.div`
margin:50px 40px auto 40px;
h1{
    ${Heading4}
    margin-top:0px;
    margin-bottom:12px;
}
p{
    ${Body5}
    margin-bottom:40px;
    margin-top:0px;
}
@media only screen and (max-width: 768px){
        margin:40px 24px;
    }
`

const Right = styled.div`
margin-top:-1px;
display : inline-flex;
align-items : stretch ;
    svg{
        object-fit:cover;
    }
@media only screen and (max-width: 768px){
        display:none;
    }
`
export { FirstBlog, Textarea, PostDetail, Par, Last, BlogList, Leftside, Rightside, Lastpra, LastSection, Left, Right };