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

  const renderHTMLContent = useCallback(() => {
    // Split the HTML content into segments using a regex
    const segments = renderContentWithVideos(htmlData)?.split(EXTRACT_CODE_TAG_FROM_HTML_REGEX) || [];
    // If there are no segments, return null
    if (isEmpty(segments)) return null;
    // Render the content
    return (
      <Content applyMargin={!shouldShowTOC} hasTopBar={hasTopBar}>
        {segments.map((segment, index) => {
          if (segment?.startsWith('<pre><code')) {
            // Remove HTML tags and extract code content
            const codeContent = segment
              ?.replace(/<pre>/g, '') // Remove <pre> tags
              ?.replace(/<\/pre>/g, '') // Remove </pre> tags
              ?.replace(/<code[^>]*>/g, '') // Remove <code> tags
              ?.replace(/<\/code>/g, ''); // Remove </code> tags
            return (
              <div key={index} className='code-block'>
                <CopyBlock text={codeContent} codeBlock theme={dracula} showLineNumbers={false} />
                <p
                  className='copy-icon'
                  onClick={() => {
                    // Copy the code content to the clipboard
                    copy(codeContent?.trim());
                    onChangeCopy({ index, isCopy: true });
                    // Reset the "Copy" state after 3 seconds
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
            // Render non-code segments using dangerouslySetInnerHTML
            return <div key={index} dangerouslySetInnerHTML={{ __html: segment }} />;
          }
        })}
      </Content>
    );
  }, [CopyBlockData, htmlData, onChangeCopy, shouldShowTOC]);

  return (
    <>
      <MainContent>
        <Container>
          <Details id='main_content' className={!shouldShowLestSection && 'without-toc'}>
            <LegacyBlogDetailHero blogDetail={blogDetail} onCopyLink={handleCopyLink} />

            <BlogContent className={!shouldShowTOC ? 'without-toc' : ''}>
              {shouldShowLestSection && (
                <BlogDetailsidebar hasTopBar={hasTopBar}>
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
