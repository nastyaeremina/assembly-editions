'use client';

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container } from '../../../styles/commonStyles';
import {
  HeroSection,
  PricingSection,
  PriceMenu,
  PriceButton,
  WrapSlide,
  PriceTable,
  PlanButton,
  TableTitle,
  PricingPageWrapper
} from '../../../styles/pricingstyles';
import PricingCardSection from '../../pricingcard/pricingCardSection';
import { isEmpty } from '../../../helpers/helpers';
import SVGComponent from '../../../../public/images/svg/SVGComponent';
import Tooltip from '../../appsCards/tooltip';
import { ButtonVariant, PlanList } from '../../../constants/constant';
import YearlyToggleComponent from './yearlyToggleComponent';
import ButtonV2Component from '../../button/buttonV2/buttonV2';
import FAQ from '../../faq/faq';
import NewCTA from '../../cta/newCTA';

export default function PricingPage({ details, faqData }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const planFeatures = [];
  details?.planFeaturesCollection?.items?.forEach((element) => {
    const findIndex = planFeatures?.findIndex((feature) => feature?.section === element.section);
    if (findIndex !== -1) {
      planFeatures?.[findIndex]['items'].push(element);
    } else {
      const item = { section: element.section, items: [element] };
      planFeatures.push(item);
    }
  });

  const [isYearly, setIsYearly] = useState(true);
  const [isShowFeature, setShowFeature] = useState(true);
  const [isTopbarPresent, setIsTopbarPresent] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleShowFeature = useCallback(() => {
    setShowFeature(!isShowFeature);
  }, [isShowFeature]);

  const toggleBillingCycle = useCallback(() => {
    setIsYearly((prev) => !prev);
  }, []);

  const renderTableData = useCallback((value) => {
    if (isEmpty(value))
      return (
        <div className='icon-div'>
          <SVGComponent name='blank-line' width='20' height='20' viewBox='0 0 20 21' />
        </div>
      );
    var result = value?.split(/\[(.*?)\]/);

    if (result?.[1] === 'X') {
      return (
        <>
          <div style={{ display: 'flex', gap: 10 }}>
            <SVGComponent name='table-arrow-tick-icon' width='20' height='20' viewBox='20' />
          </div>
        </>
      );
    }
    if (value?.toLowerCase() === 'x')
      return (
        <div className='icon-div'>
          <SVGComponent name='table-arrow-tick-icon' width='20' height='20' viewBox='20' />
        </div>
      );
    else {
      const contentWithBreaks = value.split('\\n').map((line, index) => {
        return (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        );
      });
      return <span className='icon-div'>{contentWithBreaks}</span>;
    }
  }, []);

  const renderPlanFeaturesView = useMemo(() => {
    if (isEmpty(planFeatures)) return null;
    return planFeatures?.map((item, index) => {
      return (
        <>
          <TableTitle>{item?.section}</TableTitle>
          <table className={!isShowFeature && 'active'}>
            <thead key={`planfeatures_index_${index}`}>
              <tr>
                <th colSpan={3} className='tablepadding tab'></th>
                {details?.plansCollection?.items?.map((item) => {
                  return (
                    <>
                      <th className='tab' key={`blank_tab`}></th>
                    </>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {item?.items?.map((featuresItem, featuresIndex) => (
                <tr key={`plan_features_${item?.section}_index_${featuresIndex}`}>
                  <td colSpan={3}>
                    <div className='title'>
                      <h4>{featuresItem?.name}</h4>
                      {!isEmpty(featuresItem?.description?.json) && (
                        <Tooltip
                          message={documentToReactComponents(featuresItem?.description?.json)}
                          iconSize='16'
                          fill='var(--text-secondary)'
                        />
                      )}
                    </div>
                  </td>
                  {details?.plansCollection?.items?.map((planItem, index) => (
                    <td className='sticky' key={`plan_${planItem?.name}`}>
                      {renderTableData(featuresItem?.[`plan${PlanList[index]}`])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    });
  }, [details?.plansCollection?.items, isShowFeature, planFeatures, renderTableData]);

  const renderTablePlanNameView = useMemo(() => {
    if (isEmpty(details?.plansCollection?.items)) return null;
    return details?.plansCollection?.items?.map((item, index) => {
      return (
        <>
          <th className={item.colorScheme === 'Dark' ? 'isactive' : ''}>{item?.name}</th>
        </>
      );
    });
  }, [details?.plansCollection?.items]);

  useEffect(() => {
    const topbarContent = document.getElementById('topbarContent');
    setIsTopbarPresent(!!topbarContent); // Set state based on element presence
  }, []); // Run once when the component mounts

  useEffect(() => {
    const handleScroll = () => {
      const topbarContent = document.getElementById('table-header');
      if (topbarContent) {
        const rect = topbarContent.getBoundingClientRect();
        const isSticky = rect.top <= 81 || rect.top <= 126; // Check if sticky for both conditions
        setIsSticky(isSticky);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderTableHeader = useMemo(() => {
    return (
      <table className={`${isTopbarPresent ? 'topbarContent' : ''}${isSticky ? 'sticky' : ''}`} id='table-header'>
        <thead>
          <tr className='bordercolor'>
            <th colSpan={3}>Compare all features</th>
            {renderTablePlanNameView}
          </tr>
        </thead>
      </table>
    );
  }, [isTopbarPresent, renderTablePlanNameView, isSticky]);

  return (
    <PricingPageWrapper>
      <div>
        <HeroSection>
          <Container>
            {!isEmpty(details?.header) && <h1>{details.header}</h1>}
            {!isEmpty(details?.body) && <p>{details.body}</p>}
          </Container>
        </HeroSection>
        <PricingSection>
          <Container>
            <PriceMenu>
              <PriceButton>
                <WrapSlide>
                  <YearlyToggleComponent onClick={toggleBillingCycle} isYearly={isYearly} />
                </WrapSlide>
              </PriceButton>
              <>
                {!isEmpty(details?.plansCollection?.items) && (
                  <PricingCardSection
                    data={details?.plansCollection?.items}
                    cardSize={details?.plansCollection?.total || 0}
                    isYearly={isYearly}
                  />
                )}
              </>
              <PlanButton>
                <ButtonV2Component
                  title={isShowFeature ? 'Show plan details' : 'Hide plan details'}
                  onClick={toggleShowFeature}
                  variant={ButtonVariant.SECONDARY_WITH_BORDER}
                  iconName={!isShowFeature && !isEmpty(planFeatures) ? 'down-arrow-icon' : 'up-arrow-icon'}
                  className='button'
                />
              </PlanButton>
            </PriceMenu>
            {!isShowFeature && !isEmpty(planFeatures) && (
              <PriceTable is4Card={details?.plansCollection?.total === 4}>
                {renderTableHeader}
                {renderPlanFeaturesView}
              </PriceTable>
            )}
          </Container>
        </PricingSection>
      </div>
      <FAQ faqList={faqData} />
      <NewCTA
        title={details.ctaSection?.title}
        description={details.ctaSection?.description}
        primaryButtonLink={details.ctaSection?.primaryButtonLink}
        primaryButtonText={details.ctaSection?.primaryButtonText}
        secondaryButtonLink={details.ctaSection?.secondaryButtonLink}
        secondaryButtonText={details.ctaSection?.secondaryButtonText}
      />
    </PricingPageWrapper>
  );
}
