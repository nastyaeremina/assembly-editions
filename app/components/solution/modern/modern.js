'use client';
import Image from 'next/image';
import { useMemo } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { isEmpty } from '../../../helpers/helpers';
import { Container } from '../../../styles/commonStyles';
import { Body } from '../../automationcard/styles';
import ButtonGroup from '../../ButtonGroup/buttonGroup';
import { ModernSection, ModernWrap, HeadView, BoxWrap, BoxView, ImgIcon, DetailView } from './styles';

/**
 * Modern Component
 * @param {Object} props - Component props
 * @param {Object[]} props.data - Array of data objects for rendering boxes
 * @param {string} props.title - The title text
 * @param {boolean} props.isStandardPage - Standard page flag
 * @param {string} props.primaryButtonText - The primary button text
 * @param {string} props.secondaryButtonText - The secondary button text
 * @param {string} props.primaryButtonLink - The primary button link
 * @param {string} props.secondaryButtonLink - The secondary button link
 * @returns {JSX.Element} - JSX markup for the Modern component
 */

export default function Modern({
  data,
  title,
  isStandardPage,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}) {
  // Split the title by commas and dots, then wrap commas and dots in span elements
  const titleSplitList = title?.split(',');
  const seprateWithDotList = titleSplitList?.join(`<span>,</span>`)?.split('.');
  const finalTitle = seprateWithDotList?.join(`<span>.</span>`);

  const BoxListView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return (
        <BoxView key={`boxview_index_${index}`}>
          {!isEmpty(item?.image?.url) && (
            <ImgIcon>
              <Image src={item?.image?.url} width={44} height={44} alt='file-icon' className='desktop' />
              <Image src={item?.image?.url} width={24} height={24} alt='file-icon' className='mobile' />
            </ImgIcon>
          )}
          <DetailView>
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
          </DetailView>
        </BoxView>
      );
    });
  }, [data]);

  return (
    <>
      <ModernSection isStandardPage={isStandardPage}>
        <Container>
          <ModernWrap>
            <HeadView>
              <h2>
                {/* Render the title with special characters handled */}
                <div dangerouslySetInnerHTML={{ __html: finalTitle }} />
              </h2>
              <Body>
                <ReactMarkdown>{description}</ReactMarkdown>
              </Body>
              <ButtonGroup
                primaryButtonLink={primaryButtonLink}
                primaryButtonText={primaryButtonText}
                secondaryButtonLink={secondaryButtonLink}
                secondaryButtonText={secondaryButtonText}
                hasMarginTop={28}
              />
            </HeadView>
            <BoxWrap>{BoxListView}</BoxWrap>
          </ModernWrap>
        </Container>
      </ModernSection>
    </>
  );
}
