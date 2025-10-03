'use client';
import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import { CopyBlock, dracula } from 'react-code-blocks';
import copy from 'copy-to-clipboard';
import { Container, Content } from '../../../styles/commonStyles';
import {
  BlogContent,
  BlogDetailsidebar,
  Details,
  MainContent,
  Rightcontent,
  Post,
  BlogTime,
  CopyIcon
} from '../../../styles/blogstyles';
import { isEmpty } from '../../../helpers/helpers';
import { renderContentWithVideos } from '../../../helpers/clientSideHelpers';
import { EXTRACT_CODE_TAG_FROM_HTML_REGEX } from '../../../constants/constant';
import LegacyBlogDetailHero from '../../blogdetailHero/legacyBlogDetailHero';
import SVGComponent from '../../../../public/images/svg/SVGComponent';
import NewCTA from '../../cta/newCTA';

import ToastMessage from '../../ToastMessage/toastMessage';
import TableOfContents from './TableOfContents';
import useNavbarHeight from '../../../hooks/useNavbarHeight';
import GhostGalleryComponent from './ghostGalleryComponent';
import BlockQuote from '../../blockQuote';

// Regular expression to match blockQuote tags with their attributes and content
const BLOCKQUOTE_PLACEHOLDER = /<blockQuote\b([^>]*)>\s*<\/blockQuote>/gi;

/**
 * Extracts the value of a specific attribute from an HTML attributes string
 * @param {string} attrs - The HTML attributes string (e.g., 'src="image.jpg" alt="description"')
 * @param {string} name - The name of the attribute to extract (e.g., 'src', 'alt')
 * @returns {string} The value of the attribute or empty string if not found
 */
function getAttr(attrs, name) {
  var re = new RegExp(name + '="([^"]*)"', 'i');
  var m = re.exec(attrs || '');
  return m ? m[1] : '';
}

/**
 * Blog detail page component that renders blog content with optional CTA and navigation
 * @param {Object} blogDetail - Blog post data including title, content, metadata
 * @param {string} htmlData - HTML content of the blog post
 * @param {string} ctaTitle - Title for the call-to-action section
 * @param {string} ctaDescription - Description for the call-to-action section
 * @param {boolean} hasTopBar - Whether to display the top navigation bar
 * @param {Object} externalLinks - External links configuration (defaults to empty object)
 */
export default function BlogdetailPage({
  blogDetail,
  htmlData,
  ctaTitle,
  ctaDescription,
  hasTopBar,
  externalLinks = {},
  blogCTA = null
}) {
  const [CopyBlockData, setCopyBlock] = useState([]);
  const [showToast, setShowToast] = useState(false);
  // Track client-side mount to avoid SSR hydration mismatch;
  // used to defer rendering of interactive galleries until after mount
  const [isMounted, setIsMounted] = useState(false);

  const shouldShowBlogCTA = !isEmpty(ctaDescription) && !isEmpty(ctaTitle);
  const shouldShowTOC = blogDetail?.custom_template !== 'custom-no-toc';
  const shouldShowLestSection = shouldShowBlogCTA || shouldShowTOC;

  // for sticky positioning
  const { totalHeight } = useNavbarHeight();

  const onChangeCopy = useCallback(
    ({ index, isCopy }) => {
      const newList = JSON.parse(JSON.stringify(CopyBlockData));
      if (isCopy) {
        newList.push(index);
        setCopyBlock(newList);
      } else {
        const findIndex = newList?.findIndex((item) => item === index);
        if (findIndex !== -1) {
          // FIX: use splice (slice was a no-op)
          newList.splice(findIndex, 1);
        }
        setCopyBlock(newList);
      }
    },
    [CopyBlockData]
  );

  // copy link function
  const handleCopyLink = useCallback(() => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setShowToast(true);
  }, []);

  const handleToastClose = useCallback(() => {
    setShowToast(false);
  }, []);

  // Avoid hydration mismatch by rendering interactive galleries only after mount
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  /**
   * Replace <blockQuote data-quote="" data-author="" data-role=""></blockQuote>
   * with <BlockQuote /> component(s).
   */
  function renderBlockQuotes(htmlString, keyPrefix = 'bq') {
    if (!htmlString?.includes('<blockQuote')) {
      return [<div key={keyPrefix} dangerouslySetInnerHTML={{ __html: htmlString }} />];
    }

    const parts = [];
    let lastIndex = 0;
    let match;
    let i = 0;
    BLOCKQUOTE_PLACEHOLDER.lastIndex = 0;

    while ((match = BLOCKQUOTE_PLACEHOLDER.exec(htmlString)) !== null) {
      const full = match[0];
      const attrs = match[1] || '';
      const start = match.index;
      const end = start + full.length;

      const before = htmlString.slice(lastIndex, start);
      if (before && before.trim()) {
        parts.push(<div key={`${keyPrefix}-before-${i}`} dangerouslySetInnerHTML={{ __html: before }} />);
      }

      const quote = getAttr(attrs, 'data-quote');
      const author = getAttr(attrs, 'data-author') || undefined;
      const role = getAttr(attrs, 'data-role') || undefined;

      parts.push(<BlockQuote key={`${keyPrefix}-bq-${i}`} quote={quote} author={author} role={role} />);

      lastIndex = end;
      i++;
    }

    const after = htmlString.slice(lastIndex);
    if (after && after.trim()) {
      parts.push(<div key={`${keyPrefix}-after`} dangerouslySetInnerHTML={{ __html: after }} />);
    }

    return parts;
  }
  const renderHTMLContent = useCallback(() => {
    const segments = renderContentWithVideos(htmlData)?.split(EXTRACT_CODE_TAG_FROM_HTML_REGEX) || [];
    if (isEmpty(segments)) return null;

    return (
      <Content applyMargin={!shouldShowTOC} hasTopBar={hasTopBar}>
        {segments.flatMap((segment, index) => {
          // Transform comma/tab separated text inside <figcaption> <span> into multiple chip spans
          const processedSegment = segment?.includes('<figcaption')
            ? segment.replace(
                /(<figcaption[^>]*>)[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>([\s\S]*?<\/figcaption>)/g,
                (_match, figStart, inner, figEnd) => {
                  const items = inner
                    .replace(/\n/g, ' ')
                    .split(/[\t,]+/)
                    .map((s) => s.trim())
                    .filter(Boolean);
                  const chips = items.map((txt) => `<button class="kg-chip">${txt}</button>`).join(' ');
                  return `${figStart}${chips}${figEnd}`;
                }
              )
            : segment;

          if (processedSegment?.startsWith('<pre><code')) {
            // code block
            const codeContent = processedSegment
              ?.replace(/<pre>/g, '')
              ?.replace(/<\/pre>/g, '')
              ?.replace(/<code[^>]*>/g, '')
              ?.replace(/<\/code>/g, '');

            return (
              <div key={index} className='code-block'>
                <CopyBlock text={codeContent} codeBlock theme={dracula} showLineNumbers={false} />
                <p
                  className='copy-icon'
                  onClick={() => {
                    copy((codeContent || '').trim());
                    onChangeCopy({ index, isCopy: true });
                    setTimeout(() => {
                      onChangeCopy({ index, isCopy: false });
                    }, 3000);
                  }}>
                  {CopyBlockData?.indexOf(index) !== -1 ? (
                    <CopyIcon>
                      <SVGComponent name='correct-icon' width='20' height='20' viewBox='0 0 16 16' />
                    </CopyIcon>
                  ) : (
                    <CopyIcon>
                      <SVGComponent name='copy-icon' width='20' height='21' viewBox='0 0 20 21' />
                    </CopyIcon>
                  )}
                </p>
              </div>
            );
          } else {
            // 1) Intercept Ghost gallery card and render controlled component while preserving surrounding content
            if (processedSegment?.includes('kg-gallery-card')) {
              const results = [];
              const galleryRegex = /<figure[^>]*class=\"[^\"]*kg-gallery-card[^\"]*\"[\s\S]*?<\/figure>/gi;
              let lastIndex = 0;
              let match;
              let part = 0;

              while ((match = galleryRegex.exec(processedSegment)) !== null) {
                const before = processedSegment.slice(lastIndex, match.index);
                if (before && before.trim()) {
                  results.push(renderBlockQuotes(before, index));
                }
                const figureHtml = match[0];
                if (isMounted) {
                  results.push(<GhostGalleryComponent key={`${index}-gallery-${part}`} htmlString={figureHtml} />);
                } else {
                  results.push(
                    <div key={`${index}-gallery-${part}`} dangerouslySetInnerHTML={{ __html: figureHtml }} />
                  );
                }
                lastIndex = galleryRegex.lastIndex;
                part += 1;
              }
              const after = processedSegment.slice(lastIndex);
              if (after && after.trim()) {
                results.push(renderBlockQuotes(after, index));
              }
              return results;
            }
            // 2) Upgrade placeholders → <BlockQuote /> OR dump as raw HTML
            return renderBlockQuotes(processedSegment, index);
          }
        })}
      </Content>
    );
  }, [CopyBlockData, htmlData, onChangeCopy, shouldShowTOC, hasTopBar, isMounted, renderBlockQuotes]);

  return (
    <>
      <MainContent>
        <Container>
          <Details id='main_content' className={!shouldShowLestSection && 'without-toc'}>
            <LegacyBlogDetailHero blogDetail={blogDetail} onCopyLink={handleCopyLink} />

            <BlogContent className={!shouldShowTOC ? 'without-toc' : ''}>
              {shouldShowLestSection && (
                <BlogDetailsidebar stickyTop={totalHeight}>
                  {/* table of content and cta of bottom  */}
                  {shouldShowTOC && (
                    <TableOfContents
                      htmlData={htmlData}
                      hasTopBar={hasTopBar}
                      ctaTitle={ctaTitle}
                      ctaDescription={ctaDescription}
                      shouldShowBlogCTA={shouldShowBlogCTA}
                      sectionTitle='JUMP TO SECTION'
                      externalLinks={externalLinks}
                    />
                  )}
                </BlogDetailsidebar>
              )}
              <Rightcontent>
                {renderHTMLContent()}
                <BlogTime>
                  <Post>
                    {!isEmpty(blogDetail?.authors?.[0]?.name) && (
                      <Link href={`/blog/author/${blogDetail?.authors?.[0]?.slug}`}>
                        {blogDetail?.authors?.[0]?.name}
                      </Link>
                    )}
                    {!isEmpty(blogDetail?.published_at) && !isEmpty(blogDetail?.reading_time) && (
                      <SVGComponent name='small-dot-icon' width='4' height='4' viewBox='0 0 4 4' />
                    )}
                    {!isEmpty(blogDetail?.published_at) &&
                      moment(new Date(blogDetail?.published_at)).format('MMM DD, YYYY')}
                  </Post>
                  <button onClick={handleCopyLink}>
                    <span>Copy link</span>
                  </button>
                </BlogTime>
              </Rightcontent>
            </BlogContent>
          </Details>
        </Container>
        {!isEmpty(blogCTA) && (
          <NewCTA
            title={blogCTA.title}
            description={blogCTA.description}
            primaryButtonLink={blogCTA.primaryButtonLink}
            primaryButtonText={blogCTA.primaryButtonText}
            secondaryButtonLink={blogCTA.secondaryButtonLink}
            secondaryButtonText={blogCTA.secondaryButtonText}
            banner={blogCTA.banner?.url}
          />
        )}
      </MainContent>
      {showToast && <ToastMessage message='Link copied to your clipboard.' onClose={handleToastClose} />}
    </>
  );
}
