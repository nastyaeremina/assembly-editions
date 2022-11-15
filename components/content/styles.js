import styled from "styled-components";
import { Body3, Body4, Heading3, Heading4, Label } from "../../styles/styles";
const BottomFunction = styled.div`
  margin-top: 40px;
`;
const TabRow = styled.div`
  display: flex;
`;
const TabBox = styled.div`
  a {
    ${Label};
    color: ${({ theme }) => theme.colors.lightgray};
    padding: 7px 20px;
    border-radius: 74px;
    font-weight: 500;
    letter-spacing: 0.01em;
    :hover {
      color: ${({ theme }) => theme.colors.title};
    }
  }
  .activetab {
    background-color: ${({ theme }) => theme.colors.browndark};
    color: ${({ theme }) => theme.colors.brownlight};
  }
`;
const IconSvg = styled.div`
  position: relative;
  margin-bottom: 28px;
  ::after {
    content: "";
    position: absolute;
    border-top: 1px solid #000000;
    width: 100%;
    top: 50%;
  }
`;
const IconViewblank = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ccccd0;
  border-radius: 50px;
  position: absolute;
  right: 10px;
  top: -11px;
  display: inline-flex;
`;
const TabName = styled.span`
  display: block;
  margin-left: 12px;
  ${Body4};
  color: ${({ theme }) => theme.colors.body};
`;

const CenterBox = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;
const ContainWrap = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
`;
const LeftDetail = styled.div`
  width: 100%;
  max-width: 278px;
  margin-right: 28px;
  h4 {
    margin: 0 0 12px 0;
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
  }
  p {
    ${Body4};
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.body};
    margin: 0 0 24px 0;
  }
`;
const TopFunctionWrap = styled.div`
  width: 100%;
  max-width: 1020px;
  h3 {
    margin: 0 0 16px 0;
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  p {
    ${Body3 };
    color: ${({ theme }) => theme.colors.body};
    margin: 0;
  }
`;
const ContentMain = styled.div`
padding: 50px 0;
`;
export {LeftDetail,ContainWrap,CenterBox,TabName,IconViewblank,IconSvg,TabBox,TabRow,BottomFunction,TopFunctionWrap,ContentMain};
