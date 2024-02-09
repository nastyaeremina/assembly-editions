'use client';
import Image from 'next/image';
import { useMemo } from 'react';
import { isEmpty } from '../../../helpers/helpers';
import { Container } from '../../../styles/commonStyles';
import { ModernSection, ModernWrap, HeadView, BoxWrap, BoxView, ImgIcon, DetailView } from './styles';

export default function Modern({ data, title, isStandardPage }) {
  console.log('title--', title);
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
                <div dangerouslySetInnerHTML={{ __html: finalTitle }} />
              </h2>
            </HeadView>
            <BoxWrap>{BoxListView}</BoxWrap>
          </ModernWrap>
        </Container>
      </ModernSection>
    </>
  );
}
