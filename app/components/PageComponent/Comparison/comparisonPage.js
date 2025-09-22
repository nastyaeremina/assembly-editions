'use client';

import { useMemo } from 'react';
import { Container } from '../../../styles/commonStyles';
import { isEmpty } from '../../../helpers/helpers';
import Cardsection from '../../comparison/cardsection/cardsection';
import StandardHero from '../../standardHero/standardHero';
import { HeroTypes } from '../../../constants/constant';
import { DetailSection, MainWrap } from './styles';
import NewCTA from '../../cta/newCTA';

export default function ComparisonPage({ featuredCompetitorList, details }) {
  const renderComparisonListView = useMemo(() => {
    if (isEmpty(featuredCompetitorList)) return null;
    return featuredCompetitorList.map(
      (item) =>
        !isEmpty(item.items) && (
          <Cardsection
            key={item.category}
            data={item.items}
            title={item.category}
            description={`Compare ${item.category} alternatives to Assembly.`}
          />
        )
    );
  }, [featuredCompetitorList]);

  return (
    <>
      <MainWrap>
        <StandardHero
          type={HeroTypes.CENTER}
          data={{
            heroTitle: details?.title,
            heroDescription: details?.description
          }}
        />
        <Container>
          <DetailSection>{renderComparisonListView}</DetailSection>
        </Container>
        {!isEmpty(details.ctaSection) && (
          <NewCTA
            title={details.ctaSection.title}
            description={details.ctaSection.description}
            primaryButtonText={details.ctaSection.primaryButtonText}
            primaryButtonLink={details.ctaSection.primaryButtonLink}
            secondaryButtonText={details.ctaSection.secondaryButtonText}
            secondaryButtonLink={details.ctaSection.secondaryButtonLink}
            banner={details.ctaSection.banner?.url}
          />
        )}
      </MainWrap>
    </>
  );
}
