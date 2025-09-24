import styled from 'styled-components';
import { body_regular, button_regular, h3_regular } from '../../styles/typography';

const Search = styled.div`
  position: sticky;
  top: ${(props) => props.topValue + 1}px;
  background-color: var(--off-white-300);
  z-index: 1;
  padding: var(--space-24) 0 var(--space-12);
  max-width: 812px;
  width: 100%;
  margin: 0 auto;
`;
const InputWrap = styled.form`
  position: relative;
  .close-icon {
    position: absolute;
    top: 19px;
    right: var(--space-20);
    cursor: pointer;
    display: flex;
  }
`;

const Input = styled.input`
  ${button_regular};
  color: var(--title);
  padding: var(--space-16) var(--space-12) var(--space-12) var(--space-48);
  border: 1px solid var(--border-default);
  background-color: var(--off-white-300);
  border-radius: var(--radius-30);
  width: 100%;
  outline: 0;
  ::placeholder {
    color: var(--gray-200);
  }
  &:hover {
    border: 1px solid var(--border-hover);
  }
  body.using-mouse &:focus {
    border-color: var(--title);
    outline: none;
  }

  /* keyboard (Tab) focus */
  body.using-keyboard &:focus-visible {
    outline: 2px solid var(--link-default);
    outline-offset: 1px;
    border-radius: var(--radius-30);
  }
`;
const GlossarySearchSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-20);
  position: relative;
`;
const SearchDataSection = styled.div`
  max-width: 812px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
`;
const StartAlphabet = styled.h3`
  ${h3_regular}
  color: var(--title);
  margin: 0;
  text-transform: capitalize;
`;
const SearchList = styled.p`
  ${body_regular}
  padding: var(--space-16) 0px;
  margin: 0;
  border-bottom: 1px solid var(--border-default);
  cursor: pointer;
  a {
    padding-top: var(--space-2);
  }
`;
const SearchListData = styled.div``;

const SectionWrapper = styled.div`
  padding: var(--space-40) 0 var(--space-64);
  @media only screen and (max-width: 991px) {
    padding: var(--space-16) 0 var(--space-40);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-24) 0 var(--space-48);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 17px;
  left: var(--space-20);
  display: flex;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
`;

export {
  InputWrap,
  Input,
  GlossarySearchSection,
  SearchDataSection,
  StartAlphabet,
  SearchList,
  SearchListData,
  Search,
  SectionWrapper,
  SearchIcon,
  ItemWrapper
};
