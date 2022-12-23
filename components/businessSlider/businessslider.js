import Image from 'next/image';
import Slider from 'react-slick';
import { useMemo } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slide, SliderWrap, WrapImage, LeftBorder, RightBorder, WrapSlide, SlideImg } from './styles';

const BusinessSlider = ({ data }) => {
  var settings = {
    speed: 700,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 3.5,
    slidesToScroll: 0.1,
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
          centerMode: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe:true,
          dots: true,
          centerMode: true,
          variableWidth: true,
          autoplay: false,
          speed: 300,
          cssEase: 'cubic-bezier(0.420, 0.000, 0.580, 1.00)',
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
