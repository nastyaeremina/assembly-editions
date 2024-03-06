'use client';
import { useMemo } from 'react';
import { Container } from '../../styles/commonStyles';
import TemplateItem from './templateItem';
import { CardSection, SectionHeading, TemplateItemList } from './styles';

export default function TemplateListSection({ data, title, isBigCard = false, isLastSpacing = false }) {
  const renderTemplateList = useMemo(() => {
    return data?.map((item, index) => {
      return (
        <TemplateItem
          key={`template_item_${index}_${item?.slug}`}
          title={item?.title}
          description={item?.highlights}
          slug={item?.slug}
          imageUrl={item?.banner?.url}
          isBigCard={isBigCard}
        />
      );
    });
  }, [data, isBigCard]);

  return (
    <>
      <Container>
        <CardSection isLastSpacing={isLastSpacing}>
          <SectionHeading>{title}</SectionHeading>
          <TemplateItemList isBigCard={isBigCard}>{renderTemplateList}</TemplateItemList>
        </CardSection>
      </Container>
    </>
  );
}
