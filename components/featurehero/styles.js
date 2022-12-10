import styled from 'styled-components';
import { Body2, Heading2 } from '../../styles/styles';
const FeatureHeroSection = styled.div`
  background-color: ${({ theme }) => theme.colors.browndark};
  padding-top: 140px;
`;
const HeroBlock = styled.div`
  display: flex;
  gap: 60px;
  @media only screen and (max-width: 769px) {
    flex-wrap: wrap;
  }
`;
const BlockLeft = styled.div`
  max-width: 552px;
  p {
    color: ${({ theme }) => theme.colors.brownlight};
    ${Body2};
    margin: 0 0 32px 0;
  }
  h2 {
    margin: 41px 0 20px 0;
    color: ${({ theme }) => theme.colors.brownlight};
    ${Heading2}
  }
`;
const BlockRight = styled.div`
  margin: 45px 0 100px 0;
`;

const BlockLine = styled.div`
  margin-bottom: 28px;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    border-top: 1px solid #f4d8c4;
    max-width: 100%;
    width: 100%;
    top: 50%;
    left: -100%;
  }
`;
const BLockImg = styled.div`
  position: relative;
  padding: 20px;
  border: 1px solid #f4d8c4;
  border-radius: 10px;
  cursor: pointer;
  ::after {
    content: '';
    position: absolute;
    border-top: 1px solid #f4d8c4;
    max-width: 100%;
    width: 100%;
    top: 50%;
    left: 100%;
    @media only screen and (max-width: 1024px) {
      max-width: 100%;
      width: 100%;
    }
  }
  .icon {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
`;
const BlockImage = styled.div`
  display: inline-block;
  width: 100%;
  position: relative;
  padding: 8px 10px;
  width: 64px;
  height: 60px;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 10px;
    border-top: 1px solid #f4d8c4;
    border-left: 1px solid #f4d8c4;
    border-bottom: 1px solid #f4d8c4;
    border-radius: 4px 0px 0 4px;
  }
  ::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 10px;
    border-top: 1px solid #f4d8c4;
    border-right: 1px solid #f4d8c4;
    border-bottom: 1px solid #f4d8c4;
    border-radius: 0px 4px 4px 0px;
  }
  img {
    max-width: 44px;
    width: 100%;
    max-height: 44px;
    height: 100%;
  }
`;
export { FeatureHeroSection, HeroBlock, BlockLeft, BlockRight, BlockImage, BlockLine, BLockImg };
