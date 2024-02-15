import styled from 'styled-components';

const MainHomePage = styled.div`
  max-width: 1008px;
  width: 100%;
  margin: 0 auto;
  padding: 90px 24px 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media only screen and (max-width: 768px) {
    padding: 40px 24px 40px;
  }
`;
export { MainHomePage };
