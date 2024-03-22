import styled, { css } from 'styled-components';
import { Body4, Body5, CardTxt, FooterText, Heading3, Heading4, Heading5, Value } from '../../styles/styles';
import { body, darkgray, greendark, greenlight, lightgray, purpledark, title } from '../../styles/color';

const CardSub = styled.div`
  display: block;
  :hover {
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 0px 0.1px #01011d;
    border-radius: 4px;
  }
  a {
    background: #ffffff;
    border: 1px solid ${purpledark};
    border-radius: 4px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    height: 100%;
    position: relative;
    :hover {
      border: 1px solid ${purpledark};
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const CardDescription = styled.div`
  color: ${darkgray};
  letter-spacing: 0.02em;
  ${Body5}
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  ${(props) =>
    props.isBottom &&
    css`
      padding-bottom: 36px;
    `}
`;
const CardInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding-bottom: 12px;
  img {
    max-width: 100%;
  }
  h3 {
    color: ${title};
    ${Body4}
    letter-spacing: 0.02em;
    margin: 0;
  }
`;

const ImgView = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DirectoryCardSection = styled.div`
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 80px;
    gap: 24px;
  }
  ${(props) =>
    props.isAppdetail &&
    css`
      gap: 40px;
    `}
  ${(props) =>
    props.isSearchEmpty &&
    css`
      padding-bottom: 0;
      @media only screen and (max-width: 768px) {
        padding-bottom: 0;
      }
    `}
`;

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const RatingSection = styled.div`
  display: flex;
  min-height: 19.5px;
  p {
    text-transform: capitalize;
    ${FooterText};
    color: ${body};
    margin: 0;
  }
`;

const RatingNumber = styled.div`
  display: flex;
  gap: 3px;
`;

const AppInformativeSection = styled.div`
  display: flex;
  gap: 2px;
`;

const CardTop = styled.div`
  padding: 16px;
`;
const CardEnd = styled.div`
  display: none;
  background-color: ${greenlight};
  padding: 8px 16px;
  border-top: 1px solid #01011d;
  border-radius: 0 0 3px 3px;
  position: absolute;
  bottom: 0;
  width: 100%;
  p {
    ${CardTxt};
    color: ${purpledark};
    margin: 0;
  }
  ${(props) =>
    props.isBottom &&
    css`
      display: flex;
      gap: 6px;
      align-items: center;
    `}
`;

const CardListSection = styled.div`
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  ${(props) =>
    props.is4Card &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(228px, 1fr));
    `}
  @media only screen and (max-width: 449px) {
    grid-template-columns: auto;
    gap: 20px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  h2 {
    ${Heading3};
    color: ${title};
    margin: 0;
  }
  p {
    ${Body4};
    color: ${body};
    margin: 0;
  }
  @media only screen and (max-width: 449px) {
    ${Body5}
    gap:8px;
  }
`;
const Input = styled.input`
  ${Value};
  color: ${title};
  letter-spacing: 0.01em;
  padding: 11px 20px 11px 55px;
  border: 1.5px solid #bebebf;
  border-radius: 48px;
  width: 285px;
  outline: 0;
  ::placeholder {
    color: ${lightgray};
  }
  :hover {
    border: 1.5px solid #ccccd0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
  }
  :active {
    border: 1.5px solid #131313;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
  }
  :focus {
    border: 1.5px solid #131313;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InputWrap = styled.form`
  display: none;
  position: relative;
  img {
    position: absolute;
    top: 15px;
    left: 20px;
  }
  ${(props) =>
    props.isSearchbar &&
    css`
      display: block;
    `}
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  width: 234px;
  top: 22px;
  left: -6px;
  padding: 12px;
  background-color: ${greendark};
  color: ${greenlight};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  p {
    ${Body5}
    color: ${greenlight};
    margin: 0;
  }
  span {
    ${Body4}
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
  ${(props) =>
    props.isApptooltip &&
    css`
      top: 25px;
      left: -4px;
    `}
`;

const Line = styled.div`
  position: absolute;
  top: -10px;
`;

const Informative = styled.div`
  position: relative;
  display: flex;
  :hover .tooltiptext {
    visibility: visible;
  }
  .tooltiptext {
    visibility: hidden;
    z-index: 99;
  }
`;
export {
  CardSub,
  CardDescription,
  CardInfo,
  ImgView,
  DirectoryCardSection,
  CardTitle,
  RatingSection,
  RatingNumber,
  AppInformativeSection,
  CardEnd,
  CardTop,
  CardListSection,
  SectionHeader,
  SectionHeading,
  Input,
  InputWrap,
  Tooltip,
  Line,
  Informative
};
