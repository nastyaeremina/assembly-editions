import Link from 'next/link';
import styled from 'styled-components';
import { button_regular } from '../../styles/typography';

const SliderWrap = styled.div`
  overflow: hidden;
  position: relative;
`;
const SliderInner = styled(Link)`
  padding: 11px 20px 11px 15px;
  border: 1px solid var(--black);
  border-radius: 4px;
  background-color: var(--white);
  margin: 0 40px;
  cursor: pointer;
  position: relative;
  z-index: 9999;
  height: 59px;
`;
const SliderSub = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  p {
    ${button_regular};
    margin: 0;
    color: var(--title);
  }
`;
const SliderLine = styled.div`
  background: linear-gradient(90deg, var(--black-shadow-100) 50%, transparent 0),
    linear-gradient(90deg, var(--black-shadow-100) 50%, transparent 0),
    linear-gradient(0deg, var(--black-shadow-100) 50%, transparent 0),
    linear-gradient(0deg, var(--black-shadow-100) 50%, transparent 0);
  background-position: 0 0, 200px 100px, 0 100px, 200px 0;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 10px 4px, 10px 10px, 10px 14px, 10px 14px;
  bottom: 0;
  height: 1px;
  left: 5px;
  margin: auto;
  position: absolute;
  right: 5px;
  top: 0;
`;

export { SliderWrap, SliderInner, SliderSub, SliderLine };
