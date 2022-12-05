import styled, { css } from "styled-components";
import { ButtonText, HeaderFont, MbPrimaryBtn } from "../../styles/styles";

const ButtonContainer = styled.div`
overflow:hiden;
  a {
    ${ButtonText}
    display: inline-block;
    letter-spacing: 0.02em;
    padding: 11px 32px;
    border-radius: 26px;
    ${(props) =>
        props.fontColor &&
        css`
        color: ${props.fontColor};
      `}
    ${(props) =>
        props.backgroundColor &&
        css`
        background-color: ${props.backgroundColor};
      `}
      ${(props) =>
        props.hoverColor &&
        css`
        :hover{
            background-color: ${props.hoverColor};
        }
      `}
      ${(props) =>
        props.borderColor &&
        css`
          border: 1px solid ${props.borderColor};
      `}
    text-decoration: none;
    transition: all 300ms;
  }
  @media only screen and (max-width: 991px) {
    a {
      ${HeaderFont};
      padding: 6px 24px;
    }
  }
  @media only screen and (max-width: 749px) {
    a {
      ${MbPrimaryBtn};
      padding: 7px 32px;
    }
  }
`;

const Blur = styled.div`
    position: fixed;
	pointer-events: none;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	margin-top: -40px;
	margin-left: -40px;
	background: #ff9999;
	font-size: 18px;
	letter-spacing: 0.05em;
	color: #fff;
    ${(props) =>
        props.position &&
        css`
          transform: translate( ${props.position.left}px , ${props.position.top}px );
      `}
`

export { ButtonContainer, Blur }