import styled from "styled-components";
import { Body4, Heading3, Heading4 } from "../../../styles/styles";

const ModernSection = styled.div`
  padding: 100px 0 50px;
`;
const HeadView = styled.div`
  max-width: 918px;
  width: 100%;
  margin-bottom: 40px;
  h3 {
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
const ModernWrap = styled.div``;
const BoxWrap = styled.div`
  border: 1px solid #000000;
  border-radius: 4px;
  display: flex;
`;
const BoxView = styled.div`
  padding: 27px 23px;
  border-right: 1px solid #120800;
  :last-child {
    border-right: none;
  }
`;
const ImgIcon = styled.div`
  display: inline-flex;
`;
const DetailView = styled.div`
  h4 {
    ${Heading4};
    margin: 28px 0 0;
    color: ${({ theme }) => theme.colors.title};
  }
  p {
    ${Body4};
    margin: 12px 0 0;
    color: ${({ theme }) => theme.colors.body};
  }
`;

export {
  ModernSection,
  ModernWrap,
  HeadView,
  BoxWrap,
  BoxView,
  ImgIcon,
  DetailView,
};
