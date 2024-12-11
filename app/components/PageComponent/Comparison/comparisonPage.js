'use client';

import { useMemo } from 'react';
import ComparisonHero from '../../comparison/comparisonhero/comparisonhero';
import { MainWrap } from '../../solution/clienttab/styles';
import { Container } from '../../../styles/commonStyles';
import { isEmpty } from '../../../helpers/helpers';
import Quote from '../../solution/quote/quote';
import Cardsection from '../../comparison/cardsection/cardsection';

export default function ComparisonPage({ featuredCompetitorList, details }) {
  const renderComparisonListView = useMemo(() => {
    if (isEmpty(featuredCompetitorList)) return null;
    return featuredCompetitorList.map(
      (item) => !isEmpty(item.items) && <Cardsection key={item.category} data={item.items} title={item.category} />
    );
  }, [featuredCompetitorList]);
  return (
    <>
      <MainWrap>
        <ComparisonHero title={details?.title} description={details?.description} image={details?.image?.url} />
        <Container>{renderComparisonListView}</Container>
        {!isEmpty(details?.testimonial) && <Quote data={details?.testimonial} isMasterComparison />}
      </MainWrap>
    </>
  );
}
