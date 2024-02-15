import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { isEmpty } from '../../helpers/helpers';
import { GuideCard, PopularBody, ArticleCardSection, PopularHeading, SectionHead } from './styles';
import GuideArticleCard from './guideArticleCard';

/**
 * GuideCardSection Component
 * @param {string} title - The title of the card section.
 * @param {string} description - The description of the card section.
 * @param {Array} articleData - An array of objects containing data for individual guide articles.
 * @param {boolean} isLargeCard - A boolean indicating whether the card should be large or not. Default is false.
 * @returns {JSX.Element} - Returns the JSX representation of the GuideCardSection component.
 */
export default function GuideCardSection({ title, description, articleData, isLargeCard = false }) {
  const shouldShowTitle = !isEmpty(title);
  const shouldShowHeroSection = !isEmpty(description);

  const renderArticleData = useMemo(() => {
    return articleData?.map((item, index) => {
      return (
        <GuideArticleCard
          href={`/guide/${item?.slug}`}
          iconCode={item?.iconCode}
          title={item?.name}
          caption={item?.header}
          key={`${index}_${item.slug}`}
          isLargeCard={isLargeCard}
        />
      );
    });
  }, [articleData, isLargeCard]);
  return (
    <>
      <ArticleCardSection>
        {(shouldShowTitle || shouldShowHeroSection) && (
          <SectionHead>
            {shouldShowTitle && <PopularHeading>{title}</PopularHeading>}
            {shouldShowHeroSection && (
              <PopularBody>
                <ReactMarkdown>{description}</ReactMarkdown>
              </PopularBody>
            )}
          </SectionHead>
        )}
        <GuideCard>{renderArticleData}</GuideCard>
      </ArticleCardSection>
    </>
  );
}
