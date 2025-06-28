import { useCallback, useMemo } from 'react';
import { isEmpty } from '../../helpers/helpers';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import FeedBack from './feedback';
import { BannerSection } from './styles';
import Slider from './slider';

const Banner = ({ data }) => {
  const logo = useCallback((sourceName) => {
    switch (sourceName) {
      case 'G2':
        return <SVGComponent name='g2-logo-icon' width='28' height='28' viewBox='0 0 24 24' />;
      case 'Slack':
        return <SVGComponent name='slack-logo-icon' width='28' height='28' viewBox='0 0 28 28' />;
      case 'Twitter':
        return <SVGComponent name='x-logo-black' width='28' height='28' viewBox='0 0 28 28' />;
      default:
        return '';
    }
  }, []);

  const renderCustomerCard = useCallback(
    (list) => {
      return (
        <section>
          {list?.map((item, index) => {
            return (
              <FeedBack
                key={`feedback_index_${index}`}
                profile={item?.imageHeadshot?.url}
                logoicon={logo(item?.reviewSource)}
                name={item?.name}
                caption={item?.role}
                body={item?.quoteNew}
                isStar={item?.reviewSource === 'G2'}
              />
            );
          })}
        </section>
      );
    },
    [logo]
  );

  const feedbackView = useMemo(() => {
    if (isEmpty(data)) return null;
    // Create a new array by repeating the original data three times to ensure that each column displays one item, allowing for three items to be shown at once.
    const expandedFeedbackData = [...data, ...data, ...data];
    const sections = [];

    for (let i = 0; i < expandedFeedbackData.length; i += 3) {
      sections.push(renderCustomerCard(expandedFeedbackData.slice(i, i + 3)));
    }

    return sections;
  }, [data, renderCustomerCard]);

  return (
    <BannerSection>
      <Slider speed={6}>{feedbackView}</Slider>
    </BannerSection>
  );
};

export { Banner };
