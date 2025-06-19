import styled from 'styled-components';
import { Body2, Body5, Heading2, Heading4, MbBody2, MobileH2, MobileH3, Value } from '../../styles/styles';

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
  color: var(--title);
  margin: 0;
  @media (max-width: 479px) {
    ${MobileH2}
  }
`;
const HeroBody = styled.p`
  ${Body2}
  text-align:center;
  color: var(--body);
  margin: 20px 0 0;
  @media (max-width: 479px) {
    ${MbBody2}
  }
`;
const Search = styled.div`
  position: sticky;
  top: 82px;
  background: linear-gradient(180deg, var(--main-bg-color) 11.98%, var(--transparent-color) 100%);
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
  color: var(--title);
  letter-spacing: 0.01em;
  padding: 11px 20px 11px 55px;
  border: 1.5px solid var(--border);
  border-radius: 48px;
  width: 100%;
  outline: 0;
  ::placeholder {
    color: var(--medium-gray);
  }
  :hover {
    border: 1.5px solid var(--border);
    box-shadow: 0px 4px 8px var(--black-shadow-7);
  }
  :active {
    border: 1.5px solid var(--title);
    box-shadow: 0px 4px 8px var(--black-shadow-7);
  }
  :focus {
    border: 1.5px solid var(--title);
    box-shadow: 0px 4px 8px var(--black-shadow-7);
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
  color: var(--title);
  margin: 0;
  text-transform: capitalize;
  @media (max-width: 768px) {
    ${MobileH3}
  }
`;
const SearchList = styled.p`
  ${Body5}
  color: var(--primary);
  padding: 16px 0px;
  margin: 0;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  :first-child {
    padding: 0 0 16px;
  }
  :hover {
    color: var(--title);
  }
  a {
    color: var(--primary);
    :hover {
      color: var(--title);
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
