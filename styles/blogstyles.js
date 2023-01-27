import styled from "styled-components";
import { Body1, Body4, Body5, FooterText, HeaderFont, Heading3, Heading4, LinkTxt, MbBody1, MbBody4, MbBody5, MbButtonText, MobileH4 } from "./styles";

const FirstBlog = styled.div`
    border: 1px solid #01011D;
    border-radius:4px;
    max-width: 882px;
    width:100%;
    margin: 120px auto 0px;
    cursor: pointer;
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

const Backlink = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 28px;
  p {
  ${LinkTxt};
    margin: 0px;
    color: ${({ theme }) => theme.colors.lightgray};
  }
  @media only screen and (max-width: 769px) {
    p {
      ${HeaderFont}
    }
  }
`;

const DetailHero = styled.div`
padding: 100px 0 40px;
margin-top:20px;    
  h3 {
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
  }
  @media only screen and (max-width: 769px) {
    padding-bottom: 20px;
  }
`;

const BlogImage = styled.div`
max-width:880px;
width:100%;
/* height:496px; */
border: 1px solid #000000;
border-radius: 4px;
overflow:hidden;
display:flex;
.image{
    height:auto;
    max-width:100%;
}
@media only screen and (max-width:426px){
    height:248px;
}
`
const BlogTime = styled.div`
    ${Body4}
    max-width:880px;
    width:100%;
    display:flex;
    justify-content:space-between;
    margin-top:20px;
    margin-bottom:40px;
    color: ${({ theme }) => theme.colors.lightgray};
    @media only screen and (max-width:426px){
        ${MbBody4}
        margin-top:16px;
        margin-bottom:28px;
    }
`
const Post = styled.div`
    ${Body4}
    display:flex;
    color: ${({ theme }) => theme.colors.lightgray};
    gap:8px;
    align-items:center;
     @media only screen and (max-width:426px){
        ${MbBody4}
     }
    li{
        list-style-type:none;
    }
`
const Table = styled.div`
    max-width:880px;
    width:100%;
    border: 1px solid #000000;
    border-radius: 4px;
    padding: 30px 25px;
    @media only screen and (max-width:426px){
        padding: 20px 16px;
    }
    ol{
        margin-top:8px;
        margin-bottom:0px;
        display:inline-block;
        ${Body4}
        padding-left:0px;
        list-style-position:inside;
        color: ${({ theme }) => theme.colors.primary};
        @media only screen and (max-width:426px){
            margin-top:4px;
            margin-bottom:0px;
            ${MbBody4}
        }
        li{
            margin:12px 0 0;
        }
        li:hover{
            cursor:pointer;
        color: ${({ theme }) => theme.colors.title};
        }
    }

`

const TableHeading = styled.div`
    ${Body1}
    color: ${({ theme }) => theme.colors.title};
    display:flex;
    gap:8px;
    align-items:center;
     @media only screen and (max-width:426px){
         ${MbBody1}
    }
    p{
        ${Body4}
        margin:0px;
        @media only screen and (max-width:426px){
            ${MbButtonText}
        }
        :hover{
            cursor: pointer;
        }
    }
    span{
        color: ${({ theme }) => theme.colors.primary};
    }

`
const Desc = styled.div`
max-width:880px;
width:100%;
margin:40px 0;
 @media only screen and (max-width:426px){
    margin:28px 0;
    ${MbBody4}
 }
        ${Body4}
        color: ${({ theme }) => theme.colors.body};
        P{
            margin-top:10px;
            margin-bottom:40px;
             @media only screen and (max-width:426px){
                margin-bottom:28px;
             }
        }
        span{
            color: ${({ theme }) => theme.colors.primary};
        }
`
const Details = styled.div`
margin:auto;
max-width:880px;
width:100%;
`

const Content = styled.div`
        max-width:880px;
        width:100%;
        ${Body4}
        color: ${({ theme }) => theme.colors.body};
        @media only screen and (max-width:426px){
            ${MbBody4}
        }
    h1{
        ${Heading4}
        color: ${({ theme }) => theme.colors.title};
        margin-bottom:12px;
         @media only screen and (max-width:426px){
            ${MobileH4}
         }
    }
    p{
        margin:10px 0;
    }
    ol{
        padding-left:20px;
        li{
            margin-top:8px;
        }
        li::marker{
            font-weight: 500;
            color: ${({ theme }) => theme.colors.title};
        }
        span{
            font-weight: 500;
            color: ${({ theme }) => theme.colors.title};
        }
    }
`

const Textcontent = styled.div`
        ${Body4}
        color: ${({ theme }) => theme.colors.body};
         @media only screen and (max-width:426px){
            ${MbBody4}
        }
`

const ShareButton = styled.div`
    margin:40px auto 0;
    max-width:156px;
    width:100%;
    text-align:center;
     @media only screen and (max-width:426px){
            ${MbBody4}
            max-width:122px;
            width:100%;
        }
`
const Icon = styled.div`
    display:flex;
    justify-content:space-between;
    div{
        width:36px;
        height:36px;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:#00160E;
        border-radius:50%;
        :hover{
            cursor: pointer;
            background-color:#09AA6C;
        }
         @media only screen and (max-width:426px){
            width:30px;
            height:30px;
         }
    }
`
const OverLayDiv = styled.div`position:absolute; top:0;bottom:0;left:0;right:0`;

const Leftsec = styled.div`
margin:72px 40px auto 40px;
text-align:center;
h1{
    ${Heading4}
    margin-top:0px;
    margin-bottom:12px;
    color: ${({ theme }) => theme.colors.black};
     @media only screen and (max-width:426px){
            ${MobileH4}
        }
}
p{
    ${Body5}
    margin-bottom:40px;
    margin-top:30px;
    color: ${({ theme }) => theme.colors.body};
     @media only screen and (max-width:426px){
            margin-bottom:0px;
            ${Body5}
        }
}
@media only screen and (max-width: 768px){
        margin:40px 24px;
    }
`
export {
    FirstBlog,
    Textarea,
    PostDetail,
    Par,
    Last,
    BlogList,
    Leftside,
    Rightside,
    Lastpra,
    LastSection,
    Left,
    Right,
    Backlink,
    DetailHero,
    BlogImage,
    BlogTime,
    Post,
    Table,
    TableHeading,
    Desc,
    Details,
    Content,
    Textcontent,
    ShareButton,
    Icon,
    Leftsec,
    OverLayDiv
};