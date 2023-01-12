import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrap, WrapImage, LeftBorder, RightBorder, WrapSlide, SlideImg } from './styles';
import useMobileDevice from '../../hooks/useMobileDevice';

const BusinessSlider = ({ data }) => {
  const mobile = useMobileDevice();
  var settings = {
    speed: 700,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 4.1,
    slidesToScroll: 0.1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 3600,
        settings: {
          slidesToShow: 7.5
        }
      },
      {
        breakpoint: 3400,
        settings: {
          slidesToShow: 7
        }
      },
      {
        breakpoint: 3200,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 2800,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 2600,
        settings: {
          slidesToShow: 5.5
        }
      },
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 2100,
        settings: {
          slidesToShow: 4.4
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4.1
        }
      },
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 3.8
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3.6
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3.1
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.6,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2.1,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          dots: true,
          centerMode: true,
          variableWidth: true,
          autoplay: false,
          speed: 300,
          cssEase: 'cubic-bezier(0.420, 0.000, 0.580, 1.00)'
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
                      <Image src={`${item?.image?.url}?w=800&h=800&fit=thumb`} alt='red-icon' className='zoom' width={354} height={354} />
                    </SlideImg>
                    <h4>{item?.industry}</h4>
                    <p className='hide'>{item?.quote}</p>
                  </WrapImage>
                  <RightBorder className='hide'> </RightBorder>
                </WrapSlide>
              </>
            );
          })}
          {
            mobile?(null):(
              data?.map((item, index) => { 
                return (
                  <>
                    <WrapSlide className='mydiv'>
                      <LeftBorder className='hide'></LeftBorder>
                      <WrapImage>
                        <SlideImg>
                          <Image src={`${item?.image?.url}?w=800&h=800&fit=thumb`} alt='red-icon' className='zoom' width={354} height={354} />
                        </SlideImg>
                        <h4>{item?.industry}</h4>
                        <p className='hide'>{item?.quote}</p>
                      </WrapImage>
                      <RightBorder className='hide'> </RightBorder>
                    </WrapSlide>
                  </>
                );
              })
            )
          }
        </Slider>
      </SliderWrap>
    </>
  );
};

export default BusinessSlider;
