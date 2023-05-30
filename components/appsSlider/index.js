import Image from 'next/image';
import { useMemo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import featurelogo from '../../public/images/featurelogo.svg';
import { isEmpty } from '../../helpers/helpers';
import { SliderIcon, SliderInner, SliderWrap } from '../FeatureSlider/styles';
import { CardEnd, CardText, FeatureImg } from '../../styles/appsStyles';
import { SliderLine } from './styles';

const AppsSlider = ({ data, isDetailSlider }) => {
  const settings = {
    speed: 6000,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 4.5,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const featurecontentView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return (
        <>
          <SliderInner href={`/apps/directory/${item.slug}`} key={`slider_index_${index}`}>
            <FeatureImg>
              <Image src={item?.logo?.url} alt='main-logo' width={236} height={56} objectFit='contain' />
            </FeatureImg>
            <CardText>
              <h3>{'Airtable'}</h3>
              <p>{'Lets clients to submit forms by surfacing a form created in Jotform. '}</p>
            </CardText>
            <CardEnd>
              <p>{'Scheduling'}</p>
            </CardEnd>
          </SliderInner>
          <SliderLine></SliderLine>
        </>
      );
    });
  }, [data]);

  return (
    <>
      <SliderWrap isDetailSlider={isDetailSlider}>
        <Slider {...settings}>{featurecontentView}</Slider>
      </SliderWrap>
    </>
  );
};

export default AppsSlider;
