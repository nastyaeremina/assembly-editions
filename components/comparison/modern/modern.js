import Image from "next/image";
import { Container } from "../../../styles/commonStyles";
import { BoxView, BoxWrap, DetailView, HeadView, ImgIcon, ModernSection, ModernWrap } from "../../solution/modern/styles";
import comparison from '../../../public/images/comparison.png';

export default function Modern() {
    // const BoxListView = useMemo(() => {
    //   if (isEmpty(data)) return null;
    //   return data?.map((item, index) => {
    //     return (
    //       <BoxView key={`boxview_index_${index}`}>
    //         <ImgIcon>
    //           <Image src={item?.image?.url} width={44} height={44} alt='file-icon' className='desktop' />
    //           <Image src={item?.image?.url} width={24} height={24} alt='file-icon' className='mobile' />
    //         </ImgIcon>
    //         <DetailView>
    //           <h4>{item?.title}</h4>
    //           <p>{item?.description}</p>
    //         </DetailView>
    //       </BoxView>
    //     );
    //   });
    // }, [data]);
  return (
    <>
      <ModernSection>
        <Container>
          <ModernWrap>
            <HeadView>
              <h2>
                <div>Meet the modern Suitedash alternative that will delight your customers.</div>
              </h2>
            </HeadView>
            <BoxWrap>
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
            </BoxWrap>
          </ModernWrap>
        </Container>
      </ModernSection>
    </>
  );
}
