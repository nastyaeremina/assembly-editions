'use client';
import React, { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'next-share';
import { CopyBlock, dracula } from 'react-code-blocks';
import copy from 'copy-to-clipboard';
import { Container } from '../../../styles/commonStyles';
import {
  BlogContent,
  BlogDetailsidebar,
  Content,
  Details,
  Icon,
  MainContent,
  Rightcontent,
  ShareButton,
  Table,
  TableHeading
} from '../../../styles/blogstyles';
import { isEmpty } from '../../../helpers/helpers';
import {
  EXTRACT_CODE_TAG_FROM_HTML_REGEX,
  EXTRACT_H2_TAG_FROM_HTML_REGEX,
  EXTRACT_LEADING_DIGIT_REGEX
} from '../../../constants/constant';
import BlogCTA from '../../blogCTA';
import BlogSidebarCTA from '../../../components/blogsidebarCTA/index';
import NewBlogDetailHero from '../../../components/blogdetailHero/newBlogDetailHero';
import LegacyBlogDetailHero from '../../blogdetailHero/legacyBlogDetailHero';

export default function BlogdetailPage({ blogDetail, htmlData, ctaTitle, ctaDescription }) {
  const [isShowData, setShowData] = useState(true);
  const [CopyBlockData, setCopyBlock] = useState([]);

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

  const renderTableData = useMemo(() => {
    if (isEmpty(htmlData)) return null;
    const newList = htmlData?.match(EXTRACT_H2_TAG_FROM_HTML_REGEX);
    if (isEmpty(newList)) return null;
    return newList?.map((item, index) => {
      const headingList = item?.split('>');
      return (
        <li key={`tableDataHeading_index_${index}`}>
          <Link href={`#${headingList?.[0]?.replace(/['"]+/g, '').replace('<h2 id=', '')}`}>
            <span dangerouslySetInnerHTML={{ __html: headingList?.[1]?.replace(EXTRACT_LEADING_DIGIT_REGEX, '') }} />
          </Link>
        </li>
      );
    });
  }, [htmlData]);

  const currentPath = useMemo(() => {
    if (typeof window === 'object') return window.location.href;
  }, []);

  const renderHTMLContent = useCallback(() => {
    // Split the HTML content into segments using a regex
    const segments = htmlData?.split(EXTRACT_CODE_TAG_FROM_HTML_REGEX) || [];

    // If there are no segments, return null
    if (isEmpty(segments)) return null;

    // Render the content
    return (
      <Content>
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
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M6.66845 10.1147L12.7964 3.98608L13.7398 4.92875L6.66845 12.0001L2.42578 7.75742L3.36845 6.81475L6.66845 10.1147Z'
                        fill='#757575'
                      />
                    </svg>
                  ) : (
                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                      <path
                        d='M4.66536 4.66683V2.00016C4.66536 1.82335 4.7356 1.65378 4.86063 1.52876C4.98565 1.40373 5.15522 1.3335 5.33203 1.3335H13.9987C14.1755 1.3335 14.3451 1.40373 14.4701 1.52876C14.5951 1.65378 14.6654 1.82335 14.6654 2.00016V10.6668C14.6654 10.8436 14.5951 11.0132 14.4701 11.1382C14.3451 11.2633 14.1755 11.3335 13.9987 11.3335H11.332V13.9955C11.332 14.3662 11.0327 14.6668 10.6607 14.6668H2.00336C1.91518 14.6669 1.82784 14.6496 1.74635 14.6159C1.66486 14.5822 1.59082 14.5328 1.52846 14.4704C1.46611 14.408 1.41666 14.334 1.38296 14.2525C1.34925 14.171 1.33194 14.0837 1.33203 13.9955L1.33403 5.33816C1.33403 4.9675 1.63336 4.66683 2.00536 4.66683H4.66536ZM5.9987 4.66683H10.6607C11.0314 4.66683 11.332 4.96616 11.332 5.33816V10.0002H13.332V2.66683H5.9987V4.66683ZM2.66736 6.00016L2.66536 13.3335H9.9987V6.00016H2.66736Z'
                        fill='#757575'
                      />
                    </svg>
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
  }, [CopyBlockData, htmlData, onChangeCopy]);

  return (
    <>
      <MainContent>
        <Container>
          <Details id='main_content' className={!shouldShowLestSection && 'without-toc'}>
            {shouldShowLestSection ? (
              <NewBlogDetailHero blogDetail={blogDetail} />
            ) : (
              <LegacyBlogDetailHero blogDetail={blogDetail} />
            )}

            <BlogContent>
              {shouldShowLestSection && (
                <BlogDetailsidebar>
                  {shouldShowTOC && (
                    <Table>
                      <TableHeading onClick={() => setShowData(!isShowData)}>
                        Table of contents
                        <p>
                          [<span>{isShowData ? 'Hide' : 'Show'}</span>]
                        </p>
                      </TableHeading>
                      {isShowData && <ol>{renderTableData}</ol>}
                    </Table>
                  )}
                  {shouldShowBlogCTA && <BlogSidebarCTA headerText={ctaTitle} bodyText={ctaDescription} />}{' '}
                </BlogDetailsidebar>
              )}
              <Rightcontent>
                {renderHTMLContent()}
                <ShareButton>
                  <p>Share this post</p>
                  <Icon>
                    <TwitterShareButton url={currentPath} title={blogDetail?.title}>
                      <div>
                        <svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M8.74003 4.5571L8.77904 5.20048L8.12875 5.1217C5.76165 4.8197 3.6937 3.79553 1.93789 2.07546L1.0795 1.22198L0.858395 1.85224C0.39018 3.25719 0.689318 4.74092 1.66477 5.73883C2.18501 6.2903 2.06795 6.36909 1.17054 6.04083C0.858396 5.93578 0.58527 5.857 0.559258 5.89639C0.468216 5.98831 0.78036 7.18317 1.02747 7.65586C1.36563 8.31238 2.05495 8.95577 2.80929 9.33655L3.44659 9.63855L2.69224 9.65168C1.9639 9.65168 1.93789 9.66481 2.01593 9.94055C2.27605 10.794 3.30352 11.7 4.44805 12.0939L5.25442 12.3697L4.5521 12.7898C3.51162 13.3938 2.28905 13.7352 1.06649 13.7615C0.481222 13.7746 0 13.8271 0 13.8665C0 13.9978 1.58673 14.7331 2.51016 15.022C5.28043 15.8755 8.57095 15.5078 11.0421 14.0504C12.7979 13.0131 14.5537 10.9516 15.3731 8.95577C15.8153 7.89221 16.2575 5.94891 16.2575 5.01666C16.2575 4.41266 16.2965 4.33388 17.0248 3.61171C17.454 3.19154 17.8572 2.73197 17.9353 2.60067C18.0653 2.35119 18.0523 2.35119 17.389 2.57441C16.2835 2.96832 16.1274 2.9158 16.6737 2.32493C17.0769 1.90476 17.5581 1.1432 17.5581 0.919983C17.5581 0.880592 17.363 0.946244 17.1419 1.06442C16.9078 1.19572 16.3876 1.39268 15.9974 1.51085L15.295 1.73407L14.6578 1.30076C14.3066 1.06442 13.8124 0.80181 13.5522 0.723027C12.8889 0.539202 11.8745 0.565463 11.2762 0.775549C9.65045 1.36642 8.62297 2.88954 8.74003 4.5571Z'
                            fill='white'
                          />
                        </svg>
                      </div>
                    </TwitterShareButton>
                    <FacebookShareButton url={currentPath} title={blogDetail?.title}>
                      <div>
                        <svg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M8.94102 10.0485L9.43689 6.81553H6.33495V4.71845C6.33495 3.83374 6.76748 2.97087 8.1568 2.97087H9.56796V0.218447C9.56796 0.218447 8.28786 0 7.06456 0C4.50874 0 2.83981 1.54879 2.83981 4.35146V6.81553H0V10.0485H2.83981V17.8646C3.40995 17.9541 3.9932 18 4.58738 18C5.18155 18 5.76481 17.9541 6.33495 17.8646V10.0485H8.94102Z'
                            fill='white'
                          />
                        </svg>
                      </div>
                    </FacebookShareButton>
                    <LinkedinShareButton url={currentPath} title={blogDetail?.title}>
                      <div>
                        <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path d='M4.08781 5.9873H0.230469V17.577H4.08781V5.9873Z' fill='white' />
                          <path
                            d='M4.33949 2.40179C4.31446 1.26543 3.50184 0.399902 2.18226 0.399902C0.862691 0.399902 0 1.26543 0 2.40179C0 3.51462 0.837193 4.40506 2.13219 4.40506H2.15684C3.50184 4.40506 4.33949 3.51462 4.33949 2.40179Z'
                            fill='white'
                          />
                          <path
                            d='M17.9986 10.9315C17.9986 7.37166 16.0956 5.71484 13.5573 5.71484C11.5093 5.71484 10.5924 6.83975 10.0805 7.62889V5.9873H6.22266C6.2735 7.07482 6.22266 17.577 6.22266 17.577H10.0805V11.1044C10.0805 10.758 10.1055 10.4125 10.2075 10.1645C10.4863 9.47247 11.121 8.75602 12.1867 8.75602C13.5831 8.75602 14.1412 9.81877 14.1412 11.3762V17.5767H17.9984L17.9986 10.9315Z'
                            fill='white'
                          />
                        </svg>
                      </div>
                    </LinkedinShareButton>
                  </Icon>
                </ShareButton>
                <BlogCTA />
              </Rightcontent>
            </BlogContent>
          </Details>
        </Container>
      </MainContent>
    </>
  );
}
