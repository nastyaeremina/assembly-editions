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
import { CTAData } from '../../../constants/raw';
import ToastMessage from '../../ToastMessage/toastMessage';
import TableOfContents from './TableOfContents';
import useNavbarHeight from '../../../hooks/useNavbarHeight';
import BlockQuote from '../../blockQuote';

// Regular expression to match blockQuote tags with their attributes and content
const BLOCKQUOTE_REGEX = /<blockQuote\b([^>]*)>\s*<\/blockQuote>/gi;

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
  externalLinks = {}
}) {
  const [CopyBlockData, setCopyBlock] = useState([]);
  const [showToast, setShowToast] = useState(false);

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
          newList.slice(findIndex, 1);
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

  function renderNonCode(segment, parentKey) {
    try {
      if (segment.indexOf('<blockQuote') === -1) {
        return <div key={parentKey} dangerouslySetInnerHTML={{ __html: segment }} />;
      }

      var parts = [];
      var lastIndex = 0;
      var match;
      BLOCKQUOTE_REGEX.lastIndex = 0;

      var i = 0;
      while ((match = BLOCKQUOTE_REGEX.exec(segment))) {
        var full = match[0];
        var attrs = match[1] || '';
        var start = match.index;
        var end = start + full.length;

        var before = segment.slice(lastIndex, start);
        if (before) {
          parts.push(<div key={parentKey + '-before-' + i} dangerouslySetInnerHTML={{ __html: before }} />);
        }

        var quote = getAttr(attrs, 'data-quote');
        var author = getAttr(attrs, 'data-author') || undefined;
        var role = getAttr(attrs, 'data-role') || undefined;

        parts.push(<BlockQuote key={parentKey + '-blockQuote-' + i} quote={quote} author={author} role={role} />);

        lastIndex = end;
        i++;
      }

      var after = segment.slice(lastIndex);
      if (after) {
        parts.push(<div key={parentKey + '-after'} dangerouslySetInnerHTML={{ __html: after }} />);
      }

      return <>{parts}</>;
    } catch (err) {
      console.error('renderNonCode error:', err);
      return <div key={parentKey} dangerouslySetInnerHTML={{ __html: segment }} />;
    }
  }

  const renderHTMLContent = useCallback(() => {
    try {
      const segments = renderContentWithVideos(htmlData)?.split(EXTRACT_CODE_TAG_FROM_HTML_REGEX) || [];
      if (isEmpty(segments)) return null;
      return (
        <Content applyMargin={!shouldShowTOC} hasTopBar={hasTopBar}>
          {segments.map((segment, index) => {
            try {
              if (segment?.startsWith('<pre><code')) {
                const codeContent = segment
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
                        try {
                          copy(codeContent?.trim());
                          onChangeCopy({ index, isCopy: true });
                          setTimeout(() => {
                            onChangeCopy({ index, isCopy: false });
                          }, 3000);
                        } catch (e) {
                          console.error('copy handler error:', e);
                        }
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
                return renderNonCode(segment, index);
              }
            } catch (innerErr) {
              console.error('render segment error:', innerErr);
              return <div key={index} dangerouslySetInnerHTML={{ __html: segment }} />;
            }
          })}
        </Content>
      );
    } catch (err) {
      console.error('renderHTMLContent error:', err);
      return (
        <Content applyMargin={!shouldShowTOC} hasTopBar={hasTopBar}>
          <div dangerouslySetInnerHTML={{ __html: htmlData }} />
        </Content>
      );
    }
  }, [CopyBlockData, htmlData, onChangeCopy, shouldShowTOC, hasTopBar]);

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
        <NewCTA
          title={CTAData.title}
          description={CTAData.description}
          primaryButtonLink={CTAData.primaryButtonLink}
          primaryButtonText={CTAData.primaryButtonText}
          secondaryButtonLink={CTAData.secondaryButtonLink}
          secondaryButtonText={CTAData.secondaryButtonText}
        />
      </MainContent>
      {showToast && <ToastMessage message='Link copied to your clipboard.' onClose={handleToastClose} />}
    </>
  );
}
