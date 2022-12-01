import styled from "styled-components";
import { Body4, Heading2, Heading4 } from "./styles";
const MainSection = styled.div``;
const PrivacuHero = styled.div`
  background-color: ${({ theme }) => theme.colors.greendark};
  padding: 152px 0 100px 0;
  text-align: center;
  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.greenlight};
    margin: 0;
  }
`;
const PostContent = styled.div`
  padding-top: 60px;
  .mr0 {
    margin: 0;
  }
  p {
    margin: 8px 0 8px 0;
    ${Body4};
    color: ${({ theme }) => theme.colors.body};
  }
`;
const PrivacyContent = styled.div`
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
  }
`;
export { MainSection, PrivacuHero, PostContent, PrivacyContent };
