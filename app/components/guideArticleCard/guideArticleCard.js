import React, { useMemo } from 'react';
import {
  ArticaleIcon,
  CardSection,
  CenterImage,
  PopularCaption,
  PopularCard,
  PopularDetail,
  PopularImageDiv,
  PopularTitle
} from './styles';

/**
 * GuideArticleCard Component
 * @param {boolean} isLargeCard - Indicates whether the card is large or not.
 * @param {string} iconCode - HTML code for the icon.
 * @param {string} title - Title of the article card.
 * @param {string} caption - Caption of the article card.
 * @param {string} href - URL to navigate when the card is clicked.
 * @returns {JSX.Element} - Returns the JSX representation of the GuideArticleCard component.
 */
export default function GuideArticleCard({ isLargeCard = false, iconCode, title, caption, href }) {
  const renderImage = useMemo(() => {
    return <div dangerouslySetInnerHTML={{ __html: iconCode }} />;
  }, [iconCode]);

  const renderCardBody = useMemo(() => {
    return (
      <PopularDetail isLargeCard={isLargeCard}>
        <PopularTitle>{title}</PopularTitle>
        <PopularCaption>{caption}</PopularCaption>
      </PopularDetail>
    );
  }, [isLargeCard, caption, title]);
  return (
    <>
      <PopularCard href={href}>
        {isLargeCard ? (
          <>
            <PopularImageDiv>
              <CenterImage>{renderImage}</CenterImage>
            </PopularImageDiv>
            {renderCardBody}
          </>
        ) : (
          <>
            <CardSection>
              <ArticaleIcon>{renderImage}</ArticaleIcon>
              {renderCardBody}
            </CardSection>
          </>
        )}
      </PopularCard>
    </>
  );
}
