import styled from 'styled-components';
import { Heading2 } from './styles';

const MsgHeroSection = styled.div`
  background-color: ${({ theme }) => theme.colors.browndark};
  text-align: center;
  .gap {
    gap: 52px;
    padding: 235px 0;
  }
  .msgheropadding {
    padding: 227px 0 178px 0;
  }
  .filepadding {
    padding: 266px 0 206px 0;
    gap: 55px;
  }
  .billpadding {
    padding: 264px 0 206px 0;
  }
`;
const KnowledgeHero = styled.div`
  background-color: ${({ theme }) => theme.colors.orangedark};
  text-align: center;
  .knowtxt {
    color: ${({ theme }) => theme.colors.title};
  }
  .basecolor {
    color: ${({ theme }) => theme.colors.brownlight};
  }
`;
const ContractHero = styled.div`
  background-color: ${({ theme }) => theme.colors.magentadark};
  text-align: center;
  .contractgap {
    gap: 14px;
  }
  .txtcolor {
    color: ${({ theme }) => theme.colors.magentalight};
  }
`;
const FormMain = styled.div`
  background-color: ${({ theme }) => theme.colors.yellowdark};
  text-align: center;
  padding: 235px 0;
  .formtext {
    color: ${({ theme }) => theme.colors.yellowlight};
  }
  .gap {
    gap: 50px;
  }
`;
const BillMain = styled.div`
  background-color: ${({ theme }) => theme.colors.bluedark};
  text-align: center;
  padding: 264px 0 206px 0;
  .headingcolor {
    color: ${({ theme }) => theme.colors.bluelight};
  }
`;
const FileMain = styled.div`
  background-color: ${({ theme }) => theme.colors.purpledark};
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
    color: ${({ theme }) => theme.colors.brownlight};
    display: flex;
    align-items: center;
    margin: 0;
  }
`;
const HeroSub = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .filetext {
    color: ${({ theme }) => theme.colors.purplelight};
  }
  .fileimage {
    position: absolute;
    right: -17px;
  }
  .messsegeimg {
    gap: 11px;
  }

  span {
    ${Heading2};
    color: ${({ theme }) => theme.colors.brownlight};
    display: flex;
    align-items: center;
    margin: 0;
  }
  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.brownlight};
    /* margin:45px 0 16px 0; */
    margin: 0;
  }
  p {
    display: flex;
    ${Heading2};
    color: ${({ theme }) => theme.colors.purplemidlight};
    margin: 0;
    align-items: center;
  }
`;
const BillHeroSub = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
  .billtxt {
    color: ${({ theme }) => theme.colors.blueprimary};
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
    color: ${({ theme }) => theme.colors.brownlight};
    display: flex;
    align-items: center;
    margin: 0;
  }
  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.brownlight};
    /* margin:45px 0 16px 0; */
    margin: 0;
  }
  p {
    display: flex;
    ${Heading2};
    color: ${({ theme }) => theme.colors.purplemidlight};
    margin: 0;
    align-items: center;
  }
`;
const FormHero = styled.div`
  /* padding:90px 0 153px 0; */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;

  .formtxt {
    color: ${({ theme }) => theme.colors.yellow};
  }
  .orengecolor {
    color: ${({ theme }) => theme.colors.orangeprimary};
  }
  .formimage {
    position: absolute;
    left: -32px;
  }
  span {
    ${Heading2};
    color: ${({ theme }) => theme.colors.brownlight};
    display: flex;
    align-items: center;
    margin: 0;
  }
  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.brownlight};
    /* margin:45px 0 16px 0; */
    margin: 0;
  }
  p {
    display: flex;
    ${Heading2};
    color: ${({ theme }) => theme.colors.purplemidlight};
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
    color: ${({ theme }) => theme.colors.blueprimary};
  }
`;
const FormWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  span {
    color: ${({ theme }) => theme.colors.yellowprimary};
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
    color: ${({ theme }) => theme.colors.brownlight};
  }
  .contracttext {
    color: ${({ theme }) => theme.colors.magentadark};
  }
  .orengecolor {
    color: ${({ theme }) => theme.colors.orangeprimary};
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
    color: ${({ theme }) => theme.colors.brownlight};
    display: flex;
    align-items: center;
    margin: 0;
  }
  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.brownlight};
    /* margin:45px 0 16px 0; */
    margin: 0;
  }
`;
const ContractWrap = styled.div`
  display: flex;
  h2 {
    color: ${({ theme }) => theme.colors.magentalight};
  }
  span {
    color: ${({ theme }) => theme.colors.magentalight};
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
  MsgHeroSection,
  HeroSub,
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
  BottomFunction
};
