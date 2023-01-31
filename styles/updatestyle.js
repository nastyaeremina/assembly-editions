import Link from "next/link";
import styled from "styled-components";
import { Body3, Body4, ButtonText, Heading3, Heading4, MbBody3, MbBody4, MbPrimaryBtn } from "./styles";

const UpadtePage = styled.div`
padding-top: 180px;
padding-bottom:100px;
@media only screen and (max-width: 426px){
    padding-top: 100px;
    padding-bottom: 80px;
}
`

const UpdateSubscribe = styled.div`
h1{
    ${Heading3}
    color: ${({ theme }) => theme.colors.title};
    margin:0px;      
}
p{
    ${Body3}
    color: ${({ theme }) => theme.colors.body};
    margin-top:16px;
    margin-bottom:28px;
    @media only screen and (max-width:768px){
        ${MbBody3}
    }
}
`

const UpdateDes = styled.div`
    margin-top:40px;
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
const UpdateDate = styled(Link)`
    ${ButtonText}
    color: ${({ theme }) => theme.colors.title};
    :hover{
        color: ${({ theme }) => theme.colors.primary};
    }
        @media only screen and (max-width:768px){
            ${MbPrimaryBtn}
            margin-bottom:20px;
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
        font-weight: 700;
    }
a{
        display:inline-block;
        color: ${({ theme }) => theme.colors.primary};
    :hover{
            color: ${({ theme }) => theme.colors.title};
        } 
        }
h1{
    margin:0px;
    ${Heading4}
    color : ${({ theme }) => theme.colors.title}
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
    color : ${({ theme }) => theme.colors.body};
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
    li{
        font-size: 18px;
        line-height: 24px;    
        margin-bottom: 0.5rem;
        padding-left: 1rem;
        ${Body4}
        color: ${({ theme }) => theme.colors.body};
        @media only screen and (max-width:768px){
            font-size: 15px;
            letter-spacing: .02em;
            line-height: 20px;
        }
    }
}
`
export {
    UpadtePage,
    UpdateSubscribe,
    UpdateDes,
    Detail,
    UpdateDate,
    UpdateDetail
}