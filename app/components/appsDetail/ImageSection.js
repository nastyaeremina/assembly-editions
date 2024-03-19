import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import Button from '../button/button';
import TemplateDetail from '../template/templateDetail';
import { isEmpty } from '../../helpers/helpers';

import { VideoClose, VideoPlay } from '../featurehero/styles';
import SVGComponent from '../../../public/images/svg/SVGComponent';

import {
  AppDetailSlider,
  ArrowIcon,
  ButtonImage,
  CloseIcon,
  ImageSection,
  LastImage,
  LeftContent,
  ResponsiveImageSection,
  SliderSection,
  SmallImageSection
} from './styles';

function AppImageSection({ imageList }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(
    (imageIndex) => {
      if (imageIndex) setCurrentImageIndex(imageIndex);
      setIsOpen(!isOpen);
    },
    [isOpen]
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === imageList.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageList.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <ImageSection>
        {
          <Image
            src={imageList[0].url}
            alt='image'
            width={614}
            height={344}
            className='big-image'
            onClick={() => onClick(0)}
          />
        }
        <SmallImageSection>
          {!isEmpty(imageList[1]) && (
            <Image src={imageList[1].url} alt='image' width={280} height={160} onClick={() => onClick(1)} />
          )}
          <LastImage>
            {!isEmpty(imageList[2].url) && (
              <Image src={imageList[2].url} alt='image' width={280} height={160} onClick={() => onClick(2)} />
            )}
            {/* Button on third Image*/}
            {imageList.length > 3 && (
              <ButtonImage>
                <Button
                  text={`+ ${imageList.length - 3} more`}
                  bgColor='#fff'
                  fontColor='#000'
                  className={'section1'}
                  onClick={() => onClick(3)}
                  hoverColor={'rgba(0, 0, 0, 0.5)'}
                />
              </ButtonImage>
            )}
          </LastImage>
        </SmallImageSection>
      </ImageSection>
      {isOpen ? (
        <AppDetailSlider>
          <CloseIcon onClick={onClick}>
            <SVGComponent name='slider-close-icon' width='56' height='56' viewBox='56' />
          </CloseIcon>
          <SliderSection>
            <ArrowIcon className='left-arrow' onClick={goToPreviousImage}>
              <SVGComponent name='left-arrow-icon' width='16' height='16' viewBox='16' />
            </ArrowIcon>
            <Image src={imageList[currentImageIndex]?.url} alt='image' width={614} height={344} className='big-image' />
            <ArrowIcon className='right-arrow' onClick={goToNextImage}>
              <SVGComponent name='right-arrow-icon' width='16' height='16' viewBox='16' />
            </ArrowIcon>
          </SliderSection>
        </AppDetailSlider>
      ) : null}
      <ResponsiveImageSection>
        {imageList.map((item, index) => (
          <Image
            key={`image_${index}`}
            src={item.url}
            alt='image'
            width={614}
            height={344}
            className='big-image'
            onClick={() => onClick(index)}
          />
        ))}
      </ResponsiveImageSection>
    </>
  );
}

export default AppImageSection;
