import styled from "styled-components";
import { Body3, Body4, Heading4 } from "../../styles/styles";
const MainSection = styled.div`
  padding: 40px 80px;
  background-color: ${({ theme }) => theme.colors.bgcolor}; ;
`;
const FormSection = styled.div`
  .btnposition {
    width: 100%;
    text-align: center;
  }
`;
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
const FoemDetail = styled.div`
  padding-bottom: 40px;
  label {
    display: block;
    ${Body3};
    color: ${({ theme }) => theme.colors.subtitle};
    margin: 0 0 5px 0;
  }
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  select {
    height: 32px;
    margin-bottom: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    border: 1px solid #dfe1eb;
    border-radius: 4px;
    background-color: #fff;
    background-image: none;
    background-position: 0 0;
    background-size: auto;
    background-repeat: repeat;
    outline: 0;
    appearance: none;
    width: 100%;
    :hover {
      border-color: ${({ theme }) => theme.colors.primary};
    }
    :focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
  .wselect {
    display: block;
    width: 100%;
    padding: 5px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    /* vertical-align: middle; */
    background-color: #fff;
    border: 1px solid #ccc;
  }
  .sm {
    border-radius: 4px;
    font-size: 14px;
  }
  textarea {
    width: 100%;
    height: auto;
    max-width: 380px;
    min-height: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    outline: 0;
    border: 1px solid #dfe1eb;
    :hover {
      border-color: ${({ theme }) => theme.colors.primary};
    }
    :focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
  .inputtext {
    height: 32px;
    min-height: auto;
    margin-bottom: 20px;
    padding: 0 10px;
    border-radius: 4px;
    font-size: 14px;
  }
`;

const Input = styled.input`
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.whitecolor};
  border: 1px solid #ccccd0;
  border-radius: 4px;
  outline: 0;
  margin-bottom: 20px;
  width: 100%;
  :hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  :focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
const NameBlock = styled.div`
  display: flex;
  gap: 20px;
`;
const NameInfo = styled.div`
  .inputtext {
    height: 32px;
    min-height: auto;
    margin-bottom: 20px;
    padding: 0 10px;
    border-radius: 4px;
    font-size: 14px;
  }
`;
export {
  MainSection,
  FormSection,
  FormTxt,
  FoemDetail,
  Input,
  NameBlock,
  NameInfo,
};
