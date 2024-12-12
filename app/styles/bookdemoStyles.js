import styled from 'styled-components';
import { Body2, Body4, MbBody2, MbBody3, MbBody4, Quote } from './styles';

const BookSection = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  .image-section {
    width: 100%;
  }
  @media only screen and (max-width: 991px) {
    height: auto;
    flex-direction: column;
    .image-section {
      padding: 20px 24px;
    }
  }
`;
const ImageSection = styled.div`
  width: 100%;
  position: sticky;
  border-left: 1px solid var(--black);
  height: 100%;
  img {
    width: 100%;
    height: 771px;
    object-fit: cover;
    @media (max-width: 768px) {
      width: 100%;
      height: 335px;
    }
  }
  .img {
    height: 771px;
    @media (max-width: 768px) {
      height: 335px;
    }
  }
  @media (max-width: 768px) {
    border: 1px solid var(--black);
    border-radius: 4px;
    overflow: hidden;
  }
`;
const DemoContain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-top: 1px solid var(--black);
  p {
    ${Body2};
    color: var(--dark-green);
    margin: 0;
    @media (max-width: 768px) {
      ${MbBody2}
    }
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const BottomName = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 24px;
  img {
    width: 32px;
    height: 32px;
  }
  p {
    ${Body4};
    color: var(--dark-green);
    margin: 0;
    @media (max-width: 768px) {
      ${MbBody4}
    }
  }
`;
const PropertyDiv = styled.div`
  padding: 24px;
  border-top: 1px solid var(--black);
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
export { BookSection, ImageSection, DemoContain, BottomName, PropertyDiv };
