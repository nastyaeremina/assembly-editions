'use client';

import { styled } from '@mui/material/styles';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ReactMarkdown from 'react-markdown';
import {
  ComparisonTable,
  G2criteria,
  G2group,
  G2progressbar,
  G2section,
  G2text,
  Groupdetail,
  Processdata,
  ButtonGroup
} from '../../../components/comparison/styles';
import { MainWrap } from '../../../components/solution/clienttab/styles';
import { Container } from '../../../styles/commonStyles';
import FAQ from '../../../components/faq/faq';
import { isEmpty } from '../../../helpers/helpers';
import Quote from '../../../components/solution/quote/quote';
import SliderButtonSection from '../../CopilotBlock/SliderButtonSection';
import ComparisonDetailsHero from '../../comparison/comparisonhero/comparisondetailshero';
import SVGComponent from '../../../../public/images/svg/SVGComponent';
import ComparisonTableView from '../../../components/comparison/comparisonTable';
import { ResponsiveButtonGroup } from '../../../styles/homepageStyles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 30,
    backgroundColor: theme.palette.mode === 'light' ? 'var(--primary)' : 'red'
  }
}));
const BorderProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 30,
    backgroundColor: theme.palette.mode === 'light' ? 'var(--border)' : 'red'
  }
}));

export default function ComparisonDetailPage({ details, faqList }) {
  const [xPos, setXpos] = useState(0);
  const g2ComparisonGroupView = useMemo(() => {
    if (isEmpty(details?.g2GroupCollection?.items)) return null;
    return details?.g2GroupCollection?.items?.map((item, index) => {
      return (
        <G2text key={`g2groupcollection_${index}`}>
          <h3>{item?.name}</h3>
          <G2progressbar>
            <Processdata>
              <div className='progress-number-div'>
                <span>{item?.copilotValue.toFixed(1)}</span>
                <span className='item-title'>Copilot</span>
              </div>
              <BorderLinearProgress variant='determinate' value={item?.copilotValue * 10} />
            </Processdata>
            <Processdata>
              <div className='progress-number-div'>
                <span className='seconddata'>{item?.partnerValue.toFixed(1)}</span>
                <span className='item-title'>{details.compititorName}</span>
              </div>
              <BorderProgress variant='determinate' value={item?.partnerValue * 10} />
            </Processdata>
          </G2progressbar>
        </G2text>
      );
    });
  }, [details.compititorName, details?.g2GroupCollection?.items]);

  const renderSliderButton = useMemo(() => {
    return (
      <SliderButtonSection
        xPos={xPos}
        setXpos={setXpos}
        noOfSlide={details?.g2GroupCollection?.items.length}
        isComparisonDetails={true}
        sliderItemWidth={428}
        padding={20}
      />
    );
  }, [details?.g2GroupCollection?.items.length, xPos]);

  return (
    <>
      <MainWrap>
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
          <div className='main-section'>
            <G2section>
              {!isEmpty(details.g2SectionTitle) && <h2>{details.g2SectionTitle}</h2>}
              {!isEmpty(details.g2SectionDescription) && <ReactMarkdown>{details.g2SectionDescription}</ReactMarkdown>}
              <G2group>
                <Groupdetail>
                  <SVGComponent name='g2-logo-icon' width='24' height='24' viewBox='0 0 24 24' />
                  <Link className='report' href={details?.g2ComparisonLink} target='_blank'>
                    <p className='report'>Read full report</p>
                  </Link>
                </Groupdetail>
                <ButtonGroup>{renderSliderButton}</ButtonGroup>
              </G2group>
              <div>
                <G2criteria style={{ transform: `translateX(${xPos}px)` }}>{g2ComparisonGroupView}</G2criteria>
                <ResponsiveButtonGroup>{renderSliderButton}</ResponsiveButtonGroup>
              </div>
            </G2section>
          </div>
        )}
        <div className='main-section'>
          <Container>
            <ComparisonTable>
              <h2>{details?.section2Header}</h2>
              <ComparisonTableView details={details.featuresCollection?.items} competitorLogo={details.logo.url} />
            </ComparisonTable>
          </Container>
        </div>
        {!isEmpty(details?.testimonial) && <Quote data={details?.testimonial} isComparison />}
        <FAQ faqList={faqList} isStandardPage={true} />
      </MainWrap>
    </>
  );
}
