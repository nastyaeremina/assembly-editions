import React from 'react';
import { isEmpty, stringToSlugyfy } from '../../helpers/helpers';
import { Caption, CardBtn, Description, PriceMenu, PriceSection } from './styles';
import PricingCardLabel from './pricingCardLabel';
import ButtonV2Component from '../button/buttonV2/buttonV2';
import Link from 'next/link';
import { ButtonSize } from '../../constants/constant';

export default function PricingDetailsHead({ data, isYearly, descriptionMaxHeight }) {
  return (
    <>
      <PriceMenu className='grid-item grid-item-head'>
        <PriceSection isSupersonic={data?.colorScheme === 'Dark'}>
          <h4>{data?.name}</h4>
          <Description height={descriptionMaxHeight}>
            <p id={stringToSlugyfy(data?.name)}>{data?.description}</p>
          </Description>
          <Caption>{data?.details}</Caption>
          <PricingCardLabel price={isYearly ? data?.annualPrice : data?.monthlyPrice} />
          <CardBtn>
            {!isEmpty(data?.primaryCtaText) && (
              <ButtonV2Component
                title={data?.primaryCtaText}
                href={data?.primaryCtaLink}
                size={ButtonSize.SMALL}
                isWidth
              />
            )}
            {!isEmpty(data?.secondaryCtaText) && (
              <div className='terriarybtn-div'>
                or
                <Link href={data?.secondaryCtaLink}>{data?.secondaryCtaText}</Link>
              </div>
            )}
          </CardBtn>
        </PriceSection>
      </PriceMenu>
    </>
  );
}
