'use client';

import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  ComparisonTable,
  G2criteria,
  G2group,
  G2progressbar,
  G2section,
  G2text,
  Processdata,
  ProgressBar
} from '../../../components/comparison/styles';
import { Container } from '../../../styles/commonStyles';
import FAQ from '../../../components/faq/faq';
import { isEmpty } from '../../../helpers/helpers';
import ComparisonDetailsHero from '../../comparison/comparisonhero/comparisondetailshero';
import ComparisonTableView from '../../../components/comparison/comparisonTable';
import NewCTA from '../../cta/newCTA';
import ButtonV2Component from '../../button/buttonV2/buttonV2';

export default function ComparisonDetailPage({ details, faqList }) {
  const g2ComparisonGroupView = useMemo(() => {
    if (isEmpty(details?.g2GroupCollection?.items)) return null;
    return details?.g2GroupCollection?.items?.map((item, index) => {
      return (
        <G2text key={`g2groupcollection_${index}`}>
          <h3>{item?.name}</h3>
          <G2progressbar>
            <Processdata>
              <ProgressBar width={item?.copilotValue * 10} color='var(--assembly-blue)'>
                <div className='progress-number-div'>
                  <span className='item-title'>Assembly</span>
                  <span>{item?.copilotValue.toFixed(1)}</span>
                </div>
              </ProgressBar>
            </Processdata>
            <Processdata>
              <ProgressBar width={item?.partnerValue * 10} color='var(--gray-50)'>
                <div className='progress-number-div'>
                  <span className='item-title'>{details.compititorName}</span>
                  <span className='seconddata'>{item?.partnerValue.toFixed(1)}</span>
                </div>
              </ProgressBar>
            </Processdata>
          </G2progressbar>
        </G2text>
      );
    });
  }, [details.compititorName, details?.g2GroupCollection?.items]);

  return (
    <div className='component-wrapper'>
      <ComparisonDetailsHero
        title={details?.name}
        description={details?.description}
        image={details?.image?.url}
        primaryButtonText={details?.primaryButtonText}
        primaryButtonLink={details?.primaryButtonLink}
        secondaryButtonText={details?.secondaryButtonText}
        secondaryButtonLink={details?.secondaryButtonLink}
        headerTag={details?.headerTag}
        competitorValue={details.competitorValue}
        copilotValue={details.copilotValue}
        comparisonTag={details.comparisonTag}
        compititorName={details.compititorName}
        competitorLogo={details.smallLogo?.url}
      />
      {!isEmpty(details?.g2GroupCollection?.items) && (
        <Container>
          <G2section>
            {!isEmpty(details.g2SectionTitle) && <h2>{details.g2SectionTitle}</h2>}
            {!isEmpty(details.g2SectionDescription) && <ReactMarkdown>{details.g2SectionDescription}</ReactMarkdown>}
            <G2group>
              <ButtonV2Component
                title='Read full report'
                href={details?.g2ComparisonLink}
                target='_blank'
                className='button'
              />
            </G2group>
            <G2criteria>{g2ComparisonGroupView}</G2criteria>
          </G2section>
        </Container>
      )}
      <Container>
        <ComparisonTable>
          {!isEmpty(details?.section2Header) && <h2>{details?.section2Header}</h2>}
          <ComparisonTableView details={details.featuresCollection?.items} competitorLogo={details.logo.url} />
        </ComparisonTable>
      </Container>
      <FAQ faqList={faqList} />
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
    </div>
  );
}
