import React from 'react';
import Card1 from '../../public/images/card1.png';
import { separateSpecialChar } from '../../helpers/helpers';
import { CardSection, CardSectionHead, Cards } from './styles';
import AutomationCard from './card';

export default function AutomationCardSection({
  heading,
  title,
  body,
  title2,
  body2,
  imageurl,
  imageurl2,
  isCard,
  isTwoCard
}) {
  return (
    <CardSection>
      <CardSectionHead>
        <div dangerouslySetInnerHTML={{ __html: separateSpecialChar(heading) }} />
      </CardSectionHead>
      <Cards>
        <AutomationCard title={title} body={body} imageurl={imageurl} isCard={isCard} />
        {isTwoCard && <AutomationCard title={title2} body={body2} imageurl={imageurl2} isCard={isCard} />}
      </Cards>
    </CardSection>
  );
}
