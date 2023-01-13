import Image from 'next/image';
import { useMemo } from 'react';
import { isEmpty } from '../../../helpers/helpers';
import { Container } from '../../../styles/commonStyles';
import { ModernSection, ModernWrap, HeadView, BoxWrap, BoxView, ImgIcon, DetailView } from './styles';

export default function Modern({ data, title }) {
  const BoxListView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return (
        <BoxView key={`boxview_index_${index}`}>
          <ImgIcon>
            <Image src={item?.image?.url} width={44} height={44} alt='file-icon' className='desktop' />
            <Image src={item?.image?.url} width={24} height={24} alt='file-icon' className='mobile' />
          </ImgIcon>
          <DetailView>
            <h4>{item?.title}</h4>
            <p>{item?.description}</p>
          </DetailView>
        </BoxView>
      );
    });
  }, [data]);

  return (
    <>
      <ModernSection>
        <Container>
          <ModernWrap>
            <HeadView>
              <h3>
                {title}
                <span>.</span>
              </h3>
            </HeadView>
            <BoxWrap>
              {BoxListView}
            </BoxWrap>
          </ModernWrap>
        </Container>
      </ModernSection>
    </>
  );
}
