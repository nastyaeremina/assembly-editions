import React, { useMemo } from 'react';
import { isEmpty, separateSpecialChar } from '../../helpers/helpers';
import { CardSection, CardSectionHead, Cards } from './styles';
import AutomationCard from './card';

export default function AutomationCardSection({ data, heading, isAppExplore }) {
  const renderCardView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return (
        <AutomationCard
          title={item?.header}
          body={item?.body}
          imageurl={item?.image?.url}
          isTwoCard={data?.length !== 1}
          key={`automationCard_index_${index}`}
        />
      );
    });
  }, [data]);

  return (
    <CardSection isAppExplore={isAppExplore}>
      <CardSectionHead>
        <div dangerouslySetInnerHTML={{ __html: separateSpecialChar(heading) }} />
      </CardSectionHead>
      <Cards>{renderCardView}</Cards>
    </CardSection>
  );
}
