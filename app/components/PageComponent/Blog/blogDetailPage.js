'use client';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  Table,
  TableHeading,
  Post,
  BlogTime,
  ActiveBorder,
  TableContentWrapper,
  TOCDivider,
  CopyIcon
} from '../../../styles/blogstyles';
import { isEmpty } from '../../../helpers/helpers';
import { renderContentWithVideos } from '../../../helpers/clientSideHelpers';
import { EXTRACT_CODE_TAG_FROM_HTML_REGEX, EXTRACT_H2_TAG_FROM_HTML_REGEX } from '../../../constants/constant';
import BlogSidebarCTA from '../../../components/blogsidebarCTA/index';
import LegacyBlogDetailHero from '../../blogdetailHero/legacyBlogDetailHero';
import SVGComponent from '../../../../public/images/svg/SVGComponent';
import useActiveHeading from '../../../hooks/useActiveHeading';
import NewCTA from '../../cta/newCTA';
import { CTAData } from '../../../constants/raw';
import ToastMessage from '../../ToastMessage/toastMessage';

export default function BlogdetailPage({ blogDetail, htmlData, ctaTitle, ctaDescription }) {
  const [CopyBlockData, setCopyBlock] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const activeId = useActiveHeading({ selector: 'h2' });

  const shouldShowBlogCTA = !isEmpty(ctaDescription) && !isEmpty(ctaTitle);
  const shouldShowTOC = blogDetail?.custom_template !== 'custom-no-toc';
  const shouldShowLestSection = shouldShowBlogCTA || shouldShowTOC;

  // ref for active border
  const itemBorderRefs = useRef([]);

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

  const renderTableData = useMemo(() => {
    if (isEmpty(htmlData)) return null;
    const newList = htmlData?.match(EXTRACT_H2_TAG_FROM_HTML_REGEX);
    if (isEmpty(newList)) return null;
    return newList?.map((item, index) => {
      const headingList = item?.split('>');
      const id = `${headingList?.[0]?.replace(/['"]+/g, '').replace('<h2 id=', '')}`;
      const isActive = index === activeIndex;

      return (
        !isEmpty(headingList?.[1]) && (
          <li
            key={`tableDataHeading_index_${index}`}
            className={isActive ? 'active' : ''}
            ref={(item) => {
              itemBorderRefs.current[index] = item;
            }}>
            <Link href={`#${id}`} className={isActive ? 'active' : ''}>
              {headingList?.[1]}
            </Link>
          </li>
        )
      );
    });
  }, [htmlData, activeIndex]);

  // for active border (from scrolling and clicking)
  useEffect(() => {
    // Update activeIndex when activeId changes (from scrolling)
    if (activeId && renderTableData) {
      const activeItemIndex = renderTableData.findIndex((item) => {
        const linkElement = item?.props?.children?.props;
        if (linkElement?.href) {
          const id = linkElement.href.replace('#', '');
          return id === activeId;
        }
        return false;
      });
      if (activeItemIndex !== -1 && activeItemIndex !== activeIndex) {
        setActiveIndex(activeItemIndex);
        return; // Exit early to avoid positioning border twice
      }
    }

    // Position the active border
    if (itemBorderRefs.current[activeIndex]) {
      const { offsetTop, offsetHeight } = itemBorderRefs.current[activeIndex];
      const activeBorder = document.getElementById('active-border');
      if (activeBorder) {
        activeBorder.style.top = `${offsetTop}px`;
        activeBorder.style.height = `${offsetHeight}px`;
      }
    }
  }, [activeId, renderTableData, activeIndex]);

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
      <Content applyMargin={!shouldShowTOC}>
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
                <BlogDetailsidebar>
                  {shouldShowTOC && (
                    <Table>
                      <TableHeading>JUMP TO SECTION</TableHeading>
                      <TableContentWrapper>
                        <TOCDivider />
                        <ol>
                          <ActiveBorder id='active-border' />
                          {renderTableData}
                        </ol>
                      </TableContentWrapper>
                    </Table>
                  )}
                  {shouldShowBlogCTA && <BlogSidebarCTA headerText={ctaTitle} bodyText={ctaDescription} />}
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
