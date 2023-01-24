import styled from "styled-components";
import { HeaderFont, Heading3, LinkTxt } from "../../styles/styles";

const Backlink = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 28px;
  p {
  ${LinkTxt};
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.lightgray};
  }
  @media only screen and (max-width: 769px) {
    p {
      ${HeaderFont}
    }
  }
`;

const DetailHero = styled.div`
padding: 100px 0;
  h3 {
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
  }
  @media only screen and (max-width: 769px) {
    padding-bottom: 28px;
  }
`;

export { Backlink, DetailHero }