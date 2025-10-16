'use client';
import Image from 'next/image';
import { useMemo } from 'react';
import { isEmpty } from '../../../helpers/helpers';
import { Container } from '../../../styles/commonStyles';
import { ModernSection, ModernWrap, BoxWrap, BoxView, ImgIcon, DetailView } from './styles';
import SectionHeader from '../../sectionHeader/sectionHeader';

/**
 * Modern Component
 * @param {Object} props - Component props
 * @param {Object[]} props.data - Array of data objects for rendering boxes
 * @param {string} props.title - The title text
 * @param {string} props.primaryButtonText - The primary button text
 * @param {string} props.secondaryButtonText - The secondary button text
 * @param {string} props.primaryButtonLink - The primary button link
 * @param {string} props.secondaryButtonLink - The secondary button link
 * @returns {JSX.Element} - JSX markup for the Modern component
 */

export default function Modern({
  data,
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}) {
  const BoxListView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return (
        <BoxView key={`boxview_index_${index}`}>
          {!isEmpty(item?.image?.url) && (
            <ImgIcon>
              <Image src={item?.image?.url} width={44} height={44} alt='file-icon' />
            </ImgIcon>
          )}
          <DetailView>
            <h4>{item?.title}</h4>
            <p>{item?.description}</p>
          </DetailView>
        </BoxView>
      );
    });
  }, [data]);

  return (
    <ModernSection>
      <Container>
        <ModernWrap>
          <SectionHeader
            title={title}
            description={description}
            primaryButtonLink={primaryButtonLink}
            primaryButtonText={primaryButtonText}
            secondaryButtonLink={secondaryButtonLink}
            secondaryButtonText={secondaryButtonText}
          />
          <BoxWrap>{BoxListView}</BoxWrap>
        </ModernWrap>
      </Container>
    </ModernSection>
  );
}
