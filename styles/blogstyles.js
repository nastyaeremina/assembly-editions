import styled from "styled-components";
import { Body1, Body3, Body4, Body5, FooterText, HeaderFont, Heading2, Heading3, Heading4, LinkTxt, MbBody1, MbBody3, MbBody4, MbBody5, MbButtonText, MobileH2, MobileH3, MobileH4 } from "./styles";


const FirstBlog = styled.div`
    border: 1px solid #01011D;
    border-radius:4px;
    max-width: 882px;
    width:100%;
    margin:auto;
    margin-bottom:28px;
    cursor: pointer;
    .image{
        height:354px;
        object-fit:cover;
        max-width:100%;
        border-radius:3px 3px 0px 0px;
        @media only screen and (max-width:749px){
            height:248px;
            object-fit:cover;
        }
    }
    @media only screen and (max-width: 749px){
        margin: 0px auto 0px;
    }
    :hover{
        h2{
        color: ${({ theme }) => theme.colors.title};
        }
        .image{
            transform: scale(1.1);
             transition: transform .2s;
        }
    }
`;
const Top = styled.div`
object-fit:cover;
height:354px;
overflow:hidden;
border-radius:3px 3px 0px 0px;
@media only screen and (max-width:749px){
    height:248px;
}
`
const Text = styled.div`
    margin:20px 25px;
    @media only screen and (max-width:749px){
        margin:20px 16px;
    }
    h2{
        ${Body4}
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom:4px;
        margin-top:0px;
        @media only screen and (max-width:749px){
            ${MbBody4}
        }
    }
`
const Textarea = styled.div`
    margin:20px 25px;
    margin-bottom:0px;
     @media only screen and (max-width:749px){
        margin:20px 16px;
        margin-bottom:0px;
    }
    h2{
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
    display:-webkit-box;
    overflow:hidden;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:4;
    ${Body5}
    margin-top:16px;
    color: ${({ theme }) => theme.colors.body};
    @media only screen and (max-width:749px){
        ${MbBody5}
        margin-top:8px;
    }
`

const Last = styled.div`
    border-top: 1px solid #01011D;
    border-radius: 0px 0px 4px 4px;
    background-color: ${({ theme }) => theme.colors.greenlight};
    padding:8px 25px;
     @media only screen and (max-width:749px){
        padding:8px 16px;
    }
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
h2{
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
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 28px;
  p {
  ${LinkTxt};
    margin: 0px;
    color: ${({ theme }) => theme.colors.lightgray};
}
:hover{
    p{
        color: ${({ theme }) => theme.colors.title};
    }
    svg path{
        stroke: ${({ theme }) => theme.colors.title};
    }
}
  @media only screen and (max-width: 769px) {
    p {
      ${HeaderFont}
    }
  }
`;

const DetailHero = styled.div`
  padding: 0px 0 40px;
  /* margin-top:20px;     */
  h1 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
    @media only screen and (max-width: 769px) {
      ${MobileH2}
    }
  }
  @media only screen and (max-width: 769px) {
    padding-bottom: 28px;
  }
`;

const BlogImage = styled.div`
  max-width: 880px;
  width: 100%;
  overflow: hidden;
  display: flex;
  .image {
    height: auto;
    max-width: 100%;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #dfe1f4;
    @media only screen and (max-width: 450px) {
      height: 248px;
      object-fit: cover;
    }
  }
  @media only screen and (max-width: 450px) {
    height: 248px;
  }
`;
const BlogTime = styled.div`
  ${Body4}
  max-width:880px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.lightgray};
  @media only screen and (max-width: 450px) {
    ${MbBody4}
    margin-top:16px;
    margin-bottom: 28px;
  }
  span:hover {
    color: ${({ theme }) => theme.colors.title};
    cursor: pointer;
  }
`;
const Post = styled.div`
    ${Body4}
    display:flex;
    color: ${({ theme }) => theme.colors.lightgray};
    gap:8px;
    align-items:center;
     @media only screen and (max-width:450px){
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
    margin-bottom:40px;
    @media only screen and (max-width:450px){
        padding: 20px 16px;
        margin-bottom:28px;
    }
    ol{
        margin-top:8px;
        margin-bottom:0px;
        display:inline-block;
        ${Body4}
        padding-left:0px;
        list-style-position:inside;
        color: ${({ theme }) => theme.colors.primary};
        @media only screen and (max-width:450px){
            margin-top:4px;
            margin-bottom:0px;
            ${MbBody4}
        }
        li{
            margin:12px 0 0;
            a{
                display:contents;
                color: ${({ theme }) => theme.colors.primary};
                :hover{
                    color: ${({ theme }) => theme.colors.title};
                }
            }
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
     @media only screen and (max-width:450px){
         ${MbBody1}
    }
    p{
        ${Body4}
        margin:0px;
        @media only screen and (max-width:450px){
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
 @media only screen and (max-width:450px){
    margin:28px 0;
    ${MbBody4}
 }
        ${Body4}
        color: ${({ theme }) => theme.colors.body};
        P{
            margin-top:10px;
            margin-bottom:40px;
             @media only screen and (max-width:450px){
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
  max-width: 880px;
  width: 100%;
  font-feature-settings: normal;
  ${Body3}
  color: ${({ theme }) => theme.colors.body};
  @media only screen and (max-width: 450px) {
    ${MbBody3}
  }
  strong {
    font-weight: 600;
  }
  figure {
    margin: 0px;
    img {
      width: 100%;
      border-radius: 8px;
      border: 1px solid #dfe1f4;
    }
    iframe {
      border-radius: 0.375rem;
      border: 1px solid black;
      width: 100%;
      height: 496px;
      @media only screen and (max-width: 450px) {
        height: 180px;
      }
    }
  }
  a {
    display: inline-block;
    ${Body3}
    color: ${({ theme }) => theme.colors.primary};
    @media only screen and (max-width: 450px) {
      ${MbBody3}
    }
    :hover {
      color: ${({ theme }) => theme.colors.title};
    }
  }
  ul {
    list-style-type: disc;
    margin-left: 15px;
    li {
      margin-top: 8px;
      a {
        display: inline-block;
        ${Body3}
        color: ${({ theme }) => theme.colors.primary};
        :hover {
          color: ${({ theme }) => theme.colors.title};
        }
      }
    }
    li::marker {
      color: ${({ theme }) => theme.colors.body};
    }
    span {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.title};
    }
  }
  h2 {
    font-size: 50px;
    line-height: 55px;
    margin-top: -4rem;
    padding-top: 6rem;
    color: #131313;
    font-weight: 400;
    strong {
      font-weight: 400;
    }
    @media only screen and (max-width: 991px) {
      ${MobileH2}
    }
    @media only screen and (max-width: 479px) {
      ${MobileH3}
    }
  }
  h3 {
    font-size: 32px;
    line-height: 105%;
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-weight: 400;
    color: #131313;
    strong {
      font-weight: 400;
    }
    @media only screen and (max-width: 479px) {
      ${MobileH4}
    }
  }
  h4 {
    font-size: 24px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    color: #131313;
    strong {
      font-weight: 400;
    }
    @media only screen and (max-width: 479px) {
      ${Body3}
    }
  }
  p {
    color: ${({ theme }) => theme.colors.body};
    margin-bottom: 1rem;
    margin-top: 1rem;
    ${Body3}
    @media only screen and (max-width: 450px) {
      font-size: 15px;
      line-height: 130%;
    }
    strong {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.title};
    }
  }
  ol {
    padding-left: 20px;
    li {
      margin-top: 8px;
      a {
        display: inline-block;
        ${Body3}
        color: ${({ theme }) => theme.colors.primary};
        :hover {
          color: ${({ theme }) => theme.colors.title};
        }
      }
    }
    li::marker {
      color: ${({ theme }) => theme.colors.body};
    }
    span {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.title};
    }
  }
`;

const Textcontent = styled.div`
        ${Body4}
        color: ${({ theme }) => theme.colors.body};
         @media only screen and (max-width:450px){
            ${MbBody4}
        }
`

const ShareButton = styled.div`
    margin:80px auto 0;
    max-width:156px;
    width:100%;
    text-align:center;
     @media only screen and (max-width:450px){
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
         @media only screen and (max-width:450px){
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
     @media only screen and (max-width:450px){
            ${MobileH4}
        }
}
p{
    ${Body5}
    margin-bottom:40px;
    margin-top:30px;
    color: ${({ theme }) => theme.colors.body};
     @media only screen and (max-width:450px){
            margin-bottom:0px;
            ${Body5}
        }
}
@media only screen and (max-width: 768px){
        margin:40px 24px;
    }
`

const MainContent = styled.div`
padding-top:120px;
@media only screen and (max-width:768px){
    padding-top:115px;
}
`
export {
    FirstBlog,
    Top,
    Text,
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
    OverLayDiv,
    MainContent
};