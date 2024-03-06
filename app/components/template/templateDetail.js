import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { TemplateContent } from './templateBodyStyle';
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';

export default function TemplateDetail({ content }) {
  const assets = content?.links?.assets?.block ?? [];
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const assetId = node?.data?.target?.sys?.id;
        const asset = assets.find((item) => item?.sys?.id === assetId);
        if (asset) {
          const src = asset?.url;
          //check current asset is image
          if (asset?.contentType?.startsWith('image/'))
            return <Image src={src} alt={asset?.fileName} width={753} height={266} className='content-image' />;
          return null;
        }

        return null;
      }
    }
  };
  return <TemplateContent>{documentToReactComponents(content?.json, options)} </TemplateContent>;
}
