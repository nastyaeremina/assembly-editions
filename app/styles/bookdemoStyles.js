import styled from 'styled-components';
import { body_regular, button_regular, h4_regular } from './typography';

const BookSection = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 var(--space-64);
  @media only screen and (max-width: 991px) {
    padding: 0 0 var(--space-40);
    flex-direction: column;
  }
  @media only screen and (max-width: 449px) {
    padding: 0 0 var(--space-48);
  }
`;
const ImageSection = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
`;

const ImageDiv = styled.div`
  display: flex;
  height: 100%;
  .img {
    width: 100%;
    height: 100%;
    border-radius: var(--space-16);
    object-fit: cover;
    max-height: 930px;
  }
`;
const DemoContain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px;
  p {
    ${h4_regular};
    color: var(--title);
    margin: 0;
  }
`;
const BottomName = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-12);
  padding-top: var(--space-20);

  p {
    ${button_regular};
    color: var(--title);
    margin: 0;
  }
`;
const PropertyDiv = styled.div`
  padding: var(--space-24);
  border-bottom: 1px solid var(--off-white-100);
  display: flex;
  align-items: center;
  gap: var(--space-12);
`;
const SectionWrapper = styled.div`
  display: flex;
  gap: var(--space-96);
  width: 100%;
`;

const ImageSectionWrapper = styled.div`
  max-width: 648px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;
const DotIcon = styled.div`
  width: 3px;
  height: 3px;
  border-radius: var(--radius-30);
  background-color: var(--title);
  margin-top: var(--space-10);
`;

const TextBox = styled.div`
  border-radius: var(--radius-12);
  border: 1px solid var(--off-white-100);
  background: var(--off-white-100-with-30-opacity);
  position: absolute;
  bottom: var(--space-24);
  left: var(--space-24);
  right: var(--space-24);
`;
const LeftSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-13);
  p {
    ${body_regular}
    margin: 0;
    color: var(--title);
  }
`;
const DotIconLarge = styled.div`
  width: 4px;
  height: 4px;
  border-radius: var(--radius-30);
  background-color: var(--title);
  margin-top: var(--space-12);
`;

const LogoSection = styled.div`
  display: flex;
  margin-left: var(--space-6);
`;

const LogoDiv = styled.div`
  display: flex;
  margin-left: -6px;
`;

const MainBlockWrapper = styled.div`
  padding: var(--space-80) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-64) 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-64) 0 var(--space-48);
  }
`;
export {
  BookSection,
  ImageSection,
  DemoContain,
  BottomName,
  PropertyDiv,
  SectionWrapper,
  ImageSectionWrapper,
  ImageDiv,
  DotIcon,
  TextBox,
  DotIconLarge,
  LeftSection,
  LogoSection,
  LogoDiv,
  MainBlockWrapper
};
