import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrap, SliderInner, SliderSub, SliderLine } from './styles';
import Link from 'next/link';

const ExtensionSlider = ({ data }) => {

  const settings = {
    dots: false,
    infinite: true,
    centerMode: false,
    // speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
    cssEase: 'linear',
    mobileFirst: true,
    adaptiveHeight: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    speed: 6000,
    pauseOnHover: true,
    FocusEvent: true,
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
        <SliderLine></SliderLine>
        <Slider {...settings}>
        {data?.map((item,index) =>{
            return <>
            <SliderInner href={item?.website}>
            <SliderSub>
              <Image src={item?.icon?.url} alt='red-icon' width={35} height={35} layout={'fixed'} />
              <h4>{item?.name}</h4>
            </SliderSub>
          </SliderInner>
       </>
        })}
        </Slider>
      </SliderWrap>
    </>
  );
};

export default ExtensionSlider;
