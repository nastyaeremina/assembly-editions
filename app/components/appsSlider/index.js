import Image from 'next/image';
import { useMemo } from 'react';
import { isEmpty } from '../../helpers/helpers';
import { CardEnd, CardText, FeatureImg } from '../../styles/appsStyles';
import Slider from '../../components/feedback/slider';
import { APPS_TYPE, ClientAppInfoMessage, InternalAppInfoMessage, SliderHeight } from '../../constants/constant';
import { Animated, SliderInner, SliderLine } from './styles';
import AppTooltip from '../appsCards/appTooltip';

const AppsSlider = ({ data, isDetailSlider }) => {
  const featurecontentView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      if (isEmpty(item)) return null;
      const appVisibility = item?.appType === APPS_TYPE.CLIENT ? 'Client-facing' : 'Internal-facing';
      const appVisibilityInfo = item?.appType === APPS_TYPE.CLIENT ? ClientAppInfoMessage : InternalAppInfoMessage;
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
                <p>{appVisibility}</p>
                <AppTooltip message={appVisibilityInfo} iconSize='13' fill='var(--dark-gray)' style={{ top: 22 }} />
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
        <Slider speed={6} height={SliderHeight.AUTO} isHoverPause={true} gap={36} responsiveGap={20}>
          {featurecontentView}
        </Slider>
        <SliderLine></SliderLine>
      </Animated>
    </>
  );
};

export default AppsSlider;
