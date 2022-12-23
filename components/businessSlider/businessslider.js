import Image from 'next/image';
import Slider from 'react-slick';
import { useMemo } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slide, SliderWrap, WrapImage, LeftBorder, RightBorder, WrapSlide, SlideImg } from './styles';

const BusinessSlider = ({ data }) => {
  var settings = {
    mobileFirst: true,
    centerMode: false,
    adaptiveHeight: true,
    slidesToScroll: 2,
    variableWidth: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    speed: 8000,
    pauseOnHover: false,
    cssEase: 'linear',
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
          mobileFirst: true,
          slidesToShow: 2,
          centerMode: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          mobileFirst: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          variableWidth: true,
          infinite: false,
          autoplay: false,
          autoplaySpeed: 0,
          arrows: false,
          speed: 0
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
                <WrapSlide className='mydiv'>
                  <LeftBorder className='hide'></LeftBorder>
                  <WrapImage>
                    <SlideImg>
                      <Image src={item?.image?.url} alt='red-icon' className='zoom' width={350} height={350} />
                    </SlideImg>
                    <h4>{item?.name}</h4>
                    <p className='hide'>{item?.quote}</p>
                  </WrapImage>
                  <RightBorder className='hide'> </RightBorder>
                </WrapSlide>
              </>
            );
          })}
        </Slider>
      </SliderWrap>
    </>
  );
};

export default BusinessSlider;
