import styled from 'styled-components';
import { Body3, Body4, Heading3, Heading4, Label, MbBody3 } from '../../styles/styles';
const BottomFunction = styled.div`
  margin-top: 40px;
  position: relative;
  .am{
  font-family: 'Bagoss';
  letter-spacing: 0.02em;
}
  ::after {
    content: '';
    position: absolute;
    height: 250px;
    right: calc(25.01% - 0px);
    border-right: 1px solid #000900;
    position: absolute;
  }
  @media only screen and (max-width: 769px) {
    margin-top: 28px;
    ::after {
      border: none;
    }
    .ak {
      margin-bottom: 0;
    }
    .bh {
      padding-top: 28px;
    }
  }
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
  padding: 16px 18px;
  width: 100%;
  background: #ffffff;
  position: relative;
`;
const TopFunctionWrap = styled.div`
  width: 100%;
  max-width: 1020px;
  h2 {
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
  @media only screen and (max-width: 426px) {
    p {
      ${MbBody3}
    }
  }
`;
const ContentMain = styled.div`
  padding-top: 100px;
  .b8 {
    font-size: 17px;
    line-height: 21px;
  }
  @media only screen and (max-width: 769px) {
    padding-top: 80px;
  }
`;
export { ContentMain, BottomFunction, TabRow, TabBox, ContainWrap, LeftDetail, TopFunctionWrap, RightDetail };
