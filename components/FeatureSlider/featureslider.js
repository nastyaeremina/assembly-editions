import Image from 'next/image';
import { useMemo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import featurelogo from '../../public/images/featurelogo.svg';
import { isEmpty } from '../../helpers/helpers';
import { SliderIcon, SliderInner, SliderLine, SliderSub, SliderWrap } from './styles';

const FeatureSlider = ({ data, isDetailSlider }) => {
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
  console.log('data', data);
  const featurecontentView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return (
        <>
          <SliderInner href={`/automations/directory/${item?.slug}`} key={`slider_index_${index}`}>
            <SliderSub>
              <h4>{item?.name}</h4>
              <p>{item?.description}</p>
            </SliderSub>
            <SliderIcon>
              {item?.productLogosCollection?.items?.map((logo, index) => {
                return (
                  <Image
                    key={`automation_logo_${index}`}
                    src={logo?.url}
                    alt='logo'
                    width={40}
                    height={40}
                    className='logo'
                  />
                );
              })}
            </SliderIcon>
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

export default FeatureSlider;
