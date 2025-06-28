import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Container } from '../../../styles/commonStyles';
import { QuoteSection, Mainss, QuoteTxt, QuoteSubTxt, ImageWrap } from './styles';

export default function Quote({ data, isComparison = false, isMasterComparison = false }) {
  return (
    <>
      <QuoteSection isComparison={isComparison} isMasterComparison={isMasterComparison}>
        <Container>
          <Mainss>
            <ImageWrap>
              <Image src={data?.image?.url} alt='red-icon' width={413} height={404} layout={'fixed'} />
            </ImageWrap>
            <QuoteTxt>
              <ReactMarkdown>{data?.quoteNew}</ReactMarkdown>
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
