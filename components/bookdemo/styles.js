import styled from "styled-components";
import { Body4, Heading4 } from "../../styles/styles";
const MainSection = styled.div`
  padding: 40px 80px;
  background-color: ${({ theme }) => theme.colors.bgcolor}; ;
`;
const FormSection = styled.div``;
const FormTxt = styled.div`
  padding: 40px 0;
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 12px 0;
  }
  p {
    ${Body4};
    color: ${({ theme }) => theme.colors.body};
    margin: 0;
  }
`;
const FoemDetail = styled.div``;
const Input = styled.input`
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.whitecolor};
  border: 1px solid #ccccd0;
  border-radius: 4px;
  outline: 0;
`;
export { MainSection, FormSection, FormTxt, FoemDetail, Input };
