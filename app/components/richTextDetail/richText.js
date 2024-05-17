'use client';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { extractTagId } from '../../helpers/helpers';
import CopyLink from '../copyLink/copyLink';
import VideoComponent from '../../components/videoComponent';

export default function RichTextDetail({ assets = [], data, shouldHeadingCopy = true }) {
  const assetData = assets?.assets?.block || [];
  const videoEntries = assets?.entries?.inline || [];

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => {
        const tagId = extractTagId(children[0]);
        return (
          <h1 id={tagId}>
            {children}
            {shouldHeadingCopy && <CopyLink tagId={tagId} />}
          </h1>
        );
      },

      [BLOCKS.HEADING_2]: (node, children) => {
        const tagId = extractTagId(children[0]);
        return (
          <h2 id={tagId}>
            {children}
            {shouldHeadingCopy && <CopyLink tagId={tagId} />}
          </h2>
        );
      },

      [BLOCKS.HEADING_3]: (node, children) => {
        const tagId = extractTagId(children[0]);
        return (
          <h3 id={tagId}>
            {children} {shouldHeadingCopy && <CopyLink tagId={tagId} />}
          </h3>
        );
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        const tagId = extractTagId(children[0]);
        return (
          <h4 id={tagId}>
            {children}
            {shouldHeadingCopy && <CopyLink tagId={tagId} />}
          </h4>
        );
      },
      [BLOCKS.HEADING_5]: (node, children) => {
        const tagId = extractTagId(children[0]);
        return (
          <h5 id={tagId}>
            {children}
            {shouldHeadingCopy && <CopyLink tagId={tagId} />}
          </h5>
        );
      },
      [BLOCKS.HEADING_6]: (node, children) => {
        const tagId = extractTagId(children[0]);
        return (
          <h6 id={tagId}>
            {children}
            {shouldHeadingCopy && <CopyLink tagId={tagId} />}
          </h6>
        );
      },
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const entryId = node?.data?.target?.sys?.id;
        const videoData = videoEntries.find((item) => item?.sys?.id === entryId);
        if (videoData) {
          const videoUrl = videoData?.video?.url;
          const thumbnailUrl = videoData?.thumbnailImage?.url;
          if (videoUrl) return <VideoComponent src={videoUrl} poster={thumbnailUrl} />;
        }

        return null;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const assetId = node?.data?.target?.sys?.id;
        const asset = assetData.find((item) => item?.sys?.id === assetId);
        if (asset) {
          const src = asset?.url;
          //check current asset is image
          if (asset?.contentType?.startsWith('image/'))
            return (
              <Zoom>
                <Image src={src} alt={asset?.fileName} width={753} height={266} className='content-image' />
              </Zoom>
            );
          //check current asset is video
          else if (asset?.contentType?.startsWith('video/')) return <VideoComponent src={src} />;
          return null;
        }
        return null;
      }
    }
  };

  return <>{documentToReactComponents(data, options)}</>;
}
