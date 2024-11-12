import React from 'react';
import Button from '../button/button';
import { isEmpty, stringToSlugyfy } from '../../helpers/helpers';
import { Caption, CardBtn, Description, PriceMenu, PriceSection } from './styles';
import PricingCardLabel from './pricingCardLabel';

export default function PricingDetailsHead({ data, isYearly, descriptionMaxHeight }) {
  return (
    <>
      <PriceMenu className='grid-item grid-item-head'>
        <PriceSection isSupersonic={data?.colorScheme === 'Dark'}>
          <h2>{data?.name}</h2>
          <Description height={descriptionMaxHeight}>
            <p id={stringToSlugyfy(data?.name)}>{data?.description}</p>
          </Description>
          <Caption>{data?.details}</Caption>
          <PricingCardLabel price={isYearly ? data?.annualPrice : data?.monthlyPrice} />
          <CardBtn>
            {!isEmpty(data?.primaryCtaText) && (
              <Button
                text={data?.primaryCtaText}
                href={data?.primaryCtaLink}
                className={'cardbtn'}
                bgColor={'--black'}
                fontColor={'--white'}
                borderColor={'--black'}
                hoverColor={'--secondary-hover-color'}
              />
            )}
            <div className='terriarybtn-div'>
              {!isEmpty(data?.secondaryCtaText) && (
                <Button text={data?.secondaryCtaText} href={data?.secondaryCtaLink} type={'link'} className='button' />
              )}
            </div>
          </CardBtn>
        </PriceSection>
      </PriceMenu>
    </>
  );
}
