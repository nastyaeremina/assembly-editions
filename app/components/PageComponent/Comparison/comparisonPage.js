'use client';

import ComparisonHero from '../../comparison/comparisonhero/comparisonhero';
import { MainWrap } from '../../solution/clienttab/styles';
import { Container } from '../../../styles/commonStyles';
import { isEmpty } from '../../../helpers/helpers';
import Quote from '../../solution/quote/quote';
import Cardsection from '../../comparison/cardsection/cardsection';
import ComparisonTableView from '../../comparison/comparisonTable';

export default function ComparisonPage({ featuredCompetitorList, details, comparisonList }) {
  return (
    <>
      <MainWrap>
        <ComparisonHero title={details?.title} description={details?.description} image={details?.image?.url} />
        <Container>
          {!isEmpty(featuredCompetitorList) && <Cardsection data={featuredCompetitorList} />}
          {!isEmpty(comparisonList) && <ComparisonTableView data={comparisonList} />}
        </Container>
        {!isEmpty(details?.testimonial) && <Quote data={details?.testimonial} isMasterComparison />}
      </MainWrap>
    </>
  );
}
