import Image from 'next/image';
import { useMemo } from 'react';
import { isEmpty } from '../../helpers/helpers';
import { CardEnd, CardText, FeatureImg } from '../../styles/appsStyles';
import Slider from '../../components/feedback/slider';
import { SliderHeight } from '../../constants/constant';
import { Animated, SliderInner, SliderLine } from './styles';

const AppsSlider = ({ data, isDetailSlider }) => {
  const featurecontentView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      if (isEmpty(item)) return null;
      return (
        <>
          <SliderInner href={`/apps/directory/${item?.slug}`} key={`slider_index_${index}`}>
            <div className='appsslider-card'>
              <FeatureImg>
                <Image
                  src={item?.logo?.url}
                  alt='main-logo'
                  width={236}
                  height={56}
                  objectFit='contain'
                  className='logo'
                />
              </FeatureImg>
              <CardText>
                <h3>{item?.name}</h3>
                <p>{item?.description}</p>
              </CardText>
              <CardEnd>
                <p>{item?.partnerAppCategoriesCollection?.items[0]?.name}</p>
              </CardEnd>
            </div>
          </SliderInner>
        </>
      );
    });
  }, [data]);

  return (
    <>
      <Animated isDetailSlider={isDetailSlider}>
        <Slider speed={6} height={SliderHeight.AUTO} isHoverPause={true}>
          {featurecontentView}
        </Slider>
        <SliderLine></SliderLine>
      </Animated>
    </>
  );
};

export default AppsSlider;
