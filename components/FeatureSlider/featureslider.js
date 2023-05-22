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

  const featurecontentView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return (
        <>
          <SliderInner href={'/apps/'} key={`slider_index_${index}`}>
            <SliderSub>
              <h4>Add new Copilot clients to Airtable rows</h4>
              <p>
                Every time a new client signs in the first time on Copilot add a row with the client’s information in
                Aritable.
              </p>
            </SliderSub>
            <SliderIcon>
              <Image src={featurelogo} alt='logo' width={40} height={40} />
              <Image src={featurelogo} alt='logo' width={40} height={40} />
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
