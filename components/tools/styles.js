import styled from "styled-components";
import { Body4, Heading, Heading2, Heading3, Heading4 } from "../../styles/styles";
const ToolMain = styled.div`
padding: 50px 0;
h3{
    max-width: 918px;
    width: 100%;
    margin: 0;
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
}
`;
const ModuleSection = styled.div`
margin-top: 40px;
border: 1px solid #120800;
border-radius: 4px 4px 0px 4px;
color: ${({ theme }) => theme.colors.white};
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
.moduleborder{
border-top: 0.8px solid #120800;
}
.borderright{
    border-right: 0;
}
`;
const ModuleWrap = styled.div`
border-right: 1px solid #120800;
padding: 28px 24px;
h4{
${Heading4};
color: ${({ theme }) => theme.colors.title};
margin:28px 0 12px 0;
}
p{
    ${Body4};
    color: ${({ theme }) => theme.colors.body};
    margin: 0;
}
.moduleborder{
border-style: solid;
border-color: #120800;
border-top: 1px solid #120800;
}
:last-child{
    border-right: 0;
}
`;
export {ToolMain,ModuleSection,ModuleWrap};
