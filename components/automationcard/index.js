import React, { useMemo } from 'react';
import { isEmpty, separateSpecialChar } from '../../helpers/helpers';
import { CardSection, CardSectionHead, Cards } from './styles';
import AutomationCard from './card';

export default function AutomationCardSection({ data, heading }) {
  const renderCardView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return (
        <AutomationCard
          title={item?.title}
          body={item?.body}
          imageurl={item?.imageurl}
          isTwoCard={data?.length !== 1}
          key={`automationCard_index_${index}`}
        />
      );
    });
  }, [data]);

  return (
    <CardSection>
      <CardSectionHead>
        <div dangerouslySetInnerHTML={{ __html: separateSpecialChar(heading) }} />
      </CardSectionHead>
      <Cards>{renderCardView}</Cards>
    </CardSection>
  );
}
