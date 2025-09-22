import { useMemo } from 'react';
import { isEmpty } from '../../../helpers/helpers';
import { Allcard, CardMainDiv, Description, Title, TitleWrapper } from '../styles';
import Card from './card';

export default function Cardsection({ data, title, description }) {
  const renderCardList = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => (
      <Card
        src={item?.logo?.url}
        slug={item?.slug}
        key={`competitor_index_${index}`}
        title={`Assembly vs. ${item.compititorName}`}
        description={item?.compititorShortDescription}
      />
    ));
  }, [data]);
  return (
    <CardMainDiv>
      <TitleWrapper>
        <Title>Assembly vs. {title}</Title>
        {!isEmpty(description) && <Description>{description}</Description>}
      </TitleWrapper>
      <Allcard>{renderCardList}</Allcard>
    </CardMainDiv>
  );
}
