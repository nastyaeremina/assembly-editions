'use client';

import React, { useState, useCallback, useMemo, use } from 'react';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container } from '../../../styles/commonStyles';
import {
  HeroSection,
  PricingSection,
  PriceMenu,
  PriceButton,
  YearlyButton,
  MonthlyButton,
  WrapSlide,
  PricingMenu,
  PlanButton,
  PriceTable,
  PricingButton
} from '../../../styles/pricingstyles';
import CTA from '../../cta/cta';
import FAQ from '../../faq/faq';
import Button from '../../button/button';
import { COPILOT_ONBORADING_LINK } from '../../../constants/externalLinks';
import PricingCardSection from '../../pricingcard/pricingCardSection';
import { isEmpty } from '../../../helpers/helpers';

export default function PricingPage({ details }) {
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

  const [isShowFeature, setShowFeature] = useState(true);
  const [isYearly, Yearly] = useState(true);

  const toggleShowFeature = useCallback(() => {
    setShowFeature(!isShowFeature);
  }, [isShowFeature]);

  const setYearly = useCallback(() => {
    Yearly(true);
  }, []);

  const setMonthly = useCallback(() => {
    Yearly(false);
  }, []);

  const renderTableData = useCallback((value) => {
    if (isEmpty(value)) return null;
    var result = value?.split(/\[(.*?)\]/);
    if (result?.[1] === 'true') {
      return (
        <>
          <div style={{ display: 'flex', gap: 10 }}>
            <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} /> <span>{result?.[2]}</span>
          </div>
        </>
      );
    }
    if (value?.toLowerCase() === 'true')
      return <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />;
    else {
      const contentWithBreaks = value.split('\\n').map((line, index) => {
        return (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        );
      });
      return <span>{contentWithBreaks}</span>;
    }
  }, []);

  const renderPlanFeaturesView = useMemo(() => {
    if (isEmpty(planFeatures)) return null;
    return planFeatures?.map((item, index) => {
      return (
        <>
          <thead key={`planfeatures_index_${index}`}>
            <tr>
              <th colSpan={3} className='tablepadding tab'>
                {item?.section}
              </th>
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
            {item?.items?.map((featuresItem, featuresIndex) => {
              return (
                <tr key={`plan_features_${item?.section}_index_${featuresIndex}`}>
                  <td colSpan={3} className='sticky'>
                    <h4>{featuresItem?.name}</h4>
                    {documentToReactComponents(featuresItem?.description?.json)}
                  </td>
                  {details?.plansCollection?.items?.map((item) => {
                    return (
                      <>
                        <td className='sticky'>{renderTableData(featuresItem?.[`plan${item?.name}`])}</td>
                      </>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </>
      );
    });
  }, [details?.plansCollection?.items, planFeatures, renderTableData]);

  const renderPlanTableHeadingView = useMemo(() => {
    if (isEmpty(details?.plansCollection?.items)) return null;
    return details?.plansCollection?.items?.map((item, index) => {
      return (
        <>
          <th className='tablehead'>
            <p className='amount'>
              {isYearly && `$${item?.annualPrice}`}
              {!isYearly && `$${item?.monthlyPrice}`}
            </p>
            <span className='spantext'>{item?.details}</span>
          </th>
        </>
      );
    });
  }, [details?.plansCollection?.items, isYearly]);

  const renderTablePlanNameView = useMemo(() => {
    if (isEmpty(details?.plansCollection?.items)) return null;
    return details?.plansCollection?.items?.map((item, index) => {
      return (
        <>
          <th>{item?.name}</th>
        </>
      );
    });
  }, [details?.plansCollection?.items]);

  const renderTableHeader = useMemo(() => {
    return (
      <table className={!isShowFeature && 'active'}>
        <thead>
          <tr>
            <th colSpan={3} className='tableBorder tablehead'></th>
            {renderPlanTableHeadingView}
          </tr>
          <tr className='bordercolor'>
            <th colSpan={3}>Features</th>
            {renderTablePlanNameView}
          </tr>
        </thead>
      </table>
    );
  }, [isShowFeature, renderPlanTableHeadingView, renderTablePlanNameView]);

  return (
    <>
      <HeroSection>
        <Container>
          {!isEmpty(details?.header) && <h1>{details?.header}</h1>}
          {!isEmpty(details?.body) && <p>{details?.body}</p>}
          <PricingButton>
            <Button text={'Try for free'} hoverColor={'rgba(255, 255, 255, 0.8)'} href={COPILOT_ONBORADING_LINK} />
          </PricingButton>
        </Container>
      </HeroSection>
      <PricingSection>
        <Container>
          <PriceMenu>
            <PriceButton>
              <WrapSlide>
                <YearlyButton className={isYearly && 'active'} onClick={setYearly}>
                  <button>Pay yearly</button>
                </YearlyButton>
              </WrapSlide>
              <MonthlyButton className={!isYearly && 'active'} onClick={setMonthly}>
                <button>Pay monthly</button>
              </MonthlyButton>
            </PriceButton>
            <PricingMenu>
              {!isEmpty(details?.plansCollection?.items) && (
                <PricingCardSection
                  data={details?.plansCollection?.items}
                  cardSize={details?.plansCollection?.total || 0}
                  isYearly={isYearly}
                />
              )}
              <PlanButton>
                <Button
                  isLink={false}
                  onClick={toggleShowFeature}
                  bgColor={'transparent'}
                  fontColor={'#000000'}
                  borderColor={'#000000'}
                  text={isShowFeature ? 'Show plan details' : 'Hide plan details'}
                  hoverColor={'rgba(0, 0, 0, 0.5)'}
                />
              </PlanButton>
            </PricingMenu>
          </PriceMenu>
          {!isShowFeature && !isEmpty(planFeatures) && (
            <PriceTable is4Card={details?.plansCollection?.total === 4}>
              {renderTableHeader}
              <table className={!isShowFeature && 'active'}>{renderPlanFeaturesView}</table>
            </PriceTable>
          )}
        </Container>
      </PricingSection>
    </>
  );
}
