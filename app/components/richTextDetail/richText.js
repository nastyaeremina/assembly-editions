'use client';
import React, { useCallback, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import 'react-medium-image-zoom/dist/styles.css';
import { extractTagId, isEmpty } from '../../helpers/helpers';
import CopyLink from '../copyLink/copyLink';
import VideoComponent from '../../components/videoComponent';
import ZoomImageSlider from '../zoomImage/zoomImageslider';
import IframeView from './iframeView';
import BlockQuote from '../blockQuote';

export default function RichTextDetail({ assets = [], data, shouldHeadingCopy = true }) {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const assetData = assets?.assets?.block || [];
  const inlineEntries = assets?.entries?.inline || [];
  const options = {
    renderMark: {
      [MARKS.CODE]: (text) => (
        <pre>
          <code>{text}</code>
        </pre>
      )
    },
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
        const entryData = inlineEntries.find((item) => item?.sys?.id === entryId);
        if (!entryData) return null;

        // Render based on the Contentful type
        switch (entryData.__typename) {
          case 'Video': {
            const videoUrl = entryData?.video?.url;
            const thumbnailUrl = entryData?.thumbnailImage?.url;

            if (entryData?.isEmbedWithIframe === true && !isEmpty(entryData?.videoLink)) {
              return <IframeView url={entryData.videoLink} title={entryData.name} />;
            }
            if (videoUrl) {
              return <VideoComponent src={videoUrl} poster={thumbnailUrl} />;
            }
            return null;
          }
          case 'Testimonial': {
            //remove double quotes from quote
            if (isEmpty(entryData.quoteNew)) return null;
            const match = entryData.quoteNew.match(/[“"']([^“"']+)[”"']/);
            const quote = match ? match[1].trim() : entryData.quoteNew;
            return <BlockQuote quote={quote} author={entryData.name} role={entryData.role} />;
          }
          default:
            return null;
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const assetId = node?.data?.target?.sys?.id;
        const asset = assetData.find((item) => item?.sys?.id === assetId);
        if (asset) {
          const src = asset?.url;
          //check current asset is image
          if (asset?.contentType?.startsWith('image/'))
            return isOpen ? (
              <ZoomImageSlider isSlideButtonHide imageUrl={src} onCloseModal={onCloseModal} />
            ) : (
              <Image
                src={src}
                alt={asset?.fileName}
                width={753}
                height={266}
                className='content-image'
                onClick={onOpenModal}
              />
            );
          //check current asset is video
          else if (asset?.contentType?.startsWith('video/'))
            return (
              <>
                <VideoComponent src={src} />
              </>
            );
          return null;
        }
        return null;
      }
    }
  };

  return <>{documentToReactComponents(data, options)}</>;
}
