'use client'

import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { SliderWrap, SliderInner, SliderSub, SliderLine } from './styles';

const ExtensionSlider = ({ data }) => {
  const settings = {
    speed: 6000,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 4.5,
    slidesToScroll: 1,
    pauseOnHover: true,
    variableWidth: true,
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
  return (
    <>
      <SliderWrap>
        <Slider {...settings}>
          {data?.map((item, index) => {
            return (
              <>
                <SliderInner href={'/apps/directory/'+item?.slug}>
                  <SliderSub>
                    <Image src={item?.icon?.url} alt='red-icon' width={35} height={35} layout={'fixed'} />
                    <p>{item?.name}</p>
                  </SliderSub>
                </SliderInner>
                <SliderLine></SliderLine>
              </>
            );
          })}
        </Slider>
      </SliderWrap>
    </>
  );
};

export default ExtensionSlider;
