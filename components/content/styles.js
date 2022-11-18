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
const RightDetail = styled.div`
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 18px 18px 13px;
  width: 100%;
  background: #ffffff;
  position: relative;
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
    ${Body3};
    color: ${({ theme }) => theme.colors.body};
    margin: 0;
  }
`;
const ContentMain = styled.div`
padding-top: 100px;
`;
export {ContentMain, BottomFunction, TabRow, TabBox, ContainWrap, LeftDetail, TopFunctionWrap,RightDetail };
