'use client';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import 'react-medium-image-zoom/dist/styles.css';
import { CopyBlock, dracula } from 'react-code-blocks';
import copy from 'copy-to-clipboard';
import { isEmpty, extractHeadingsFromContent, generateUniqueHeadingIds } from '../../helpers/helpers';
import CopyLink from '../copyLink/copyLink';
import VideoComponent from '../../components/videoComponent';
import ZoomImageSlider from '../zoomImage/zoomImageslider';
import IframeView from './iframeView';
import BlockQuote from '../blockQuote';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { CopyIcon } from '../../styles/blogstyles';

export default function RichTextDetail({ assets = [], data, shouldHeadingCopy = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [CopyBlockData, setCopyBlock] = useState([]);
  const codeBlockCounter = useRef(0);

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onChangeCopy = useCallback(
    ({ index, isCopy }) => {
      const newList = JSON.parse(JSON.stringify(CopyBlockData));
      if (isCopy) {
        newList.push(index);
        setCopyBlock(newList);
      } else {
        const findIndex = newList?.findIndex((item) => item === index);
        if (findIndex !== -1) {
          newList.splice(findIndex, 1);
        }
        setCopyBlock(newList);
      }
    },
    [CopyBlockData]
  );

  const assetData = assets?.assets?.block || [];
  const inlineEntries = assets?.entries?.inline || [];

  // Extract all headings from data and use the helper function to generate unique IDs
  const headingIdMap = useMemo(() => {
    // Use the common helper to extract headings from content
    const headings = extractHeadingsFromContent(data?.content);

    // Use the helper function from helpers.js - single source of truth!
    const headingsWithIds = generateUniqueHeadingIds(headings);

    // Create a map: index -> uniqueId for quick lookup during rendering
    const idMap = new Map();
    headingsWithIds.forEach((heading) => {
      idMap.set(heading.index, heading.uniqueId);
    });

    return { idMap, currentIndex: { value: 0 } };
  }, [data]);

  const options = useMemo(() => {
    codeBlockCounter.current = 0; // Reset counter at the start of each render
    headingIdMap.currentIndex.value = 0; // Reset heading index counter

    return {
      renderMark: {
        [MARKS.CODE]: (text) => {
          const codeContent = typeof text === 'string' ? text : String(text);
          const currentIndex = codeBlockCounter.current++;

          return (
            <div className='code-block'>
              <CopyBlock text={codeContent} codeBlock theme={dracula} showLineNumbers={false} />
              <p
                className='copy-icon'
                onClick={() => {
                  copy((codeContent || '').trim());
                  onChangeCopy({ index: currentIndex, isCopy: true });
                  setTimeout(() => {
                    onChangeCopy({ index: currentIndex, isCopy: false });
                  }, 3000);
                }}>
                {CopyBlockData?.indexOf(currentIndex) !== -1 ? (
                  <CopyIcon>
                    <SVGComponent name='correct-icon' width='20' height='20' viewBox='0 0 16 16' />
                  </CopyIcon>
                ) : (
                  <CopyIcon>
                    <SVGComponent name='copy-icon' width='20' height='20' viewBox='0 0 20 21' />
                  </CopyIcon>
                )}
              </p>
            </div>
          );
        }
      },
      renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => {
          // Get the unique ID from the map using the helper function
          const tagId = headingIdMap.idMap.get(headingIdMap.currentIndex.value++);
          return (
            <h1 id={tagId}>
              {children}
              {shouldHeadingCopy && <CopyLink tagId={tagId} />}
            </h1>
          );
        },
        [BLOCKS.HEADING_2]: (node, children) => {
          // Get the unique ID from the map using the helper function
          const tagId = headingIdMap.idMap.get(headingIdMap.currentIndex.value++);
          return (
            <h2 id={tagId}>
              {children}
              {shouldHeadingCopy && <CopyLink tagId={tagId} />}
            </h2>
          );
        },
        [BLOCKS.HEADING_3]: (node, children) => {
          // Get the unique ID from the map using the helper function
          const tagId = headingIdMap.idMap.get(headingIdMap.currentIndex.value++);
          return (
            <h3 id={tagId}>
              {children} {shouldHeadingCopy && <CopyLink tagId={tagId} />}
            </h3>
          );
        },
        [BLOCKS.HEADING_4]: (node, children) => {
          // Get the unique ID from the map using the helper function
          const tagId = headingIdMap.idMap.get(headingIdMap.currentIndex.value++);
          return (
            <h4 id={tagId}>
              {children}
              {shouldHeadingCopy && <CopyLink tagId={tagId} />}
            </h4>
          );
        },
        [BLOCKS.HEADING_5]: (node, children) => {
          // Get the unique ID from the map using the helper function
          const tagId = headingIdMap.idMap.get(headingIdMap.currentIndex.value++);
          return (
            <h5 id={tagId}>
              {children}
              {shouldHeadingCopy && <CopyLink tagId={tagId} />}
            </h5>
          );
        },
        [BLOCKS.HEADING_6]: (node, children) => {
          // Get the unique ID from the map using the helper function
          const tagId = headingIdMap.idMap.get(headingIdMap.currentIndex.value++);
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
        [BLOCKS.TABLE]: (node, children) => {
          return (
            <div className='table-wrapper'>
              <table>{children}</table>
            </div>
          );
        },
        [BLOCKS.TABLE_HEADER_CELL]: (node, children) => {
          return <th>{children}</th>;
        },
        [BLOCKS.TABLE_CELL]: (node, children) => {
          return <td>{children}</td>;
        },
        [BLOCKS.TABLE_ROW]: (node, children) => {
          return <tr>{children}</tr>;
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
  }, [
    CopyBlockData,
    onChangeCopy,
    assetData,
    inlineEntries,
    isOpen,
    onOpenModal,
    onCloseModal,
    shouldHeadingCopy,
    headingIdMap
  ]);

  return <>{documentToReactComponents(data, options)}</>;
}
