import Image from 'next/image';
import { useMemo } from 'react';
import { Container } from '../../../styles/commonStyles';
import {
  BoxView,
  BoxWrap,
  DetailView,
  HeadView,
  ImgIcon,
  ModernSection,
  ModernWrap
} from '../../solution/modern/styles';
import { isEmpty } from '../../../helpers/helpers';

export default function Modern({ title, data }) {
  const renderBoxListView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return (
        <BoxView key={`boxview_index_${index}`}>
          <ImgIcon>
            <Image src={item?.image?.url} width={44} height={44} alt='file-icon' className='desktop' />
            <Image src={item?.image?.url} width={24} height={24} alt='file-icon' className='mobile' />
          </ImgIcon>
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
      <ModernSection>
        <Container>
          <ModernWrap>
            <HeadView>
              {!isEmpty(title) && (
                <h2>
                  <div>{title}</div>
                </h2>
              )}
            </HeadView>

            {!isEmpty(data) && (
              <BoxWrap>
                {renderBoxListView}
                {/* <BoxView>
                <ImgIcon>
                  <Image src={comparison} width={44} height={44} alt='file-icon' className='desktop' />
                  <Image src={comparison} width={24} height={24} alt='file-icon' className='mobile' />
                </ImgIcon>
                <DetailView>
                  <h3>Files</h3>
                  <p>
                    Your dedicated account manager will be on hand to discuss and advise on the best solutions to help
                    you reach your goals.
                  </p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image src={comparison} width={44} height={44} alt='file-icon' className='desktop' />
                  <Image src={comparison} width={24} height={24} alt='file-icon' className='mobile' />
                </ImgIcon>
                <DetailView>
                  <h3>Files</h3>
                  <p>
                    Your dedicated account manager will be on hand to discuss and advise on the best solutions to help
                    you reach your goals.
                  </p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image src={comparison} width={44} height={44} alt='file-icon' className='desktop' />
                  <Image src={comparison} width={24} height={24} alt='file-icon' className='mobile' />
                </ImgIcon>
                <DetailView>
                  <h3>Files</h3>
                  <p>
                    Your dedicated account manager will be on hand to discuss and advise on the best solutions to help
                    you reach your goals.
                  </p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image src={comparison} width={44} height={44} alt='file-icon' className='desktop' />
                  <Image src={comparison} width={24} height={24} alt='file-icon' className='mobile' />
                </ImgIcon>
                <DetailView>
                  <h3>Files</h3>
                  <p>
                    Your dedicated account manager will be on hand to discuss and advise on the best solutions to help
                    you reach your goals.
                  </p>
                </DetailView>
              </BoxView> */}
              </BoxWrap>
            )}
          </ModernWrap>
        </Container>
      </ModernSection>
    </>
  );
}
