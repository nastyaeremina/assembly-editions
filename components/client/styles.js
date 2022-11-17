import styled from "styled-components";
import { Body1,Heading3,LinkTxt} from "../../styles/styles";
const ClientMain = styled.div`
padding: 50px 0;
`;
const ClientHero = styled.div`
text-align: center;
h3{
    max-width: 920px;
    width: 100%;
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
    margin:0 auto;
}
`;
const CardSection = styled.div`
display: flex;
gap: 16px;
justify-content: space-between;
padding-bottom: 16px;
padding-top: 40px;
/* transition: all 0.5s ease; */
.mydiv:hover .hide  {
    display:block;
    color:white;
   
  }
  .mydiv:hover .show {
    display:none;
  }
`;
const ModuleCard = styled.div`
padding: 24px 20px;
border: 1px solid #01292C;
border-radius: 4px;
/* transition: all 5s ease; */
.hide{
    display: none;
 
  }
  :hover {
    background-image: url("/images/bgimage.svg");
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
color:white;
}
`;
const CardText = styled.div`
display: flex;
align-items: center;
gap: 8px;
padding-top: 40px;
transition: all 300ms ease-in-out;
h4{
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
    ${LinkTxt};
}
h4:hover {
color:white;    
}
`;
const BlockSection = styled.div`
border: 1px solid #000000;
border-radius: 4px;
padding: 40px 50px;
display: flex;
gap:60px;
`;
const BlockText = styled.div`
text-align: left;
h3  {
    margin:0 0 50px 0;
    ${Body1};
    color: ${({ theme }) => theme.colors.greendark};
}
.hidden{
    display:none;
}
`;
const BlockWrap = styled.div`
display: flex;
align-items: center;
gap: 8px;
.hidden{
    display:none;
}
.show{
    display:block;
}
h4{
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
    ${LinkTxt};
}
.show:hover{
display: none;
}
.hidden:hover{
    display: block;
}
`;
export {ClientMain,ClientHero,CardSection,ModuleCard,CardText,BlockSection,BlockText,BlockWrap};
