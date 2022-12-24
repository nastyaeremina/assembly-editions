import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrap, SliderInner, SliderSub, SliderLine } from './styles';
import Link from 'next/link';

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
                <SliderInner href={item?.website}>
                  <SliderSub>
                    <Image src={item?.icon?.url} alt='red-icon' width={35} height={35} layout={'fixed'} />
                    <h4>{item?.name}</h4>
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
