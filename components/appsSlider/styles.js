import styled from 'styled-components';

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
  bottom: 136px;
`;
export { SliderLine };
