import styled, { css } from 'styled-components';
import { Body4, Heading3, Heading4, MbBody5 } from '../../styles/styles';
import { body, primary, title, whiteColor } from '../../styles/color';
const ToolMain = styled.div`
  padding: 0px 0 50px 0;
  h2 {
    max-width: 75%;
    width: 100%;
    margin: 0;
    ${Heading3};
    color: ${title};
    border-right: 1px solid #000900;
    margin-bottom: -40px;
    padding-bottom: 40px;
    padding-top: 100px;
    @media only screen and (max-width: 991px) {
      border-right: none;
      padding-top: 80px;
      max-width: 100%;
    }
  }

  span {
    color: ${primary};
  }
  @media only screen and (max-width: 749px) {
    padding: 0px 0 40px 0;
  }
`;
const ModuleSection = styled.div`
  margin-top: 40px;
  border: 1px solid #120800;
  border-top: 0;
  border-radius: 4px;
  color: ${whiteColor};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: relative;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    border-right: none;
  }
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
  h3 {
    ${Heading4};
    color: ${title};
    margin: 28px 0 12px 0;
  }
  p {
    ${Body4};
    color: ${body};
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
    h3 {
      margin: 14px 0 8px 0;
    }
    p {
      ${MbBody5}
    }
  }
`;
export { ToolMain, ModuleSection, ModuleWrap };
