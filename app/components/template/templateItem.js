'use client';
import Image from 'next/image';
import { PopularCard, CardText, Description, ImageDiv, Title } from './styles';

export default function TemplateItem({ title, description, slug, imageUrl, isBigCard = false }) {
  return (
    <>
      <PopularCard href={`/templates/${slug}`}>
        <ImageDiv className='image-div' isBigCard={isBigCard}>
          <Image src={imageUrl} alt='template' width={388} height={220} />
        </ImageDiv>
        <CardText>
          <Title isBigCard={isBigCard}>{title}</Title>
          <Description isBigCard={isBigCard}>{description}</Description>
        </CardText>
      </PopularCard>
    </>
  );
}
