import styled from 'styled-components';
import { button_regular, h3_semibold } from '../../styles/typography';

const MainDiv = styled.div`
  margin: var(--space-40) 0;
  max-width: 728px;
  padding: var(--space-24) !important;
  border-radius: var(--radius-12);
  background-color: var(--gray-50);
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  @media only screen and (max-width: 991px) {
    max-width: unset;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-20);
    margin-top: var(--space-32);
  }
`;

const BlockQuoteSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  @media only screen and (max-width: 449px) {
    gap: var(--space-20);
  }
`;

const Quote = styled.h3`
  ${h3_semibold}
  color: var(--title);
  margin: 0 !important;
`;

const Icon = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-12);
  @media only screen and (max-width: 1060px) {
    align-items: flex-end;
  }
  @media only screen and (max-width: 991px) {
    align-items: center;
  }
  @media only screen and (max-width: 449px) {
    align-items: flex-end;
  }
`;

const LeftSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-11);
  @media only screen and (max-width: 1060px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
  }
  @media only screen and (max-width: 991px) {
    align-items: center;
    flex-direction: row;
    gap: var(--space-11);
  }
  @media only screen and (max-width: 449px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
  }
`;

const AuthorName = styled.p`
  /* Using &&& for higher CSS specificity to override conflicting styles */
  &&& {
    ${button_regular}
  }
  color: var(--text-secondary) !important;
  margin: 0 !important;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  background-color: var(--text-secondary);
  border-radius: 50%;
  margin: 0 !important;
  @media only screen and (max-width: 1060px) {
    display: none;
  }
  @media only screen and (max-width: 991px) {
    display: flex;
  }
  @media only screen and (max-width: 449px) {
    display: none;
  }
`;

const Role = styled.p`
  /* Using &&& for higher CSS specificity to override conflicting styles */
  &&& {
    ${button_regular}
  }
  color: var(--text-secondary) !important;
  margin: 0 !important;
`;

export { MainDiv, Icon, Quote, BlockQuoteSection, ProfileSection, LeftSection, AuthorName, Role, Dot };
