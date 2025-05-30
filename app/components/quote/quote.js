'use client';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Container } from '../../styles/commonStyles';
import { isEmpty } from '../../helpers/helpers';
import { QuoteMain, Mainss, QuoteTxt, QuoteSubTxt, QuoteImg } from './styles';

/**
 * Quote Component
 * @param {Object} props - Component props
 * @param {string} props.gradientImage - URL of the gradient background image
 * @param {Object} props.data - Data object containing quote information
 * @param {boolean} props.caseStudies - Flag indicating if this is a case study
 * @param {boolean} props.isStandardPage - Standard page flag
 * @returns {JSX.Element} - JSX markup for the Quote component
 */

export default function Quote({ gradientImage, data, caseStudies = false, isStandardPage }) {
  return (
    <QuoteMain gradientImage={gradientImage} caseStudies={caseStudies} isStandardPage={isStandardPage}>
      <Container>
        <Mainss>
          {/* Conditionally render the image if the URL is not empty */}
          {!isEmpty(data?.image?.url) && (
            <QuoteImg>
              <Image src={data?.image?.url} alt='red-icon' width={413} height={405} layout={'fixed'} />
            </QuoteImg>
          )}
          <QuoteTxt>
            <ReactMarkdown>{data?.quoteNew}</ReactMarkdown>
            <QuoteSubTxt>
              <span>{data?.name}</span>
              <p>{data?.role}</p>
            </QuoteSubTxt>
          </QuoteTxt>
        </Mainss>
      </Container>
    </QuoteMain>
  );
}
