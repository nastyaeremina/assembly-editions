import Image from 'next/image';
import { Container } from '../../../styles/commonStyles';
import { QuoteSection, Mainss, QuoteTxt, QuoteSubTxt, ImageWrap } from './styles';

export default function Quote({ data }) {
  return (
    <>
      <QuoteSection>
        <Container>
          <Mainss>
            <ImageWrap>
              <Image src={data?.image?.url} alt='red-icon' width={413} height={404} layout={'fixed'} />
            </ImageWrap>
            <QuoteTxt>
              <p>{data?.quote}</p>
              <QuoteSubTxt>
                <span>{data?.name}</span>
                <p>{data?.role}</p>
              </QuoteSubTxt>
            </QuoteTxt>
          </Mainss>
        </Container>
      </QuoteSection>
    </>
  );
}
