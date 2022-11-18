import styled from "styled-components";
import { Body2, Body4, Body5, Heading2, Heading4, Heading5, LinkTxt, Value } from "./styles";
const UniversitySection = styled.div`
padding-top:80px;
`;
const UniversityHero = styled.div`
padding: 100px 0 50px 0;
text-align: center;
max-width: 780px;
margin:0 auto;
h2{
    ${Heading2};
    color: ${({ theme }) => theme.colors.title};
margin: 0 0 20px 0;
}
p{
    color: ${({ theme }) => theme.colors.body};
margin:0;
${Body2};
}
`;
const FeatureWrap = styled.div`
display: flex;
  gap: 36px;
`;
const FeatureLeft = styled.div`
  position: relative;
`;
const LeftWrap = styled.div`
  position: sticky;
  top: 95px;
`;
const InputWrap = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 18px;
    left: 20px;
  }
`;
const Input = styled.input`
  ${Value};
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: 0.01em;
  padding: 12px 80px 12px 56px;
  border: 1px solid #CCCCD0;
  border-radius: 48px;
  width: 306px;
  outline: 0;
  ::placeholder {
    color: ${({ theme }) => theme.colors.lightgray};
  }
`;
const Catagory = styled.ul`
  padding-top: 50px;
.active{
    color: ${({ theme }) => theme.colors.title};

}
  h4 {
    padding-bottom: 20px;
    margin: 0;
    ${Heading5};
    color: ${({ theme }) => theme.colors.title};
    border-bottom: 1px solid #000000;
    letter-spacing: 0.02em;
    max-width: 306px;
    width: 100%;
  }
`;
const Catagoryitem = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid #000000;
  a {
    ${LinkTxt};
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
    :hover {
      color: ${({ theme }) => theme.colors.title};
    }
    :active {
      color: ${({ theme }) => theme.colors.title};
    }
  }
`;
const FeatureRight = styled.div`
  h3 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 28px 0;
  }
`;
const Featured = styled.div``;
const FeatureMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 36px;
  row-gap: 28px;
`;
const FeatureCard = styled.div`
border-radius: 4px;
`;
const ExtensionsSection = styled.div`
  padding-top: 40px;
  p {
    ${Body5};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
    letter-spacing: 0.02em;
  }
`;
export {
    UniversitySection,
    UniversityHero,
    FeatureWrap,
    FeatureLeft,
    LeftWrap,
    InputWrap,
    Input,
    Catagory,
    Catagoryitem,
    FeatureRight,
    Featured,
    FeatureMenu,
    FeatureCard,
    ExtensionsSection
};
