import styled from 'styled-components';
import { Heading2 } from './styles';
import { bluedark, bluelight, blueprimary, brownlight, magentadark, magentalight, orangedark, orangeprimary, purpledark, purplemidlight, title, yellow, yellowdark, yellowlight } from './color';

const KnowledgeHero = styled.div`
  background-color: ${orangedark};
  text-align: center;
  .knowtxt {
    color: ${title};
  }
  .basecolor {
    color: ${brownlight};
  }
`;
const ContractHero = styled.div`
  background-color: ${magentadark};
  text-align: center;
  .contractgap {
    gap: 14px;
  }
  .txtcolor {
    color: ${magentalight};
  }
`;
const FormMain = styled.div`
  background-color: ${yellowdark};
  text-align: center;
  padding: 235px 0;
  .formtext {
    color: ${yellowlight};
  }
  .gap {
    gap: 50px;
  }
`;
const BillMain = styled.div`
  background-color: ${bluedark};
  text-align: center;
  padding: 264px 0 206px 0;
  .headingcolor {
    color: ${bluelight};
  }
`;
const FileMain = styled.div`
  background-color: ${purpledark};
  text-align: center;
  padding: 266px 0 206px 0;
  .filepadding {
    gap: 55px;
  }
`;
const MessegeItem = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  span {
    ${Heading2};
    color: ${brownlight};
    display: flex;
    align-items: center;
    margin: 0;
  }
`;
const BillHeroSub = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
  .billtxt {
    color: ${blueprimary};
  }
  .billimage {
    position: absolute;
    left: -15px;
  }

  .knowimage {
    position: absolute;
  }
  span {
    ${Heading2};
    color: ${brownlight};
    display: flex;
    align-items: center;
    margin: 0;
  }
  h2 {
    ${Heading2};
    color: ${brownlight};
    /* margin:45px 0 16px 0; */
    margin: 0;
  }
  p {
    display: flex;
    ${Heading2};
    color: ${purplemidlight};
    margin: 0;
    align-items: center;
  }
`;
const FormHero = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;

  .formtxt {
    color: ${yellow};
  }
  .orengecolor {
    color: ${orangeprimary};
  }
  .formimage {
    position: absolute;
    left: -32px;
  }
  span {
    ${Heading2};
    color: ${brownlight};
    display: flex;
    align-items: center;
    margin: 0;
  }
  h2 {
    ${Heading2};
    color: ${brownlight};
    margin: 0;
  }
  p {
    display: flex;
    ${Heading2};
    color: ${purplemidlight};
    margin: 0;
    align-items: center;
  }
`;
const HeroTop = styled.div`
  width: 147px;
  height: 17px;
  background: #f4d8c4;
  border-radius: 8px 8px 8px 0px;
  margin: 0 auto;
`;
const BillWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;

  span {
    color: ${blueprimary};
  }
`;
const FormWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  span {
    color: ${yellow};
  }
`;
const FileWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const KnowHero = styled.div`
  padding: 235px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;
  h2 {
    color: ${brownlight};
  }
  .contracttext {
    color: ${magentadark};
  }
  .orengecolor {
    color: ${orangeprimary};
  }
  .knowimage {
    position: absolute;
    left: 92px;
    margin-bottom: 15px;
  }
  .contractimg {
    position: absolute;
    right: -110px;
  }
  span {
    ${Heading2};
    color: ${brownlight};
    display: flex;
    align-items: center;
    margin: 0;
  }
  h2 {
    ${Heading2};
    color: ${brownlight};
    margin: 0;
  }
`;
const ContractWrap = styled.div`
  display: flex;
  h2 {
    color: ${magentalight};
  }
  span {
    color: ${magentalight};
  }
`;
const ImageWrap = styled.div`
  position: absolute;
  left: -5.3px;
  top: 12px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const BottomFunction = styled.div``;

export {
  HeroTop,
  MessegeItem,
  BillHeroSub,
  BillWrap,
  FormWrap,
  FormHero,
  FileWrap,
  KnowHero,
  ContractHero,
  ContractWrap,
  KnowledgeHero,
  FormMain,
  BillMain,
  FileMain,
  ImageWrap,
  BottomFunction,
};
