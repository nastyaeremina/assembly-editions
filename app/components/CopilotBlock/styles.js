import styled from 'styled-components';
import { Body5, HeaderFont, Heading5 } from '../../styles/styles';
import { body, greendark, title } from '../../styles/color';
import Link from 'next/link';

const BlockCard = styled.div`
  min-width: 500px;
  padding: 20px;
  display: flex;
  gap: 20px;
  border: 1px solid ${greendark};
  border-radius: 5px;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
  }
  @media only screen and (max-width: 449px) {
    min-width: calc(100vw - 50px);
    margin: 0 25px;
    padding: 20px 20px 0 20px;
    flex-direction: column;
  }
`;

const BLockImage = styled.div`
  overflow: hidden;
  width: 180px;
  height: 180px;
  border-radius: 4px;
  img {
    border-radius: 4px;
  }
  @media only screen and (max-width: 449px) {
    width: calc(100vw - 92px);
    height: calc(100vw - 92px);
    img {
      width: 100%;
      height: auto;
    }
  }
`;

const BlockDescriptionTop = styled.div`
  h2 {
    ${Heading5};
    color: ${title};
    margin: 0 0 12px;
  }
  p {
    ${Body5};
    color: ${body};
    margin: 0;
  }
`;
const BlockDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 449px) {
    gap: 24px;
  }
`;

const LinkDiv = styled(Link)`
  display: flex;
  gap: 4px;
  align-items: center;
  width: 100px;
  p {
    ${HeaderFont};
    color: ${title};
    margin: 0;
  }
`;

const MainBlock = styled.div`
  transition: transform 500ms ease;
  display: flex;
  gap: 28px;
  width: 1224px;
  margin: 0 auto;
  overflow: visible;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export { BlockCard, BLockImage, BlockDescriptionTop, BlockDescription, LinkDiv, MainBlock };
