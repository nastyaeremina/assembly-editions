import Link from "next/link";
import styled from "styled-components";
import { Body3, Body4, ButtonText, HeaderFont, Heading3, Heading4, MbBody3, MbBody4, MbPrimaryBtn } from "./styles";
import { black, body, primary, title } from "./color";

const UpadtePage = styled.div`
padding-top: 180px;
padding-bottom:100px;
@media only screen and (max-width: 768px){
    padding-top: 100px;
    padding-bottom: 80px;
}
`

const UpdateSubscribe = styled.div`
margin-bottom:40px;
h1{
    ${Heading3}
    color: ${title};
    margin:0px;      
}
p{
    ${Body3}
    color: ${body};
    margin-top:16px;
    margin-bottom:28px;
    @media only screen and (max-width:768px){
        ${MbBody3}
    }
}
`

const UpdateDes = styled.div`
    border-top: 1px solid #000000;
svg{
    position:absolute;
}
`
const Detail = styled.div`
    display:flex;
    margin-top:28px;
    justify-content:space-between;
    @media only screen and (max-width:768px){
        display:flex;
        flex-direction:column;
        margin-top:12px;
    }
`
const DetailSlug = styled.div`
    display:flex;
    margin-top:28px;
    margin-bottom:100px;
    justify-content:space-between;
    @media only screen and (max-width:768px){
        display:flex;
        flex-direction:column;
        margin-top:12px;
    }
`

const UpdateDate = styled(Link)`
    position: sticky;
    top: 150px;
    height:40px;
    ${ButtonText}
    max-width:200px;
    width:100%;
    color: ${title};
    :hover{
        color: ${primary};
    }
        @media only screen and (max-width:768px){
            ${MbPrimaryBtn}
            margin-bottom:20px;
            position:relative;
            top: 0;
        }
`
const UpdateDetail = styled.div`
    max-width:917px;
    width:100%;
    ${Body4}
    figure{
            margin: 0 0 1rem 0;
            object-fit:cover;
            img{
                    border-radius: 0.375rem;
                    border: 1px solid black;
                    width: 100%;
            }
            iframe{
            border-radius:0.375rem;
            border:1px solid black;
            width:100%;
            height:496px;
            @media only screen and (max-width:768px){
                height:180px;
            }
        }
    }
     em{
            font-style: italic;
    } 
    strong{
        font-weight: 600;
    }
a{
        display:inline-block;
        color: ${primary};
    :hover{
            color: ${title};
        } 
        }
h1{
    margin:0px;
    ${Heading4}
    color : ${title}
}
h3{
        font-size: 1.5rem;
        line-height: 2rem;
        margin-bottom: 1rem;
        margin-top: 0;
        font-weight: inherit;
    @media only screen and (max-width:768px){
        font-size: 1.25rem;
        line-height: 1.75rem;
    }
}
p{
    margin-top:12px;
    margin-bottom:40px;
    ${Body4}
    color : ${body};
    @media only screen and (max-width:768px){
            font-size: 15px;
            letter-spacing: .02em;
            line-height: 20px;
    }
    
}
ul{
    list-style-image:url("./images/Bullet.svg");
    padding-left:25px;
    margin-top:12px;
    margin-bottom:40px;
    li{
        font-size: 18px;
        line-height: 24px;    
        margin-bottom: 0.5rem;
        padding-left: 1rem;
        ${Body4}
        color: ${body};
        @media only screen and (max-width:768px){
            font-size: 15px;
            letter-spacing: .02em;
            line-height: 20px;
        }
    }
}
`
const Pagination = styled.div`
  display: flex;
  gap: 13px;
  .pagination-button {
    a {
      ${HeaderFont}
      color: ${black};
      padding: 8px 32px;
      @media only screen and (max-width: 449px) {
        padding: 10px 16px;
        font-weight: 500;
        font-size: 12px;
        line-height: 12px;
      }
    }
  }
`;

const Left = styled.div`
  position: sticky;
  top: 150px;
  height: 40px;
  ${ButtonText}
  max-width:200px;
  width: 100%;
  color: ${title};
  :hover {
    color: ${primary};
  }
  @media only screen and (max-width: 768px) {
    display:none;
  }
`;
export { UpadtePage, UpdateSubscribe, UpdateDes, Detail, UpdateDate, UpdateDetail, DetailSlug, Pagination, Left };