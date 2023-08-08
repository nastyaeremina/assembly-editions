import styled from 'styled-components';
import { Body2, Body5, Heading2, Heading4, MbBody2, MobileH2, MobileH3, Value } from '../../styles/styles';
import { body, lightgray, primary, title } from '../../styles/color';

const HeroSection = styled.div`
  padding-top: 180px;
  padding-bottom: 40px;
  max-width: 611px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 449px) {
    padding-top: 116px;
  }
`;
const HeroTitle = styled.h1`
  ${Heading2}
  text-align:center;
  color: ${title};
  margin: 0;
  @media (max-width: 479px) {
    ${MobileH2}
  }
`;
const HeroBody = styled.p`
  ${Body2}
  text-align:center;
  color: ${body};
  margin: 20px 0 0;
  @media (max-width: 479px) {
    ${MbBody2}
  }
`;
const Search = styled.div`
  position: sticky;
  top: 82px;
  padding-top: 20px;
  background: linear-gradient(180deg, #fffffd 11.98%, rgba(255, 255, 253, 0) 100%);
  backdrop-filter: blur(12px);
  @media (max-width: 449px) {
    top: 77px;
  }
`;
const InputWrap = styled.form`
  max-width: 612px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  img {
    position: absolute;
    top: 15px;
    left: 20px;
  }
`;

const Input = styled.input`
  ${Value};
  color: ${title};
  letter-spacing: 0.01em;
  padding: 11px 20px 11px 55px;
  border: 1.5px solid #ccccd0;
  border-radius: 48px;
  width: 100%;
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
`;
const GlossarySearchSection = styled.div`
  /* max-width: 612px;
  width: 100%;
  margin: 0 auto; */
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 449px) {
    gap: 28px;
  }
`;
const SearchDataSection = styled.div`
  max-width: 612px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StartAlphabet = styled.h2`
  ${Heading4}
  color: ${title};
  margin: 0;
  text-transform: capitalize;
  @media (max-width: 768px) {
    ${MobileH3}
  }
`;
const SearchList = styled.p`
  ${Body5}
  color: ${primary};
  padding: 16px 0px;
  margin: 0;
  border-bottom: 1px solid #ccccd0;
  cursor: pointer;
  :first-child {
    padding: 0 0 16px;
  }
  :hover {
    color: ${title};
  }
  a {
    color: ${primary};
    :hover {
      color: ${title};
    }
  }
`;
const SearchListData = styled.div``;
export {
  HeroSection,
  HeroTitle,
  HeroBody,
  InputWrap,
  Input,
  GlossarySearchSection,
  SearchDataSection,
  StartAlphabet,
  SearchList,
  SearchListData,
  Search
};
