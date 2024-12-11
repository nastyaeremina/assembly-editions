import { useMemo } from 'react';
import { isEmpty } from '../../../helpers/helpers';
import { Allcard, CardMainDiv, Title } from '../styles';
import Card from './card';

export default function Cardsection({ data, title }) {
  const renderCardList = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => (
      <Card src={item?.logo?.url} slug={item?.slug} key={`competitor_index_${index}`} />
    ));
  }, [data]);
  return (
    <CardMainDiv>
      <Title>Copilot vs {title}</Title>
      <Allcard>{renderCardList}</Allcard>
    </CardMainDiv>
  );
}
