import Image from 'next/image';
import { useMemo } from 'react';
import { isEmpty } from '../../../helpers/helpers';
import { Container } from '../../../styles/commonStyles';
import { ModernSection, ModernWrap, HeadView, BoxWrap, BoxView, ImgIcon, DetailView } from './styles';

export default function Modern({ data }) {

  const BoxListView = useMemo(() => {
    if (isEmpty(data)) return null
    return data?.map((item, index) => {
      return <BoxView key={`boxview_index_${index}`}>
        <ImgIcon>
          <Image src={item?.image?.url} width={44} height={44} alt='file-icon' />
        </ImgIcon>
        <DetailView>
          <h4>{item?.title}</h4>
          <p>
            {item?.description}
          </p>
        </DetailView>
      </BoxView>
    })
  }, [data])

  return (
    <>
      <ModernSection>
        <Container>
          <ModernWrap>
            <HeadView>
              <h3>
                Your customers deserve a modern client experience<span>.</span>
              </h3>
            </HeadView>
            <BoxWrap>
              {BoxListView}
              {/* <BoxView>
                <ImgIcon>
                  <Image src='/images/filemodule.svg' width={44} height={44} alt='file-icon' />
                </ImgIcon>
                <DetailView>
                  <h4>Files</h4>
                  <p>
                    Your dedicated account manager will be on hand to discuss and advise on the best solutions to help
                    you reach your goals.
                  </p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image src='/images/setting-icon.svg' width={44} height={44} alt='setting-icon' />
                </ImgIcon>
                <DetailView>
                  <h4>Automations</h4>
                  <p>
                    Your dedicated account manager will be on hand to discuss and advise on the best solutions to help
                    you reach your goals.
                  </p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image src='/images/costicon.svg' width={44} height={44} alt='file-icon' />
                </ImgIcon>
                <DetailView>
                  <h4>Cost-effective</h4>
                  <p>
                    Your dedicated account manager will be on hand to discuss and advise on the best solutions to help
                    you reach your goals.
                  </p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image src='/images/filemodule.svg' width={44} height={44} alt='file-icon' />
                </ImgIcon>
                <DetailView>
                  <h4>Files</h4>
                  <p>
                    Your dedicated account manager will be on hand to discuss and advise on the best solutions to help
                    you reach your goals.
                  </p>
                </DetailView>
              </BoxView> */}
            </BoxWrap>
          </ModernWrap>
        </Container>
      </ModernSection>
    </>
  );
}
