import React from 'react';
import { isEmpty } from '../../helpers/helpers';
import { Caption, Card, CardData, Heading, Icon, Image } from './styles';

export default function RedirectsCard({ title, caption, imageUrl, link }) {
  return (
    <Card href={link}>
      {!isEmpty(imageUrl) && (
        <Icon>
          <Image src={imageUrl} alt='card-icon' width={28} height={28} />
        </Icon>
      )}
      <CardData>
        {!isEmpty(title) && <Heading>{title}</Heading>}
        {!isEmpty(caption) && <Caption>{caption}</Caption>}
      </CardData>
    </Card>
  );
}
