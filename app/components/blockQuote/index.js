'use client';

import React from 'react';
import { AuthorName, BlockQuoteSection, Dot, Icon, LeftSection, MainDiv, ProfileSection, Quote, Role } from './style';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { isEmpty } from '../../helpers/helpers';

/**
 * Renders a styled block quote with opening/closing quote icons and
 *
 * @param {Object} props - Component props
 * @param {string} props.quote - The quotation text to display
 * @param {string} props.author - The name of the person quoted
 * @param {string} props.role - The role/title of the person quoted
 * @returns {JSX.Element} - The rendered BlockQuote component
 */
export default function BlockQuote({ quote, author, role }) {
  const showDot = !isEmpty(author) && !isEmpty(role);
  return (
    <>
      <MainDiv>
        <Icon>
          <SVGComponent name='block-quote-icon-up' width='42' height='42' viewBox='0 0 42 42' />
        </Icon>
        <BlockQuoteSection>
          <Quote>{quote}</Quote>
          <ProfileSection>
            {(!isEmpty(author) || !isEmpty(role)) && (
              <LeftSection>
                {!isEmpty(author) && <AuthorName>{author}</AuthorName>}
                {showDot && <Dot />}
                {!isEmpty(role) && <Role>{role}</Role>}
              </LeftSection>
            )}
            <Icon>
              <SVGComponent name='block-quote-icon-down' width='42' height='42' viewBox='0 0 42 42' />
            </Icon>
          </ProfileSection>
        </BlockQuoteSection>
      </MainDiv>
    </>
  );
}
