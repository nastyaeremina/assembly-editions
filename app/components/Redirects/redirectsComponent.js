'use client';
import React from 'react';
import ButtonGroup from '../ButtonGroup/buttonGroup';
import { Container } from '../../styles/commonStyles';
import { isEmpty } from '../../helpers/helpers';
import RedirectsCard from './redirectsCard';
import { Description, Redirects, RedirectsCardSection, RedirectsHeading, Title } from './styles';

export default function RedirectsComponent({
  Heading,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  redirectsData
}) {
  return (
    <Container>
      <Redirects>
        <RedirectsHeading>
          <div className='title-description-div'>
            {!isEmpty(Heading) && <Title>{Heading}</Title>}
            {!isEmpty(description) && <Description>{description}</Description>}
          </div>
          <ButtonGroup
            primaryButtonText={primaryButtonText}
            primaryButtonLink={primaryButtonLink}
            secondaryButtonText={secondaryButtonText}
            secondaryButtonLink={secondaryButtonLink}
            hasMarginTop={28}
            className={'button-center'}
          />
        </RedirectsHeading>
        <RedirectsCardSection>
          {redirectsData.map((data, index) => (
            <RedirectsCard
              key={index}
              title={data?.title}
              caption={data?.description}
              imageUrl={data?.image?.url}
              link={data?.url}
            />
          ))}
        </RedirectsCardSection>
      </Redirects>
    </Container>
  );
}
