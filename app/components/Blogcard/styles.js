import styled from 'styled-components';
import { MbButtonText } from '../../styles/styles';
import { greenlight, title } from '../../styles/color';

const BlogDetail = styled.div`
  display: flex;
  max-width: 880px;
  width: 100%;
  cursor: pointer;
  margin: auto;
  margin-top: 28px;
  margin-bottom: 28px;
  border: 1px solid #01011d;
  border-radius: 4px;
  overflow: hidden;
  @media only screen and (max-width: 749px) {
    flex-wrap: wrap;
  }
  :hover {
    h2 {
      color: ${title};
    }
    .image {
      transform: scale(1.1);
      transition: transform 0.2s;
    }
  }
`;
const Leftside = styled.div`
  display: inline-flex;
  align-items: stretch;
  border-right: 1px solid #01011d;
  padding: 0;
  margin: 0;
  overflow: hidden;
  width: 360px;
  .image {
    object-fit: cover;
    border-radius: 3px 0px 0px 3px;
    @media only screen and (max-width: 749px) {
      border-right: none;
      display: flex;
      border-radius: 3px 3px 0px 0px;
      width: 100%;
      height: 250px;
    }
  }
  @media only screen and (max-width: 749px) {
    border-right: none;
    display: flex;
    width: 100%;
  }
`;
const Rightside = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;
const Bottom = styled.div`
  ${MbButtonText}
  background-color: ${greenlight};
  padding: 8px 25px;
  /* margin-top:30px; */
  border-top: 1px solid #01011d;
  border-bottom-right-radius: 3px;
  @media only screen and (max-width: 749px) {
    border-bottom-left-radius: 3px;
    padding: 8px 16px;
  }
  span {
    margin-right: 10px;
  }
`;
export { BlogDetail, Leftside, Rightside, Bottom };
