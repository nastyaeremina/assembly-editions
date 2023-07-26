import { useMemo } from 'react';
import { isEmpty } from '../../../helpers/helpers';
import { Allcard } from '../styles';
import Card from './card';

export default function Cardsection({ data }) {
  const renderCardList = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => (
      <Card src={item?.logo?.url} slug={item?.slug} key={`competitor_index_${index}`} />
    ));
  }, [data]);
  return (
    <>
      <Allcard>
        {renderCardList}
        {/* <Card src={'/images/comparisonlogo.svg'} />
        <Card src={'/images/comparisonlogo.svg'} />
        <Card src={'/images/comparisonlogo.svg'} />
        <Card src={'/images/comparisonlogo.svg'} /> */}
      </Allcard>
    </>
  );
}
