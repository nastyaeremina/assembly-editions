import styled from 'styled-components';
import { Heading3 } from '../../styles/styles';

const Content = styled.div`
  border: 1px solid var(--white);
  border-radius: 4px;
  display: flex;
`;
const TextSection = styled.div`
  padding: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;
const ImageSection = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Title = styled.div`
  p {
    ${Heading3};
    color: var(--white);
    margin: 0;
  }
`;
const ButtonSection = styled.div`
  margin-top: 28px;
  display: flex;
  gap: 20px;
  @media only screen and (max-width: 449px) {
    flex-wrap: wrap;
    gap: 12px;
  }
  @media only screen and (max-width: 375px) {
    gap: 6px;
  }
`;
const Image = styled.img`
  max-width: 612px;
  width: 100%;
`;
const CtaAnimation = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    max-height: 464px;
    height: 100%;
  }
`;
const CtaWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
`;
export { Content, TextSection, ImageSection, Title, ButtonSection, Image, CtaAnimation, CtaWrap };
