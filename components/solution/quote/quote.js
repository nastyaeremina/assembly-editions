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
              <h3>
                {data?.quote}
              </h3>
              <QuoteSubTxt>
                <h4>{data?.name}</h4>
                <p>{data?.role}</p>
              </QuoteSubTxt>
            </QuoteTxt>
          </Mainss>
        </Container>
      </QuoteSection>
    </>
  );
}
