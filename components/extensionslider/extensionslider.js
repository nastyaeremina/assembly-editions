import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrap, SliderInner, SliderSub, SliderLine } from './styles';
import Link from 'next/link';

const ExtensionSlider = ({ data }) => {
  console.log('data', data);

  // const slideView = useMemo(() => {
  //   return data?.map((item, index) => {
  //     return (
  //       <Slide key={`slideview_index_${index}`}>
  //         <WrapImage>
  //           <Image
  //             src="/images/slider.png"
  //             alt="arrow-icon"
  //             width={350}
  //             height={350}
  //           />
  //         </WrapImage>
  //       </Slide>
  //     );
  //   });
  // }, [data]);

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
          <SliderInner href='/apps/calendly'>
            <SliderSub>
              <Image src='/images/Favicon.svg' alt='red-icon' width={35} height={35} layout={'fixed'} />
              <h4>Calendly</h4>
            </SliderSub>
          </SliderInner>
          <SliderInner href='/apps/jotfrom'>
            <SliderSub>
              <Image src='/images/jotfrom.svg' alt='red-icon' width={35} height={35} layout={'fixed'} />
              <h4>Jotform</h4>
            </SliderSub>
          </SliderInner>
          <SliderInner href='/apps/airtable'>
            <SliderSub>
              <Image src='/images/airtable.svg' alt='red-icon' width={35} height={35} layout={'fixed'} />
              <h4>Airtable</h4>
            </SliderSub>
          </SliderInner>
          <SliderInner href='/apps/calendly'>
            <SliderSub>
              <Image src='/images/Favicon.svg' alt='red-icon' width={35} height={35} layout={'fixed'} />
              <h4>Calendly</h4>
            </SliderSub>
          </SliderInner>
          <SliderInner href='/apps/jotform'>
            <SliderSub>
              <Image src='/images/jotfrom.svg' alt='red-icon' width={35} height={35} layout={'fixed'} />
              <h4>Jotform</h4>
            </SliderSub>
          </SliderInner>
          <SliderInner href='/apps/airtable'>
            <SliderSub>
              <Image src='/images/airtable.svg' alt='red-icon' width={35} height={35} layout={'fixed'} />
              <h4>Airtable</h4>
            </SliderSub>
          </SliderInner>
        </Slider>
      </SliderWrap>
    </>
  );
};

export default ExtensionSlider;
