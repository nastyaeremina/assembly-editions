import React, { useMemo } from 'react';
import Image from 'next/image';
import { Container } from '../../styles/commonStyles';
import rightphoto from '../../public/images/price.png';
import { convertHighlights, isEmpty } from '../../helpers/helpers';
import { Detail, Last, LastDroplist, LeftCard, Percentage, RightCard, Section, TestimonialCard, Top } from './styles';

export default function CustomerTestimonial({ logo, body, slug, highlightsData }) {
  const renderHighlightView = useMemo(() => {
    const newList = convertHighlights(highlightsData);

    if (isEmpty(newList)) return null;
    return (
      <Percentage>
        {newList?.map((item, index) => {
          return (
            <Section key={`highlight_index_${index}`}>
              <span>{item?.title}</span>
              <p>{item?.desc}</p>
            </Section>
          );
        })}
      </Percentage>
    );
  }, [highlightsData]);

  return (
    <Container>
      <TestimonialCard>
        <LeftCard>
          <Top>
            <Image src={logo} alt='customer' width={218} height={50} className='top-logo' />
            <Detail>{body}</Detail>
            {!isEmpty(highlightsData) && renderHighlightView}
          </Top>
          <LastDroplist>
            <Last className='icon-link'>
              <a href={`case-study/${slug}`} className='learn-link mb0'>
                View full case study
                <svg width='16' height='12' viewBox='0 0 16 12' fill='none' class='HoverArrow'>
                  <path
                    d='M5.7998 1.37109L10.4283 5.99958L5.7998 10.6281'
                    stroke-width='1.92854'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='HoverArrow__tipPath'
                  />
                  <path
                    d='M10.33 5.99951H1.5'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='HoverArrow__linePath'
                  />
                </svg>
              </a>
            </Last>
          </LastDroplist>
        </LeftCard>
        <RightCard>
          <Image src={rightphoto} alt='customer' className='right' />
        </RightCard>
      </TestimonialCard>
    </Container>
  );
}
