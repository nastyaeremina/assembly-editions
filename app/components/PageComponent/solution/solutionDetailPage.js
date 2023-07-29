'use client';

import ExploreTab from '../../../components/solution/clienttab/exploretab';
import Modern from '../../../components/solution/modern/modern';
import Quote from '../../../components/solution/quote/quote';
import SolutionHero from '../../../components/solution/solutionhero/solutionhero';
import { isEmpty, removeEmptyElement } from '../../../helpers/helpers';
import { MainWrap } from '../../../components/solution/clienttab/styles';

export default function SolutionPage({ details }) {
  return (
    <>
      <MainWrap>
        <SolutionHero
          title={details?.header}
          description={details?.body}
          mobileImage={details?.imageForeground?.url}
          webImage={details?.imageBackground?.url}
        />
        {!isEmpty(details?.solutionValueCollection?.items) && (
          <Modern data={details?.solutionValueCollection?.items} title={details?.sectionTitle} />
        )}
        {!isEmpty(details?.clientExperienceCollection?.items) && (
          <ExploreTab
            data={removeEmptyElement(details?.clientExperienceCollection?.items)}
            demoUrl={details?.demoPortalUrl}
          />
        )}
        {!isEmpty(details?.testimonial) && <Quote data={details?.testimonial} />}
      </MainWrap>
    </>
  );
}
