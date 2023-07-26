import styled from 'styled-components';

const Navigationbar = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 20px 108px;
  gap: 178px;
  display: flex;
  height: 80px;
  margin: auto;
  z-index: 999;
  @media only screen and (max-width: 749px) {
    padding: 16px 14px 16px 24px;
  }
`;

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 - 14px;
  /* justify-content: space-between; */
  @media only screen and(max-width: 991px) {
    flex-direction: column;
    width: 100%;
    align-items: flex - start;
  }
`;
const NavigationBlock = styled.ul`
  display: flex;
  align-items: center;
  /* margin: 0 100px; */
  white-space: nowrap;
  max-width: 820px;
  width: 100%;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    margin: 0 20px;
  }
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
`;
export { Navigationbar, NavigationList, NavigationBlock };
