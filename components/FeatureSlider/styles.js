import styled from 'styled-components';
import Link from 'next/link';
import { Body1, Body2, Body4, Body5, MbBody2 } from '../../styles/styles';

const SliderWrap = styled.div`
  overflow: hidden;
  position: relative;
`;
const SliderInner = styled(Link)`
  border: 1px solid #00160e;
  border-radius: 4px;
  /* margin: 0 40px; */
  cursor: pointer;
  position: relative;
  z-index: 9999;
  margin: 0 18px;
  background-color: #fff;
  transition: border-color 0.3s, box-shadow 0.3s;
  :hover {
    border: 1.5px solid #00160e;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  }
`;
const SliderSub = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #00160e;
  gap: 4px;
  h4 {
    ${Body2}
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
    @media only screen and (max-width: 426px) {
      ${MbBody2}
    }
  }
  p {
    ${Body4}
    color: ${({ theme }) => theme.colors.body};
    margin: 0;
    @media only screen and (max-width: 426px) {
      ${Body5}
    }
  }
`;
const SliderLine = styled.div`
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 50%, transparent 0),
    linear-gradient(90deg, rgba(0, 0, 0, 1) 50%, transparent 0),
    linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, transparent 0),
    linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, transparent 0);
  background-position: 0 0, 200px 100px, 0 100px, 200px 0;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 10px 4px, 10px 10px, 10px 14px, 10px 14px;
  bottom: 0;
  height: 1px;
  left: 5px;
  position: absolute;
  right: 5px;
  bottom: 63px;
`;
const SliderIcon = styled.div`
  display: flex;
  gap: 10px;
  padding: 11px 18px;
`;
export { SliderWrap, SliderInner, SliderSub, SliderLine, SliderIcon };
