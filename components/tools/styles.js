import styled, { css } from 'styled-components';
import { Body4, Heading3, Heading4, MbBody5 } from '../../styles/styles';
const ToolMain = styled.div`
  padding: 100px 0 50px 0;
  h3 {
    max-width: 918px;
    width: 100%;
    margin: 0;
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media only screen and (max-width: 749px) {
    padding: 80px 0 40px 0;
  }
`;
const ModuleSection = styled.div`
  margin-top: 40px;
  border: 1px solid #120800;
  border-top: 0;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: relative;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    border-right: none;
  }
  /* .moduleborder {
    border-top: 1px solid #120800;
    position: relative;
  }
  .borderright {
    border-right: 0;
  }
  .bigborder {
    position: relative;
  }
  .borderposition {
    position: absolute;
    right: -1px;
    top: -251px;
  } */
`;
const ModuleWrap = styled.div`
  border: 1px solid #120800;
  padding: 28px 24px;
  border-left: 0;
  margin-bottom: -1px;
  :nth-child(4) {
    border-right: none;
  }
  :nth-child(8) {
    border-right: none;
  }
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 28px 0 12px 0;
  }
  p {
    ${Body4};
    color: ${({ theme }) => theme.colors.body};
    margin: 0;
  }
  .moduleborder {
    border-style: solid;
    border-color: #120800;
    border-top: 1px solid #120800;
  }
  :last-child {
    border-right: 0;
  }
  @media only screen and (max-width: 768px) {
    :nth-child(1) {
      border-top-left-radius: 4px;
    }
    :nth-child(2) {
      border-top-right-radius: 4px;
    }
    :nth-child(4) {
      border-right: 1px solid #120800;
    }
    :nth-child(7) {
      border-bottom: 0;
    }
    :nth-child(8) {
      border-right: 1px solid #120800;
      border-bottom-right-radius: 4px;
      border-bottom: 0;
    }
  }
  @media only screen and (max-width: 749px) {
    padding: 20px 16px;
    img {
      width: 24px;
      height: 24px;
    }
    h4 {
      margin: 14px 0 8px 0;
    }
    p {
      ${MbBody5}
    }
  }
`;
export { ToolMain, ModuleSection, ModuleWrap };
