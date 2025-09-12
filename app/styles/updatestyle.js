import Link from 'next/link';
import styled from 'styled-components';
import { body_regular, h1_semibold, h4_semibold } from './typography';

const MainContent = styled.div`
  padding-top: var(--space-80);
  display: flex;
  flex-direction: column;
  gap: var(--space-80);
  @media only screen and (max-width: 991px) {
    gap: var(--space-64);
    padding-top: var(--space-64);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-48);
    padding-top: var(--space-48);
  }
`;

const UpadtePage = styled.div`
  padding: var(--space-80) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-80);
  @media only screen and (max-width: 991px) {
    padding: var(--space-64) 0;
    gap: var(--space-64);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-48) 0;
    gap: var(--space-48);
  }
`;

const UpdateSubscribe = styled.div`
  margin-bottom: var(--space-40);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-24);
  h1 {
    ${h1_semibold}
    color: var(--title);
    margin: 0px;
  }
  p {
    ${body_regular}
    color: var(--text-secondary);
    max-width: 720px;
    margin: 0;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: var(--space-20);
  }
  @media only screen and (max-width: 449px) {
    margin-bottom: var(--space-24);
  }
`;

const UpdateDes = styled.div`
  border-top: 1px solid var(--border-default);
  @media only screen and (max-width: 991px) {
    border-top: unset;
  }
`;
const Detail = styled.div`
  display: flex;
  margin: var(--space-64) 0;
  justify-content: space-between;
  gap: var(--space-64);
  @media only screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    gap: unset;
    margin: 0;
    padding: var(--space-40) 0 var(--space-40);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-24) 0 var(--space-48);
  }
`;

const PostContent = styled.div``;

const DetailSlug = styled.div`
  display: flex;
  margin: var(--space-64) 0;
  justify-content: space-between;
  @media only screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    margin: var(--space-40) 0;
  }
  @media only screen and (max-width: 449px) {
    margin: var(--space-24) 0 var(--space-48);
  }
`;

const LinkDiv = styled.div`
  margin-bottom: var(--space-40);
  @media only screen and (max-width: 991px) {
    margin-bottom: 0;
  }
`;

const UpdateDate = styled(Link)`
  position: sticky;
  top: ${(props) => props.stickyTop + 50}px;
  ${h4_semibold}
  height: 100%;
  max-width: 432px;
  width: 100%;
  color: var(--title);
  z-index: 11;
  :hover {
    color: var(--text-secondary);
  }
  @media only screen and (max-width: 991px) {
    border-bottom: 1px solid var(--border-default);
    max-width: unset;
    margin-bottom: var(--space-64);
    padding: var(--space-24) 0;
    background-color: var(--off-white-300);
    top: ${(props) => props.stickyTop}px;
  }
  @media only screen and (max-width: 449px) {
    margin-bottom: var(--space-48);
  }
`;
const UpdateDetail = styled.div`
  max-width: 768px;
  width: 100%;
`;
const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-12);
  max-width: 728px;
  margin-left: auto;
  @media only screen and (max-width: 991px) {
    justify-content: center;
  }
`;

export {
  UpadtePage,
  UpdateSubscribe,
  UpdateDes,
  Detail,
  UpdateDate,
  UpdateDetail,
  DetailSlug,
  Pagination,
  LinkDiv,
  PostContent,
  MainContent
};
